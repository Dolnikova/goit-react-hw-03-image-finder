import styled from 'styled-components';

export const Overlay = styled.div`
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const Modal = styled.div`
  height: auto;
  left: 50%;
  position: relative;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
`;

export const ModalImg = styled.img`
  display: block;
  height: auto;
  max-width: 100%;
`;
