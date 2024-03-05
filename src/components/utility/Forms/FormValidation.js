import React, { useState, useEffect } from 'react';

/**
 * FormValidation - A component to facilitate real-time form validation.
 * Provides immediate feedback on input validation errors.
 *
 * Props:
 * - validate (function): Function that takes the form state and returns an object with error messages.
 * - initialState (object): Initial state of the form inputs.
 * - children (function): Render prop that provides state, handleChange, and errors to the form.
 *
 * Example Usage:
 * <FormValidation
 *   initialState={{ email: '', password: '' }}
 *   validate={validateForm}
 * >
 *   {({ state, handleChange, errors }) => (
 *     <form>
 *       <input
 *         name="email"
 *         value={state.email}
 *         onChange={handleChange}
 *         className={`input ${errors.email ? 'border-red-500' : ''}`}
 *       />
 *       {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
 *       <input
 *         name="password"
 *         value={state.password}
 *         onChange={handleChange}
 *         className={`input ${errors.password ? 'border-red-500' : ''}`}
 *       />
 *       {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
 *       <button type="submit" className="btn btn-primary">Submit</button>
 *     </form>
 *   )}
 * </FormValidation>
 */
const FormValidation = ({ validate, initialState, children }) => {
  const [state, setState] = useState(initialState);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (Object.keys(state).length > 0) {
      setErrors(validate(state));
    }
  }, [state, validate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return children({ state, handleChange, errors });
};

/**
 * Example validation function to be passed to the FormValidation component.
 * This should be tailored to your specific validation logic.
 */
const validateForm = (state) => {
  let errors = {};
  if (!state.email.includes('@')) {
    errors.email = 'Email must be valid.';
  }
  if (state.password.length < 6) {
    errors.password = 'Password must be at least 6 characters.';
  }
  return errors;
};

export default FormValidation;
