import React from 'react'
import { Post } from '../../../repositories/post/types'

interface ProdukViewProps extends React.ComponentProps<any> {
	post: any,
	className?: string
}

export default function ProdukItem({
	post,
	className = '',
}: ProdukViewProps): JSX.Element {
	return (
		<div className={`w-100 product-group ${className}`}>
			<div className={`thumbnail rounded overflow-hidden mb-3`}>
				<img src={post && post.image ? post.image : 'https://via.placeholder.com/640x480'} alt="" className="img-fluid w-100"/>
			</div>
			<div className={`produk-summary`}>
				<a href="" className="h5">MOLTO Ultra Pure Pouch Pelembut Dan...</a>
				<span className="text-orange d-block price">Rp 49.700</span>
				{ post && post.discount && 
				(<p className="text-orange d-block mb-0">
                    <span className="mr-3 small text-muted">Rp 999.900</span>
                    <span className="text-danger">5% OFF</span>
                </p>) }
			</div>
		</div>
	)
}