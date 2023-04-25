import styles from './Title.module.css'

const constante = 'Título da const'
const funcao = () => 'String Qualquer na arrowfunction'

function Title(props){
  return (
    <h1 className={styles.title}>
      {props.text} {constante} {funcao()} {props.children}
    </h1>
  )
}   

export default Title