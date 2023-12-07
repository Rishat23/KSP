import { memo } from 'react'
import { Link } from 'react-router-dom'

import { navigationsList } from '../navigation-config.js'
import cl from './navigation.module.scss'

const Navigation = () => {
	return (
		<>
			{navigationsList.map(({ id, header, links }) => (
				<nav key={id}>
					<ul className={cl.list}>
						<li>
							<h4 className={cl.title}>{header}</h4>
						</li>
						{links.map(({ id, text, href }) => (
							<li key={id}>
								{href ? (
									<Link className={cl.item} to={href}>
										{text}
									</Link>
								) : (
									<span className={cl.item}>{text}</span>
								)}
							</li>
						))}
					</ul>
				</nav>
			))}
		</>
	)
}

export default memo(Navigation)
