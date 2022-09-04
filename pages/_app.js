import { ApolloProvider } from '@apollo/client/react'
import { client } from '../lib/apollo'
// import '../styles/index.css'
import { MainLayout } from '../components/layouts'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ApolloProvider>
  )
}

export default MyApp
