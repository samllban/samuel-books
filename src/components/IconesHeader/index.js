import perfil from '../../img/perfil.svg';
import sacola from '../../img/sacola.svg';
import styled from 'styled-components';

const IconesUl = styled.ul`
    display: flex;
    align-items: center;
`

const IconeLi = styled.li`
    margin: 40px;
    width: 25px;
`
const icones = [perfil, sacola];

function IconesHeader() {
    return (
        <IconesUl>
            {icones.map((icone) => (
                <IconeLi>
                    <img src={icone}></img>
                </IconeLi>
            ))}
        </IconesUl>
    )
}

export default IconesHeader;