import React, { Component } from 'react'; 
import Select from './components/Select' 
//import './styles.css';  
import FormContainer from './containers/FormContainer'

class Taller extends Component {  
  render() {
    return (
      <div className="container">
        <h3>GUAGUAS</h3>
        <FormContainer />
        <br/>
        <Select/>
      </div>
    );
  }
}

export default Taller; 