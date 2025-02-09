import PropTypes from 'prop-types';
import './result.scss';
import { useEffect, useState } from 'react';

const initData = [
  { text: 'TOO WEAK!', value: 1, color: 'red' },
  { text: 'WEAK', value: 2, color: 'orange' },
  { text: 'MEDIUM', value: 3, color: 'yellow' },
  { text: 'STRONG', value: 4, color: 'green' },
];

function Result({ value }) {
  const [result, setResult] = useState(initData[0]);

  useEffect(() => {
    const foundResult = initData.find((item) => item.value === value);
    if (foundResult) {
      setResult(foundResult);
    }
  }, [value]);

  return (
    <div className='result'>
      <div className='result__title'>
        STRENGTH
      </div>
      <div className='result__value'>
        {value > 0 && result.text}
        <div className='result__levels'>
        {[...Array(initData.length)].map((_, index) => (
          <span
            key={index}
            className={`result__level ${value > 0 && index < value ? `active active--${result.color}` : ''}`}
          />
        ))}
        </div>
      </div>
    </div>
  )
}

Result.propTypes = {
  value: PropTypes.number.isRequired,
}

export default Result
