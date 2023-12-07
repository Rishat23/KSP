import { memo } from 'react'

import Contacts from '@components/contacts/index.js'
import Map from '@components/map/index.js'

import cl from './contacts-container.module.scss'

const ContactsContainer = () => {
	return (
		<div className={cl.wrapper}>
			<h2 className={cl.title}>Контакты</h2>
			<div className={cl.contentWrapper}>
				<Contacts />
				<Map />
			</div>
		</div>
	)
}

export default memo(ContactsContainer)
