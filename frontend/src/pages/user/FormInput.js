import React, {useState} from 'react'

const FormInput = (props) => {
    const [focused, setFocussed] = useState(false);
    const { label, onChange, keyId, error, ...inputProps } = props;

    const handleFocus = ()=> {
        setFocussed(true);
    };
  return (
    <div>
    <label
        htmlFor={inputProps.id}
        className="block text-sm text-gray-500 dark:text-gray-300"
      >
        {label}
      </label>
      <input 
      className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" 
      {...inputProps} 
      onChange={onChange} 
      onBlur={handleFocus} 
      focused={focused.toString()} />
      <span className="text-sm text-red-500 mt-1">{error}</span>
    </div>
  )
}

export default FormInput