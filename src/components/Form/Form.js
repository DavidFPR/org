import { useState } from 'react';
import './Form.css';
import Input from '../Input';
import OptionList from '../OptionList';
import Button from '../Button';
import { v4 as uuid } from 'uuid';

const Form = (props) => {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [photo, setPhoto] = useState('');
  const [team, setTeam] = useState('');

  const [teamName, setTeamName] = useState('');
  const [teamColor, setTeamColor] = useState('');

  const { registerMember, createTeam } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado');
    let dataSent = {
      id: uuid(),
      name,
      position,
      photo,
      team,
    };
    registerMember(dataSent);
  };

  const handleTeamSubmit = (e) => {
    e.preventDefault();
    createTeam({ name: teamName, primaryColor: teamColor });
  };

  return (
    <section className="form__members">
      <form onSubmit={handleSubmit}>
        <h2>Rellena el formulario para registrar un colaborador.</h2>
        <Input
          title="Nombre"
          placeholder="Ingresar nombre"
          required
          data={name}
          setValue={setName}
        />
        <Input
          title="Puesto"
          placeholder="Ingresar puesto"
          required
          data={position}
          setValue={setPosition}
        />
        <Input
          title="Foto"
          placeholder="Ingresar enlace de foto"
          required
          data={photo}
          setValue={setPhoto}
        />
        <OptionList data={team} setValue={setTeam} teams={props.teams} />
        <Button>Registrar</Button>
      </form>
      <form onSubmit={handleTeamSubmit}>
        <h2>Rellena el formulario para crear un nuevo equipo.</h2>
        <Input
          title="Nombre"
          placeholder="Ingresar nombre del equipo"
          required
          data={teamName}
          setValue={setTeamName}
        />
        <Input
          title="Color"
          placeholder="Ingresar color del equipo como valor hex"
          required
          data={teamColor}
          setValue={setTeamColor}
          type="color"
        />
        <Button>Crear</Button>
      </form>
    </section>
  );
};

export default Form;


