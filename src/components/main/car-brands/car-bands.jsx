import { memo, useMemo } from 'react'
import { Link } from 'react-router-dom'

import cl from './car-brands.module.scss'

const CarBands = () => {
	const brandsList = useMemo(
		() => [
			{
				id: 0,
				href: '/',
				className: cl.kia
			},
			{
				id: 1,
				href: '/',
				className: cl.hyundai
			},
			{
				id: 2,
				href: '/',
				className: cl.chevrolet
			}
		],
		[]
	)
	return (
		<div className={cl.wrapper}>
			<h2 className={cl.title}>Марки автомобилей</h2>
			<ul className={cl.brandsList}>
				{brandsList.map(({ href, className, id }) => (
					<li className={cl.brandItem} key={id}>
						<Link to={href} className={className} />
					</li>
				))}
			</ul>
		</div>
	)
}

export default memo(CarBands)
