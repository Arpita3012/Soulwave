import {backendUrl} from "./config"

export const makeUnauthenticatedPOSTRequest = async (route,body)=>{
    //route: /signup
    const response= await fetch(backendUrl+route,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),

    });
    const formattedResponse= await response.json();
    return formattedResponse;
};

export const makeAuthenticatedPOSTRequest = async (route,body)=>{
    const token= getToken();
    const response= await fetch(backendUrl+route,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
            
        },
        body: JSON.stringify(body),

    });
    const formattedResponse= await response.json();
    return formattedResponse;
};


export const makeAuthenticatedGETRequest = async (route)=>{
    const token= getToken();
    const response= await fetch(backendUrl+route,{
        method: "get",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
            
        },
    });
    const formattedResponse= await response.json();
    return formattedResponse;
};


const getToken = () => {
    const accessToken = document.cookie.replace(
        /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
    );
    return accessToken;
};

export const logout = () => {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
};
