import styled from 'styled-components';

const User = ({ user }) => {
  return (
    <ListItem>
      <Img src={user.picture.large} alt={user.name.first} />
      <UserInfo>
        <UserName>{user.name.first} {user.name.last}</UserName>
        <UserLocation>{user.location.city}, {user.location.country}</UserLocation>
      </UserInfo>
    </ListItem>
  );
};


const ListItem = styled.li`
  display: flex;
  padding: 20px;

  &:not(:last-of-type) {
    border-bottom: 1px solid #eee;
  }
`;

const Img = styled.img`
  border-radius: 50%;
  object-fit: cover;
  width: 50px;
  height: 50px;
`;

const UserInfo = styled.div`
  margin-left: 10px;
`;

const UserName = styled.h4`
  margin: 0 0 10px;
`;

const UserLocation = styled.p`
  font-size: 0.6rem;
`;


export default User;
