import Image from "next/image";
import PlanetImg from "@/public/images/planet.png";
import PlanetOverlayImg from "@/public/images/planet-overlay.svg";
import PlanetTagImg01 from "@/public/images/planet-tag-01.png";
import PlanetTagImg02 from "@/public/images/planet-tag-02.png";
import PlanetTagImg03 from "@/public/images/planet-tag-03.png";
import PlanetTagImg04 from "@/public/images/planet-tag-04.png";

export default function FeaturesPlanet() {
  return (
      <section className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Section header */}
            <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
              <h2 className="text-3xl font-bold text-gray-200 md:text-4xl">
                How Contractual Empowers Contractors to Secure Government Projects
              </h2>
            </div>
            {/* Planet */}
            <div className="pb-16 md:pb-20" data-aos="zoom-y-out">
              <div className="text-center">
                <div className="relative inline-flex rounded-full before:absolute before:inset-0 before:-z-10 before:scale-[.85] before:animate-[pulse_4s_cubic-bezier(.4,0,.6,1)_infinite] before:bg-gradient-to-b before:from-blue-900 before:to-sky-700/50 before:blur-3xl after:absolute after:inset-0 after:rounded-[inherit] after:[background:radial-gradient(closest-side,theme(),transparent)]">
                  <Image

                      src={PlanetImg}
                      width={600}
                      height={600}
                      alt="Contractual Platform"
                  />
                  <div className="pointer-events-none" aria-hidden="true">
                    <Image
                        className="absolute -right-64 -top-20 z-10 max-w-none"
                        src={PlanetOverlayImg}
                        width={789}
                        height={755}
                        alt="Platform decoration"
                    />
                    <div>
                      <Image
                          className="absolute -left-28 top-16 z-10 animate-[float_4s_ease-in-out_infinite_both] opacity-80 transition-opacity duration-500"
                          src={PlanetTagImg01}
                          width={253}
                          height={56}
                          alt="Data Analytics"
                      />
                      <Image
                          className="absolute left-56 top-7 z-10 animate-[float_4s_ease-in-out_infinite_1s_both] opacity-30 transition-opacity duration-500"
                          src={PlanetTagImg02}
                          width={241}
                          height={56}
                          alt="Bidding Insights"
                      />
                      <Image
                          className="absolute -left-20 bottom-24 z-10 animate-[float_4s_ease-in-out_infinite_2s_both] opacity-25 transition-opacity duration-500"
                          src={PlanetTagImg03}
                          width={243}
                          height={56}
                          alt="Compliance Checks"
                      />
                      <Image
                          className="absolute bottom-32 left-64 z-10 animate-[float_4s_ease-in-out_infinite_3s_both] opacity-80 transition-opacity duration-500"
                          src={PlanetTagImg04}
                          width={251}
                          height={56}
                          alt="Contract Management"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Grid */}
            <div className="grid overflow-hidden sm:grid-cols-2 lg:grid-cols-3 [&>*]:relative [&>*]:p-6 [&>*]:before:absolute [&>*]:before:bg-gray-800 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-gray-800 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] md:[&>*]:p-10">
              <article>
                <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                  <svg
                      className="fill-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                  >
                    <path d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm2-4a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4H4Zm1 10a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H5Z" />
                  </svg>
                  <span>Data-Driven Analytics</span>
                </h3>
                <p className="text-[15px] text-gray-400">
                  Get in-depth analytics about bid trends, success rates, and contract awards, helping you make informed decisions.
                </p>
              </article>
              <article>
                <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                  <svg
                      className="fill-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                  >
                    <path d="M14.29 2.614a1 1 0 0 0-1.58-1.228L6.407 9.492l-3.199-3.2a1 1 0 1 0-1.414 1.415l4 4a1 1 0 0 0 1.496-.093l7-9ZM1 14a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H1Z" />
                  </svg>
                  <span>Bid Preparation Tools</span>
                </h3>
                <p className="text-[15px] text-gray-400">
                  Use powerful tools to prepare compliant and competitive bids, boosting your chances of winning.
                </p>
              </article>
              <article>
                <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                  <svg
                      className="fill-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                  >
                    <path
                        d="M2.248 6.285a1 1 0 0 1-1.916-.57A8.014 8.014 0 0 1 5.715.332a1 1 0 0 1 .57 1.916 6.014 6.014 0 0 0-4.037 4.037Z"
                        opacity=".3"
                    />
                    <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1.715-6.752a1 1 0 0 1 .57-1.916 8.014 8.014 0 0 1 5.383 5.383 1 1 0 1 1-1.916.57 6.014 6.014 0 0 0-4.037-4.037Zm4.037 7.467a1 1 0 1 1 1.916.57 8.014 8.014 0 0 1-5.383 5.383 1 1 0 1 1-.57-1.916 6.014 6.014 0 0 0 4.037-4.037Zm-7.467 4.037a1 1 0 1 1-.57 1.916 8.014 8.014 0 0 1-5.383-5.383 1 1 0 1 1 1.916-.57 6.014 6.014 0 0 0 4.037 4.037Z" />
                  </svg>
                  <span>Automated Compliance Checks</span>
                </h3>
                <p className="text-[15px] text-gray-400">
                  Ensure your bids meet all legal requirements and standards effortlessly with our compliance verification tool.
                </p>
              </article>

            </div>
          </div>
        </div>
      </section>
  );
}
