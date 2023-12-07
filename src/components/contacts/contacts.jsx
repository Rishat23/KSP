import cn from 'classnames'
import { memo, useMemo } from 'react'
import { Link } from 'react-router-dom'

import cl from './contacts.module.scss'

const Contacts = ({
	wrapperClassName,
	addressesWrapperClassName,
	messengersWrapperClassName,
	addressItemClassName
}) => {
	const addressesList = useMemo(
		() => [
			{
				id: 0,
				text: 'ул. Первая, 15, Актобе',
				phone: '+7 (915) 123-45-67'
			},
			{
				id: 1,
				text: 'ул. Вторая, 15, Актобе',
				phone: '+7 (915) 123-45-67'
			},
			{
				id: 2,
				text: 'ул. Третья, 15, Актобе',
				phone: '+7 (915) 123-45-67'
			}
		],
		[]
	)
	const messengersList = useMemo(
		() => [
			{
				id: 0,
				href: '/',
				text: 'Whatsapp',
				className: cl.whatsapp
			},
			{
				id: 1,
				href: '/',
				text: 'Telegram',
				className: cl.telegram
			},
			{
				id: 2,
				href: '/',
				text: 'Instagram',
				className: cl.instagram
			}
		],
		[]
	)

	return (
		<div className={cn([cl.wrapper, wrapperClassName])}>
			<ul className={cn([cl.addressesList, addressesWrapperClassName])}>
				{addressesList.map(({ id, text, phone }) => (
					<li key={id} className={cn([cl.addressItem, addressItemClassName])}>
						<span className={cl.address}>{text}</span>
						<Link to={`tel:${phone}`}>{phone}</Link>
					</li>
				))}
			</ul>
			<ul className={cn([cl.messengersWrapper, messengersWrapperClassName])}>
				<li>
					<h4>Мессенджеры:</h4>
				</li>
				{messengersList.map(({ id, href, text, className }) => (
					<li key={id}>
						<Link className={cn([cl.messengerItem, className])} to={href}>
							{text}
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default memo(Contacts)
