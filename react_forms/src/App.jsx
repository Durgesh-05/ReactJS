import { useState } from 'react';
import './App.css';

function App() {
  // for form data we have to create different variables for diff field
  // const [name, setName] = useState('');
  // const [age, setAge] = useState('');
  // function changeNameHandler(event) {
  //   setName(event.target.value);
  // }
  // function changeAgeHandler(event) {
  //   setAge(event.target.value);
  // }

  // but we can manage by using object
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    text: '',
    isVisible: false,
    mode: '',
    favCar: '',
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value,
      };
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log('Sending form data to backend...', formData);
  }

  return (
    <div className="container">
      <form onSubmit={submitHandler} className="form">
        <input
          type="text"
          placeholder="Name"
          onChange={changeHandler}
          name="firstName"
          value={formData.firstName}
        />
        <input
          type="number"
          placeholder="Age"
          onChange={changeHandler}
          name="lastName"
          value={formData.lastName}
        />
        <input
          type="email"
          placeholder="Enter your email"
          onChange={changeHandler}
          name="email"
          value={formData.email}
        />
        <textarea
          name="text"
          placeholder="Enter comments"
          onChange={changeHandler}
          value={formData.text}
        ></textarea>

        <div>
          <input
            type="checkbox"
            name="isVisible"
            id="isVisible"
            value={formData.isVisible}
            onChange={changeHandler}
            checked={formData.isVisible}
          />
          <label htmlFor="isVisible"> Am I Visible?</label>
        </div>

        <fieldset>
          <legend>Mode: </legend>
          <input
            type="radio"
            name="mode"
            id="mode"
            onChange={changeHandler}
            value="Online-Mode"
            checked={formData.mode === 'Online-Mode'}
          />
          <label htmlFor="mode">Online Mode</label>
          <input
            type="radio"
            name="mode"
            id="mode"
            onChange={changeHandler}
            value="Offline-Mode"
            checked={formData.mode === 'Offline-Mode'}
          />
          <label htmlFor="mode">Offline Mode</label>
        </fieldset>
        <div>
          <label htmlFor="favCar">Favourite Car </label>
          <select
            name="favCar"
            id="favCar"
            onChange={changeHandler}
            value={formData.favCar}
          >
            <option value=""></option>
            <option value="porsche">Porsche</option>
            <option value="ferrari">Ferrari</option>
            <option value="buggati">Buggati</option>
            <option value="lambo">Lamborgini</option>
          </select>
        </div>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default App;
