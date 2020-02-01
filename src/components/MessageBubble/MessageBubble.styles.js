import styled from 'styled-components';

export const Bubble = styled.div`
  background-color: ${({alignRight}) => alignRight ? 'rgb(158,75,192)' : 'rgb(241, 240, 240)'};
  margin: 0.125em;
  padding: 0.5em;
  display: inline-block;
  color: ${({alignRight}) => alignRight ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)'};
  border-radius: 16px;
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
