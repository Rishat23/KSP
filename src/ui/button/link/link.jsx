import cn from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'

import toCapitalize from '@utils/to-capitalize.js'

import cl from '../button.module.scss'

const ButtonLink = ({
	sizeStyle = 'sizeM',
	colorStyle = 'primary',
	additionalStyles = [],
	className,
	onClick,
	href,
	children,
	disabled,
	...restProps
}) => {
	const classNames = cn([
		cl.btn,
		className,
		{ [cl.btnDisabled]: disabled },
		cl[`btn${toCapitalize(sizeStyle)}`],
		cl[`btn${toCapitalize(colorStyle)}`],
		...additionalStyles.map((additionalStyle) => cl[`btn${toCapitalize(additionalStyle)}`])
	])

	return (
		<Link to={href} className={classNames} disabled={disabled} {...restProps}>
			{children}
		</Link>
	)
}

export default ButtonLink
