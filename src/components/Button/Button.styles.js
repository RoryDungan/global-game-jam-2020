import styled from 'styled-components';

export const StyledButton = styled.button`
  transition: all 0.25s;
  width: 100%;
  height: 50%;
  color: rgb(123,182,211);
  background-color: rgb(240, 240, 240);
  border: 3px solid rgb(123,182,211);
  border-radius: 48px;
  font-weight: bold;
  font-size: 20px;
  &:focus {
    outline: none;
  }
  cursor: pointer;
  &:hover {
    background-color: rgb(123,182,211);
    color: white;
    -webkit-box-shadow: -4px 4px 0px 0px rgb(85, 84, 99);
    -moz-box-shadow: -4px 4px 0px 0px rgb(85, 84, 99);
    box-shadow: -4px 4px 0px 0px rgb(85, 84, 99);
  }
`;
