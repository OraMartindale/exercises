import styled from 'styled-components';

const MenuItem = ({ item }) => {
  const { name, image } = item;
  return (
    <Container>
      <img src={`/images/${image}`} alt={name} />
      <h1>{name}</h1>
      <button>View Item</button>
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid #546D63; // or 848D8A
  border-radius: 10px;
  padding: 8px;
  margin: 15px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  img {
    max-width: 100%;
    border-radius: 10px 10px 0 0;
  }

  h1 {
    font-family: 'Montserrat';
    font-weight: bold;
    font-size: 1.5rem;
    text-transform: uppercase;
    text-align: center;
    min-height: 60px;
  }

  button {
    background-color: #546D63;
    color: white;
    font-family: 'Montserrat';
    font-weight: bold;
    font-size: 1rem;
    text-transform: uppercase;
    width: 100%;
    border: none;
    border-radius: 10px;
    padding: 15px 0;
    box-shadow: 0.3rem 0.3rem 0.4rem 0 #d7d2cb;

    &:hover {
      background-color: #789888;
    }

    &:active {
      transform: scale(0.97);
    }
  }
`;

export default MenuItem;
