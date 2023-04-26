//ARQUIVO PARA IMPORTAÇÕES GLOBAIS DO SITE
import Head from 'next/head'

import '../src/components/globalstyle.css'

function App ({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Titulo Padrao</title> {/*caso nao for passado titulo especifico no index, este será usado*/}
      </Head>
      <Component { ...pageProps }/>
    </>
  )
}

export default App