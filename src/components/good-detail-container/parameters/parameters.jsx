import { memo, useMemo } from 'react'

import cl from './parameters.module.scss'

const Parameters = () => {
	const parameters = useMemo(
		() => [
			{
				id: 0,
				key: 'Артикул',
				value: '14848284'
			},
			{
				id: 1,
				key: 'Ширина, мм',
				value: '185'
			},
			{
				id: 2,
				key: 'Производитель',
				value: 'Hyundai-Kia'
			},
			{
				id: 3,
				key: 'Диаметр, дюйм',
				value: '15'
			},
			{
				id: 4,
				key: 'Состояние (б/у)',
				value: 'Удовлетворительное'
			},
			{
				id: 5,
				key: 'Гарантия',
				value: '14 дн'
			},
			{
				id: 6,
				key: 'Вес',
				value: '0.2 кг (точный)'
			}
		],
		[]
	)

	return (
		<ul className={cl.parametersList}>
			{parameters.map(({ id, key, value }) => (
				<li className={cl.parameterItem} key={id}>
					<span className={cl.key}>{key}</span>
					<span className={cl.separator}></span>
					<span>{value}</span>
				</li>
			))}
		</ul>
	)
}

export default memo(Parameters)
