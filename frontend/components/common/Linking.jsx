import Link from "next/link";

const Linking = ({ to, title, others }) => (
  <Link href={to} {...others}>
    <a>{title}</a>
  </Link>
);

export default Linking;
