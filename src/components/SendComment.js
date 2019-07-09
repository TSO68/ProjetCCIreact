import React, {Component} from 'react';
import {StyleSheet, ScrollView, TextInput, TouchableOpacity, Text, Alert} from 'react-native';

class SendComment extends Component {
    state = {
        author: "",
        comment: ""
    };

    /**
     * Send author and comment to CommentsList component
     * @private
     */
    _sendTheComment() {
        const author = this.state.author;
        const comment = this.state.comment;

        if (author && comment) {
            this.props.navigation.push('CommentsList',
                {
                    author: author,
                    comment: comment,
                }
            );

            this.setState({
                author: "",
                comment: ""
            })
        } else {
            this._errorMessage()
        }
    }

    /**
     * Shows an error message if author or/and comment input is/are empty
     * @private
     */
    _errorMessage() {
        Alert.alert(
            'Erreur',
            'Veuillez saisir un auteur ou un commentaire',
            [
                {text: 'OK'},
            ],
            {cancelable: false},
        )
    }

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
                    onPress={() => this._sendTheComment()}
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