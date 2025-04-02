import Header from "./componentes/Header";
import styled from "styled-components";

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: darkblue;
`;

function App() {
    return (
        <AppContainer>
            <Header />
        </AppContainer>
    );
}

export default App;
