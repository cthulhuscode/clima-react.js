import React, { useState } from "react";

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

    // Send it to the App.js
    setDoQuery(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error ? (
        <p className="red darken-3 error">Todos los campos son obligatorios</p>
      ) : null}
      <div className="input-field col s12">
        <input
          type="text"
          name="city"
          id="city"
          value={city}
          onChange={handleChange}
        />
        <label htmlFor="city">Ciudad: </label>
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
        <label htmlFor="country">País: </label>
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

export default Form;
