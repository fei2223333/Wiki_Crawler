import { SEARCH_TYPE, LOADING_TYPE } from './actionTypes';

const search = (input) => {
    return (dispatch) => {
        //https://en.wikipedia.org/w/api.php?action=parse&origin=*&format=json&page=Steve%20Jobs&prop=text
        dispatch({
            type: LOADING_TYPE,
            content: "loading..."
        })
        fetch(`https://en.wikipedia.org/w/api.php?action=parse&origin=*&format=json&page=${input}&prop=text`)
            .then((res) => {
                if (res.ok) {
                    return res.json()
                } else {
                    throw new Error("FAIL TO FETCH DATA FROM WIKI");
                }
            }).then((res) => {
                console.log(res);
                dispatch({
                    type: SEARCH_TYPE,
                    input: res["parse"]["text"]["*"]
                })
            }).catch((err) => {
                window.alert("Invalid input");
            })
    }
}

export {
    search
}