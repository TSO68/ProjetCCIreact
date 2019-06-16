import React, {Component} from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import CommentView from "./CommentView";
import { getComments, deleteComment } from "../API/customApi";

class CommentsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            comments: [],
        };
    }

    _loadComments() {
        getComments().then(data => this.setState({ comments: data.comments}));
    }

    /*
    _displayComment = (idComment) => {
        this.props.navigation.navigate("CommentItem", { idComment: idComment})
    };*/

    _deleteComment = (idComment) => {
        deleteComment(idComment).then(this._loadComments());
    };

    componentWillMount() {
        this._loadComments()
    };

    render() {
        return (
            <View style={styles.main_container}>
                <FlatList
                    data={this.state.comments}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => (
                        <CommentView
                            comment={item}
                            //displayCommentItem={this._displayComment}
                            deleteTheComment={this._deleteComment}
                        />
                    )}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        backgroundColor: '#2c2f33'
    }
});

export default CommentsList;