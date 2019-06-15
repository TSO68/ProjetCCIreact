import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

class CommentItem extends Component {

    render() {

        const comment = this.props.comment;

        return (
            <TouchableOpacity style={styles.item_container}>
                <Text style={styles.author}>
                    {comment.author}
                </Text>
                <Text style={styles.text}>
                    {comment.text}
                </Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    item_container: {
        borderWidth: 1,
        borderColor: '#d6d7da',
        marginBottom: 15,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: '#ffffff'
    },
    author: {
        fontWeight: 'bold',
        fontSize: 30,
        marginLeft: 5,
        marginRight: 5,
        paddingRight: 5
    },
    text: {
        fontStyle: 'italic',
        fontSize: 20,
        marginLeft: 5,
        marginRight: 5,
        color: '#333333'
    },
});

export default CommentItem;