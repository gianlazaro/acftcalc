function RadioButton({ handler, name, value, label, checked }) {
  return (
    <>
      <input
        type="radio"
        onChange={handler}
        name={name}
        id={value}
        value={value}
        defaultChecked={checked}
      />
      <label htmlFor={value}>{label}</label>
    </>
  );
}

export default RadioButton;
