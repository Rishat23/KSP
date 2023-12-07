import search from '@assets/icons/search.svg'
import useMatchMedia from '@hooks/use-match-media.js'
import { memo } from 'react'

import Button from '@ui/button'

import cl from './input-search.module.scss'

const InputSearch = () => {
	const { isMobile, isDesktop } = useMatchMedia()

	if (isMobile) {
		// PLACEHOLDER
		return <img className={cl.modalButton} src={search} alt="" />
	}

	return (
		<form className={cl.wrapper}>
			<input
				className={cl.input}
				type="text"
				placeholder="Наименование, номер запчасти или VIN. Например: 123123123123"
			/>
			{isDesktop && (
				<Button sizeStyle="sizeS" className={cl.button} type="submit">
					Найти
				</Button>
			)}
		</form>
	)
}

export default memo(InputSearch)
