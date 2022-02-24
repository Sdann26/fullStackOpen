import axios from 'axios'
const url = 'http://localhost:3001/persons'

const getPhoneData = ()=>{
    return axios.get(url)
}

const addNewPhone = (data)=>{
    return axios.post(url, data)
}

const deletePhone = (id) => {
    return axios.delete(`${url}/${id}`)
}

const updatePhone = (id, data) => {
    return axios.put(`${url}/${id}`, data)
}

export default { getPhoneData, addNewPhone, deletePhone, updatePhone }