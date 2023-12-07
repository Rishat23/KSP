import useDisableScroll from '@hooks/use-disable-scroll.js'
import cn from 'classnames'
import { useMemo } from 'react'
import { Link } from 'react-router-dom'

import cl from './side-panel.module.scss'

const BurgerSidePanel = ({ onClose }) => {
	useDisableScroll()
	const navigationsList = useMemo(
		() => [
			{
				id: 0,
				links: [
					{
						id: 0,
						href: '/',
						text: 'Подбор запчастей по VIN'
					},
					{
						id: 1,
						href: '/',
						text: 'Подбор запчастей по марке автомобиля'
					},
					{
						id: 2,
						href: '/',
						text: 'Помощь с подбором'
					},
					{
						id: 3,
						href: '/',
						text: 'Акции'
					},
					{
						id: 4,
						href: '/',
						text: 'Контакты'
					}
				]
			},

			{
				id: 1,
				links: [
					{
						id: 0,
						href: '/',
						text: 'Доставка'
					},
					{
						id: 1,
						href: '/',
						text: 'Оплата'
					},
					{
						id: 2,
						href: '/',
						text: 'Возврат'
					},
					{
						id: 3,
						href: '/',
						text: 'О компании'
					},
					{
						id: 4,
						href: '/',
						text: 'Поставщикам'
					}
				]
			}
		],
		[]
	)

	const contactsList = useMemo(
		() => [
			{
				id: 0,
				href: '/',
				className: cl.whatsapp,
				text: 'Whatsapp'
			},
			{
				id: 1,
				href: '/',
				className: cl.telegram,
				text: 'Telegram'
			},
			{
				id: 2,
				href: '/',
				className: cl.instagram,
				text: 'Instagram'
			}
		],
		[]
	)

	const sidePanelWrapperClassNames = cn([cl.sidePanelWrapper, 'container'])

	return (
		<div className={sidePanelWrapperClassNames}>
			<header className={cl.headerWrapper}>
				<Link className={cl.logo} to="/" />
				<button className={cl.btnClose} onClick={onClose} />
			</header>
			<div className={cl.navigationWrapper}>
				{navigationsList.map(({ id, links }) => (
					<nav key={id}>
						<ul className={cl.navigationListWrapper}>
							{links.map(({ id, text, href }) => (
								<li key={id}>
									<Link className={cl.navigationItem} to={href}>
										{text}
									</Link>
								</li>
							))}
						</ul>
					</nav>
				))}
			</div>
			<footer>
				<ul className={cl.footerListWrapper}>
					{contactsList.map(({ id, className, href, text }) => (
						<li key={id}>
							<Link className={cn([cl.messengerItem, className])} to={href}>
								{text}
							</Link>
						</li>
					))}
				</ul>
			</footer>
		</div>
	)
}

export default BurgerSidePanel
