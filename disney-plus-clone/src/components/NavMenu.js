import styled from 'styled-components';

const Menu = () => {
  return (
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

  );
};

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

export default Menu;