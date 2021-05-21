import  VideoItem from '../Post/view/VideoItem'
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function HomeVideoView({}: {}) {
    return (
    <>
      <div className="row mb-2 home-video">
          <div className="col-12 mb-4">
              <div className="d-flex align-items-center justify-content-between">
                  <h3 className="h4 text-default font-weight-bold">Video Trending Nih</h3>
                  <Button variant="link" size="sm" className="text-secondary">
                      <span className="txt-look font-weight-bold d-none d-lg-inline-block mr-2"> Lihat Semua </span> 
                      <FontAwesomeIcon icon={faArrowRight} color="#F1921F" width="12" height="12" className="icon-arrow" />
                  </Button>
              </div>
          </div>
          <div className="col-12 mb-3">
              <VideoItem post={{
				image: '/images/sample-1.jpg'
			}} className={'d-flex mb-2 flex-even mb-4 video-group'} />
          </div>
          <div className="col-12 mb-3">
              <VideoItem post={{
				image: '/images/sample-2.jpg'
			}} className={'d-flex mb-2 flex-even mb-4 video-group'} />
          </div>
          <div className="col-12 mb-3">
              <VideoItem post={{
				image: '/images/sample-3.jpg'
			}} className={'d-flex mb-2 flex-even mb-4 video-group'} />
          </div>
      </div>
      <div className="row mb-5 home-topik">
          <div className="col-12 mb-4">
              <div className="d-flex align-items-center justify-content-between">
                  <h3 className="h4 text-default font-weight-bold">Topik Lain</h3>
                  <Button variant="link" size="sm" className="text-secondary">
                      <span className="txt-look font-weight-bold d-none d-lg-inline-block mr-2"> Lihat Semua </span> 
                      <FontAwesomeIcon icon={faArrowRight} color="#F1921F" width="12" height="12" className="icon-arrow" />
                  </Button>
              </div>
          </div>
          <div className="col-12">
            <Button variant="outline-primary" size="sm" className="mr-2 mb-2 btn-tag">AKSI CINTA BUMI</Button>
            <Button variant="outline-primary" size="sm" className="mr-2 mb-2 btn-tag">BLIBLI BIG START INDONESIA</Button>
            <Button variant="outline-primary" size="sm" className="mr-2 mb-2 btn-tag">BLIBLI FLASH NEWS</Button>
            <Button variant="outline-primary" size="sm" className="mr-2 mb-2 btn-tag">BLIBLI COMMUNITY</Button>
            <Button variant="outline-primary" size="sm" className="mr-2 mb-2 btn-tag">COMMUNITY</Button>
            <Button variant="outline-primary" size="sm" className="mr-2 mb-2 btn-tag">FASHION & KECANTIKAN</Button>
            <Button variant="outline-primary" size="sm" className="mr-2 mb-2 btn-tag">AKSI CINTA BLIBLI</Button>
          </div>
      </div>
      <div className="row mb-5 home-topik">
          <div className="col-12 mb-4">
                <h3 className="h4 text-default font-weight-bold">Topik Populer Saat Ini</h3>
          </div>
          <div className="col-12 d-flex align-items-start flex-column">
            <Button variant="outline-primary" size="sm" className="align-content-start mr-2 mb-2 btn-tag">#LAGITRENDING</Button>
            <Button variant="outline-primary" size="sm" className="align-content-start mr-2 mb-2 btn-tag">#BLIBLIFRIENDS</Button>
            <Button variant="outline-primary" size="sm" className="align-content-start mr-2 mb-2 btn-tag">#POPULER</Button>
            <Button variant="outline-primary" size="sm" className="align-content-start mr-2 mb-2 btn-tag">#BLIBLIREWINDINDONESIA</Button>
            <Button variant="outline-primary" size="sm" className="align-content-start mr-2 mb-2 btn-tag">#KOMUNITASSEPEDAINDONESIA</Button>
            <Button variant="outline-primary" size="sm" className="align-content-start mr-2 mb-2 btn-tag">#KOMUNITASBLIBLI</Button>
            <Button variant="outline-primary" size="sm" className="align-content-start mr-2 mb-2 btn-tag">#POPULARMAGAZINE</Button>
          </div>
      </div>
    </>
    )
  }