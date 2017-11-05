import React from 'react';

export default({ optionsArr, name, onChange, defaultValue }) => {
  return(
    <div className="selectComponent">
      <select
        name={ name }
        onChange={ onChange }
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