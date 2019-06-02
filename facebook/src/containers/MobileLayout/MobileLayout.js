import React from 'react';
import styles from './MobileLayout.module.css';

import Header from '../../components/MobileLayout/Header/Header';
import Main from '../../components/MobileLayout/Main/Main';
import Footer from '../../components/MobileLayout/Footer/Footer';

class MobileLayout extends React.Component {

	render(){
		return ([
			<Header />,
			<Main />,
			<Footer />
		])
	}

}

export default MobileLayout;