import { H1, Container, Div, Imag, Name, LiFollowers, Ul, LiName } from "./style";


export function Page() {
    return (
        <Container>
            <H1>Folha de Apresentação</H1>
            <nav>

                <Div />
                <Imag src="http://github.com/migueldeep.png" alt="sem imagem"></Imag>
                <Name>Miguel Manuel <span>404</span></Name>
                <h3>Angola</h3>
                <hr />

                <aside>
                    <Ul>
                        <LiFollowers>II</LiFollowers>
                        <LiFollowers>13</LiFollowers>
                        <LiFollowers>A</LiFollowers>
                    </Ul>
                    <Ul id="name">
                        <LiName>Curso</LiName>
                        <LiName>Classe</LiName>
                        <LiName>Turma</LiName>
                    </Ul>
                </aside>
            </nav>
        </Container>
    )
}
