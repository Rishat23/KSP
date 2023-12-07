import HeroScreenSlider from '@components/main/hero-screen/hero-screen-slider'
import Selection from '@components/main/hero-screen/selection'

import cl from './hero-screen.module.scss'

const HeroScreen = () => {
	return (
		<div className={cl.wrapper}>
			<Selection />
			<HeroScreenSlider />
		</div>
	)
}

export default HeroScreen
