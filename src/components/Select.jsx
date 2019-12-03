import React,{useState} from 'react';

function Select() {
    //initial value set to react
 const [framework,setFramework] = useState('react');

 function handleChange(e){
    setFramework(e.target.value);
 };

  function handleSubmit(e){
    e.preventDefault();
    console.log(framework);
  };

    return (
      <form onSubmit={handleSubmit}>
        <h2>Choose your framework</h2>
        <select onChange={handleChange} value={framework}>
          <option value="react">React</option>
          <option value="angular">Angular</option>
          <option value="vue">Vue</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    );
}
export default Select;