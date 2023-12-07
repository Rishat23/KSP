import goodDetail from '@assets/images/good1.jpg'
import { memo } from 'react'

import RateBar from '@components/other-goods-slider/good-card/rate-bar'

import cl from './good-card.module.scss'

const GoodCard = () => {
	return (
		<div className={cl.wrapper}>
			<img className={cl.image} src={goodDetail} alt="" />
			<h3 className={cl.title}>
				Кронштейн фары противотуманной левой для Hyundai Sonata VI 2010-2014 БУ
				состояние удовлетворительное
			</h3>
			<RateBar rate="4.5" hideScore={false} />
			<span className={cl.cost}>590 руб.</span>
			<span className={cl.delivery}>от 6 дней</span>
		</div>
	)
}

export default memo(GoodCard)
