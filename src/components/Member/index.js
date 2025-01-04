import './Member.css';
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const TeamMember = (props) => {
  const { name, photo, position, team, id, fav } = props.data;
  const { primaryColor, deleteMember, likeMember} = props;

  return (
    <div className="member">
      <AiFillCloseCircle className="delete" onClick={() => deleteMember(id)} />
      <div className="heading" style={{ backgroundColor: primaryColor }}>
        <img src={photo} alt={name} />
      </div>
      <div className="info">
        <h4>{name}</h4>
        <h5>{position}</h5>
        {fav ? <AiFillHeart color="#D40808" onClick={ () => likeMember(id)} /> : <AiOutlineHeart  onClick={ () => likeMember(id)}/>}
      </div>
    </div>
  );
};

export default TeamMember;
