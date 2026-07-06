import Link from "next/link";
import Socials from "./Socials";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center pb-32 sm:flex-row-reverse sm:justify-between">
      <Socials />
      <section className="mt-8 sm:mt-0">
        <p className="text-center text-xs text-muted-foreground">
          <span>&copy; {new Date().getFullYear()}</span>{" "}
          <Link className="link" href="/">
            malam.me
          </Link>{" "}
          <span>
            &middot; self-hosted on{" "}
            <Link
              className="link"
              href="https://github.com/mhmalam/mini-vercel"
              target="_blank"
            >
              mini-vercel
            </Link>
          </span>
        </p>
      </section>
    </footer>
  );
}
