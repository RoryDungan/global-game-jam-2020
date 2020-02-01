import styled from 'styled-components';

export const Bubble = styled.div`
background-color: ;
  background-color: ${({alignRight}) => alignRight ? 'rgb(123,182,211)' : '#dedcde'};
  margin: 0.35em;
  padding: 1em;
  display: inline-block;
  color: ${({alignRight}) => alignRight ? 'rgb(255,255,255)' : 'rgb(110, 110, 110)'};
  border-radius: 16px;
  font-size: 18px;
  -webkit-box-shadow: -4px 4px 0px 0px rgb(85, 84, 99);
  -moz-box-shadow: -4px 4px 0px 0px rgb(85, 84, 99);
  box-shadow: -4px 4px 0px 0px rgb(85, 84, 99);
`;

export const Container = styled.div`
  position: relative;
  max-width: 75%;
  :not(:first-child) > div {
    border-top-right-radius: ${({alignRight}) => alignRight ? '0' : '16px'};
    border-top-left-radius: ${({alignRight}) => alignRight ? '16px' : '0'};
  }
  :not(:last-child) > div {
    border-bottom-right-radius: ${({alignRight}) => alignRight ? '0' : '16px'};
    border-bottom-left-radius: ${({alignRight}) => alignRight ? '16px' : '0'};
  }
`;
