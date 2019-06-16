import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

class CommentView extends Component {

    render() {

        const { comment, displayCommentItem } = this.props;

        return (
            <TouchableOpacity
                style={styles.item_container}
                onPress={() => displayCommentItem(comment.id)}
            >
                <Text style={styles.title}>
                    {comment.id}. {comment.author}
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
        marginTop: 10,
        marginBottom: 5,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: '#ffffff'
    },
    title: {
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

export default CommentView;