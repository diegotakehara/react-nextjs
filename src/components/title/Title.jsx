import styles from './Title.module.css'
{/*USAR CHAVES P COMENTARIO*/}
const constante = 'Título da const '
const funcao = () => 'String Qualquer na arrowfunction'

function Title(props){
  return (
    <h1 className={styles.title}>
      {props.text} {/*Chama o texto com propriedade ma tag Title do index*/}
       {constante}
       {funcao()}
       {props.children} {/*Chama o texto filho na tag Title do index*/}
    </h1>
  )
}   

export default Title