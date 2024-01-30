import { useMemo, useState } from 'react'

import Button from '@ui/button'
import ButtonLink from '@ui/button/link'
import Tabs from '@ui/tabs'

import ByCarBrand from '@components/main/hero-screen/selection/by-car-brand'
import ByVin from '@components/main/hero-screen/selection/by-vin'
import HelpWithSelection from '@components/main/hero-screen/selection/help-with-selection'

import cl from './selection.module.scss'

const Selection = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [activeTab, setActiveTab] = useState('vin')

	const togglePanel = () => {
		setIsOpen(!isOpen)
	}
	const closePanel = () => {
		setIsOpen(false)
	}
	const tabs = useMemo(
		() => [
			{
				id: 'vin',
				label: 'По VIN',
				component: <ByVin />
			},
			{
				id: 'brand',
				label: 'По марке авто',
				component: <ByCarBrand />
			}
		],
		[]
	)
	const handleTabChange = (tabId) => {
		setActiveTab(tabId)
	}

	return (
		<div className={cl.wrapper}>
			<h2 className={cl.title}>Подбор запчастей</h2>
			<Tabs
				tabs={tabs}
				tabsWrapperClassName={cl.tabs}
				tabClassName={cl.tab}
				tabActiveClassName={cl.active}
				onTabChange={handleTabChange}
			/>
			<div className={cl.linkWrapper}>
				<ButtonLink to="/brand-search" sizeStyle="sizeL">
					Перейти
				</ButtonLink>
				{activeTab === 'vin' && (
					<Button className={cl.modelBtn} sizeStyle="sizeL" colorStyle="outlined" onClick={togglePanel}>
						Помощь с подбором
					</Button>
				)}
				{isOpen ? <HelpWithSelection onClose={closePanel} /> : null}
			</div>
		</div>
	)
}

export default Selection
