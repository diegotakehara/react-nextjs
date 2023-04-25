import Title from "../src/components/title/Title"

function HomePage(){
  return (
    <div>
      Hello World, ReactJs + NextJs!!!
      <Title text="Um texto chamado do index pela props"/>
      <p>Um parágrafo qualquer</p>
      <Title text="Outro texto chamado do index pela props"/>
      <p>Outro parágrafo qualquer</p>
      <Title>Exemplo de Tag com filho</Title>
      <p>O parágrafo qualquer para a props.children no arq title.jsx</p>
    </div>
  )
}

export default HomePage
