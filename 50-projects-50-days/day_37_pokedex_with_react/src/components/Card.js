import styled from 'styled-components';

const Card = ({ pokemon }) => {
  const { id, name, types } = pokemon;

  const colors = {
    fire: '#fddfdf',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
  };
  const mainTypes = Object.keys(colors);

  const formatPaddedId = id => {
    return id.toString().padStart(3, '0');
  };

  const formatName = name => {
    return name[0].toUpperCase() + name.slice(1);
  };

  const formatType = types => {
    const pokeTypes = types.map(type => type.type.name);
    return mainTypes.find(type => pokeTypes.indexOf(type) !== -1);
  };

  const formatColor = types => {
    const pokeTypes = types.map(type => type.type.name);
    const type = mainTypes.find(type => pokeTypes.indexOf(type) != -1);
    return colors[type];
  };

  const Pokemon = styled.div`
    background-color: ${formatColor(types)};
    border-radius: 10px;
    box-shadow: 0 3px 15px rgba(100, 100, 100, 0.5);
    margin: 10px;
    padding: 20px;
    text-align: center;
  `;

  const ImageContainer = styled.div`
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 50%;
    width: 120px;
    height: 120px;
    text-align: center;
  `;

  const Img = styled.img`
    max-width: 90%;
    margin-top: 20px;
  `;

  const Info = styled.div`
    margin-top: 20px;
  `;

  const Number = styled.span`
    background-color: rgba(0, 0, 0, 0.1);
    padding: 5px 10px;
    border-radius: 10px;
    font-size: 0.8em;
  `;

  const H3 = styled.h3`
    margin: 15px 0 7px;
    letter-spacing: 1px;
  `;

  return (
    <Pokemon>
      <ImageContainer>
        <Img src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} alt={formatName(name)} />
      </ImageContainer>
      <Info>
        <Number>#{formatPaddedId(id)}</Number>
        <H3>{formatName(name)}</H3>
        <small>Type: {formatType(types)}</small>
      </Info>
    </Pokemon>
  );
};

export default Card;
