import{r as m,j as e,h as f,L as j,z as y,O as w}from"./index-CvCVbuS9.js";import{P as C}from"./PreviewWrapper-TzFvRoPZ.js";import{F as b}from"./XMarkIcon-DRrKznFm.js";import{F as k}from"./FolderIcon-BaDjF-i0.js";import{F as T,a as I,b as z,c as N}from"./Bars3Icon-BotKeEYw.js";import{F as S}from"./GlobeAltIcon-BVoc_nYX.js";import{F}from"./Cog6ToothIcon-DnTX8lOB.js";import{F as M}from"./MagnifyingGlassIcon-Tr5kZRgo.js";import{Z as D}from"./label-CY_Q6YdE.js";import{M as $,a as O,B,I as P}from"./listbox-B2oNmznk.js";import{l as H,f as E,y as L,g as c}from"./menu-DqpGavi0.js";import{F as R,a as v,b as A,c as Y}from"./HandThumbUpIcon-CSd4bNFY.js";import{F as U}from"./HeartIcon-r1Posb3H.js";import{F as J}from"./XMarkIcon-aALukfH1.js";import{F as W}from"./BellIcon-Celbp3Xl.js";import{F as q}from"./EllipsisVerticalIcon-BqDrHd0u.js";import{F as Q}from"./UserCircleIcon-DI8bZd5q.js";import{F as G}from"./CalendarDaysIcon-CAins3SX.js";import{F as X}from"./CreditCardIcon-DRerdtc4.js";import{F as V}from"./CheckCircleIcon-DRfk2B6X.js";import{F as Z}from"./PaperClipIcon-Cdaxi19H.js";import"./use-by-comparator-Ch7KvTmY.js";import"./use-default-value-Cs7QsSkB.js";import"./floating-CjydGm1Z.js";import"./element-movement-BT6A7GGi.js";import"./bugs-qQ_SbDk4.js";import"./use-resolve-button-type-J0J8N5g4.js";import"./use-text-value-CB9rzUUM.js";import"./form-fields-DfbHTuSb.js";import"./frozen-ohsQXSW6.js";import"./use-tree-walker-_f7mgbza.js";const x=[{name:"Projects",href:"#",icon:k,current:!1},{name:"Deployments",href:"#",icon:T,current:!0},{name:"Activity",href:"#",icon:I,current:!1},{name:"Domains",href:"#",icon:S,current:!1},{name:"Usage",href:"#",icon:z,current:!1},{name:"Settings",href:"#",icon:F,current:!1}],p=[{id:1,name:"Planetaria",href:"#",initial:"P",current:!1},{id:2,name:"Protocol",href:"#",initial:"P",current:!1},{id:3,name:"Tailwind Labs",href:"#",initial:"T",current:!1}],K=[{name:"Overview",href:"#",current:!0},{name:"Activity",href:"#",current:!1},{name:"Settings",href:"#",current:!1},{name:"Collaborators",href:"#",current:!1},{name:"Notifications",href:"#",current:!1}],_=[{name:"Number of deploys",value:"405"},{name:"Average deploy time",value:"3.65",unit:"mins"},{name:"Number of servers",value:"3"},{name:"Success rate",value:"98.5%"}],ee={Completed:"text-green-400 bg-green-400/10",Error:"text-rose-400 bg-rose-400/10"},ae=[{user:{name:"Michael Foster",imageUrl:"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"},commit:"2d89f0c8",branch:"main",status:"Completed",duration:"25s",date:"45 minutes ago",dateTime:"2023-01-23T11:00"}];function i(...l){return l.filter(Boolean).join(" ")}function se(){const[l,t]=m.useState(!1);return e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsxs(f,{open:l,onClose:t,className:"relative z-50 xl:hidden",children:[e.jsx(j,{transition:!0,className:"fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-closed:opacity-0"}),e.jsx("div",{className:"fixed inset-0 flex",children:e.jsxs(y,{transition:!0,className:"relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-closed:-translate-x-full",children:[e.jsx(w,{children:e.jsx("div",{className:"absolute top-0 left-full flex w-16 justify-center pt-5 duration-300 ease-in-out data-closed:opacity-0",children:e.jsxs("button",{type:"button",onClick:()=>t(!1),className:"-m-2.5 p-2.5",children:[e.jsx("span",{className:"sr-only",children:"Close sidebar"}),e.jsx(b,{"aria-hidden":"true",className:"size-6 text-white"})]})})}),e.jsxs("div",{className:"flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 ring-1 ring-white/10",children:[e.jsx("div",{className:"flex h-16 shrink-0 items-center",children:e.jsx("img",{alt:"Your Company",src:"https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500",className:"h-8 w-auto"})}),e.jsx("nav",{className:"flex flex-1 flex-col",children:e.jsxs("ul",{role:"list",className:"flex flex-1 flex-col gap-y-7",children:[e.jsx("li",{children:e.jsx("ul",{role:"list",className:"-mx-2 space-y-1",children:x.map(a=>e.jsx("li",{children:e.jsxs("a",{href:a.href,className:i(a.current?"bg-gray-800 text-white":"text-gray-400 hover:bg-gray-800 hover:text-white","group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"),children:[e.jsx(a.icon,{"aria-hidden":"true",className:"size-6 shrink-0"}),a.name]})},a.name))})}),e.jsxs("li",{children:[e.jsx("div",{className:"text-xs/6 font-semibold text-gray-400",children:"Your teams"}),e.jsx("ul",{role:"list",className:"-mx-2 mt-2 space-y-1",children:p.map(a=>e.jsx("li",{children:e.jsxs("a",{href:a.href,className:i(a.current?"bg-gray-800 text-white":"text-gray-400 hover:bg-gray-800 hover:text-white","group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"),children:[e.jsx("span",{className:"flex size-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white",children:a.initial}),e.jsx("span",{className:"truncate",children:a.name})]})},a.name))})]}),e.jsx("li",{className:"-mx-6 mt-auto",children:e.jsxs("a",{href:"#",className:"flex items-center gap-x-4 px-6 py-3 text-sm/6 font-semibold text-white hover:bg-gray-800",children:[e.jsx("img",{alt:"",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",className:"size-8 rounded-full bg-gray-800"}),e.jsx("span",{className:"sr-only",children:"Your profile"}),e.jsx("span",{"aria-hidden":"true",children:"Tom Cook"})]})})]})})]})]})})]}),e.jsx("div",{className:"hidden xl:fixed xl:inset-y-0 xl:z-50 xl:flex xl:w-72 xl:flex-col",children:e.jsxs("div",{className:"flex grow flex-col gap-y-5 overflow-y-auto bg-black/10 px-6 ring-1 ring-white/5",children:[e.jsx("div",{className:"flex h-16 shrink-0 items-center",children:e.jsx("img",{alt:"Your Company",src:"https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500",className:"h-8 w-auto"})}),e.jsx("nav",{className:"flex flex-1 flex-col",children:e.jsxs("ul",{role:"list",className:"flex flex-1 flex-col gap-y-7",children:[e.jsx("li",{children:e.jsx("ul",{role:"list",className:"-mx-2 space-y-1",children:x.map(a=>e.jsx("li",{children:e.jsxs("a",{href:a.href,className:i(a.current?"bg-gray-800 text-white":"text-gray-400 hover:bg-gray-800 hover:text-white","group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"),children:[e.jsx(a.icon,{"aria-hidden":"true",className:"size-6 shrink-0"}),a.name]})},a.name))})}),e.jsxs("li",{children:[e.jsx("div",{className:"text-xs/6 font-semibold text-gray-400",children:"Your teams"}),e.jsx("ul",{role:"list",className:"-mx-2 mt-2 space-y-1",children:p.map(a=>e.jsx("li",{children:e.jsxs("a",{href:a.href,className:i(a.current?"bg-gray-800 text-white":"text-gray-400 hover:bg-gray-800 hover:text-white","group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"),children:[e.jsx("span",{className:"flex size-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white",children:a.initial}),e.jsx("span",{className:"truncate",children:a.name})]})},a.name))})]}),e.jsx("li",{className:"-mx-6 mt-auto",children:e.jsxs("a",{href:"#",className:"flex items-center gap-x-4 px-6 py-3 text-sm/6 font-semibold text-white hover:bg-gray-800",children:[e.jsx("img",{alt:"",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",className:"size-8 rounded-full bg-gray-800"}),e.jsx("span",{className:"sr-only",children:"Your profile"}),e.jsx("span",{"aria-hidden":"true",children:"Tom Cook"})]})})]})})]})}),e.jsxs("div",{className:"xl:pl-72",children:[e.jsxs("div",{className:"sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-6 border-b border-white/5 bg-gray-900 px-4 shadow-xs sm:px-6 lg:px-8",children:[e.jsxs("button",{type:"button",onClick:()=>t(!0),className:"-m-2.5 p-2.5 text-white xl:hidden",children:[e.jsx("span",{className:"sr-only",children:"Open sidebar"}),e.jsx(N,{"aria-hidden":"true",className:"size-5"})]}),e.jsx("div",{className:"flex flex-1 gap-x-4 self-stretch lg:gap-x-6",children:e.jsxs("form",{action:"#",method:"GET",className:"grid flex-1 grid-cols-1",children:[e.jsx("input",{name:"search",type:"search",placeholder:"Search","aria-label":"Search",className:"col-start-1 row-start-1 block size-full bg-transparent pl-8 text-base text-white outline-hidden placeholder:text-gray-500 sm:text-sm/6"}),e.jsx(M,{"aria-hidden":"true",className:"pointer-events-none col-start-1 row-start-1 size-5 self-center text-gray-500"})]})})]}),e.jsxs("main",{children:[e.jsxs("header",{children:[e.jsx("nav",{className:"flex overflow-x-auto border-b border-white/10 py-4",children:e.jsx("ul",{role:"list",className:"flex min-w-full flex-none gap-x-6 px-4 text-sm/6 font-semibold text-gray-400 sm:px-6 lg:px-8",children:K.map(a=>e.jsx("li",{children:e.jsx("a",{href:a.href,className:a.current?"text-indigo-400":"",children:a.name})},a.name))})}),e.jsxs("div",{className:"flex flex-col items-start justify-between gap-x-8 gap-y-4 bg-gray-700/10 px-4 py-4 sm:flex-row sm:items-center sm:px-6 lg:px-8",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-x-3",children:[e.jsx("div",{className:"flex-none rounded-full bg-green-400/10 p-1 text-green-400",children:e.jsx("div",{className:"size-2 rounded-full bg-current"})}),e.jsxs("h1",{className:"flex gap-x-3 text-base/7",children:[e.jsx("span",{className:"font-semibold text-white",children:"Planetaria"}),e.jsx("span",{className:"text-gray-600",children:"/"}),e.jsx("span",{className:"font-semibold text-white",children:"mobile-api"})]})]}),e.jsx("p",{className:"mt-2 text-xs/6 text-gray-400",children:"Deploys from GitHub via main branch"})]}),e.jsx("div",{className:"order-first flex-none rounded-full bg-indigo-400/10 px-2 py-1 text-xs font-medium text-indigo-400 ring-1 ring-indigo-400/30 ring-inset sm:order-none",children:"Production"})]}),e.jsx("div",{className:"grid grid-cols-1 bg-gray-700/10 sm:grid-cols-2 lg:grid-cols-4",children:_.map((a,r)=>e.jsxs("div",{className:i(r%2===1?"sm:border-l":r===2?"lg:border-l":"","border-t border-white/5 px-4 py-6 sm:px-6 lg:px-8"),children:[e.jsx("p",{className:"text-sm/6 font-medium text-gray-400",children:a.name}),e.jsxs("p",{className:"mt-2 flex items-baseline gap-x-2",children:[e.jsx("span",{className:"text-4xl font-semibold tracking-tight text-white",children:a.value}),a.unit?e.jsx("span",{className:"text-sm text-gray-400",children:a.unit}):null]})]},a.name))})]}),e.jsxs("div",{className:"border-t border-white/10 pt-11",children:[e.jsx("h2",{className:"px-4 text-base/7 font-semibold text-white sm:px-6 lg:px-8",children:"Latest activity"}),e.jsxs("table",{className:"mt-6 w-full text-left whitespace-nowrap",children:[e.jsxs("colgroup",{children:[e.jsx("col",{className:"w-full sm:w-4/12"}),e.jsx("col",{className:"lg:w-4/12"}),e.jsx("col",{className:"lg:w-2/12"}),e.jsx("col",{className:"lg:w-1/12"}),e.jsx("col",{className:"lg:w-1/12"})]}),e.jsx("thead",{className:"border-b border-white/10 text-sm/6 text-white",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"py-2 pr-8 pl-4 font-semibold sm:pl-6 lg:pl-8",children:"User"}),e.jsx("th",{scope:"col",className:"hidden py-2 pr-8 pl-0 font-semibold sm:table-cell",children:"Commit"}),e.jsx("th",{scope:"col",className:"py-2 pr-4 pl-0 text-right font-semibold sm:pr-8 sm:text-left lg:pr-20",children:"Status"}),e.jsx("th",{scope:"col",className:"hidden py-2 pr-8 pl-0 font-semibold md:table-cell lg:pr-20",children:"Duration"}),e.jsx("th",{scope:"col",className:"hidden py-2 pr-4 pl-0 text-right font-semibold sm:table-cell sm:pr-6 lg:pr-8",children:"Deployed at"})]})}),e.jsx("tbody",{className:"divide-y divide-white/5",children:ae.map(a=>e.jsxs("tr",{children:[e.jsx("td",{className:"py-4 pr-8 pl-4 sm:pl-6 lg:pl-8",children:e.jsxs("div",{className:"flex items-center gap-x-4",children:[e.jsx("img",{alt:"",src:a.user.imageUrl,className:"size-8 rounded-full bg-gray-800"}),e.jsx("div",{className:"truncate text-sm/6 font-medium text-white",children:a.user.name})]})}),e.jsx("td",{className:"hidden py-4 pr-4 pl-0 sm:table-cell sm:pr-8",children:e.jsxs("div",{className:"flex gap-x-3",children:[e.jsx("div",{className:"font-mono text-sm/6 text-gray-400",children:a.commit}),e.jsx("span",{className:"inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 text-xs font-medium text-gray-400 ring-1 ring-gray-400/20 ring-inset",children:a.branch})]})}),e.jsx("td",{className:"py-4 pr-4 pl-0 text-sm/6 sm:pr-8 lg:pr-20",children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2 sm:justify-start",children:[e.jsx("time",{dateTime:a.dateTime,className:"text-gray-400 sm:hidden",children:a.date}),e.jsx("div",{className:i(ee[a.status],"flex-none rounded-full p-1"),children:e.jsx("div",{className:"size-1.5 rounded-full bg-current"})}),e.jsx("div",{className:"hidden text-white sm:block",children:a.status})]})}),e.jsx("td",{className:"hidden py-4 pr-8 pl-0 text-sm/6 text-gray-400 md:table-cell lg:pr-20",children:a.duration}),e.jsx("td",{className:"hidden py-4 pr-4 pl-0 text-right text-sm/6 text-gray-400 sm:table-cell sm:pr-6 lg:pr-8",children:e.jsx("time",{dateTime:a.dateTime,children:a.date})})]},a.commit))})]})]})]})]})]})})}const te=`'use client'

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, TransitionChild } from '@headlessui/react'
import {
  ChartBarSquareIcon,
  Cog6ToothIcon,
  FolderIcon,
  GlobeAltIcon,
  ServerIcon,
  SignalIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { Bars3Icon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'

const navigation = [
  { name: 'Projects', href: '#', icon: FolderIcon, current: false },
  { name: 'Deployments', href: '#', icon: ServerIcon, current: true },
  { name: 'Activity', href: '#', icon: SignalIcon, current: false },
  { name: 'Domains', href: '#', icon: GlobeAltIcon, current: false },
  { name: 'Usage', href: '#', icon: ChartBarSquareIcon, current: false },
  { name: 'Settings', href: '#', icon: Cog6ToothIcon, current: false },
]
const teams = [
  { id: 1, name: 'Planetaria', href: '#', initial: 'P', current: false },
  { id: 2, name: 'Protocol', href: '#', initial: 'P', current: false },
  { id: 3, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
]
const secondaryNavigation = [
  { name: 'Overview', href: '#', current: true },
  { name: 'Activity', href: '#', current: false },
  { name: 'Settings', href: '#', current: false },
  { name: 'Collaborators', href: '#', current: false },
  { name: 'Notifications', href: '#', current: false },
]
const stats = [
  { name: 'Number of deploys', value: '405' },
  { name: 'Average deploy time', value: '3.65', unit: 'mins' },
  { name: 'Number of servers', value: '3' },
  { name: 'Success rate', value: '98.5%' },
]
const statuses = { Completed: 'text-green-400 bg-green-400/10', Error: 'text-rose-400 bg-rose-400/10' }
const activityItems = [
  {
    user: {
      name: 'Michael Foster',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    commit: '2d89f0c8',
    branch: 'main',
    status: 'Completed',
    duration: '25s',
    date: '45 minutes ago',
    dateTime: '2023-01-23T11:00',
  },
  // More items...
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
        <html class="h-full bg-gray-900">
        <body class="h-full">
        \`\`\`
      */}
      <div>
        <Dialog open={sidebarOpen} onClose={setSidebarOpen} className="relative z-50 xl:hidden">
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
              <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 ring-1 ring-white/10">
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
            </DialogPanel>
          </div>
        </Dialog>

        {/* Static sidebar for desktop */}
        <div className="hidden xl:fixed xl:inset-y-0 xl:z-50 xl:flex xl:w-72 xl:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-black/10 px-6 ring-1 ring-white/5">
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

        <div className="xl:pl-72">
          {/* Sticky search header */}
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-6 border-b border-white/5 bg-gray-900 px-4 shadow-xs sm:px-6 lg:px-8">
            <button type="button" onClick={() => setSidebarOpen(true)} className="-m-2.5 p-2.5 text-white xl:hidden">
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon aria-hidden="true" className="size-5" />
            </button>

            <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
              <form action="#" method="GET" className="grid flex-1 grid-cols-1">
                <input
                  name="search"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  className="col-start-1 row-start-1 block size-full bg-transparent pl-8 text-base text-white outline-hidden placeholder:text-gray-500 sm:text-sm/6"
                />
                <MagnifyingGlassIcon
                  aria-hidden="true"
                  className="pointer-events-none col-start-1 row-start-1 size-5 self-center text-gray-500"
                />
              </form>
            </div>
          </div>

          <main>
            <header>
              {/* Secondary navigation */}
              <nav className="flex overflow-x-auto border-b border-white/10 py-4">
                <ul
                  role="list"
                  className="flex min-w-full flex-none gap-x-6 px-4 text-sm/6 font-semibold text-gray-400 sm:px-6 lg:px-8"
                >
                  {secondaryNavigation.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className={item.current ? 'text-indigo-400' : ''}>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Heading */}
              <div className="flex flex-col items-start justify-between gap-x-8 gap-y-4 bg-gray-700/10 px-4 py-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
                <div>
                  <div className="flex items-center gap-x-3">
                    <div className="flex-none rounded-full bg-green-400/10 p-1 text-green-400">
                      <div className="size-2 rounded-full bg-current" />
                    </div>
                    <h1 className="flex gap-x-3 text-base/7">
                      <span className="font-semibold text-white">Planetaria</span>
                      <span className="text-gray-600">/</span>
                      <span className="font-semibold text-white">mobile-api</span>
                    </h1>
                  </div>
                  <p className="mt-2 text-xs/6 text-gray-400">Deploys from GitHub via main branch</p>
                </div>
                <div className="order-first flex-none rounded-full bg-indigo-400/10 px-2 py-1 text-xs font-medium text-indigo-400 ring-1 ring-indigo-400/30 ring-inset sm:order-none">
                  Production
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 bg-gray-700/10 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat, statIdx) => (
                  <div
                    key={stat.name}
                    className={classNames(
                      statIdx % 2 === 1 ? 'sm:border-l' : statIdx === 2 ? 'lg:border-l' : '',
                      'border-t border-white/5 px-4 py-6 sm:px-6 lg:px-8',
                    )}
                  >
                    <p className="text-sm/6 font-medium text-gray-400">{stat.name}</p>
                    <p className="mt-2 flex items-baseline gap-x-2">
                      <span className="text-4xl font-semibold tracking-tight text-white">{stat.value}</span>
                      {stat.unit ? <span className="text-sm text-gray-400">{stat.unit}</span> : null}
                    </p>
                  </div>
                ))}
              </div>
            </header>

            {/* Activity list */}
            <div className="border-t border-white/10 pt-11">
              <h2 className="px-4 text-base/7 font-semibold text-white sm:px-6 lg:px-8">Latest activity</h2>
              <table className="mt-6 w-full text-left whitespace-nowrap">
                <colgroup>
                  <col className="w-full sm:w-4/12" />
                  <col className="lg:w-4/12" />
                  <col className="lg:w-2/12" />
                  <col className="lg:w-1/12" />
                  <col className="lg:w-1/12" />
                </colgroup>
                <thead className="border-b border-white/10 text-sm/6 text-white">
                  <tr>
                    <th scope="col" className="py-2 pr-8 pl-4 font-semibold sm:pl-6 lg:pl-8">
                      User
                    </th>
                    <th scope="col" className="hidden py-2 pr-8 pl-0 font-semibold sm:table-cell">
                      Commit
                    </th>
                    <th scope="col" className="py-2 pr-4 pl-0 text-right font-semibold sm:pr-8 sm:text-left lg:pr-20">
                      Status
                    </th>
                    <th scope="col" className="hidden py-2 pr-8 pl-0 font-semibold md:table-cell lg:pr-20">
                      Duration
                    </th>
                    <th
                      scope="col"
                      className="hidden py-2 pr-4 pl-0 text-right font-semibold sm:table-cell sm:pr-6 lg:pr-8"
                    >
                      Deployed at
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {activityItems.map((item) => (
                    <tr key={item.commit}>
                      <td className="py-4 pr-8 pl-4 sm:pl-6 lg:pl-8">
                        <div className="flex items-center gap-x-4">
                          <img alt="" src={item.user.imageUrl} className="size-8 rounded-full bg-gray-800" />
                          <div className="truncate text-sm/6 font-medium text-white">{item.user.name}</div>
                        </div>
                      </td>
                      <td className="hidden py-4 pr-4 pl-0 sm:table-cell sm:pr-8">
                        <div className="flex gap-x-3">
                          <div className="font-mono text-sm/6 text-gray-400">{item.commit}</div>
                          <span className="inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 text-xs font-medium text-gray-400 ring-1 ring-gray-400/20 ring-inset">
                            {item.branch}
                          </span>
                        </div>
                      </td>
                      <td className="py-4 pr-4 pl-0 text-sm/6 sm:pr-8 lg:pr-20">
                        <div className="flex items-center justify-end gap-x-2 sm:justify-start">
                          <time dateTime={item.dateTime} className="text-gray-400 sm:hidden">
                            {item.date}
                          </time>
                          <div className={classNames(statuses[item.status], 'flex-none rounded-full p-1')}>
                            <div className="size-1.5 rounded-full bg-current" />
                          </div>
                          <div className="hidden text-white sm:block">{item.status}</div>
                        </div>
                      </td>
                      <td className="hidden py-4 pr-8 pl-0 text-sm/6 text-gray-400 md:table-cell lg:pr-20">
                        {item.duration}
                      </td>
                      <td className="hidden py-4 pr-4 pl-0 text-right text-sm/6 text-gray-400 sm:table-cell sm:pr-6 lg:pr-8">
                        <time dateTime={item.dateTime}>{item.date}</time>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
`,h=[{name:"Home",href:"#"},{name:"Invoices",href:"#"},{name:"Clients",href:"#"},{name:"Expenses",href:"#"}],n={subTotal:"$8,800.00",tax:"$1,760.00",total:"$10,560.00",items:[{id:1,title:"Logo redesign",description:"New logo and digital asset playbook.",hours:"20.0",rate:"$100.00",price:"$2,000.00"},{id:2,title:"Website redesign",description:"Design and program new company website.",hours:"52.0",rate:"$100.00",price:"$5,200.00"},{id:3,title:"Business cards",description:'Design and production of 3.5" x 2.0" business cards.',hours:"12.0",rate:"$100.00",price:"$1,200.00"},{id:4,title:"T-shirt design",description:"Three t-shirt design concepts.",hours:"4.0",rate:"$100.00",price:"$400.00"}]},g=[{id:1,type:"created",person:{name:"Chelsea Hagon"},date:"7d ago",dateTime:"2023-01-23T10:32"},{id:2,type:"edited",person:{name:"Chelsea Hagon"},date:"6d ago",dateTime:"2023-01-23T11:03"},{id:3,type:"sent",person:{name:"Chelsea Hagon"},date:"6d ago",dateTime:"2023-01-23T11:24"},{id:4,type:"commented",person:{name:"Chelsea Hagon",imageUrl:"https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"},comment:"Called client, they reassured me the invoice would be paid by the 25th.",date:"3d ago",dateTime:"2023-01-23T15:56"},{id:5,type:"viewed",person:{name:"Alex Curren"},date:"2d ago",dateTime:"2023-01-24T09:12"},{id:6,type:"paid",person:{name:"Alex Curren"},date:"1d ago",dateTime:"2023-01-24T09:20"}],u=[{name:"Excited",value:"excited",icon:R,iconColor:"text-white",bgColor:"bg-red-500"},{name:"Loved",value:"loved",icon:U,iconColor:"text-white",bgColor:"bg-pink-400"},{name:"Happy",value:"happy",icon:v,iconColor:"text-white",bgColor:"bg-green-400"},{name:"Sad",value:"sad",icon:A,iconColor:"text-white",bgColor:"bg-yellow-400"},{name:"Thumbsy",value:"thumbsy",icon:Y,iconColor:"text-white",bgColor:"bg-blue-500"},{name:"I feel nothing",value:null,icon:J,iconColor:"text-gray-400",bgColor:"bg-transparent"}];function o(...l){return l.filter(Boolean).join(" ")}function le(){const[l,t]=m.useState(!1),[a,r]=m.useState(u[5]);return e.jsxs(e.Fragment,{children:[e.jsxs("header",{className:"absolute inset-x-0 top-0 z-50 flex h-16 border-b border-gray-900/10",children:[e.jsxs("div",{className:"mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"flex flex-1 items-center gap-x-6",children:[e.jsxs("button",{type:"button",onClick:()=>t(!0),className:"-m-3 p-3 md:hidden",children:[e.jsx("span",{className:"sr-only",children:"Open main menu"}),e.jsx(N,{"aria-hidden":"true",className:"size-5 text-gray-900"})]}),e.jsx("img",{alt:"Your Company",src:"https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600",className:"h-8 w-auto"})]}),e.jsx("nav",{className:"hidden md:flex md:gap-x-11 md:text-sm/6 md:font-semibold md:text-gray-700",children:h.map((s,d)=>e.jsx("a",{href:s.href,children:s.name},d))}),e.jsxs("div",{className:"flex flex-1 items-center justify-end gap-x-8",children:[e.jsxs("button",{type:"button",className:"-m-2.5 p-2.5 text-gray-400 hover:text-gray-500",children:[e.jsx("span",{className:"sr-only",children:"View notifications"}),e.jsx(W,{"aria-hidden":"true",className:"size-6"})]}),e.jsxs("a",{href:"#",className:"-m-1.5 p-1.5",children:[e.jsx("span",{className:"sr-only",children:"Your profile"}),e.jsx("img",{alt:"",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",className:"size-8 rounded-full bg-gray-800"})]})]})]}),e.jsxs(f,{open:l,onClose:t,className:"lg:hidden",children:[e.jsx("div",{className:"fixed inset-0 z-50"}),e.jsxs(y,{className:"fixed inset-y-0 left-0 z-50 w-full overflow-y-auto bg-white px-4 pb-6 sm:max-w-sm sm:px-6 sm:ring-1 sm:ring-gray-900/10",children:[e.jsxs("div",{className:"-ml-0.5 flex h-16 items-center gap-x-6",children:[e.jsxs("button",{type:"button",onClick:()=>t(!1),className:"-m-2.5 p-2.5 text-gray-700",children:[e.jsx("span",{className:"sr-only",children:"Close menu"}),e.jsx(b,{"aria-hidden":"true",className:"size-6"})]}),e.jsx("div",{className:"-ml-0.5",children:e.jsxs("a",{href:"#",className:"-m-1.5 block p-1.5",children:[e.jsx("span",{className:"sr-only",children:"Your Company"}),e.jsx("img",{alt:"",src:"https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600",className:"h-8 w-auto"})]})})]}),e.jsx("div",{className:"mt-2 space-y-2",children:h.map(s=>e.jsx("a",{href:s.href,className:"-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50",children:s.name},s.name))})]})]})]}),e.jsxs("main",{children:[e.jsxs("header",{className:"relative isolate pt-16",children:[e.jsxs("div",{"aria-hidden":"true",className:"absolute inset-0 -z-10 overflow-hidden",children:[e.jsx("div",{className:"absolute top-full left-16 -mt-16 transform-gpu opacity-50 blur-3xl xl:left-1/2 xl:-ml-80",children:e.jsx("div",{style:{clipPath:"polygon(100% 38.5%, 82.6% 100%, 60.2% 37.7%, 52.4% 32.1%, 47.5% 41.8%, 45.2% 65.6%, 27.5% 23.4%, 0.1% 35.3%, 17.9% 0%, 27.7% 23.4%, 76.2% 2.5%, 74.2% 56%, 100% 38.5%)"},className:"aspect-1154/678 w-[72.125rem] bg-linear-to-br from-[#FF80B5] to-[#9089FC]"})}),e.jsx("div",{className:"absolute inset-x-0 bottom-0 h-px bg-gray-900/5"})]}),e.jsx("div",{className:"mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"mx-auto flex max-w-2xl items-center justify-between gap-x-8 lg:mx-0 lg:max-w-none",children:[e.jsxs("div",{className:"flex items-center gap-x-6",children:[e.jsx("img",{alt:"",src:"https://tailwindui.com/plus-assets/img/logos/48x48/tuple.svg",className:"size-16 flex-none rounded-full ring-1 ring-gray-900/10"}),e.jsxs("h1",{children:[e.jsxs("div",{className:"text-sm/6 text-gray-500",children:["Invoice ",e.jsx("span",{className:"text-gray-700",children:"#00011"})]}),e.jsx("div",{className:"mt-1 text-base font-semibold text-gray-900",children:"Tuple, Inc"})]})]}),e.jsxs("div",{className:"flex items-center gap-x-4 sm:gap-x-6",children:[e.jsx("button",{type:"button",className:"hidden text-sm/6 font-semibold text-gray-900 sm:block",children:"Copy URL"}),e.jsx("a",{href:"#",className:"hidden text-sm/6 font-semibold text-gray-900 sm:block",children:"Edit"}),e.jsx("a",{href:"#",className:"rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"Send"}),e.jsxs(H,{as:"div",className:"relative sm:hidden",children:[e.jsxs(E,{className:"-m-3 block p-3",children:[e.jsx("span",{className:"sr-only",children:"More"}),e.jsx(q,{"aria-hidden":"true",className:"size-5 text-gray-500"})]}),e.jsxs(L,{transition:!0,className:"absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 ring-1 shadow-lg ring-gray-900/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in",children:[e.jsx(c,{children:e.jsx("button",{type:"button",className:"block w-full px-3 py-1 text-left text-sm/6 text-gray-900 data-focus:bg-gray-50 data-focus:outline-hidden",children:"Copy URL"})}),e.jsx(c,{children:e.jsx("a",{href:"#",className:"block px-3 py-1 text-sm/6 text-gray-900 data-focus:bg-gray-50 data-focus:outline-hidden",children:"Edit"})})]})]})]})]})})]}),e.jsx("div",{className:"mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"mx-auto grid max-w-2xl grid-cols-1 grid-rows-1 items-start gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3",children:[e.jsxs("div",{className:"lg:col-start-3 lg:row-end-1",children:[e.jsx("h2",{className:"sr-only",children:"Summary"}),e.jsxs("div",{className:"rounded-lg bg-gray-50 ring-1 shadow-xs ring-gray-900/5",children:[e.jsxs("dl",{className:"flex flex-wrap",children:[e.jsxs("div",{className:"flex-auto pt-6 pl-6",children:[e.jsx("dt",{className:"text-sm/6 font-semibold text-gray-900",children:"Amount"}),e.jsx("dd",{className:"mt-1 text-base font-semibold text-gray-900",children:"$10,560.00"})]}),e.jsxs("div",{className:"flex-none self-end px-6 pt-4",children:[e.jsx("dt",{className:"sr-only",children:"Status"}),e.jsx("dd",{className:"rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-600 ring-1 ring-green-600/20 ring-inset",children:"Paid"})]}),e.jsxs("div",{className:"mt-6 flex w-full flex-none gap-x-4 border-t border-gray-900/5 px-6 pt-6",children:[e.jsxs("dt",{className:"flex-none",children:[e.jsx("span",{className:"sr-only",children:"Client"}),e.jsx(Q,{"aria-hidden":"true",className:"h-6 w-5 text-gray-400"})]}),e.jsx("dd",{className:"text-sm/6 font-medium text-gray-900",children:"Alex Curren"})]}),e.jsxs("div",{className:"mt-4 flex w-full flex-none gap-x-4 px-6",children:[e.jsxs("dt",{className:"flex-none",children:[e.jsx("span",{className:"sr-only",children:"Due date"}),e.jsx(G,{"aria-hidden":"true",className:"h-6 w-5 text-gray-400"})]}),e.jsx("dd",{className:"text-sm/6 text-gray-500",children:e.jsx("time",{dateTime:"2023-01-31",children:"January 31, 2023"})})]}),e.jsxs("div",{className:"mt-4 flex w-full flex-none gap-x-4 px-6",children:[e.jsxs("dt",{className:"flex-none",children:[e.jsx("span",{className:"sr-only",children:"Status"}),e.jsx(X,{"aria-hidden":"true",className:"h-6 w-5 text-gray-400"})]}),e.jsx("dd",{className:"text-sm/6 text-gray-500",children:"Paid with MasterCard"})]})]}),e.jsx("div",{className:"mt-6 border-t border-gray-900/5 px-6 py-6",children:e.jsxs("a",{href:"#",className:"text-sm/6 font-semibold text-gray-900",children:["Download receipt ",e.jsx("span",{"aria-hidden":"true",children:"→"})]})})]})]}),e.jsxs("div",{className:"-mx-4 px-4 py-8 ring-1 shadow-xs ring-gray-900/5 sm:mx-0 sm:rounded-lg sm:px-8 sm:pb-14 lg:col-span-2 lg:row-span-2 lg:row-end-2 xl:px-16 xl:pt-16 xl:pb-20",children:[e.jsx("h2",{className:"text-base font-semibold text-gray-900",children:"Invoice"}),e.jsxs("dl",{className:"mt-6 grid grid-cols-1 text-sm/6 sm:grid-cols-2",children:[e.jsxs("div",{className:"sm:pr-4",children:[e.jsx("dt",{className:"inline text-gray-500",children:"Issued on"})," ",e.jsx("dd",{className:"inline text-gray-700",children:e.jsx("time",{dateTime:"2023-23-01",children:"January 23, 2023"})})]}),e.jsxs("div",{className:"mt-2 sm:mt-0 sm:pl-4",children:[e.jsx("dt",{className:"inline text-gray-500",children:"Due on"})," ",e.jsx("dd",{className:"inline text-gray-700",children:e.jsx("time",{dateTime:"2023-31-01",children:"January 31, 2023"})})]}),e.jsxs("div",{className:"mt-6 border-t border-gray-900/5 pt-6 sm:pr-4",children:[e.jsx("dt",{className:"font-semibold text-gray-900",children:"From"}),e.jsxs("dd",{className:"mt-2 text-gray-500",children:[e.jsx("span",{className:"font-medium text-gray-900",children:"Acme, Inc."}),e.jsx("br",{}),"7363 Cynthia Pass",e.jsx("br",{}),"Toronto, ON N3Y 4H8"]})]}),e.jsxs("div",{className:"mt-8 sm:mt-6 sm:border-t sm:border-gray-900/5 sm:pt-6 sm:pl-4",children:[e.jsx("dt",{className:"font-semibold text-gray-900",children:"To"}),e.jsxs("dd",{className:"mt-2 text-gray-500",children:[e.jsx("span",{className:"font-medium text-gray-900",children:"Tuple, Inc"}),e.jsx("br",{}),"886 Walter Street",e.jsx("br",{}),"New York, NY 12345"]})]})]}),e.jsxs("table",{className:"mt-16 w-full text-left text-sm/6 whitespace-nowrap",children:[e.jsxs("colgroup",{children:[e.jsx("col",{className:"w-full"}),e.jsx("col",{}),e.jsx("col",{}),e.jsx("col",{})]}),e.jsx("thead",{className:"border-b border-gray-200 text-gray-900",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"px-0 py-3 font-semibold",children:"Projects"}),e.jsx("th",{scope:"col",className:"hidden py-3 pr-0 pl-8 text-right font-semibold sm:table-cell",children:"Hours"}),e.jsx("th",{scope:"col",className:"hidden py-3 pr-0 pl-8 text-right font-semibold sm:table-cell",children:"Rate"}),e.jsx("th",{scope:"col",className:"py-3 pr-0 pl-8 text-right font-semibold",children:"Price"})]})}),e.jsx("tbody",{children:n.items.map(s=>e.jsxs("tr",{className:"border-b border-gray-100",children:[e.jsxs("td",{className:"max-w-0 px-0 py-5 align-top",children:[e.jsx("div",{className:"truncate font-medium text-gray-900",children:s.title}),e.jsx("div",{className:"truncate text-gray-500",children:s.description})]}),e.jsx("td",{className:"hidden py-5 pr-0 pl-8 text-right align-top text-gray-700 tabular-nums sm:table-cell",children:s.hours}),e.jsx("td",{className:"hidden py-5 pr-0 pl-8 text-right align-top text-gray-700 tabular-nums sm:table-cell",children:s.rate}),e.jsx("td",{className:"py-5 pr-0 pl-8 text-right align-top text-gray-700 tabular-nums",children:s.price})]},s.id))}),e.jsxs("tfoot",{children:[e.jsxs("tr",{children:[e.jsx("th",{scope:"row",className:"px-0 pt-6 pb-0 font-normal text-gray-700 sm:hidden",children:"Subtotal"}),e.jsx("th",{scope:"row",colSpan:3,className:"hidden px-0 pt-6 pb-0 text-right font-normal text-gray-700 sm:table-cell",children:"Subtotal"}),e.jsx("td",{className:"pt-6 pr-0 pb-0 pl-8 text-right text-gray-900 tabular-nums",children:n.subTotal})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",className:"pt-4 font-normal text-gray-700 sm:hidden",children:"Tax"}),e.jsx("th",{scope:"row",colSpan:3,className:"hidden pt-4 text-right font-normal text-gray-700 sm:table-cell",children:"Tax"}),e.jsx("td",{className:"pt-4 pr-0 pb-0 pl-8 text-right text-gray-900 tabular-nums",children:n.tax})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",className:"pt-4 font-semibold text-gray-900 sm:hidden",children:"Total"}),e.jsx("th",{scope:"row",colSpan:3,className:"hidden pt-4 text-right font-semibold text-gray-900 sm:table-cell",children:"Total"}),e.jsx("td",{className:"pt-4 pr-0 pb-0 pl-8 text-right font-semibold text-gray-900 tabular-nums",children:n.total})]})]})]})]}),e.jsxs("div",{className:"lg:col-start-3",children:[e.jsx("h2",{className:"text-sm/6 font-semibold text-gray-900",children:"Activity"}),e.jsx("ul",{role:"list",className:"mt-6 space-y-6",children:g.map((s,d)=>e.jsxs("li",{className:"relative flex gap-x-4",children:[e.jsx("div",{className:o(d===g.length-1?"h-6":"-bottom-6","absolute top-0 left-0 flex w-6 justify-center"),children:e.jsx("div",{className:"w-px bg-gray-200"})}),s.type==="commented"?e.jsxs(e.Fragment,{children:[e.jsx("img",{alt:"",src:s.person.imageUrl,className:"relative mt-3 size-6 flex-none rounded-full bg-gray-50"}),e.jsxs("div",{className:"flex-auto rounded-md p-3 ring-1 ring-gray-200 ring-inset",children:[e.jsxs("div",{className:"flex justify-between gap-x-4",children:[e.jsxs("div",{className:"py-0.5 text-xs/5 text-gray-500",children:[e.jsx("span",{className:"font-medium text-gray-900",children:s.person.name})," commented"]}),e.jsx("time",{dateTime:s.dateTime,className:"flex-none py-0.5 text-xs/5 text-gray-500",children:s.date})]}),e.jsx("p",{className:"text-sm/6 text-gray-500",children:s.comment})]})]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"relative flex size-6 flex-none items-center justify-center bg-white",children:s.type==="paid"?e.jsx(V,{"aria-hidden":"true",className:"size-6 text-indigo-600"}):e.jsx("div",{className:"size-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300"})}),e.jsxs("p",{className:"flex-auto py-0.5 text-xs/5 text-gray-500",children:[e.jsx("span",{className:"font-medium text-gray-900",children:s.person.name})," ",s.type," the invoice."]}),e.jsx("time",{dateTime:s.dateTime,className:"flex-none py-0.5 text-xs/5 text-gray-500",children:s.date})]})]},s.id))}),e.jsxs("div",{className:"mt-6 flex gap-x-3",children:[e.jsx("img",{alt:"",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",className:"size-6 flex-none rounded-full bg-gray-50"}),e.jsxs("form",{action:"#",className:"relative flex-auto",children:[e.jsxs("div",{className:"overflow-hidden rounded-lg pb-12 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600",children:[e.jsx("label",{htmlFor:"comment",className:"sr-only",children:"Add your comment"}),e.jsx("textarea",{id:"comment",name:"comment",rows:2,placeholder:"Add your comment...",className:"block w-full resize-none bg-transparent px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6",defaultValue:""})]}),e.jsxs("div",{className:"absolute inset-x-0 bottom-0 flex justify-between py-2 pr-2 pl-3",children:[e.jsxs("div",{className:"flex items-center space-x-5",children:[e.jsx("div",{className:"flex items-center",children:e.jsxs("button",{type:"button",className:"-m-2.5 flex size-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500",children:[e.jsx(Z,{"aria-hidden":"true",className:"size-5"}),e.jsx("span",{className:"sr-only",children:"Attach a file"})]})}),e.jsx("div",{className:"flex items-center",children:e.jsxs($,{value:a,onChange:r,children:[e.jsx(D,{className:"sr-only",children:"Your mood"}),e.jsxs("div",{className:"relative",children:[e.jsx(O,{className:"relative -m-2.5 flex size-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500",children:e.jsx("span",{className:"flex items-center justify-center",children:a.value===null?e.jsxs("span",{children:[e.jsx(v,{"aria-hidden":"true",className:"size-5 shrink-0"}),e.jsx("span",{className:"sr-only",children:"Add your mood"})]}):e.jsxs("span",{children:[e.jsx("span",{className:o(a.bgColor,"flex size-8 items-center justify-center rounded-full"),children:e.jsx(a.icon,{"aria-hidden":"true",className:"size-5 shrink-0 text-white"})}),e.jsx("span",{className:"sr-only",children:a.name})]})})}),e.jsx(B,{transition:!0,className:"absolute bottom-10 z-10 -ml-6 w-60 rounded-lg bg-white py-3 text-base ring-1 shadow-sm ring-black/5 focus:outline-hidden data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:ml-auto sm:w-64 sm:text-sm",children:u.map(s=>e.jsx(P,{value:s,className:"relative cursor-default bg-white px-3 py-2 select-none data-focus:bg-gray-100",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:o(s.bgColor,"flex size-8 items-center justify-center rounded-full"),children:e.jsx(s.icon,{"aria-hidden":"true",className:o(s.iconColor,"size-5 shrink-0")})}),e.jsx("span",{className:"ml-3 block truncate font-medium",children:s.name})]})},s.value))})]})]})})]}),e.jsx("button",{type:"submit",className:"rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50",children:"Comment"})]})]})]})]})]})})]})]})}const ie=`'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react'
import {
  Bars3Icon,
  CalendarDaysIcon,
  CreditCardIcon,
  EllipsisVerticalIcon,
  FaceFrownIcon,
  FaceSmileIcon,
  FireIcon,
  HandThumbUpIcon,
  HeartIcon,
  PaperClipIcon,
  UserCircleIcon,
  XMarkIcon as XMarkIconMini,
} from '@heroicons/react/20/solid'
import { BellIcon, XMarkIcon as XMarkIconOutline } from '@heroicons/react/24/outline'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Invoices', href: '#' },
  { name: 'Clients', href: '#' },
  { name: 'Expenses', href: '#' },
]
const invoice = {
  subTotal: '$8,800.00',
  tax: '$1,760.00',
  total: '$10,560.00',
  items: [
    {
      id: 1,
      title: 'Logo redesign',
      description: 'New logo and digital asset playbook.',
      hours: '20.0',
      rate: '$100.00',
      price: '$2,000.00',
    },
    {
      id: 2,
      title: 'Website redesign',
      description: 'Design and program new company website.',
      hours: '52.0',
      rate: '$100.00',
      price: '$5,200.00',
    },
    {
      id: 3,
      title: 'Business cards',
      description: 'Design and production of 3.5" x 2.0" business cards.',
      hours: '12.0',
      rate: '$100.00',
      price: '$1,200.00',
    },
    {
      id: 4,
      title: 'T-shirt design',
      description: 'Three t-shirt design concepts.',
      hours: '4.0',
      rate: '$100.00',
      price: '$400.00',
    },
  ],
}
const activity = [
  { id: 1, type: 'created', person: { name: 'Chelsea Hagon' }, date: '7d ago', dateTime: '2023-01-23T10:32' },
  { id: 2, type: 'edited', person: { name: 'Chelsea Hagon' }, date: '6d ago', dateTime: '2023-01-23T11:03' },
  { id: 3, type: 'sent', person: { name: 'Chelsea Hagon' }, date: '6d ago', dateTime: '2023-01-23T11:24' },
  {
    id: 4,
    type: 'commented',
    person: {
      name: 'Chelsea Hagon',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    comment: 'Called client, they reassured me the invoice would be paid by the 25th.',
    date: '3d ago',
    dateTime: '2023-01-23T15:56',
  },
  { id: 5, type: 'viewed', person: { name: 'Alex Curren' }, date: '2d ago', dateTime: '2023-01-24T09:12' },
  { id: 6, type: 'paid', person: { name: 'Alex Curren' }, date: '1d ago', dateTime: '2023-01-24T09:20' },
]
const moods = [
  { name: 'Excited', value: 'excited', icon: FireIcon, iconColor: 'text-white', bgColor: 'bg-red-500' },
  { name: 'Loved', value: 'loved', icon: HeartIcon, iconColor: 'text-white', bgColor: 'bg-pink-400' },
  { name: 'Happy', value: 'happy', icon: FaceSmileIcon, iconColor: 'text-white', bgColor: 'bg-green-400' },
  { name: 'Sad', value: 'sad', icon: FaceFrownIcon, iconColor: 'text-white', bgColor: 'bg-yellow-400' },
  { name: 'Thumbsy', value: 'thumbsy', icon: HandThumbUpIcon, iconColor: 'text-white', bgColor: 'bg-blue-500' },
  { name: 'I feel nothing', value: null, icon: XMarkIconMini, iconColor: 'text-gray-400', bgColor: 'bg-transparent' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selected, setSelected] = useState(moods[5])

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50 flex h-16 border-b border-gray-900/10">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex flex-1 items-center gap-x-6">
            <button type="button" onClick={() => setMobileMenuOpen(true)} className="-m-3 p-3 md:hidden">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-5 text-gray-900" />
            </button>
            <img
              alt="Your Company"
              src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto"
            />
          </div>
          <nav className="hidden md:flex md:gap-x-11 md:text-sm/6 md:font-semibold md:text-gray-700">
            {navigation.map((item, itemIdx) => (
              <a key={itemIdx} href={item.href}>
                {item.name}
              </a>
            ))}
          </nav>
          <div className="flex flex-1 items-center justify-end gap-x-8">
            <button type="button" className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
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
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 left-0 z-50 w-full overflow-y-auto bg-white px-4 pb-6 sm:max-w-sm sm:px-6 sm:ring-1 sm:ring-gray-900/10">
            <div className="-ml-0.5 flex h-16 items-center gap-x-6">
              <button type="button" onClick={() => setMobileMenuOpen(false)} className="-m-2.5 p-2.5 text-gray-700">
                <span className="sr-only">Close menu</span>
                <XMarkIconOutline aria-hidden="true" className="size-6" />
              </button>
              <div className="-ml-0.5">
                <a href="#" className="-m-1.5 block p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    alt=""
                    src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                    className="h-8 w-auto"
                  />
                </a>
              </div>
            </div>
            <div className="mt-2 space-y-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <main>
        <header className="relative isolate pt-16">
          <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-full left-16 -mt-16 transform-gpu opacity-50 blur-3xl xl:left-1/2 xl:-ml-80">
              <div
                style={{
                  clipPath:
                    'polygon(100% 38.5%, 82.6% 100%, 60.2% 37.7%, 52.4% 32.1%, 47.5% 41.8%, 45.2% 65.6%, 27.5% 23.4%, 0.1% 35.3%, 17.9% 0%, 27.7% 23.4%, 76.2% 2.5%, 74.2% 56%, 100% 38.5%)',
                }}
                className="aspect-1154/678 w-[72.125rem] bg-linear-to-br from-[#FF80B5] to-[#9089FC]"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 h-px bg-gray-900/5" />
          </div>

          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-2xl items-center justify-between gap-x-8 lg:mx-0 lg:max-w-none">
              <div className="flex items-center gap-x-6">
                <img
                  alt=""
                  src="https://tailwindui.com/plus-assets/img/logos/48x48/tuple.svg"
                  className="size-16 flex-none rounded-full ring-1 ring-gray-900/10"
                />
                <h1>
                  <div className="text-sm/6 text-gray-500">
                    Invoice <span className="text-gray-700">#00011</span>
                  </div>
                  <div className="mt-1 text-base font-semibold text-gray-900">Tuple, Inc</div>
                </h1>
              </div>
              <div className="flex items-center gap-x-4 sm:gap-x-6">
                <button type="button" className="hidden text-sm/6 font-semibold text-gray-900 sm:block">
                  Copy URL
                </button>
                <a href="#" className="hidden text-sm/6 font-semibold text-gray-900 sm:block">
                  Edit
                </a>
                <a
                  href="#"
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Send
                </a>

                <Menu as="div" className="relative sm:hidden">
                  <MenuButton className="-m-3 block p-3">
                    <span className="sr-only">More</span>
                    <EllipsisVerticalIcon aria-hidden="true" className="size-5 text-gray-500" />
                  </MenuButton>

                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 ring-1 shadow-lg ring-gray-900/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                  >
                    <MenuItem>
                      <button
                        type="button"
                        className="block w-full px-3 py-1 text-left text-sm/6 text-gray-900 data-focus:bg-gray-50 data-focus:outline-hidden"
                      >
                        Copy URL
                      </button>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-3 py-1 text-sm/6 text-gray-900 data-focus:bg-gray-50 data-focus:outline-hidden"
                      >
                        Edit
                      </a>
                    </MenuItem>
                  </MenuItems>
                </Menu>
              </div>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 grid-rows-1 items-start gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {/* Invoice summary */}
            <div className="lg:col-start-3 lg:row-end-1">
              <h2 className="sr-only">Summary</h2>
              <div className="rounded-lg bg-gray-50 ring-1 shadow-xs ring-gray-900/5">
                <dl className="flex flex-wrap">
                  <div className="flex-auto pt-6 pl-6">
                    <dt className="text-sm/6 font-semibold text-gray-900">Amount</dt>
                    <dd className="mt-1 text-base font-semibold text-gray-900">$10,560.00</dd>
                  </div>
                  <div className="flex-none self-end px-6 pt-4">
                    <dt className="sr-only">Status</dt>
                    <dd className="rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-600 ring-1 ring-green-600/20 ring-inset">
                      Paid
                    </dd>
                  </div>
                  <div className="mt-6 flex w-full flex-none gap-x-4 border-t border-gray-900/5 px-6 pt-6">
                    <dt className="flex-none">
                      <span className="sr-only">Client</span>
                      <UserCircleIcon aria-hidden="true" className="h-6 w-5 text-gray-400" />
                    </dt>
                    <dd className="text-sm/6 font-medium text-gray-900">Alex Curren</dd>
                  </div>
                  <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
                    <dt className="flex-none">
                      <span className="sr-only">Due date</span>
                      <CalendarDaysIcon aria-hidden="true" className="h-6 w-5 text-gray-400" />
                    </dt>
                    <dd className="text-sm/6 text-gray-500">
                      <time dateTime="2023-01-31">January 31, 2023</time>
                    </dd>
                  </div>
                  <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
                    <dt className="flex-none">
                      <span className="sr-only">Status</span>
                      <CreditCardIcon aria-hidden="true" className="h-6 w-5 text-gray-400" />
                    </dt>
                    <dd className="text-sm/6 text-gray-500">Paid with MasterCard</dd>
                  </div>
                </dl>
                <div className="mt-6 border-t border-gray-900/5 px-6 py-6">
                  <a href="#" className="text-sm/6 font-semibold text-gray-900">
                    Download receipt <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Invoice */}
            <div className="-mx-4 px-4 py-8 ring-1 shadow-xs ring-gray-900/5 sm:mx-0 sm:rounded-lg sm:px-8 sm:pb-14 lg:col-span-2 lg:row-span-2 lg:row-end-2 xl:px-16 xl:pt-16 xl:pb-20">
              <h2 className="text-base font-semibold text-gray-900">Invoice</h2>
              <dl className="mt-6 grid grid-cols-1 text-sm/6 sm:grid-cols-2">
                <div className="sm:pr-4">
                  <dt className="inline text-gray-500">Issued on</dt>{' '}
                  <dd className="inline text-gray-700">
                    <time dateTime="2023-23-01">January 23, 2023</time>
                  </dd>
                </div>
                <div className="mt-2 sm:mt-0 sm:pl-4">
                  <dt className="inline text-gray-500">Due on</dt>{' '}
                  <dd className="inline text-gray-700">
                    <time dateTime="2023-31-01">January 31, 2023</time>
                  </dd>
                </div>
                <div className="mt-6 border-t border-gray-900/5 pt-6 sm:pr-4">
                  <dt className="font-semibold text-gray-900">From</dt>
                  <dd className="mt-2 text-gray-500">
                    <span className="font-medium text-gray-900">Acme, Inc.</span>
                    <br />
                    7363 Cynthia Pass
                    <br />
                    Toronto, ON N3Y 4H8
                  </dd>
                </div>
                <div className="mt-8 sm:mt-6 sm:border-t sm:border-gray-900/5 sm:pt-6 sm:pl-4">
                  <dt className="font-semibold text-gray-900">To</dt>
                  <dd className="mt-2 text-gray-500">
                    <span className="font-medium text-gray-900">Tuple, Inc</span>
                    <br />
                    886 Walter Street
                    <br />
                    New York, NY 12345
                  </dd>
                </div>
              </dl>
              <table className="mt-16 w-full text-left text-sm/6 whitespace-nowrap">
                <colgroup>
                  <col className="w-full" />
                  <col />
                  <col />
                  <col />
                </colgroup>
                <thead className="border-b border-gray-200 text-gray-900">
                  <tr>
                    <th scope="col" className="px-0 py-3 font-semibold">
                      Projects
                    </th>
                    <th scope="col" className="hidden py-3 pr-0 pl-8 text-right font-semibold sm:table-cell">
                      Hours
                    </th>
                    <th scope="col" className="hidden py-3 pr-0 pl-8 text-right font-semibold sm:table-cell">
                      Rate
                    </th>
                    <th scope="col" className="py-3 pr-0 pl-8 text-right font-semibold">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {invoice.items.map((item) => (
                    <tr key={item.id} className="border-b border-gray-100">
                      <td className="max-w-0 px-0 py-5 align-top">
                        <div className="truncate font-medium text-gray-900">{item.title}</div>
                        <div className="truncate text-gray-500">{item.description}</div>
                      </td>
                      <td className="hidden py-5 pr-0 pl-8 text-right align-top text-gray-700 tabular-nums sm:table-cell">
                        {item.hours}
                      </td>
                      <td className="hidden py-5 pr-0 pl-8 text-right align-top text-gray-700 tabular-nums sm:table-cell">
                        {item.rate}
                      </td>
                      <td className="py-5 pr-0 pl-8 text-right align-top text-gray-700 tabular-nums">{item.price}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <th scope="row" className="px-0 pt-6 pb-0 font-normal text-gray-700 sm:hidden">
                      Subtotal
                    </th>
                    <th
                      scope="row"
                      colSpan={3}
                      className="hidden px-0 pt-6 pb-0 text-right font-normal text-gray-700 sm:table-cell"
                    >
                      Subtotal
                    </th>
                    <td className="pt-6 pr-0 pb-0 pl-8 text-right text-gray-900 tabular-nums">{invoice.subTotal}</td>
                  </tr>
                  <tr>
                    <th scope="row" className="pt-4 font-normal text-gray-700 sm:hidden">
                      Tax
                    </th>
                    <th
                      scope="row"
                      colSpan={3}
                      className="hidden pt-4 text-right font-normal text-gray-700 sm:table-cell"
                    >
                      Tax
                    </th>
                    <td className="pt-4 pr-0 pb-0 pl-8 text-right text-gray-900 tabular-nums">{invoice.tax}</td>
                  </tr>
                  <tr>
                    <th scope="row" className="pt-4 font-semibold text-gray-900 sm:hidden">
                      Total
                    </th>
                    <th
                      scope="row"
                      colSpan={3}
                      className="hidden pt-4 text-right font-semibold text-gray-900 sm:table-cell"
                    >
                      Total
                    </th>
                    <td className="pt-4 pr-0 pb-0 pl-8 text-right font-semibold text-gray-900 tabular-nums">
                      {invoice.total}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>

            <div className="lg:col-start-3">
              {/* Activity feed */}
              <h2 className="text-sm/6 font-semibold text-gray-900">Activity</h2>
              <ul role="list" className="mt-6 space-y-6">
                {activity.map((activityItem, activityItemIdx) => (
                  <li key={activityItem.id} className="relative flex gap-x-4">
                    <div
                      className={classNames(
                        activityItemIdx === activity.length - 1 ? 'h-6' : '-bottom-6',
                        'absolute top-0 left-0 flex w-6 justify-center',
                      )}
                    >
                      <div className="w-px bg-gray-200" />
                    </div>
                    {activityItem.type === 'commented' ? (
                      <>
                        <img
                          alt=""
                          src={activityItem.person.imageUrl}
                          className="relative mt-3 size-6 flex-none rounded-full bg-gray-50"
                        />
                        <div className="flex-auto rounded-md p-3 ring-1 ring-gray-200 ring-inset">
                          <div className="flex justify-between gap-x-4">
                            <div className="py-0.5 text-xs/5 text-gray-500">
                              <span className="font-medium text-gray-900">{activityItem.person.name}</span> commented
                            </div>
                            <time dateTime={activityItem.dateTime} className="flex-none py-0.5 text-xs/5 text-gray-500">
                              {activityItem.date}
                            </time>
                          </div>
                          <p className="text-sm/6 text-gray-500">{activityItem.comment}</p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="relative flex size-6 flex-none items-center justify-center bg-white">
                          {activityItem.type === 'paid' ? (
                            <CheckCircleIcon aria-hidden="true" className="size-6 text-indigo-600" />
                          ) : (
                            <div className="size-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300" />
                          )}
                        </div>
                        <p className="flex-auto py-0.5 text-xs/5 text-gray-500">
                          <span className="font-medium text-gray-900">{activityItem.person.name}</span>{' '}
                          {activityItem.type} the invoice.
                        </p>
                        <time dateTime={activityItem.dateTime} className="flex-none py-0.5 text-xs/5 text-gray-500">
                          {activityItem.date}
                        </time>
                      </>
                    )}
                  </li>
                ))}
              </ul>

              {/* New comment form */}
              <div className="mt-6 flex gap-x-3">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  className="size-6 flex-none rounded-full bg-gray-50"
                />
                <form action="#" className="relative flex-auto">
                  <div className="overflow-hidden rounded-lg pb-12 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                    <label htmlFor="comment" className="sr-only">
                      Add your comment
                    </label>
                    <textarea
                      id="comment"
                      name="comment"
                      rows={2}
                      placeholder="Add your comment..."
                      className="block w-full resize-none bg-transparent px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                      defaultValue={''}
                    />
                  </div>

                  <div className="absolute inset-x-0 bottom-0 flex justify-between py-2 pr-2 pl-3">
                    <div className="flex items-center space-x-5">
                      <div className="flex items-center">
                        <button
                          type="button"
                          className="-m-2.5 flex size-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500"
                        >
                          <PaperClipIcon aria-hidden="true" className="size-5" />
                          <span className="sr-only">Attach a file</span>
                        </button>
                      </div>
                      <div className="flex items-center">
                        <Listbox value={selected} onChange={setSelected}>
                          <Label className="sr-only">Your mood</Label>
                          <div className="relative">
                            <ListboxButton className="relative -m-2.5 flex size-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500">
                              <span className="flex items-center justify-center">
                                {selected.value === null ? (
                                  <span>
                                    <FaceSmileIcon aria-hidden="true" className="size-5 shrink-0" />
                                    <span className="sr-only">Add your mood</span>
                                  </span>
                                ) : (
                                  <span>
                                    <span
                                      className={classNames(
                                        selected.bgColor,
                                        'flex size-8 items-center justify-center rounded-full',
                                      )}
                                    >
                                      <selected.icon aria-hidden="true" className="size-5 shrink-0 text-white" />
                                    </span>
                                    <span className="sr-only">{selected.name}</span>
                                  </span>
                                )}
                              </span>
                            </ListboxButton>

                            <ListboxOptions
                              transition
                              className="absolute bottom-10 z-10 -ml-6 w-60 rounded-lg bg-white py-3 text-base ring-1 shadow-sm ring-black/5 focus:outline-hidden data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:ml-auto sm:w-64 sm:text-sm"
                            >
                              {moods.map((mood) => (
                                <ListboxOption
                                  key={mood.value}
                                  value={mood}
                                  className="relative cursor-default bg-white px-3 py-2 select-none data-focus:bg-gray-100"
                                >
                                  <div className="flex items-center">
                                    <div
                                      className={classNames(
                                        mood.bgColor,
                                        'flex size-8 items-center justify-center rounded-full',
                                      )}
                                    >
                                      <mood.icon
                                        aria-hidden="true"
                                        className={classNames(mood.iconColor, 'size-5 shrink-0')}
                                      />
                                    </div>
                                    <span className="ml-3 block truncate font-medium">{mood.name}</span>
                                  </div>
                                </ListboxOption>
                              ))}
                            </ListboxOptions>
                          </div>
                        </Listbox>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50"
                    >
                      Comment
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
`,He=()=>{const l=[{id:"01",name:"Sidebar on dark",component:e.jsx(se,{}),raw:te},{id:"02",name:"Stacked",component:e.jsx(le,{}),raw:ie}];return e.jsx("div",{className:"space-y-10 pb-20",children:l.map(t=>e.jsxs("section",{children:[e.jsxs("h2",{className:"mb-4 text-lg font-bold text-gray-800",children:[t.id,". ",t.name]}),e.jsx(C,{name:t.name,code:t.raw,children:t.component})]},t.id))})};export{He as default};
