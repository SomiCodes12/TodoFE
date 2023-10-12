import axios from "axios"

const url : string = "https://todobe-t6yj.onrender.com/api/v1"

export const createDoneTask = async () => {
    try {
        return await axios.post(`${url}/create-done-task`).then((res) => {
            return res.data.data
        })
    } catch (error) {
        console.log(error);
    }
}

export const viewDoneTask = async () => {
    try {
        return await axios.get(`${url}/view-done-task`).then((res) => {
            return res.data.data
        })
    } catch (error) {
        console.log(error);
    }
}

export const deleteDoneTask = async () => {
    try {
        return await axios.delete(`${url}/delete-done-task`).then((res) => {
            return res.data.data
        })
    } catch (error) {
        console.log(error);
    }
}