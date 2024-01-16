import "./CustomButton.scss";

const CustomButton = ({ onClick, children }) => {
  return (
    <section className="custom-button-container" onClick={onClick}>
      {children}
    </section>
  );
};
export default CustomButton;
