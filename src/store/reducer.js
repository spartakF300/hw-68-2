import {ADD, GET_TASKS_SUCCES, REQUEST} from "./action";

export const initialState = {
    list: [],
    text: '',
    loading: false
};
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                text: action.value
            };
        case GET_TASKS_SUCCES:
            return {
                ...state,
                list: action.list,
                loading: false
            };

        case REQUEST:
            return {...state, loading: true};

            default:return state
    }
};
export default reducer;