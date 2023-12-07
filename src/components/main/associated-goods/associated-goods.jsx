import accessories from '@assets/images/accessories.png'
import autochemistry from '@assets/images/auto-chemistry.png'
import autoelectrics from '@assets/images/auto-electrics.png'
import React, { memo, useMemo } from 'react'
import { Link } from 'react-router-dom'

import cl from './associated-goods.module.scss'

const AssociatedGoods = () => {
	const associatedGoodsList = useMemo(
		() => [
			{
				id: 0,
				href: '/',
				title: 'Автоэлектрика',
				img: autoelectrics
			},
			{
				id: 1,
				href: '/',
				title: 'Автохимия и автокосметика',
				img: autochemistry
			},
			{
				id: 2,
				href: '/',
				title: 'Аксессуары',
				img: accessories
			}
		],
		[]
	)
	return (
		<div className={cl.wrapper}>
			<h2 className={cl.title}>Сопутствующие товары</h2>
			<ul className={cl.goodsList}>
				{associatedGoodsList.map(({ id, href, title, img }) => (
					<li className={cl.goodItemWrapper} key={id}>
						<Link className={cl.goodItem} to={href}>
							<h3 className={cl.itemTitle}>{title}</h3>
							<div className={cl.content}>
								<span className={cl.arrow} />
								<img className={cl.img} alt="" src={img} />
							</div>
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default memo(AssociatedGoods)
