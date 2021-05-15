import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Movie from './components/Movie';
import YouTubeTvLogo from './components/YouTubeTvLogo';

const API_KEY = '<ENTER API KEY HERE>';
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(
    () => {
      getMovies(API_URL);
    },
    []
  );

  const getMovies = url => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setMovies(data.results);
      });
  };

  return (
    <Container>
      <video src="/videos/background-video.mp4" muted loop autoplay preload />
      <Header>
        <YouTubeTvLogo />
        <Nav>
          <MenuItem>Library</MenuItem>
          <MenuItem>Home</MenuItem>
          <MenuItem>Live</MenuItem>
        </Nav>
        <Search>
          <i className="fas fa-search"></i>
        </Search>
      </Header>
      <MenuAndContent>
        <Menu>
          <MenuButton className="active">
            New in Your Library
          </MenuButton>
          <MenuButton>Most Watched</MenuButton>
          <MenuButton>Scheduled</MenuButton>
          <MenuButton>Shows</MenuButton>
          <MenuButton>Movies</MenuButton>
          <MenuButton>Sports</MenuButton>
          <MenuButton>Events</MenuButton>
        </Menu>
        <Content>
          {
            movies &&
            movies.map(movie => (
              <Movie
                key={movie.id}
                movie={movie}
              />
            ))
          }
        </Content>
      </MenuAndContent>
    </Container>
  );
};

const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.7);

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    opacity: 0.8;
    z-index: -1;
  }
`;

const Header = styled.div`
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 30px 40px;
`;

const Nav = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MenuItem = styled.li`
  color: white;
  text-transform: uppercase;
  font-size: 1.3rem;
  padding: 0 20px;
`;

const Search = styled.div`
  font-size: 1.3rem;
`;

const MenuAndContent = styled.div`
  display: flex;
`;

const Menu = styled.div`
  width: 25vw;
  height: 100vh;
  color: white;
  padding: 40px;
`;

const MenuButton = styled.button`
  display: block;
  background-color: inherit;
  color: white;
  text-transform: uppercase;
  font-size: 1.3rem;
  border: none;
  padding: 20px;
  width: 100%;
  text-align: left;

  &.active {
    background-color: white;
    color: black;
    box-shadow: 0 0 10px white;
    border-radius: 5px;
  }
`;

const Content = styled.div`
  width: 75vw;
  height: 100vh;
  color: white;
  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;
`;

export default App;
