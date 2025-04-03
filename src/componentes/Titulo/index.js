import styled from "styled-components";

export const Titulo = styled.h2`
    width: 100%;
    padding: 30px 0;
    background-color: #fff;
    color: ${(props) => props.cor || "orange"};
    font-size: ${(props) => props.tamanhoFonte || "12px"};
    text-align: center;
    margin: 0;
`;
