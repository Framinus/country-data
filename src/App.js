import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import ResultRow from './Components/results';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
      term: '',
    }

    this.onFormChange = this.onFormChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormChange(event) {
    this.setState({
      term: event.target.value
    })
  }

  onFormSubmit(event) {

  }

  render() {
    return (
      <div className="App">
        <h1>Country Data</h1>
        <input className="searchbar" type="text" value={this.state.term} onChange={this.onFormChange} placeholder="enter a country to start!"/>
        <div className="main-data">
          <table className="data-table">
            <tbody>
              <tr>
                <th>Flag</th>
                <th>Name</th>
                <th>Languages</th>
                <th>Population</th>
                <th>Land Area</th>
              </tr>
              {this.state.results.map((result) => {
                <ResultRow
                  flag={result.flag}
                  name={result.name}
                  languages={result.languages.name}
                  population={result.population}
                  landarea={results.area}
                 />
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
