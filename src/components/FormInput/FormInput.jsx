import React from 'react';

const FormInput = (props) => {
  const { inputValue, checkStocked, changeInputValue, changeCheckBox } = props

  const handleChange = event => {
    const value = event.target.value
    changeInputValue(value)
  }

  return(
    <div>
        <form>  
          <label htmlFor="">Search</label>
          <input type="text" value={inputValue} onChange={handleChange}/>
          <div>
            <input type="checkbox" checked={checkStocked} onChange={changeCheckBox}/>
            <span>only show products in stock</span>
          </div>
        </form>
      </div>
  )
}

export default FormInput