export default function reducer(state = {
    slideTimer: 6000,
    slides: [{
        active: true,
        visible: false,
        caption: "",
        src: "",
        altText: ""
    }],
    error: null
}, action) {
    switch (action.type) {
        case "GET_SLIDESHOW_FULFILLED": {
            return {
                ...state,
                slideTimer: action.payload.slideTimer,
                slides: action.payload.slides
            };
            break;
        }
    }
    return state;
}