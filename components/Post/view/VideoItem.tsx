import React from 'react'
import { Post } from '../../../repositories/post/types'
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

interface VideoViewProps extends React.ComponentProps<any> {
	post: any,
	className?: string,
	imagePosition?: string,
	showImage?: Boolean
}

export default function VideoItem({
	post,
	className = '',
	imagePosition = 'left',
	showImage = true
}: VideoViewProps): JSX.Element {
	const order_image = imagePosition == 'left' ? 'mr-3' : imagePosition == 'right' ? 'order-2 ml-3' : ''
	const order_summary = imagePosition == 'left' ? '' : imagePosition == 'right' ? 'order-1' : ''
	return (
		<div className={`w-100 ${className}`}>
			{ showImage && (
			<a href="" className={`thumbnail thumbnail-hover overflow-hidden ${order_image}`}>
                <Button variant="primary" size="sm" className="text-secondary rounded-circle">
                    <FontAwesomeIcon icon={faPlay} color="#FFF" width="12" height="12" />
                </Button>
                <span className="time rounded-pill p-1 text-white">12:24</span>
				<img src={post && post.image ? post.image : 'https://via.placeholder.com/640x480'} alt="" className="img-fluid w-100"/>
			</a>
			)}
			<div className={`video-summary ${order_summary}`}>
				<a href="#" className="h5">Menentukan Karakter Seseorang Hanya Da...</a>
                <span className="text-nowrap d-block text-muted">By Robert Downy</span>
				<div className="text-muted d-flex flex-nowrap align-items-center justify-content-start">
					<span className="text-nowrap">03 Dec 2020</span>
					<span className="p-1">.</span>
					<span className="text-nowrap">3,6M Views</span>
				</div>
			</div>
		</div>
	)
}