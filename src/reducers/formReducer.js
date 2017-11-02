export default function reducer(state = {
    data: {
        enrollment: {
            class: "",
            fieldsets: []
        },
        contact: {
            class: "",
            fieldsets: []
        }
    },
    error: null
}, action) {
    switch (action.type) {
        case "GET_FORM_DATA_FULFILLED": {
            return {
                ...state,
                data: action.payload
            };
            break;
        }
    }
    return state;
}