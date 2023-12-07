import goodImageSrc from '@assets/images/good1.jpg'
import { memo } from 'react'

import Button from '@ui/button'
import Counter from '@ui/counter'

import cl from './good-detail.module.scss'

function GoodDetail() {
	return (
		<div className={cl.wrapper}>
			<img className={cl.image} src={goodImageSrc} alt="" />
			<div className={cl.contentWrapper}>
				<h1 className={cl.title}>
					Кронштейн фары противотуманной левой для Hyundai Sonata VI 2010-2014 БУ состояние удовлетворительное
				</h1>
				<span className={cl.price}>743 ₽</span>
				<div className={cl.extraInfoWrapper}>
					<span>Номер товара: 92101G6000</span>
					<span>Производитель: Atek</span>
					<span className={cl.rate}>Рейтинг: 4,5 </span>
				</div>
				<div className={cl.actionsWrapper}>
					<Counter />
					<Button additionalStyles={['mobileWide']}>В корзину</Button>
					<Button additionalStyles={['mobileWide']} colorStyle="outlined" className={cl.favouritesAction}>
						<span>В избранное</span>
					</Button>
				</div>
				<span className={cl.availableAmount}>
					<b>В наличии: </b>3 шт
				</span>
			</div>
		</div>
	)
}

export default memo(GoodDetail)
