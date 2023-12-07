import placemarkSrc from '@assets/icons/placemark.svg'
import { Placemark, Map as YMap, YMaps } from '@pbe/react-yandex-maps'
import { memo, useMemo } from 'react'

import cl from './map.module.scss'

const mapState = { center: [51.142093, 71.455834], zoom: 12 }

const Map = () => {
	const placemarkList = useMemo(
		() => [
			{
				id: 0,
				geometry: [51.142093, 71.455834]
			},
			{
				id: 1,
				geometry: [51.127527, 71.425086]
			},
			{
				id: 2,
				geometry: [51.105727, 71.440445]
			}
		],
		[]
	)

	return (
		<YMaps>
			<YMap className={cl.wrapper} state={mapState}>
				{placemarkList.map(({ id, geometry }) => (
					<Placemark
						key={id}
						geometry={geometry}
						options={{
							iconLayout: 'default#image',
							iconImageHref: placemarkSrc,
							iconImageSize: [33, 41],
							iconImageOffset: [-3, -42]
						}}
					/>
				))}
			</YMap>
		</YMaps>
	)
}
export default memo(Map)
