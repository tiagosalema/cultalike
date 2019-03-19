import Signin from "../components/Signin";
import Linking from "../components/common/Linking";

const SignupPage = () => (
  <>
    <Signin />
    <button>
      <Linking to="/signup" title="Register" />
    </button>
  </>
);

export default SignupPage;
