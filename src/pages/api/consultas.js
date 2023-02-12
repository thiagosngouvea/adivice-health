import axios from 'axios';

export const handleGet = async (req, res) => {
    const response = await axios.get('http://localhost:3000/api/consultas');
    return response
};

export const handlePost = async (data) => {
    const response = await axios.post('http://localhost:3000/api/consultas', data);
    return response
};

export const handlePut = async (req, res) => {
    const id = req.query.id;
    const response = await axios.put(`http://localhost:3000/api/consultas/${id}`, req);
    return response
};

export const deleteConsulta = async (id) => {
    const response = await axios.delete(`http://localhost:3000/api/consultas/${id}`);
    return response
};
