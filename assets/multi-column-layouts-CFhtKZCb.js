import{r as t,j as e,h as n,L as o,z as c,O as d}from"./index-CvCVbuS9.js";import{P as I}from"./PreviewWrapper-TzFvRoPZ.js";import{F as m}from"./XMarkIcon-DRrKznFm.js";import{F as x,a as g}from"./HomeIcon-DYfG8a2o.js";import{F as h}from"./UsersIcon-BtfmJCZO.js";import{F as p}from"./FolderIcon-BaDjF-i0.js";import{F as f}from"./CalendarIcon-BGNgCXOy.js";import{F as u}from"./ChartPieIcon-0b6DQGNv.js";import{F as y}from"./Bars3Icon-DlixG59f.js";import{F as b}from"./BellIcon-Celbp3Xl.js";import{F as O}from"./MagnifyingGlassIcon-Tr5kZRgo.js";import{l as S,f as B,y as M,g as Y}from"./menu-DqpGavi0.js";import{F as T}from"./ChevronDownIcon-CpWKsJQ8.js";import"./floating-CjydGm1Z.js";import"./element-movement-BT6A7GGi.js";import"./bugs-qQ_SbDk4.js";import"./use-resolve-button-type-J0J8N5g4.js";import"./use-text-value-CB9rzUUM.js";import"./use-tree-walker-_f7mgbza.js";import"./label-CY_Q6YdE.js";const N=[{name:"Dashboard",href:"#",icon:x,current:!0},{name:"Team",href:"#",icon:h,current:!1},{name:"Projects",href:"#",icon:p,current:!1},{name:"Calendar",href:"#",icon:f,current:!1},{name:"Documents",href:"#",icon:g,current:!1},{name:"Reports",href:"#",icon:u,current:!1}],v=[{id:1,name:"Heroicons",href:"#",initial:"H",current:!1},{id:2,name:"Tailwind Labs",href:"#",initial:"T",current:!1},{id:3,name:"Workcation",href:"#",initial:"W",current:!1}];function i(...r){return r.filter(Boolean).join(" ")}function F(){const[r,s]=t.useState(!1);return e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsxs(n,{open:r,onClose:s,className:"relative z-50 lg:hidden",children:[e.jsx(o,{transition:!0,className:"fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-closed:opacity-0"}),e.jsx("div",{className:"fixed inset-0 flex",children:e.jsxs(c,{transition:!0,className:"relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-closed:-translate-x-full",children:[e.jsx(d,{children:e.jsx("div",{className:"absolute top-0 left-full flex w-16 justify-center pt-5 duration-300 ease-in-out data-closed:opacity-0",children:e.jsxs("button",{type:"button",onClick:()=>s(!1),className:"-m-2.5 p-2.5",children:[e.jsx("span",{className:"sr-only",children:"Close sidebar"}),e.jsx(m,{"aria-hidden":"true",className:"size-6 text-white"})]})})}),e.jsxs("div",{className:"flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2",children:[e.jsx("div",{className:"flex h-16 shrink-0 items-center",children:e.jsx("img",{alt:"Your Company",src:"https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600",className:"h-8 w-auto"})}),e.jsx("nav",{className:"flex flex-1 flex-col",children:e.jsxs("ul",{role:"list",className:"flex flex-1 flex-col gap-y-7",children:[e.jsx("li",{children:e.jsx("ul",{role:"list",className:"-mx-2 space-y-1",children:N.map(a=>e.jsx("li",{children:e.jsxs("a",{href:a.href,className:i(a.current?"bg-gray-50 text-indigo-600":"text-gray-700 hover:bg-gray-50 hover:text-indigo-600","group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"),children:[e.jsx(a.icon,{"aria-hidden":"true",className:i(a.current?"text-indigo-600":"text-gray-400 group-hover:text-indigo-600","size-6 shrink-0")}),a.name]})},a.name))})}),e.jsxs("li",{children:[e.jsx("div",{className:"text-xs/6 font-semibold text-gray-400",children:"Your teams"}),e.jsx("ul",{role:"list",className:"-mx-2 mt-2 space-y-1",children:v.map(a=>e.jsx("li",{children:e.jsxs("a",{href:a.href,className:i(a.current?"bg-gray-50 text-indigo-600":"text-gray-700 hover:bg-gray-50 hover:text-indigo-600","group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"),children:[e.jsx("span",{className:i(a.current?"border-indigo-600 text-indigo-600":"border-gray-200 text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600","flex size-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium"),children:a.initial}),e.jsx("span",{className:"truncate",children:a.name})]})},a.name))})]})]})})]})]})})]}),e.jsx("div",{className:"hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col",children:e.jsxs("div",{className:"flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6",children:[e.jsx("div",{className:"flex h-16 shrink-0 items-center",children:e.jsx("img",{alt:"Your Company",src:"https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600",className:"h-8 w-auto"})}),e.jsx("nav",{className:"flex flex-1 flex-col",children:e.jsxs("ul",{role:"list",className:"flex flex-1 flex-col gap-y-7",children:[e.jsx("li",{children:e.jsx("ul",{role:"list",className:"-mx-2 space-y-1",children:N.map(a=>e.jsx("li",{children:e.jsxs("a",{href:a.href,className:i(a.current?"bg-gray-50 text-indigo-600":"text-gray-700 hover:bg-gray-50 hover:text-indigo-600","group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"),children:[e.jsx(a.icon,{"aria-hidden":"true",className:i(a.current?"text-indigo-600":"text-gray-400 group-hover:text-indigo-600","size-6 shrink-0")}),a.name]})},a.name))})}),e.jsxs("li",{children:[e.jsx("div",{className:"text-xs/6 font-semibold text-gray-400",children:"Your teams"}),e.jsx("ul",{role:"list",className:"-mx-2 mt-2 space-y-1",children:v.map(a=>e.jsx("li",{children:e.jsxs("a",{href:a.href,className:i(a.current?"bg-gray-50 text-indigo-600":"text-gray-700 hover:bg-gray-50 hover:text-indigo-600","group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"),children:[e.jsx("span",{className:i(a.current?"border-indigo-600 text-indigo-600":"border-gray-200 text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600","flex size-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium"),children:a.initial}),e.jsx("span",{className:"truncate",children:a.name})]})},a.name))})]}),e.jsx("li",{className:"-mx-6 mt-auto",children:e.jsxs("a",{href:"#",className:"flex items-center gap-x-4 px-6 py-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-50",children:[e.jsx("img",{alt:"",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",className:"size-8 rounded-full bg-gray-50"}),e.jsx("span",{className:"sr-only",children:"Your profile"}),e.jsx("span",{"aria-hidden":"true",children:"Tom Cook"})]})})]})})]})}),e.jsxs("div",{className:"sticky top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-xs sm:px-6 lg:hidden",children:[e.jsxs("button",{type:"button",onClick:()=>s(!0),className:"-m-2.5 p-2.5 text-gray-700 lg:hidden",children:[e.jsx("span",{className:"sr-only",children:"Open sidebar"}),e.jsx(y,{"aria-hidden":"true",className:"size-6"})]}),e.jsx("div",{className:"flex-1 text-sm/6 font-semibold text-gray-900",children:"Dashboard"}),e.jsxs("a",{href:"#",children:[e.jsx("span",{className:"sr-only",children:"Your profile"}),e.jsx("img",{alt:"",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",className:"size-8 rounded-full bg-gray-50"})]})]}),e.jsx("main",{className:"lg:pl-72",children:e.jsx("div",{className:"xl:pl-96",children:e.jsx("div",{className:"px-4 py-10 sm:px-6 lg:px-8 lg:py-6"})})}),e.jsx("aside",{className:"fixed inset-y-0 left-72 hidden w-96 overflow-y-auto border-r border-gray-200 px-4 py-6 sm:px-6 lg:px-8 xl:block"})]})})}const H=`'use client'

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, TransitionChild } from '@headlessui/react'
import {
  Bars3Icon,
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
  { name: 'Team', href: '#', icon: UsersIcon, current: false },
  { name: 'Projects', href: '#', icon: FolderIcon, current: false },
  { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
  { name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false },
  { name: 'Reports', href: '#', icon: ChartPieIcon, current: false },
]
const teams = [
  { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
  { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
  { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      {/*
        This example requires updating your template:

        \`\`\`
        <html class="h-full bg-white">
        <body class="h-full">
        \`\`\`
      */}
      <div>
        <Dialog open={sidebarOpen} onClose={setSidebarOpen} className="relative z-50 lg:hidden">
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-closed:opacity-0"
          />

          <div className="fixed inset-0 flex">
            <DialogPanel
              transition
              className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-closed:-translate-x-full"
            >
              <TransitionChild>
                <div className="absolute top-0 left-full flex w-16 justify-center pt-5 duration-300 ease-in-out data-closed:opacity-0">
                  <button type="button" onClick={() => setSidebarOpen(false)} className="-m-2.5 p-2.5">
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon aria-hidden="true" className="size-6 text-white" />
                  </button>
                </div>
              </TransitionChild>
              {/* Sidebar component, swap this element with another sidebar if you like */}
              <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2">
                <div className="flex h-16 shrink-0 items-center">
                  <img
                    alt="Your Company"
                    src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                    className="h-8 w-auto"
                  />
                </div>
                <nav className="flex flex-1 flex-col">
                  <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" className="-mx-2 space-y-1">
                        {navigation.map((item) => (
                          <li key={item.name}>
                            <a
                              href={item.href}
                              className={classNames(
                                item.current
                                  ? 'bg-gray-50 text-indigo-600'
                                  : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
                                'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                              )}
                            >
                              <item.icon
                                aria-hidden="true"
                                className={classNames(
                                  item.current ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600',
                                  'size-6 shrink-0',
                                )}
                              />
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li>
                      <div className="text-xs/6 font-semibold text-gray-400">Your teams</div>
                      <ul role="list" className="-mx-2 mt-2 space-y-1">
                        {teams.map((team) => (
                          <li key={team.name}>
                            <a
                              href={team.href}
                              className={classNames(
                                team.current
                                  ? 'bg-gray-50 text-indigo-600'
                                  : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
                                'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                              )}
                            >
                              <span
                                className={classNames(
                                  team.current
                                    ? 'border-indigo-600 text-indigo-600'
                                    : 'border-gray-200 text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600',
                                  'flex size-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium',
                                )}
                              >
                                {team.initial}
                              </span>
                              <span className="truncate">{team.name}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </div>
        </Dialog>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
            <div className="flex h-16 shrink-0 items-center">
              <img
                alt="Your Company"
                src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-gray-50 text-indigo-600'
                              : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
                            'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                          )}
                        >
                          <item.icon
                            aria-hidden="true"
                            className={classNames(
                              item.current ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600',
                              'size-6 shrink-0',
                            )}
                          />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <div className="text-xs/6 font-semibold text-gray-400">Your teams</div>
                  <ul role="list" className="-mx-2 mt-2 space-y-1">
                    {teams.map((team) => (
                      <li key={team.name}>
                        <a
                          href={team.href}
                          className={classNames(
                            team.current
                              ? 'bg-gray-50 text-indigo-600'
                              : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
                            'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                          )}
                        >
                          <span
                            className={classNames(
                              team.current
                                ? 'border-indigo-600 text-indigo-600'
                                : 'border-gray-200 text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600',
                              'flex size-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium',
                            )}
                          >
                            {team.initial}
                          </span>
                          <span className="truncate">{team.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="-mx-6 mt-auto">
                  <a
                    href="#"
                    className="flex items-center gap-x-4 px-6 py-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      className="size-8 rounded-full bg-gray-50"
                    />
                    <span className="sr-only">Your profile</span>
                    <span aria-hidden="true">Tom Cook</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-xs sm:px-6 lg:hidden">
          <button type="button" onClick={() => setSidebarOpen(true)} className="-m-2.5 p-2.5 text-gray-700 lg:hidden">
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
          <div className="flex-1 text-sm/6 font-semibold text-gray-900">Dashboard</div>
          <a href="#">
            <span className="sr-only">Your profile</span>
            <img
              alt=""
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              className="size-8 rounded-full bg-gray-50"
            />
          </a>
        </div>

        <main className="lg:pl-72">
          <div className="xl:pl-96">
            <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-6">{/* Main area */}</div>
          </div>
        </main>

        <aside className="fixed inset-y-0 left-72 hidden w-96 overflow-y-auto border-r border-gray-200 px-4 py-6 sm:px-6 lg:px-8 xl:block">
          {/* Secondary column (hidden on smaller screens) */}
        </aside>
      </div>
    </>
  )
}
`,j=[{name:"Dashboard",href:"#",icon:x,current:!0},{name:"Team",href:"#",icon:h,current:!1},{name:"Projects",href:"#",icon:p,current:!1},{name:"Calendar",href:"#",icon:f,current:!1},{name:"Documents",href:"#",icon:g,current:!1},{name:"Reports",href:"#",icon:u,current:!1}],w=[{id:1,name:"Heroicons",href:"#",initial:"H",current:!1},{id:2,name:"Tailwind Labs",href:"#",initial:"T",current:!1},{id:3,name:"Workcation",href:"#",initial:"W",current:!1}];function l(...r){return r.filter(Boolean).join(" ")}function E(){const[r,s]=t.useState(!1);return e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsxs(n,{open:r,onClose:s,className:"relative z-50 lg:hidden",children:[e.jsx(o,{transition:!0,className:"fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-closed:opacity-0"}),e.jsx("div",{className:"fixed inset-0 flex",children:e.jsxs(c,{transition:!0,className:"relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-closed:-translate-x-full",children:[e.jsx(d,{children:e.jsx("div",{className:"absolute top-0 left-full flex w-16 justify-center pt-5 duration-300 ease-in-out data-closed:opacity-0",children:e.jsxs("button",{type:"button",onClick:()=>s(!1),className:"-m-2.5 p-2.5",children:[e.jsx("span",{className:"sr-only",children:"Close sidebar"}),e.jsx(m,{"aria-hidden":"true",className:"size-6 text-white"})]})})}),e.jsxs("div",{className:"flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2",children:[e.jsx("div",{className:"flex h-16 shrink-0 items-center",children:e.jsx("img",{alt:"Your Company",src:"https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600",className:"h-8 w-auto"})}),e.jsx("nav",{className:"flex flex-1 flex-col",children:e.jsxs("ul",{role:"list",className:"flex flex-1 flex-col gap-y-7",children:[e.jsx("li",{children:e.jsx("ul",{role:"list",className:"-mx-2 space-y-1",children:j.map(a=>e.jsx("li",{children:e.jsxs("a",{href:a.href,className:l(a.current?"bg-gray-50 text-indigo-600":"text-gray-700 hover:bg-gray-50 hover:text-indigo-600","group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"),children:[e.jsx(a.icon,{"aria-hidden":"true",className:l(a.current?"text-indigo-600":"text-gray-400 group-hover:text-indigo-600","size-6 shrink-0")}),a.name]})},a.name))})}),e.jsxs("li",{children:[e.jsx("div",{className:"text-xs/6 font-semibold text-gray-400",children:"Your teams"}),e.jsx("ul",{role:"list",className:"-mx-2 mt-2 space-y-1",children:w.map(a=>e.jsx("li",{children:e.jsxs("a",{href:a.href,className:l(a.current?"bg-gray-50 text-indigo-600":"text-gray-700 hover:bg-gray-50 hover:text-indigo-600","group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"),children:[e.jsx("span",{className:l(a.current?"border-indigo-600 text-indigo-600":"border-gray-200 text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600","flex size-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium"),children:a.initial}),e.jsx("span",{className:"truncate",children:a.name})]})},a.name))})]})]})})]})]})})]}),e.jsx("div",{className:"hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col",children:e.jsxs("div",{className:"flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6",children:[e.jsx("div",{className:"flex h-16 shrink-0 items-center",children:e.jsx("img",{alt:"Your Company",src:"https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600",className:"h-8 w-auto"})}),e.jsx("nav",{className:"flex flex-1 flex-col",children:e.jsxs("ul",{role:"list",className:"flex flex-1 flex-col gap-y-7",children:[e.jsx("li",{children:e.jsx("ul",{role:"list",className:"-mx-2 space-y-1",children:j.map(a=>e.jsx("li",{children:e.jsxs("a",{href:a.href,className:l(a.current?"bg-gray-50 text-indigo-600":"text-gray-700 hover:bg-gray-50 hover:text-indigo-600","group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"),children:[e.jsx(a.icon,{"aria-hidden":"true",className:l(a.current?"text-indigo-600":"text-gray-400 group-hover:text-indigo-600","size-6 shrink-0")}),a.name]})},a.name))})}),e.jsxs("li",{children:[e.jsx("div",{className:"text-xs/6 font-semibold text-gray-400",children:"Your teams"}),e.jsx("ul",{role:"list",className:"-mx-2 mt-2 space-y-1",children:w.map(a=>e.jsx("li",{children:e.jsxs("a",{href:a.href,className:l(a.current?"bg-gray-50 text-indigo-600":"text-gray-700 hover:bg-gray-50 hover:text-indigo-600","group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"),children:[e.jsx("span",{className:l(a.current?"border-indigo-600 text-indigo-600":"border-gray-200 text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600","flex size-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium"),children:a.initial}),e.jsx("span",{className:"truncate",children:a.name})]})},a.name))})]}),e.jsx("li",{className:"-mx-6 mt-auto",children:e.jsxs("a",{href:"#",className:"flex items-center gap-x-4 px-6 py-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-50",children:[e.jsx("img",{alt:"",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",className:"size-8 rounded-full bg-gray-50"}),e.jsx("span",{className:"sr-only",children:"Your profile"}),e.jsx("span",{"aria-hidden":"true",children:"Tom Cook"})]})})]})})]})}),e.jsxs("div",{className:"sticky top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-xs sm:px-6 lg:hidden",children:[e.jsxs("button",{type:"button",onClick:()=>s(!0),className:"-m-2.5 p-2.5 text-gray-700 lg:hidden",children:[e.jsx("span",{className:"sr-only",children:"Open sidebar"}),e.jsx(y,{"aria-hidden":"true",className:"size-6"})]}),e.jsx("div",{className:"flex-1 text-sm/6 font-semibold text-gray-900",children:"Dashboard"}),e.jsxs("a",{href:"#",children:[e.jsx("span",{className:"sr-only",children:"Your profile"}),e.jsx("img",{alt:"",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",className:"size-8 rounded-full bg-gray-50"})]})]}),e.jsx("main",{className:"lg:pl-72",children:e.jsx("div",{className:"xl:pr-96",children:e.jsx("div",{className:"px-4 py-10 sm:px-6 lg:px-8 lg:py-6"})})}),e.jsx("aside",{className:"fixed inset-y-0 right-0 hidden w-96 overflow-y-auto border-l border-gray-200 px-4 py-6 sm:px-6 lg:px-8 xl:block"})]})})}const P=`'use client'

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, TransitionChild } from '@headlessui/react'
import {
  Bars3Icon,
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
  { name: 'Team', href: '#', icon: UsersIcon, current: false },
  { name: 'Projects', href: '#', icon: FolderIcon, current: false },
  { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
  { name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false },
  { name: 'Reports', href: '#', icon: ChartPieIcon, current: false },
]
const teams = [
  { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
  { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
  { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      {/*
        This example requires updating your template:

        \`\`\`
        <html class="h-full bg-white">
        <body class="h-full">
        \`\`\`
      */}
      <div>
        <Dialog open={sidebarOpen} onClose={setSidebarOpen} className="relative z-50 lg:hidden">
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-closed:opacity-0"
          />

          <div className="fixed inset-0 flex">
            <DialogPanel
              transition
              className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-closed:-translate-x-full"
            >
              <TransitionChild>
                <div className="absolute top-0 left-full flex w-16 justify-center pt-5 duration-300 ease-in-out data-closed:opacity-0">
                  <button type="button" onClick={() => setSidebarOpen(false)} className="-m-2.5 p-2.5">
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon aria-hidden="true" className="size-6 text-white" />
                  </button>
                </div>
              </TransitionChild>
              {/* Sidebar component, swap this element with another sidebar if you like */}
              <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2">
                <div className="flex h-16 shrink-0 items-center">
                  <img
                    alt="Your Company"
                    src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                    className="h-8 w-auto"
                  />
                </div>
                <nav className="flex flex-1 flex-col">
                  <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" className="-mx-2 space-y-1">
                        {navigation.map((item) => (
                          <li key={item.name}>
                            <a
                              href={item.href}
                              className={classNames(
                                item.current
                                  ? 'bg-gray-50 text-indigo-600'
                                  : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
                                'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                              )}
                            >
                              <item.icon
                                aria-hidden="true"
                                className={classNames(
                                  item.current ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600',
                                  'size-6 shrink-0',
                                )}
                              />
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li>
                      <div className="text-xs/6 font-semibold text-gray-400">Your teams</div>
                      <ul role="list" className="-mx-2 mt-2 space-y-1">
                        {teams.map((team) => (
                          <li key={team.name}>
                            <a
                              href={team.href}
                              className={classNames(
                                team.current
                                  ? 'bg-gray-50 text-indigo-600'
                                  : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
                                'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                              )}
                            >
                              <span
                                className={classNames(
                                  team.current
                                    ? 'border-indigo-600 text-indigo-600'
                                    : 'border-gray-200 text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600',
                                  'flex size-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium',
                                )}
                              >
                                {team.initial}
                              </span>
                              <span className="truncate">{team.name}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </div>
        </Dialog>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
            <div className="flex h-16 shrink-0 items-center">
              <img
                alt="Your Company"
                src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-gray-50 text-indigo-600'
                              : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
                            'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                          )}
                        >
                          <item.icon
                            aria-hidden="true"
                            className={classNames(
                              item.current ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600',
                              'size-6 shrink-0',
                            )}
                          />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <div className="text-xs/6 font-semibold text-gray-400">Your teams</div>
                  <ul role="list" className="-mx-2 mt-2 space-y-1">
                    {teams.map((team) => (
                      <li key={team.name}>
                        <a
                          href={team.href}
                          className={classNames(
                            team.current
                              ? 'bg-gray-50 text-indigo-600'
                              : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
                            'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                          )}
                        >
                          <span
                            className={classNames(
                              team.current
                                ? 'border-indigo-600 text-indigo-600'
                                : 'border-gray-200 text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600',
                              'flex size-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium',
                            )}
                          >
                            {team.initial}
                          </span>
                          <span className="truncate">{team.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="-mx-6 mt-auto">
                  <a
                    href="#"
                    className="flex items-center gap-x-4 px-6 py-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      className="size-8 rounded-full bg-gray-50"
                    />
                    <span className="sr-only">Your profile</span>
                    <span aria-hidden="true">Tom Cook</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-xs sm:px-6 lg:hidden">
          <button type="button" onClick={() => setSidebarOpen(true)} className="-m-2.5 p-2.5 text-gray-700 lg:hidden">
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
          <div className="flex-1 text-sm/6 font-semibold text-gray-900">Dashboard</div>
          <a href="#">
            <span className="sr-only">Your profile</span>
            <img
              alt=""
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              className="size-8 rounded-full bg-gray-50"
            />
          </a>
        </div>

        <main className="lg:pl-72">
          <div className="xl:pr-96">
            <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-6">{/* Main area */}</div>
          </div>
        </main>

        <aside className="fixed inset-y-0 right-0 hidden w-96 overflow-y-auto border-l border-gray-200 px-4 py-6 sm:px-6 lg:px-8 xl:block">
          {/* Secondary column (hidden on smaller screens) */}
        </aside>
      </div>
    </>
  )
}
`;function R(){return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex min-h-full flex-col",children:[e.jsx("header",{className:"shrink-0 bg-gray-900",children:e.jsxs("div",{className:"mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8",children:[e.jsx("img",{alt:"Your Company",src:"https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500",className:"h-8 w-auto"}),e.jsxs("div",{className:"flex items-center gap-x-8",children:[e.jsxs("button",{type:"button",className:"-m-2.5 p-2.5 text-gray-400 hover:text-gray-300",children:[e.jsx("span",{className:"sr-only",children:"View notifications"}),e.jsx(b,{"aria-hidden":"true",className:"size-6"})]}),e.jsxs("a",{href:"#",className:"-m-1.5 p-1.5",children:[e.jsx("span",{className:"sr-only",children:"Your profile"}),e.jsx("img",{alt:"",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",className:"size-8 rounded-full bg-gray-800"})]})]})]})}),e.jsxs("div",{className:"mx-auto w-full max-w-7xl grow lg:flex xl:px-2",children:[e.jsxs("div",{className:"flex-1 xl:flex",children:[e.jsx("div",{className:"border-b border-gray-200 px-4 py-6 sm:px-6 lg:pl-8 xl:w-64 xl:shrink-0 xl:border-r xl:border-b-0 xl:pl-6"}),e.jsx("div",{className:"px-4 py-6 sm:px-6 lg:pl-8 xl:flex-1 xl:pl-6"})]}),e.jsx("div",{className:"shrink-0 border-t border-gray-200 px-4 py-6 sm:px-6 lg:w-96 lg:border-t-0 lg:border-l lg:pr-8 xl:pr-6"})]})]})})}const W=`import { BellIcon } from '@heroicons/react/24/outline'

export default function Example() {
  return (
    <>
      {/*
        This example requires updating your template:

        \`\`\`
        <html class="h-full bg-white">
        <body class="h-full">
        \`\`\`
      */}
      <div className="flex min-h-full flex-col">
        <header className="shrink-0 bg-gray-900">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <img
              alt="Your Company"
              src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
              className="h-8 w-auto"
            />
            <div className="flex items-center gap-x-8">
              <button type="button" className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-300">
                <span className="sr-only">View notifications</span>
                <BellIcon aria-hidden="true" className="size-6" />
              </button>
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your profile</span>
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  className="size-8 rounded-full bg-gray-800"
                />
              </a>
            </div>
          </div>
        </header>

        {/* 3 column wrapper */}
        <div className="mx-auto w-full max-w-7xl grow lg:flex xl:px-2">
          {/* Left sidebar & main wrapper */}
          <div className="flex-1 xl:flex">
            <div className="border-b border-gray-200 px-4 py-6 sm:px-6 lg:pl-8 xl:w-64 xl:shrink-0 xl:border-r xl:border-b-0 xl:pl-6">
              {/* Left column area */}
            </div>

            <div className="px-4 py-6 sm:px-6 lg:pl-8 xl:flex-1 xl:pl-6">{/* Main area */}</div>
          </div>

          <div className="shrink-0 border-t border-gray-200 px-4 py-6 sm:px-6 lg:w-96 lg:border-t-0 lg:border-l lg:pr-8 xl:pr-6">
            {/* Right column area */}
          </div>
        </div>
      </div>
    </>
  )
}
`;function $(){return e.jsxs("div",{className:"flex min-h-full flex-col",children:[e.jsx("header",{className:"shrink-0 border-b border-gray-200 bg-white",children:e.jsxs("div",{className:"mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8",children:[e.jsx("img",{alt:"Your Company",src:"https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600",className:"h-8 w-auto"}),e.jsxs("div",{className:"flex items-center gap-x-8",children:[e.jsxs("button",{type:"button",className:"-m-2.5 p-2.5 text-gray-400 hover:text-gray-300",children:[e.jsx("span",{className:"sr-only",children:"View notifications"}),e.jsx(b,{"aria-hidden":"true",className:"size-6"})]}),e.jsxs("a",{href:"#",className:"-m-1.5 p-1.5",children:[e.jsx("span",{className:"sr-only",children:"Your profile"}),e.jsx("img",{alt:"",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",className:"size-8 rounded-full bg-gray-800"})]})]})]})}),e.jsxs("div",{className:"mx-auto flex w-full max-w-7xl items-start gap-x-8 px-4 py-10 sm:px-6 lg:px-8",children:[e.jsx("aside",{className:"sticky top-8 hidden w-44 shrink-0 lg:block"}),e.jsx("main",{className:"flex-1"}),e.jsx("aside",{className:"sticky top-8 hidden w-96 shrink-0 xl:block"})]})]})}const q=`import { BellIcon } from '@heroicons/react/24/outline'

export default function Example() {
  return (
    <div className="flex min-h-full flex-col">
      <header className="shrink-0 border-b border-gray-200 bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <img
            alt="Your Company"
            src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
            className="h-8 w-auto"
          />
          <div className="flex items-center gap-x-8">
            <button type="button" className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-300">
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="size-6" />
            </button>
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your profile</span>
              <img
                alt=""
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="size-8 rounded-full bg-gray-800"
              />
            </a>
          </div>
        </div>
      </header>

      <div className="mx-auto flex w-full max-w-7xl items-start gap-x-8 px-4 py-10 sm:px-6 lg:px-8">
        <aside className="sticky top-8 hidden w-44 shrink-0 lg:block">{/* Left column area */}</aside>

        <main className="flex-1">{/* Main area */}</main>

        <aside className="sticky top-8 hidden w-96 shrink-0 xl:block">{/* Right column area */}</aside>
      </div>
    </div>
  )
}
`,k=[{name:"Dashboard",href:"#",icon:x,current:!0},{name:"Team",href:"#",icon:h,current:!1},{name:"Projects",href:"#",icon:p,current:!1},{name:"Calendar",href:"#",icon:f,current:!1},{name:"Documents",href:"#",icon:g,current:!1},{name:"Reports",href:"#",icon:u,current:!1}];function C(...r){return r.filter(Boolean).join(" ")}function J(){const[r,s]=t.useState(!1);return e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsxs(n,{open:r,onClose:s,className:"relative z-50 lg:hidden",children:[e.jsx(o,{transition:!0,className:"fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-closed:opacity-0"}),e.jsx("div",{className:"fixed inset-0 flex",children:e.jsxs(c,{transition:!0,className:"relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-closed:-translate-x-full",children:[e.jsx(d,{children:e.jsx("div",{className:"absolute top-0 left-full flex w-16 justify-center pt-5 duration-300 ease-in-out data-closed:opacity-0",children:e.jsxs("button",{type:"button",onClick:()=>s(!1),className:"-m-2.5 p-2.5",children:[e.jsx("span",{className:"sr-only",children:"Close sidebar"}),e.jsx(m,{"aria-hidden":"true",className:"size-6 text-white"})]})})}),e.jsxs("div",{className:"flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-2 ring-1 ring-white/10",children:[e.jsx("div",{className:"flex h-16 shrink-0 items-center",children:e.jsx("img",{alt:"Your Company",src:"https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500",className:"h-8 w-auto"})}),e.jsx("nav",{className:"flex flex-1 flex-col",children:e.jsx("ul",{role:"list",className:"-mx-2 flex-1 space-y-1",children:k.map(a=>e.jsx("li",{children:e.jsxs("a",{href:a.href,className:C(a.current?"bg-gray-800 text-white":"text-gray-400 hover:bg-gray-800 hover:text-white","group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"),children:[e.jsx(a.icon,{"aria-hidden":"true",className:"size-6 shrink-0"}),a.name]})},a.name))})})]})]})})]}),e.jsxs("div",{className:"hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-50 lg:block lg:w-20 lg:overflow-y-auto lg:bg-gray-900 lg:pb-4",children:[e.jsx("div",{className:"flex h-16 shrink-0 items-center justify-center",children:e.jsx("img",{alt:"Your Company",src:"https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500",className:"h-8 w-auto"})}),e.jsx("nav",{className:"mt-8",children:e.jsx("ul",{role:"list",className:"flex flex-col items-center space-y-1",children:k.map(a=>e.jsx("li",{children:e.jsxs("a",{href:a.href,className:C(a.current?"bg-gray-800 text-white":"text-gray-400 hover:bg-gray-800 hover:text-white","group flex gap-x-3 rounded-md p-3 text-sm/6 font-semibold"),children:[e.jsx(a.icon,{"aria-hidden":"true",className:"size-6 shrink-0"}),e.jsx("span",{className:"sr-only",children:a.name})]})},a.name))})})]}),e.jsxs("div",{className:"sticky top-0 z-40 flex items-center gap-x-6 bg-gray-900 px-4 py-4 shadow-xs sm:px-6 lg:hidden",children:[e.jsxs("button",{type:"button",onClick:()=>s(!0),className:"-m-2.5 p-2.5 text-gray-400 lg:hidden",children:[e.jsx("span",{className:"sr-only",children:"Open sidebar"}),e.jsx(y,{"aria-hidden":"true",className:"size-6"})]}),e.jsx("div",{className:"flex-1 text-sm/6 font-semibold text-white",children:"Dashboard"}),e.jsxs("a",{href:"#",children:[e.jsx("span",{className:"sr-only",children:"Your profile"}),e.jsx("img",{alt:"",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",className:"size-8 rounded-full bg-gray-800"})]})]}),e.jsx("main",{className:"lg:pl-20",children:e.jsx("div",{className:"xl:pl-96",children:e.jsx("div",{className:"px-4 py-10 sm:px-6 lg:px-8 lg:py-6"})})}),e.jsx("aside",{className:"fixed inset-y-0 left-20 hidden w-96 overflow-y-auto border-r border-gray-200 px-4 py-6 sm:px-6 lg:px-8 xl:block"})]})})}const Q=`'use client'

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, TransitionChild } from '@headlessui/react'
import {
  Bars3Icon,
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
  { name: 'Team', href: '#', icon: UsersIcon, current: false },
  { name: 'Projects', href: '#', icon: FolderIcon, current: false },
  { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
  { name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false },
  { name: 'Reports', href: '#', icon: ChartPieIcon, current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      {/*
        This example requires updating your template:

        \`\`\`
        <html class="h-full bg-white">
        <body class="h-full">
        \`\`\`
      */}
      <div>
        <Dialog open={sidebarOpen} onClose={setSidebarOpen} className="relative z-50 lg:hidden">
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-closed:opacity-0"
          />

          <div className="fixed inset-0 flex">
            <DialogPanel
              transition
              className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-closed:-translate-x-full"
            >
              <TransitionChild>
                <div className="absolute top-0 left-full flex w-16 justify-center pt-5 duration-300 ease-in-out data-closed:opacity-0">
                  <button type="button" onClick={() => setSidebarOpen(false)} className="-m-2.5 p-2.5">
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon aria-hidden="true" className="size-6 text-white" />
                  </button>
                </div>
              </TransitionChild>

              <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-2 ring-1 ring-white/10">
                <div className="flex h-16 shrink-0 items-center">
                  <img
                    alt="Your Company"
                    src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                    className="h-8 w-auto"
                  />
                </div>
                <nav className="flex flex-1 flex-col">
                  <ul role="list" className="-mx-2 flex-1 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-gray-800 text-white'
                              : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                            'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                          )}
                        >
                          <item.icon aria-hidden="true" className="size-6 shrink-0" />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </div>
        </Dialog>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-50 lg:block lg:w-20 lg:overflow-y-auto lg:bg-gray-900 lg:pb-4">
          <div className="flex h-16 shrink-0 items-center justify-center">
            <img
              alt="Your Company"
              src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
              className="h-8 w-auto"
            />
          </div>
          <nav className="mt-8">
            <ul role="list" className="flex flex-col items-center space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-800 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                      'group flex gap-x-3 rounded-md p-3 text-sm/6 font-semibold',
                    )}
                  >
                    <item.icon aria-hidden="true" className="size-6 shrink-0" />
                    <span className="sr-only">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-gray-900 px-4 py-4 shadow-xs sm:px-6 lg:hidden">
          <button type="button" onClick={() => setSidebarOpen(true)} className="-m-2.5 p-2.5 text-gray-400 lg:hidden">
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
          <div className="flex-1 text-sm/6 font-semibold text-white">Dashboard</div>
          <a href="#">
            <span className="sr-only">Your profile</span>
            <img
              alt=""
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              className="size-8 rounded-full bg-gray-800"
            />
          </a>
        </div>

        <main className="lg:pl-20">
          <div className="xl:pl-96">
            <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-6">{/* Main area */}</div>
          </div>
        </main>

        <aside className="fixed inset-y-0 left-20 hidden w-96 overflow-y-auto border-r border-gray-200 px-4 py-6 sm:px-6 lg:px-8 xl:block">
          {/* Secondary column (hidden on smaller screens) */}
        </aside>
      </div>
    </>
  )
}
`,z=[{name:"Dashboard",href:"#",icon:x,current:!0},{name:"Team",href:"#",icon:h,current:!1},{name:"Projects",href:"#",icon:p,current:!1},{name:"Calendar",href:"#",icon:f,current:!1},{name:"Documents",href:"#",icon:g,current:!1},{name:"Reports",href:"#",icon:u,current:!1}],L=[{name:"Your profile",href:"#"},{name:"Sign out",href:"#"}];function D(...r){return r.filter(Boolean).join(" ")}function U(){const[r,s]=t.useState(!1);return e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsxs(n,{open:r,onClose:s,className:"relative z-50 lg:hidden",children:[e.jsx(o,{transition:!0,className:"fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-closed:opacity-0"}),e.jsx("div",{className:"fixed inset-0 flex",children:e.jsxs(c,{transition:!0,className:"relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-closed:-translate-x-full",children:[e.jsx(d,{children:e.jsx("div",{className:"absolute top-0 left-full flex w-16 justify-center pt-5 duration-300 ease-in-out data-closed:opacity-0",children:e.jsxs("button",{type:"button",onClick:()=>s(!1),className:"-m-2.5 p-2.5",children:[e.jsx("span",{className:"sr-only",children:"Close sidebar"}),e.jsx(m,{"aria-hidden":"true",className:"size-6 text-white"})]})})}),e.jsxs("div",{className:"flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-2 ring-1 ring-white/10",children:[e.jsx("div",{className:"flex h-16 shrink-0 items-center",children:e.jsx("img",{alt:"Your Company",src:"https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500",className:"h-8 w-auto"})}),e.jsx("nav",{className:"flex flex-1 flex-col",children:e.jsx("ul",{role:"list",className:"-mx-2 flex-1 space-y-1",children:z.map(a=>e.jsx("li",{children:e.jsxs("a",{href:a.href,className:D(a.current?"bg-gray-800 text-white":"text-gray-400 hover:bg-gray-800 hover:text-white","group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"),children:[e.jsx(a.icon,{"aria-hidden":"true",className:"size-6 shrink-0"}),a.name]})},a.name))})})]})]})})]}),e.jsxs("div",{className:"hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-50 lg:block lg:w-20 lg:overflow-y-auto lg:bg-gray-900 lg:pb-4",children:[e.jsx("div",{className:"flex h-16 shrink-0 items-center justify-center",children:e.jsx("img",{alt:"Your Company",src:"https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500",className:"h-8 w-auto"})}),e.jsx("nav",{className:"mt-8",children:e.jsx("ul",{role:"list",className:"flex flex-col items-center space-y-1",children:z.map(a=>e.jsx("li",{children:e.jsxs("a",{href:a.href,className:D(a.current?"bg-gray-800 text-white":"text-gray-400 hover:bg-gray-800 hover:text-white","group flex gap-x-3 rounded-md p-3 text-sm/6 font-semibold"),children:[e.jsx(a.icon,{"aria-hidden":"true",className:"size-6 shrink-0"}),e.jsx("span",{className:"sr-only",children:a.name})]})},a.name))})})]}),e.jsxs("div",{className:"lg:pl-20",children:[e.jsxs("div",{className:"sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-xs sm:gap-x-6 sm:px-6 lg:px-8",children:[e.jsxs("button",{type:"button",onClick:()=>s(!0),className:"-m-2.5 p-2.5 text-gray-700 lg:hidden",children:[e.jsx("span",{className:"sr-only",children:"Open sidebar"}),e.jsx(y,{"aria-hidden":"true",className:"size-6"})]}),e.jsx("div",{"aria-hidden":"true",className:"h-6 w-px bg-gray-900/10 lg:hidden"}),e.jsxs("div",{className:"flex flex-1 gap-x-4 self-stretch lg:gap-x-6",children:[e.jsxs("form",{action:"#",method:"GET",className:"grid flex-1 grid-cols-1",children:[e.jsx("input",{name:"search",type:"search",placeholder:"Search","aria-label":"Search",className:"col-start-1 row-start-1 block size-full bg-white pl-8 text-base text-gray-900 outline-hidden placeholder:text-gray-400 sm:text-sm/6"}),e.jsx(O,{"aria-hidden":"true",className:"pointer-events-none col-start-1 row-start-1 size-5 self-center text-gray-400"})]}),e.jsxs("div",{className:"flex items-center gap-x-4 lg:gap-x-6",children:[e.jsxs("button",{type:"button",className:"-m-2.5 p-2.5 text-gray-400 hover:text-gray-500",children:[e.jsx("span",{className:"sr-only",children:"View notifications"}),e.jsx(b,{"aria-hidden":"true",className:"size-6"})]}),e.jsx("div",{"aria-hidden":"true",className:"hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"}),e.jsxs(S,{as:"div",className:"relative",children:[e.jsxs(B,{className:"-m-1.5 flex items-center p-1.5",children:[e.jsx("span",{className:"sr-only",children:"Open user menu"}),e.jsx("img",{alt:"",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",className:"size-8 rounded-full bg-gray-50"}),e.jsxs("span",{className:"hidden lg:flex lg:items-center",children:[e.jsx("span",{"aria-hidden":"true",className:"ml-4 text-sm/6 font-semibold text-gray-900",children:"Tom Cook"}),e.jsx(T,{"aria-hidden":"true",className:"ml-2 size-5 text-gray-400"})]})]}),e.jsx(M,{transition:!0,className:"absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 ring-1 shadow-lg ring-gray-900/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in",children:L.map(a=>e.jsx(Y,{children:e.jsx("a",{href:a.href,className:"block px-3 py-1 text-sm/6 text-gray-900 data-focus:bg-gray-50 data-focus:outline-hidden",children:a.name})},a.name))})]})]})]})]}),e.jsx("main",{className:"xl:pl-96",children:e.jsx("div",{className:"px-4 py-10 sm:px-6 lg:px-8 lg:py-6"})})]}),e.jsx("aside",{className:"fixed top-16 bottom-0 left-20 hidden w-96 overflow-y-auto border-r border-gray-200 px-4 py-6 sm:px-6 lg:px-8 xl:block"})]})})}const X=`'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
} from '@headlessui/react'
import {
  Bars3Icon,
  BellIcon,
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'

const navigation = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
  { name: 'Team', href: '#', icon: UsersIcon, current: false },
  { name: 'Projects', href: '#', icon: FolderIcon, current: false },
  { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
  { name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false },
  { name: 'Reports', href: '#', icon: ChartPieIcon, current: false },
]
const userNavigation = [
  { name: 'Your profile', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      {/*
        This example requires updating your template:

        \`\`\`
        <html class="h-full bg-white">
        <body class="h-full">
        \`\`\`
      */}
      <div>
        <Dialog open={sidebarOpen} onClose={setSidebarOpen} className="relative z-50 lg:hidden">
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-closed:opacity-0"
          />

          <div className="fixed inset-0 flex">
            <DialogPanel
              transition
              className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-closed:-translate-x-full"
            >
              <TransitionChild>
                <div className="absolute top-0 left-full flex w-16 justify-center pt-5 duration-300 ease-in-out data-closed:opacity-0">
                  <button type="button" onClick={() => setSidebarOpen(false)} className="-m-2.5 p-2.5">
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon aria-hidden="true" className="size-6 text-white" />
                  </button>
                </div>
              </TransitionChild>

              <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-2 ring-1 ring-white/10">
                <div className="flex h-16 shrink-0 items-center">
                  <img
                    alt="Your Company"
                    src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                    className="h-8 w-auto"
                  />
                </div>
                <nav className="flex flex-1 flex-col">
                  <ul role="list" className="-mx-2 flex-1 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-gray-800 text-white'
                              : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                            'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                          )}
                        >
                          <item.icon aria-hidden="true" className="size-6 shrink-0" />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </div>
        </Dialog>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-50 lg:block lg:w-20 lg:overflow-y-auto lg:bg-gray-900 lg:pb-4">
          <div className="flex h-16 shrink-0 items-center justify-center">
            <img
              alt="Your Company"
              src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
              className="h-8 w-auto"
            />
          </div>
          <nav className="mt-8">
            <ul role="list" className="flex flex-col items-center space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-800 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                      'group flex gap-x-3 rounded-md p-3 text-sm/6 font-semibold',
                    )}
                  >
                    <item.icon aria-hidden="true" className="size-6 shrink-0" />
                    <span className="sr-only">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="lg:pl-20">
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-xs sm:gap-x-6 sm:px-6 lg:px-8">
            <button type="button" onClick={() => setSidebarOpen(true)} className="-m-2.5 p-2.5 text-gray-700 lg:hidden">
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>

            {/* Separator */}
            <div aria-hidden="true" className="h-6 w-px bg-gray-900/10 lg:hidden" />

            <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
              <form action="#" method="GET" className="grid flex-1 grid-cols-1">
                <input
                  name="search"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  className="col-start-1 row-start-1 block size-full bg-white pl-8 text-base text-gray-900 outline-hidden placeholder:text-gray-400 sm:text-sm/6"
                />
                <MagnifyingGlassIcon
                  aria-hidden="true"
                  className="pointer-events-none col-start-1 row-start-1 size-5 self-center text-gray-400"
                />
              </form>
              <div className="flex items-center gap-x-4 lg:gap-x-6">
                <button type="button" className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
                  <span className="sr-only">View notifications</span>
                  <BellIcon aria-hidden="true" className="size-6" />
                </button>

                {/* Separator */}
                <div aria-hidden="true" className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10" />

                {/* Profile dropdown */}
                <Menu as="div" className="relative">
                  <MenuButton className="-m-1.5 flex items-center p-1.5">
                    <span className="sr-only">Open user menu</span>
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      className="size-8 rounded-full bg-gray-50"
                    />
                    <span className="hidden lg:flex lg:items-center">
                      <span aria-hidden="true" className="ml-4 text-sm/6 font-semibold text-gray-900">
                        Tom Cook
                      </span>
                      <ChevronDownIcon aria-hidden="true" className="ml-2 size-5 text-gray-400" />
                    </span>
                  </MenuButton>
                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 ring-1 shadow-lg ring-gray-900/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                  >
                    {userNavigation.map((item) => (
                      <MenuItem key={item.name}>
                        <a
                          href={item.href}
                          className="block px-3 py-1 text-sm/6 text-gray-900 data-focus:bg-gray-50 data-focus:outline-hidden"
                        >
                          {item.name}
                        </a>
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>
              </div>
            </div>
          </div>

          <main className="xl:pl-96">
            <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-6">{/* Main area */}</div>
          </main>
        </div>

        <aside className="fixed top-16 bottom-0 left-20 hidden w-96 overflow-y-auto border-r border-gray-200 px-4 py-6 sm:px-6 lg:px-8 xl:block">
          {/* Secondary column (hidden on smaller screens) */}
        </aside>
      </div>
    </>
  )
}
`,he=()=>{const r=[{id:"01",name:"Full-width three-column",component:e.jsx(F,{}),raw:H},{id:"02",name:"Full-width secondary column on right",component:e.jsx(E,{}),raw:P},{id:"03",name:"Constrained three column",component:e.jsx(R,{}),raw:W},{id:"04",name:"Constrained with sticky columns",component:e.jsx($,{}),raw:q},{id:"05",name:"Full-width with narrow sidebar",component:e.jsx(J,{}),raw:Q},{id:"06",name:"Full-width with narrow sidebar and header",component:e.jsx(U,{}),raw:X}];return e.jsx("div",{className:"space-y-10 pb-20",children:r.map(s=>e.jsxs("section",{children:[e.jsxs("h2",{className:"mb-4 text-lg font-bold text-gray-800",children:[s.id,". ",s.name]}),e.jsx(I,{name:s.name,code:s.raw,children:s.component})]},s.id))})};export{he as default};
