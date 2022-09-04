import Head from 'next/head'
import styles from './app-header.module.scss'

import AppHeaderStart from './app-header-start/app-header-start.component'

export default function AppHeader() {
  return (
    <>
      <Head>
        <title>Ginfo Next</title>
        <link rel="icon" href="favicon.ico"></link>
      </Head>
      <header
        className={[
          styles['app-header'],
          'relative p-4 lg:px-25 lg:py-13 flex items-center justify-between bg-ginfoRed',
        ].join(' ')}
      >
        <AppHeaderStart />
      </header>
    </>
  )
}
