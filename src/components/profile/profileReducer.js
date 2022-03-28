const initialState = {
    checked: true
}


export const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'CHANGE_CHECKBOX' : {
            return {...state, checked: action.checked}
        }

        default:
            return state
    }
}


export const changeCheckboxAC = (checked) => {
    return {
        type: 'CHANGE_CHECKBOX', checked
    }
}