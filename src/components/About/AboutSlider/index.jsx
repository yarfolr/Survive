import React from 'react'
import css from './style.module.css'
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'
import { sliderList } from './utils'



const AboutSlider = () => {
	return (
		<div className={css.swiper__hero}>
			<Swiper
				effect={'cards'}
				grabCursor={true}
				modules={[EffectCards]}
				className='mySwiper'
			>
				{sliderList.map(({ id, src, name }) => (
					<SwiperSlide key={id}>
						
						<img src={src} alt={name} className={css.swiper__image} />{' '}
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

export default AboutSlider