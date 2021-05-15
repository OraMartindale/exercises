import styled from 'styled-components';

const YouTubeTvLogo = () => {
  return (
    <Container>
      <YouTubeTvLogo>
        <span>
          <i className="fas fa-play"></i>
        </span>
        TV
      </YouTubeTvLogo>
    </Container>
  );
};

const Container = styled.div`
  font-size: 3rem;
  font-weight: 700;
  display: flex;
  align-items: center;

  span {
    background-color: red;
    font-size: 1.5rem;
    padding: 10px 15px;
    border-radius: 10px;
    box-shadow: 0 0 10px red;
  }
`;

export default YouTubeTvLogo;
