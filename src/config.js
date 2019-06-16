import {createStackNavigator, createAppContainer} from "react-navigation";
import CommentsList from "./components/CommentsList";

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
    }
});

export default createAppContainer(AppNavigator);