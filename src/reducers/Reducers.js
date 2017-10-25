import { combineReducers } from "redux";

import companies from "./companiesReducer";
import slideshow from "./slideshowReducer";

export default combineReducers({
    companies,
    slideshow
});