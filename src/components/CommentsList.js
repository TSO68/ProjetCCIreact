import React, {Component} from 'react';
import {StyleSheet, ScrollView, FlatList, Text, TouchableOpacity} from 'react-native';
import CommentItem from "./CommentItem";
import { getComments, deleteComment } from "../API/customApi";

class CommentsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            comments: [],
        };
    };

    _loadComments() {
        getComments().then(data => this.setState({ comments: data.comments}));
    };

    _deleteComment = (idComment) => {
        deleteComment(idComment).then(alert('Message supprimé'));
        this._loadComments();
    };

    /*_refreshComments() {

    };*/

    componentWillMount() {
        this._loadComments()
    };

    render() {
        return (
            <ScrollView style={styles.main_container}>
                <FlatList
                    data={this.state.comments}
                    keyExtractor={(item) => item.id.toString()}
                    extraData = {this.state.refresh}
                    renderItem={({item}) => (
                        <CommentItem
                            comment={item}
                            deleteTheComment={this._deleteComment}
                        />
                    )}
                />
                <TouchableOpacity
                    style={styles.refresh_container}
                    //onPress={() => }
                >
                    <Text style={styles.refresh_title}>
                        Actualiser
                    </Text>
                </TouchableOpacity>
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