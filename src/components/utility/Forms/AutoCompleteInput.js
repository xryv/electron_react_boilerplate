import React, { useState } from 'react';

/**
 * AutoCompleteInput - A component that provides input suggestions based on user typing.
 * Helps in reducing input errors and improving user experience.
 *
 * Props:
 * - suggestions (Array): An array of strings that are suggestions for the input.
 * - placeholder (string): Placeholder text for the input field.
 * - onSuggestionSelect (function): Function to execute when a suggestion is selected.
 *
 * Example Usage:
 * <AutoCompleteInput
 *   suggestions={['Apple', 'Banana', 'Orange', 'Mango']}
 *   placeholder="Type a fruit name"
 *   onSuggestionSelect={(suggestion) => console.log('Selected:', suggestion)}
 * />
 */
const AutoCompleteInput = ({ suggestions, placeholder, onSuggestionSelect }) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    const userInput = e.target.value;
    setInputValue(userInput);
    setFilteredSuggestions(suggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(userInput.toLowerCase())
    ));
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setFilteredSuggestions([]);
    onSuggestionSelect && onSuggestionSelect(suggestion);
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
      />
      {filteredSuggestions.length > 0 && (
        <ul className="absolute z-10 w-full bg-white border border-gray-200 mt-1 rounded shadow">
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={index}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
);
};

export default AutoCompleteInput;