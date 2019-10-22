import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import { setPosts } from './store/actions/setPosts'
import requestPosts from './servers/requestPosts'

import ScrollToTop from './ScrollToTop'

import Home from './pages/Home'
import PostsList from './pages/PostsList'
import Article from './pages/Article'
import NotFound from './pages/NotFound'



class App extends React.Component {

  componentDidMount() {
    setTimeout(() => {
      requestPosts(this.props.updatePosts)
    }, 0);
  }

  render() {
    return (

      <BrowserRouter>

        {/* router */}
        <ScrollToTop>

          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/posts' component={PostsList} />
            <Route path='/detail/:id' component={Article} />
            <Route component={NotFound} />
          </Switch>

        </ScrollToTop>

      </BrowserRouter>
    );

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updatePosts: (payload) => dispatch(setPosts(payload))
  }
}
export default connect(null, mapDispatchToProps)(App);
