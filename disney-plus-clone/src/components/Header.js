import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { auth, provider } from '../firebase';
import { selectUserName, selectUserPhoto, setUserLoginDetails } from '../features/user/userSlice';
import NavMenu from './NavMenu';

const Header = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  const setUser = user => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  const handleAuth = () => {
    auth.signInWithPopup(provider)
      .then(result => {
        setUser(result.user);
      })
      .catch(console.error);
  }
  return (
    <Nav>
      <Logo>
        <img src="/images/logo.svg" alt="Disney+" />
      </Logo>
      {
        userName ?
          <>
            <NavMenu />
            <UserImg src={userPhoto} alt={userName} />
          </>
          :
          <Login onClick={handleAuth}>login</Login>
      }
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 1rem;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  img {
    display: block;
    width: 100%;
  }
`;

const UserImg = styled.img`
  height: 80%;
  border-radius: 50%;
`;

const Login = styled.a`
  text-transform: uppercase;
  letter-spacing: 1.5px;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease-out 0s;

  &:hover {
    color: black;
    background-color: #f9f9f9;
    border-color: transparent;
  }
`;

export default Header;
