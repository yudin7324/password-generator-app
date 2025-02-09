import { useReducer, useState } from 'react';
import Button from './components/Button/Button';
import Checkbox from './components/Checkbox/Checkbox';
import Result from './components/Result/Result';
import Slider from './components/Slider/Slider';
import TextField from './components/TextField/TextField';
import './styles/_app.scss';

const initialState = [
  { text: "Include Uppercase Letters", value: "uppercase", isChecked: false },
  { text: "Include Lowercase Letters", value: "lowercase", isChecked: false },
  { text: "Include Numbers", value: "numbers", isChecked: false },
  { text: "Include Symbols", value: "symbols", isChecked: false }
];

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_CHECKBOX":
      return state.map((checkbox) =>
        checkbox.value === action.value ? { ...checkbox, isChecked: action.isChecked } : checkbox
      );
    default:
      return state;
  }
}

function generatePassword(characterLength, options) {
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';
  
  let characterSet = '';
  
  if (options.uppercase) characterSet += uppercaseChars;
  if (options.lowercase) characterSet += lowercaseChars;
  if (options.numbers) characterSet += numbers;
  if (options.symbols) characterSet += symbols;
  
  if (characterSet === ''){
    return '';
  } 

  let password = '';
  for (let i = 0; i < characterLength; i++) {
    password += characterSet[Math.floor(Math.random() * characterSet.length)];
  }

  return password;
}

function App() {
  const [checkboxData, dispatch] = useReducer(reducer, initialState);
  const [characterValue, setCharacterValue] = useState(0);
  const [password, setPassword] = useState('');

  function handleCheckboxChange(value, isChecked) {
    dispatch({ type: "TOGGLE_CHECKBOX", value, isChecked });
  }

  function handleSlider(value) {
    setCharacterValue(value);
  }

  function handleGeneratePassword() {
    const selectedOptions = checkboxData.reduce((options, checkbox) => {
      options[checkbox.value] = checkbox.isChecked;
      return options;
    }, {});

    const newPassword = generatePassword(characterValue, selectedOptions);
    setPassword(newPassword);
  }

  return (
    <main className="app">
      <h1 className='app__title'>Password Generator</h1>
      <div className='app__result'>
       <TextField value={password}/>
      </div>
      <div className='app__settings'>
        <Slider 
          onChange={handleSlider} 
          value={characterValue} 
        />
        {checkboxData.map((checkbox) => {
          return <Checkbox 
            key={checkbox.value} 
            text={checkbox.text} 
            value={checkbox.value}
            onChange={handleCheckboxChange}
            isChecked={checkbox.isChecked}
          />
        })}
        <Result value={checkboxData.filter((checkbox) => checkbox.isChecked).length}/>
        <Button onClick={handleGeneratePassword} />
      </div>
    </main>
  )
}

export default App
