/*USAR CHAVES P COMENTARIO*/
import Title from "../src/components/title/Title"
import Subtitle, {NewSubtitle} from "../src/components/subtitle/Subtitle" //nao default é importada entre chaves

function HomePage(){
  return (
    <div>
      Hello World, ReactJs + NextJs!!!
      <Title text="Um texto chamado do index pela props"/> {/*esta é uma tag com propriedade e que fecha em si mesma*/}
      <p>Um parágrafo qualquer</p>
      <Title text="Outro texto chamado do index pela props"/>
      <p>Outro parágrafo qualquer</p>
      <Title>Exemplo de Tag com filho</Title> {/*esta é uma tag com children(filho) - abre e fecha*/}
      <p>O parágrafo qualquer para a props.children no arq title.jsx</p>
      <Subtitle /* exemplo de nao passar texto para o site chamar a mensagem default */ />
      <NewSubtitle text="Novo Subtitulo" />
      <p>Outro parágrafo qualquer</p>
    </div>
  )
}

export default HomePage
