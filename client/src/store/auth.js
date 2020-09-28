const UPDATE_EMAIL_VALUE = 'kneadedtranquility/auth/UPDATE_EMAIL_VALUE';
const UPDATE_PASSWORD_VALUE = 'kneadedtranquility/auth/UPDATE_PASSWORD_VALUE';
const UPDATE_TOKEN_VALUE = 'kneadedtranquility/auth/UPDATE_TOKEN_VALUE';

const updateEmailValue = value => ({
    type: UPDATE_EMAIL_VALUE,
    value,
});

const updatePasswordValue = value => ({
    type: UPDATE_PASSWORD_VALUE,
    value,
});

const updateTokenValue = value => ({
    type: UPDATE_TOKEN_VALUE,
    value,
});

export const actions = {
    updateEmailValue,
    updatePasswordValue,
    updateTokenValue,
};

const tryLogin = () => {
    return async (dispatch, getState) => {
        const { auth: { email, password } } = getState();
        const response = await fetch('api/users', {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        try {
            if (response.status >= 200 && response.status < 400) {
                const data = await response.json();
                dispatch(updateTokenValue(data.token));
                window.localStorage.setItem('SPA_TOKEN', data.token);
            } else {
                console.error("Bad Response");
            }
        } catch (error) {
            console.error(error);
        }

    };
}

export const thunks = {
    tryLogin,
}

const initialState = {
    token: ","
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_EMAIL_VALUE: {
            return {
                ...state,
                email: action.value,
            };
        }
        case UPDATE_PASSWORD_VALUE: {
            return {
                ...state,
                password: action.value,
            };
        }
        case UPDATE_TOKEN_VALUE: {
            return {
                ...state,
                token: action.value,
            };
        }
        default: {
            return state;
        }
    };
};

export default reducer;