import React, {Component} from 'react';
import {StyleSheet, ScrollView, TextInput, TouchableOpacity, Alert, Text} from 'react-native';
import { createComment } from "../API/customApi";

class SendComment extends Component {
    state = {
        author: "",
        comment: ""
    };

    /**
     * Check if text inputs are filled
     * If yes, call the createComment function from API
     * If not, alert user
     * @private
     */
    _checkTextInput = () => {
        const author = this.state.author;
        const comment = this.state.comment;

        if (author !== '' && comment !== '') {
            createComment(author, comment);
            this.setState({
                author: "",
                comment: ""
            })
        } else if (author === '' && comment === '') {
            Alert.alert(
                'Erreur',
                "Veuillez saisir un auteur et un commentaire",
                [
                    {text: 'OK'},
                ],
                {cancelable: false},
            )
        } else if (author === '') {
            Alert.alert(
                'Erreur',
                "Veuillez saisir un auteur",
                [
                    {text: 'OK'},
                ],
                {cancelable: false},
            )
        } else if (comment === '') {
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