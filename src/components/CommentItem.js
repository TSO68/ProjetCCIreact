import React, {Component} from 'react'
import { StyleSheet, View, Text } from 'react-native'

class CommentItem extends Component {
    render() {

        const idComment = this.props.navigation.getParam('idComment');

        return (
            <View style={styles.main_container}>
                <View style={styles.comment_container}>
                    <Text>Id commentaire : { idComment }</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: '#2c2f33'
    },
    comment_container: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#d6d7da',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: '#ffffff'
    }
});

export default CommentItem;