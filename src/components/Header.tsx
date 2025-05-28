'use client'

import React from 'react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

import { Href } from '@/utils'

import LangSwitch from './LangSwitch'
import ThemeSwitch from './ThemeSwitch'

const Header = ({ currentLang }: { currentLang: string }) => {
	const t = useTranslations('header')

	return (
		<div className="navbar bg-base-100 shadow-sm">
			<div className="navbar-start">
				{/* <div className="dropdown">
					<div className="btn btn-ghost lg:hidden" role="button" tabIndex={0}>
						<svg
							className="h-5 w-5"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							{' '}
							<path
								d="M4 6h16M4 12h8m-8 6h16"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
							/>{' '}
						</svg>
					</div>
					<ul
						className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
						tabIndex={0}
					>
						<li>
							<a>Home</a>
						</li>
						<li>
							<a>Parent</a>
							<ul className="p-2">
								<li>
									<a>Submenu 1</a>
								</li>
								<li>
									<a>Submenu 2</a>
								</li>
							</ul>
						</li>
						<li>
							<a>Item 3</a>
						</li>
					</ul>
				</div> */}
				<Link className="btn btn-ghost text-xl" href={Href.homePage()}>
					{t('logo')}
				</Link>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">
					<li>
						<Link href={Href.homePage()}>{t('nav.home')}</Link>
					</li>
					{/* <li>
						<details>
							<summary>Parent</summary>
							<ul className="p-2">
								<li>
									<a>Submenu 1</a>
								</li>
								<li>
									<a>Submenu 2</a>
								</li>
							</ul>
						</details>
					</li>
					<li>
						<a>Item 3</a>
					</li> */}
				</ul>
			</div>
			<div className="navbar-end gap-2">
				<ThemeSwitch />
				<LangSwitch currentLang={currentLang} />
			</div>
		</div>
	)
}

export default Header
