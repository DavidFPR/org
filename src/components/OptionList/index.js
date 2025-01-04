import './OptionList.css';

const OptionList = (props) => {
  // teams.map((team, index) => {
  //   return (
  //     <option key={index} value={team}>
  //       {team}
  //     </option>
  //   );
  // });

  const handleChange = (e) => {
    console.log('change detected', e.target.value);
    props.setValue(e.target.value);
  };

  return (
    <div className="option-list">
      <label>Equipos</label>
      <select defaultValue={''} onChange={handleChange}>
        <option value="" disabled defaultValue="" hidden>
          Seleccionar equipo
        </option>
        {props.teams.map((team, index) => (<option key={index} value={team}>{team}</option>))};
      </select>
    </div>
  );
};

export default OptionList;
