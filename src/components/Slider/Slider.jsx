import { useState } from "react";
import './slider.scss';

function Slider() {
  const [value, setValue] = useState(10);

  return (
    <div className="slider">
      <div className="slider__top">
        <div className="slider__text">Character Length</div>
        <div className="slider__value">{value}</div>
      </div>

      <input
        className="slider__field"
        type="range"
        min="1"
        max="20"
        step="1"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        style={{'--slider-progress': `${(value / 20) * 100}%`,}}
      />
    </div>
  )
}

export default Slider
