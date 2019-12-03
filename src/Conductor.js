import React, { Component } from "react";   
import FormConductor from './components/form/FormConductor';


   
class Conductor extends Component {   
  render() {   
    return (   
      <div>   
          <section> 
      
      <FormConductor />
       </section>
      
        <footer>
                <a href="">salir</a>
        </footer>
        
      </div>   
    );   
  }   
}   
   
export default Conductor;