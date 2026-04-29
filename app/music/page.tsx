import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Richard Sweeney",
  description: "Music",
};

export default function Music() {
  return (
    <div className="space-y-6 text-xl leading-relaxed max-w-2xl">
      <h1 className="text-4xl pb-4">Music</h1>
      <p>
        My background is in classical music. I played the cello growing up, got
        into electric and then classical guitar and finally the lute. I studied
        in Dublin and London and worked for 10 years as a professional (mostly
        classical) musician touring all over the world.
      </p>
      <p>
        Nowadays electronic is my jam. I love combining live instruments with
        analog synthesizers and digital stuff. Insights from meditation teachers
        and my own practice feature heavily in my music.
      </p>
      <hr />
      <p>
        Most of my stuff is on{" "}
        <Link
          target="_blank"
          className="text-teal-200"
          href="https://soundcloud.com/richard-sweeney-559767284"
        >
          SoundCloud
        </Link>
        .
      </p>

      <iframe
        width="100%"
        height="166"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2311247501&color=%236e7067&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      />
    </div>
  );
}
