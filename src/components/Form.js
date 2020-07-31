import React, { useState } from "react";
import PropTypes from "prop-types";

// Components
import Error from "./Error";

const Form = ({ query, setQuery, setDoQuery }) => {
  const [error, setError] = useState(false);

  const { city, country } = query;

  // Put elements in the State
  const handleChange = (e) => {
    // Update the state
    setQuery({
      ...query,
      [e.target.name]: e.target.value,
    });
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate
    if (city.trim() === "" || country.trim() === "") {
      setError(true);
      return null;
    }
    setError(false);

    // Send it to the App.js
    setDoQuery(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error ? <Error msg="Todos los campos son obligatorios" /> : null}
      <div className="input-field col s12">
        <input
          type="text"
          name="city"
          id="city"
          value={city}
          onChange={handleChange}
        />
        <label htmlFor="city" className="white-text">
          Ciudad:{" "}
        </label>
      </div>
      <div className="input-field col s12">
        <select
          name="country"
          id="country"
          value={country}
          onChange={handleChange}
        >
          <option value="">-- Seleccione un país --</option>
          <option value="US">Estados Unidos</option>
          <option value="MX">México</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
          <option value="PE">Perú</option>
        </select>
        <label htmlFor="country" className="white-text">
          País:{" "}
        </label>
      </div>

      <div className="input-field col s12">
        <input
          type="submit"
          value="Obtener clima"
          className="waves-effect waves-light btn-large btn-block orange accent-3"
        />
      </div>
    </form>
  );
};

Form.propTypes = {
  query: PropTypes.object.isRequired,
  setQuery: PropTypes.func.isRequired,
  setDoQuery: PropTypes.func.isRequired,
};

export default Form;
