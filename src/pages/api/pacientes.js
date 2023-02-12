import axios from 'axios';

export const handleGet = async (req, res) => {
    const response = await axios.get('http://localhost:3000/api/pacientes');
    return response
};

export const handlePost = async (req, res) => {
    const response = await axios.post('http://localhost:3000/api/pacientes', req.body);
    return response
};

export const handlePut = async (req, res) => {
    const id = req.query.id;
    const response = await axios.put(`http://localhost:3000/api/pacientes/${id}`, req.body);
    return response
};

export const handleDelete = async (req, res) => {
    const response = await axios.delete(`http://localhost:3000/api/pacientes/${req.query.id}`);
    return response
};
