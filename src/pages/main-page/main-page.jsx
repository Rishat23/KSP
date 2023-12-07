import MainLayout from '@layouts/main'
import { memo } from 'react'

import Main from '@components/main'

function MainPage() {
	return (
		<MainLayout hideBreadCrumbs>
			<Main />
		</MainLayout>
	)
}

export default memo(MainPage)
