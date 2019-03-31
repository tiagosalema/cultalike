import { Query } from "react-apollo";
import { CURRENT_USER_QUERY } from "./User";
import Signin from "./Signin";

const PleaseSignIn = ({ children }) => (
  <Query query={CURRENT_USER_QUERY}>
    {({ data, loading }) => {
      if (loading) return <p>Loading...</p>;
      if (!data.me)
        return (
          <>
            <p>Please sign in to continue</p>
            <Signin />
          </>
        );
      return children;
    }}
  </Query>
);

export default PleaseSignIn;
