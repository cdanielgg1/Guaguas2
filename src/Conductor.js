import React, { Component } from "react";   
import FormContainer from './containers/FormContainer'
   
class Conductor extends Component {   
  render() {   
    return (   
      <div>   
          <section>
        <h2>HELLO</h2>   
        <FormContainer />
       </section>
       <aside>
                    <p>Contenido Relacionado</p>
        </aside>

        <footer>
                <a href="http://www.ejemplocodigo.com">www.ejemplocodigo.com</a>
        </footer>
        
      </div>   
    );   
  }   
}   
   
export default Conductor;