import Link from "next/link";

export const Navigation = () => {
  return (
    <nav className="pt-4">
      <ol className="flex gap-4 text-teal-200">
        <li>
          <Link href="/" className="">
            Home
          </Link>
        </li>
        <li>
          <Link href="/web" className="">
            Web
          </Link>
        </li>
        <li>
          <Link href="/music" className="">
            Music
          </Link>
        </li>
      </ol>
    </nav>
  );
};
