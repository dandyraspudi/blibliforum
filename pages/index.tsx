import Head from 'next/head'
import { siteTitle } from '../components/Layout/index'
import HomeHeadlineView from '../components/Homepage/HomeHeadlineView'
import HomeTrendingView from '../components/Homepage/HomeTrendingView'
import HomeObrolanView from '../components/Homepage/HomeObrolanView'
import HomeWriterListView from '../components/Homepage/HomeWriterListView'
import HomeKuisView from '../components/Homepage/HomeKuisView'
import HomeProdukView from '../components/Homepage/HomeProdukView'
import HomeRekomendasiView from '../components/Homepage/HomeRekomendasiView'
import HomeVideoView from '../components/Homepage/HomeVideoView'
import MainLayout from '../components/Layout/Main'

const Home = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
    
		<div className="container py-2 home-bg">
      <HomeHeadlineView />
      <HomeTrendingView />
      
      <div className="row">
        <div className="col-12 col-md-6 col-lg-8">
          <HomeObrolanView />
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <HomeWriterListView />
        </div>
      </div>
    </div>
    <div className="half-bottom">
      <div className="container">
        <HomeKuisView />
        <HomeProdukView />
        <div className="row">
          <div className="col-12 col-md-6 col-lg-8">
            <HomeRekomendasiView />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <HomeVideoView />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

Home.getLayout = MainLayout

export default Home;
