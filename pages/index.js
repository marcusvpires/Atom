import React from "react";

import Head from 'next/head'

import Layout from '../components/Layout'
import Atom from '../components/Atom'
import Main from '../components/Main'
import Header from '../components/Header'
import Forms from '../components/Forms'
import Result from '../components/Result'

import attributes from '../dataBase/attributes'

export default function Home() {
  const [number, setNumber] = React.useState(1)
  const [atom, setAtom] = React.useState({})

  React.useEffect(() => {
    setAtom(attributes(number))
  }, [number])

  return (
    <Layout>
      <Head>
        <title>Linus Pauling</title>
        <meta name="description" content="Distribuição de Linus Pauling com ilustração gráfica para cada átomo. Esse app foi desenvolvido por Marcus Vinícius <marcus.vinicius.mvap@gmail.com>" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Atom />
      <Main>
        <Header />
        <Forms number={number} setNumber={setNumber} />
        <Result />
      </Main>
    </Layout>
  )
}
