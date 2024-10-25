import Link from "next/link";

export default function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>This is the about page.</p>
      <p>
        Go back to the <Link href="/">Home page</Link>.
      </p>
    </div>
  );
}
