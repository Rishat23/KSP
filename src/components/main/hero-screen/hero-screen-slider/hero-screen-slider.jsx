import cn from 'classnames'
import { useState } from 'react'
import 'swiper/css'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import Card from '@components/main/hero-screen/hero-screen-slider/card'

import cl from './hero-screen-slider.module.scss'
import './hero-screen-slider.scss'


const HeroScreenSlider = () => {
	const [swiper, setSwiper] = useState(null)

	const prevSwipeHandler = () => {
		swiper?.slidePrev()
	}
	const nextSwipeHandler = () => {
		swiper?.slideNext()
	}
	return (
		<div className={cl.wrapper}>
			<button onClick={prevSwipeHandler} className={cn([cl.swiperArrow, cl.swiperArrowLeft])} />
			<button onClick={nextSwipeHandler} className={cn([cl.swiperArrow, cl.swiperArrowRight])} />
			<Swiper
				pagination={true}
				modules={[Pagination]}
				spaceBetween={30}
				slidesPerView={1}
				onSwiper={(swiper) => setSwiper(swiper)}
			>
				<SwiperSlide>
					<Card />
				</SwiperSlide>
				<SwiperSlide>
					<Card />
				</SwiperSlide>
				<SwiperSlide>
					<Card />
				</SwiperSlide>
			</Swiper>
		</div>
	)
}

export default HeroScreenSlider