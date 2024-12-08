import css from './style.module.css'
import logo from '../../static/mainlogo.svg'
import { navList } from './utils.js'
import Language from '../Language/index.jsx'
import steam from '../../static/steam icon.svg'
import xbox from '../../assets/xbox icon.svg'
import Burger from './../Burger'
import { useState } from 'react'

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const burgerHandler = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	return (
		<header className={css.header}>
			<div className='container'>
				<div className={css.header__inner}>
					<a className={css.header__logo} href='#'>
						<img src={logo} />
					</a>
					{/* <ul className={css.header__list}>
						{navList.map(({ id, name, slug }) => (
							<li key={id} className={css.header__listItem}>
								<a className={css.headerListLink} href={slug}>
									{name}
								</a>
							</li>
						))}
					</ul> */}

					<div className={css.header__button}>
						<Language />
						<a href='#' className={css.header__steam}>
							<img src={xbox} alt='xbox' />
						</a>
						<a href='#' className={css.header__steam}>
							<img src={steam} alt='steam' />
						</a>
					</div>
					<div className={css.header__burger}>
						<Burger burgerHandler={burgerHandler} isOpen={isMenuOpen} />

						<div className={isMenuOpen ? css.show : css.neshow}>
							<ul className={css.header__list}>
								{navList.map(({ id, name, slug }) => (
									<li key={id} className={css.header__listItem}>
										<a className={css.header__ListLink} href={slug}>
											{name}
										</a>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
