import "./App.css";
import Logo from "./componentes/Logo/index.js";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Logo></Logo>
                <ul className="opcoes">
                    <li>CATEGORIAS</li>
                    <li>MINHA ESTANTE</li>
                    <li>FAVORITOS</li>
                </ul>
            </header>
        </div>
    );
}

export default App;
