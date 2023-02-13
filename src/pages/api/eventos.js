import axios from 'axios';

export const getEventos = async () => {
    const response = await axios.get('http://localhost:3000/api/eventos');
    return response
};

export const postEventos = async (data) => {
    const response = await axios.post('http://localhost:3000/api/eventos', data);
    return response
};

export const putEventos = async (req, res) => {
    const id = req.query.id;
    const response = await axios.put(`http://localhost:3000/api/eventos/${id}`, req);
    return response
};

export const deleteEventos = async (id) => {
    const response = await axios.delete(`http://localhost:3000/api/eventos/${id}`);
    return response
};
