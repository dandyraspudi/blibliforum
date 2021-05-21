import  ProdukItem from '../Post/view/ProdukItem'

export default function HomeProdukView({}: {}) {
  return (
    <div className="card p-5 mb-5 produk-list">
        <div className="row">
            <div className="col-12 mb-4">
                <h3 className="h4 text-default font-weight-bold">Produk Top Nih Friends</h3>
            </div>
            <div className="col-12 mb-3 mb-md-0 produk-list-group">
                <div className="lists align-items-center flex-wrap flex-lg-nowrap justify-content-between produk-group">
                    <ProdukItem post={{
                        image: '/images/produk-1.png'
                    }} className="items mb-3 mb-md-0" />
                    <ProdukItem post={{
                        image: '/images/produk-2.png'
                    }} className="items mb-3 mb-md-0" />
                    <ProdukItem post={{
                        image: '/images/produk-3.png',
                        discount: true
                    }} className="items mb-3 mb-md-0" />
                    <ProdukItem post={{
                        image: '/images/produk-4.png',
                        discount: true
                    }} className="items mb-3 mb-md-0" />
                    <ProdukItem post={{
                        image: '/images/produk-5.png'
                    }} className="items" />
                </div>
            </div>
        </div>
    </div>
  )
}