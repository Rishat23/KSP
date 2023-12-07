import DeliveryPage from '@pages/delivery-page'
import GoodDetailPage from '@pages/good-detail-page'
import Main from '@pages/main-page'
import PaymentPage from '@pages/payment-page/index.js'
import ReturnPage from '@pages/return-page/index.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

function Routes() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Main />
		},
		{
			path: `/good/:id`,
			element: <GoodDetailPage />
		},
		{
			path: `/delivery/:id`,
			element: <DeliveryPage />
		},
		{
			path: `/payment/:id`,
			element: <PaymentPage />
		},
		{
			path: `/return/:id`,
			element: <ReturnPage />
		}
	])

	return <RouterProvider router={router} />
}

export default Routes
