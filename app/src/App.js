import logo from './logo.svg';
import './App.css';
import {connect} from "react-redux"

function App() {
  return (
    <div className="App">
      {/* {props.cards.map(card => (
        <p key={card.cardId}>{card.name}</p>
      ))} */}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    cards: state.cards,
    error: state.error
  }
}

export default connect(mapStateToProps, {})(App);
