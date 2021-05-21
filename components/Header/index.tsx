/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import { MainNavMenu, mainNavMenus } from '../../constants/main_navigation_menu'
import Image from 'next/image'
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-regular-svg-icons'

type UserMenuItem = {
	label: string
	path: string
	visible: boolean
}

const userMenuItems: UserMenuItem[] = [
	{
		label: 'Dashboard',
		path: '/',
		visible: true,
	},
	{
		label: 'Buat Artikel',
		path: '/',
		visible: true,
	},
	{
		label: 'Topik Kesukaan',
		path: '/',
		visible: true,
	},
	{
		label: 'Profil Saya',
		path: '/',
		visible: true,
	},
	{
		label: 'Ubah Profil',
		path: '/',
		visible: true,
	},
	{
		label: 'Pengaturan Akun',
		path: '/',
		visible: true,
	},
]

interface UserMenuProps extends React.ComponentProps<any> {
	onLogout: () => void
}

function UserMenu({ onLogout }: UserMenuProps): JSX.Element {
	return (
		<div className="flex flex-col w-48">
			<div className="border bg-white border-gray-200 shadow-lg">
				<div className="flex flex-col p-6 space-y-2">
					{userMenuItems.map((menu: UserMenuItem, index: number) => (
						<a
							key={index}
							className="self-start text-right hover:text-accent"
							href={menu.path}
						>
							{menu.label}
						</a>
					))}
					<hr />
					<a
						className="self-start text-right hover:text-accent cursor-pointer"
						onClick={() => onLogout()}
					>
						Keluar
					</a>
				</div>
			</div>
		</div>
	)
}

interface headerViewProps extends React.ComponentProps<any> {
	isAuthorized?: boolean
	username?: string 
	profileImage?: string
}

export default function headerView({
	isAuthorized,
	username, 
	profileImage
}: headerViewProps): JSX.Element {
	const [isUserMenuVisible, setUserMenuVisibility] = useState(false)

	return (
		<div className="container">
			<nav className="navbar navbar-expand-lg navbar-light pt-3 mb-3 d-md-flex align-items-center justify-content-between">
				<button className="navbar-toggler btn-dropdown-group" type="button" data-toggle="collapse" data-target="#main_nav">
					<Image src="/images/menu.png" className="navbar-toggler-icon" alt="icon menu dropdown" width="24" height="24"/>
				</button>
				<a className="navbar-brand" href="#">
					<Image src="/images/logo.png" alt="me" width="180" height="47" />
				</a>
				<button className="btn-search-group navbar-toggler" type="button" data-target="#main_nav">
					<Image src="/images/search.png" className="search-icon" alt="icon menu dropdown" width="34" height="34"/>
				</button>
				<div className="d-block">
					<div className="collapse navbar-collapse" id="main_nav">
						<ul className="navbar-nav">
							{mainNavMenus.map(
								(menu: MainNavMenu, index: number) =>
									menu.visibility.header === true && !menu.submenu.length ? (
										<li className="nav-item"
											key={index}> 
										<a
											className="nav-link"
											href={menu.path}
										>
											{menu.name}
										</a>
										</li>
									) : (
										
										<li className="nav-item dropdown has-megamenu"
											key={index} >
											<a className="nav-link d-flex" 
											href={menu.path}> 
												{menu.name}
												<Image className="icon-dropdown" src="/images/chevron-down.png" width="24" height="24"/>
											</a>
											<div className="dropdown-menu megamenu">
												<h3 className="d-inline-block">Kategori Artikel</h3> <a className="btn btn-link">Lihat semua artikel</a>
												<div className="row">
													{menu.submenu.map((submenu, idx) => (
														<div className="col-12 col-md-4" key={idx}>
															<a className="nav-link"
																href={submenu.path}
															>
																{submenu.name}
															</a>
														</div>
													))}
												</div>
											</div>
										</li>
									)
							)}
						</ul>
						<InputGroup className="mr-3 ml-md-3 search-group" size="sm">
							<FormControl className="search"
							placeholder="Cari Artikel"
							/>
							<InputGroup.Append>
								<InputGroup.Text>
									<Image src="/images/search.png" alt="me" width="23" height="23" />
								</InputGroup.Text>
							</InputGroup.Append>
						</InputGroup>
						{ !isAuthorized ? 
						(<>
						<Button variant="link" className="mr-3 py-1 border-0 px-3 btn-masuk">
							Masuk
						</Button>
						
						<Button variant="primary" className="py-1 px-3 btn-daftar">
							Daftar
						</Button>
						</>) :
						(<>
						<Button variant="link" className="border border-solid mr-3 py-1 px-2">
							<FontAwesomeIcon icon={faBell} color="#008BD2" width="17" height="17" />
						</Button>
						<div className="d-inline-block ml-md-3">
							<div className="d-flex align-items-center flex-nowrap justify-content-between">
								<span className="font-weight-bold mr-3 text-nowrap">John Doe</span>
								<span className="block avatar rounded-circle">
									<img src="/images/pp-1.jpg" alt="" className="img-fluid" />
								</span>						
							</div>
						</div>
						</>)}
					</div>
				</div>
			</nav>
		</div>
	)
}
