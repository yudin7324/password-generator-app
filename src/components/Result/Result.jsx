import PropTypes from 'prop-types';
import './result.scss';
import { useEffect } from 'react';

const initData = [
  { text: 'TOO WEAK!', value: 1, color: 'red' },
  { text: 'WEAK', value: 2, color: 'orange' },
  { text: 'MEDIUM', value: 3, color: 'yellow' },
  { text: 'STRONG', value: 4, color: 'green' },
];

function calculateStrength(length, optionsCount) {
  if (length === 0 || optionsCount === 0) return 0;
  if (length < 8) return 1;
  if (length < 12 && optionsCount < 3) return 2;
  if (length < 16 && optionsCount >= 3) return 3;
  return 4;
}

function Result({ passwordLength, optionsCount }) {
  const strength = calculateStrength(passwordLength, optionsCount);
  const result = initData.find((item) => item.value === strength) || initData[0];

  useEffect(() => {
    strength
  }, [strength]);

  return (
    <div className="result">
      <div className="result__title">STRENGTH</div>
      <div className="result__value">
        {strength > 0 && result.text}
        <div className="result__levels">
          {initData.map((_, index) => (
            <span
              key={index}
              className={`result__level ${index < strength ? `active active--${result.color}` : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

Result.propTypes = {
  passwordLength: PropTypes.number.isRequired,
  optionsCount: PropTypes.number.isRequired,
};

export default Result;
