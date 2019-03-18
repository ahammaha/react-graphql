import React from 'react'

class Link extends React.Component {
	render() {
		return(
			<div>
				<div>
					<ul>
						<li> {this.props.link.description} -- ({this.props.link.url}) </li>
					</ul>
				</div>
			</div>
		)
	}
}

export default Link