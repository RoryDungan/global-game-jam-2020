import styled, { keyframes } from 'styled-components';


const keyFrameAnimation = keyframes`
  0% {
    -webkit-transform:translateY(0px)
  }
  28% {
    -webkit-transform:translateY(-10px)
  }
  44% {
    -webkit-transform:translateY(0px)
  }
`;

export const StyledTiContainer = styled.div`
  margin-left: 32px;
`;

export const StyledTiBlock = styled.div`
  align-items: center;
  display: flex;
  height: 16px;
`;

export const StyledTiDot = styled.div`
  -webkit-animation: ${keyFrameAnimation} 1.5s infinite ease-in-out;
  border-radius: 50%;
  display: inline-block;
  height: 16px;
  margin-right: 4px;
  width: 16px;
  background-color: rgb(85, 84, 99);
  &:nth-child(1) {
    -webkit-animation-delay: 200ms;
  }
  &:nth-child(2) {
    -webkit-animation-delay: 300ms;
  }
  &:nth-child(3) {
    -webkit-animation-delay: 400ms;
  }
`;
