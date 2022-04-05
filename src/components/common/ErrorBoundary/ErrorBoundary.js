import React from "react";
import "./ErrorBoundary.css";

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false, messageError: "" };
	}

	static getDerivedStateFromError(error) {
		return { hasError: true, messageError: error.message };
	}

	componentDidCatch(error) {
		console.log(error.message);
	}

	render() {
		if (this.state.hasError) {
			return (
				<div className="error-container">
					<div className="flex ai-center jc-center">
						<div className="message">
							<h2>Something is not working as expected, sorry for that.</h2>
							<p>{this.state.messageError}</p>
						</div>
					</div>
				</div>
			);
		}

		return this.props.children;
	}
}

export default React.memo(ErrorBoundary);
