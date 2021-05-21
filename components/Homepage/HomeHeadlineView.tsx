import  PostItem from '../Post/view/PostItem'

export default function HomeHeadlineView({}: {}) {
  return (
	<div className="row mb-5">
		<div className="col-12 mb-5 headline">
			<div className="header d-flex align-items-center bg-orange float-left text-white">
				<img src="/images/message-square.png" className="mr-4" alt="" />
				<h3 className="h2">Hai Friends,
				<span>ada banyak yang bisa diobrolin nih</span></h3>
			</div>
		</div>
		<div className="col-12 col-lg-7 headline-main mb-4">
			<PostItem post={{
				image: '/images/headline.jpg',
				title: 'Ciptakan Suasana Jamuan Makan Besar Pada Hari Natal dan Tahun Baru di Rumah',
				categori: 'Galeri Indonesia'
			}} className="content-main" />
		</div>
		<div className="col-12 col-lg-5 headline-side">
			<PostItem post={{
				image: '/images/sideline-1.jpg',
				categori: 'Gadget & Electronic',
				title: 'Yuk Intip Rekomendasi Sepeda Listrik Terbaik'
			}} className={'d-flex mb-2 flex-even mb-4 card-side'} />
			<PostItem post={{
				image: '/images/sideline-2.jpg',
				categori: 'Galeri Indonesia',
				title: '6 Aneka Nasi Nusantara yang Sangat Populer'
			}} className={'d-flex mb-2 flex-even mb-4 card-side'} />
			<PostItem post={{
				image: '/images/sideline-3.jpg',
				title: 'Rekomendasi Kamera DSLR Terbaik buat Fotografer Pemula',
				categori: 'Hobi'
			}} className={'d-flex mb-2 flex-even card-side'} />
		</div>
	</div>
  )
}