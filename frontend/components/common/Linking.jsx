import Link from "next/link";

const Linking = ({ to, title }) => {
  return (
    <Link href={to}>
      <a>{title}</a>
    </Link>
  );
};

export default Linking;
