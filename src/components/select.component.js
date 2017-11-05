import React from 'react';

export default({ optionsArr, name, onChange, defaultValue, value }) => {
  return(
    <div className="selectComponent">
      <select
        name={ name }
        onChange={ onChange }
        value={ value }
        defaultValue={ defaultValue } >

        { 
          optionsArr.map((option, idx) => {
            return(
              <option 
                value={ option.id }
                key={ idx }>
                { option.name }
              </option>
            )
          })
        }
      </select>
    </div>
  )
};