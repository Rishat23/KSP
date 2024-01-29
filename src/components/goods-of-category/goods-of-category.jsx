import cn from 'classnames'
import { useState } from 'react'

import Button from '@ui/button/index.js'

import Filters from '@components/goods-of-category/filters'
import GoodCard from '@components/other-goods-slider/good-card/good-card.jsx'

import cl from './goods-of-category.module.scss'

const GoodsOfCategory = () => {
	const [isOpen, setIsOpen] = useState(false)

	const partsList = [
		{
			name: 'Двигатель',
			parts: ['хуйня', 'дрисня', 'еботня']
		},
		{
			name: 'Кузов внутри',
			parts: ['поебистика', 'хуистика', 'ебанистика']
		},
		{
			name: 'Cистема выпуска отработанных газов'
		}
	]

	return (
		<div className={cn([cl.goodsOfCategoryWrapper, 'container'])}>
			<h1 className={cl.title}>Кронштейн фары противотуманной левой на Sonata Тагаз, код двигателя G4GC</h1>
			<div className={cl.wrapper}>
				<div className={cl.drs}>
					<div className={cl.catalogBlock}>
						<span onClick={() => setIsOpen(!isOpen)}>
							<Button>КАТАЛОГ ЗАПЧАСТЕЙ</Button>
						</span>
						<div className={`${cl.menu}${isOpen ? 'active' : ''}`}>
							<div className={cl.menuList}>
								<div className={cl.partsGroup}>
									{partsList.map(({ name }) => (
										<li className={cl.partsGroupItem}>{name}</li>
									))}
								</div>
								<div className={cl.partsName}>
									{partsList.map(({ name, parts }) => (
										<div>
											{/* <span>{name}</span> */}
											<li className={cl.partsNameItem}>{parts}</li>
										</div>
									))}
								</div>
							</div>
							{/* <ul className={cl.menuList}> */}
							{/*	{partsList.map(({ name }) => ( */}
							{/*		<li className={cl.menuListItem}>{name}</li> */}
							{/*	))} */}
							{/* </ul> */}
						</div>
					</div>
					<Filters />
				</div>
				<div className={cl.goodsWrapper}>
					<GoodCard />
					<GoodCard />
					<GoodCard />
				</div>
			</div>
		</div>
	)
}

export default GoodsOfCategory