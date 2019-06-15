import React, {Component} from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import CommentItem from "./CommentItem";
import { getComments } from "../API/customApi";

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

    componentWillMount(): void {
        this._loadComments()
    }

    render() {
        return (
            <View style={styles.main_container}>
                <FlatList
                    data={this.state.comments}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <CommentItem comment={item} />}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        marginTop: 20
    },
});

export default CommentsList;