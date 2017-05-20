var React = require('react');

class DeckbuilderContainer extends React.Component {
  render(){
    return (
      <SearchControl />
    )
  }
}

class SearchControl extends React.Component {
  render(){
    return (
      <div>
        <SearchOptions />
        <SearchResults />
        <Decklist />
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
  render(){
    return (
      <div className="search-results col-xs-6">
        Results
      </div>
    )
  }
}

class Decklist extends React.Component {
  render(){
    return(
      <div className="decklist col-xs-6">
        Deck List
      </div>
    )
  }
}

module.exports = {
  DeckbuilderContainer
}
