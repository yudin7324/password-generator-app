import PropType from 'prop-types';
import './checkbox.scss';

function Checkbox({ text, value, onChange, isChecked }) {
  return (
    <label className="checkbox">
      <input 
        className="checkbox__field" 
        type="checkbox" 
        value={value}
        onChange={(event) => onChange(event.target.value, event.target.checked)}
        checked={isChecked}
      />
      <span className="checkbox__custom"></span>
      <span className="checkbox__text">{text}</span>
    </label>
  );
}

Checkbox.propTypes = {
  text: PropType.string.isRequired,
  value: PropType.string.isRequired,
  onChange: PropType.func.isRequired,
  isChecked: PropType.bool.isRequired,
}

export default Checkbox;
