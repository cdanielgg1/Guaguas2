import React, { Component } from "react";

/* Import Components */
import CheckBox from "../components/Checkbox";
import Input from "../components/Input";
import TextArea from "../components/TextArea";
import Select from "../components/Select";
import Button from "../components/Button";

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        name: "",
        codigo: "",
        grupo: "",
        prioridad: [],
        about: ""
      },

      grupoOptions: ["1", "2", "3", "4", "5"],
      prioridadOptions: ["Alta", "Media", "Baja"]
    };
    this.handleTextArea = this.handleTextArea.bind(this);
    this.handleCodigo = this.handleCodigo.bind(this);
    this.handleFullName = this.handleFullName.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleCheckBox = this.handleCheckBox.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  /* This lifecycle hook gets executed when the component mounts */

  handleFullName(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          name: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleCodigo(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          codigo: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          [name]: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleTextArea(e) {
    console.log("Inside handleTextArea");
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          about: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleCheckBox(e) {
    const newSelection = e.target.value;
    let newSelectionArray;

    if (this.state.newUser.prioridad.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.newUser.prioridad.filter(
        s => s !== newSelection
      );
    } else {
      newSelectionArray = [...this.state.newUser.prioridad, newSelection];
    }

    this.setState(prevState => ({
      newUser: { ...prevState.newUser, prioridad: newSelectionArray }
    }));
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.newUser;

    fetch("http://example.com", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(response => {
      response.json().then(data => {
        console.log("Successful" + data);
      });
    });
  }

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      newUser: {
        name: "",
        codigo: "",
        grupo: "",
        prioridad: [],
        about: ""
      }
    });
  }

  render() {
    return (
      <form className="container-fluid" onSubmit={this.handleFormSubmit}>
        <Input
          inputType={"text"}
          title={"Nombre Completo"}
          name={"name"}
          value={this.state.newUser.name}
          placeholder={"introduce tu nombre"}
          handleChange={this.handleInput}
        />{" "}
        {/* Name of the user */}
        <Input
          inputType={"number"}
          name={"codigo"}
          title={"Codigo"}
          value={this.state.newUser.codigo}
          placeholder={"Introduce tu codigo"}
          handleChange={this.handleCodigo}
        />{" "}
        {/* Codigo */}
        <Select
          title={"Grupo"}
          name={"grupo"}
          options={this.state.grupoOptions}
          value={this.state.newUser.grupo}
          placeholder={"Selecion de Grupo"}
          handleChange={this.handleInput}
        />{" "}
        {/* Codigo Selection */}
        <CheckBox
          title={"Prioridad"}
          name={"prioridad"}
          options={this.state.prioridadOptions}
          selectedOptions={this.state.newUser.prioridad}
          handleChange={this.handleCheckBox}
        />{" "}
        {/* Skill */}
        <TextArea
          title={"Mensaje"}
          rows={10}
          value={this.state.newUser.about}
          name={"currentPetInfo"}
          handleChange={this.handleTextArea}
          placeholder={"Mensaje a enviar"}
        />
        {/* About you */}
        <Button
          action={this.handleFormSubmit}
          type={"primary"}
          title={"Enviar"}
          style={buttonStyle}
        />{" "}
        {/*Submit */}
        <Button
          action={this.handleClearForm}
          type={"secondary"}
          title={"Borrar"}
          style={buttonStyle}
        />{" "}
        {/* Clear the form */}
      </form>
    );
  }
}

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

export default FormContainer;
