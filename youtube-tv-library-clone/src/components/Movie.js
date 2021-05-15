import styled from 'styled-components';

const Movie = ({ movie }) => {
  const { backdrop_path: photo , title } = movie;

  return (
    <Container>
      <img src={`https://image.tmdb.org/t/p/w300/${photo}`} alt={title} />
      <Title>{title}</Title>
      <Details>4 new episodes</Details>
    </Container>
  );
};

const Container = styled.div`
  margin: 10px;
  max-width: 300px;

  img {
    border-radius: 5px;
  }
`;

const Title = styled.p`
  font-size: 1.5rem;
  padding: 0;
  margin: 0;
`;
const Details = styled.p`
  font-size: 1rem;
  padding: 0;
  margin: 0;
`;

export default Movie;