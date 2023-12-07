import Select from '@ui/select/index.js'

import cl from './by-car-brand.module.scss'

const ByCarBrand = () => {
	return (
		<>
			<div className={cl.wrapper}>
				<span className={cl.title}>Марка авто</span>
				<Select />
			</div>
			<div className={cl.wrapper}>
				<span className={cl.title}>Модель</span>
				<Select />
			</div>
			<div className={cl.wrapper}>
				<span className={cl.title}>Год</span>
				<Select />
			</div>
		</>
	)
}

export default ByCarBrand
