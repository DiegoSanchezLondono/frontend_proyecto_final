
import { decodeToken } from "react-jwt";

export const Decoder = (token) => {

    const decodedToken = decodeToken(token);

    return decodedToken;
}

// export const url_default = 'https://www.youtube.com/watch?v=';
export const url_default = 'https://www.youtube.com/';

export const errorCheck = (name, value) => {

    switch (name) {

        case 'name':
        case 'surname':
        case 'country':

            if (! /[a-z]/gi.test(value) ) {
                return ("Formato de texto NO válido");
                
            } else {
                return '';
            };

        case 'email':

            if (! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value)) {
                return "Email en formato NO válido";
            } else {
                return '';
            }
        
        case 'password':

            if (value.length < 8) {
                return "Escribe al menos 6 caracteres"
            } else {

                //Checking the password format....

                if (! /[\d()+-]/g.test(value)) {
                    return "Password en formato NO válido";
                } else {
                    return "";
                }
            }

        default:
            console.log("No ejecuto ningun if");
            break;
    }
}