import Link from "next/link";
import Logo from "./logo";

export default function Footer({ border = false }: { border?: boolean }) {
  return (
      <footer>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* Top area */}
          <div
              className={`grid gap-10 py-8 sm:grid-cols-12 md:py-12 ${border ? "border-t [border-image:linear-gradient(to_right,transparent,theme(colors.slate.200),transparent)1]" : ""}`}
          >
            {/* Logo and copyright */}
            <div className="space-y-2 sm:col-span-12 lg:col-span-4">
              <div>
                <Logo />
              </div>
              <div className="text-sm text-gray-600">
                &copy; Contractual.ca - All rights reserved.
              </div>
            </div>

            {/* Social links - Move to the far right */}
            <div className="space-y-2 sm:col-span-12 lg:col-span-4 lg:col-start-9 text-right">
              <h3 className="text-sm font-medium">Social</h3>
              <ul className="flex gap-1 justify-end">
                <li>
                  <Link
                      className="flex items-center justify-center text-blue-500 transition hover:text-blue-600"
                      href="#0"
                      aria-label="Twitter"
                  >
                    <svg
                        className="h-8 w-8 fill-current"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z"></path>
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link
                      className="flex items-center justify-center text-blue-500 transition hover:text-blue-600"
                      href="#0"
                      aria-label="Medium"
                  >
                    <svg
                        className="h-8 w-8 fill-current"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M23 8H9a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1Zm-1.708 3.791-.858.823a.251.251 0 0 0-.1.241V18.9a.251.251 0 0 0 .1.241l.838.823v.181h-4.215v-.181l.868-.843c.085-.085.085-.11.085-.241v-4.887l-2.41 6.131h-.329l-2.81-6.13V18.1a.567.567 0 0 0 .156.472l1.129 1.37v.181h-3.2v-.181l1.129-1.37a.547.547 0 0 0 .146-.472v-4.749a.416.416 0 0 0-.138-.351l-1-1.209v-.181H13.8l2.4 5.283 2.122-5.283h2.971l-.001.181Z"></path>
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link
                      className="flex items-center justify-center text-blue-500 transition hover:text-blue-600"
                      href="https://www.instagram.com"
                      aria-label="Instagram"
                  >
                    <svg
                        id="instagram"

                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        className="h-8 w-5 fill-current"



                        viewBox="0 0 169.063 169.063"

                        xmlSpace="preserve"
                    >
                      <g>
                        <path d="M122.406,0H46.654C20.929,0,0,20.93,0,46.655v75.752c0,25.726,20.929,46.655,46.654,46.655h75.752
                          c25.727,0,46.656-20.93,46.656-46.655V46.655C169.063,20.93,148.133,0,122.406,0z M154.063,122.407
                          c0,17.455-14.201,31.655-31.656,31.655H46.654C29.2,154.063,15,139.862,15,122.407V46.655C15,29.201,29.2,15,46.654,15h75.752
                          c17.455,0,31.656,14.201,31.656,31.655V122.407z" />
                        <path d="M84.531,40.97c-24.021,0-43.563,19.542-43.563,43.563c0,24.02,19.542,43.561,43.563,43.561s43.563-19.541,43.563-43.561
                          C128.094,60.512,108.552,40.97,84.531,40.97z M84.531,113.093c-15.749,0-28.563-12.812-28.563-28.561
                          c0-15.75,12.813-28.563,28.563-28.563s28.563,12.813,28.563,28.563C113.094,100.281,100.28,113.093,84.531,113.093z" />
                        <path d="M129.921,28.251c-2.89,0-5.729,1.17-7.77,3.22c-2.051,2.04-3.23,4.88-3.23,7.78c0,2.891,1.18,5.73,3.23,7.78
                          c2.04,2.04,4.88,3.22,7.77,3.22c2.9,0,5.73-1.18,7.78-3.22c2.05-2.05,3.22-4.89,3.22-7.78c0-2.9-1.17-5.74-3.22-7.78
                          C135.661,29.421,132.821,28.251,129.921,28.251z" />
                      </g>
                    </svg>
                  </Link>


                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Big text */}
        <div className="relative -mt-16 h-60 w-full" aria-hidden="true">
          <div className="pointer-events-none absolute left-1/2 -z-10 -translate-x-1/2 text-center text-[208px] font-bold leading-none before:bg-gradient-to-b before:from-gray-200 before:to-gray-100/30 before:to-80% before:bg-clip-text before:text-transparent before:content-['Contractual'] after:absolute after:inset-0 after:bg-gray-300/70 after:bg-clip-text after:text-transparent after:mix-blend-darken after:content-['Contractual'] after:[text-shadow:0_1px_0_white]"></div>
          {/* Glow */}
          <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2/3"
              aria-hidden="true"
          >
            <div className="h-56 w-56 rounded-full border-[20px] border-blue-700 blur-[80px]"></div>
          </div>
        </div>
      </footer>
  );
}
