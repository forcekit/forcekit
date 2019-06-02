import React from 'react';
import styles from './MobileLayout.module.css';

import Header from '../../../components/Facebook/MobileLayout/Header/Header';
import Main from '../../../components/Facebook/MobileLayout/Main/Main';
import Footer from '../../../components/Facebook/MobileLayout/Footer/Footer';

class MobileLayout extends React.Component {

	render(){
		return (
			<div className={styles.MobileLayout}>
				<Header />
				<Main />
				<Footer />
			</div>
		);
	}

}

export default MobileLayout;