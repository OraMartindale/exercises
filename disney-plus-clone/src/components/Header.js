import styled from 'styled-components';

const Header = () => {
  return (
    <Nav>
      <Logo>
        <img src="/images/logo.svg" alt="Disney+" />
      </Logo>
      <NavMenu>
        <a href="/home">
          <img src="/images/home-icon.svg" alt="home" />
          <span>home</span>
        </a>
        <a href="/search">
          <img src="/images/search-icon.svg" alt="search" />
          <span>search</span>
        </a>
        <a href="/watchlist">
          <img src="/images/watchlist-icon.svg" alt="watchlist" />
          <span>watchlist</span>
        </a>
        <a href="/originals">
          <img src="/images/original-icon.svg" alt="originals" />
          <span>originals</span>
        </a>
        <a href="/movies">
          <img src="/images/movie-icon.svg" alt="movies" />
          <span>movies</span>
        </a>
        <a href="/series">
          <img src="/images/series-icon.svg" alt="series" />
          <span>series</span>
        </a>
      </NavMenu>
      <Login>login</Login>
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

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  flex-flow: row nowrap;
  height: 100%;
  margin: 0;
  padding: 0;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  @media (max-width: 768px) {
    display: none;
  }

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
      width: 20px;
      min-width: 20px;
    }

    span {
      text-transform: uppercase;
      color: rgb(249, 249, 249);
      font-size: 0.9rem;
      letter-spacing: 1.42px;
      line-height: 1.1;
      padding: 2px 0;
      white-space: nowrap;
      position: relative;

      &:before {
        content: '';
        background-color: rgb(249, 249, 249);
        border-radius: 0 0 4px 4px;
        bottom: -6px;
        height: 2px;
        opacity: 0;
        position: absolute;
        left: 0;
        right: 0;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1;
      }
    }
  }
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
