import React from "react";

export const FormErrors = props => {
  const { errors = [], forField } = props;
  // <FormErrors forField="body" errors={erros} />

  let filteredErrors = errors;
  if (forField) {
    filteredErrors = errors.filter(error => error.field === forField);
  }

  return (
    <ul className="FormErrors">
      {filteredErrors.map((error, index) => (
        <li key={index}>
          {forField ? error.message : `${error.field} ${error.message}`}
        </li>
      ))}
    </ul>
  );
};
