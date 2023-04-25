/*
EXEMPLO DE COMPONENTE REACT COM PROPS (ATRIBUTOS)
*/

function Subtitle(props) { /*PROPS NUNCA PODERAO SER ALTERADAS DENTRO DO COMPONENTE*/
  return (
    <h3> {props.text} </h3>
  )
}

Subtitle.defaultProps = {//para quando nao houver valor no subtitulo index, o site nao ficar em branco no campo do subtitulo, podemos usar propriedades default.
  text: 'Mensagem Padrão Default'
}

export default Subtitle

function NewSubtitle ({text}) { //USO DO PROPS DESTRUCTOR
  return (
    <p>{ text }</p>
  )
}

export { NewSubtitle } //quando o export nao é default, exportamos usando chaves