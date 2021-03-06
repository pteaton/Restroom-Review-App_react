import React, { Component } from 'react'
import { Modal, Form, Button, Label, Header } from 'semantic-ui-react'
import '../index.css'

export default class EditReviewModal extends Component {

	constructor(props) {
		super(props)

		console.log(props)

		this.state = {
			title: props.reviewToEdit.title,
			review: props.reviewToEdit.review,
			location: props.reviewToEdit.location
		}
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit = (event) => {
		event.preventDefault()
		this.props.updateReview(this.state)
	}

	render() {
		
		return (
			<Modal open={true} closeIcon={true} onClose={this.props.closeModal}>
				<Header>
					<h3> Enter updated review info</h3>
				</Header>
				<Modal.Content>
					<Form onSubmit={this.handleSubmit}>
						<Label> Title: </Label>
						<Form.Input
							type="text"
							name="title"
							value={this.state.title}
							placeholder="Enter updated title"
							onChange={this.handleChange}
						/>
						<Label> Review: </Label>
						<Form.Input	
							type="text"
							name="review"
							value={this.state.review}
							placeholder="Enter an updated review"
							onChange={this.handleChange}
						/>
						<Label> Location: </Label>
						<Form.Input
							type="text"
							name="location"
							value={this.state.location}
							placeholder="Enter an updated location"
							onChange={this.handleChange}
						/>
						<Modal.Actions>
							<Button type="Submit">Update Review</Button> 
						</Modal.Actions>
					</Form>
				</Modal.Content>
			</Modal>
		)
	}
}