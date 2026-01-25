"use client";

import Link from "next/link";
import { NAVIGATION } from "./items";

export default function TailwindLandingPage() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Tailwind CSS UI Lab
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          A comprehensive collection of UI components, sections, and templates
          built with Tailwind CSS.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {NAVIGATION.map((group) => (
          <div
            key={group.id}
            className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 transition-all hover:-translate-y-1 hover:shadow-md"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
              {group.icon}
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">
              {group.title}
            </h3>

            <div className="mb-6 flex flex-wrap gap-2">
              {group.sections.slice(0, 3).map((section, idx) => (
                <span
                  key={idx}
                  className="rounded-full bg-gray-50 px-2.5 py-0.5 text-xs font-medium text-gray-600"
                >
                  {section.label}
                </span>
              ))}
              {group.sections.length > 3 && (
                <span className="rounded-full bg-gray-50 px-2.5 py-0.5 text-xs font-medium text-gray-600">
                  +{group.sections.length - 3} more
                </span>
              )}
            </div>

            <Link
              href={group.sections[0]?.items[0]?.path || "#"}
              className="mt-auto flex items-center text-sm font-semibold text-indigo-600 transition-colors hover:text-indigo-500"
            >
              Explore {group.title}
              <span className="ml-1 transition-transform group-hover:translate-x-0.5">
                &rarr;
              </span>
              <span className="absolute inset-0" />
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-2xl bg-gradient-to-r from-gray-900 to-gray-800 p-8 text-center sm:p-12">
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Ready to build?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-gray-300">
          Start assembling your next project with these production-ready
          specialized components.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          {/* You might want to link to a documentation or a 'get started' page if one exists, otherwise just a generic CTA */}
          <Link
            href="/tailwindcss/application-ui/application-shells/stacked"
            className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
