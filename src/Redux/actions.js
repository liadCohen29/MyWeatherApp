import { CITY_CLICKED } from "./actionTypes";

export const setCurrentCity = (city) =>({
    type: CITY_CLICKED,
    payload: city
}) 