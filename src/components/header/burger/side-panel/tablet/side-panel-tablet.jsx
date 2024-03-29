import useDisableScroll from '@hooks/use-disable-scroll.js'
import cn from 'classnames'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import Contacts from '@components/contacts'

import cl from './side-panel-tablet.module.scss'

const BurgerSidePanelTablet = ({ isOpen, onClose }) => {
	// const [isWasClosed, setIsWasClosed] = useState(false)
	// useDisableScroll()
	// const closeHandler = () => {
	// 	setIsWasClosed(true)
	// 	setTimeout(() => onClose(), 500)
	// }
	return (
		<>
			{/* <div className={cn([cl.sidePanelWrapper, { [cl.sidePanelWrapperClosed]: isWasClosed }])}> */}
			<div className={isOpen ? cl.sidePanelWrapper : cn([cl.sidePanelWrapper, cl.sidePanelWrapperClosed])}>
				<div className={cl.sidePanelWrapperContent}>
					<button aria-label="Закрыть" className={cl.btnClose} onClick={onClose} />
					<div className={cl.linksWrapper}>
						<Link to="/" className={cl.linksWrapperYellow}>
							Подбор запчастей по VIN
						</Link>
						<Link to="/" className={cl.linksWrapperYellow}>
							Подбор запчастей по марке авто
						</Link>
						<Link to="/about">О компании</Link>
						<Link to="/contacts">Контакты</Link>
					</div>
					<Contacts
						wrapperClassName={cl.wrapper}
						addressesWrapperClassName={cl.addressesWrapper}
						addressItemClassName={cl.addressItem}
						messengersWrapperClassName={cl.messengersWrapper}
					/>
				</div>
			</div>
			<div className={isOpen ? cl.overlay : cn([cl.overlay, cl.overlayClosed])} onClick={onClose} />
		</>
	)
}

export default BurgerSidePanelTablet
