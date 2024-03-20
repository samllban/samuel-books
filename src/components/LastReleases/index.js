import { livros } from './dateLatsReleases';
import styled from 'styled-components';
import { Titulo } from '../Titulo';

const DateLastReleasesContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    flex-direction: column;
    display: flex;
`

const NewBooksContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function LastReleases() {
    return (
        <DateLastReleasesContainer>
            <Titulo
                cor="EB9B00"
                tamanhoFonte = "36px"
            >
                ÚLTIMOS LANÇAMENTOS
            </Titulo>
            <NewBooksContainer>
                {livros.map(livro => (
                    <img src={livro.src} />
                ))}
            </NewBooksContainer>
        </DateLastReleasesContainer>
    )
}

export default LastReleases; 