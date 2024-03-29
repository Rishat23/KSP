import cn from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'

import cl from './brand-search.module.scss'

const BrandSearch = () => {
	const brandList = [
		{
			modification: '2.00',
			year: '2004 - 2006',
			engineType: 'Бензиновый',
			engineCode: 'G4JP-EG',
			volume: '2 л',
			power: '179 кВт / 131 л.с.'
		},
		{
			modification: '2.00',
			year: '2006 - наст. время',
			engineType: 'Бензиновый',
			engineCode: 'G4GC',
			volume: '2 л',
			power: '187 кВт / 137 л.с.'
		},
		{
			modification: '2.7',
			year: '2004 - наст. время',
			engineType: 'Бензиновый',
			engineCode: 'G6BA',
			volume: '2,7 л',
			power: '234 кВт / 172 л.с.'
		}
	]

	return (
		<div className={cn([cl.wrapper, 'container'])}>
			<div className={cl.brandSearchTitle}>Запчасти на Sonata Тагаз</div>
			<div className={cl.brandSearchInfo}>Выберите двигатель автомобиля</div>
			<div className={cl.brandSearchTable}>
				<div className={cl.brandSearchTableHeader}>
					<div>Модификация</div>
					<div className={cl.removeHeader}>Год выпуска</div>
					<div className={cl.removeHeader}>Тип двигателя</div>
					<div className={cl.removeHeader}>Код двигателя</div>
					<div className={cl.removeHeader}>Объем</div>
					<div className={cl.removeHeader}>Мощность</div>
				</div>
				{brandList.map(({ modification, year, engineType, engineCode, volume, power }) => (
					<Link to="/good/1">
						<div className={cl.brandSearchTableLines}>
							<div className={cl.modification}>{modification}</div>
							<div className={cl.secondLine}>
								<div className={cl.year}>{year}</div>
								<div className={cl.engineType}>{engineType}</div>
								<div className={cl.engineCode}>{engineCode}</div>
								<div className={cl.volume}>{volume}</div>
								<div className={cl.power}>{power}</div>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	)
}

export default BrandSearch
