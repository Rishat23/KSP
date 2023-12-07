import cn from 'classnames'
import PropTypes from 'prop-types'
import { memo } from 'react'

import toCapitalize from '@utils/to-capitalize.js'

import cl from './button.module.scss'

const Button = ({
	sizeStyle = 'sizeM',
	colorStyle = 'primary',
	additionalStyles = [],
	className,
	type = 'button',
	...restProps
}) => {
	const classNames = cn([
		cl.btn,
		className,
		cl[`btn${toCapitalize(sizeStyle)}`],
		cl[`btn${toCapitalize(colorStyle)}`],
		...additionalStyles.map((additionalStyle) => cl[`btn${toCapitalize(additionalStyle)}`])
	])

	return <button type={type} className={classNames} {...restProps} />
}

Button.propTypes = {
	colorStyle: PropTypes.oneOf(['primary', 'outlined']),
	sizeStyle: PropTypes.oneOf(['sizeS', 'sizeM', 'sizeL']),
	additionalStyles: (props, propName, componentName) => {
		const additionalStyles = props[propName]
		if (
			additionalStyles === undefined ||
			(Array.isArray(additionalStyles) &&
				[...new Set(additionalStyles)].every((additionalStyle) => ['mobileWide'].includes(additionalStyle)))
		) {
			return
		}

		return new Error(`Invalid prop \`${propName}\` supplied to \`${componentName}\`. Validation failed.`)
	}
}
export default memo(Button)
