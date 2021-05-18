import React from "react";

import Head from 'next/head'
import Layout from '../components/Layout'
import Atom from '../components/Atom'
import Form from '../components/Form'

export default function Home() {
  const [number, setNumber] = React.useState(1)

  return (
    <Layout>
      <Head>
        <title>Linus Pauling</title>
        <meta name="description" content="Distribuição de Linus Pauling com ilustração gráfica para cada átomo. Esse app foi desenvolvido por Marcus Vinícius <marcus.vinicius.mvap@gmail.com>" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Atom number={number} />
      <Form number={number} setNumber={setNumber} />
    </Layout>
  )
}
