import {Alert} from "react-native";

/**
 * Function that get the comments list from the remote DB
 * @returns {Promise<any | void>}
 */
export function getComments () {
    const url = 'https://projetcci.tk/api/v1/Api.php?apicall=getcomments';
    return fetch(url)
        .then(response => response.json())
        .catch(error => console.error(error))
}

/**
 * Function that delete a comment from the remote DB with his id
 * @param id of the comment
 * @returns {Promise<any | void>}
 */
export function deleteComment (id) {
    const url = 'https://projetcci.tk/api/v1/Api.php?apicall=deletecomment&id=' + id;
    return fetch(url)
        .then(response => response.json())
        .catch(error => console.error(error))
}

/**
 * Function that create the comment in the remote DB
 * @param author of the comment
 * @param comment, text
 * @returns {Promise<string | never>}
 */
export function createComment (author, comment) {
    const url = 'https://projetcci.tk/api/v1/Api.php?apicall=createcomment';
    return fetch(url, {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded',
        }),
        body: "author=" + author + "&text=" + comment
    })
        .then((response) => response.text())
        .then((responseText) => {
            console.log("response", responseText);

            Alert.alert(
                'Merci',
                'Le commentaire a été envoyé',
                [
                    {text: 'OK'},
                ],
                {cancelable: false},
            );
        })
        .catch((error) => {
            console.error(error);

            Alert.alert(
                'Erreur',
                "Le commentaire n'a pas été envoyé",
                [
                    {text: 'OK'},
                ],
                {cancelable: false},
            )
        });
}