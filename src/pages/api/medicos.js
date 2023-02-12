import axios from 'axios';

export const handleGet = async (req, res) => {
    const response = await axios.get('http://localhost:3000/api/medicos');
    return response
}

export const cadastrarMedicos = async (data) => {
    const response = await axios.post('http://localhost:3000/api/medicos', data);
    return response
}

export const handlePut = async (req, res) => {
    const id = req.query.id;
    const response = await axios.put(`http://localhost:3000/api/medicos/${id}`, req.body);
    return response
}

export const handleDelete = async (req, res) => {
    const response = await axios.delete(`http://localhost:3000/api/medicos/${req.query.id}`);
    return response
}