import { useState } from 'react';
import PropTypes from 'prop-types';
import IconCopy from '../Icons/IconCopy';
import './textfield.scss';

function TextField({ value }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      })
      .catch((error) => {
        console.error("error with copy:", error);
      });
  };

  return (
    <div className='textfield'>
      <input 
        className='textfield__field' 
        type='text' 
        value={value} 
        placeholder='P4$5W0rD!' 
        readOnly  
      />
      <button 
        className='textfield__button' 
        type='button' 
        onClick={handleCopy}
        aria-label='copy button'
      >
        {copied ? 'COPIED' : ''}
        <IconCopy />
      </button>
    </div>
  )
}

TextField.propTypes = {
  value: PropTypes.string.isRequired
}

export default TextField
