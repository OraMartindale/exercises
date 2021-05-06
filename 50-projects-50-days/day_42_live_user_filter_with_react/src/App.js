import { useEffect, useState } from 'react';
import styled from 'styled-components';
import User from './components/User';

const App = () => {
  const [users, setUsers] = useState([]);
  const [filterUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=20')
      .then(response => response.json())
      .then(data => {
        setUsers(data.results);
        setFilteredUsers(data.results);
      })
      .catch(console.error)
  }, []);

  useEffect(() => {
    let tempUsers = [];
    users.forEach(user => {
      const userStr = user.name.first + user.name.last + user.location.city + user.location.country;
      if (userStr.toLowerCase().includes(searchTerm.toLowerCase())) {
        tempUsers.push(user);
      }
      setFilteredUsers(tempUsers);
    });
  }, [searchTerm, users]);

  const updateSearchTerm = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <Container>
      <Header>
        <HeaderTitle>Live User Filter</HeaderTitle>
        <Subtitle>Search by name and/or location</Subtitle>
        <SearchInput
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={updateSearchTerm}
        />
      </Header>

      <UserList>
        {filterUsers ? filterUsers.map((user, index) =>
          <User key={`${index}_${user.id.value}`} user={user} />) :
          <li>
            <h3>Loading...</h3>
          </li>
        }
      </UserList>
    </Container>
  );
}

const Container = styled.div`
  border-radius: 5px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  width: 300px;
`;


const HeaderTitle = styled.h4`
  margin: 0;
`;

const Subtitle = styled.small`
  display: inline-block;
  margin: 5px 0 20px;
  opacity: 0.8;
`;

const Header = styled.header`
  background-color: #3d57db;
  color: white;
  padding: 30px 20px;
`;

const SearchInput = styled.input`
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  font-size: 0.8rem;
  padding: 10px 15px;
  border: none;
  border-radius: 50px;
  width: 100%;

  &:focus {
    outline: none;
  }
`;

const UserList = styled.ul`
  list-style-type: none;
  background-color: white;
  margin: 0;
  padding: 0;
  max-height: 400px;
  overflow-y: auto;
`;

export default App;
