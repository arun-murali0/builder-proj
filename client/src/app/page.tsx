import Link from "next/link";

const page = () => {
  return (
    <>
      <h1>Home Page</h1>
      <Link href={"/login"}>Login</Link>
      <Link href={"/register"}>register</Link>
    </>
  );
};

export default page;
