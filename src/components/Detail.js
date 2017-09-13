import React from 'react'
export default class Detail extends React.Component {
	render() {
		console.log(this.props);
		return (
			<div>
			详情页面
			{this.props.match.params.id}
			</div>
		)
	}
} 