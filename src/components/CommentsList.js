import React, {Component} from 'react';
import {StyleSheet, ScrollView, FlatList, Text, TouchableOpacity, Alert} from 'react-native';
import CommentItem from "./CommentItem";
import {getComments, deleteComment, createComment} from "../API/customApi";

class CommentsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            comments: [],
        };
    };

    /**
     * Get the comment list from the API
     * @private
     */
    _loadComments() {
        getComments().then(data => {
                //console.log(data);
                this.setState({ comments: data.comments})
            }
        );
    };

    /**
     * Delete a comment with his id
     * @param idComment, the id of a comment
     * @private
     */
    _deleteComment = (idComment) => {
        deleteComment(idComment)
            .then(
                Alert.alert(
                    'Commentaire supprimé',
                    'Le commentaire a été supprimé de la base de données',
                    [
                        {text: 'OK'},
                    ],
                    {cancelable: false},
                )
            );
        this._loadComments();
    };

    /**
     * Reload the comment list
     * @private
     */
    _refreshComments() {
        this._loadComments();
    };

    /**
     * Load comments on mounting
     */
    componentWillMount() {
        this._loadComments()
    };

    /**
     * Get author and comment from SendComment component
     */
    componentDidMount() {
        const { navigation } = this.props;

        const author = navigation.getParam('author');
        const comment = navigation.getParam('comment');

        console.log("new:", author + " " + comment);

        if (author && comment) {
            createComment(author, comment)
                .then(() => this._loadComments());
        }
    }

    render() {
        return (
            <ScrollView style={styles.main_container}>
                <TouchableOpacity
                    style={styles.refresh_container}
                    onPress={() => this._refreshComments()}
                >
                    <Text style={styles.refresh_title}>
                        Actualiser
                    </Text>
                </TouchableOpacity>
                <FlatList
                    data={this.state.comments}
                    keyExtractor={(item) => item.id.toString()}
                    extraData = {this.state.comments}
                    renderItem={({item}) => (
                        <CommentItem
                            comment={item}
                            deleteTheComment={this._deleteComment}
                        />
                    )}
                />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        backgroundColor: '#2c2f33'
    },
    refresh_container: {
        height: 40,
        marginTop: 10,
        marginBottom: 5,
        marginLeft: 5,
        marginRight: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#99aab5'
    },
    refresh_title: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#ffffff'
    },
});

export default CommentsList;