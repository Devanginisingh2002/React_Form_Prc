import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const[formData, setFormData] = useState({
    firstName:"", lastName:"", email:"", country: "", streetAdress:"", city:"", state:"", postalCode:"", comments: false, candidates: false, offers: false, pushNotifications:""
  })
  function changeHandler(event){
    const {name, value, checked, type} = event.target;
    setFormData( (prev) => ({
      ...prev, [name]: type === "checkbox" ? checked : value
    }));

  }

  function submitHandler(event){
    event.preventDefault();
    console.log("Printing the form data");
    console.log(formData)
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
      <label htmlfor="firstName">First Name: </label>
      <br/>
        <input
          type = "text"
          name = "firstName"
          id = "firstName"
          placeholder='Love'
          value={FormData.firstName}
          onChange={changeHandler}
          className='outline'
        />
        <br/>
      <label htmlfor="lastName">Last Name: </label>
      <br/>
        <input
          type = "text"
          name = "lastName"
          id = "lastName"
          placeholder='Babbar'
          value={FormData.lastName}
          onChange={changeHandler}
          className='outline'
        />
        <br/>
      <label htmlfor="email">Email Address: </label>
      <br/>
        <input
          type = "text"
          name = "email"
          id = "email"
          placeholder='Love@gmail.com'
          value={FormData.email}
          onChange={changeHandler}
          className='outline'
        />
      <br/>
      <label htmlFor="country">Country</label>        
      <br/>
      <select
      id="country"
      name="country"
      value={formData.country}
      onChange={changeHandler}
      className='outline'>
      <option>India</option>
      <option>United States</option>
      <option>Canada</option>
      <option>Mexico</option>
      </select>

    <br/>
      <label htmlfor="streetAdress">Street address</label>
      <br/>
        <input
          type = "text"
          name = "streetAdress"
          id = "streetAdress"
          placeholder='1234 Main St'
          value={FormData.streetAdress}
          onChange={changeHandler}
          className='outline'
        />

    <br/>
      <label htmlfor="city">City</label>
      <br/>
        <input
          type = "text"
          name = "city"
          id = "city"
          placeholder='Asanol'
          value={FormData.city}
          onChange={changeHandler}
          className='outline'
        />

    <br/>
      <label htmlfor="state">State / Provience</label>
      <br/>
        <input
          type = "text"
          name = "state"
          id = "state"
          placeholder='West Bengal'
          value={FormData.state}
          onChange={changeHandler}
          className='outline'
        />

    <br/>
      <label htmlfor="postalCode">ZIP / Postal Code </label>
      <br/>
        <input
          type = "text"
          name = "postalCode"
          id = "postalCode"
          placeholder='1234 Main St'
          value={FormData.postalCode}
          onChange={changeHandler}
          className='outline'
        />

      <br/>
      <br/>

      <fieldset>

        <legend>By Email</legend>
        
        <div>
          <input
            id="comments"
            name="comments"
            type="checkbox"
            checked={formData.comments}
            onChange={changeHandler}
          />

          <div>
            <label htmlFor = "comments">Comments</label>
            <p>Get Notified when someone posts a comment on a posting.</p>
          </div>
        </div>

        <div>
          <input
            id="candidates"
            name="candidates"
            type="checkbox"
            checked={formData.candidates}
            onChange={changeHandler}
          />

          <div>
            <label htmlFor = "candidates">Candidates</label>
            <p>Get Notified when a candidate applies for a job.</p>
          </div>
        </div>

        <div>
          <input
            id="offers"
            name="offers"
            type="checkbox"
            checked={formData.offers}
            onChange={changeHandler}
          />

          <div>
            <label htmlFor = "offers">Offers</label>
            <p>Get Notified when a candidate accepts or rejects an offer.</p>
          </div>
        </div>

      </fieldset>

    <br/>
      <fieldset>
        <legend>Push Notifications</legend>
        <p>These are delivered via SMS to your Mobile Phone</p>
        <input
          type="radio"
          id="pushEverything"
          name="pushNotifications"
          value="Everything"
          onChange={changeHandler}
        />
        <label htmlFor='pushEverything'>Everything</label>
        <br/>

        <input
          type="radio"
          id="pushEmail"
          name="pushNotifications"
          value="Same as email"
          onChange={changeHandler}
        />
        <label htmlFor='pushEmail'>Same as email</label>

        <br/>
        <input
          type="radio"
          id="pushNothing"
          name="pushNotifications"
          value="No Push Notifications"
          onChange={changeHandler}
        />
        <label htmlFor='pushNothing'>No Push Notifications</label>
      </fieldset>

    <br/>
      <button>Save</button>
      </form>
    </div>
  );
}

export default App;
