import React from 'react'
import css from './style.module.css'

const MainPage = () => {
	return (
		<section className={css.hero}>
			<div className={css.container}>
				<div className={css.hero__wrapper}>
					<p className={css.hero__title}>SURVIVE AT ALL COSTS</p>
					<p className={css.hero__text}>
						Experience new social battle royale game
					</p>
					<button className={css.hero__button}>
						<p className={css.hero__buttontext}>Buy now on Steam</p>
						<p className={css.hero__price}>$14.99</p>
					</button>
				</div>
			</div>
		</section>
	)
}

export default MainPage
