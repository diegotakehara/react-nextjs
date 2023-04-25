import Title from "../src/components/title/Title"
{/*USAR CHAVES P COMENTARIO*/}
function HomePage(){
  return (
    <div>
      Hello World, ReactJs + NextJs!!!
      <Title text="Um texto chamado do index pela props"/>{/*esta é uma tag com propriedade e que fecha em si mesma*/}
      <p>Um parágrafo qualquer</p>
      <Title text="Outro texto chamado do index pela props"/>
      <p>Outro parágrafo qualquer</p>
      <Title>Exemplo de Tag com filho</Title> {/*esta é uma tag com children(filho) - abre e fecha*/}
      <p>O parágrafo qualquer para a props.children no arq title.jsx</p>
    </div>
  )
}

export default HomePage
