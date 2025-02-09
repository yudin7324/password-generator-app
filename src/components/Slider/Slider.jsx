import PropTypes from 'prop-types';
import './slider.scss';

function Slider({ onChange, value }) {
  function handleChange(event) {
    onChange(event.target.value);
  }

  return (
    <div className="slider">
      <div className="slider__top">
        <div className="slider__text">Character Length</div>
        <div className="slider__value">{value}</div>
      </div>


      <label htmlFor="slider-field" className="slider__label">
        <input
          className="slider__field"
          id="slider-field"
          type="range"
          min="0"
          max="20"
          step="1"
          value={value}
          onChange={handleChange}
          style={{'--slider-progress': `${(value / 20) * 100}%`,}}
        />
      </label>
    </div>
  )
}

Slider.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Slider
