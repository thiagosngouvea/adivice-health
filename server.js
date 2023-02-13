const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

let consultas = [
  {
    id: 'b1fe9ca7-cfd0-4f58-b391-9555c04302b4',
    nomePaciente: 'João Silva',
    cpfPaciente: '123.456.789-00',
    dataNascimentoPaciente: '01/01/1990',
    enderecoPaciente: 'Rua das Flores, 123',
    idade: 31,
    queixaPrincipal: 'Dor de cabeça',
    dataConsulta: '01/01/2021',
    horaConsulta: '10:00',
    medico: 'Dr. João',
    status: 'Em atendimento',
    valorConsulta: 300,
  }
];

app.get('/api/consultas', (req, res) => {
  res.json(consultas);
});

app.post('/api/consultas', (req, res) => {
  const consulta = req.body;
  consultas.push(consulta);
  res.json(consulta);
});

app.put('/api/consultas/:id', (req, res) => {
  const consultaId = parseInt(req.params.id);
  const consultaIndex = consultas.findIndex((p) => p.id === consultaId);

  if (consultaIndex === -1) {
    res.status(404).end();
    return;
  }

  consultas[consultaIndex] = req.body;
  res.json(consultas[consultaIndex]);
});

app.delete('/api/consultas/:id', (req, res) => {
  const consultaId = req.params.id;
  const consultaIndex = consultas.findIndex((p) => p.id === consultaId);

  if (consultaIndex === -1) {
    res.status(404).end();
    return;
  }

  consultas.splice(consultaIndex, 1);
  res.status(204)
    res.json(consultas)
    .end();
});

let medicos = [
    {
        id: 1,
        nome: 'Dr. João',
        especialidade: 'Cardiologia',
        crm: '123456',
        telefone: '11 99999-9999',
    },
    {
        id: 2,
        nome: 'Dr. Thiago',
        especialidade: 'Nefrologista',
        crm: '123456',
        telefone: '11 99999-9999',
    }
];

app.get('/api/medicos', (req, res) => {
    res.json(medicos);
});

app.post('/api/medicos', (req, res) => {
    const medico = req.body;
    medicos.push(medico);
    res.json(medico);
});

app.put('/api/medicos/:id', (req, res) => {
    const medicoId = parseInt(req.params.id);
    const medicoIndex = medicos.findIndex((m) => m.id === medicoId);

    if (medicoIndex === -1) {
        res.status(404).end();
        return;
    }

    medicos[medicoIndex] = req.body;
    res.json(medicos[medicoIndex]);
});

app.delete('/api/medicos/:id', (req, res) => {
    const medicoId = parseInt(req.params.id);
    const medicoIndex = medicos.findIndex((m) => m.id === medicoId);

    if (medicoIndex === -1) {
        res.status(404).end();
        return;
    }

    medicos.splice(medicoIndex, 1);
    res.status(204).end();
});

let eventos = [
  {
    id: 14,
    title: "Today",
    start: new Date(new Date().setHours(new Date().getHours() - 3)),
    end: new Date(new Date().setHours(new Date().getHours() + 3))
  }
];


app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
