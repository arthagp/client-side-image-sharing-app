import { instance } from "./axios";

const userLogin = async (username, password) => {
    try {
        const response = await instance.post('/login', { username, password })
        return response
    } catch (error) {
        throw (
            new Error(error.response.data.message) ||
            console.log("Something Went Wrong")
        );
    }
}

const userRegister = async (username, password) => {
    try {
        const response = await instance.post('/register', { username, password })
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

const handleUserIsLike = async (imageId) => {
    try {
        const response = await instance.get(`/cek-like/${imageId}`)
        return response.data
    } catch (error) {
        throw (
            new Error(error.response.data.message) ||
            console.log("Something Went Wrong")
        );
    }
}

const handleUserLike = async (imageId) => {
    try {
        const response = await instance.post(`/like/${imageId}`)
        return response
    } catch (error) {
        throw (
            new Error(error.response.data.message) ||
            console.log("Something Went Wrong")
        )
    }
}

const fetchTags = async () => {
    try {
        const response = await instance.get('/all-tag')
        return response.data
    } catch (error) {
        throw (
            new Error(error.response.data.message) ||
            console.log("Something Went Wrong")
        )
    }
}

const handleUserUnlike = async (imageId) => {
    try {
        const response = await instance.delete(`/unlike/${imageId}`)
        return response
    } catch (error) {
        throw (
            new Error(error.response.data.message) ||
            console.log("Something Went Wrong")
        )
    }
}

const handleCreateNewImage = async (formData) => { // Menerima formData sebagai argumen
    try {
        const response = await instance.post('/create-post', formData, {
            headers: {
                'Content-Type': 'multipart/form-data', // Atur tipe konten ke multipart/form-data
            },
        });
        return response;
    } catch (error) {
        throw new Error(error.response.data.message || "Something Went Wrong");
    }
};

const fetchImageByUserId = async () => {
    try {
        const response = await instance.get('/my-images')
        return response.data
    } catch (error) {
        throw new Error(error.response.data.message || "Something Went Wrong");
    }
}

const deleteImage = async (imageId) => {
    try {
        const response = await instance.delete(`/delete-post/${imageId}`)
        return response
    } catch (error) {
        throw new Error(error.response.data.message || "Something Went Wrong");
    }
}

module.exports = { getAllImages, userLogin, userRegister, handleUserLike, handleUserIsLike, handleUserUnlike, fetchTags, handleCreateNewImage, fetchImageByUserId, deleteImage }