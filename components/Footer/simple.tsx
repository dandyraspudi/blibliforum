import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

function CopyrightView(): JSX.Element {
	const copyright = (
		<p className="d-block small text-center text-md-left order-md-0 txt-copy">
			Copyright &copy; 2011-2021 Blibli.com
		</p>
	)

	const socialmedia = (
		<>
		<div className="d-flex flex-row align-items-center justify-content-center justify-content-md-start mb-4 follow order-md-1">
			<div className="d-block mr-3 text-center text-md-left txt-copy">Ikuti Kami: </div>
			<a className="mr-3 bg-white rounded-circle facebook" href="#">
				<FontAwesomeIcon icon={faFacebookF} color="#004E93" width="16" height="16" />
			</a>
			<a className="mr-3 bg-white rounded-circle twitter" href="#">
				<FontAwesomeIcon icon={faTwitter} color="#32C6F5" width="16" height="16" />
			</a>
			<a href="#" className="bg-white rounded-circle youtube">
				<FontAwesomeIcon icon={faYoutube} color="#D92426" width="16" height="16"  />
			</a>
		</div>
		</>
	)

	return (
		<>
			<div className="col-12">
				<div className="d-md-flex justify-content-between align-items-center">
					{socialmedia}
					{copyright}
				</div>
			</div>
		</>
	)
}

export default function SimpleFooterView(): JSX.Element {
	return (
		<footer className="bg-brand pt-4 footer-media">
			<div className="container text-white">
				<div className="row">
					<CopyrightView />
				</div>
				
				<div className="row border-accent">
					<div className="col-3 offset-9">
						<span className="border-footer d-block"></span>
					</div>
				</div>
			</div>
		</footer>
	)
}
