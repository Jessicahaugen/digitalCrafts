
import './App.css';

function App() {
  return (
    <div className="App">
    <h1 className="shippingFormHeader">Forms React</h1>
        <div className="shippingFormContainer">
          <form action="" className="shippingForm">
            <input type="text" placeholder="firstname" />
            <input type="text" placeholder="lastname" />
            <input className="shippingInputStreet" type="text" placeholder="Street Address" />
            <input className="shippingInputApt"type="text" placeholder="Apt, suite" />
            <input type="text" placeholder="Postal code" />
            <input type="text" placeholder="city" />
            <input type="text" placeholder="state" />
            <input type="text" placeholder="Country" />
            <input type="text" placeholder="Phone" />
            <input className="shippingInputSubmit" type="submit" />
          </form>
        </div>

        
    </div>
  );
}

export default App;
