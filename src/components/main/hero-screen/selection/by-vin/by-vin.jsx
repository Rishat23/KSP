import Select from '@ui/select'

import cl from './by-vin.module.scss'

const ByVin = () => {
	return (
		<>
			<div className={cl.wrapper}>
				<span className={cl.title}>VIN номер</span>
				<Select />
			</div>

			<div className={cl.wrapper}>
				<span className={cl.title}>Название запчасти</span>
				<Select />
			</div>
		</>
	)
}

export default ByVin
