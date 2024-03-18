import styled from 'styled-components';

const OpcoesUl = styled.ul`
    display: flex;
`

const Opcaoli = styled.li`
    min-width: 120px;
    font-size: 16px;
    display: flex;
    justify-items: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
`
const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];

function OpcoesHeader() {
    return (
        <OpcoesUl>
            {textoOpcoes.map((texto) => (
                <Opcaoli>
                    <p>{texto}</p>
                </Opcaoli>
            ))}
        </OpcoesUl>
    )
}

export default OpcoesHeader;
