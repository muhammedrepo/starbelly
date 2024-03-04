import Banner from '@/components/Banner'
import CategorySection from '@/components/CategorySection'
import DownloadApp from '@/components/DownloadApp'
import FeaturesSection from '@/components/FeaturesSection'
import PopularDishesSection from '@/components/popular-dishes/PopularDishesSection'
import TeamList from '@/components/team/TeamList'

export default function Home() {
  return (
    <>
      <Banner />
      <FeaturesSection />
      <CategorySection />
      <PopularDishesSection />
      <TeamList />
      <DownloadApp />
    </>
  )
}
