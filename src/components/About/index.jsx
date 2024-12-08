import AboutSlider from './AboutSlider'
import css from './style.module.css'

const SecondPage = () => {
	return (
		<section className={css.social}>
			<div className='container'>
				<div className={css.social__wrapper}>
					<div className={css.social__hero}>
						<ul className={css.social__inner}>
							<li className={css.social__title}>
								<p>What is SOS?</p>
							</li>
							<li className={css.social__title2}>
								<p>social battle royale game</p>
							</li>
						</ul>
						<ul className={css.social__inner2}>
							<li className={css.social__text}>
								<p>
									Each round, you and 15 other contestants compete to escape a
									deadly island filled with monsters. The trick is: three people
									can survive. Will you run solo or form friendships with others
									to escape?
								</p>
							</li>
							<li className={css.social__text2}>
								<p>
									Making the right decisions could be the difference between
									life and death.
								</p>
								
							</li>
						</ul>
						
					</div>
					<AboutSlider/>
				</div>
			</div>
		</section>
	)
}

export default SecondPage
