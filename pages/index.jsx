{/*USAR CHAVES P COMENTARIO quando nao funcionar */}
import { useState } from 'react'
import Head from 'next/head'

import Title from '../src/components/title/Title'
import Subtitle, {NewSubtitle} from '../src/components/subtitle/Subtitle' //nao default é importada entre chaves
import Button from '../src/components/button/Button'

function HomePage(){
  const /*1ª pos= variavel, 2ª funcao q altera a 1ª - QUE NUNCA PODE SER ALTERADA DIRETAMENTE */ [click, setClick] = useState(0) /*Para variaveis que devem aparecer na tela do usuario é necessário importar useState (estados dentro de componentes, só usados dentro de funcoes retornando um componente react) em vez da variavel let*/

  const handleClick = () => {
    //console.log("Handle Click")
    setClick(click + 1)
  }

  return (
    <>
      <Head>
        <title>Titulo diferente da home page</title>
      </Head>
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
        <p> Cliques: {click} </p>
        <Button 
          /* onClick={()=>{
            console.log("click aqui")
          }} (foi substituido pela funcao handleClick)*/
          onClick={handleClick}>
            Button test
        </Button>
      </div>
    </>
  )
}

export default HomePage
