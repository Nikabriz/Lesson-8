import axios from 'axios'

const initialState = {
    img: null
}


export const randomFoxReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_RANDOM_FOX': {
            return {...state, img: action.img}
        }

        default:
            return state
    }
}

const getRandomFox = (img) => {
    return {
        type: 'GET_RANDOM_FOX', img
    }
}

export const getRandomFoxTC = () => async (dispatch) => {
    try {
        const fox = await axios.get('https://randomfox.ca/floof/')
        dispatch(getRandomFox(fox.data.image))
    } catch (err) {
        console.log(err)
    }
}