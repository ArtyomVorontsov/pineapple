import axios from "axios";

const instance  = axios.create({
    baseURL: 'http://localhost/api/',

    withCredentials: false, // This is the default
    crossDomain: true,
    headers: {
     'Accept': 'application/json',
     'Content-Type': 'application/json',
    },
    timeout: 10000
});


export const API = {
    getEmails: async (orderBy, order, emailProvider, page) => {
        const requestUrl = `getEmails?orderBy=${orderBy}&order=${order}&page=${page}${emailProvider ? `&emailProvider=${emailProvider}` : ""}` ;
        const result = await instance.get(requestUrl, {});
        return result.data;
    },

    addEmail: async (email) => {
        const result = await instance.get(`addEmail?email=${email}`, {});
        return result.data;
    },

    deleteEmail: async (id) => {
        const result = await instance.get(`deleteEmail/${id}`, {});
        return result.data;
    },

    getEmailProviders: async () => {
        const result = await instance.get(`getEmailProviders`, {});
        return result.data;
    },
}

