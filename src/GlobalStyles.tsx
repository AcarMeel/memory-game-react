import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle<{ $whiteColor?: boolean; }>`
    :root {
        font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
        line-height: 1.5;
        font-weight: 400;
    
        background-color: #14248A;
    
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    body {
        color: ${props => (props.$whiteColor ? '#F9F5FF' : '#28262C')};
    }
`;

export default GlobalStyle;