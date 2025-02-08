import IconCopy from '../Icons/IconCopy';
import './textfield.scss';

function TextField() {
  return (
    <div className='textfield'>
      <input className='textfield__field' type='text' value={'P4$5W0rD!'} readOnly  />
      <button className='textfield__button' type='button' >
        <IconCopy />
      </button>
    </div>
  )
}

export default TextField
