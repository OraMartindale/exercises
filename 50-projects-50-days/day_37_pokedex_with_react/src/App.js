import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from './components/Card';

const App = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(
    () => {
      const fetchData = async () => {
        for (let i = 1; i <= 12; i++) {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
          const pokemon = await response.json();
          setPokemons(prevPokemons => [
            ...prevPokemons,
            pokemon
          ]);
        }
      };

      fetchData();
    },
    []
  )

  return (
    <>
      <H1>Pokedex</H1>
      <PokedexContainer>
        {pokemons && pokemons.map(pokemon => <Card key={pokemon.id} pokemon={pokemon} />)}
      </PokedexContainer>
    </>
  );
}

const H1 = styled.h1`
  letter-spacing: 3px;
`;

const PokedexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: space-between;
  justify-content: center;
  margin: 0 auto;
  max-width: 1200px;
`;

export default App;
