import { livros } from './dateLatsReleases';
import styled from 'styled-components';

const DateLastReleasesContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    flex-direction: column;
    display: flex;
`

const Titulo = styled.h2`
    width: 100%;
    padding: 30px 0;
    background-color: #fff;
    color: #eb9b00;
    font-size: 36px;
    text-align: center;
    margin: 0;
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
            <Titulo>ULTIMOS LANÇAMENTOS</Titulo>
            <NewBooksContainer>
                {livros.map(livro => (
                    <img src={livro.src} />
                ))}
            </NewBooksContainer>
        </DateLastReleasesContainer>
    )
}

export default LastReleases; 