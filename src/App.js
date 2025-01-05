import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import MiOrg from './components/MiOrg';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [members, updateMembers] = useState([
    {
      id: uuid(),
      name: 'Harland Lohora',
      photo: 'https://github.com/harlandlohora.png',
      position: 'Instructor de Front End',
      team: 'Front End',
      fav: true,
    },
    {
      id: uuid(),
      name: 'Genesys Rondón',
      photo:
        'https://cdn2.gnarususercontent.com.br/6/408897/2992a46f-a1cd-4a9c-88eb-bdb61087f9c2.jpg?width=100&height=100&aspect_ratio=1:1',
      position: 'Desarrolladora de Software e Instructora',
      team: 'Programación',
      fav: true,
    },
    {
      id: uuid(),
      name: 'Jeanmarie Quijada    ',
      photo: 'https://github.com/JeanmarieAluraLatam.png',
      position: 'Instructora de UX y Diseño',
      team: 'UX y Diseño',
      fav: false,
    },
    {
      id: uuid(),

      name: 'Christian Velasco',
      photo: 'https://github.com/christianpva.png',
      position: 'Head de Alura e Instructor',
      team: 'Programación',
      fav: false,
    },
    {
      id: uuid(),
      name: 'José González',
      photo: 'https://github.com/JoseDarioGonzalezCha.png',
      position: 'Desarrollador FullStack',
      team: 'Innovación y Gestión',
      fav: false,
    },
  ]);

  const [teams, updateTeams] = useState([
    {
      id: uuid(),
      name: 'Programación',
      primaryColor: '#57C278',
      secondaryColor: '#D9F7E9',
    },
    {
      id: uuid(),
      name: 'Front End',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF',
    },
    {
      id: uuid(),
      name: 'Data Science',
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2',
    },
    {
      id: uuid(),
      name: 'DevOps',
      primaryColor: '#E06B69',
      secondaryColor: '#FDE7E8',
    },
    {
      id: uuid(),
      name: 'UX y Diseño',
      primaryColor: '#DB6EBF',
      secondaryColor: '#FAE9F5',
    },
    {
      id: uuid(),
      name: 'Móvil',
      primaryColor: '#FFBA05',
      secondaryColor: '#FFF5D9',
    },
    {
      id: uuid(),
      name: 'Innovación y Gestión',
      primaryColor: '#FF8A29',
      secondaryColor: '#FFEEDF',
    },
  ]);

  const switchForm = () => {
    setShowForm(!showForm);
  };

  // Register team member

  const registerMember = (member) => {
    console.log('New team member', member);
    // Spread operator
    updateMembers([...members, member]);
  };

  // Delete team member
  const deleteMember = (id) => {
    console.log('Delete member with ID', id);
    const remainingMembers = members.filter((member) => member.id !== id);
    updateMembers(remainingMembers);
  };

  //Update team color
  const updateColor = (color, id) => {
    console.log('Color:', color, 'id:', id);
    const teamUpdate = teams.map((team) => {
      if (team.id === id) {
        team.primaryColor = color;
      }
      return team;
    });

    updateTeams(teamUpdate);
  };

  //Create new team
  const createTeam = (newTeam) => {
    console.log(newTeam);
    updateTeams([...teams, { ...newTeam, id: uuid() }]);
  };

  //Like team member
  const likeMember = (id) => {
    console.log('liked', id);
    const remainingMembers = members.map((member) => {
      if (member.id === id) {
        member.fav = !member.fav;
      }
      return member;
    });

    updateMembers(remainingMembers);
  };

  return (
    <div className="app">
      <Header />
      {showForm && (
        <Form
          teams={teams.map((team) => team.name)}
          registerMember={registerMember}
          createTeam={createTeam}
        />
      )}
      <MiOrg switchForm={switchForm} />
      {teams.map((team, index) => (
        <Team
          data={team}
          key={team.name}
          members={members.filter((member) => member.team === team.name)}
          deleteMember={deleteMember}
          updateColor={updateColor}
          likeMember={likeMember}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
