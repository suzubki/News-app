import type { NextPage } from 'next'
import {
  FirstSection,
  SecondSection,
  ThirdSection,
} from '../components/organisms'
import { NewsLayout } from '../components/templates'

const Home: NextPage = () => {
  return (
    <NewsLayout>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </NewsLayout>
  )
}

export default Home
