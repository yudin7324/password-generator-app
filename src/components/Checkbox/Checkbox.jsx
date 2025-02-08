import './checkbox.scss';

function Checkbox() {
  return (
    <label className="checkbox">
      <input className="checkbox__field" type="checkbox" />
      <span className="checkbox__custom"></span>
      <span className="checkbox__text">Include Uppercase Letters</span>
    </label>
  );
}

export default Checkbox;
