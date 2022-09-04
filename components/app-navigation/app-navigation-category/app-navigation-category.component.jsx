import Link from 'next/link'
import Image from 'next/image'
import styles from './app-navigation-category.module.scss'
import { useRouter } from 'next/router'
import Indicator from '../../../lib/Indicator'

export default function AppNavigationCategory({ category }) {
  const router = useRouter()

  return (
    <li
      className={[
        [
          router.asPath === category.uri
            ? 'text-ginfoRed'
            : 'text-ginfoGrayText',
        ],
        styles['app-navigation-category'],
        'flex justify-between hover:text-black',
      ].join(' ')}
    >
      <Link href={category.uri}>
        <a className="text-sm font-firaGoMedium">{category.name}</a>
      </Link>
      <Indicator
        className="inline-flex"
        fill={router.asPath === category.uri ? '#c53437' : 'rgba(0, 0, 0, 0.1)'}
      />
    </li>
  )
}
