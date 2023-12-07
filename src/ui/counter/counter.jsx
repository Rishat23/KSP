import PropTypes from 'prop-types'
import { memo, useEffect, useState } from 'react'

import cl from './counter.module.scss'

const Counter = ({ defaultValue = 0, onChange }) => {
	const [value, setValue] = useState(defaultValue)
	const [isMounted, setIsMounted] = useState(false)

	useEffect(() => {
		if (!isMounted) {
			setIsMounted(true)
			return
		}

		onChange?.(value)
	}, [value])
	const decrementHandler = () => {
		setValue((prev) => prev - 1)
	}
	const incrementHandler = () => {
		setValue((prev) => prev + 1)
	}

	return (
		<div className={cl.wrapper}>
			<button onClick={decrementHandler} className={cl.decrementAction} />
			<span>{value}</span>
			<button onClick={incrementHandler} className={cl.incrementAction} />
		</div>
	)
}

Counter.propTypes = {
	defaultValue: PropTypes.number,
	onChange: PropTypes.func
}

export default memo(Counter)