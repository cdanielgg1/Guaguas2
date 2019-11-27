import React, { Component } from 'react';  
//import './styles.css';  
import FormContainerTaller from '../form/FormContainerTaller'

class Taller extends Component {  
  render() {
    return (
      <div className="container">
        <h3>Envio de mensajes</h3>
        <FormContainerTaller />
      </div>
    );
  }
}

export default Taller; 