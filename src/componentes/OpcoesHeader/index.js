import { Link } from "react-router-dom";
import styled from "styled-components";

const Opcoes = styled.ul`
    display: flex;
`;
const Opcao = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;

    &:hover {
        background-color: yellow;
    }
`;

const textoOpcoes = ["CATEGORIAS", "FAVORITOS", "ESTANTE"];

function OpcoesHeader() {
    return (
        <Opcoes>
            {textoOpcoes.map((texto) => (
                <Link to={`/${texto.toLowerCase()}`}>
                    <Opcao>{texto}</Opcao>
                </Link>
            ))}
        </Opcoes>
    );
}

export default OpcoesHeader;
