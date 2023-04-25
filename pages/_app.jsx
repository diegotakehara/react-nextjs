//ARQUIVO PARA IMPORTAÇÕES GLOBAIS DO SITE
import '../src/components/globalstyle.css'

function App ({ Component, pageProps }) {
  return <Component { ...pageProps }/>
}

export default App