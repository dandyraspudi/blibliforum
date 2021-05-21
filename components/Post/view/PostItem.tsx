import React from 'react'
import { Post } from '../../../repositories/post/types'

interface PostViewProps extends React.ComponentProps<any> {
	post: any,
	className?: string,
	imagePosition?: string,
	showImage?: Boolean
	showCategory?: Boolean
}

export default function PostItem({
	post,
	className = '',
	imagePosition = 'left',
	showImage = true,
	showCategory = true
}: PostViewProps): JSX.Element {
	const order_image = imagePosition == 'left' ? 'mr-3' : imagePosition == 'right' ? 'order-2 ml-3' : ''
	const order_summary = imagePosition == 'left' ? '' : imagePosition == 'right' ? 'order-1' : ''
	return (
		<div className={`w-100 postitem-group ${className}`}>
			{ showImage && (
			<a href="#" className={`thumbnail thumbnail-hover overflow-hidden mb-1 ${order_image}`}>
				<img src={post && post.image ? post.image : 'https://via.placeholder.com/640x480'} alt="" className="img-fluid w-100"/>
			</a>
			)}
			<div className={`post-summary ${order_summary}`}>
				{ showCategory && (<a href="#" className="h6">{ post && post.categori ? post.categori : 'Gadget & Electronic'}</a>)}
				<a href="" className="title-produk">{post && post.title ? post.title : 'Yuk Intip Rekomendasi Sepeda Listrik Terbaik'}</a>
				<div className="text-muted d-flex flex-nowrap align-items-center justify-content-start">
					<span className="text-nowrap">03 Dec 2020</span>
					<span className="p-1">.</span>
					<span className="text-nowrap">By Robert Downy</span>
				</div>
			</div>
		</div>
	)
}