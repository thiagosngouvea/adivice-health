const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

let pacientes = [
  {
    id: 1,
    nome: 'João Silva',
    dataNascimento: '01/01/1990',
    idade: 31,
    queixaPrincipal: 'Dor de cabeça',
    dataConsulta: '01/01/2021',
    horaConsulta: '10:00',
    medico: 'Dr. João',
    status: 'Em atendimento',
    classificacao: 'Emergência',
  }
];

app.get('/api/pacientes', (req, res) => {
  res.json(pacientes);
});

app.post('/api/pacientes', (req, res) => {
  const paciente = req.body;
  pacientes.push(paciente);
  res.json(paciente);
});

app.put('/api/pacientes/:id', (req, res) => {
  const pacienteId = parseInt(req.params.id);
  const pacienteIndex = pacientes.findIndex((p) => p.id === pacienteId);

  if (pacienteIndex === -1) {
    res.status(404).end();
    return;
  }

  pacientes[pacienteIndex] = req.body;
  res.json(pacientes[pacienteIndex]);
});

app.delete('/api/pacientes/:id', (req, res) => {
  const pacienteId = parseInt(req.params.id);
  const pacienteIndex = pacientes.findIndex((p) => p.id === pacienteId);

  if (pacienteIndex === -1) {
    res.status(404).end();
    return;
  }

  pacientes.splice(pacienteIndex, 1);
  res.status(204).end();
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
