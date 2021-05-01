import styled from 'styled-components';

const Login = () => {
  return (
    <Container>
      <Content>
        <CallToAction>
          <CallToActionLogoOne src="/images/cta-logo-one.svg" alt="" />
          <SignUp>Get All Three</SignUp>
          <Description>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem ipsa nulla quibusdam rerum architecto laborum repellendus dolore provident doloribus aliquid. Quam iure saepe quaerat necessitatibus possimus nesciunt sint ullam iusto.</Description>
          <CallToActionLogoTwo src="/images/cta-logo-two.png" alt="" />
        </CallToAction>
        <BgImage />
      </Content>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: center;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  position: relative;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
`;

const BgImage = styled.div`
  height: 100%;
  background-image: url("/images/login-background.jpg");
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;

const CallToAction = styled.div`
  margin-bottom: 2vw;
  max-width: 650px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 0;
  transition: opacity 0.2s ease-out;
  width: 100%;
`;

const CallToActionLogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`;

const SignUp = styled.a`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.2rem;
  letter-spacing: 1.5px;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 100%;
  padding: 20px;
  border: 1px solid transparent;
  border-radius: 4px;

  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  color: hsla(0, 0, 95.3%, 1);
  font-size: 0.8rem;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;

const CallToActionLogoTwo = styled.img`
  width: 100%;
  max-width: 600px;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: bottom;
`;

export default Login;
