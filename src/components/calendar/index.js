import React, { useState, useContext } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { ModalCentralizado } from '@/components/modal';
import { InputComponent } from '@/components/Input';
import { Button, FormGroup, Label, Input } from 'reactstrap';
import { uuid } from 'uuidv4';
import { getEventos, postEventos } from '@/pages/api/eventos';
import { GlobalContext } from '@/context/GlobalContext';
import 'moment/locale/pt-br';
import moment from 'moment';

import styles from './styles.module.css';
import { useEffect } from 'react';
const localizer = momentLocalizer(moment);



export function CalendarSchedule() {
    const [eventsData, setEventsData] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [showModalEventos, setShowModalEventos] = useState(false);
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [data, setData] = useState('');
    const [type, setType] = useState('');
    const { setUpdateEventos } = useContext(GlobalContext);


    const buscarEventos = async () => {
        const response = await getEventos();
        setEventsData(response.data);
    }

    useEffect(() => {
        buscarEventos();
    }, []);

    const closeModal = closeModalOpen => {
        setShowModal(closeModalOpen);
    };

    const closeModalEventos = closeModalEventosOpen => {
        setShowModalEventos(closeModalEventosOpen);
    }


    const handleSelect = async ({ start, end }) => {
        setShowModal(true);
        setData(start);
    };

    const cadastrarEvento = async () => {
      const response = await postEventos({
        id: uuid(),
        type: type,
        title: titulo,
        start: data,
        end: data,
        descricao: descricao
      });
      if(response.status === 200){
          closeModal(false);
          buscarEventos();
          setUpdateEventos(true);
      }
    }

    const detalhesEvento = (event) => {
        setShowModalEventos(true);
        setTitulo(event.title);
        setDescricao(event.descricao);
    }

  return (
    <div className={styles.calendar}>
        <Calendar
            localizer={localizer}
            defaultDate={new Date()}
            defaultView='month'
            style={{ height: 400, width: '100%' }}
            startAccessor="start"
            endAccessor="end"
            selectable={true}
            events={eventsData}
            onSelectEvent={(event) => detalhesEvento(event)}
            onSelectSlot={handleSelect}
            messages={{
                next: '>',
                previous: '<',
                today: 'Hoje',
                month: 'Mês',
                week: 'Semana',
                day: 'Dia',
                agenda: 'Agenda',
                date: 'Data',
                time: 'Tempo',
                event: 'Evento',
                showMore: total => `+${total} mais`
            }}
        />
        <ModalCentralizado 
            showModal={showModal} 
            closeModal={closeModal}
            title="Adicionar Evento"
            content={
              <>
                <FormGroup>
                  <Label for="exampleSelect">Tipo</Label>
                  <Input 
                    type="select" 
                    name="select" 
                    id="selectEvent"
                    onChange={(e) => setType(e.target.value)}
                    value={type}
                    >
                    <option>Selecione um Tipo</option>
                    <option value="Lembrete">Lembrete</option>
                    <option value="Aviso">Aviso</option>
                  </Input>
                </FormGroup>
                <InputComponent
                    type="text"
                    name="Titulo"
                    label="Titulo"
                    placeholder="Insira o titulo do evento"
                    onChange={(e) => setTitulo(e.target.value)}
                />
                <InputComponent
                    type="text"
                    name="Descrição"
                    label="Descrição"
                    placeholder="Insira a Descrição do evento"
                    onChange={(e) => setDescricao(e.target.value)}
                />
                <Button
                    type="submit"
                    label="Adicionar"
                    onClick={() => cadastrarEvento()}
                >
                    Adicionar
                </Button>
              </>
            }
          />
           <ModalCentralizado 
            showModal={showModalEventos} 
            closeModal={closeModalEventos}
            title="Descrição"
            content={
              <>
                <p>
                    {descricao}
                </p>
              </>
            }
        />
    </div>
  );
}