import AppArchive from '../components/app-archive'
import { client } from '../lib/apollo'
import { gql } from '@apollo/client'

export default function Home({ posts }) {
  return (
    <>
      <div className="container relative items-center px-2 lg:px-24 ginfo-container">
        <AppArchive posts={posts} />
      </div>
    </>
  )
}

export async function getStaticProps() {
  const GET_POSTS = gql`
    query PostsQuery {
      posts {
        nodes {
          title
          content
          uri
          date
          featuredImage {
            node {
              sourceUrl
            }
          }
          excerpt
        }
      }
    }
  `

  const response = await client.query({
    query: GET_POSTS,
  })

  const { posts } = response?.data
  return {
    props: {
      posts,
    },
  }
}
