import { combineReducers } from "redux";

import companies from "./companiesReducer";
import slideshow from "./slideshowReducer";
import forms from "./formReducer";

export default combineReducers({
    companies,
    slideshow,
    forms
});