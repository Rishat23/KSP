import React, { useState } from 'react'

import cl from './select.module.scss'

// Подключаем файл стилей

const CustomSelect = () => {
	const [selectedValue, setSelectedValue] = useState('')
	const [isOpen, setIsOpen] = useState(false)

	const handleChange = (event) => {
		setSelectedValue(event.target.value)
	}

	const handleToggle = () => {
		setIsOpen(!isOpen)
	}

	const handleSelectOption = (value) => {
		setSelectedValue(value)
		setIsOpen(false)
	}

	return (
		<div className={cl.wrapper}>
			<input
				className={cl.input}
				type="text"
				placeholder="Например: 123123123123"
				value={selectedValue}
				onChange={handleChange}
				onClick={handleToggle}
			/>
			{isOpen && (
				<ul className={cl.selectList}>
					<li className={cl.selectItem} onClick={() => handleSelectOption('123')}>
						123
					</li>
					<li className={cl.selectItem} onClick={() => handleSelectOption('456')}>
						456
					</li>
					<li className={cl.selectItem} onClick={() => handleSelectOption('789')}>
						789
					</li>
				</ul>
			)}
		</div>
	)
}

export default CustomSelect
