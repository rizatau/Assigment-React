
export const fetchApi = (route, optional) => {
    return fetch(`http://movie-app-g2.herokuapp.com/${route}`, optional);
}