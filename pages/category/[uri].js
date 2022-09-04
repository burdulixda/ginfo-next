import { gql } from '@apollo/client'
import { client } from '../../lib/apollo'
import AppArchive from '../../components/app-archive'

export default function CategoryPage({ category }) {
  return (
    <div className="container relative items-center px-2 lg:px-24 ginfo-container">
      <AppArchive category={category} />
    </div>
  )
}

export async function getStaticProps({ params }) {
  const GET_CATEGORY_BY_URI = gql`
    query CategoryQuery($id: ID!) {
      category(id: $id, idType: URI) {
        id
        name
        posts {
          nodes {
            categories(where: { parent: 0 }) {
              nodes {
                name
              }
            }
            content
            date
            title
            slug
            featuredImage {
              node {
                sourceUrl
              }
            }
            uri
            excerpt
          }
        }
      }
    }
  `

  const categoryName = params.uri
  const uri = '/category/' + categoryName

  const response = await client.query({
    query: GET_CATEGORY_BY_URI,
    variables: {
      id: uri,
    },
  })

  const { category } = response?.data

  return {
    props: {
      category,
    },
  }
}

export async function getStaticPaths() {
  const paths = []
  return {
    paths,
    fallback: 'blocking',
  }
}
