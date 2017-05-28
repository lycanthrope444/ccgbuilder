var React = require('react');

var demoDeck = require('../models/demodeck.js').demodeck;
var demoCards = require('../models/democards.js').demoCards;

class DeckbuilderContainer extends React.Component {
  render(){
    return (
      <SearchControl />
    )
  }
}

class SearchControl extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      decklist : {
        deckName:'Deck Name',
        cardList: [
          {cardName: 'Test 1', qty: 1},
          {cardName: 'Test 2', qty: 1}
        ]
      },
      cardPool : demoCards
    }
  }
  render(){
    var self = this;

    return (
      <div>
        <SearchOptions />
        <SearchResults cardPool = {self.state.cardPool} />
        <Decklist decklist = {self.state.decklist} />
      </div>
    )
  }
}

class SearchOptions extends React.Component {
  render(){
    return (
      <div className="search-options col-xs-12">
        Options
      </div>
    )
  }
}

class SearchResults extends React.Component {
  constructor(props){
    super(props);

    var cardPool = this.props.cardPool;

    this.state = {
      cardPool
    }
  }
  render(){
    console.log(this.props);
    var cardDisplay = this.state.cardPool.map((item, index)=>{
      return (
        <li key={index}>{item.cardName}</li>
      )
    });

    return (
      <div className="search-results col-xs-6">
        <div>
          Results
        </div>
        <ul>
          {cardDisplay}
        </ul>
      </div>
    )
  }
}

class Decklist extends React.Component {
  constructor(props){
    super(props);
    var decklist = this.props.decklist;



    this.state = {
      deckName:decklist.deckName,
      cardList:decklist.cardList
    }
  }
  render(){
    console.log(this.state);

    var cardDisplay = this.state.cardList.map((item,index)=>{
      return (
        <div key={index}>
          {item.cardName}
          <button className="btn" onClick={(e)=>{
              e.preventDefault();
              console.log('add clicked');
            }}>
            Add
          </button>
          <button className="btn" onClick={(e)=>{
              e.preventDefault();
              console.log('delete clicked');
            }}>
            Delete
          </button>
        </div>
      )
    });

    return(
      <div className="decklist col-xs-6">
        Deck List
        <div className = "name-area">
          <h1>{this.state.deckName}</h1>
          <button className ="btn btn-primary">
            Change Name
          </button>
        </div>
        <div className = "cardList">
          {cardDisplay}
        </div>
      </div>
    )
  }
}

module.exports = {
  DeckbuilderContainer
}
