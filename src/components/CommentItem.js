import React, {Component} from 'react';
import { Text, TouchableOpacity } from 'react-native';

class CommentItem extends Component {

    render() {
        const comment = this.props.comment;
        return (
            <TouchableOpacity>
                <Text>{comment.author}</Text>
                <Text>{comment.text}</Text>
            </TouchableOpacity>
        )
    }

}

export default CommentItem;