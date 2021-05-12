import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import db from '../firebase';

const Detail = () => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});

  useEffect(
    () => {
      db.collection('movies').doc(id)
        .get()
        .then(doc => {
          if (doc.exists) {
            setDetailData(doc.data());
          } else {
            console.log("movie not found in firebase");
          }
        })
        .catch(console.error);
    }, [id]
  );

  return (
    <Container>
      <Background>
        <img src={detailData.backgroundImg} alt={detailData.title} />
      </Background>

      <ImageTitle>
        <img src={detailData.titleImg} alt={detailData.title} />
      </ImageTitle>

      <MetaContent>
        <Controls>
          <Player>
            <img src="/images/play-icon-black.png" alt="Play" />
            <span>Play</span>
          </Player>
          <Trailer>
            <img src="/images/play-icon-white.png" alt="Trailer" />
            <span>Trailer</span>
          </Trailer>
          <AddToFavorites>
            <span />
            <span />
          </AddToFavorites>
          <GroupWatch>
            <img src="/images/group-icon.png" alt="Group Watch" />
          </GroupWatch>
        </Controls>
        <SubTitle>
          {detailData.subTitle}
        </SubTitle>
        <Description>
          {detailData.description}
        </Description>
      </MetaContent>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
  opacity: 0.8;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;

  img {
    width: 100vw;
    height: 100vh;

    @media (max-width: 768px) {
      width: initial;
    }
  }
`;

const ImageTitle = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  -webkit-box-pack: start;
  margin: 0 auto;
  height: 30vw;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;

  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }
`;

const MetaContent = styled.div`
  max-width: 874px;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  margin: 24px 0;
  min-height: 56px;
`;

const Player = styled.button`
  font-size: 15px;
  margin: 0 22px 0 0;
  padding: 0 24px;
  height: 56px;
  border: none;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  background: rgb(249, 249, 249);
  color: black;

  img {
    width: 32px;
  }

  &:hover {
    background: rgb(198, 198, 198);
  }

  @media (max-width: 768px) {
    height: 45px;
    padding: 0 12px;
    font-size: 12px;
    margin: 0 10px 0 0;

    img {
      width: 25px;
    }
  }
`;

const Trailer = styled(Player)`
  background-color: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgba(249, 249, 249);
`;

const roundButton = styled.div`
  margin-right: 16px;
  height: 44px;
  width: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;
`;


const AddToFavorites = styled(roundButton)`
  span {
    background-color: rgb(249, 249, 249);
    display: inline-block;

    &:first-child {
      height: 2px;
      transform: translate(1px, 0) rotate(0deg);
      width: 16px;
    }

    &:nth-child(2) {
      height: 16px;
      transform: translateX(-8px) rotate(0deg);
      width: 2px;
    }
  }
`;

const GroupWatch = styled(roundButton)`
  img {
    width: 100%;
  }
`;

const SubTitle = styled.div`
  color: rbc(249, 249, 249);
  font-size: 15px;
  min-height: 20px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  padding: 16px 0;
  color: rgba(249, 249, 249);

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export default Detail;
