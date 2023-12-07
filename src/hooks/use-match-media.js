import { useCallback, useLayoutEffect, useMemo, useState } from 'react'

const queries = {
	isMobile: '(max-width: 575px)',
	isTabletSmall: '(min-width: 576px) and (max-width: 768px)',
	isTablet: '(min-width: 769px) and (max-width: 992px)',
	isDesktop: '(min-width: 993px)'
}

const useMatchMedia = () => {
	const mediaQueryLists = useMemo(
		() => Object.values(queries).map((query) => matchMedia(query)),
		[]
	)
	const getValues = useCallback(
		() => mediaQueryLists.map((mql) => mql.matches),
		[]
	)
	const [values, setValues] = useState(getValues)

	useLayoutEffect(() => {
		const handler = () => setValues(getValues)
		mediaQueryLists.forEach((mql) => mql.addEventListener('change', handler))

		return () => {
			mediaQueryLists.forEach((mql) =>
				mql.removeEventListener('change', handler)
			)
		}
	}, [])

	return Object.keys(queries).reduce(
		(acc, screen, index) => ({
			...acc,
			[screen]: values[index]
		}),
		{}
	)
}

export default useMatchMedia
