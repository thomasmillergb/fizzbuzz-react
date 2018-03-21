import React, {Component} from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import FizzBuzz from './container/fizzbuzz/FizzBuzz';

class App extends Component {
    render() {
        return (
            <div className="App">
                <FizzBuzz/>
            </div>
        );
    }
}

export default App;
