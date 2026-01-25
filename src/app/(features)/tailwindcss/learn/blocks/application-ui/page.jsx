import React from "react";
import {
  ComputerDesktopIcon,
  Squares2X2Icon,
  UsersIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

export default function ApplicationUITrack() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          Application UI Pro Track
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Master the art of complex dashboards, data-heavy layouts, and
          functional forms.
        </p>
      </div>

      <div className="space-y-24">
        {/* ================= LEVEL 1 ================= */}
        <section>
          <div className="border-l-4 border-purple-500 pl-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Level 1: The Shell
            </h2>
            <p className="mt-2 text-gray-600">
              Focus: Sidebar Layouts, Fixed Positioning, Responsive Navigation.
            </p>
          </div>

          <div className="mt-10 space-y-12">
            {/* Exercise 1: App Layout */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center justify-between border-b border-gray-100 pb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Exercise 1: Application Shell
                </h3>
                <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                  Completed
                </span>
              </div>
              <div className="prose prose-sm mb-4 text-gray-500">
                <p>
                  Create a standard dashboard layout with:
                  <br />
                  1. <strong>Sidebar</strong> (Fixed on desktop): Logo,
                  Navigation Links (Dashboard, Team, Settings), and User Profile
                  at bottom.
                  <br />
                  2. <strong>Mobile Header</strong>: Visible only on mobile,
                  with a Menu button.
                  <br />
                  3. <strong>Main Content Area</strong>: The gray background
                  area where content lives.
                </p>
              </div>

              {/* Workspace */}
              <div className="rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-6">
                {/* YOUR CODE HERE - Simplified Dashboard Shell */}
                <div className="flex h-96 w-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
                  {/* Sidebar - hidden on mobile */}
                  <div className="hidden w-64 flex-col bg-gray-900 text-white md:flex">
                    <div className="flex h-16 items-center justify-center bg-gray-800 text-xl font-bold">
                      MyDash
                    </div>
                    <nav className="flex-1 space-y-2 px-4 py-6">
                      {["Dashboard", "Team", "Projects", "Calendar"].map(
                        (item) => (
                          <a
                            key={item}
                            href="#"
                            className="block rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-800"
                          >
                            {item}
                          </a>
                        ),
                      )}
                    </nav>
                    <div className="bg-gray-800 p-4">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-gray-500"></div>
                        <div className="text-sm">
                          <p className="font-medium">Tom Cook</p>
                          <p className="text-xs text-gray-400">View profile</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Main Content */}
                  <div className="flex flex-1 flex-col bg-gray-100">
                    {/* Mobile Header */}
                    <div className="flex h-16 items-center justify-between border-b bg-white px-4 md:hidden">
                      <span className="font-bold text-gray-900">MyDash</span>
                      <button className="text-gray-500">
                        <Squares2X2Icon className="h-6 w-6" />
                      </button>
                    </div>

                    {/* Page Content */}
                    <div className="flex-1 overflow-y-auto p-8">
                      <h2 className="text-2xl font-bold text-gray-900">
                        Dashboard
                      </h2>
                      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
                        <div className="h-40 rounded-lg border-2 border-dashed border-gray-300"></div>
                        <div className="h-40 rounded-lg border-2 border-dashed border-gray-300"></div>
                        <div className="h-40 rounded-lg border-2 border-dashed border-gray-300"></div>
                      </div>
                    </div>
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
              Level 2: Data Input
            </h2>
            <p className="mt-2 text-gray-600">
              Focus: Form Layouts, Input States, Login Screens.
            </p>
          </div>

          <div className="mt-10 space-y-12">
            {/* Exercise 1: Settings Form */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center justify-between border-b border-gray-100 pb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Exercise 1: Settings Form
                </h3>
                <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                  Completed
                </span>
              </div>
              <div className="prose prose-sm mb-4 text-gray-500">
                <p>
                  Build a user profile settings form with:
                  <br />
                  1. Profile Photo uploader (circle with "Change" button).
                  <br />
                  2. Input fields (Name, Email, Bio).
                  <br />
                  3. Notification Toggles (Email, SMS).
                  <br />
                  4. "Save" and "Cancel" buttons actions.
                </p>
              </div>
              <div className="bg-white p-8 shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
                <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="flex items-center gap-x-8 sm:col-span-full">
                    <div className="flex h-24 w-24 flex-none items-center justify-center rounded-full bg-gray-200 object-cover text-gray-500">
                      <UsersIcon className="h-10 w-10" />
                    </div>
                    <div>
                      <button
                        type="button"
                        className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-300 ring-inset hover:bg-gray-50"
                      >
                        Change avatar
                      </button>
                      <p className="mt-2 text-xs leading-5 text-gray-500">
                        JPG, GIF or PNG. 1MB max.
                      </p>
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-sm leading-6 font-medium text-gray-900"
                    >
                      First name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 focus:ring-inset sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-sm leading-6 font-medium text-gray-900"
                    >
                      Last name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 focus:ring-inset sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="email"
                      className="block text-sm leading-6 font-medium text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 focus:ring-inset sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex items-center justify-end gap-x-6 border-t border-gray-900/10 pt-8">
                  <button
                    type="button"
                    className="text-sm leading-6 font-semibold text-gray-900"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>

            {/* Exercise 2: Login Screen */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center justify-between border-b border-gray-100 pb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Exercise 2: Login Screen
                </h3>
                <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                  Completed
                </span>
              </div>
              <div className="prose prose-sm mb-4 text-gray-500">
                <p>
                  Create a clean, centered Login Card with:
                  <br />
                  1. Logo and "Sign in to your account" header.
                  <br />
                  2. Email and Password inputs with floating labels or clear
                  labels.
                  <br />
                  3. "Forgot password?" link and "Sign In" button (full width).
                </p>
              </div>
              <div className="flex min-h-[400px] flex-col justify-center rounded-xl bg-gray-50 px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 font-bold text-white">
                    ID
                  </div>
                  <h2 className="mt-4 text-center text-2xl leading-9 font-bold tracking-tight text-gray-900">
                    Sign in to your account
                  </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                  <form className="space-y-6" action="#" method="POST">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm leading-6 font-medium text-gray-900"
                      >
                        Email address
                      </label>
                      <div className="mt-2">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 focus:ring-inset sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="password"
                          className="block text-sm leading-6 font-medium text-gray-900"
                        >
                          Password
                        </label>
                        <div className="text-sm">
                          <a
                            href="#"
                            className="font-semibold text-indigo-600 hover:text-indigo-500"
                          >
                            Forgot password?
                          </a>
                        </div>
                      </div>
                      <div className="mt-2">
                        <input
                          id="password"
                          name="password"
                          type="password"
                          autoComplete="current-password"
                          required
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 focus:ring-inset sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm leading-6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Sign in
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= LEVEL 3 ================= */}
        <section>
          <div className="border-l-4 border-purple-500 pl-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Level 3: Data Display
            </h2>
            <p className="mt-2 text-gray-600">
              Focus: Stats Cards, Complex Tables, Status Badges.
            </p>
          </div>

          <div className="mt-10 space-y-12">
            {/* Exercise 1: Dashboard Stats */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center justify-between border-b border-gray-100 pb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Exercise 1: Stats Grid
                </h3>
                <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                  Completed
                </span>
              </div>
              <div className="prose prose-sm mb-4 text-gray-500">
                <p>
                  Build a grid of 3 stats cards (e.g., Total Subscribers, Avg.
                  Open Rate, Click Rate).
                  <br />
                  Include positive/negative trend indicators (e.g., &uarr; 12%
                  vs last month).
                </p>
              </div>
              <dl className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                {[
                  {
                    name: "Total Subscribers",
                    stat: "71,897",
                    trend: "12%",
                    color: "text-green-600",
                    up: true,
                  },
                  {
                    name: "Avg. Open Rate",
                    stat: "58.16%",
                    trend: "2.1%",
                    color: "text-green-600",
                    up: true,
                  },
                  {
                    name: "Avg. Click Rate",
                    stat: "24.57%",
                    trend: "3.2%",
                    color: "text-red-600",
                    up: false,
                  },
                ].map((item) => (
                  <div
                    key={item.name}
                    className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"
                  >
                    <dt className="truncate text-sm font-medium text-gray-500">
                      {item.name}
                    </dt>
                    <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
                      {item.stat}
                    </dd>
                    <div
                      className={`mt-2 flex items-baseline text-sm font-semibold ${item.color}`}
                    >
                      {item.up ? (
                        <svg
                          className="h-5 w-5 flex-shrink-0 self-center text-green-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="h-5 w-5 flex-shrink-0 self-center text-red-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                      <span className="ml-1">{item.trend}</span>
                    </div>
                  </div>
                ))}
              </dl>
            </div>

            {/* Exercise 2: Data Table */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center justify-between border-b border-gray-100 pb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Exercise 2: Data Table
                </h3>
                <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                  Completed
                </span>
              </div>
              <div className="prose prose-sm mb-4 text-gray-500">
                <p>
                  Create a responsive data table showing a list of Users.
                  <br />
                  Columns: Name, Title, Status (Active/Inactive badge), Role,
                  and an "Edit" button.
                  <br />
                  Essential reuse of `divide-y` and `striped` rows.
                </p>
              </div>
              <div className="ring-opacity-5 overflow-hidden shadow ring-1 ring-black sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Title
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Role
                      </th>
                      <th
                        scope="col"
                        className="relative py-3.5 pr-4 pl-3 sm:pr-6"
                      >
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {[
                      {
                        name: "Lindsay Walton",
                        title: "Front-end Developer",
                        email: "lindsay.walton@example.com",
                        role: "Member",
                        status: "Active",
                      },
                      {
                        name: "Courtney Henry",
                        title: "Designer",
                        email: "courtney.henry@example.com",
                        role: "Admin",
                        status: "Active",
                      },
                      {
                        name: "Tom Cook",
                        title: "Director of Product",
                        email: "tom.cook@example.com",
                        role: "Member",
                        status: "Inactive",
                      },
                    ].map((person) => (
                      <tr key={person.email}>
                        <td className="py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-6">
                          {person.name}
                        </td>
                        <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">
                          {person.title}
                        </td>
                        <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">
                          <span
                            className={`inline-flex rounded-full px-2 text-xs leading-5 font-semibold ${person.status === "Active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}`}
                          >
                            {person.status}
                          </span>
                        </td>
                        <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">
                          {person.role}
                        </td>
                        <td className="relative py-4 pr-4 pl-3 text-right text-sm font-medium whitespace-nowrap sm:pr-6">
                          <a
                            href="#"
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            Edit
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
