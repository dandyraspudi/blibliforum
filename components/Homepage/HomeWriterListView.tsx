export default function HomeWriterListView({}: {}) {
  return (
	<div className="row mb-5 home-writer">
		<div className="col-12 mb-5">
            <h3 className="h4 text-default font-weight-bold">Cek Artikel Terbaru Dari Orang Yang Kamu Ikuti</h3>
		</div>
		<div className="col-6 mb-3 card-group">
			<div className="card highlight text-center">
                <div className="avatar overflow-hidden rounded-circle d-inline-block">
                    <img src="/images/pp-1.jpg" alt="" className="img-fluid" />
                </div>
                <h5>DIANNE RUSSEL</h5>
                <span className="text-orange">5 Artikel Baru</span>
            </div>
		</div>
		<div className="col-6 mb-3 card-group">
			<div className="card highlight text-center">
                <div className="avatar overflow-hidden rounded-circle d-inline-block">
                    <img src="/images/pp-2.jpg" alt="" className="img-fluid" />
                </div>
                <h5>DARREL STEWARD</h5>
                <span className="text-orange">5 Artikel Baru</span>
            </div>
		</div>
		<div className="d-flex col-12 flex-nowrap align-items-center justify-content-between writer-list-avatar mb-5">
            <div className="avatar overflow-hidden rounded-circle d-block">
                <img src="/images/pp-2.jpg" alt="" className="img-fluid" />
            </div>
            <div className="avatar overflow-hidden rounded-circle d-block">
                <img src="/images/pp-2.jpg" alt="" className="img-fluid" />
            </div>
            <div className="avatar overflow-hidden rounded-circle d-block">
                <img src="/images/pp-1.jpg" alt="" className="img-fluid" />
            </div>
            <div className="avatar overflow-hidden rounded-circle d-block">
                <img src="/images/pp-2.jpg" alt="" className="img-fluid" />
            </div>
            <div className="avatar overflow-hidden rounded-circle d-block">
                <img src="/images/pp-1.jpg" alt="" className="img-fluid" />
            </div>
            <div className="avatar overflow-hidden rounded-circle d-block">
                <img src="/images/pp-2.jpg" alt="" className="img-fluid" />
            </div>
		</div>
		<div className="col-12 mb-4 writer-rank">
            <img src="/images/win.png" alt="" className="img-fluid float-left mr-3" />
            <h3 className="h4 text-default font-weight-bold">5 Top Kontributor Artikel Dibulan Januari</h3>
		</div>
		<div className="col-12 mb-3 writer-group">
            <div className="d-flex align-items-center bg-secondary flex-nowrap writer-rank-list w-full rounded-pill text-white">
                <img src="/images/number-1.png" alt="" />
                <div className="avatar overflow-hidden rounded-circle d-block">
                    <img src="/images/pp-2.jpg" alt="" className="img-fluid" />
                </div>
                <div className="d-block">
                    <h5>ANNETE BLACK</h5>
                    <div className="d-block">
                        <img src="/images/star.png" className="mr-2" alt="" />
                        <span>Legend</span>
                    </div>
                </div>
            </div>
            <div className="d-flex align-items-center flex-nowrap writer-rank-list w-full">
                <div className="d-flex bg-orange align-items-center rounded-pill">
                    <img src="/images/number-2.png" alt="" />
                    <div className="avatar overflow-hidden rounded-circle d-block">
                        <img src="/images/pp-1.jpg" alt="" className="img-fluid" />
                    </div>
                </div>
                <div className="d-block">
                    <h5>RALPH EDWARDS</h5>
                    <div className="d-block">
                        <img src="/images/star-orange.png" className="mr-2" alt="" />
                        <span className="text-orange">Legend</span>
                    </div>
                </div>
            </div>
            <div className="d-flex align-items-center flex-nowrap writer-rank-list w-full">
                <div className="d-flex bg-yellow align-items-center rounded-pill">
                    <img src="/images/number-3.png" alt="" />
                    <div className="avatar overflow-hidden rounded-circle d-block">
                        <img src="/images/pp-2.jpg" alt="" className="img-fluid" />
                    </div>
                </div>
                <div className="d-block">
                    <h5>SAVANNAH NGUYEN</h5>
                    <div className="d-block">
                        <img src="/images/star-orange.png" className="mr-2" alt="" />
                        <span className="text-orange">Legend</span>
                    </div>
                </div>
            </div>
            <div className="d-flex align-items-center flex-nowrap writer-rank-list w-full">
                <div className="d-flex bg-gray align-items-center rounded-pill">
                    <img src="/images/number-4.png" alt="" />
                    <div className="avatar overflow-hidden rounded-circle d-block">
                        <img src="/images/pp-1.jpg" alt="" className="img-fluid" />
                    </div>
                </div>
                <div className="d-block">
                    <h5>JEROME BELL</h5>
                    <div className="d-block">
                        <img src="/images/star-orange.png" className="mr-2" alt="" />
                        <span className="text-orange">Legend</span>
                    </div>
                </div>
            </div>
            <div className="d-flex align-items-center flex-nowrap writer-rank-list w-full">
                <div className="d-flex bg-gray align-items-center rounded-pill">
                    <img src="/images/number-5.png" alt="" />
                    <div className="avatar overflow-hidden rounded-circle d-block">
                        <img src="/images/pp-2.jpg" alt="" className="img-fluid" />
                    </div>
                </div>
                <div className="d-block">
                    <h5>BESSIE COOPER</h5>
                    <div className="d-block">
                        <img src="/images/star-orange.png" className="mr-2" alt="" />
                        <span className="text-orange">Legend</span>
                    </div>
                </div>
            </div>
        </div>
	</div>
  )
}