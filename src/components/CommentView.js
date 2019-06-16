import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

class CommentView extends Component {

    render() {

        const { comment, /*displayCommentItem,*/ deleteTheComment } = this.props;

        return (
            <View
                style={styles.item_container}
                //onPress={() => displayCommentItem(comment.id)}
            >
                <View
                    style={styles.title_container}
                >
                    <Text style={styles.title} numberOfLines={1}>
                        {comment.id}. {comment.author}
                    </Text>
                    <TouchableOpacity
                        style={styles.delete_container}
                        onPress={() => deleteTheComment(comment.id)}
                    >
                        <Text style={styles.delete_title}>
                            Supprimer
                        </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.text}>
                        {comment.text}
                    </Text>
                </View>
            </View>
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
    title_container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        flex: 1,
        fontWeight: 'bold',
        fontSize: 30,
        marginLeft: 5,
        marginRight: 5,
        paddingRight: 5
    },
    delete_container: {
        marginTop: 3,
        marginBottom: 3,
        marginLeft: 3,
        marginRight: 3,
        backgroundColor: '#99aab5'
    },
    delete_title: {
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 3,
        marginRight: 3,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ffffff'
    },
    text: {
        fontStyle: 'italic',
        fontSize: 20,
        marginLeft: 5,
        marginRight: 5,
        color: '#333333'
    }
});

export default CommentView;