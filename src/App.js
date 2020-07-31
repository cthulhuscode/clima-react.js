import React, { Fragment, useState, useEffect } from "react";

// Components
import Header from "./components/Header";
import Form from "./components/Form";
import Weather from "./components/Weather";

function App() {
  // State
  const [query, setQuery] = useState({
    city: "",
    country: "",
  });
  const [doQuery, setDoQuery] = useState(false);
  const [result, setResult] = useState({});

  const { city, country } = query;

  useEffect(() => {
    if (doQuery) {
      // Query the API
      const queryApi = async () => {
        const apiKey = "e20daf898fe07a09eb1ce9e9a46fc879";
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`;
        const result = await fetch(url);
        const weather = await result.json();

        setResult(weather);
        setDoQuery(false);
      };
      queryApi();
    }
  }, [doQuery]);

  return (
    <Fragment>
      <Header title="Clima Enri App" />

      <div className="contenedor-form">
        <div className="row">
          <div className="col m6 s12">
            <Form query={query} setQuery={setQuery} setDoQuery={setDoQuery} />
          </div>
          <div className="col m6 s12">
            <Weather result={result} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
