var React = require('react');

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
          {cardName: 'test 1', qty: 1},
          {cardName: 'test 2', qty: 1}
        ]
      },
      searchResults : ['test']
    }
  }
  render(){
    var self = this;

    return (
      <div>
        <SearchOptions />
        <SearchResults searchResults = {self.state.searchResults} />
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
  }
  render(){
    console.log(this.props);
    return (
      <div className="search-results col-xs-6">
        Results
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
