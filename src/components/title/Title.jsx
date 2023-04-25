import styles from './Title.module.css'
{/*USAR CHAVES P COMENTARIO*/}
/*
EXEMPLO DE COMPONENTE REACT COM CHILDREN (FILHO)
*/

const constante = 'Título da const '
const funcao = () => 'String Qualquer na arrowfunction'

function Title(props){
  return (
    <h2 className={styles.title}>
      {props.text} {/*Chama o texto com propriedade ma tag Title do index*/}
       {constante}
       {funcao()}
       {props.children} {/*Chama o texto filho na tag Title do index*/}
    </h2>
  )
}   

export default Title