export default function reducer(state={
    companies: {
        getting: false,
        gotten: false,
        data: null,
        error: null
    }
}, action) {
    switch (action.type) {
        case "GET_COMPANIES_PENDING": {
            return {...state, getting: true };
            break;
        }
        case "GET_COMPANIES_REJECTED": {
            return {
                ...state,
                getting: false, 
                error: action.payload 
            };
            break;
        }
        case "GET_COMPANIES_FULFILLED": {
            return {
                ...state,
                getting: false, 
                gotten: true, 
                data: action.payload
            };
            break;
        }
    }
    return state;
}