import { useState } from 'react'
import css from './style.module.css'

const Language = () => {
	const [isOpen, setIsOpen] = useState(false)
	const lang = [
		{ name: 'ENG' },

		{ name: 'DEU' },

		{ name: 'FRA' },

		{ name: 'UA' },
	]
	const toogleDropdown = () => {
		setIsOpen(!isOpen)
	}

	const languageChange = name => {
		setSelectedlang(name)
		setIsOpen(false)
	}

	const [selectedlang, setSelectedlang] = useState('ENG')
	const dropLanguage = lang.filter(item => item.name !== selectedlang)

	return (
		<div className={css.language__dropdown}>
			<div className={css.selected__language} onClick={toogleDropdown}>
				{selectedlang}

			</div>
			<ul className={isOpen ? css.dropdown__menu : css.hiden} >
				{dropLanguage.map(({ name }) => (
					<li
						className={css.menu__item}
						onClick={() => {
							languageChange(name)
						}}
						key={name}
					>
						{name}
						
					</li>
				))}
			</ul>
		</div>
	)
}

export default Language
