import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import Beers from './Beers'
import BeerView from './BeerView'
import { getBeers } from '../reducers/beers'

class FetchBeers extends React.Component {

    componentDidMount() {
     this.props.dispatch(getBeers())
    }
    render() {
        return(
            <Switch>
             <Route exact path="/beers" component={Beers} />
             <Route exact path="/beers/:id" component={BeerView} />
            </Switch>
        )
    }
}

export default connect()(FetchBeers)