import {CREATE_ACCOUNT_SUCCESS} from './types'

export const handleSignUp = (payload) => dispatch => {
    fetch('https://questionnaire-web-api.herokuapp.com/api/v1/register/',{
        method: 'POST',
        headers:{
            'content-type': 'application/json'
        },
        body:JSON.stringify(payload)
    })
    .then(resp => resp.json())
    .then(user => dispatch({
        type: CREATE_ACCOUNT_SUCCESS,
        payload: user
    }))
}

