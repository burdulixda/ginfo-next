import styles from './app-navigation.module.scss'
import { gql, useQuery } from '@apollo/client'
import AppNavigationCategory from './app-navigation-category/app-navigation-category.component'

export default function AppNavigation() {
  const GET_CATEGORIES = gql`
    query CategoriesQuery($parent: Int!) {
      categories(where: { parent: $parent }) {
        nodes {
          id
          name
          uri
        }
      }
    }
  `

  const { loading, error, data } = useQuery(GET_CATEGORIES, {
    variables: {
      parent: 0,
    },
  })

  if (loading) return null
  const categories = data?.categories?.nodes
  return (
    <nav
      className={[
        styles['app-navigation'],
        'hidden lg:block max-w-14 lg:max-w-side w-full',
      ].join(' ')}
    >
      <span className="flex my-8 text-xs text-black font-firaGoBold">
        კატეგორიები
      </span>
      <ul className="flex flex-col space-y-10">
        {categories.map((item, idx) => {
          return <AppNavigationCategory key={idx} category={item} />
        })}
      </ul>
    </nav>
  )
}
