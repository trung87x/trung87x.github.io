import{r as c,j as e,h as d,L as m,z as x,O as g}from"./index-CvCVbuS9.js";import{P as V}from"./PreviewWrapper-TzFvRoPZ.js";import{F as h}from"./XMarkIcon-DRrKznFm.js";import{F as u,a as f}from"./HomeIcon-DYfG8a2o.js";import{F as p}from"./UsersIcon-BtfmJCZO.js";import{F as y}from"./FolderIcon-BaDjF-i0.js";import{F as b}from"./CalendarIcon-BGNgCXOy.js";import{F as N}from"./ChartPieIcon-0b6DQGNv.js";import{F as v}from"./Bars3Icon-DlixG59f.js";import{F as o}from"./Cog6ToothIcon-DnTX8lOB.js";import{F as C}from"./MagnifyingGlassIcon-Tr5kZRgo.js";import{F as I}from"./BellIcon-Celbp3Xl.js";import{F as D}from"./ChevronDownIcon-CpWKsJQ8.js";import{l as S,f as T,y as O,g as B}from"./menu-DqpGavi0.js";import"./floating-CjydGm1Z.js";import"./element-movement-BT6A7GGi.js";import"./bugs-qQ_SbDk4.js";import"./use-resolve-button-type-J0J8N5g4.js";import"./use-text-value-CB9rzUUM.js";import"./use-tree-walker-_f7mgbza.js";import"./label-CY_Q6YdE.js";const M=[{name:"Dashboard",href:"#",icon:u,current:!0},{name:"Team",href:"#",icon:p,current:!1},{name:"Projects",href:"#",icon:y,current:!1},{name:"Calendar",href:"#",icon:b,current:!1},{name:"Documents",href:"#",icon:f,current:!1},{name:"Reports",href:"#",icon:N,current:!1}],Y=[{id:1,name:"Heroicons",href:"#",initial:"H",current:!1},{id:2,name:"Tailwind Labs",href:"#",initial:"T",current:!1},{id:3,name:"Workcation",href:"#",initial:"W",current:!1}];function i(...t){return t.filter(Boolean).join(" ")}function A(){const[t,s]=c.useState(!1);return e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsxs(d,{open:t,onClose:s,className:"relative z-50 lg:hidden",children:[e.jsx(m,{transition:!0,className:"fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-closed:opacity-0"}),e.jsx("div",{className:"fixed inset-0 flex",children:e.jsxs(x,{transition:!0,className:"relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-closed:-translate-x-full",children:[e.jsx(g,{children:e.jsx("div",{className:"absolute top-0 left-full flex w-16 justify-center pt-5 duration-300 ease-in-out data-closed:opacity-0",children:e.jsxs("button",{type:"button",onClick:()=>s(!1),className:"-m-2.5 p-2.5",children:[e.jsx("span",{className:"sr-only",children:"Close sidebar"}),e.jsx(h,{"aria-hidden":"true",className:"size-6 text-white"})]})})}),e.jsxs("div",{className:"flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2",children:[e.jsx("div",{className:"flex h-16 shrink-0 items-center",children:e.jsx("img",{alt:"Your Company",src:"https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600",className:"h-8 w-auto"})}),e.jsx("nav",{className:"flex flex-1 flex-col",children:e.jsxs("ul",{role:"list",className:"flex flex-1 flex-col gap-y-7",children:[e.jsx("li",{children:e.jsx("ul",{role:"list",className:"-mx-2 space-y-1",children:M.map(a=>e.jsx("li",{children:e.jsxs("a",{href:a.href,className:i(a.current?"bg-gray-50 text-indigo-600":"text-gray-700 hover:bg-gray-50 hover:text-indigo-600","group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"),children:[e.jsx(a.icon,{"aria-hidden":"true",className:i(a.current?"text-indigo-600":"text-gray-400 group-hover:text-indigo-600","size-6 shrink-0")}),a.name]})},a.name))})}),e.jsxs("li",{children:[e.jsx("div",{className:"text-xs/6 font-semibold text-gray-400",children:"Your teams"}),e.jsx("ul",{role:"list",className:"-mx-2 mt-2 space-y-1",children:Y.map(a=>e.jsx("li",{children:e.jsxs("a",{href:a.href,className:i(a.current?"bg-gray-50 text-indigo-600":"text-gray-700 hover:bg-gray-50 hover:text-indigo-600","group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"),children:[e.jsx("span",{className:i(a.current?"border-indigo-600 text-indigo-600":"border-gray-200 text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600","flex size-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium"),children:a.initial}),e.jsx("span",{className:"truncate",children:a.name})]})},a.name))})]})]})})]})]})})]}),e.jsx("div",{className:"hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col",children:e.jsxs("div",{className:"flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6",children:[e.jsx("div",{className:"flex h-16 shrink-0 items-center",children:e.jsx("img",{alt:"Your Company",src:"https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600",className:"h-8 w-auto"})}),e.jsx("nav",{className:"flex flex-1 flex-col",children:e.jsxs("ul",{role:"list",className:"flex flex-1 flex-col gap-y-7",children:[e.jsx("li",{children:e.jsx("ul",{role:"list",className:"-mx-2 space-y-1",children:M.map(a=>e.jsx("li",{children:e.jsxs("a",{href:a.href,className:i(a.current?"bg-gray-50 text-indigo-600":"text-gray-700 hover:bg-gray-50 hover:text-indigo-600","group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"),children:[e.jsx(a.icon,{"aria-hidden":"true",className:i(a.current?"text-indigo-600":"text-gray-400 group-hover:text-indigo-600","size-6 shrink-0")}),a.name]})},a.name))})}),e.jsxs("li",{children:[e.jsx("div",{className:"text-xs/6 font-semibold text-gray-400",children:"Your teams"}),e.jsx("ul",{role:"list",className:"-mx-2 mt-2 space-y-1",children:Y.map(a=>e.jsx("li",{children:e.jsxs("a",{href:a.href,className:i(a.current?"bg-gray-50 text-indigo-600":"text-gray-700 hover:bg-gray-50 hover:text-indigo-600","group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"),children:[e.jsx("span",{className:i(a.current?"border-indigo-600 text-indigo-600":"border-gray-200 text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600","flex size-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium"),children:a.initial}),e.jsx("span",{className:"truncate",children:a.name})]})},a.name))})]}),e.jsx("li",{className:"-mx-6 mt-auto",children:e.jsxs("a",{href:"#",className:"flex items-center gap-x-4 px-6 py-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-50",children:[e.jsx("img",{alt:"",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",className:"size-8 rounded-full bg-gray-50"}),e.jsx("span",{className:"sr-only",children:"Your profile"}),e.jsx("span",{"aria-hidden":"true",children:"Tom Cook"})]})})]})})]})}),e.jsxs("div",{className:"sticky top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-xs sm:px-6 lg:hidden",children:[e.jsxs("button",{type:"button",onClick:()=>s(!0),className:"-m-2.5 p-2.5 text-gray-700 lg:hidden",children:[e.jsx("span",{className:"sr-only",children:"Open sidebar"}),e.jsx(v,{"aria-hidden":"true",className:"size-6"})]}),e.jsx("div",{className:"flex-1 text-sm/6 font-semibold text-gray-900",children:"Dashboard"}),e.jsxs("a",{href:"#",children:[e.jsx("span",{className:"sr-only",children:"Your profile"}),e.jsx("img",{alt:"",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",className:"size-8 rounded-full bg-gray-50"})]})]}),e.jsx("main",{className:"py-10 lg:pl-72",children:e.jsx("div",{className:"px-4 sm:px-6 lg:px-8"})})]})})}const K=`'use client'

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

        <main className="py-10 lg:pl-72">
          <div className="px-4 sm:px-6 lg:px-8">{/* Your content */}</div>
        </main>
      </div>
    </>
  )
}
`,H=[{name:"Dashboard",href:"#",icon:u,current:!0},{name:"Team",href:"#",icon:p,current:!1},{name:"Projects",href:"#",icon:y,current:!1},{name:"Calendar",href:"#",icon:b,current:!1},{name:"Documents",href:"#",icon:f,current:!1},{name:"Reports",href:"#",icon:N,current:!1}],W=[{id:1,name:"Heroicons",href:"#",initial:"H",current:!1},{id:2,name:"Tailwind Labs",href:"#",initial:"T",current:!1},{id:3,name:"Workcation",href:"#",initial:"W",current:!1}];function k(...t){return t.filter(Boolean).join(" ")}function Z(){const[t,s]=c.useState(!1);return e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsxs(d,{open:t,onClose:s,className:"relative z-50 lg:hidden",children:[e.jsx(m,{transition:!0,className:"fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-closed:opacity-0"}),e.jsx("div",{className:"fixed inset-0 flex",children:e.jsxs(x,{transition:!0,className:"relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-closed:-translate-x-full",children:[e.jsx(g,{children:e.jsx("div",{className:"absolute top-0 left-full flex w-16 justify-center pt-5 duration-300 ease-in-out data-closed:opacity-0",children:e.jsxs("button",{type:"button",onClick:()=>s(!1),className:"-m-2.5 p-2.5",children:[e.jsx("span",{className:"sr-only",children:"Close sidebar"}),e.jsx(h,{"aria-hidden":"true",className:"size-6 text-white"})]})})}),e.jsxs("div",{className:"flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-2 ring-1 ring-white/10",children:[e.jsx("div",{className:"flex h-16 shrink-0 items-center",children:e.jsx("img",{alt:"Your Company",src:"https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500",className:"h-8 w-auto"})}),e.jsx("nav",{className:"flex flex-1 flex-col",children:e.jsxs("ul",{role:"list",className:"flex flex-1 flex-col gap-y-7",children:[e.jsx("li",{children:e.jsx("ul",{role:"list",className:"-mx-2 space-y-1",children:H.map(a=>e.jsx("li",{children:e.jsxs("a",{href:a.href,className:k(a.current?"bg-gray-800 text-white":"text-gray-400 hover:bg-gray-800 hover:text-white","group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"),children:[e.jsx(a.icon,{"aria-hidden":"true",className:"size-6 shrink-0"}),a.name]})},a.name))})}),e.jsxs("li",{children:[e.jsx("div",{className:"text-xs/6 font-semibold text-gray-400",children:"Your teams"}),e.jsx("ul",{role:"list",className:"-mx-2 mt-2 space-y-1",children:W.map(a=>e.jsx("li",{children:e.jsxs("a",{href:a.href,className:k(a.current?"bg-gray-800 text-white":"text-gray-400 hover:bg-gray-800 hover:text-white","group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"),children:[e.jsx("span",{className:"flex size-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white",children:a.initial}),e.jsx("span",{className:"truncate",children:a.name})]})},a.name))})]})]})})]})]})})]}),e.jsx("div",{className:"hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col",children:e.jsxs("div",{className:"flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6",children:[e.jsx("div",{className:"flex h-16 shrink-0 items-center",children:e.jsx("img",{alt:"Your Company",src:"https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500",className:"h-8 w-auto"})}),e.jsx("nav",{className:"flex flex-1 flex-col",children:e.jsxs("ul",{role:"list",className:"flex flex-1 flex-col gap-y-7",children:[e.jsx("li",{children:e.jsx("ul",{role:"list",className:"-mx-2 space-y-1",children:H.map(a=>e.jsx("li",{children:e.jsxs("a",{href:a.href,className:k(a.current?"bg-gray-800 text-white":"text-gray-400 hover:bg-gray-800 hover:text-white","group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"),children:[e.jsx(a.icon,{"aria-hidden":"true",className:"size-6 shrink-0"}),a.name]})},a.name))})}),e.jsxs("li",{children:[e.jsx("div",{className:"text-xs/6 font-semibold text-gray-400",children:"Your teams"}),e.jsx("ul",{role:"list",className:"-mx-2 mt-2 space-y-1",children:W.map(a=>e.jsx("li",{children:e.jsxs("a",{href:a.href,className:k(a.current?"bg-gray-800 text-white":"text-gray-400 hover:bg-gray-800 hover:text-white","group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"),children:[e.jsx("span",{className:"flex size-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white",children:a.initial}),e.jsx("span",{className:"truncate",children:a.name})]})},a.name))})]}),e.jsx("li",{className:"-mx-6 mt-auto",children:e.jsxs("a",{href:"#",className:"flex items-center gap-x-4 px-6 py-3 text-sm/6 font-semibold text-white hover:bg-gray-800",children:[e.jsx("img",{alt:"",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",className:"size-8 rounded-full bg-gray-800"}),e.jsx("span",{className:"sr-only",children:"Your profile"}),e.jsx("span",{"aria-hidden":"true",children:"Tom Cook"})]})})]})})]})}),e.jsxs("div",{className:"sticky top-0 z-40 flex items-center gap-x-6 bg-gray-900 px-4 py-4 shadow-xs sm:px-6 lg:hidden",children:[e.jsxs("button",{type:"button",onClick:()=>s(!0),className:"-m-2.5 p-2.5 text-gray-400 lg:hidden",children:[e.jsx("span",{className:"sr-only",children:"Open sidebar"}),e.jsx(v,{"aria-hidden":"true",className:"size-6"})]}),e.jsx("div",{className:"flex-1 text-sm/6 font-semibold text-white",children:"Dashboard"}),e.jsxs("a",{href:"#",children:[e.jsx("span",{className:"sr-only",children:"Your profile"}),e.jsx("img",{alt:"",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",className:"size-8 rounded-full bg-gray-800"})]})]}),e.jsx("main",{className:"py-10 lg:pl-72",children:e.jsx("div",{className:"px-4 sm:px-6 lg:px-8"})})]})})}const _=`'use client'

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
              <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-2 ring-1 ring-white/10">
                <div className="flex h-16 shrink-0 items-center">
                  <img
                    alt="Your Company"
                    src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
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
                                  ? 'bg-gray-800 text-white'
                                  : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                                'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                              )}
                            >
                              <span className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
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
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6">
            <div className="flex h-16 shrink-0 items-center">
              <img
                alt="Your Company"
                src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
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
                              ? 'bg-gray-800 text-white'
                              : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                            'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                          )}
                        >
                          <span className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
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
                    className="flex items-center gap-x-4 px-6 py-3 text-sm/6 font-semibold text-white hover:bg-gray-800"
                  >
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      className="size-8 rounded-full bg-gray-800"
                    />
                    <span className="sr-only">Your profile</span>
                    <span aria-hidden="true">Tom Cook</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
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

        <main className="py-10 lg:pl-72">
          <div className="px-4 sm:px-6 lg:px-8">{/* Your content */}</div>
        </main>
      </div>
    </>
  )
}
`,P=[{name:"Dashboard",href:"#",icon:u,current:!0},{name:"Team",href:"#",icon:p,current:!1},{name:"Projects",href:"#",icon:y,current:!1},{name:"Calendar",href:"#",icon:b,current:!1},{name:"Documents",href:"#",icon:f,current:!1},{name:"Reports",href:"#",icon:N,current:!1}],E=[{id:1,name:"Heroicons",href:"#",initial:"H",current:!1},{id:2,name:"Tailwind Labs",href:"#",initial:"T",current:!1},{id:3,name:"Workcation",href:"#",initial:"W",current:!1}],ee=[{name:"Your profile",href:"#"},{name:"Sign out",href:"#"}];function r(...t){return t.filter(Boolean).join(" ")}function ae(){const[t,s]=c.useState(!1);return e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsxs(d,{open:t,onClose:s,className:"relative z-50 lg:hidden",children:[e.jsx(m,{transition:!0,className:"fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-closed:opacity-0"}),e.jsx("div",{className:"fixed inset-0 flex",children:e.jsxs(x,{transition:!0,className:"relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-closed:-translate-x-full",children:[e.jsx(g,{children:e.jsx("div",{className:"absolute top-0 left-full flex w-16 justify-center pt-5 duration-300 ease-in-out data-closed:opacity-0",children:e.jsxs("button",{type:"button",onClick:()=>s(!1),className:"-m-2.5 p-2.5",children:[e.jsx("span",{className:"sr-only",children:"Close sidebar"}),e.jsx(h,{"aria-hidden":"true",className:"size-6 text-white"})]})})}),e.jsxs("div",{className:"flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4",children:[e.jsx("div",{className:"flex h-16 shrink-0 items-center",children:e.jsx("img",{alt:"Your Company",src:"https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600",className:"h-8 w-auto"})}),e.jsx("nav",{className:"flex flex-1 flex-col",children:e.jsxs("ul",{role:"list",className:"flex flex-1 flex-col gap-y-7",children:[e.jsx("li",{children:e.jsx("ul",{role:"list",className:"-mx-2 space-y-1",children:P.map(a=>e.jsx("li",{children:e.jsxs("a",{href:a.href,className:r(a.current?"bg-gray-50 text-indigo-600":"text-gray-700 hover:bg-gray-50 hover:text-indigo-600","group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"),children:[e.jsx(a.icon,{"aria-hidden":"true",className:r(a.current?"text-indigo-600":"text-gray-400 group-hover:text-indigo-600","size-6 shrink-0")}),a.name]})},a.name))})}),e.jsxs("li",{children:[e.jsx("div",{className:"text-xs/6 font-semibold text-gray-400",children:"Your teams"}),e.jsx("ul",{role:"list",className:"-mx-2 mt-2 space-y-1",children:E.map(a=>e.jsx("li",{children:e.jsxs("a",{href:a.href,className:r(a.current?"bg-gray-50 text-indigo-600":"text-gray-700 hover:bg-gray-50 hover:text-indigo-600","group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"),children:[e.jsx("span",{className:r(a.current?"border-indigo-600 text-indigo-600":"border-gray-200 text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600","flex size-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium"),children:a.initial}),e.jsx("span",{className:"truncate",children:a.name})]})},a.name))})]}),e.jsx("li",{className:"mt-auto",children:e.jsxs("a",{href:"#",className:"group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-700 hover:bg-gray-50 hover:text-indigo-600",children:[e.jsx(o,{"aria-hidden":"true",className:"size-6 shrink-0 text-gray-400 group-hover:text-indigo-600"}),"Settings"]})})]})})]})]})})]}),e.jsx("div",{className:"hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col",children:e.jsxs("div",{className:"flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4",children:[e.jsx("div",{className:"flex h-16 shrink-0 items-center",children:e.jsx("img",{alt:"Your Company",src:"https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600",className:"h-8 w-auto"})}),e.jsx("nav",{className:"flex flex-1 flex-col",children:e.jsxs("ul",{role:"list",className:"flex flex-1 flex-col gap-y-7",children:[e.jsx("li",{children:e.jsx("ul",{role:"list",className:"-mx-2 space-y-1",children:P.map(a=>e.jsx("li",{children:e.jsxs("a",{href:a.href,className:r(a.current?"bg-gray-50 text-indigo-600":"text-gray-700 hover:bg-gray-50 hover:text-indigo-600","group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"),children:[e.jsx(a.icon,{"aria-hidden":"true",className:r(a.current?"text-indigo-600":"text-gray-400 group-hover:text-indigo-600","size-6 shrink-0")}),a.name]})},a.name))})}),e.jsxs("li",{children:[e.jsx("div",{className:"text-xs/6 font-semibold text-gray-400",children:"Your teams"}),e.jsx("ul",{role:"list",className:"-mx-2 mt-2 space-y-1",children:E.map(a=>e.jsx("li",{children:e.jsxs("a",{href:a.href,className:r(a.current?"bg-gray-50 text-indigo-600":"text-gray-700 hover:bg-gray-50 hover:text-indigo-600","group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"),children:[e.jsx("span",{className:r(a.current?"border-indigo-600 text-indigo-600":"border-gray-200 text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600","flex size-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium"),children:a.initial}),e.jsx("span",{className:"truncate",children:a.name})]})},a.name))})]}),e.jsx("li",{className:"mt-auto",children:e.jsxs("a",{href:"#",className:"group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-700 hover:bg-gray-50 hover:text-indigo-600",children:[e.jsx(o,{"aria-hidden":"true",className:"size-6 shrink-0 text-gray-400 group-hover:text-indigo-600"}),"Settings"]})})]})})]})}),e.jsxs("div",{className:"lg:pl-72",children:[e.jsxs("div",{className:"sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-xs sm:gap-x-6 sm:px-6 lg:px-8",children:[e.jsxs("button",{type:"button",onClick:()=>s(!0),className:"-m-2.5 p-2.5 text-gray-700 lg:hidden",children:[e.jsx("span",{className:"sr-only",children:"Open sidebar"}),e.jsx(v,{"aria-hidden":"true",className:"size-6"})]}),e.jsx("div",{"aria-hidden":"true",className:"h-6 w-px bg-gray-200 lg:hidden"}),e.jsxs("div",{className:"flex flex-1 gap-x-4 self-stretch lg:gap-x-6",children:[e.jsxs("form",{action:"#",method:"GET",className:"grid flex-1 grid-cols-1",children:[e.jsx("input",{name:"search",type:"search",placeholder:"Search","aria-label":"Search",className:"col-start-1 row-start-1 block size-full bg-white pl-8 text-base text-gray-900 outline-hidden placeholder:text-gray-400 sm:text-sm/6"}),e.jsx(C,{"aria-hidden":"true",className:"pointer-events-none col-start-1 row-start-1 size-5 self-center text-gray-400"})]}),e.jsxs("div",{className:"flex items-center gap-x-4 lg:gap-x-6",children:[e.jsxs("button",{type:"button",className:"-m-2.5 p-2.5 text-gray-400 hover:text-gray-500",children:[e.jsx("span",{className:"sr-only",children:"View notifications"}),e.jsx(I,{"aria-hidden":"true",className:"size-6"})]}),e.jsx("div",{"aria-hidden":"true",className:"hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200"}),e.jsxs(S,{as:"div",className:"relative",children:[e.jsxs(T,{className:"-m-1.5 flex items-center p-1.5",children:[e.jsx("span",{className:"sr-only",children:"Open user menu"}),e.jsx("img",{alt:"",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",className:"size-8 rounded-full bg-gray-50"}),e.jsxs("span",{className:"hidden lg:flex lg:items-center",children:[e.jsx("span",{"aria-hidden":"true",className:"ml-4 text-sm/6 font-semibold text-gray-900",children:"Tom Cook"}),e.jsx(D,{"aria-hidden":"true",className:"ml-2 size-5 text-gray-400"})]})]}),e.jsx(O,{transition:!0,className:"absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 ring-1 shadow-lg ring-gray-900/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in",children:ee.map(a=>e.jsx(B,{children:e.jsx("a",{href:a.href,className:"block px-3 py-1 text-sm/6 text-gray-900 data-focus:bg-gray-50 data-focus:outline-hidden",children:a.name})},a.name))})]})]})]})]}),e.jsx("main",{className:"py-10",children:e.jsx("div",{className:"px-4 sm:px-6 lg:px-8"})})]})]})})}const se=`'use client'

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
  Cog6ToothIcon,
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
const teams = [
  { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
  { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
  { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
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
              {/* Sidebar component, swap this element with another sidebar if you like */}
              <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
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
                    <li className="mt-auto">
                      <a
                        href="#"
                        className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                      >
                        <Cog6ToothIcon
                          aria-hidden="true"
                          className="size-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                        />
                        Settings
                      </a>
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
          <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
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
                <li className="mt-auto">
                  <a
                    href="#"
                    className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                  >
                    <Cog6ToothIcon
                      aria-hidden="true"
                      className="size-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                    />
                    Settings
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="lg:pl-72">
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-xs sm:gap-x-6 sm:px-6 lg:px-8">
            <button type="button" onClick={() => setSidebarOpen(true)} className="-m-2.5 p-2.5 text-gray-700 lg:hidden">
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>

            {/* Separator */}
            <div aria-hidden="true" className="h-6 w-px bg-gray-200 lg:hidden" />

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
                <div aria-hidden="true" className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200" />

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

          <main className="py-10">
            <div className="px-4 sm:px-6 lg:px-8">{/* Your content */}</div>
          </main>
        </div>
      </div>
    </>
  )
}
`,F=[{name:"Dashboard",href:"#",icon:u,current:!0},{name:"Team",href:"#",icon:p,current:!1},{name:"Projects",href:"#",icon:y,current:!1},{name:"Calendar",href:"#",icon:b,current:!1},{name:"Documents",href:"#",icon:f,current:!1},{name:"Reports",href:"#",icon:N,current:!1}],$=[{id:1,name:"Heroicons",href:"#",initial:"H",current:!1},{id:2,name:"Tailwind Labs",href:"#",initial:"T",current:!1},{id:3,name:"Workcation",href:"#",initial:"W",current:!1}],te=[{name:"Your profile",href:"#"},{name:"Sign out",href:"#"}];function z(...t){return t.filter(Boolean).join(" ")}function ie(){const[t,s]=c.useState(!1);return e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsxs(d,{open:t,onClose:s,className:"relative z-50 lg:hidden",children:[e.jsx(m,{transition:!0,className:"fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-closed:opacity-0"}),e.jsx("div",{className:"fixed inset-0 flex",children:e.jsxs(x,{transition:!0,className:"relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-closed:-translate-x-full",children:[e.jsx(g,{children:e.jsx("div",{className:"absolute top-0 left-full flex w-16 justify-center pt-5 duration-300 ease-in-out data-closed:opacity-0",children:e.jsxs("button",{type:"button",onClick:()=>s(!1),className:"-m-2.5 p-2.5",children:[e.jsx("span",{className:"sr-only",children:"Close sidebar"}),e.jsx(h,{"aria-hidden":"true",className:"size-6 text-white"})]})})}),e.jsxs("div",{className:"flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4 ring-1 ring-white/10",children:[e.jsx("div",{className:"flex h-16 shrink-0 items-center",children:e.jsx("img",{alt:"Your Company",src:"https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500",className:"h-8 w-auto"})}),e.jsx("nav",{className:"flex flex-1 flex-col",children:e.jsxs("ul",{role:"list",className:"flex flex-1 flex-col gap-y-7",children:[e.jsx("li",{children:e.jsx("ul",{role:"list",className:"-mx-2 space-y-1",children:F.map(a=>e.jsx("li",{children:e.jsxs("a",{href:a.href,className:z(a.current?"bg-gray-800 text-white":"text-gray-400 hover:bg-gray-800 hover:text-white","group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"),children:[e.jsx(a.icon,{"aria-hidden":"true",className:"size-6 shrink-0"}),a.name]})},a.name))})}),e.jsxs("li",{children:[e.jsx("div",{className:"text-xs/6 font-semibold text-gray-400",children:"Your teams"}),e.jsx("ul",{role:"list",className:"-mx-2 mt-2 space-y-1",children:$.map(a=>e.jsx("li",{children:e.jsxs("a",{href:a.href,className:z(a.current?"bg-gray-800 text-white":"text-gray-400 hover:bg-gray-800 hover:text-white","group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"),children:[e.jsx("span",{className:"flex size-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white",children:a.initial}),e.jsx("span",{className:"truncate",children:a.name})]})},a.name))})]}),e.jsx("li",{className:"mt-auto",children:e.jsxs("a",{href:"#",className:"group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-400 hover:bg-gray-800 hover:text-white",children:[e.jsx(o,{"aria-hidden":"true",className:"size-6 shrink-0"}),"Settings"]})})]})})]})]})})]}),e.jsx("div",{className:"hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col",children:e.jsxs("div",{className:"flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4",children:[e.jsx("div",{className:"flex h-16 shrink-0 items-center",children:e.jsx("img",{alt:"Your Company",src:"https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500",className:"h-8 w-auto"})}),e.jsx("nav",{className:"flex flex-1 flex-col",children:e.jsxs("ul",{role:"list",className:"flex flex-1 flex-col gap-y-7",children:[e.jsx("li",{children:e.jsx("ul",{role:"list",className:"-mx-2 space-y-1",children:F.map(a=>e.jsx("li",{children:e.jsxs("a",{href:a.href,className:z(a.current?"bg-gray-800 text-white":"text-gray-400 hover:bg-gray-800 hover:text-white","group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"),children:[e.jsx(a.icon,{"aria-hidden":"true",className:"size-6 shrink-0"}),a.name]})},a.name))})}),e.jsxs("li",{children:[e.jsx("div",{className:"text-xs/6 font-semibold text-gray-400",children:"Your teams"}),e.jsx("ul",{role:"list",className:"-mx-2 mt-2 space-y-1",children:$.map(a=>e.jsx("li",{children:e.jsxs("a",{href:a.href,className:z(a.current?"bg-gray-800 text-white":"text-gray-400 hover:bg-gray-800 hover:text-white","group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"),children:[e.jsx("span",{className:"flex size-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white",children:a.initial}),e.jsx("span",{className:"truncate",children:a.name})]})},a.name))})]}),e.jsx("li",{className:"mt-auto",children:e.jsxs("a",{href:"#",className:"group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-400 hover:bg-gray-800 hover:text-white",children:[e.jsx(o,{"aria-hidden":"true",className:"size-6 shrink-0"}),"Settings"]})})]})})]})}),e.jsxs("div",{className:"lg:pl-72",children:[e.jsxs("div",{className:"sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-xs sm:gap-x-6 sm:px-6 lg:px-8",children:[e.jsxs("button",{type:"button",onClick:()=>s(!0),className:"-m-2.5 p-2.5 text-gray-700 lg:hidden",children:[e.jsx("span",{className:"sr-only",children:"Open sidebar"}),e.jsx(v,{"aria-hidden":"true",className:"size-6"})]}),e.jsx("div",{"aria-hidden":"true",className:"h-6 w-px bg-gray-900/10 lg:hidden"}),e.jsxs("div",{className:"flex flex-1 gap-x-4 self-stretch lg:gap-x-6",children:[e.jsxs("form",{action:"#",method:"GET",className:"grid flex-1 grid-cols-1",children:[e.jsx("input",{name:"search",type:"search",placeholder:"Search","aria-label":"Search",className:"col-start-1 row-start-1 block size-full bg-white pl-8 text-base text-gray-900 outline-hidden placeholder:text-gray-400 sm:text-sm/6"}),e.jsx(C,{"aria-hidden":"true",className:"pointer-events-none col-start-1 row-start-1 size-5 self-center text-gray-400"})]}),e.jsxs("div",{className:"flex items-center gap-x-4 lg:gap-x-6",children:[e.jsxs("button",{type:"button",className:"-m-2.5 p-2.5 text-gray-400 hover:text-gray-500",children:[e.jsx("span",{className:"sr-only",children:"View notifications"}),e.jsx(I,{"aria-hidden":"true",className:"size-6"})]}),e.jsx("div",{"aria-hidden":"true",className:"hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"}),e.jsxs(S,{as:"div",className:"relative",children:[e.jsxs(T,{className:"-m-1.5 flex items-center p-1.5",children:[e.jsx("span",{className:"sr-only",children:"Open user menu"}),e.jsx("img",{alt:"",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",className:"size-8 rounded-full bg-gray-50"}),e.jsxs("span",{className:"hidden lg:flex lg:items-center",children:[e.jsx("span",{"aria-hidden":"true",className:"ml-4 text-sm/6 font-semibold text-gray-900",children:"Tom Cook"}),e.jsx(D,{"aria-hidden":"true",className:"ml-2 size-5 text-gray-400"})]})]}),e.jsx(O,{transition:!0,className:"absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 ring-1 shadow-lg ring-gray-900/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in",children:te.map(a=>e.jsx(B,{children:e.jsx("a",{href:a.href,className:"block px-3 py-1 text-sm/6 text-gray-900 data-focus:bg-gray-50 data-focus:outline-hidden",children:a.name})},a.name))})]})]})]})]}),e.jsx("main",{className:"py-10",children:e.jsx("div",{className:"px-4 sm:px-6 lg:px-8"})})]})]})})}const re=`'use client'

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
  Cog6ToothIcon,
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
const teams = [
  { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
  { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
  { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
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
              {/* Sidebar component, swap this element with another sidebar if you like */}
              <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4 ring-1 ring-white/10">
                <div className="flex h-16 shrink-0 items-center">
                  <img
                    alt="Your Company"
                    src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
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
                                  ? 'bg-gray-800 text-white'
                                  : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                                'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                              )}
                            >
                              <span className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
                                {team.initial}
                              </span>
                              <span className="truncate">{team.name}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li className="mt-auto">
                      <a
                        href="#"
                        className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-400 hover:bg-gray-800 hover:text-white"
                      >
                        <Cog6ToothIcon aria-hidden="true" className="size-6 shrink-0" />
                        Settings
                      </a>
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
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4">
            <div className="flex h-16 shrink-0 items-center">
              <img
                alt="Your Company"
                src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
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
                              ? 'bg-gray-800 text-white'
                              : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                            'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                          )}
                        >
                          <span className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
                            {team.initial}
                          </span>
                          <span className="truncate">{team.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="mt-auto">
                  <a
                    href="#"
                    className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-400 hover:bg-gray-800 hover:text-white"
                  >
                    <Cog6ToothIcon aria-hidden="true" className="size-6 shrink-0" />
                    Settings
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="lg:pl-72">
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

          <main className="py-10">
            <div className="px-4 sm:px-6 lg:px-8">{/* Your content */}</div>
          </main>
        </div>
      </div>
    </>
  )
}
`,R=[{name:"Dashboard",href:"#",icon:u,current:!0},{name:"Team",href:"#",icon:p,current:!1},{name:"Projects",href:"#",icon:y,current:!1},{name:"Calendar",href:"#",icon:b,current:!1},{name:"Documents",href:"#",icon:f,current:!1},{name:"Reports",href:"#",icon:N,current:!1}],q=[{id:1,name:"Heroicons",href:"#",initial:"H",current:!1},{id:2,name:"Tailwind Labs",href:"#",initial:"T",current:!1},{id:3,name:"Workcation",href:"#",initial:"W",current:!1}],le=[{name:"Your profile",href:"#"},{name:"Sign out",href:"#"}];function l(...t){return t.filter(Boolean).join(" ")}function ne(){const[t,s]=c.useState(!1);return e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsxs(d,{open:t,onClose:s,className:"relative z-50 lg:hidden",children:[e.jsx(m,{transition:!0,className:"fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-closed:opacity-0"}),e.jsx("div",{className:"fixed inset-0 flex",children:e.jsxs(x,{transition:!0,className:"relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-closed:-translate-x-full",children:[e.jsx(g,{children:e.jsx("div",{className:"absolute top-0 left-full flex w-16 justify-center pt-5 duration-300 ease-in-out data-closed:opacity-0",children:e.jsxs("button",{type:"button",onClick:()=>s(!1),className:"-m-2.5 p-2.5",children:[e.jsx("span",{className:"sr-only",children:"Close sidebar"}),e.jsx(h,{"aria-hidden":"true",className:"size-6 text-white"})]})})}),e.jsxs("div",{className:"flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4",children:[e.jsx("div",{className:"flex h-16 shrink-0 items-center",children:e.jsx("img",{alt:"Your Company",src:"https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600",className:"h-8 w-auto"})}),e.jsx("nav",{className:"flex flex-1 flex-col",children:e.jsxs("ul",{role:"list",className:"flex flex-1 flex-col gap-y-7",children:[e.jsx("li",{children:e.jsx("ul",{role:"list",className:"-mx-2 space-y-1",children:R.map(a=>e.jsx("li",{children:e.jsxs("a",{href:a.href,className:l(a.current?"bg-gray-50 text-indigo-600":"text-gray-700 hover:bg-gray-50 hover:text-indigo-600","group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"),children:[e.jsx(a.icon,{"aria-hidden":"true",className:l(a.current?"text-indigo-600":"text-gray-400 group-hover:text-indigo-600","size-6 shrink-0")}),a.name]})},a.name))})}),e.jsxs("li",{children:[e.jsx("div",{className:"text-xs/6 font-semibold text-gray-400",children:"Your teams"}),e.jsx("ul",{role:"list",className:"-mx-2 mt-2 space-y-1",children:q.map(a=>e.jsx("li",{children:e.jsxs("a",{href:a.href,className:l(a.current?"bg-gray-50 text-indigo-600":"text-gray-700 hover:bg-gray-50 hover:text-indigo-600","group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"),children:[e.jsx("span",{className:l(a.current?"border-indigo-600 text-indigo-600":"border-gray-200 text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600","flex size-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium"),children:a.initial}),e.jsx("span",{className:"truncate",children:a.name})]})},a.name))})]}),e.jsx("li",{className:"mt-auto",children:e.jsxs("a",{href:"#",className:"group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-700 hover:bg-gray-50 hover:text-indigo-600",children:[e.jsx(o,{"aria-hidden":"true",className:"size-6 shrink-0 text-gray-400 group-hover:text-indigo-600"}),"Settings"]})})]})})]})]})})]}),e.jsx("div",{className:"hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col",children:e.jsxs("div",{className:"flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4",children:[e.jsx("div",{className:"flex h-16 shrink-0 items-center",children:e.jsx("img",{alt:"Your Company",src:"https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600",className:"h-8 w-auto"})}),e.jsx("nav",{className:"flex flex-1 flex-col",children:e.jsxs("ul",{role:"list",className:"flex flex-1 flex-col gap-y-7",children:[e.jsx("li",{children:e.jsx("ul",{role:"list",className:"-mx-2 space-y-1",children:R.map(a=>e.jsx("li",{children:e.jsxs("a",{href:a.href,className:l(a.current?"bg-gray-50 text-indigo-600":"text-gray-700 hover:bg-gray-50 hover:text-indigo-600","group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"),children:[e.jsx(a.icon,{"aria-hidden":"true",className:l(a.current?"text-indigo-600":"text-gray-400 group-hover:text-indigo-600","size-6 shrink-0")}),a.name]})},a.name))})}),e.jsxs("li",{children:[e.jsx("div",{className:"text-xs/6 font-semibold text-gray-400",children:"Your teams"}),e.jsx("ul",{role:"list",className:"-mx-2 mt-2 space-y-1",children:q.map(a=>e.jsx("li",{children:e.jsxs("a",{href:a.href,className:l(a.current?"bg-gray-50 text-indigo-600":"text-gray-700 hover:bg-gray-50 hover:text-indigo-600","group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"),children:[e.jsx("span",{className:l(a.current?"border-indigo-600 text-indigo-600":"border-gray-200 text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600","flex size-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium"),children:a.initial}),e.jsx("span",{className:"truncate",children:a.name})]})},a.name))})]}),e.jsx("li",{className:"mt-auto",children:e.jsxs("a",{href:"#",className:"group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-700 hover:bg-gray-50 hover:text-indigo-600",children:[e.jsx(o,{"aria-hidden":"true",className:"size-6 shrink-0 text-gray-400 group-hover:text-indigo-600"}),"Settings"]})})]})})]})}),e.jsxs("div",{className:"lg:pl-72",children:[e.jsx("div",{className:"sticky top-0 z-40 lg:mx-auto lg:max-w-7xl lg:px-8",children:e.jsxs("div",{className:"flex h-16 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-xs sm:gap-x-6 sm:px-6 lg:px-0 lg:shadow-none",children:[e.jsxs("button",{type:"button",onClick:()=>s(!0),className:"-m-2.5 p-2.5 text-gray-700 lg:hidden",children:[e.jsx("span",{className:"sr-only",children:"Open sidebar"}),e.jsx(v,{"aria-hidden":"true",className:"size-6"})]}),e.jsx("div",{"aria-hidden":"true",className:"h-6 w-px bg-gray-200 lg:hidden"}),e.jsxs("div",{className:"flex flex-1 gap-x-4 self-stretch lg:gap-x-6",children:[e.jsxs("form",{action:"#",method:"GET",className:"grid flex-1 grid-cols-1",children:[e.jsx("input",{name:"search",type:"search",placeholder:"Search","aria-label":"Search",className:"col-start-1 row-start-1 block size-full bg-white pl-8 text-base text-gray-900 outline-hidden placeholder:text-gray-400 sm:text-sm/6"}),e.jsx(C,{"aria-hidden":"true",className:"pointer-events-none col-start-1 row-start-1 size-5 self-center text-gray-400"})]}),e.jsxs("div",{className:"flex items-center gap-x-4 lg:gap-x-6",children:[e.jsxs("button",{type:"button",className:"-m-2.5 p-2.5 text-gray-400 hover:text-gray-500",children:[e.jsx("span",{className:"sr-only",children:"View notifications"}),e.jsx(I,{"aria-hidden":"true",className:"size-6"})]}),e.jsx("div",{"aria-hidden":"true",className:"hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200"}),e.jsxs(S,{as:"div",className:"relative",children:[e.jsxs(T,{className:"-m-1.5 flex items-center p-1.5",children:[e.jsx("span",{className:"sr-only",children:"Open user menu"}),e.jsx("img",{alt:"",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",className:"size-8 rounded-full bg-gray-50"}),e.jsxs("span",{className:"hidden lg:flex lg:items-center",children:[e.jsx("span",{"aria-hidden":"true",className:"ml-4 text-sm/6 font-semibold text-gray-900",children:"Tom Cook"}),e.jsx(D,{"aria-hidden":"true",className:"ml-2 size-5 text-gray-400"})]})]}),e.jsx(O,{transition:!0,className:"absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 ring-1 shadow-lg ring-gray-900/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in",children:le.map(a=>e.jsx(B,{children:e.jsx("a",{href:a.href,className:"block px-3 py-1 text-sm/6 text-gray-900 data-focus:bg-gray-50 data-focus:outline-hidden",children:a.name})},a.name))})]})]})]})]})}),e.jsx("main",{className:"py-10",children:e.jsx("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"})})]})]})})}const oe=`'use client'

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
  Cog6ToothIcon,
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
const teams = [
  { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
  { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
  { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
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
              {/* Sidebar component, swap this element with another sidebar if you like */}
              <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
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
                    <li className="mt-auto">
                      <a
                        href="#"
                        className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                      >
                        <Cog6ToothIcon
                          aria-hidden="true"
                          className="size-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                        />
                        Settings
                      </a>
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
          <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
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
                <li className="mt-auto">
                  <a
                    href="#"
                    className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                  >
                    <Cog6ToothIcon
                      aria-hidden="true"
                      className="size-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                    />
                    Settings
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="lg:pl-72">
          <div className="sticky top-0 z-40 lg:mx-auto lg:max-w-7xl lg:px-8">
            <div className="flex h-16 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-xs sm:gap-x-6 sm:px-6 lg:px-0 lg:shadow-none">
              <button
                type="button"
                onClick={() => setSidebarOpen(true)}
                className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
              >
                <span className="sr-only">Open sidebar</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
              </button>

              {/* Separator */}
              <div aria-hidden="true" className="h-6 w-px bg-gray-200 lg:hidden" />

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
                  <div aria-hidden="true" className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200" />

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
          </div>

          <main className="py-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{/* Your content */}</div>
          </main>
        </div>
      </div>
    </>
  )
}
`,J=[{name:"Dashboard",href:"#",icon:u,current:!0},{name:"Team",href:"#",icon:p,current:!1},{name:"Projects",href:"#",icon:y,current:!1},{name:"Calendar",href:"#",icon:b,current:!1},{name:"Documents",href:"#",icon:f,current:!1},{name:"Reports",href:"#",icon:N,current:!1}],Q=[{id:1,name:"Heroicons",href:"#",initial:"H",current:!1},{id:2,name:"Tailwind Labs",href:"#",initial:"T",current:!1},{id:3,name:"Workcation",href:"#",initial:"W",current:!1}];function n(...t){return t.filter(Boolean).join(" ")}function ce(){const[t,s]=c.useState(!1);return e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsxs(d,{open:t,onClose:s,className:"relative z-50 lg:hidden",children:[e.jsx(m,{transition:!0,className:"fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-closed:opacity-0"}),e.jsx("div",{className:"fixed inset-0 flex",children:e.jsxs(x,{transition:!0,className:"relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-closed:-translate-x-full",children:[e.jsx(g,{children:e.jsx("div",{className:"absolute top-0 left-full flex w-16 justify-center pt-5 duration-300 ease-in-out data-closed:opacity-0",children:e.jsxs("button",{type:"button",onClick:()=>s(!1),className:"-m-2.5 p-2.5",children:[e.jsx("span",{className:"sr-only",children:"Close sidebar"}),e.jsx(h,{"aria-hidden":"true",className:"size-6 text-white"})]})})}),e.jsxs("div",{className:"flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2",children:[e.jsx("div",{className:"flex h-16 shrink-0 items-center",children:e.jsx("img",{alt:"Your Company",src:"https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600",className:"h-8 w-auto"})}),e.jsx("nav",{className:"flex flex-1 flex-col",children:e.jsxs("ul",{role:"list",className:"flex flex-1 flex-col gap-y-7",children:[e.jsx("li",{children:e.jsx("ul",{role:"list",className:"-mx-2 space-y-1",children:J.map(a=>e.jsx("li",{children:e.jsxs("a",{href:a.href,className:n(a.current?"bg-gray-50 text-indigo-600":"text-gray-700 hover:bg-gray-50 hover:text-indigo-600","group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"),children:[e.jsx(a.icon,{"aria-hidden":"true",className:n(a.current?"text-indigo-600":"text-gray-400 group-hover:text-indigo-600","size-6 shrink-0")}),a.name]})},a.name))})}),e.jsxs("li",{children:[e.jsx("div",{className:"text-xs/6 font-semibold text-gray-400",children:"Your teams"}),e.jsx("ul",{role:"list",className:"-mx-2 mt-2 space-y-1",children:Q.map(a=>e.jsx("li",{children:e.jsxs("a",{href:a.href,className:n(a.current?"bg-gray-50 text-indigo-600":"text-gray-700 hover:bg-gray-50 hover:text-indigo-600","group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"),children:[e.jsx("span",{className:n(a.current?"border-indigo-600 text-indigo-600":"border-gray-200 text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600","flex size-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium"),children:a.initial}),e.jsx("span",{className:"truncate",children:a.name})]})},a.name))})]})]})})]})]})})]}),e.jsx("div",{className:"hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col",children:e.jsxs("div",{className:"flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6",children:[e.jsx("div",{className:"flex h-16 shrink-0 items-center",children:e.jsx("img",{alt:"Your Company",src:"https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600",className:"h-8 w-auto"})}),e.jsx("nav",{className:"flex flex-1 flex-col",children:e.jsxs("ul",{role:"list",className:"flex flex-1 flex-col gap-y-7",children:[e.jsx("li",{children:e.jsx("ul",{role:"list",className:"-mx-2 space-y-1",children:J.map(a=>e.jsx("li",{children:e.jsxs("a",{href:a.href,className:n(a.current?"bg-gray-50 text-indigo-600":"text-gray-700 hover:bg-gray-50 hover:text-indigo-600","group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"),children:[e.jsx(a.icon,{"aria-hidden":"true",className:n(a.current?"text-indigo-600":"text-gray-400 group-hover:text-indigo-600","size-6 shrink-0")}),a.name]})},a.name))})}),e.jsxs("li",{children:[e.jsx("div",{className:"text-xs/6 font-semibold text-gray-400",children:"Your teams"}),e.jsx("ul",{role:"list",className:"-mx-2 mt-2 space-y-1",children:Q.map(a=>e.jsx("li",{children:e.jsxs("a",{href:a.href,className:n(a.current?"bg-gray-50 text-indigo-600":"text-gray-700 hover:bg-gray-50 hover:text-indigo-600","group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"),children:[e.jsx("span",{className:n(a.current?"border-indigo-600 text-indigo-600":"border-gray-200 text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600","flex size-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium"),children:a.initial}),e.jsx("span",{className:"truncate",children:a.name})]})},a.name))})]}),e.jsx("li",{className:"-mx-6 mt-auto",children:e.jsxs("a",{href:"#",className:"flex items-center gap-x-4 px-6 py-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-50",children:[e.jsx("img",{alt:"",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",className:"size-8 rounded-full bg-gray-50"}),e.jsx("span",{className:"sr-only",children:"Your profile"}),e.jsx("span",{"aria-hidden":"true",children:"Tom Cook"})]})})]})})]})}),e.jsxs("div",{className:"sticky top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-xs sm:px-6 lg:hidden",children:[e.jsxs("button",{type:"button",onClick:()=>s(!0),className:"-m-2.5 p-2.5 text-gray-700 lg:hidden",children:[e.jsx("span",{className:"sr-only",children:"Open sidebar"}),e.jsx(v,{"aria-hidden":"true",className:"size-6"})]}),e.jsx("div",{className:"flex-1 text-sm/6 font-semibold text-gray-900",children:"Dashboard"}),e.jsxs("a",{href:"#",children:[e.jsx("span",{className:"sr-only",children:"Your profile"}),e.jsx("img",{alt:"",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",className:"size-8 rounded-full bg-gray-50"})]})]}),e.jsx("main",{className:"py-10 lg:pl-72",children:e.jsx("div",{className:"px-4 sm:px-6 lg:px-8"})})]})})}const de=`'use client'

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
        <html class="h-full bg-gray-50">
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

        <main className="py-10 lg:pl-72">
          <div className="px-4 sm:px-6 lg:px-8">{/* Your content */}</div>
        </main>
      </div>
    </>
  )
}
`,L=[{name:"Dashboard",href:"#",icon:u,current:!0},{name:"Team",href:"#",icon:p,current:!1},{name:"Projects",href:"#",icon:y,current:!1},{name:"Calendar",href:"#",icon:b,current:!1},{name:"Documents",href:"#",icon:f,current:!1},{name:"Reports",href:"#",icon:N,current:!1}],G=[{id:1,name:"Heroicons",href:"#",initial:"H",current:!1},{id:2,name:"Tailwind Labs",href:"#",initial:"T",current:!1},{id:3,name:"Workcation",href:"#",initial:"W",current:!1}];function j(...t){return t.filter(Boolean).join(" ")}function me(){const[t,s]=c.useState(!1);return e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsxs(d,{open:t,onClose:s,className:"relative z-50 lg:hidden",children:[e.jsx(m,{transition:!0,className:"fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-closed:opacity-0"}),e.jsx("div",{className:"fixed inset-0 flex",children:e.jsxs(x,{transition:!0,className:"relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-closed:-translate-x-full",children:[e.jsx(g,{children:e.jsx("div",{className:"absolute top-0 left-full flex w-16 justify-center pt-5 duration-300 ease-in-out data-closed:opacity-0",children:e.jsxs("button",{type:"button",onClick:()=>s(!1),className:"-m-2.5 p-2.5",children:[e.jsx("span",{className:"sr-only",children:"Close sidebar"}),e.jsx(h,{"aria-hidden":"true",className:"size-6 text-white"})]})})}),e.jsxs("div",{className:"flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-2",children:[e.jsx("div",{className:"flex h-16 shrink-0 items-center",children:e.jsx("img",{alt:"Your Company",src:"https://tailwindui.com/plus-assets/img/logos/mark.svg?color=white",className:"h-8 w-auto"})}),e.jsx("nav",{className:"flex flex-1 flex-col",children:e.jsxs("ul",{role:"list",className:"flex flex-1 flex-col gap-y-7",children:[e.jsx("li",{children:e.jsx("ul",{role:"list",className:"-mx-2 space-y-1",children:L.map(a=>e.jsx("li",{children:e.jsxs("a",{href:a.href,className:j(a.current?"bg-indigo-700 text-white":"text-indigo-200 hover:bg-indigo-700 hover:text-white","group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"),children:[e.jsx(a.icon,{"aria-hidden":"true",className:j(a.current?"text-white":"text-indigo-200 group-hover:text-white","size-6 shrink-0")}),a.name]})},a.name))})}),e.jsxs("li",{children:[e.jsx("div",{className:"text-xs/6 font-semibold text-indigo-200",children:"Your teams"}),e.jsx("ul",{role:"list",className:"-mx-2 mt-2 space-y-1",children:G.map(a=>e.jsx("li",{children:e.jsxs("a",{href:a.href,className:j(a.current?"bg-indigo-700 text-white":"text-indigo-200 hover:bg-indigo-700 hover:text-white","group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"),children:[e.jsx("span",{className:"flex size-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 text-[0.625rem] font-medium text-white",children:a.initial}),e.jsx("span",{className:"truncate",children:a.name})]})},a.name))})]})]})})]})]})})]}),e.jsx("div",{className:"hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col",children:e.jsxs("div",{className:"flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6",children:[e.jsx("div",{className:"flex h-16 shrink-0 items-center",children:e.jsx("img",{alt:"Your Company",src:"https://tailwindui.com/plus-assets/img/logos/mark.svg?color=white",className:"h-8 w-auto"})}),e.jsx("nav",{className:"flex flex-1 flex-col",children:e.jsxs("ul",{role:"list",className:"flex flex-1 flex-col gap-y-7",children:[e.jsx("li",{children:e.jsx("ul",{role:"list",className:"-mx-2 space-y-1",children:L.map(a=>e.jsx("li",{children:e.jsxs("a",{href:a.href,className:j(a.current?"bg-indigo-700 text-white":"text-indigo-200 hover:bg-indigo-700 hover:text-white","group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"),children:[e.jsx(a.icon,{"aria-hidden":"true",className:j(a.current?"text-white":"text-indigo-200 group-hover:text-white","size-6 shrink-0")}),a.name]})},a.name))})}),e.jsxs("li",{children:[e.jsx("div",{className:"text-xs/6 font-semibold text-indigo-200",children:"Your teams"}),e.jsx("ul",{role:"list",className:"-mx-2 mt-2 space-y-1",children:G.map(a=>e.jsx("li",{children:e.jsxs("a",{href:a.href,className:j(a.current?"bg-indigo-700 text-white":"text-indigo-200 hover:bg-indigo-700 hover:text-white","group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"),children:[e.jsx("span",{className:"flex size-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 text-[0.625rem] font-medium text-white",children:a.initial}),e.jsx("span",{className:"truncate",children:a.name})]})},a.name))})]}),e.jsx("li",{className:"-mx-6 mt-auto",children:e.jsxs("a",{href:"#",className:"flex items-center gap-x-4 px-6 py-3 text-sm/6 font-semibold text-white hover:bg-indigo-700",children:[e.jsx("img",{alt:"",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",className:"size-8 rounded-full bg-indigo-700"}),e.jsx("span",{className:"sr-only",children:"Your profile"}),e.jsx("span",{"aria-hidden":"true",children:"Tom Cook"})]})})]})})]})}),e.jsxs("div",{className:"sticky top-0 z-40 flex items-center gap-x-6 bg-indigo-600 px-4 py-4 shadow-xs sm:px-6 lg:hidden",children:[e.jsxs("button",{type:"button",onClick:()=>s(!0),className:"-m-2.5 p-2.5 text-indigo-200 lg:hidden",children:[e.jsx("span",{className:"sr-only",children:"Open sidebar"}),e.jsx(v,{"aria-hidden":"true",className:"size-6"})]}),e.jsx("div",{className:"flex-1 text-sm/6 font-semibold text-white",children:"Dashboard"}),e.jsxs("a",{href:"#",children:[e.jsx("span",{className:"sr-only",children:"Your profile"}),e.jsx("img",{alt:"",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",className:"size-8 rounded-full bg-indigo-700"})]})]}),e.jsx("main",{className:"py-10 lg:pl-72",children:e.jsx("div",{className:"px-4 sm:px-6 lg:px-8"})})]})})}const xe=`'use client'

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
              <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-2">
                <div className="flex h-16 shrink-0 items-center">
                  <img
                    alt="Your Company"
                    src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=white"
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
                                  ? 'bg-indigo-700 text-white'
                                  : 'text-indigo-200 hover:bg-indigo-700 hover:text-white',
                                'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                              )}
                            >
                              <item.icon
                                aria-hidden="true"
                                className={classNames(
                                  item.current ? 'text-white' : 'text-indigo-200 group-hover:text-white',
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
                      <div className="text-xs/6 font-semibold text-indigo-200">Your teams</div>
                      <ul role="list" className="-mx-2 mt-2 space-y-1">
                        {teams.map((team) => (
                          <li key={team.name}>
                            <a
                              href={team.href}
                              className={classNames(
                                team.current
                                  ? 'bg-indigo-700 text-white'
                                  : 'text-indigo-200 hover:bg-indigo-700 hover:text-white',
                                'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                              )}
                            >
                              <span className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 text-[0.625rem] font-medium text-white">
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
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6">
            <div className="flex h-16 shrink-0 items-center">
              <img
                alt="Your Company"
                src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=white"
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
                              ? 'bg-indigo-700 text-white'
                              : 'text-indigo-200 hover:bg-indigo-700 hover:text-white',
                            'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                          )}
                        >
                          <item.icon
                            aria-hidden="true"
                            className={classNames(
                              item.current ? 'text-white' : 'text-indigo-200 group-hover:text-white',
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
                  <div className="text-xs/6 font-semibold text-indigo-200">Your teams</div>
                  <ul role="list" className="-mx-2 mt-2 space-y-1">
                    {teams.map((team) => (
                      <li key={team.name}>
                        <a
                          href={team.href}
                          className={classNames(
                            team.current
                              ? 'bg-indigo-700 text-white'
                              : 'text-indigo-200 hover:bg-indigo-700 hover:text-white',
                            'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                          )}
                        >
                          <span className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 text-[0.625rem] font-medium text-white">
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
                    className="flex items-center gap-x-4 px-6 py-3 text-sm/6 font-semibold text-white hover:bg-indigo-700"
                  >
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      className="size-8 rounded-full bg-indigo-700"
                    />
                    <span className="sr-only">Your profile</span>
                    <span aria-hidden="true">Tom Cook</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-indigo-600 px-4 py-4 shadow-xs sm:px-6 lg:hidden">
          <button type="button" onClick={() => setSidebarOpen(true)} className="-m-2.5 p-2.5 text-indigo-200 lg:hidden">
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
          <div className="flex-1 text-sm/6 font-semibold text-white">Dashboard</div>
          <a href="#">
            <span className="sr-only">Your profile</span>
            <img
              alt=""
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              className="size-8 rounded-full bg-indigo-700"
            />
          </a>
        </div>

        <main className="py-10 lg:pl-72">
          <div className="px-4 sm:px-6 lg:px-8">{/* Your content */}</div>
        </main>
      </div>
    </>
  )
}
`,U=[{name:"Dashboard",href:"#",icon:u,current:!0},{name:"Team",href:"#",icon:p,current:!1},{name:"Projects",href:"#",icon:y,current:!1},{name:"Calendar",href:"#",icon:b,current:!1},{name:"Documents",href:"#",icon:f,current:!1},{name:"Reports",href:"#",icon:N,current:!1}],X=[{id:1,name:"Heroicons",href:"#",initial:"H",current:!1},{id:2,name:"Tailwind Labs",href:"#",initial:"T",current:!1},{id:3,name:"Workcation",href:"#",initial:"W",current:!1}],ge=[{name:"Your profile",href:"#"},{name:"Sign out",href:"#"}];function w(...t){return t.filter(Boolean).join(" ")}function he(){const[t,s]=c.useState(!1);return e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsxs(d,{open:t,onClose:s,className:"relative z-50 lg:hidden",children:[e.jsx(m,{transition:!0,className:"fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-closed:opacity-0"}),e.jsx("div",{className:"fixed inset-0 flex",children:e.jsxs(x,{transition:!0,className:"relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-closed:-translate-x-full",children:[e.jsx(g,{children:e.jsx("div",{className:"absolute top-0 left-full flex w-16 justify-center pt-5 duration-300 ease-in-out data-closed:opacity-0",children:e.jsxs("button",{type:"button",onClick:()=>s(!1),className:"-m-2.5 p-2.5",children:[e.jsx("span",{className:"sr-only",children:"Close sidebar"}),e.jsx(h,{"aria-hidden":"true",className:"size-6 text-white"})]})})}),e.jsxs("div",{className:"flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-4",children:[e.jsx("div",{className:"flex h-16 shrink-0 items-center",children:e.jsx("img",{alt:"Your Company",src:"https://tailwindui.com/plus-assets/img/logos/mark.svg?color=white",className:"h-8 w-auto"})}),e.jsx("nav",{className:"flex flex-1 flex-col",children:e.jsxs("ul",{role:"list",className:"flex flex-1 flex-col gap-y-7",children:[e.jsx("li",{children:e.jsx("ul",{role:"list",className:"-mx-2 space-y-1",children:U.map(a=>e.jsx("li",{children:e.jsxs("a",{href:a.href,className:w(a.current?"bg-indigo-700 text-white":"text-indigo-200 hover:bg-indigo-700 hover:text-white","group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"),children:[e.jsx(a.icon,{"aria-hidden":"true",className:w(a.current?"text-white":"text-indigo-200 group-hover:text-white","size-6 shrink-0")}),a.name]})},a.name))})}),e.jsxs("li",{children:[e.jsx("div",{className:"text-xs/6 font-semibold text-indigo-200",children:"Your teams"}),e.jsx("ul",{role:"list",className:"-mx-2 mt-2 space-y-1",children:X.map(a=>e.jsx("li",{children:e.jsxs("a",{href:a.href,className:w(a.current?"bg-indigo-700 text-white":"text-indigo-200 hover:bg-indigo-700 hover:text-white","group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"),children:[e.jsx("span",{className:"flex size-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 text-[0.625rem] font-medium text-white",children:a.initial}),e.jsx("span",{className:"truncate",children:a.name})]})},a.name))})]}),e.jsx("li",{className:"mt-auto",children:e.jsxs("a",{href:"#",className:"group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-indigo-200 hover:bg-indigo-700 hover:text-white",children:[e.jsx(o,{"aria-hidden":"true",className:"size-6 shrink-0 text-indigo-200 group-hover:text-white"}),"Settings"]})})]})})]})]})})]}),e.jsx("div",{className:"hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col",children:e.jsxs("div",{className:"flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-4",children:[e.jsx("div",{className:"flex h-16 shrink-0 items-center",children:e.jsx("img",{alt:"Your Company",src:"https://tailwindui.com/plus-assets/img/logos/mark.svg?color=white",className:"h-8 w-auto"})}),e.jsx("nav",{className:"flex flex-1 flex-col",children:e.jsxs("ul",{role:"list",className:"flex flex-1 flex-col gap-y-7",children:[e.jsx("li",{children:e.jsx("ul",{role:"list",className:"-mx-2 space-y-1",children:U.map(a=>e.jsx("li",{children:e.jsxs("a",{href:a.href,className:w(a.current?"bg-indigo-700 text-white":"text-indigo-200 hover:bg-indigo-700 hover:text-white","group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"),children:[e.jsx(a.icon,{"aria-hidden":"true",className:w(a.current?"text-white":"text-indigo-200 group-hover:text-white","size-6 shrink-0")}),a.name]})},a.name))})}),e.jsxs("li",{children:[e.jsx("div",{className:"text-xs/6 font-semibold text-indigo-200",children:"Your teams"}),e.jsx("ul",{role:"list",className:"-mx-2 mt-2 space-y-1",children:X.map(a=>e.jsx("li",{children:e.jsxs("a",{href:a.href,className:w(a.current?"bg-indigo-700 text-white":"text-indigo-200 hover:bg-indigo-700 hover:text-white","group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"),children:[e.jsx("span",{className:"flex size-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 text-[0.625rem] font-medium text-white",children:a.initial}),e.jsx("span",{className:"truncate",children:a.name})]})},a.name))})]}),e.jsx("li",{className:"mt-auto",children:e.jsxs("a",{href:"#",className:"group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-indigo-200 hover:bg-indigo-700 hover:text-white",children:[e.jsx(o,{"aria-hidden":"true",className:"size-6 shrink-0 text-indigo-200 group-hover:text-white"}),"Settings"]})})]})})]})}),e.jsxs("div",{className:"lg:pl-72",children:[e.jsxs("div",{className:"sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-xs sm:gap-x-6 sm:px-6 lg:px-8",children:[e.jsxs("button",{type:"button",onClick:()=>s(!0),className:"-m-2.5 p-2.5 text-gray-700 lg:hidden",children:[e.jsx("span",{className:"sr-only",children:"Open sidebar"}),e.jsx(v,{"aria-hidden":"true",className:"size-6"})]}),e.jsx("div",{"aria-hidden":"true",className:"h-6 w-px bg-gray-900/10 lg:hidden"}),e.jsxs("div",{className:"flex flex-1 gap-x-4 self-stretch lg:gap-x-6",children:[e.jsxs("form",{action:"#",method:"GET",className:"grid flex-1 grid-cols-1",children:[e.jsx("input",{name:"search",type:"search",placeholder:"Search","aria-label":"Search",className:"col-start-1 row-start-1 block size-full bg-white pl-8 text-base text-gray-900 outline-hidden placeholder:text-gray-400 sm:text-sm/6"}),e.jsx(C,{"aria-hidden":"true",className:"pointer-events-none col-start-1 row-start-1 size-5 self-center text-gray-400"})]}),e.jsxs("div",{className:"flex items-center gap-x-4 lg:gap-x-6",children:[e.jsxs("button",{type:"button",className:"-m-2.5 p-2.5 text-gray-400 hover:text-gray-500",children:[e.jsx("span",{className:"sr-only",children:"View notifications"}),e.jsx(I,{"aria-hidden":"true",className:"size-6"})]}),e.jsx("div",{"aria-hidden":"true",className:"hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"}),e.jsxs(S,{as:"div",className:"relative",children:[e.jsxs(T,{className:"-m-1.5 flex items-center p-1.5",children:[e.jsx("span",{className:"sr-only",children:"Open user menu"}),e.jsx("img",{alt:"",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",className:"size-8 rounded-full bg-gray-50"}),e.jsxs("span",{className:"hidden lg:flex lg:items-center",children:[e.jsx("span",{"aria-hidden":"true",className:"ml-4 text-sm/6 font-semibold text-gray-900",children:"Tom Cook"}),e.jsx(D,{"aria-hidden":"true",className:"ml-2 size-5 text-gray-400"})]})]}),e.jsx(O,{transition:!0,className:"absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 ring-1 shadow-lg ring-gray-900/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in",children:ge.map(a=>e.jsx(B,{children:e.jsx("a",{href:a.href,className:"block px-3 py-1 text-sm/6 text-gray-900 data-focus:bg-gray-50 data-focus:outline-hidden",children:a.name})},a.name))})]})]})]})]}),e.jsx("main",{className:"py-10",children:e.jsx("div",{className:"px-4 sm:px-6 lg:px-8"})})]})]})})}const ue=`'use client'

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
  Cog6ToothIcon,
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
const teams = [
  { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
  { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
  { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
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
              {/* Sidebar component, swap this element with another sidebar if you like */}
              <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-4">
                <div className="flex h-16 shrink-0 items-center">
                  <img
                    alt="Your Company"
                    src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=white"
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
                                  ? 'bg-indigo-700 text-white'
                                  : 'text-indigo-200 hover:bg-indigo-700 hover:text-white',
                                'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                              )}
                            >
                              <item.icon
                                aria-hidden="true"
                                className={classNames(
                                  item.current ? 'text-white' : 'text-indigo-200 group-hover:text-white',
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
                      <div className="text-xs/6 font-semibold text-indigo-200">Your teams</div>
                      <ul role="list" className="-mx-2 mt-2 space-y-1">
                        {teams.map((team) => (
                          <li key={team.name}>
                            <a
                              href={team.href}
                              className={classNames(
                                team.current
                                  ? 'bg-indigo-700 text-white'
                                  : 'text-indigo-200 hover:bg-indigo-700 hover:text-white',
                                'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                              )}
                            >
                              <span className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 text-[0.625rem] font-medium text-white">
                                {team.initial}
                              </span>
                              <span className="truncate">{team.name}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li className="mt-auto">
                      <a
                        href="#"
                        className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-indigo-200 hover:bg-indigo-700 hover:text-white"
                      >
                        <Cog6ToothIcon
                          aria-hidden="true"
                          className="size-6 shrink-0 text-indigo-200 group-hover:text-white"
                        />
                        Settings
                      </a>
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
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-4">
            <div className="flex h-16 shrink-0 items-center">
              <img
                alt="Your Company"
                src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=white"
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
                              ? 'bg-indigo-700 text-white'
                              : 'text-indigo-200 hover:bg-indigo-700 hover:text-white',
                            'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                          )}
                        >
                          <item.icon
                            aria-hidden="true"
                            className={classNames(
                              item.current ? 'text-white' : 'text-indigo-200 group-hover:text-white',
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
                  <div className="text-xs/6 font-semibold text-indigo-200">Your teams</div>
                  <ul role="list" className="-mx-2 mt-2 space-y-1">
                    {teams.map((team) => (
                      <li key={team.name}>
                        <a
                          href={team.href}
                          className={classNames(
                            team.current
                              ? 'bg-indigo-700 text-white'
                              : 'text-indigo-200 hover:bg-indigo-700 hover:text-white',
                            'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                          )}
                        >
                          <span className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 text-[0.625rem] font-medium text-white">
                            {team.initial}
                          </span>
                          <span className="truncate">{team.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="mt-auto">
                  <a
                    href="#"
                    className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-indigo-200 hover:bg-indigo-700 hover:text-white"
                  >
                    <Cog6ToothIcon
                      aria-hidden="true"
                      className="size-6 shrink-0 text-indigo-200 group-hover:text-white"
                    />
                    Settings
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="lg:pl-72">
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

          <main className="py-10">
            <div className="px-4 sm:px-6 lg:px-8">{/* Your content */}</div>
          </main>
        </div>
      </div>
    </>
  )
}
`,Pe=()=>{const t=[{id:"01",name:"Simple sidebar",component:e.jsx(A,{}),raw:K},{id:"02",name:"Simple dark sidebar",component:e.jsx(Z,{}),raw:_},{id:"03",name:"Sidebar with header",component:e.jsx(ae,{}),raw:se},{id:"04",name:"Dark sidebar with header",component:e.jsx(ie,{}),raw:re},{id:"05",name:"With constrained content area",component:e.jsx(ne,{}),raw:oe},{id:"06",name:"With off-white background",component:e.jsx(ce,{}),raw:de},{id:"07",name:"Simple brand sidebar",component:e.jsx(me,{}),raw:xe},{id:"08",name:"Brand sidebar with header",component:e.jsx(he,{}),raw:ue}];return e.jsx("div",{className:"space-y-10 pb-20",children:t.map(s=>e.jsxs("section",{children:[e.jsxs("h2",{className:"mb-4 text-lg font-bold text-gray-800",children:[s.id,". ",s.name]}),e.jsx(V,{name:s.name,code:s.raw,children:s.component})]},s.id))})};export{Pe as default};
