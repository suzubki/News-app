import type { NextPage } from 'next'
import { FirstSection } from '../components/organisms'
import { NewsLayout } from '../components/templates'

const Home: NextPage = () => {
  return (
    <NewsLayout>
      <FirstSection />
    </NewsLayout>
  )
}

export default Home
