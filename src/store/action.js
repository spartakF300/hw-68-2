import axiosApi from "../axiosApi";
import moment from "moment";
export const GET_TASKS_SUCCES = 'GET_TASKS_SUCCES';
export const REQUEST = 'REQUEST';
export const ADD = 'ADD';
export const REQUEST_ERROR = 'REQUEST_ERROR';

export const Request = () => {
    return {type: REQUEST};
};

export const addTask = (value) => {
    return {type: ADD, value};
};
export const requestError = () => {
    return {type: REQUEST_ERROR};
};
export const getTasksSuccess = (tasksData) => {
    let list = [];
    for (let key in tasksData) {
       tasksData[key].id = key;
        list.push(tasksData[key]);
    }
    return {type: GET_TASKS_SUCCES , list};
};

export const getTasks = () => {
    return dispatch => {
        dispatch(Request());
        axiosApi.get('/task.json').then(response => {
            dispatch(getTasksSuccess(response.data));
        }, error => {
            dispatch(requestError());
        })
    }
};

export const postTask = (e) => {
    e.preventDefault();
    return (dispatch, getState) => {
        dispatch(Request());
        const text = getState().text;
        const date = new Date();
        let task = {
            text: text,
            dataTime: moment(date).format('dddd, MMMM DD YYYY, h:mm:ss'),
        };
        axiosApi.post('/task.json', task).then(res => {
            dispatch(getTasks())
        }, error => {
            dispatch(requestError());
        })
    }

};

export const remove = (id)=>{
    return(dispatch)=>{
    dispatch(Request());
    axiosApi.delete('task/'+ id +'.json').then(res=>{
        dispatch(getTasks())
    }, error => {
        dispatch(requestError());
    })
}
};