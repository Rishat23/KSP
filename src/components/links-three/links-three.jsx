import React from 'react'
import { Link } from 'react-router-dom'

import cl from './links-three.module.scss'

const LinksThree = () => {
	return (
		<div className={cl.links}>
			<Link to="/payment/:id" className={cl.link}>
				Оплата
			</Link>
			<Link to="/delivery/:id" className={cl.link}>
				Доставка
			</Link>
			<Link to="/return/:id" className={cl.link}>
				Возврат
			</Link>
		</div>
	)
}

export default LinksThree
