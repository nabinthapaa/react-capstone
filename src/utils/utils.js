import { OCCASSION } from "../constants/options";

/**
 * 
 * @param {string} word 
 * @returns {string}
 */
export function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.substring(1)
}

/**
 * 
 * @param {string} time 
 * @returns {boolean}
 */
export function checkTime(time) {
    const hour = Number(time.split(':')[0]);
    console.log(hour >= 10 && hour <= 20)
    if (hour >= 10 && hour <= 20) {
        return true;
    }
    return false;
}

/**
 * @param {string} date
 * @returns {boolean}
 */
export function ValidateDate(date) {
    const input_date = new Date(date);
    const current_date = new Date();

    if (input_date.getFullYear() >= current_date.getFullYear()) {
        if (input_date.getMonth() >= current_date.getMonth()) {
            if (input_date.getDate() >= current_date.getDate()) {
                return true;
            }
        }
    }
    return false;
}


/**
 * 
 * @param {{
 * date: string,
 * time: string,
 * occassion: string,
 * noOfPersons?: number
 * }} formData 
 * 
 * @returns {{
 *  message: string,
 *  response: boolean
 * }}
 */
export function ValidateRegistration(formData) {
    if (!ValidateDate(formData.date)) {
        return {
            message: "Invalid Date",
            response: false,
        }
    } else if (!checkTime(formData.time)) {
        return {
            message: "Booking available between 10am and 7pm",
            response: false
        }
    } else if (!(Object.keys(OCCASSION).includes(formData.occassion))) {
        return {
            message: "Please select a proper occasion",
            response: false
        }
    }
    return {
        message: "Valid info provided",
        response: true
    }
}