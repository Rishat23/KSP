import car from '@assets/images/car.jpg'

import ButtonLink from '@ui/button/link'

import cl from './card.module.scss'

const Card = () => {
	return (
		<div className={cl.cardWrapper}>
			<img className={cl.img} src={car} alt="" />
			<div className={cl.contentWrapper}>
				<span className={cl.logo} />
				<h1 className={cl.title}>Автозапчасти для KIA, Hyundai, Chevrolet</h1>
				<ButtonLink className={cl.btnLink} sizeStyle="sizeM" colorStyle="outlined">
					Смотреть каталог
				</ButtonLink>
			</div>
		</div>
	)
}

export default Card
