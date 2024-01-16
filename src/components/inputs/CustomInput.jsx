import "./CustomInput.scss";

const CustomInput = ({ label, value, onChange }) => {
  return (
    <section className="custom-input-container">
      <input
        type="text"
        className="custom-input"
        onChange={(e) => onChange(e)}
      />

      {label ? (
        <label
          className={`${value.length > 0 ? "shrink" : ""} custom-input-label`}
        >
          {label}
        </label>
      ) : null}
    </section>
  );
};

export default CustomInput;
