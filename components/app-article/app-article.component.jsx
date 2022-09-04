import Link from 'next/link'
import Image from 'next/image'
import styles from './app-article.module.scss'

export default function Article({ article }) {
  const imageUrl = article.featuredImage.node.sourceUrl
  return (
    <article
      className={[
        styles['app-article'],
        'overflow-hidden max-w-md xl:max-w-sm',
      ].join(' ')}
    >
      <Link href={article.uri}>
        <a className="block relative w-full">
          <Image
            src={imageUrl}
            width={384}
            height={200}
            layout="responsive"
            objectFit="cover"
          />
        </a>
      </Link>
      <Link href={article.uri}>
        <a>
          <p className="text-base uppercase font-firaGoBold">{article.title}</p>
        </a>
      </Link>
      <div
        className="text-sm opacity-50 font-firaGoMedium color"
        dangerouslySetInnerHTML={{ __html: article.excerpt }}
      />
    </article>
  )
}
