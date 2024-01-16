import "./CustomInput.scss";

const CustomInput = ({ label, value }) => {
  return (
    <section className="custom-input-container">
      <input type="text" className="custom-input" />

      {label ? (
        <label
          className={`${value.length != "" ? "shrink" : ""} custom-input-label`}
        ></label>
      ) : null}
    </section>
  );
};

export default CustomInput;
