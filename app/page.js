import Heading from "./heading.js";
import Link from "next/link";

export default function Page() {
  let a = 3;
  let b = 7;
  let c = a + b;
  return (
    <main>
      <p>The sum of a + b is {c}.</p>
      <Heading/>
      <Link href="page2.js">Page 2 here </Link>
    </main>
    
  )
};
