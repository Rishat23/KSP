import useMatchMedia from '@hooks/use-match-media.js'
import cn from 'classnames'
import { memo, useMemo, useState } from 'react'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'

import GoodCard from '@components/other-goods-slider/good-card'

import cl from './other-goods-slider.module.scss'


const OtherGoodsSlider = () => {
	const [swiper, setSwiper] = useState(null)
	const { isDesktop, isTablet, isTabletSmall } = useMatchMedia()

	const prevSwipeHandler = () => {
		swiper?.slidePrev()
	}
	const nextSwipeHandler = () => {
		swiper?.slideNext()
	}

	const slidesPerView = useMemo(() => {
		switch (true) {
			case isDesktop:
				return 4
			case isTablet:
				return 3
			case isTabletSmall:
				return 2
			default:
				return 2
		}
	}, [isDesktop, isTablet, isTabletSmall])

	return (
		<div className={cl.otherGoodsWrapper}>
			<h2 className={cl.title}>Другие товары в этой категории</h2>
			<div className={cl.otherGoodsSwiper}>
				<button onClick={prevSwipeHandler} className={cn([cl.swiperArrow, cl.swiperArrowLeft])} />
				<button onClick={nextSwipeHandler} className={cn([cl.swiperArrow, cl.swiperArrowRight])} />
				<Swiper spaceBetween={30} slidesPerView={slidesPerView} onSwiper={(swiper) => setSwiper(swiper)}>
					<SwiperSlide>
						<GoodCard />
					</SwiperSlide>
					<SwiperSlide>
						<GoodCard />
					</SwiperSlide>
					<SwiperSlide>
						<GoodCard />
					</SwiperSlide>
					<SwiperSlide>
						<GoodCard />
					</SwiperSlide>
					<SwiperSlide>
						<GoodCard />
					</SwiperSlide>
					<SwiperSlide>
						<GoodCard />
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	)
}

export default memo(OtherGoodsSlider)