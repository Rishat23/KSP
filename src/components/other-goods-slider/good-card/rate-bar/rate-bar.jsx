import useMatchMedia from '@hooks/use-match-media.js'
import PropTypes from 'prop-types'
import { memo } from 'react'

import cl from './rate-bar.module.scss'

const RateBar = ({ rate, hideScore = true }) => {
	const starIsActive = (index) => +rate >= index + 1 || isMobile

	const { isMobile } = useMatchMedia()

	return (
		<div className={cl.wrapper}>
			<ul className={cl.stars}>
				{Array(isMobile ? 1 : 5)
					.fill(true)
					.map((_, index) => (
						<li key={index} className={starIsActive(index) ? cl.active : cl.common} />
					))}
			</ul>
			{!hideScore && <span className={cl.score}>{rate.split('.').join(',')}</span>}
		</div>
	)
}

RateBar.propTypes = {
	rate: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
	hideScore: PropTypes.bool
}

export default memo(RateBar)
