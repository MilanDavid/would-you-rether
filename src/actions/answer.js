export const ANSWER_QUESTION = 'ANSWER_QUESTION';
export const AUTHED_USER_ANSWER = 'AUTHED_USER_ANSWER';

const updateAuthedUserAnswers = (questionId, userId, answer) => {
    return {
        type: AUTHED_USER_ANSWER,
        questionId,
        userId,
        answer
    }
}

const updateAnswerQuestion = (questionId, userId, answer) => {
    return {
        type: ANSWER_QUESTION,
        questionId,
        userId,
        answer
    }
}

export function handleAnswer(questionId, userId, answer) {
    return (dispatch) => {
        dispatch(updateAuthedUserAnswers(questionId, userId, answer));
        dispatch(updateAnswerQuestion(questionId, userId, answer));
    }
}