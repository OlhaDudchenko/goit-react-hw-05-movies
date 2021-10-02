import styled from "@emotion/styled";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.boxShadow.backdrop};
`;

export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: auto;
  height: 500px;
  max-width: 600px;
  width: 100%;
  padding: 30px;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: ${(props) => props.theme.boxShadow.content};
`;
