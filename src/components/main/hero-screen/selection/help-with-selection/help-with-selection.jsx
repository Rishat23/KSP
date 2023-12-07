import useDisableScroll from '@hooks/use-disable-scroll.js'
import cn from 'classnames'
import { Link } from 'react-router-dom'

import Button from '@ui/button'

import cl from './help-with-selection.module.scss'

const HelpWithSelection = ({ onClose }) => {
	useDisableScroll()
	return (
		<>
			<div className={cl.overlay} />
			<div className={cl.wrapper}>
				<button className={cl.btnClose} onClick={onClose} />
				<div className={cl.contentWrapper}>
					<h2 className={cl.title}>Помощь с подбором</h2>
					<div className={cl.contentContainer}>
						<span className={cl.text}>Вы можете написать нам с вопросом в любой из социальных сетей:</span>
						<div className={cl.linkWrapper}>
							<Link className={cn([cl.link, cl.whatsapp])} to="/">
								Связаться в Whatsapp
							</Link>
							<Link className={cn([cl.link, cl.telegram])} to="/">
								Связаться в Telegram
							</Link>
						</div>
					</div>
					<div className={cl.contactsWrapper}>
						<span className={cl.text}>Или оставьте нам свои контакты и мы вам перезвоним</span>
						<form className={cl.inputWrapper}>
							<input className={cl.input} type="number" placeholder="Телефон" />
							<Button sizeStyle="sizeS">Отправить</Button>
						</form>
						<span className={cl.confidential}>
							Нажимая на кнопку, вы соглашаетесь с{' '}
							<Link to="/" className={cl.underline}>
								Политикой конфиденциальности
							</Link>
						</span>
					</div>
				</div>
			</div>
		</>
	)
}

export default HelpWithSelection
