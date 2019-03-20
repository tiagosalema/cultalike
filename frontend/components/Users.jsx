import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import Link from "next/link";

const ALL_USERS_QUERY = gql`
  query ALL_USERS_QUERY {
    users {
      id
      name
    }
  }
`;

const DisplayUsers = () => (
  <Query query={ALL_USERS_QUERY}>
    {({ data: { users }, loading, error }) => {
      if (error) return <p>Error, my dude! Check the component DisplayUsers.jsx</p>;
      if (loading) return <p>Loading...</p>;
      return users.map(user => (
        <div key={user.id}>
          <Link href={{ pathname: "/users", query: { id: user.id } }}>
            <a>{user.name}</a>
          </Link>
        </div>
      ));
    }}
  </Query>
);

export default DisplayUsers;
