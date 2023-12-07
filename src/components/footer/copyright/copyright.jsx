import cn from 'classnames'
import { memo } from 'react'
import { Link } from 'react-router-dom'

import cl from './copyright.module.scss'

const Copyright = () => {
	const copyrightContentWrapperClassNames = cn([cl.copyrightContentWrapper, 'container'])
	return (
		<footer className={cl.copyright}>
			<div className={copyrightContentWrapperClassNames}>
				<Link to="/">Политика конфиденциальности</Link>
				<Link to="/">Разработка сайта - Амбити</Link>
			</div>
		</footer>
	)
}

export default memo(Copyright)
