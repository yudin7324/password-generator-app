import Button from './components/Button/Button';
import Checkbox from './components/Checkbox/Checkbox';
import Result from './components/Result/Result';
import Slider from './components/Slider/Slider';
import TextField from './components/TextField/TextField';
import './styles/_app.scss';

function App() {
  return (
    <main className="app">
      <div className='app__title'>Password Generator</div>

      <div className='app__result'>
       <TextField />
      </div>

      <div className='app__settings'>
        <Slider />
        <Checkbox/>
        <Checkbox/>
        <Checkbox/>
        <Checkbox/>
        <Result />
        <Button />
      </div>
    </main>
  )
}

export default App
