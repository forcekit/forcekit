import React from 'react';
import { Link } from "react-router-dom";

class Home extends React.Component {

	componentDidMount() {
	    document.title = 'Home';
	}

	render(){
		return (
			<div>
				<ul>
					<li><Link to='facebook'>Facebook</Link></li>
				</ul>
			</div>
		);
	}

}

export default Home;