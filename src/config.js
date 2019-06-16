import {createStackNavigator, createAppContainer} from "react-navigation";
import CommentsList from "./components/CommentsList";
import CommentItem from "./components/CommentItem";

const AppNavigator = createStackNavigator({
    CommentsList: {
        screen: CommentsList,
        navigationOptions: {
            title: "Liste des commentaires",
            headerTitleStyle: {
                color: "#ffffff"
            },
            headerStyle: {
                backgroundColor: "#111111"
            },
        }
    },
    CommentItem: {
        screen: CommentItem,
        navigationOptions: {
            title: "Commentaire",
            headerTintColor: "#ffffff",
            headerStyle: {
                backgroundColor: "#111111"
            },
        }
    }
},{
        initialRouteName: "CommentsList"
    });

export default createAppContainer(AppNavigator);