import { memo } from 'react'
import { Link } from 'react-router-dom'

import cl from './bread-crumbs.module.scss'

function BreadCrumbs() {
	const crumbsList = [
		{
			id: 0,
			href: '/',
			text: 'Главная'
		},
		{
			id: 1,
			href: '/',
			text: 'Hyundai Sonata Тагаз'
		},
		{
			id: 2,
			href: '/',
			text: 'Hyundai Sonata Тагаз, G4GC '
		},
		{
			id: 3,
			href: '/',
			text: 'Кронштейн фары противотуманной левой'
		},
		{
			id: 4,
			href: '/',
			text: 'Кронштейн фары противотуманной левой для Hyundai Sonata VI 2010-2014 БУ состояние удовлетворительное'
		}
	]

	return (
		<ul className={cl.breadcrumbs}>
			{crumbsList.map(({ id, href, text }) => (
				<li key={id} className={cl.breadcrumbItem}>
					<Link to={href}>{text}</Link>
					<span className={cl.separator}>-</span>
				</li>
			))}
		</ul>
	)
}

export default memo(BreadCrumbs)
