
const UPDATE_EMAIL_VALUE = 'kneadedtranquility/auth/UPDATE_EMAIL_VALUE';
const UPDATE_PASSWORD_VALUE = 'kneadedtranquility/auth/UPDATE_PASSWORD_VALUE';
const UPDATE_TOKEN_VALUE = 'kneadedtranquility/auth/UPDATE_TOKEN_VALUE';
const UPDATE_FIRST_NAME_VALUE = 'kneadedtranquility/auth/UPDATE_FIRST_NAME_VALUE';
const UPDATE_LAST_NAME_VALUE = 'kneadedtranquility/auth/UPDATE_LAST_NAME_VALUE';
const UPDATE_PHONE_NUMBER_VALUE = 'kneadedtranquility/auth/UPDATE_PHONE_NUMBER_VALUE';
const UPDATE_CONFIRM_PASSWORD_VALUE = 'kneadedtranquility/auth/UPDATE_CONFIRM_PASSWORD_VALUE';
const UPDATE_ERRORS_VALUE = 'kneadedtranquility/auth/UPDATE_ERRORS_VALUE';

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

const updatePhoneNumberValue = value => ({
    type: UPDATE_PHONE_NUMBER_VALUE,
    value,
});

const updateFirstNameValue = value => ({
    type: UPDATE_FIRST_NAME_VALUE,
    value,
});

const updateLastNameValue = value => ({
    type: UPDATE_LAST_NAME_VALUE,
    value,
});

const updateConfirmPasswordValue = value => ({
    type: UPDATE_CONFIRM_PASSWORD_VALUE,
    value,
});

const updateErrorsValue = value => ({
    type: UPDATE_ERRORS_VALUE,
    value,
})

export const actions = {
    updateEmailValue,
    updatePasswordValue,
    updateTokenValue,
    updatePhoneNumberValue,
    updateLastNameValue,
    updateFirstNameValue,
    updateConfirmPasswordValue,
    updateErrorsValue,
};

const tryLogin = () => {
    return async (dispatch, getState) => {
        const { auth: { email, password } } = getState();
        const response = await fetch('http://localhost:3000/api/users', {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        console.log(response)
        try {
            if (response.status >= 200 && response.status < 400) {
                const data = await response.json();
                dispatch(updateTokenValue(data.token));
                dispatch(updateFirstNameValue(data.firstName))
                window.localStorage.setItem('SPA_TOKEN', data.token);
            } else if (response.status === 401) {
                dispatch(updateErrorsValue({ errors: ["UserName or Password is Incorrect"] }))
            } else if (response.status === 422) {
                const errors = await response.json();
                dispatch(updateErrorsValue(errors));
            }
        } catch (error) {
            console.error(error);
        }

    };
}

const tryRegister = () => {

    return async (dispatch, getState) => {
        const { auth: { email, password, firstName, lastName, confirmPassword, phoneNumber } } = getState();
        const response = await fetch('http://localhost:3000/api/users/register', {
            method: "POST",
            body: JSON.stringify({ email, password, firstName, lastName, confirmPassword, phoneNumber }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        console.log(response)
        try {
            if (response.status >= 200 && response.status < 400) {
                const data = await response.json();
                dispatch(updateTokenValue(data.token));
                window.localStorage.setItem('SPA_TOKEN', data.token);

            } else if (response.status === 422) {
                const errors = await response.json();
                console.log(errors)
                dispatch(updateErrorsValue(errors))
            }
            else {
                console.error("Bad Response");
            }
        } catch (error) {
            console.error(error);
        }

    };
}

export const thunks = {
    tryLogin,
    tryRegister,
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
        case UPDATE_PHONE_NUMBER_VALUE: {
            return {
                ...state,
                phoneNumber: action.value,
            };
        }
        case UPDATE_FIRST_NAME_VALUE: {
            return {
                ...state,
                firstName: action.value,
            };
        }
        case UPDATE_LAST_NAME_VALUE: {
            return {
                ...state,
                lastName: action.value,
            };
        }
        case UPDATE_CONFIRM_PASSWORD_VALUE: {
            return {
                ...state,
                confirmPassword: action.value,
            };
        }
        case UPDATE_ERRORS_VALUE: {
            return {
                ...state,
                errors: action.value,
            };
        }
        default: {
            return state;
        }
    };
};

export default reducer;