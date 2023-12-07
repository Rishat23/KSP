import { memo } from 'react'

import AboutCompany from '@components/main/about-company'
import AssociatedGoods from '@components/main/associated-goods'
import CarBands from '@components/main/car-brands'
import ContactsContainer from '@components/main/contacts-container'
import HeroScreen from '@components/main/hero-screen'

const Main = () => {
	return (
		<>
			<HeroScreen />
			<AssociatedGoods />
			<CarBands />
			<AboutCompany />
			<ContactsContainer />
		</>
	)
}

export default memo(Main)
