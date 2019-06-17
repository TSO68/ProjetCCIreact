export function getComments () {
    const url = 'https://projetcci.tk/api/v1/Api.php?apicall=getcomments';
    return fetch(url)
        .then(response => response.json())
        .catch(error => console.error(error))
}

export function deleteComment (id) {
    const url = 'https://projetcci.tk/api/v1/Api.php?apicall=deletecomment&id=' + id;
    return fetch(url)
        .then(response => response.json())
        .catch(error => console.error(error))
}