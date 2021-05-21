import  PostItem from '../Post/view/PostItem'

export default function HomeTrendingView({}: {}) {
  return (
	<div className="row trending-post mb-5">
		<div className="col-12 mb-4">
			<h3 className="h4 text-default font-weight-bold">Lagi Trending nih</h3>
		</div>
		<div className="trending-group">
			<div className="col-12 col-md-4 mb-3 card-trending">
				<PostItem post={{
					image: '/images/sample-1.jpg'
				}} className={'card bg-dark text-white'} />
			</div>
			<div className="col-12 col-md-4 mb-3 card-trending">
				<PostItem post={{
					image: '/images/sample-2.jpg'
				}} className={'card bg-dark text-white'} />
			</div>
			<div className="col-12 col-md-4 card-trending">
				<PostItem post={{
					image: '/images/sample-3.jpg'
				}} className={'card bg-dark text-white'} />
			</div>
		</div>
	</div>
  )
}