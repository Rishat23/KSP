import cn from 'classnames'
import { memo, useMemo, useState } from 'react'

import cl from './tabs.module.scss'

const Tabs = ({ tabs, tabsWrapperClassName, tabActiveClassName, tabClassName }) => {
	const [selectedTabId, setSelectedTabId] = useState(tabs[0].id)
	const selectedComponent = useMemo(() => tabs.find(({ id }) => id === selectedTabId).component, [tabs, selectedTabId])

	const selectHandler = (id) => {
		setSelectedTabId(id)
	}

	return (
		<>
			<ul className={cn([cl.tabs, tabsWrapperClassName])}>
				{tabs.map(({ id, label }) => (
					<li
						key={id}
						onClick={() => selectHandler(id)}
						className={cn([
							cl.tab,
							tabClassName,
							{ [cl.active]: id === selectedTabId, [tabActiveClassName]: id === selectedTabId }
						])}
					>
						{label}
					</li>
				))}
			</ul>
			{selectedComponent}
		</>
	)
}

export default memo(Tabs)
