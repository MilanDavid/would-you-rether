import { RECEIVE_QEUSTIONS, TOGGLE_TWEET, ADD_TWEET } from '../actions/tweets';
import { ANSWER_QUESTION } from '../actions/answer';

export default function questions(state = {}, action) {

    switch (action.type) {
        case RECEIVE_QEUSTIONS:
            return {
                ...state,
                ...action.questions
            };
        case ANSWER_QUESTION:
            return {
                ...state,
                [action.questionId]: {
                    ...state[action.questionId],
                    [action.answer]: {
                        ...state[action.questionId][action.answer],
                        votes: [
                            ...state[action.questionId][action.answer].votes,
                            action.userId
                        ],
                    }
                }
            };
        case TOGGLE_TWEET:
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    likes: action.hasLiked === true
                        ? state[action.id].likes.filter((uid) => uid !== action.authedUser)
                        : state[action.id].likes.concat([action.authedUser])
                }
            };
        case ADD_TWEET:
            const { tweet } = action;

            let replyingTo = {};
            if (tweet.replyingTo !== null) {
                replyingTo = {
                    [tweet.replyingTo]: {
                        ...state[tweet.replyingTo],
                        replies: state[tweet.replyingTo].replies.concat([tweet.id])
                    }
                }
            }

            return {
                ...state,
                [action.tweet.id]: action.tweet,
                ...replyingTo,

            };
        default:
            return state;
    }
}