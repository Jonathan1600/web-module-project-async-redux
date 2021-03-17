import axios from "axios"
export const FETCH_CARDS_SUCCESS = "FETCH_CARDS_SUCCESS"
export const FETCH_CARDS_START = "FETCH_CARDS_START"
export const FETCH_CARDS_FAILURE = "FETCH_CARDS_FAILURE"

export const fetchData = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_CARDS_START });


        import axios from "axios";

        const options = {
            method: 'GET',
            url: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards',
            headers: {
                'x-rapidapi-key': '459a9b1ebemsh065f357eeb6b253p18a538jsnd497d7ccee7d',
                'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {

            console.log(response.data);
            dispatch({ type: FETCH_SPELLS_SUCCESS, payload: res.data });
        }).catch(function (error) {
            console.error(error);
            dispatch({ type: FETCH_SPELLS_FAILURE, payload: err.message });
        });
    }
}


