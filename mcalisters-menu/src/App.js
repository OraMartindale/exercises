import styled from 'styled-components';
import MenuItem from './components/MenuItem';
import menu from './data/menu'

const App = () => {
  return (
    <Container>
      <Subtitle>What's New</Subtitle>
      <Title>From the Kitchen</Title>
      <Menu>
        {
          menu &&
          menu.map(item => (
            <MenuItem
              key={item.id}
              item={item}
            />
          ))
        }
        
      </Menu>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Subtitle = styled.h2`
  font-family: 'Montserrat';
  font-weight: 700;
  text-transform: uppercase;
  color: #1E2529;
  margin: 0;
  padding: 0;
`;

const Title = styled.h1`
  font-family: Pacifico;
  font-size: 3rem;
  color: #C85F39;
  margin: -20px 0 0;
  padding: 0;
`;

const Menu = styled.div`
  max-width: 1080px;
  display: flex;
  flex-wrap: wrap;
`;

export default App;
