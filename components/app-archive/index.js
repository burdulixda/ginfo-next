import Article from '../app-article/app-article.component'

export default function AppArchive(props) {
  const { category } = props
  const { posts } = category || props

  return (
    <>
      <h1 className="block my-8 text-2xl font-firaGoBold ginfo-uppercase">
        {category?.name || 'სიახლეები'}
      </h1>
      <div className="container">
        <div className="grid grid-cols-1 gap-8 justify-items-center lg:justify-items-start sm:grid-cols-2 2xl:grid-cols-3 articles">
          {posts.nodes.map((item, idx) => {
            return <Article key={idx} article={item} />
          })}
        </div>
      </div>
    </>
  )
}
