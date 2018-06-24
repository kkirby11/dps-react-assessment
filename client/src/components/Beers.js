import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
    Button,
    Card,
    Header,
    Container,
    Divider,
    textAlign,
 } from 'semantic-ui-react'

class Beers extends React.Component {
    state = { myBeers: false }

  allBeers = () => {
      this.setState({ myBeers: false })
  }

  myBeers = () => {
      this.setState({ myBeers: true})
  }

  beers = () => {
      const { beers } = this.props
      const { myBeers } = this.state
      let visible = beers
      if ( myBeers )
        visible = beers.filter
      return visible.map( beer =>
       <Card key={beer.id}>
       <Card.Content>
         <Card.Header
          textAlign="center"
        >
         {post.title}
        </Card.Header>
        </Card.Content>
       </Card>
      )}     
}  

export default Beers