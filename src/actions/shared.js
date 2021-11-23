import { getInitialData } from '../utils/api';
import { receiveUsers } from './users';
import { receiveQuestions } from './tweets';
import { setAuthedUser } from './authedUser';
import { showLoading, hideLoading } from 'react-redux-loading';

const AUTHED_ID = null;

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading());

        return getInitialData()
            .then(({ users, questions }) => {
                dispatch(receiveUsers(users));
                dispatch(receiveQuestions(questions));
                if (AUTHED_ID) {
                    dispatch(setAuthedUser(users[AUTHED_ID]))
                } else if(localStorage.getItem('user')) {
                    dispatch(setAuthedUser(JSON.parse(localStorage.getItem('user'))));
                };
                dispatch(hideLoading());
            })
    }
}

export function updateAuthedUser(user) {
    return (dispatch) => {
        dispatch(setAuthedUser(user));
        localStorage.setItem('user', JSON.stringify(user));
    }
}