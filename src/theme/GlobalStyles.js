import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
   body {
     background: ${({ theme }) => theme.background};
     color: ${({ theme }) => theme.color};
     transition: all 0.50s linear; 

     @media (min-width: 768px) {
      .timeline:before {
        left: calc(32.7% + 6px);
      }
     }

     @media (max-width: 768px) {
      .Typewriter__wrapper {
        font-size: 1.5em;
      }
     }
  }
`;

export default GlobalStyles;
