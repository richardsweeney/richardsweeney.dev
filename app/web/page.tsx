import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Richard Sweeney",
  description: "Web development",
};

export default function Web() {
  return (
    <div className="space-y-6 text-xl leading-relaxed max-w-2xl">
      <h1 className="text-4xl pb-4">Web</h1>
      <p>
        <Link
          className="text-teal-200"
          href="https://www.linkedin.com/in/sweeneyrichard/"
          target="_blank"
        >
          Here I am on LinkedIn
        </Link>
        .
      </p>
      <p>
        I am a web developer with almost 20 years of experience primarily in
        PHP, JavaScript & TypeScript, Node.js & CSS. I&apos;ve seen frameworks
        come and go, especially on the frontend but in PHP I&apos;ve worked
        mostly with Laravel and WordPress (I&apos;m a core contributor).
      </p>
      <p>
        I&apos;ve written loads of Node.js and on the frontend I&apos;ve worked
        for many years in both Vue.js and React.
      </p>
      <p>
        I have experience with Docker &amp; Kubernetes as well as writing and
        configuring CI/CD pipelines, although admittedly DevOps is not my
        favourite thing in the world.
      </p>
      <p>
        I&apos;ve led many projects, both large and small in scope. I really
        enjoy leading teams as well as the mentoring aspect of the roles
        I&apos;ve held in recent years.
      </p>
      <p>
        I also enjoy sitting in the space between developer and project manager,
        or between developer and client. I like being the person in the middle
        that helps bridge the gap between different teams and stakeholders.
      </p>
      <p>
        I&apos;m fluent in both English and Swedish; spoken and written.
        I&apos;m Irish, but I&apos;ve lived in Sweden for ages.
      </p>
    </div>
  );
}
