const Button = ({ loading, label }) => (
  <button disabled={loading} type="submit">
    {label}
  </button>
);

export default Button;
