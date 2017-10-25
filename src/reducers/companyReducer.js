export default function reducer(state={
    company: {
        getting: false,
        gotten: false,
        data: null,
        error: null
    }
}, action) {
    switch (action.type) {
        case "GET_COMPANY_PENDING": {
            return {...state, getting: true };
            break;
        }
        case "GET_COMPANY_REJECTED": {
            return {
                ...state,
                getting: false, 
                error: action.payload 
            };
            break;
        }
        case "GET_COMPANY_FULFILLED": {
            return {
                ...state,
                getting: false, 
                gotten: true, 
                data:{
                    object: action.payload 
                }
            };
            break;
        }
    }
    return state;
}