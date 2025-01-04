import './MiOrg.css';

const MiOrg = (props) => {
  return (
    <section className="orgSection">
      <h3 className="title">Mi Organización</h3>
      <img src="/img/add.png" alt="botón add" onClick={props.switchForm}></img>
    </section>
  );
};

export default MiOrg;

// useState usage
// const [state , setStateFunction] = useState(initialState);
