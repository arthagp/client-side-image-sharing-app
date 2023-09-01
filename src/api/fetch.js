import { instance } from "./axios";

const userLogin = async (username, password) => {
    try {
        const response = await instance.post('/login', {username, password})
        return response
    } catch (error) {
        throw (
            new Error(error.response.data.message) ||
            console.log("Something Went Wrong")
          );
    }
}

const getAllImages = async () => {
    try {
        const response = await instance.get('/all-post');
        return response
    } catch (error) {
        throw (
            new Error(error.response.data.message) ||
            console.log("Something Went Wrong")
        );
    }
}

module.exports = { getAllImages, userLogin}