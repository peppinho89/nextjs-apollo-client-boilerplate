import Link from "next/link";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import Layout from "../components/Layout";

const Index = () => {
  const { loading, error, data } = useQuery(gql`
    {
      allUsers(first: 5) {
        firstName
      }
    }
  `);

  console.log(data);

  return (
    <Layout>
      {" "}
      <br />
      <Link href="/explore">
        <a> Welcome to WHATABYTE! Start Exploring Now</a>
      </Link>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <div>
        {data && data.allUsers && (
          <ul>
            {data.allUsers.map(user => (
              <li key={user.firstName}>{user.firstName}</li>
            ))}
          </ul>
        )}
      </div>
    </Layout>
  );
};

export default Index;
