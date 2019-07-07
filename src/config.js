import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {createStackNavigator, createBottomTabNavigator, createAppContainer} from "react-navigation";
import CommentsList from "./components/CommentsList"
import SendComment from "./components/SendComment";
import {Add, List} from "./assets/images";

const ListComments = createStackNavigator({
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

const CommentSend = createStackNavigator({
    SendComment: {
        screen: SendComment,
        navigationOptions: {
            title: "Envoyer commentaire",
            headerTitleStyle: {
                color: "#ffffff"
            },
            headerStyle: {
                backgroundColor: "#111111"
            },
        }
    }
});

const TabNavigator = createBottomTabNavigator({
    ListComments: {
        screen: ListComments,
        navigationOptions: {
            title: "Liste des commentaires",
            tabBarIcon: () => {
                return <Image
                    source={List}
                    style={styles.icon_navigation}/>
            }
        }
    },
    CommentSend: {
        screen: CommentSend,
        navigationOptions: {
            title: "Envoyer commentaire",
            tabBarIcon: () => {
                return <Image
                    source={Add}
                    style={styles.icon_navigation}/>
            }
        }
    },
},{
    tabBarOptions: {
        activeBackgroundColor: "#111111",
        inactiveBackgroundColor: "#2c2f33",
        activeTintColor: "#ffffff",
        inactiveTintColor: "#ffffff"
    }
});

const styles = StyleSheet.create({
    icon_navigation: {
        width: 40,
        height: 40,
    }
});

export default createAppContainer(TabNavigator);