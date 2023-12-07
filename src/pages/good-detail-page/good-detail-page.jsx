import MainLayout from '@layouts/main'
import { memo } from 'react'

import GoodDetailContainer from '@components/good-detail-container'

function GoodDetailPage() {
	return (
		<MainLayout>
			<GoodDetailContainer />
		</MainLayout>
	)
}

export default memo(GoodDetailPage)
