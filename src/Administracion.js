import React, { Component } from "react";    
    
class Administracion extends Component {    
  render() {    
    return (    
      <div id="divContenedor">
      <div id="divTitulo">ACCESO</div>
       <form id="form1" name="form1" action="#" method="post">
           <label id="lbl1" name="lbl1" for="txt1">Nombre:</label>-
           <input id="txt1" name="txt1" type="text" value="Introduce el nombre..." />


           <label id="lbl2" name="lbl2" for="txt2">Apellidos:</label>
           <input id="txt2" name="txt2" type="text" value="Introduce los apellidos..." />

           <input type="submit" id="btnSubmit" name="btnSubmit" />
       </form>
  </div>
    );    
  }    
}    
    
export default Administracion;