import React from 'react';

const Navigation = ({onRouteChange, isSignedIn}) => {
	if (isSignedIn) {
		return (
			<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
				<p onClick={() => onRouteChange('signout')} className='f3 dim grow pointer no-underline br-pill ph3 pv2 mb2 dib white bg-light-purple'>Sign out</p>
			</nav>
		);
	} else {
		return (
			<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
				<p onClick={() => onRouteChange('signin')} className='f3 dim grow pointer no-underline br-pill ph3 pv2 mb2 dib white bg-light-purple'>Sign in</p>
				<p onClick={() => onRouteChange('register')} className='f3 dim grow pointer no-underline br-pill ph3 pv2 mb2 dib white bg-light-purple'>Register</p>
			</nav>
		);		
	}
}

export default Navigation;