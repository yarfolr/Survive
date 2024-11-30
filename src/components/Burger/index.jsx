import css from './style.module.css'

const BurgerMenu = ({ isOpen, burgerHandler }) => {
	return (
		<>
			<button className={css.burger__icon} onClick={burgerHandler}>
				Menu
				<span className={isOpen ? css.open : css.closed}></span>
			</button>
		</>
	)
}

export default BurgerMenu
