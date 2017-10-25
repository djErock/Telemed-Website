import Axios from "axios";
import Constants from '../util/const.js';

export function getCompanies() {
    return function (dispatch) {
        Axios.get(Constants.WS_PREFIX + 'companies')
            .then((response) => {
                console.log(response.data);
                dispatch({
                    type: "GET_COMPANIES_FULFILLED",
                    payload: response.data.recordset
                });
            }).catch((err) => {
                dispatch({
                    type: "GET_COMPANIES_REJECTED",
                    payload: err
                });
            })
    }
}

export function slideshowSettings() {
    return (dispatch) => {
        dispatch({
            type: "GET_SLIDESHOW_FULFILLED",
            payload: {
                slideTimer: 6000,
                slides: [{
                    active: true,
                    visible: false,
                    caption: "Access to medical providers anywhere",
                    src: "doctor_on_demand.jpg",
                    altText: "Caduceus Telemedicine Slide 1"
                }, {
                    active: false,
                    visible: false,
                    caption: "Provider access on the go",
                    src: "doctor_on_tablet.jpg",
                    altText: "Caduceus Telemedicine Slide 2"
                }, {
                    active: false,
                    visible: false,
                    caption: "Bringing Technology to Medicine",
                    src: "applied_medicine.jpg",
                    altText: "Caduceus Telemedicine Slide 3"
                }]
            }
        });
    }
}