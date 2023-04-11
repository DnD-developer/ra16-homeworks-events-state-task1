import "./css/toolbar.css"

export default function ToolBar({ filters, selected, onSelectFilter }) {
	return (
		<ul className="toolbar">
			{filters.map(filter => {
				const classes = filter === selected ? "toolbar__item select" : "toolbar__item"
				return (
					<li className={classes} onClick={() => onSelectFilter(filter)}>
						{filter}
					</li>
				)
			})}
		</ul>
	)
}
