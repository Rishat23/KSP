import { memo } from 'react'
import { Link } from 'react-router-dom'

import cl from './cart-button.module.scss'

const CartButton = () => {
	return (
		<div className={cl.wrapper}>
			<Link className={cl.cartButton} to="/">
				<span className={cl.counterWrapper}>
					<span className={cl.counter}>5</span>
				</span>
			</Link>
			<span className={cl.cost}>170 550&nbsp;₽</span>
		</div>
	)
}

export default memo(CartButton)
