import React from "react";
import {
  InformationCircleIcon,
  BoltIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";

export default function MarketingTrackComplete() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          Marketing Master Track
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          All Levels & Exercises. From Zero to Landing Page.
        </p>
      </div>

      <div className="space-y-24">
        {/* ================= LEVEL 1 ================= */}
        <section>
          <div className="border-l-4 border-blue-500 pl-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Level 1: The First Screen
            </h2>
            <p className="mt-2 text-gray-600">
              Focus: Header, Hero, Basic Layouts.
            </p>
          </div>

          <div className="mt-10 space-y-12">
            {/* Exercise 1: Header */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center justify-between border-b border-gray-100 pb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Exercise 1: Header
                </h3>
                <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                  Completed
                </span>
              </div>
              <div className="prose prose-sm mb-4 text-gray-500">
                <p>
                  Create a navigation bar that contains:
                  <br />
                  1. A Logo (left)
                  <br />
                  2. Navigation Links (center)
                  <br />
                  3. "Log in" and "Sign up" buttons (right)
                </p>
              </div>
              <div className="bg-white p-4 ring-1 ring-gray-900/5 sm:rounded-lg">
                <nav
                  className="flex items-center justify-between"
                  aria-label="Global"
                >
                  <div className="flex lg:flex-1">
                    <a
                      href="#"
                      className="-m-1.5 p-1.5 text-xl font-bold text-indigo-600"
                    >
                      MyStartup
                    </a>
                  </div>
                  <div className="hidden lg:flex lg:gap-x-12">
                    <a
                      href="#"
                      className="text-sm leading-6 font-semibold text-gray-900 hover:text-indigo-600"
                    >
                      Features
                    </a>
                    <a
                      href="#"
                      className="text-sm leading-6 font-semibold text-gray-900 hover:text-indigo-600"
                    >
                      Marketplace
                    </a>
                    <a
                      href="#"
                      className="text-sm leading-6 font-semibold text-gray-900 hover:text-indigo-600"
                    >
                      Company
                    </a>
                  </div>
                  <div className="flex flex-1 items-center justify-end gap-x-6">
                    <a
                      href="#"
                      className="hidden text-sm leading-6 font-semibold text-gray-900 lg:block"
                    >
                      Log in
                    </a>
                    <a
                      href="#"
                      className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
                    >
                      Sign up
                    </a>
                  </div>
                </nav>
              </div>
            </div>

            {/* Exercise 2: Hero */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center justify-between border-b border-gray-100 pb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Exercise 2: Hero Section
                </h3>
                <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                  Completed
                </span>
              </div>
              <div className="prose prose-sm mb-4 text-gray-500">
                <p>
                  Build a Hero section with:
                  <br />
                  1. A big bold Headline (H1)
                  <br />
                  2. Descriptive subtext
                  <br />
                  3. Two CTA buttons ("Get Started", "Learn More")
                </p>
              </div>
              <div className="bg-gray-50 px-6 py-12 ring-1 ring-gray-900/5 sm:rounded-lg">
                <div className="mx-auto max-w-2xl text-center">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    Data to enrich your online business
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                    qui lorem cupidatat commodo.
                  </p>
                  <div className="mt-10 flex items-center justify-center gap-x-6">
                    <a
                      href="#"
                      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
                    >
                      Get started
                    </a>
                    <a
                      href="#"
                      className="text-sm leading-6 font-semibold text-gray-900"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= LEVEL 2 ================= */}
        <section>
          <div className="border-l-4 border-purple-500 pl-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Level 2: Content & Trust
            </h2>
            <p className="mt-2 text-gray-600">
              Focus: Grids, Responsive Layouts, Social Proof.
            </p>
          </div>

          <div className="mt-10 space-y-12">
            {/* Exercise 1: Feature Grid */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center justify-between border-b border-gray-100 pb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Exercise 1: Feature Grid
                </h3>
                <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                  Completed
                </span>
              </div>
              <div className="prose prose-sm mb-4 text-gray-500">
                <p>
                  Build a 3-column grid showing product features. Each item
                  should have an Icon, a Title, and a Description.
                </p>
              </div>
              <div className="bg-white px-4 py-12 shadow-sm ring-1 ring-gray-900/5 sm:rounded-lg sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                  {[
                    {
                      title: "Push to Deploy",
                      desc: "Commodo nec sagittis tortor mauris sed. Turpis tortor quis.",
                      icon: <BoltIcon className="h-6 w-6 text-white" />,
                    },
                    {
                      title: "SSL Certificates",
                      desc: "Pellentesque enim a commodo malesuada facilisis bibendum.",
                      icon: (
                        <DevicePhoneMobileIcon className="h-6 w-6 text-white" />
                      ),
                    },
                    {
                      title: "Simple Queues",
                      desc: "Hac orci donec eget in sem. Quisque non tellus orci ac.",
                      icon: <GlobeAltIcon className="h-6 w-6 text-white" />,
                    },
                  ].map((feature) => (
                    <div
                      key={feature.title}
                      className="flex flex-col items-start rounded-2xl bg-gray-50 p-6"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                        {feature.icon}
                      </div>
                      <div className="mt-4">
                        <h3 className="text-lg leading-7 font-semibold text-gray-900">
                          {feature.title}
                        </h3>
                        <p className="mt-2 text-base leading-7 text-gray-600">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Exercise 2: Logo Cloud */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center justify-between border-b border-gray-100 pb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Exercise 2: Logo Cloud
                </h3>
                <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                  Completed
                </span>
              </div>
              <div className="prose prose-sm mb-4 text-gray-500">
                <p>
                  Create a row of logos (use text placeholders like "Google",
                  "Facebook" etc.) to show social proof. Ensure they wrap nicely
                  on mobile.
                </p>
              </div>
              <div className="bg-gray-50 px-6 py-12 ring-1 ring-gray-900/5 sm:rounded-lg">
                <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                  {[
                    "Transistor",
                    "Reform",
                    "Tuple",
                    "SavvyCal",
                    "Statamic",
                  ].map((logo) => (
                    <div
                      key={logo}
                      className="col-span-2 flex max-h-12 w-full items-center justify-center text-xl font-bold text-gray-400 italic lg:col-span-1"
                    >
                      {logo}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Exercise 3: Testimonial */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center justify-between border-b border-gray-100 pb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Exercise 3: Testimonials
                </h3>
                <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                  Completed
                </span>
              </div>
              <div className="prose prose-sm mb-4 text-gray-500">
                <p>
                  Build a nice card with a user quote, their avatar image, and
                  name.
                </p>
              </div>
              <div className="bg-white p-6 sm:rounded-lg">
                <figure className="mx-auto max-w-2xl text-center">
                  <blockquote className="text-xl leading-8 font-semibold text-gray-900 sm:text-2xl sm:leading-9">
                    <p>
                      “Tailwind CSS is the only framework that I've seen scale
                      on large teams. It’s easy to customize, and the build size
                      is tiny.”
                    </p>
                  </blockquote>
                  <figcaption className="mt-10">
                    <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                      <div className="font-semibold text-gray-900">
                        Judith Black
                      </div>
                      <div className="text-gray-600">CEO of Workcation</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* ================= LEVEL 3 ================= */}
        <section>
          <div className="border-l-4 border-pink-500 pl-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Level 3: The Finale
            </h2>
            <p className="mt-2 text-gray-600">
              Focus: Pricing Tables, Footers, Completing the Page.
            </p>
          </div>

          <div className="mt-10 space-y-12">
            {/* Exercise 1: Pricing */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center justify-between border-b border-gray-100 pb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Exercise 1: Pricing Cards
                </h3>
                <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                  Completed
                </span>
              </div>
              <div className="prose prose-sm mb-4 text-gray-500">
                <p>
                  Build a 3-tier pricing table. Make the middle card "featured"
                  (pop out).
                </p>
              </div>
              <div className="bg-gray-50 px-4 py-12 ring-1 ring-gray-900/5 sm:rounded-lg sm:px-6 lg:px-8">
                <div className="mx-auto grid max-w-lg grid-cols-1 gap-y-6 lg:max-w-4xl lg:grid-cols-3">
                  {[
                    {
                      name: "Hobby",
                      price: "$12",
                      features: ["1 Project", "Basic Analytics"],
                      featured: false,
                    },
                    {
                      name: "Freelancer",
                      price: "$24",
                      features: [
                        "5 Projects",
                        "Advanced Analytics",
                        "Priority Support",
                      ],
                      featured: true,
                    },
                    {
                      name: "Enterprise",
                      price: "$48",
                      features: [
                        "Unlimited Projects",
                        "Custom Solutions",
                        "24/7 Support",
                      ],
                      featured: false,
                    },
                  ].map((tier) => (
                    <div
                      key={tier.name}
                      className={`flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 ${tier.featured ? "lg:-py-12 relative z-10 scale-105 shadow-xl ring-2 ring-indigo-600" : ""}`}
                    >
                      <div>
                        <h3
                          className={`text-base leading-7 font-semibold ${tier.featured ? "text-indigo-600" : "text-gray-900"}`}
                        >
                          {tier.name}
                        </h3>
                        <div className="mt-4 flex items-baseline gap-x-2">
                          <span className="text-5xl font-bold tracking-tight text-gray-900">
                            {tier.price}
                          </span>
                          <span className="text-base font-semibold text-gray-600">
                            /mo
                          </span>
                        </div>
                        <ul className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                          {tier.features.map((feature) => (
                            <li key={feature} className="flex gap-x-3">
                              <CheckIcon className="h-6 w-5 flex-none text-indigo-600" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <a
                        href="#"
                        className={`mt-8 block rounded-md px-3 py-2 text-center text-sm leading-6 font-semibold ${tier.featured ? "bg-indigo-600 text-white" : "bg-white text-indigo-600 ring-1 ring-indigo-200 ring-inset"}`}
                      >
                        Buy plan
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Exercise 2: Footer */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center justify-between border-b border-gray-100 pb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Exercise 2: Footer
                </h3>
                <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                  Completed
                </span>
              </div>
              <div className="prose prose-sm mb-4 text-gray-500">
                <p>
                  Create a multi-column footer with a newsletter subscription
                  form.
                </p>
              </div>
              <footer className="bg-white" aria-labelledby="footer-heading">
                <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 sm:pt-24 lg:px-8">
                  <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8">
                      <span className="text-2xl font-bold text-gray-900">
                        MyStartup
                      </span>
                      <p className="text-sm leading-6 text-gray-600">
                        Making the world a better place.
                      </p>
                      <div className="flex space-x-6">
                        {[1, 2, 3].map((i) => (
                          <div
                            key={i}
                            className="h-6 w-6 rounded-full bg-gray-200"
                          ></div>
                        ))}
                      </div>
                    </div>
                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                      <div>
                        <h3 className="text-sm leading-6 font-semibold text-gray-900">
                          Solutions
                        </h3>
                        <ul className="mt-6 space-y-4">
                          {["Marketing", "Analytics", "Commerce"].map(
                            (item) => (
                              <li key={item} className="text-sm text-gray-600">
                                {item}
                              </li>
                            ),
                          )}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-sm leading-6 font-semibold text-gray-900">
                          Support
                        </h3>
                        <ul className="mt-6 space-y-4">
                          {["Pricing", "Documentation", "Guides"].map(
                            (item) => (
                              <li key={item} className="text-sm text-gray-600">
                                {item}
                              </li>
                            ),
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
