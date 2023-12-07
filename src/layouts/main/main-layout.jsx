import { memo } from 'react'

import Footer from '@components/footer'
import Header from '@components/header'

import BreadCrumbs from '../components/bread-сrumbs'

function MainLayout({ children, hideBreadCrumbs }) {
	return (
		<>
			<div className="container">
				<Header />
				{!hideBreadCrumbs && <BreadCrumbs />}
				{children}
			</div>
			<Footer />
		</>
	)
}

export default memo(MainLayout)
