// src/components/InputField/InputField.jsx
import React from 'react';
import { Controller } from 'react-hook-form';
import './InputField.css';

const InputField = ({ name, control, label, type = 'text', placeholder, error }) => {
  return (
    <div className="input-field">
      {label && <label htmlFor={name}>{label}</label>}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            {...field}
            type={type}
            id={name}
            placeholder={placeholder || label}
            className={`form-input ${error ? 'input-error' : ''}`}
          />
        )}
      />
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default InputField;
