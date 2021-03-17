import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux"
import { fetchData } from "./store"
import { useEffect } from 'react';
import Loader from "react-loader-spinner";
import CardList from './components/CardList';


const App = (props) => {
  const { fetchData } = props;
  useEffect(() => {
    fetchData();
  }, [fetchData])

  return (
    <div className="App">
      {props.error ? <p style={{ color: "red" }}>{props.error}</p> : null}
      {props.isLoading ? <Loader
        className={"loader"}
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      /> :
        <div><h1>Basic Card Set</h1>
          <CardList cards={props.cards} /></div>
      }
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

export default connect(mapStateToProps, { fetchData })(App);
