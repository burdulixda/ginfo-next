import AppHeader from '../app-header/app-header.component'
import AppNavigation from '../app-navigation/app-navigation.component'

export default function MainLayout({ children }) {
  return (
    <>
      <AppHeader />
      <main className="flex px-2 md:px-25">
        <AppNavigation />
        {children}
      </main>
    </>
  )
}
