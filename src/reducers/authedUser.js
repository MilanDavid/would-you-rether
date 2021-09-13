import { SET_AUTHED_USER, LOGOUT_USER } from '../actions/authedUser';

export default function authedUser(state = null, actions) {
    switch(actions.type) {
        case SET_AUTHED_USER:
            return actions.user;
        case LOGOUT_USER:
            return null;
        default:
            return state;
    }
}