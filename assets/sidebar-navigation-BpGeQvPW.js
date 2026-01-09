import{j as e}from"./index-CvCVbuS9.js";import{P as y}from"./PreviewWrapper-TzFvRoPZ.js";import{F as n,a as i}from"./HomeIcon-DYfG8a2o.js";import{F as o}from"./UsersIcon-BtfmJCZO.js";import{F as l}from"./FolderIcon-BaDjF-i0.js";import{F as c}from"./CalendarIcon-BGNgCXOy.js";import{F as m}from"./ChartPieIcon-0b6DQGNv.js";import{F as x}from"./ChevronRightIcon-Bscp0ek7.js";import{X as g,x as t,L as p}from"./disclosure-Bconf5lh.js";import"./use-resolve-button-type-J0J8N5g4.js";import"./bugs-qQ_SbDk4.js";const b=[{name:"Dashboard",href:"#",icon:n,count:"5",current:!0},{name:"Team",href:"#",icon:o,current:!1},{name:"Projects",href:"#",icon:l,count:"12",current:!1},{name:"Calendar",href:"#",icon:c,count:"20+",current:!1},{name:"Documents",href:"#",icon:i,current:!1},{name:"Reports",href:"#",icon:m,current:!1}],N=[{id:1,name:"Heroicons",href:"#",initial:"H",current:!1},{id:2,name:"Tailwind Labs",href:"#",initial:"T",current:!1},{id:3,name:"Workcation",href:"#",initial:"W",current:!1}];function s(...a){return a.filter(Boolean).join(" ")}function j(){return e.jsxs("div",{className:"flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6",children:[e.jsx("div",{className:"flex h-16 shrink-0 items-center",children:e.jsx("img",{alt:"Your Company",src:"https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600",className:"h-8 w-auto"})}),e.jsx("nav",{className:"flex flex-1 flex-col",children:e.jsxs("ul",{role:"list",className:"flex flex-1 flex-col gap-y-7",children:[e.jsx("li",{children:e.jsx("ul",{role:"list",className:"-mx-2 space-y-1",children:b.map(a=>e.jsx("li",{children:e.jsxs("a",{href:a.href,className:s(a.current?"bg-gray-50 text-indigo-600":"text-gray-700 hover:bg-gray-50 hover:text-indigo-600","group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"),children:[e.jsx(a.icon,{"aria-hidden":"true",className:s(a.current?"text-indigo-600":"text-gray-400 group-hover:text-indigo-600","size-6 shrink-0")}),a.name,a.count?e.jsx("span",{"aria-hidden":"true",className:"ml-auto w-9 min-w-max rounded-full bg-white px-2.5 py-0.5 text-center text-xs/5 font-medium whitespace-nowrap text-gray-600 ring-1 ring-gray-200 ring-inset",children:a.count}):null]})},a.name))})}),e.jsxs("li",{children:[e.jsx("div",{className:"text-xs/6 font-semibold text-gray-400",children:"Your teams"}),e.jsx("ul",{role:"list",className:"-mx-2 mt-2 space-y-1",children:N.map(a=>e.jsx("li",{children:e.jsxs("a",{href:a.href,className:s(a.current?"bg-gray-50 text-indigo-600":"text-gray-700 hover:bg-gray-50 hover:text-indigo-600","group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"),children:[e.jsx("span",{className:s(a.current?"border-indigo-600 text-indigo-600":"border-gray-200 text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600","flex size-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium"),children:a.initial}),e.jsx("span",{className:"truncate",children:a.name})]})},a.name))})]}),e.jsx("li",{className:"-mx-6 mt-auto",children:e.jsxs("a",{href:"#",className:"flex items-center gap-x-4 px-6 py-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-50",children:[e.jsx("img",{alt:"",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",className:"size-8 rounded-full bg-gray-50"}),e.jsx("span",{className:"sr-only",children:"Your profile"}),e.jsx("span",{"aria-hidden":"true",children:"Tom Cook"})]})})]})})]})}const v=`import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, count: '5', current: true },
  { name: 'Team', href: '#', icon: UsersIcon, current: false },
  { name: 'Projects', href: '#', icon: FolderIcon, count: '12', current: false },
  { name: 'Calendar', href: '#', icon: CalendarIcon, count: '20+', current: false },
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
  return (
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
                    {item.count ? (
                      <span
                        aria-hidden="true"
                        className="ml-auto w-9 min-w-max rounded-full bg-white px-2.5 py-0.5 text-center text-xs/5 font-medium whitespace-nowrap text-gray-600 ring-1 ring-gray-200 ring-inset"
                      >
                        {item.count}
                      </span>
                    ) : null}
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
  )
}
`,w=[{name:"Dashboard",href:"#",icon:n,count:"5",current:!0},{name:"Team",href:"#",icon:o,current:!1},{name:"Projects",href:"#",icon:l,count:"12",current:!1},{name:"Calendar",href:"#",icon:c,count:"20+",current:!1},{name:"Documents",href:"#",icon:i,current:!1},{name:"Reports",href:"#",icon:m,current:!1}],k=[{id:1,name:"Heroicons",href:"#",initial:"H",current:!1},{id:2,name:"Tailwind Labs",href:"#",initial:"T",current:!1},{id:3,name:"Workcation",href:"#",initial:"W",current:!1}];function h(...a){return a.filter(Boolean).join(" ")}function D(){return e.jsxs("div",{className:"flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6",children:[e.jsx("div",{className:"flex h-16 shrink-0 items-center",children:e.jsx("img",{alt:"Your Company",src:"https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500",className:"h-8 w-auto"})}),e.jsx("nav",{className:"flex flex-1 flex-col",children:e.jsxs("ul",{role:"list",className:"flex flex-1 flex-col gap-y-7",children:[e.jsx("li",{children:e.jsx("ul",{role:"list",className:"-mx-2 space-y-1",children:w.map(a=>e.jsx("li",{children:e.jsxs("a",{href:a.href,className:h(a.current?"bg-gray-800 text-white":"text-gray-400 hover:bg-gray-800 hover:text-white","group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"),children:[e.jsx(a.icon,{"aria-hidden":"true",className:"size-6 shrink-0"}),a.name,a.count?e.jsx("span",{"aria-hidden":"true",className:"ml-auto w-9 min-w-max rounded-full bg-gray-900 px-2.5 py-0.5 text-center text-xs/5 font-medium whitespace-nowrap text-white ring-1 ring-gray-700 ring-inset",children:a.count}):null]})},a.name))})}),e.jsxs("li",{children:[e.jsx("div",{className:"text-xs/6 font-semibold text-gray-400",children:"Your teams"}),e.jsx("ul",{role:"list",className:"-mx-2 mt-2 space-y-1",children:k.map(a=>e.jsx("li",{children:e.jsxs("a",{href:a.href,className:h(a.current?"bg-gray-800 text-white":"text-gray-400 hover:bg-gray-800 hover:text-white","group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"),children:[e.jsx("span",{className:"flex size-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white",children:a.initial}),e.jsx("span",{className:"truncate",children:a.name})]})},a.name))})]}),e.jsx("li",{className:"-mx-6 mt-auto",children:e.jsxs("a",{href:"#",className:"flex items-center gap-x-4 px-6 py-3 text-sm/6 font-semibold text-white hover:bg-gray-800",children:[e.jsx("img",{alt:"",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",className:"size-8 rounded-full bg-gray-800"}),e.jsx("span",{className:"sr-only",children:"Your profile"}),e.jsx("span",{"aria-hidden":"true",children:"Tom Cook"})]})})]})})]})}const I=`import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, count: '5', current: true },
  { name: 'Team', href: '#', icon: UsersIcon, current: false },
  { name: 'Projects', href: '#', icon: FolderIcon, count: '12', current: false },
  { name: 'Calendar', href: '#', icon: CalendarIcon, count: '20+', current: false },
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
  return (
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
                      item.current ? 'bg-gray-800 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                      'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                    )}
                  >
                    <item.icon aria-hidden="true" className="size-6 shrink-0" />
                    {item.name}
                    {item.count ? (
                      <span
                        aria-hidden="true"
                        className="ml-auto w-9 min-w-max rounded-full bg-gray-900 px-2.5 py-0.5 text-center text-xs/5 font-medium whitespace-nowrap text-white ring-1 ring-gray-700 ring-inset"
                      >
                        {item.count}
                      </span>
                    ) : null}
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
                      team.current ? 'bg-gray-800 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white',
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
  )
}
`,C=[{name:"Dashboard",href:"#",current:!0},{name:"Teams",current:!1,children:[{name:"Engineering",href:"#"},{name:"Human Resources",href:"#"},{name:"Customer Success",href:"#"}]},{name:"Projects",current:!1,children:[{name:"GraphQL API",href:"#"},{name:"iOS App",href:"#"},{name:"Android App",href:"#"},{name:"New Customer Portal",href:"#"}]},{name:"Calendar",href:"#",current:!1},{name:"Documents",href:"#",current:!1},{name:"Reports",href:"#",current:!1}];function d(...a){return a.filter(Boolean).join(" ")}function P(){return e.jsxs("div",{className:"flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6",children:[e.jsx("div",{className:"flex h-16 shrink-0 items-center",children:e.jsx("img",{alt:"Your Company",src:"https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600",className:"h-8 w-auto"})}),e.jsx("nav",{className:"flex flex-1 flex-col",children:e.jsxs("ul",{role:"list",className:"flex flex-1 flex-col gap-y-7",children:[e.jsx("li",{children:e.jsx("ul",{role:"list",className:"-mx-2 space-y-1",children:C.map(a=>e.jsx("li",{children:a.children?e.jsxs(g,{as:"div",children:[e.jsxs(t,{className:d(a.current?"bg-gray-50":"hover:bg-gray-50","group flex w-full items-center gap-x-3 rounded-md p-2 text-left text-sm/6 font-semibold text-gray-700"),children:[e.jsx(x,{"aria-hidden":"true",className:"size-5 shrink-0 text-gray-400 group-data-open:rotate-90 group-data-open:text-gray-500"}),a.name]}),e.jsx(p,{as:"ul",className:"mt-1 px-2",children:a.children.map(r=>e.jsx("li",{children:e.jsx(t,{as:"a",href:r.href,className:d(r.current?"bg-gray-50":"hover:bg-gray-50","block rounded-md py-2 pr-2 pl-9 text-sm/6 text-gray-700"),children:r.name})},r.name))})]}):e.jsx("a",{href:a.href,className:d(a.current?"bg-gray-50":"hover:bg-gray-50","block rounded-md py-2 pr-2 pl-10 text-sm/6 font-semibold text-gray-700"),children:a.name})},a.name))})}),e.jsx("li",{className:"-mx-6 mt-auto",children:e.jsxs("a",{href:"#",className:"flex items-center gap-x-4 px-6 py-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-50",children:[e.jsx("img",{alt:"",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",className:"size-8 rounded-full bg-gray-50"}),e.jsx("span",{className:"sr-only",children:"Your profile"}),e.jsx("span",{"aria-hidden":"true",children:"Tom Cook"})]})})]})})]})}const H=`import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  {
    name: 'Teams',
    current: false,
    children: [
      { name: 'Engineering', href: '#' },
      { name: 'Human Resources', href: '#' },
      { name: 'Customer Success', href: '#' },
    ],
  },
  {
    name: 'Projects',
    current: false,
    children: [
      { name: 'GraphQL API', href: '#' },
      { name: 'iOS App', href: '#' },
      { name: 'Android App', href: '#' },
      { name: 'New Customer Portal', href: '#' },
    ],
  },
  { name: 'Calendar', href: '#', current: false },
  { name: 'Documents', href: '#', current: false },
  { name: 'Reports', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
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
                  {!item.children ? (
                    <a
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-50' : 'hover:bg-gray-50',
                        'block rounded-md py-2 pr-2 pl-10 text-sm/6 font-semibold text-gray-700',
                      )}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Disclosure as="div">
                      <DisclosureButton
                        className={classNames(
                          item.current ? 'bg-gray-50' : 'hover:bg-gray-50',
                          'group flex w-full items-center gap-x-3 rounded-md p-2 text-left text-sm/6 font-semibold text-gray-700',
                        )}
                      >
                        <ChevronRightIcon
                          aria-hidden="true"
                          className="size-5 shrink-0 text-gray-400 group-data-open:rotate-90 group-data-open:text-gray-500"
                        />
                        {item.name}
                      </DisclosureButton>
                      <DisclosurePanel as="ul" className="mt-1 px-2">
                        {item.children.map((subItem) => (
                          <li key={subItem.name}>
                            <DisclosureButton
                              as="a"
                              href={subItem.href}
                              className={classNames(
                                subItem.current ? 'bg-gray-50' : 'hover:bg-gray-50',
                                'block rounded-md py-2 pr-2 pl-9 text-sm/6 text-gray-700',
                              )}
                            >
                              {subItem.name}
                            </DisclosureButton>
                          </li>
                        ))}
                      </DisclosurePanel>
                    </Disclosure>
                  )}
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
  )
}
`,B=[{name:"Dashboard",href:"#",icon:n,current:!0},{name:"Teams",icon:o,current:!1,children:[{name:"Engineering",href:"#"},{name:"Human Resources",href:"#"},{name:"Customer Success",href:"#"}]},{name:"Projects",icon:l,current:!1,children:[{name:"GraphQL API",href:"#"},{name:"iOS App",href:"#"},{name:"Android App",href:"#"},{name:"New Customer Portal",href:"#"}]},{name:"Calendar",href:"#",icon:c,current:!1},{name:"Documents",href:"#",icon:i,current:!1},{name:"Reports",href:"#",icon:m,current:!1}];function u(...a){return a.filter(Boolean).join(" ")}function T(){return e.jsxs("div",{className:"flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6",children:[e.jsx("div",{className:"flex h-16 shrink-0 items-center",children:e.jsx("img",{alt:"Your Company",src:"https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600",className:"h-8 w-auto"})}),e.jsx("nav",{className:"flex flex-1 flex-col",children:e.jsxs("ul",{role:"list",className:"flex flex-1 flex-col gap-y-7",children:[e.jsx("li",{children:e.jsx("ul",{role:"list",className:"-mx-2 space-y-1",children:B.map(a=>e.jsx("li",{children:a.children?e.jsxs(g,{as:"div",children:[e.jsxs(t,{className:u(a.current?"bg-gray-50":"hover:bg-gray-50","group flex w-full items-center gap-x-3 rounded-md p-2 text-left text-sm/6 font-semibold text-gray-700"),children:[e.jsx(a.icon,{"aria-hidden":"true",className:"size-6 shrink-0 text-gray-400"}),a.name,e.jsx(x,{"aria-hidden":"true",className:"ml-auto size-5 shrink-0 text-gray-400 group-data-open:rotate-90 group-data-open:text-gray-500"})]}),e.jsx(p,{as:"ul",className:"mt-1 px-2",children:a.children.map(r=>e.jsx("li",{children:e.jsx(t,{as:"a",href:r.href,className:u(r.current?"bg-gray-50":"hover:bg-gray-50","block rounded-md py-2 pr-2 pl-9 text-sm/6 text-gray-700"),children:r.name})},r.name))})]}):e.jsxs("a",{href:a.href,className:u(a.current?"bg-gray-50":"hover:bg-gray-50","group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-700"),children:[e.jsx(a.icon,{"aria-hidden":"true",className:"size-6 shrink-0 text-gray-400"}),a.name]})},a.name))})}),e.jsx("li",{className:"-mx-6 mt-auto",children:e.jsxs("a",{href:"#",className:"flex items-center gap-x-4 px-6 py-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-50",children:[e.jsx("img",{alt:"",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",className:"size-8 rounded-full bg-gray-50"}),e.jsx("span",{className:"sr-only",children:"Your profile"}),e.jsx("span",{"aria-hidden":"true",children:"Tom Cook"})]})})]})})]})}const R=`import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
  {
    name: 'Teams',
    icon: UsersIcon,
    current: false,
    children: [
      { name: 'Engineering', href: '#' },
      { name: 'Human Resources', href: '#' },
      { name: 'Customer Success', href: '#' },
    ],
  },
  {
    name: 'Projects',
    icon: FolderIcon,
    current: false,
    children: [
      { name: 'GraphQL API', href: '#' },
      { name: 'iOS App', href: '#' },
      { name: 'Android App', href: '#' },
      { name: 'New Customer Portal', href: '#' },
    ],
  },
  { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
  { name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false },
  { name: 'Reports', href: '#', icon: ChartPieIcon, current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
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
                  {!item.children ? (
                    <a
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-50' : 'hover:bg-gray-50',
                        'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-700',
                      )}
                    >
                      <item.icon aria-hidden="true" className="size-6 shrink-0 text-gray-400" />
                      {item.name}
                    </a>
                  ) : (
                    <Disclosure as="div">
                      <DisclosureButton
                        className={classNames(
                          item.current ? 'bg-gray-50' : 'hover:bg-gray-50',
                          'group flex w-full items-center gap-x-3 rounded-md p-2 text-left text-sm/6 font-semibold text-gray-700',
                        )}
                      >
                        <item.icon aria-hidden="true" className="size-6 shrink-0 text-gray-400" />
                        {item.name}
                        <ChevronRightIcon
                          aria-hidden="true"
                          className="ml-auto size-5 shrink-0 text-gray-400 group-data-open:rotate-90 group-data-open:text-gray-500"
                        />
                      </DisclosureButton>
                      <DisclosurePanel as="ul" className="mt-1 px-2">
                        {item.children.map((subItem) => (
                          <li key={subItem.name}>
                            {/* 44px */}
                            <DisclosureButton
                              as="a"
                              href={subItem.href}
                              className={classNames(
                                subItem.current ? 'bg-gray-50' : 'hover:bg-gray-50',
                                'block rounded-md py-2 pr-2 pl-9 text-sm/6 text-gray-700',
                              )}
                            >
                              {subItem.name}
                            </DisclosureButton>
                          </li>
                        ))}
                      </DisclosurePanel>
                    </Disclosure>
                  )}
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
  )
}
`,z=[{name:"Dashboard",href:"#",icon:n,count:"5",current:!0},{name:"Team",href:"#",icon:o,current:!1},{name:"Projects",href:"#",icon:l,count:"12",current:!1},{name:"Calendar",href:"#",icon:c,count:"20+",current:!1},{name:"Documents",href:"#",icon:i,current:!1},{name:"Reports",href:"#",icon:m,current:!1}],W=[{id:1,name:"Heroicons",href:"#",initial:"H",current:!1},{id:2,name:"Tailwind Labs",href:"#",initial:"T",current:!1},{id:3,name:"Workcation",href:"#",initial:"W",current:!1}];function f(...a){return a.filter(Boolean).join(" ")}function E(){return e.jsxs("div",{className:"flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6",children:[e.jsx("div",{className:"flex h-16 shrink-0 items-center",children:e.jsx("img",{alt:"Your Company",src:"https://tailwindui.com/plus-assets/img/logos/mark.svg?color=white",className:"h-8 w-auto"})}),e.jsx("nav",{className:"flex flex-1 flex-col",children:e.jsxs("ul",{role:"list",className:"flex flex-1 flex-col gap-y-7",children:[e.jsx("li",{children:e.jsx("ul",{role:"list",className:"-mx-2 space-y-1",children:z.map(a=>e.jsx("li",{children:e.jsxs("a",{href:a.href,className:f(a.current?"bg-indigo-700 text-white":"text-indigo-200 hover:bg-indigo-700 hover:text-white","group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"),children:[e.jsx(a.icon,{"aria-hidden":"true",className:f(a.current?"text-white":"text-indigo-200 group-hover:text-white","size-6 shrink-0")}),a.name,a.count?e.jsx("span",{"aria-hidden":"true",className:"ml-auto w-9 min-w-max rounded-full bg-indigo-600 px-2.5 py-0.5 text-center text-xs/5 font-medium whitespace-nowrap text-white ring-1 ring-indigo-500 ring-inset",children:a.count}):null]})},a.name))})}),e.jsxs("li",{children:[e.jsx("div",{className:"text-xs/6 font-semibold text-indigo-200",children:"Your teams"}),e.jsx("ul",{role:"list",className:"-mx-2 mt-2 space-y-1",children:W.map(a=>e.jsx("li",{children:e.jsxs("a",{href:a.href,className:f(a.current?"bg-indigo-700 text-white":"text-indigo-200 hover:bg-indigo-700 hover:text-white","group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"),children:[e.jsx("span",{className:"flex size-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 text-[0.625rem] font-medium text-white",children:a.initial}),e.jsx("span",{className:"truncate",children:a.name})]})},a.name))})]}),e.jsx("li",{className:"-mx-6 mt-auto",children:e.jsxs("a",{href:"#",className:"flex items-center gap-x-4 px-6 py-3 text-sm/6 font-semibold text-white hover:bg-indigo-700",children:[e.jsx("img",{alt:"",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",className:"size-8 rounded-full bg-indigo-700"}),e.jsx("span",{className:"sr-only",children:"Your profile"}),e.jsx("span",{"aria-hidden":"true",children:"Tom Cook"})]})})]})})]})}const Y=`import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, count: '5', current: true },
  { name: 'Team', href: '#', icon: UsersIcon, current: false },
  { name: 'Projects', href: '#', icon: FolderIcon, count: '12', current: false },
  { name: 'Calendar', href: '#', icon: CalendarIcon, count: '20+', current: false },
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
  return (
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
                    {item.count ? (
                      <span
                        aria-hidden="true"
                        className="ml-auto w-9 min-w-max rounded-full bg-indigo-600 px-2.5 py-0.5 text-center text-xs/5 font-medium whitespace-nowrap text-white ring-1 ring-indigo-500 ring-inset"
                      >
                        {item.count}
                      </span>
                    ) : null}
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
  )
}
`,G=()=>{const a=[{id:"01",name:"Light",component:e.jsx(j,{}),raw:v},{id:"02",name:"Dark",component:e.jsx(D,{}),raw:I},{id:"03",name:"With expandable sections",component:e.jsx(P,{}),raw:H},{id:"04",name:"With secondary navigation",component:e.jsx(T,{}),raw:R},{id:"05",name:"Brand",component:e.jsx(E,{}),raw:Y}];return e.jsx("div",{className:"space-y-10 pb-20",children:a.map(r=>e.jsxs("section",{children:[e.jsxs("h2",{className:"mb-4 text-lg font-bold text-gray-800",children:[r.id,". ",r.name]}),e.jsx(y,{name:r.name,code:r.raw,children:r.component})]},r.id))})};export{G as default};
