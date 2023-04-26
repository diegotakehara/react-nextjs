import styles from './Button.module.css'

function Button ({ children, onClick }) {
  return (
    <button 
      className={styles.button}
      /* onClick={ ()=> {console.log("BOTAO CLICADO")} }
       (ao abrir o consolef12 do navegador, temos a informação da interaçao com o numero de clicks)*/
      onClick={onClick}
      /*propriedade onClick utilizada como funcao para que seja chamada e reutilizada em varios locais do site - qualidade do react - esta é chamada no index tag Button*/      
    >
      { children }
    </button>
  )
}
export default Button