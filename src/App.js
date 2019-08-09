import React from 'react';
import { BrowserRouter, Switch, Route,Redirect } from 'react-router-dom'

import Layouts from './layouts'

import Home from './pages/home'
import About from './pages/about'
import Archive from './pages/archive'
import Articles from './pages/articles'
import Message from './pages/message'
import Timeline from './pages/timeline'
import Detail from './pages/detail'

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Layouts>
					<Switch>
						<Route path='/' exact component={Home} />
						<Route path='/about' exact component={About} />
						<Route path='/archive' exact component={Archive} />
						<Route path='/articles' exact component={Articles} />
						<Route path='/message' exact component={Message} />
						<Route path='/timeline' exact component={Timeline} />
						<Route path='/detail' exact component={Detail} />
						<Redirect to='/' />	
					</Switch>
				</Layouts >
			</BrowserRouter >
		);
	}
}

export default App;
