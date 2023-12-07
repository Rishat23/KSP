import cn from 'classnames'
import React from 'react'

import LinksThree from '@components/links-three'

import cl from './delivery.module.scss'

const Delivery = () => {
	return (
		<div className={cl.wrapper}>
			<h1 className={cl.wrapperHeader}>Доставка</h1>
			<div className={cl.wrapperContainer}>
				<div className={cl.content}>
					<div className={cl.contentBlock}>
						<h3 className={cn([cl.store, cl.contentTitle])}>Самовывоз из пункта выдачи</h3>
						<p className={cl.contentText}>Вы можете забрать свой заказ самостоятельно из наших 3-х пунктов выдачи.</p>
						<br />
						<p className={cl.contentText}>Для получения заказа необходимо предъявить номер заказа и код получения.</p>
						<br />
						<p className={cl.contentText}>
							Если вы хотите воспользоваться услугой доставки, то вы можете оформить ее на нашем сайте или по телефону
							горячей линии.
						</p>
					</div>
					<div className={cl.contentBlock}>
						<h3 className={cn([cl.truck, cl.contentTitle])}>Доставка</h3>
						<p className={cl.contentText}>
							Для заказа доставки необходимо указать адрес доставки и количество товаров. Длительность доставки зависит
							от курьерской службы. Стоимость доставки зависит от веса и размера заказа.
						</p>
					</div>
				</div>
				<LinksThree />
			</div>
		</div>
	)
}

export default Delivery
