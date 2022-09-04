import Image from 'next/image'
import Link from 'next/link'
import styles from './app-header-start.module.scss'
import { BsSearch } from 'react-icons/bs'
import { IconContext } from 'react-icons'

export default function AppHeaderStart() {
  return (
    <div
      className={[
        styles['app-header-start'],
        'max-w-side flex justify-between items-center w-full',
      ].join(' ')}
    >
      <Link href="/">
        <a
          className={[
            styles['app-header-logo'],
            'flex items-center space-x-6 text-xs',
          ].join(' ')}
        >
          <Image src="/G.png" width={30} height={30} />
          <p>Ginfo.ge</p>
        </a>
      </Link>
      <IconContext.Provider
        value={{ color: 'rgba(255, 255, 255, 0.5)', size: '0.75rem' }}
      >
        <div
          className={[
            styles['app-header-start__search'],
            'flex justify-center items-center w-10 h-10',
          ].join(' ')}
        >
          <BsSearch />
        </div>
      </IconContext.Provider>
    </div>
  )
}
