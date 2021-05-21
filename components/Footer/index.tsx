import React, { FunctionComponent, PropsWithChildren } from 'react'
import { MainNavMenu, footerNavMenus } from '../../constants/main_navigation_menu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import  PostItem from '../Post/view/PostItem'

function FooterPost(): JSX.Element {
	return (
		<div className="col-12 col-md-8 mb-4">
			<div className="row footer-post">
				<div className="col-md-6 border-bt">
					<PostItem post={{}} className={'text-white'} showImage={false} />
				</div>
				<div className="col-md-6 border-bt">
					<PostItem post={{}} className={'text-white'} showImage={false} />
				</div>
				<div className="col-md-6 border-bt">
					<PostItem post={{}} className={'text-white'} showImage={false} />
				</div>
				<div className="col-md-6 border-bt">
					<PostItem post={{}} className={'text-white'} showImage={false} />
				</div>
				<div className="col-md-6 border-bt border-md-0">
					<PostItem post={{}} className={'text-white'} showImage={false} />
				</div>
				<div className="col-md-6 border-bt border-md-0">
					<PostItem post={{}} className={'text-white'} showImage={false} />
				</div>
			</div>
		</div>
	)
}

function CopyrightView(): JSX.Element {
	const copyright = (
		<p className="d-block small text-center text-md-left txt-copy">
			Copyright &copy; 2011-2021 Blibli.com
		</p>
	)

	const socialmedia = (
		<>
		<div className="d-block mb-2 text-center text-md-left">Ikuti Kami: </div>
		<div className="d-flex flex-row align-items-center justify-content-center justify-content-md-start w-100 mb-3 follow">
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

	const menus = (
		<ul className="list-unstyled mb-5">
			{footerNavMenus.map(
				(menu: MainNavMenu, index: number) =>
					menu.visibility.footer === true && (
						<li
								key={index} className="mb-2 text-center text-md-left">
							<a
								className="btn btn-link p-0 text-white"
								href={menu.path}
							>
								{menu.name}
							</a>
						</li>
					)
			)}
		</ul>
	)

	return (
		<>
			<div className="col-12 col-md-3 offset-md-1">
				{menus}
				{socialmedia}
				{copyright}
			</div>
		</>
	)
}

export default function FooterView(): JSX.Element {
	return (
		<footer className="bg-brand pt-5 footer-media">
			<div className="container text-white">
				<div className="row">
					<div className="col-12 mb-4">
						<h4>Baca Lebih Lanjut</h4>
					</div>
					<FooterPost />
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
