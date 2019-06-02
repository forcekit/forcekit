import React from 'react';
import styles from './Header.module.css';
import logo from '../../../assets/mobile_logo.png';

class Header extends React.Component {

	render(){
		return (<div className={styles.Header}><img src={logo} alt='facebook' /></div>)
	}

}

export default Header;