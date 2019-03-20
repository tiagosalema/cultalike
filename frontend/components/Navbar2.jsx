import Linking from "./common/Linking";
import "./CustomNavbar.scss";
import User from "./User";
import Signout from "./Signout";
import Link from "next/link";

const Navbar2 = () => (
  <User>
    {({ data: { me } }) => {
      return (
        <ul className="nav nav-pills" style={{ backgroundColor: "#111", color: "white" }}>
          <li className="nav-item ">
            <Link href="/">
              <a className="nav-link ">Home</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/users">
              <a className="nav-link ">Users</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/movies">
              <a className="nav-link ">Movies</a>
            </Link>
          </li>
          {!me && (
            <Link href="/signin">
              <a className="nav-link " style={{ color: "white", margin: "0 0 0 auto" }}>
                Signin
              </a>
            </Link>
          )}
          {me && (
            <>
              <Link href="/myReviews">
                <a className="nav-link ">My Reviews</a>
              </Link>
              <button className="btn" style={{ color: "white", margin: "0 0 0 auto" }}>
                {me.name}
              </button>
              <Signout className="justify-content-end" />
            </>
          )}
        </ul>
      );
    }}
  </User>
);

export default Navbar2;
