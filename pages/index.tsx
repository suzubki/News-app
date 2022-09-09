import type { NextPage } from 'next'
import {
  FirstSection,
  SecondSection,
  // ThirdSection,
} from '../components/organisms'
import { MainLayout } from '../layouts'

const Home: NextPage = () => {
  return (
    <MainLayout>
      <FirstSection />
      <SecondSection />
      {/* <ThirdSection /> */}
    </MainLayout>
  )
}

export default Home
