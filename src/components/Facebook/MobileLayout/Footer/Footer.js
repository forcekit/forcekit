import React from 'react';
import styles from './Footer.module.css';

class Footer extends React.Component {

	render(){
		return (
			<div className={styles.Footer}>
				<div>
					<div>
						<div><span>English (UK)</span></div>
						<div><span><a href='/'>தமிழ்</a></span></div>
						<div><span><a href='/'>Deutsch</a></span></div>
						<div><span><a href='/'>Français (France)</a></span></div>
					</div>
					<div>
						<div><span><a href='/'>සිංහල</a></span></div>
						<div><span><a href='/'>Español</a></span></div>
						<div><span><a href='/'>Português (Brasil)</a></span></div>
						<div><span>+</span></div>
					</div>
				</div>
				<div><span>Facebook ©2019</span></div>
			</div>
		);
	}

}

export default Footer;