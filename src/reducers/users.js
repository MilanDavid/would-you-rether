import { RECEIVE_USERS } from '../actions/users';
import { AUTHED_USER_ANSWER } from '../actions/answer';

export default function users(state = {}, actions) {
    switch (actions.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...actions.users
            };
        case AUTHED_USER_ANSWER:
            return {
                ...state,
                [actions.userId]: {
                    ...state[actions.userId],
                    answers: {
                        ...state[actions.userId].answers,
                        [actions.questionId]: actions.answer
                    },
                    questions: [
                        ...state[actions.userId].questions,
                        actions.questionId
                    ]
                }
            };
        default:
            return state;
    }
}