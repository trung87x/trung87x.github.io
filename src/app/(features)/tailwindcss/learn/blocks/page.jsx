import React from "react";
import {
  MegaphoneIcon,
  ComputerDesktopIcon,
  ShoppingBagIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const tracks = [
  {
    title: "Marketing Master",
    description:
      "Focus on Typography, Spacing, Visual Impact, and Responsive Layouts.",
    icon: MegaphoneIcon,
    color: "bg-blue-50 text-blue-700",
    levels: [
      {
        name: "Level 1: The First Screen",
        description: "Build a compelling first impression.",
        exercises: ["Header", "Hero Section"],
      },
      {
        name: "Level 2: Content & Trust",
        description: "Present information clearly and build credibility.",
        exercises: ["Feature Section", "Testimonials", "Logo Cloud"],
      },
      {
        name: "Level 3: The Landing Page",
        description: "Combine elements into a cohesive page.",
        exercises: ["Full Page Composition", "Pricing Section", "Footer"],
      },
    ],
  },
  {
    title: "Application UI Pro",
    description: "Focus on Density, Logic, States, and Component Reusability.",
    icon: ComputerDesktopIcon,
    color: "bg-purple-50 text-purple-700",
    levels: [
      {
        name: "Level 1: The Shell",
        description: "Create the application skeleton.",
        exercises: ["App Layout (Sidebar + Navbar)"],
      },
      {
        name: "Level 2: Data Input",
        description: "User interaction and data entry.",
        exercises: ["Settings Form", "Login/Register Forms"],
      },
      {
        name: "Level 3: Data Display",
        description: "Visualizing complex data.",
        exercises: ["Dashboard Stats", "Data Table"],
      },
    ],
  },
  {
    title: "Ecommerce Specialist",
    description:
      "Focus on Conversion, Product Presentation, and Gallery Layouts.",
    icon: ShoppingBagIcon,
    color: "bg-pink-50 text-pink-700",
    levels: [
      {
        name: "Level 1: Product Presentation",
        description: "Showcasing products effectively.",
        exercises: ["Product Card", "Product Overview (Gallery)"],
      },
      {
        name: "Level 2: The Shopping Flow",
        description: "Guiding the user to purchase.",
        exercises: ["Shopping Cart", "Checkout Page"],
      },
    ],
  },
];

export default function LearningRoadmap() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Learning Roadmap
        </h1>
        <p className="mt-4 text-lg text-gray-500">
          Master TailwindCSS specific blocks through structured learning tracks.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {tracks.map((track) => (
          <div
            key={track.title}
            className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-200 transition-all hover:shadow-xl"
          >
            <div className={`px-6 py-8 ${track.color}`}>
              <div className="flex items-center gap-4">
                <track.icon className="h-8 w-8" />
                <h2 className="text-xl font-semibold text-gray-900">
                  {track.title}
                </h2>
              </div>
              <p className="mt-4 text-sm font-medium opacity-90">
                {track.description}
              </p>
            </div>

            <div className="flex flex-1 flex-col justify-between p-6">
              <ul className="space-y-8">
                {track.levels.map((level, index) => (
                  <li key={level.name} className="relative">
                    {index !== track.levels.length - 1 && (
                      <span
                        className="absolute top-8 left-2.5 -ml-px h-full w-0.5 bg-gray-200"
                        aria-hidden="true"
                      />
                    )}
                    <div className="group relative flex items-start">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-gray-300 bg-white transition-colors group-hover:border-indigo-600">
                        <span className="h-1.5 w-1.5 rounded-full bg-transparent transition-colors group-hover:bg-indigo-600" />
                      </span>
                      <div className="ml-4 min-w-0">
                        <p className="text-sm font-semibold text-gray-900">
                          {level.name}
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          {level.description}
                        </p>
                        <ul className="mt-3 space-y-2">
                          {level.exercises.map((exercise) => (
                            <li
                              key={exercise}
                              className="flex items-start rounded border border-gray-100 bg-gray-50 px-2 py-1 text-xs text-gray-600"
                            >
                              <CheckCircleIcon className="mr-1.5 h-4 w-4 shrink-0 text-gray-400" />
                              {exercise}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-8 border-t border-gray-100 pt-6">
                {track.title === "Marketing Master" ? (
                  <div className="flex flex-col gap-2">
                    <Link
                      href="/tailwindcss/learn/blocks/marketing"
                      className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      View Full Track
                    </Link>
                  </div>
                ) : track.title === "Application UI Pro" ? (
                  <div className="flex flex-col gap-2">
                    <Link
                      href="/tailwindcss/learn/blocks/application-ui"
                      className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      View Full Track
                    </Link>
                  </div>
                ) : track.title === "Ecommerce Specialist" ? (
                  <div className="flex flex-col gap-2">
                    <Link
                      href="/tailwindcss/learn/blocks/ecommerce"
                      className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      View Full Track
                    </Link>
                  </div>
                ) : (
                  <button className="w-full rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-300 ring-inset hover:bg-gray-50">
                    Start Track
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
