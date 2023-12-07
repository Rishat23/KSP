import useMatchMedia from '@hooks/use-match-media.js'
import { memo, useMemo } from 'react'

import Tabs from '@ui/tabs'

import Parameters from '@components/good-detail-container/parameters'
import OtherGoodsSlider from '@components/other-goods-slider'

import GoodDetail from './good-detail'

function GoodDetailContainer() {
	const { isDesktop } = useMatchMedia()

	const tabs = useMemo(
		() => [
			{
				id: 'parameters',
				label: 'Характеристики',
				component: <Parameters />
			},
			{
				id: 'reviews',
				label: 'Отзывы о поставщике',
				component: <>Отзывов пока нет</>
			}
		],
		[]
	)

	return (
		<>
			<GoodDetail />
			{isDesktop && <Tabs tabs={tabs} />}
			<OtherGoodsSlider />
		</>
	)
}

export default memo(GoodDetailContainer)
