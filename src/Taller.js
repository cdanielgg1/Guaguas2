import React from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';

const techCompanies = [
  { label: "Apple", value: 1 },
  { label: "Facebook", value: 2 },
  { label: "Netflix", value: 3 },
  { label: "Tesla", value: 4 },
  { label: "Amazon", value: 5 },
  { label: "Alphabet", value: 6 },
];

const techCompanies2 = [
  { label: "Apple", value: 1 },
  { label: "Facebook", value: 2 },
  { label: "Netflix", value: 3 },
  { label: "Tesla", value: 4 },
  { label: "Amazon", value: 5 },
  { label: "Alphabet", value: 6 },
];

const App = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-4">
        <Select options={ techCompanies } /> 
      </div>
      <input type="submit" value="<<<" class="btn btn-primary" tabindex="3"title="A la izquierda"></input>
      
      <input type="submit" value=">>>" class="btn btn-primary" tabindex="3"title="A la derecha"></input>

      <div className="col-md-4">
       
        <Select options={ techCompanies } />
      </div>
      <div className="col-md-4"></div>
    </div>
    <form>
      <label>mensaje</label>
    <textarea type="text" row ="10" columns = "50" name="mensaje" />
    
    <input type="submit" value="Enviar" class="btn btn-primary" tabindex="7"
                title="Guardar datos ingresados"></input>

    </form>
    
   
             
  </div>
);
 
export default App