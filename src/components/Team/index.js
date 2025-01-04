import './Team.css';
import TeamMember from '../Member';
import hexToRgba from 'hex-to-rgba';

const Team = (props) => {
  //destructuring

  const { primaryColor, secondaryColor, name, id } = props.data;
  const { members, deleteMember, updateColor, likeMember } = props;

  return (
    <>
      {members.length > 0 && (
        <section
          className="team"
          style={{ backgroundColor: hexToRgba(primaryColor, 0.6) }}
        >
          <input
            type="color"
            className="input-color"
            value={primaryColor}
            onChange={(e) => {
              updateColor(e.target.value, id);
            }}
          />
          <h3 style={{ borderColor: primaryColor }}>{name}</h3>
          <div className="members">
            {members.map((member, index) => (
              <TeamMember
                key={index}
                data={member}
                primaryColor={primaryColor}
                deleteMember={deleteMember}
                likeMember={likeMember}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Team;
