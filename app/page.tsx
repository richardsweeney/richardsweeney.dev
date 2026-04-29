import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-6 text-xl leading-relaxed max-w-2xl">
      <h1 className="text-4xl pb-4">Hey!</h1>
      <p>I&apos;m Richard. A person living in Malmö, Sweden.</p>
      <p>
        I&apos;ve worked as a web developer for almost 20 years. Before that I
        worked as a professional lutenist and toured with various groups all
        over the world. These days I like to write electronic music, sometimes
        combined with live instruments.
      </p>

      <h2 className="text-2xl pt-8">Where do you want to go from here?</h2>

      <div className="flex items-center gap-6 pt-2">
        <Link
          className="rounded-4xl transition-all border-2 border-teal-400 hover:bg-teal-400 min-w-40 text-center items-center text-teal-400 hover:text-gray-950 px-6 py-3"
          href="/web"
        >
          Development
        </Link>
        <Link
          className="rounded-4xl transition-all border-2 border-teal-400 hover:bg-teal-400 min-w-40 text-center items-center text-teal-400 hover:text-gray-950 px-6 py-3"
          href="/music"
        >
          Music
        </Link>
      </div>
    </div>
  );
}
