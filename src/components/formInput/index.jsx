import Text from "../../components/text";
import "./index.css";

const FormInput = ({
  type,
  name,
  value,
  onChange,
  placeholder,
  required,
  disabled,
  errorMessage,
  style,
}) => {
  const formStyle =
    style === "full" ? "formInput formInput-full" : "formInput formInput-half";

  return (
    <div className="wrapper">
      <input
        className={`${formStyle} ${errorMessage && `invalid`}`}
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
      />
      {errorMessage && (
        <Text size="10px" color="#ee3d1b" className="errorMessage">
          {errorMessage}
        </Text>
      )}
    </div>
  );
};

export default FormInput;
