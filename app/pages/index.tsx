import Home from 'components/home-page/home'
import PageLayout from 'components/layouts/pageLayout'
import siteConfig from '../configs/site-config'

const Index = () => {
  return (
    <PageLayout title={siteConfig.title}>
      <Home/>
    </PageLayout>
  )
}

export default Index