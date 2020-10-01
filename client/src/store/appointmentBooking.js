const UPDATE_SERVICE_TYPE_VALUE = 'kneadedtranquility/appointmentBooking/UPDATE_SERVICE_TYPE_VALUE';

const updateServiceTypeValue = value => ({
    type: UPDATE_SERVICE_TYPE_VALUE,
    value,
});

export const tryServiceType = () => {
    return async (dispatch) => {
        const response = await fetch('http://localhost:3000/api/appointments/')
        console.log(response)
        try {
            if (response.status >= 200 && response.status < 400) {
                const data = await response.json();
                console.log(data.serviceTypes)
                return data.serviceTypes

            } else {
                console.error("Bad Response");
            }
        } catch (error) {
            console.error(error);
        }

    };
}

export const actions = {
    updateServiceTypeValue,
};

export const thunks = {
    tryServiceType,
}

const initialState = {}

function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_SERVICE_TYPE_VALUE: {
            return {
                ...state,
                serviceType: action.value,
            };
        }
        default: {
            return state;
        }
    };
};

export default reducer;