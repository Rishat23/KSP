import cn from 'classnames'
import { memo } from 'react'
import { Link } from 'react-router-dom'

import Copyright from './copyright'
import cl from './footer.module.scss'
import Navigation from './navigation'

const Footer = () => {
	const footerContentWrapperClassNames = cn([cl.footerContentWrapper, 'container'])
	return (
		<>
			<footer className={cl.footer}>
				<div className={footerContentWrapperClassNames}>
					<Link className={cl.logo} to="/" />
					<Navigation />
				</div>
			</footer>
			<Copyright />
		</>
	)
}

export default memo(Footer)
