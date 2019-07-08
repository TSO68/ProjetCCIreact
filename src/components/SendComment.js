import React, {Component} from 'react';
import {StyleSheet, ScrollView, TextInput, TouchableOpacity, Alert, Text} from 'react-native';

class SendComment extends Component {
    state = {
        author: "",
        comment: ""
    };

    _sendComment () {
        const author = this.state.author;
        const comment = this.state.comment;

        fetch("https://projetcci.tk/api/v1/Api.php?apicall=createcomment", {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded',
            }),
            body: "author=" + author + "&text=" + comment
        })
            .then((response) => response.text())
            .then((responseText) => {
                console.log("response", responseText);

                Alert.alert(
                    'Merci',
                    'Le commentaire a été envoyé',
                    [
                        {text: 'OK'},
                    ],
                    {cancelable: false},
                );

                this.setState({
                    author: "",
                    comment: ""
                })
            })
            .catch((error) => {
                console.error(error);

                Alert.alert(
                    'Erreur',
                    "Le commentaire n'a pas été envoyé",
                    [
                        {text: 'OK'},
                    ],
                    {cancelable: false},
                )
            });
    }

    _checkTextInput = () => {
        if (this.state.author !== '' && this.state.comment !== '') {
            this._sendComment();
        } else if (this.state.author === '' && this.state.comment === '') {
            Alert.alert(
                'Erreur',
                "Veuillez saisir un auteur et un commentaire",
                [
                    {text: 'OK'},
                ],
                {cancelable: false},
            )
        } else if (this.state.author === '') {
            Alert.alert(
                'Erreur',
                "Veuillez saisir un auteur",
                [
                    {text: 'OK'},
                ],
                {cancelable: false},
            )
        } else if (this.state.comment === '') {
            Alert.alert(
                'Erreur',
                "Veuillez saisir un commentaire",
                [
                    {text: 'OK'},
                ],
                {cancelable: false},
            )
        }
    };

    render() {
        return (
            <ScrollView style={styles.main_container} >
                <TextInput
                    style={styles.input}
                    placeholder="Auteur"
                    maxLength={40}
                    onChangeText={(value) => this.setState({author: value})}
                    value={this.state.author}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Commentaire"
                    multiline={true}
                    onChangeText={(value) => this.setState({comment: value})}
                    value={this.state.comment}
                />

                <TouchableOpacity
                    style={styles.send_container}
                    onPress={() => this._checkTextInput()}
                >
                    <Text style={styles.send_title}>
                        Envoyer commentaire
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        height: "100%",
        backgroundColor: '#2c2f33'
    },
    input: {
        marginTop: 10,
        marginBottom: 5,
        marginLeft: 5,
        marginRight: 5,
        fontSize: 20,
        backgroundColor: '#ffffff'
    },
    send_container: {
        height: 40,
        marginTop: 10,
        marginBottom: 5,
        marginLeft: 5,
        marginRight: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#99aab5'
    },
    send_title: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#ffffff'
    },
});

export default SendComment;