import cn from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'

import LinksThree from '@components/links-three'
import cl from '@components/return/return.module.scss'

const Return = () => {
	return (
		<div className={cl.wrapper}>
			<h1 className={cl.wrapperHeader}>Возврат</h1>
			<div className={cl.wrapperContainer}>
				<div className={cl.content}>
					<div className={cl.contentBlock}>
						<h3 className={cn([cl.help, cl.contentTitle])}>Как вернуть товар</h3>
						<p className={cl.contentText}>
							Мы рады, что вы выбрали наш магазин и надеемся, что приобретенный товар оправдал ваши ожидания. Однако,
							иногда могут возникнуть ситуации, когда товар не подходит или оказался бракованным. Если такое произошло,
							мы предлагаем вам несколько вариантов решения этой проблемы:{' '}
						</p>
						<br />
						<div className={cl.pNumber}>
							<p className={cl.contentText}>
								Вернуть товар в течение 30 дней с момента покупки. Для этого необходимо обратиться в магазин, где вы
								приобрели товар, и предоставить кассовый чек и сам товар в надлежащем состоянии. Мы вернем вам полную
								стоимость товара или заменим его на другой, если это возможно.
							</p>
							<p className={cl.contentText}>
								Обратиться к нам с просьбой о замене товара. Мы гарантируем качество наших товаров и готовы заменить их
								на другие, если они соответствуют вашим требованиям. Для этого вам нужно обратиться к нашему менеджеру
								по телефону или электронной почте и предоставить описание проблемы.
							</p>
							<p className={cl.contentText}>
								Связаться с нашей службой поддержки клиентов. Мы готовы помочь вам решить любые проблемы, связанные с
								покупкой товара. Наши специалисты ответят на все ваши вопросы и помогут выбрать оптимальный вариант
								решения проблемы.
							</p>
						</div>
					</div>
					<div className={cl.contentBlock}>
						<h3 className={cn([cl.clipboard, cl.contentTitle])}>Условия возврата</h3>
						<p className={cl.contentText}>
							Возврат товара возможен в течение 14 дней с момента получения заказа. При этом товар должен быть в том же
							состоянии, в котором был передан покупателю, а также иметь все бирки и этикетки.
						</p>
						<br />
						<p className={cl.contentText}>
							Если товар был приобретен по акции или со скидкой, то возврат возможен только в случае обнаружения брака.
							В этом случае необходимо предоставить фото дефекта или видеозапись с ним.
						</p>
						<br />
						<p className={cl.contentText}>
							Для возврата товара необходимо заполнить заявление на возврат, которое можно найти на нашем сайте. К
							заявлению нужно приложить копию паспорта и квитанции об оплате заказа.
						</p>
						<br />
						<p className={cl.contentText}>
							Возврат денежных средств производится в течение 7 дней с момента получения заявления.
						</p>
					</div>
					<div className={cl.contentBlock}>
						<h3 className={cn([cl.mail, cl.contentTitle])}>Возникла проблема</h3>
						<p className={cl.contentText}>
							Если у вас возникли какие-либо вопросы или проблемы с возвратом товара, пожалуйста, свяжитесь с нами по
							телефону, электронной почте. Мы всегда готовы помочь и решить вашу проблему.
						</p>
						<br />
						<p className={cl.contentText}>
							<Link to="tel:+ 7 (915) 123-45-67">+ 7 (915) 123-45-67</Link>
						</p>
						<br />
						<p className={cl.contentText}>
							<Link to="mail: example@mail.ru">example@mail.ru</Link>
						</p>
					</div>
				</div>
				<LinksThree />
			</div>
		</div>
	)
}

export default Return
