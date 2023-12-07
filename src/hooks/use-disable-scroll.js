import { useEffect } from 'react'

const useDisableScroll = () => {
	useEffect(() => {
		document.body.style.overflowY = 'hidden'
		return () => {
			document.body.style = {}
		}
	}, [])
}

export default useDisableScroll
