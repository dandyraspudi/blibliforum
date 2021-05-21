import  PostItem from '../Post/view/PostItem'
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function HomeKuisView({}: {}) {
  return (
	<div className="row mb-5 home-kuis">
		<div className="col-12 mb-4">
			<div className="d-flex align-items-center justify-content-between">
			    <h3 className="h4 text-default font-weight-bold">Yuk Ikutan Kuis</h3>
				<Button variant="link" size="sm" className="text-secondary">
                    <span className="txt-look font-weight-bold d-none d-lg-inline-block mr-2"> Lihat Semua </span> 
                    <FontAwesomeIcon icon={faArrowRight} color="#F1921F" width="12" height="12" className="icon-arrow" />
                </Button>
			</div>
		</div>
		<div className="home-kuis-group">
			<div className="col-12 col-md-3 mb-3 image-kuis">
				<PostItem post={{
					image: '/images/sample-3.jpg'
				}} showCategory={false} />
			</div>
			<div className="col-12 col-md-3 mb-3 image-kuis">
				<PostItem post={{
					image: '/images/sample-4.jpg'
				}} showCategory={false} />
			</div>
			<div className="col-12 col-md-3 mb-3 image-kuis">
				<PostItem post={{
					image: '/images/sample-5.jpg'
				}} showCategory={false} />
			</div>
			<div className="col-12 col-md-3 mb-3 image-kuis">
				<PostItem post={{
					image: '/images/sample-6.jpg'
				}} showCategory={false} />
			</div>
		</div>
	</div>
  )
}