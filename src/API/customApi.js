export function getComments () {
    const url = 'http://projetcci.tk/api/v1/Api.php?apicall=getcomments';
    return fetch(url)
        .then(response => response.json())
        .catch(error => console.error(error))
}