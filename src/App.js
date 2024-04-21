import './App.css';
import {useState} from 'react';


function App() {
  let [dataResults, setDataResults] = useState("");
  let [otherDataResults, setOtherDataResults] = useState("")
  let newString = "";

  const getAndSetData = () => {
    fetch('https://api.gameofthronesquotes.xyz/v1/random', {mode: 'cors'})
      .then(response => response.json())
      .then(data => {
          setDataResults(data);
      })
      .catch(error => console.error('Error: ', error));

      console.log(dataResults);


    fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes', {mode: 'cors'})
      .then(response => response.json())
      .then(data => {
          setOtherDataResults(data);
      })
      .catch(error => console.error('Error: ', error));

      console.log(otherDataResults);

      newString = dataResults.sentence + " " + otherDataResults;
      console.log(newString);
      document.getElementById("updatingString").innerHTML = newString;

  };

  /*const updateQuote = (data, otherData) => {
    console.log(data + otherData);
    if (dataResults != null && otherDataResults != null) {
        return data.map((dataElement) => (
            <h1>{dataElement.quote} otherData</h1>
        ));
    }
  };*/

  return (
    <div className="App">
      <header className="App-header">
        <h1 id="updatingString"></h1>
        <button onClick={getAndSetData}>Click Here</button>
      </header>
    </div>
  );
}

export default App;
