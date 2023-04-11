import "./css/projectList.css"

export default function ProjectList({ activeProjectList }) {
	return (
		<ul className="project-list">
			{activeProjectList.map(({ img, category }) => {
				return (
					<li className="project-list__item" data-category={category}>
						<img src={img} alt="" />
					</li>
				)
			})}
		</ul>
	)
}
