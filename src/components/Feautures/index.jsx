import React from 'react'
import css from './style.module.css'
const Feautures = () => {
	return (
		<section className={css.feautures}>
			<div className='container'>
				<div className={css.feautures__wrapper}>
					<ul className={css.feautures__inner}>
						<li className={css.feautures__text}>
							<p className={css.feautures__list}> What’s so special?</p>
							<p className={css.feautures__list2}> features</p>
						</li>
						<li className={css.feautures__text2}>
							<p className={css.feautures__list3}>SURVIVE AT ALL COSTS</p>
							<p className={css.feautures__list4}>
								You have 30 minutes to find a relic, signal for extraction, and
								grab one of three spots on the rescue chopper.
							</p>
						</li>
						<li className={css.feautures__text3}>
							<p>CREATE ALLIES & ENEMIES</p>
						</li>
						<li className={css.feautures__text4}>
							<p>IMPRESS THE AUDIENCE</p>
						</li>
					</ul>
				</div>
			</div>
		</section>
	)
}

export default Feautures
