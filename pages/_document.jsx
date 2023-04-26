import Document, { Html, Head, Main, NextScript } from 'next/document' //document é a default

//esta é uma page html que possui o mínimo possivel de coisas para fazer o site rodar - carrega o arq que roda o nextjs e o reactjs, possuindo um head e body super simples.

class NewDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />          
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>   
      )
  }
}

export default NewDocument

/* mínimo para fazer o site funcionar:
class NewDocument extends Document {
  render() {
    return (
      <Html>
        <Head>          
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>   
      )
  }
} 

export default NewDocument
*/

