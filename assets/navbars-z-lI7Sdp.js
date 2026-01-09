import{j as e}from"./index-CvCVbuS9.js";import{P as S}from"./PreviewWrapper-TzFvRoPZ.js";import{F as i}from"./Bars3Icon-DlixG59f.js";import{F as n}from"./XMarkIcon-DRrKznFm.js";import{F as r}from"./BellIcon-Celbp3Xl.js";import{X as c,x as s,L as m}from"./disclosure-Bconf5lh.js";import{l as o,f as l,y as d,g as t}from"./menu-DqpGavi0.js";import{F as P}from"./PlusIcon-C7vyHRSD.js";import{F as h}from"./MagnifyingGlassIcon-Tr5kZRgo.js";import{v as C,D as O,L as E}from"./popover-CbBi4FOn.js";import"./use-resolve-button-type-J0J8N5g4.js";import"./bugs-qQ_SbDk4.js";import"./floating-CjydGm1Z.js";import"./element-movement-BT6A7GGi.js";import"./use-text-value-CB9rzUUM.js";import"./use-tree-walker-_f7mgbza.js";import"./label-CY_Q6YdE.js";const b=[{name:"Dashboard",href:"#",current:!0},{name:"Team",href:"#",current:!1},{name:"Projects",href:"#",current:!1},{name:"Calendar",href:"#",current:!1}];function y(...a){return a.filter(Boolean).join(" ")}function Y(){return e.jsxs(c,{as:"nav",className:"bg-gray-800",children:[e.jsx("div",{className:"mx-auto max-w-7xl px-2 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"relative flex h-16 items-center justify-between",children:[e.jsx("div",{className:"absolute inset-y-0 left-0 flex items-center sm:hidden",children:e.jsxs(s,{className:"group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset",children:[e.jsx("span",{className:"absolute -inset-0.5"}),e.jsx("span",{className:"sr-only",children:"Open main menu"}),e.jsx(i,{"aria-hidden":"true",className:"block size-6 group-data-open:hidden"}),e.jsx(n,{"aria-hidden":"true",className:"hidden size-6 group-data-open:block"})]})}),e.jsxs("div",{className:"flex flex-1 items-center justify-center sm:items-stretch sm:justify-start",children:[e.jsx("div",{className:"flex shrink-0 items-center",children:e.jsx("img",{alt:"Your Company",src:"https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500",className:"h-8 w-auto"})}),e.jsx("div",{className:"hidden sm:ml-6 sm:block",children:e.jsx("div",{className:"flex space-x-4",children:b.map(a=>e.jsx("a",{href:a.href,"aria-current":a.current?"page":void 0,className:y(a.current?"bg-gray-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white","rounded-md px-3 py-2 text-sm font-medium"),children:a.name},a.name))})})]}),e.jsxs("div",{className:"absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0",children:[e.jsxs("button",{type:"button",className:"relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden",children:[e.jsx("span",{className:"absolute -inset-1.5"}),e.jsx("span",{className:"sr-only",children:"View notifications"}),e.jsx(r,{"aria-hidden":"true",className:"size-6"})]}),e.jsxs(o,{as:"div",className:"relative ml-3",children:[e.jsx("div",{children:e.jsxs(l,{className:"relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden",children:[e.jsx("span",{className:"absolute -inset-1.5"}),e.jsx("span",{className:"sr-only",children:"Open user menu"}),e.jsx("img",{alt:"",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",className:"size-8 rounded-full"})]})}),e.jsxs(d,{transition:!0,className:"absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in",children:[e.jsx(t,{children:e.jsx("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden",children:"Your Profile"})}),e.jsx(t,{children:e.jsx("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden",children:"Settings"})}),e.jsx(t,{children:e.jsx("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden",children:"Sign out"})})]})]})]})]})}),e.jsx(m,{className:"sm:hidden",children:e.jsx("div",{className:"space-y-1 px-2 pt-2 pb-3",children:b.map(a=>e.jsx(s,{as:"a",href:a.href,"aria-current":a.current?"page":void 0,className:y(a.current?"bg-gray-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white","block rounded-md px-3 py-2 text-base font-medium"),children:a.name},a.name))})})]})}const T=`import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img
                alt="Your Company"
                src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                className="h-8 w-auto"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="size-6" />
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="size-8 rounded-full"
                  />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Your Profile
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
`,x={name:"Tom Cook",email:"tom@example.com",imageUrl:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"},v=[{name:"Dashboard",href:"#",current:!0},{name:"Team",href:"#",current:!1},{name:"Projects",href:"#",current:!1},{name:"Calendar",href:"#",current:!1}],N=[{name:"Your Profile",href:"#"},{name:"Settings",href:"#"},{name:"Sign out",href:"#"}];function j(...a){return a.filter(Boolean).join(" ")}function W(){return e.jsxs(c,{as:"nav",className:"bg-gray-800",children:[e.jsx("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex h-16 justify-between",children:[e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"mr-2 -ml-2 flex items-center md:hidden",children:e.jsxs(s,{className:"group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset",children:[e.jsx("span",{className:"absolute -inset-0.5"}),e.jsx("span",{className:"sr-only",children:"Open main menu"}),e.jsx(i,{"aria-hidden":"true",className:"block size-6 group-data-open:hidden"}),e.jsx(n,{"aria-hidden":"true",className:"hidden size-6 group-data-open:block"})]})}),e.jsx("div",{className:"flex shrink-0 items-center",children:e.jsx("img",{alt:"Your Company",src:"https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500",className:"h-8 w-auto"})}),e.jsx("div",{className:"hidden md:ml-6 md:flex md:items-center md:space-x-4",children:v.map(a=>e.jsx("a",{href:a.href,"aria-current":a.current?"page":void 0,className:j(a.current?"bg-gray-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white","rounded-md px-3 py-2 text-sm font-medium"),children:a.name},a.name))})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"shrink-0",children:e.jsxs("button",{type:"button",className:"relative inline-flex items-center gap-x-1.5 rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500",children:[e.jsx(P,{"aria-hidden":"true",className:"-ml-0.5 size-5"}),"New Job"]})}),e.jsxs("div",{className:"hidden md:ml-4 md:flex md:shrink-0 md:items-center",children:[e.jsxs("button",{type:"button",className:"relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden",children:[e.jsx("span",{className:"absolute -inset-1.5"}),e.jsx("span",{className:"sr-only",children:"View notifications"}),e.jsx(r,{"aria-hidden":"true",className:"size-6"})]}),e.jsxs(o,{as:"div",className:"relative ml-3",children:[e.jsx("div",{children:e.jsxs(l,{className:"relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden",children:[e.jsx("span",{className:"absolute -inset-1.5"}),e.jsx("span",{className:"sr-only",children:"Open user menu"}),e.jsx("img",{alt:"",src:x.imageUrl,className:"size-8 rounded-full"})]})}),e.jsx(d,{transition:!0,className:"absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-75 data-leave:ease-in",children:N.map(a=>e.jsx(t,{children:e.jsx("a",{href:a.href,className:"block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden",children:a.name})},a.name))})]})]})]})]})}),e.jsxs(m,{className:"md:hidden",children:[e.jsx("div",{className:"space-y-1 px-2 pt-2 pb-3 sm:px-3",children:v.map(a=>e.jsx(s,{as:"a",href:a.href,"aria-current":a.current?"page":void 0,className:j(a.current?"bg-gray-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white","block rounded-md px-3 py-2 text-base font-medium"),children:a.name},a.name))}),e.jsxs("div",{className:"border-t border-gray-700 pt-4 pb-3",children:[e.jsxs("div",{className:"flex items-center px-5 sm:px-6",children:[e.jsx("div",{className:"shrink-0",children:e.jsx("img",{alt:"",src:x.imageUrl,className:"size-10 rounded-full"})}),e.jsxs("div",{className:"ml-3",children:[e.jsx("div",{className:"text-base font-medium text-white",children:x.name}),e.jsx("div",{className:"text-sm font-medium text-gray-400",children:x.email})]}),e.jsxs("button",{type:"button",className:"relative ml-auto shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden",children:[e.jsx("span",{className:"absolute -inset-1.5"}),e.jsx("span",{className:"sr-only",children:"View notifications"}),e.jsx(r,{"aria-hidden":"true",className:"size-6"})]})]}),e.jsx("div",{className:"mt-3 space-y-1 px-2 sm:px-3",children:N.map(a=>e.jsx(s,{as:"a",href:a.href,className:"block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white",children:a.name},a.name))})]})]})]})}const V=`import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { PlusIcon } from '@heroicons/react/20/solid'

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="mr-2 -ml-2 flex items-center md:hidden">
              {/* Mobile menu button */}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
              </DisclosureButton>
            </div>
            <div className="flex shrink-0 items-center">
              <img
                alt="Your Company"
                src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                className="h-8 w-auto"
              />
            </div>
            <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  aria-current={item.current ? 'page' : undefined}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'rounded-md px-3 py-2 text-sm font-medium',
                  )}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <div className="shrink-0">
              <button
                type="button"
                className="relative inline-flex items-center gap-x-1.5 rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                <PlusIcon aria-hidden="true" className="-ml-0.5 size-5" />
                New Job
              </button>
            </div>
            <div className="hidden md:ml-4 md:flex md:shrink-0 md:items-center">
              <button
                type="button"
                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
                <BellIcon aria-hidden="true" className="size-6" />
              </button>

              {/* Profile dropdown */}
              <Menu as="div" className="relative ml-3">
                <div>
                  <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <img alt="" src={user.imageUrl} className="size-8 rounded-full" />
                  </MenuButton>
                </div>
                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                >
                  {userNavigation.map((item) => (
                    <MenuItem key={item.name}>
                      <a
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
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

      <DisclosurePanel className="md:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
        <div className="border-t border-gray-700 pt-4 pb-3">
          <div className="flex items-center px-5 sm:px-6">
            <div className="shrink-0">
              <img alt="" src={user.imageUrl} className="size-10 rounded-full" />
            </div>
            <div className="ml-3">
              <div className="text-base font-medium text-white">{user.name}</div>
              <div className="text-sm font-medium text-gray-400">{user.email}</div>
            </div>
            <button
              type="button"
              className="relative ml-auto shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-3 space-y-1 px-2 sm:px-3">
            {userNavigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
`;function J(){return e.jsxs(c,{as:"nav",className:"bg-gray-800",children:[e.jsx("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex h-16 items-center justify-between",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"shrink-0",children:e.jsx("img",{alt:"Your Company",src:"https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500",className:"h-8 w-auto"})}),e.jsx("div",{className:"hidden sm:ml-6 sm:block",children:e.jsxs("div",{className:"flex space-x-4",children:[e.jsx("a",{href:"#",className:"rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white",children:"Dashboard"}),e.jsx("a",{href:"#",className:"rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white",children:"Team"}),e.jsx("a",{href:"#",className:"rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white",children:"Projects"}),e.jsx("a",{href:"#",className:"rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white",children:"Calendar"})]})})]}),e.jsx("div",{className:"hidden sm:ml-6 sm:block",children:e.jsxs("div",{className:"flex items-center",children:[e.jsxs("button",{type:"button",className:"relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden",children:[e.jsx("span",{className:"absolute -inset-1.5"}),e.jsx("span",{className:"sr-only",children:"View notifications"}),e.jsx(r,{"aria-hidden":"true",className:"size-6"})]}),e.jsxs(o,{as:"div",className:"relative ml-3",children:[e.jsx("div",{children:e.jsxs(l,{className:"relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden",children:[e.jsx("span",{className:"absolute -inset-1.5"}),e.jsx("span",{className:"sr-only",children:"Open user menu"}),e.jsx("img",{alt:"",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",className:"size-8 rounded-full"})]})}),e.jsxs(d,{transition:!0,className:"absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in",children:[e.jsx(t,{children:e.jsx("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden",children:"Your Profile"})}),e.jsx(t,{children:e.jsx("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden",children:"Settings"})}),e.jsx(t,{children:e.jsx("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden",children:"Sign out"})})]})]})]})}),e.jsx("div",{className:"-mr-2 flex sm:hidden",children:e.jsxs(s,{className:"group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset",children:[e.jsx("span",{className:"absolute -inset-0.5"}),e.jsx("span",{className:"sr-only",children:"Open main menu"}),e.jsx(i,{"aria-hidden":"true",className:"block size-6 group-data-open:hidden"}),e.jsx(n,{"aria-hidden":"true",className:"hidden size-6 group-data-open:block"})]})})]})}),e.jsxs(m,{className:"sm:hidden",children:[e.jsxs("div",{className:"space-y-1 px-2 pt-2 pb-3",children:[e.jsx(s,{as:"a",href:"#",className:"block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white",children:"Dashboard"}),e.jsx(s,{as:"a",href:"#",className:"block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white",children:"Team"}),e.jsx(s,{as:"a",href:"#",className:"block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white",children:"Projects"}),e.jsx(s,{as:"a",href:"#",className:"block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white",children:"Calendar"})]}),e.jsxs("div",{className:"border-t border-gray-700 pt-4 pb-3",children:[e.jsxs("div",{className:"flex items-center px-5",children:[e.jsx("div",{className:"shrink-0",children:e.jsx("img",{alt:"",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",className:"size-10 rounded-full"})}),e.jsxs("div",{className:"ml-3",children:[e.jsx("div",{className:"text-base font-medium text-white",children:"Tom Cook"}),e.jsx("div",{className:"text-sm font-medium text-gray-400",children:"tom@example.com"})]}),e.jsxs("button",{type:"button",className:"relative ml-auto shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden",children:[e.jsx("span",{className:"absolute -inset-1.5"}),e.jsx("span",{className:"sr-only",children:"View notifications"}),e.jsx(r,{"aria-hidden":"true",className:"size-6"})]})]}),e.jsxs("div",{className:"mt-3 space-y-1 px-2",children:[e.jsx(s,{as:"a",href:"#",className:"block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white",children:"Your Profile"}),e.jsx(s,{as:"a",href:"#",className:"block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white",children:"Settings"}),e.jsx(s,{as:"a",href:"#",className:"block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white",children:"Sign out"})]})]})]})]})}const q=`import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="shrink-0">
              <img
                alt="Your Company"
                src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                className="h-8 w-auto"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                <a href="#" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white">
                  Dashboard
                </a>
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Team
                </a>
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Projects
                </a>
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Calendar
                </a>
              </div>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex items-center">
              <button
                type="button"
                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
                <BellIcon aria-hidden="true" className="size-6" />
              </button>

              {/* Profile dropdown */}
              <Menu as="div" className="relative ml-3">
                <div>
                  <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      className="size-8 rounded-full"
                    />
                  </MenuButton>
                </div>
                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                >
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                    >
                      Your Profile
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                    >
                      Settings
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                    >
                      Sign out
                    </a>
                  </MenuItem>
                </MenuItems>
              </Menu>
            </div>
          </div>
          <div className="-mr-2 flex sm:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
          <DisclosureButton
            as="a"
            href="#"
            className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
          >
            Dashboard
          </DisclosureButton>
          <DisclosureButton
            as="a"
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Team
          </DisclosureButton>
          <DisclosureButton
            as="a"
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Projects
          </DisclosureButton>
          <DisclosureButton
            as="a"
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Calendar
          </DisclosureButton>
        </div>
        <div className="border-t border-gray-700 pt-4 pb-3">
          <div className="flex items-center px-5">
            <div className="shrink-0">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="size-10 rounded-full"
              />
            </div>
            <div className="ml-3">
              <div className="text-base font-medium text-white">Tom Cook</div>
              <div className="text-sm font-medium text-gray-400">tom@example.com</div>
            </div>
            <button
              type="button"
              className="relative ml-auto shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-3 space-y-1 px-2">
            <DisclosureButton
              as="a"
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
            >
              Your Profile
            </DisclosureButton>
            <DisclosureButton
              as="a"
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
            >
              Settings
            </DisclosureButton>
            <DisclosureButton
              as="a"
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
            >
              Sign out
            </DisclosureButton>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
`;function H(){return e.jsxs(c,{as:"nav",className:"bg-white shadow-sm",children:[e.jsx("div",{className:"mx-auto max-w-7xl px-2 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"relative flex h-16 justify-between",children:[e.jsx("div",{className:"absolute inset-y-0 left-0 flex items-center sm:hidden",children:e.jsxs(s,{className:"group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:outline-hidden focus:ring-inset",children:[e.jsx("span",{className:"absolute -inset-0.5"}),e.jsx("span",{className:"sr-only",children:"Open main menu"}),e.jsx(i,{"aria-hidden":"true",className:"block size-6 group-data-open:hidden"}),e.jsx(n,{"aria-hidden":"true",className:"hidden size-6 group-data-open:block"})]})}),e.jsxs("div",{className:"flex flex-1 items-center justify-center sm:items-stretch sm:justify-start",children:[e.jsx("div",{className:"flex shrink-0 items-center",children:e.jsx("img",{alt:"Your Company",src:"https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600",className:"h-8 w-auto"})}),e.jsxs("div",{className:"hidden sm:ml-6 sm:flex sm:space-x-8",children:[e.jsx("a",{href:"#",className:"inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900",children:"Dashboard"}),e.jsx("a",{href:"#",className:"inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700",children:"Team"}),e.jsx("a",{href:"#",className:"inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700",children:"Projects"}),e.jsx("a",{href:"#",className:"inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700",children:"Calendar"})]})]}),e.jsxs("div",{className:"absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0",children:[e.jsxs("button",{type:"button",className:"relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden",children:[e.jsx("span",{className:"absolute -inset-1.5"}),e.jsx("span",{className:"sr-only",children:"View notifications"}),e.jsx(r,{"aria-hidden":"true",className:"size-6"})]}),e.jsxs(o,{as:"div",className:"relative ml-3",children:[e.jsx("div",{children:e.jsxs(l,{className:"relative flex rounded-full bg-white text-sm focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden",children:[e.jsx("span",{className:"absolute -inset-1.5"}),e.jsx("span",{className:"sr-only",children:"Open user menu"}),e.jsx("img",{alt:"",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",className:"size-8 rounded-full"})]})}),e.jsxs(d,{transition:!0,className:"absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-75 data-leave:ease-in",children:[e.jsx(t,{children:e.jsx("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden",children:"Your Profile"})}),e.jsx(t,{children:e.jsx("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden",children:"Settings"})}),e.jsx(t,{children:e.jsx("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden",children:"Sign out"})})]})]})]})]})}),e.jsx(m,{className:"sm:hidden",children:e.jsxs("div",{className:"space-y-1 pt-2 pb-4",children:[e.jsx(s,{as:"a",href:"#",className:"block border-l-4 border-indigo-500 bg-indigo-50 py-2 pr-4 pl-3 text-base font-medium text-indigo-700",children:"Dashboard"}),e.jsx(s,{as:"a",href:"#",className:"block border-l-4 border-transparent py-2 pr-4 pl-3 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700",children:"Team"}),e.jsx(s,{as:"a",href:"#",className:"block border-l-4 border-transparent py-2 pr-4 pl-3 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700",children:"Projects"}),e.jsx(s,{as:"a",href:"#",className:"block border-l-4 border-transparent py-2 pr-4 pl-3 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700",children:"Calendar"})]})})]})}const Q=`import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img
                alt="Your Company"
                src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
              <a
                href="#"
                className="inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900"
              >
                Dashboard
              </a>
              <a
                href="#"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >
                Team
              </a>
              <a
                href="#"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >
                Projects
              </a>
              <a
                href="#"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >
                Calendar
              </a>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="size-6" />
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-white text-sm focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="size-8 rounded-full"
                  />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Your Profile
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 pt-2 pb-4">
          {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
          <DisclosureButton
            as="a"
            href="#"
            className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pr-4 pl-3 text-base font-medium text-indigo-700"
          >
            Dashboard
          </DisclosureButton>
          <DisclosureButton
            as="a"
            href="#"
            className="block border-l-4 border-transparent py-2 pr-4 pl-3 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
          >
            Team
          </DisclosureButton>
          <DisclosureButton
            as="a"
            href="#"
            className="block border-l-4 border-transparent py-2 pr-4 pl-3 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
          >
            Projects
          </DisclosureButton>
          <DisclosureButton
            as="a"
            href="#"
            className="block border-l-4 border-transparent py-2 pr-4 pl-3 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
          >
            Calendar
          </DisclosureButton>
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
`;function $(){return e.jsxs(c,{as:"nav",className:"bg-white shadow-sm",children:[e.jsx("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex h-16 justify-between",children:[e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"flex shrink-0 items-center",children:e.jsx("img",{alt:"Your Company",src:"https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600",className:"h-8 w-auto"})}),e.jsxs("div",{className:"hidden sm:ml-6 sm:flex sm:space-x-8",children:[e.jsx("a",{href:"#",className:"inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900",children:"Dashboard"}),e.jsx("a",{href:"#",className:"inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700",children:"Team"}),e.jsx("a",{href:"#",className:"inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700",children:"Projects"}),e.jsx("a",{href:"#",className:"inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700",children:"Calendar"})]})]}),e.jsxs("div",{className:"hidden sm:ml-6 sm:flex sm:items-center",children:[e.jsxs("button",{type:"button",className:"relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden",children:[e.jsx("span",{className:"absolute -inset-1.5"}),e.jsx("span",{className:"sr-only",children:"View notifications"}),e.jsx(r,{"aria-hidden":"true",className:"size-6"})]}),e.jsxs(o,{as:"div",className:"relative ml-3",children:[e.jsx("div",{children:e.jsxs(l,{className:"relative flex rounded-full bg-white text-sm focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden",children:[e.jsx("span",{className:"absolute -inset-1.5"}),e.jsx("span",{className:"sr-only",children:"Open user menu"}),e.jsx("img",{alt:"",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",className:"size-8 rounded-full"})]})}),e.jsxs(d,{transition:!0,className:"absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-75 data-leave:ease-in",children:[e.jsx(t,{children:e.jsx("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden",children:"Your Profile"})}),e.jsx(t,{children:e.jsx("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden",children:"Settings"})}),e.jsx(t,{children:e.jsx("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden",children:"Sign out"})})]})]})]}),e.jsx("div",{className:"-mr-2 flex items-center sm:hidden",children:e.jsxs(s,{className:"group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:outline-hidden focus:ring-inset",children:[e.jsx("span",{className:"absolute -inset-0.5"}),e.jsx("span",{className:"sr-only",children:"Open main menu"}),e.jsx(i,{"aria-hidden":"true",className:"block size-6 group-data-open:hidden"}),e.jsx(n,{"aria-hidden":"true",className:"hidden size-6 group-data-open:block"})]})})]})}),e.jsxs(m,{className:"sm:hidden",children:[e.jsxs("div",{className:"space-y-1 pt-2 pb-3",children:[e.jsx(s,{as:"a",href:"#",className:"block border-l-4 border-indigo-500 bg-indigo-50 py-2 pr-4 pl-3 text-base font-medium text-indigo-700",children:"Dashboard"}),e.jsx(s,{as:"a",href:"#",className:"block border-l-4 border-transparent py-2 pr-4 pl-3 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700",children:"Team"}),e.jsx(s,{as:"a",href:"#",className:"block border-l-4 border-transparent py-2 pr-4 pl-3 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700",children:"Projects"}),e.jsx(s,{as:"a",href:"#",className:"block border-l-4 border-transparent py-2 pr-4 pl-3 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700",children:"Calendar"})]}),e.jsxs("div",{className:"border-t border-gray-200 pt-4 pb-3",children:[e.jsxs("div",{className:"flex items-center px-4",children:[e.jsx("div",{className:"shrink-0",children:e.jsx("img",{alt:"",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",className:"size-10 rounded-full"})}),e.jsxs("div",{className:"ml-3",children:[e.jsx("div",{className:"text-base font-medium text-gray-800",children:"Tom Cook"}),e.jsx("div",{className:"text-sm font-medium text-gray-500",children:"tom@example.com"})]}),e.jsxs("button",{type:"button",className:"relative ml-auto shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden",children:[e.jsx("span",{className:"absolute -inset-1.5"}),e.jsx("span",{className:"sr-only",children:"View notifications"}),e.jsx(r,{"aria-hidden":"true",className:"size-6"})]})]}),e.jsxs("div",{className:"mt-3 space-y-1",children:[e.jsx(s,{as:"a",href:"#",className:"block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800",children:"Your Profile"}),e.jsx(s,{as:"a",href:"#",className:"block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800",children:"Settings"}),e.jsx(s,{as:"a",href:"#",className:"block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800",children:"Sign out"})]})]})]})]})}const U=`import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="flex shrink-0 items-center">
              <img
                alt="Your Company"
                src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
              <a
                href="#"
                className="inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900"
              >
                Dashboard
              </a>
              <a
                href="#"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >
                Team
              </a>
              <a
                href="#"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >
                Projects
              </a>
              <a
                href="#"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >
                Calendar
              </a>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <button
              type="button"
              className="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="size-6" />
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-white text-sm focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="size-8 rounded-full"
                  />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Your Profile
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 pt-2 pb-3">
          {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
          <DisclosureButton
            as="a"
            href="#"
            className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pr-4 pl-3 text-base font-medium text-indigo-700"
          >
            Dashboard
          </DisclosureButton>
          <DisclosureButton
            as="a"
            href="#"
            className="block border-l-4 border-transparent py-2 pr-4 pl-3 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
          >
            Team
          </DisclosureButton>
          <DisclosureButton
            as="a"
            href="#"
            className="block border-l-4 border-transparent py-2 pr-4 pl-3 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
          >
            Projects
          </DisclosureButton>
          <DisclosureButton
            as="a"
            href="#"
            className="block border-l-4 border-transparent py-2 pr-4 pl-3 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
          >
            Calendar
          </DisclosureButton>
        </div>
        <div className="border-t border-gray-200 pt-4 pb-3">
          <div className="flex items-center px-4">
            <div className="shrink-0">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="size-10 rounded-full"
              />
            </div>
            <div className="ml-3">
              <div className="text-base font-medium text-gray-800">Tom Cook</div>
              <div className="text-sm font-medium text-gray-500">tom@example.com</div>
            </div>
            <button
              type="button"
              className="relative ml-auto shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-3 space-y-1">
            <DisclosureButton
              as="a"
              href="#"
              className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
            >
              Your Profile
            </DisclosureButton>
            <DisclosureButton
              as="a"
              href="#"
              className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
            >
              Settings
            </DisclosureButton>
            <DisclosureButton
              as="a"
              href="#"
              className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
            >
              Sign out
            </DisclosureButton>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
`;function X(){return e.jsxs(c,{as:"nav",className:"bg-white shadow-sm",children:[e.jsx("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex h-16 justify-between",children:[e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"mr-2 -ml-2 flex items-center md:hidden",children:e.jsxs(s,{className:"group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:outline-hidden focus:ring-inset",children:[e.jsx("span",{className:"absolute -inset-0.5"}),e.jsx("span",{className:"sr-only",children:"Open main menu"}),e.jsx(i,{"aria-hidden":"true",className:"block size-6 group-data-open:hidden"}),e.jsx(n,{"aria-hidden":"true",className:"hidden size-6 group-data-open:block"})]})}),e.jsx("div",{className:"flex shrink-0 items-center",children:e.jsx("img",{alt:"Your Company",src:"https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600",className:"h-8 w-auto"})}),e.jsxs("div",{className:"hidden md:ml-6 md:flex md:space-x-8",children:[e.jsx("a",{href:"#",className:"inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900",children:"Dashboard"}),e.jsx("a",{href:"#",className:"inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700",children:"Team"}),e.jsx("a",{href:"#",className:"inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700",children:"Projects"}),e.jsx("a",{href:"#",className:"inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700",children:"Calendar"})]})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"shrink-0",children:e.jsxs("button",{type:"button",className:"relative inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:[e.jsx(P,{"aria-hidden":"true",className:"-ml-0.5 size-5"}),"New Job"]})}),e.jsxs("div",{className:"hidden md:ml-4 md:flex md:shrink-0 md:items-center",children:[e.jsxs("button",{type:"button",className:"relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden",children:[e.jsx("span",{className:"absolute -inset-1.5"}),e.jsx("span",{className:"sr-only",children:"View notifications"}),e.jsx(r,{"aria-hidden":"true",className:"size-6"})]}),e.jsxs(o,{as:"div",className:"relative ml-3",children:[e.jsx("div",{children:e.jsxs(l,{className:"relative flex rounded-full bg-white text-sm focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden",children:[e.jsx("span",{className:"absolute -inset-1.5"}),e.jsx("span",{className:"sr-only",children:"Open user menu"}),e.jsx("img",{alt:"",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",className:"size-8 rounded-full"})]})}),e.jsxs(d,{transition:!0,className:"absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-75 data-leave:ease-in",children:[e.jsx(t,{children:e.jsx("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden",children:"Your Profile"})}),e.jsx(t,{children:e.jsx("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden",children:"Settings"})}),e.jsx(t,{children:e.jsx("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden",children:"Sign out"})})]})]})]})]})]})}),e.jsxs(m,{className:"md:hidden",children:[e.jsxs("div",{className:"space-y-1 pt-2 pb-3",children:[e.jsx(s,{as:"a",href:"#",className:"block border-l-4 border-indigo-500 bg-indigo-50 py-2 pr-4 pl-3 text-base font-medium text-indigo-700 sm:pr-6 sm:pl-5",children:"Dashboard"}),e.jsx(s,{as:"a",href:"#",className:"block border-l-4 border-transparent py-2 pr-4 pl-3 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pr-6 sm:pl-5",children:"Team"}),e.jsx(s,{as:"a",href:"#",className:"block border-l-4 border-transparent py-2 pr-4 pl-3 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pr-6 sm:pl-5",children:"Projects"}),e.jsx(s,{as:"a",href:"#",className:"block border-l-4 border-transparent py-2 pr-4 pl-3 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pr-6 sm:pl-5",children:"Calendar"})]}),e.jsxs("div",{className:"border-t border-gray-200 pt-4 pb-3",children:[e.jsxs("div",{className:"flex items-center px-4 sm:px-6",children:[e.jsx("div",{className:"shrink-0",children:e.jsx("img",{alt:"",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",className:"size-10 rounded-full"})}),e.jsxs("div",{className:"ml-3",children:[e.jsx("div",{className:"text-base font-medium text-gray-800",children:"Tom Cook"}),e.jsx("div",{className:"text-sm font-medium text-gray-500",children:"tom@example.com"})]}),e.jsxs("button",{type:"button",className:"relative ml-auto shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden",children:[e.jsx("span",{className:"absolute -inset-1.5"}),e.jsx("span",{className:"sr-only",children:"View notifications"}),e.jsx(r,{"aria-hidden":"true",className:"size-6"})]})]}),e.jsxs("div",{className:"mt-3 space-y-1",children:[e.jsx(s,{as:"a",href:"#",className:"block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 sm:px-6",children:"Your Profile"}),e.jsx(s,{as:"a",href:"#",className:"block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 sm:px-6",children:"Settings"}),e.jsx(s,{as:"a",href:"#",className:"block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 sm:px-6",children:"Sign out"})]})]})]})]})}const G=`import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { PlusIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="mr-2 -ml-2 flex items-center md:hidden">
              {/* Mobile menu button */}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:outline-hidden focus:ring-inset">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
              </DisclosureButton>
            </div>
            <div className="flex shrink-0 items-center">
              <img
                alt="Your Company"
                src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </div>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
              <a
                href="#"
                className="inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900"
              >
                Dashboard
              </a>
              <a
                href="#"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >
                Team
              </a>
              <a
                href="#"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >
                Projects
              </a>
              <a
                href="#"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >
                Calendar
              </a>
            </div>
          </div>
          <div className="flex items-center">
            <div className="shrink-0">
              <button
                type="button"
                className="relative inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <PlusIcon aria-hidden="true" className="-ml-0.5 size-5" />
                New Job
              </button>
            </div>
            <div className="hidden md:ml-4 md:flex md:shrink-0 md:items-center">
              <button
                type="button"
                className="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
                <BellIcon aria-hidden="true" className="size-6" />
              </button>

              {/* Profile dropdown */}
              <Menu as="div" className="relative ml-3">
                <div>
                  <MenuButton className="relative flex rounded-full bg-white text-sm focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      className="size-8 rounded-full"
                    />
                  </MenuButton>
                </div>
                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                >
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                    >
                      Your Profile
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                    >
                      Settings
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                    >
                      Sign out
                    </a>
                  </MenuItem>
                </MenuItems>
              </Menu>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="md:hidden">
        <div className="space-y-1 pt-2 pb-3">
          {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
          <DisclosureButton
            as="a"
            href="#"
            className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pr-4 pl-3 text-base font-medium text-indigo-700 sm:pr-6 sm:pl-5"
          >
            Dashboard
          </DisclosureButton>
          <DisclosureButton
            as="a"
            href="#"
            className="block border-l-4 border-transparent py-2 pr-4 pl-3 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pr-6 sm:pl-5"
          >
            Team
          </DisclosureButton>
          <DisclosureButton
            as="a"
            href="#"
            className="block border-l-4 border-transparent py-2 pr-4 pl-3 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pr-6 sm:pl-5"
          >
            Projects
          </DisclosureButton>
          <DisclosureButton
            as="a"
            href="#"
            className="block border-l-4 border-transparent py-2 pr-4 pl-3 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pr-6 sm:pl-5"
          >
            Calendar
          </DisclosureButton>
        </div>
        <div className="border-t border-gray-200 pt-4 pb-3">
          <div className="flex items-center px-4 sm:px-6">
            <div className="shrink-0">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="size-10 rounded-full"
              />
            </div>
            <div className="ml-3">
              <div className="text-base font-medium text-gray-800">Tom Cook</div>
              <div className="text-sm font-medium text-gray-500">tom@example.com</div>
            </div>
            <button
              type="button"
              className="relative ml-auto shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-3 space-y-1">
            <DisclosureButton
              as="a"
              href="#"
              className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 sm:px-6"
            >
              Your Profile
            </DisclosureButton>
            <DisclosureButton
              as="a"
              href="#"
              className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 sm:px-6"
            >
              Settings
            </DisclosureButton>
            <DisclosureButton
              as="a"
              href="#"
              className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 sm:px-6"
            >
              Sign out
            </DisclosureButton>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
`;function R(){return e.jsxs(c,{as:"nav",className:"bg-gray-800",children:[e.jsx("div",{className:"mx-auto max-w-7xl px-2 sm:px-4 lg:px-8",children:e.jsxs("div",{className:"relative flex h-16 items-center justify-between",children:[e.jsxs("div",{className:"flex items-center px-2 lg:px-0",children:[e.jsx("div",{className:"shrink-0",children:e.jsx("img",{alt:"Your Company",src:"https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500",className:"h-8 w-auto"})}),e.jsx("div",{className:"hidden lg:ml-6 lg:block",children:e.jsxs("div",{className:"flex space-x-4",children:[e.jsx("a",{href:"#",className:"rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white",children:"Dashboard"}),e.jsx("a",{href:"#",className:"rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white",children:"Team"}),e.jsx("a",{href:"#",className:"rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white",children:"Projects"}),e.jsx("a",{href:"#",className:"rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white",children:"Calendar"})]})})]}),e.jsx("div",{className:"flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end",children:e.jsxs("div",{className:"grid w-full max-w-lg grid-cols-1 lg:max-w-xs",children:[e.jsx("input",{name:"search",type:"search",placeholder:"Search","aria-label":"Search",className:"col-start-1 row-start-1 block w-full rounded-md bg-gray-700 py-1.5 pr-3 pl-10 text-base text-white outline-hidden placeholder:text-gray-400 focus:bg-white focus:text-gray-900 focus:placeholder:text-gray-400 sm:text-sm/6"}),e.jsx(h,{"aria-hidden":"true",className:"pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400"})]})}),e.jsx("div",{className:"flex lg:hidden",children:e.jsxs(s,{className:"group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset",children:[e.jsx("span",{className:"absolute -inset-0.5"}),e.jsx("span",{className:"sr-only",children:"Open main menu"}),e.jsx(i,{"aria-hidden":"true",className:"block size-6 group-data-open:hidden"}),e.jsx(n,{"aria-hidden":"true",className:"hidden size-6 group-data-open:block"})]})}),e.jsx("div",{className:"hidden lg:ml-4 lg:block",children:e.jsxs("div",{className:"flex items-center",children:[e.jsxs("button",{type:"button",className:"relative shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden",children:[e.jsx("span",{className:"absolute -inset-1.5"}),e.jsx("span",{className:"sr-only",children:"View notifications"}),e.jsx(r,{"aria-hidden":"true",className:"size-6"})]}),e.jsxs(o,{as:"div",className:"relative ml-4 shrink-0",children:[e.jsx("div",{children:e.jsxs(l,{className:"relative flex rounded-full bg-gray-800 text-sm text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden",children:[e.jsx("span",{className:"absolute -inset-1.5"}),e.jsx("span",{className:"sr-only",children:"Open user menu"}),e.jsx("img",{alt:"",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",className:"size-8 rounded-full"})]})}),e.jsxs(d,{transition:!0,className:"absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in",children:[e.jsx(t,{children:e.jsx("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden",children:"Your Profile"})}),e.jsx(t,{children:e.jsx("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden",children:"Settings"})}),e.jsx(t,{children:e.jsx("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden",children:"Sign out"})})]})]})]})})]})}),e.jsxs(m,{className:"lg:hidden",children:[e.jsxs("div",{className:"space-y-1 px-2 pt-2 pb-3",children:[e.jsx(s,{as:"a",href:"#",className:"block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white",children:"Dashboard"}),e.jsx(s,{as:"a",href:"#",className:"block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white",children:"Team"}),e.jsx(s,{as:"a",href:"#",className:"block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white",children:"Projects"}),e.jsx(s,{as:"a",href:"#",className:"block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white",children:"Calendar"})]}),e.jsxs("div",{className:"border-t border-gray-700 pt-4 pb-3",children:[e.jsxs("div",{className:"flex items-center px-5",children:[e.jsx("div",{className:"shrink-0",children:e.jsx("img",{alt:"",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",className:"size-10 rounded-full"})}),e.jsxs("div",{className:"ml-3",children:[e.jsx("div",{className:"text-base font-medium text-white",children:"Tom Cook"}),e.jsx("div",{className:"text-sm font-medium text-gray-400",children:"tom@example.com"})]}),e.jsxs("button",{type:"button",className:"relative ml-auto shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden",children:[e.jsx("span",{className:"absolute -inset-1.5"}),e.jsx("span",{className:"sr-only",children:"View notifications"}),e.jsx(r,{"aria-hidden":"true",className:"size-6"})]})]}),e.jsxs("div",{className:"mt-3 space-y-1 px-2",children:[e.jsx(s,{as:"a",href:"#",className:"block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white",children:"Your Profile"}),e.jsx(s,{as:"a",href:"#",className:"block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white",children:"Settings"}),e.jsx(s,{as:"a",href:"#",className:"block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white",children:"Sign out"})]})]})]})]})}const F=`import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex items-center px-2 lg:px-0">
            <div className="shrink-0">
              <img
                alt="Your Company"
                src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                className="h-8 w-auto"
              />
            </div>
            <div className="hidden lg:ml-6 lg:block">
              <div className="flex space-x-4">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                <a href="#" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white">
                  Dashboard
                </a>
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Team
                </a>
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Projects
                </a>
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Calendar
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
            <div className="grid w-full max-w-lg grid-cols-1 lg:max-w-xs">
              <input
                name="search"
                type="search"
                placeholder="Search"
                aria-label="Search"
                className="col-start-1 row-start-1 block w-full rounded-md bg-gray-700 py-1.5 pr-3 pl-10 text-base text-white outline-hidden placeholder:text-gray-400 focus:bg-white focus:text-gray-900 focus:placeholder:text-gray-400 sm:text-sm/6"
              />
              <MagnifyingGlassIcon
                aria-hidden="true"
                className="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400"
              />
            </div>
          </div>
          <div className="flex lg:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="hidden lg:ml-4 lg:block">
            <div className="flex items-center">
              <button
                type="button"
                className="relative shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
                <BellIcon aria-hidden="true" className="size-6" />
              </button>

              {/* Profile dropdown */}
              <Menu as="div" className="relative ml-4 shrink-0">
                <div>
                  <MenuButton className="relative flex rounded-full bg-gray-800 text-sm text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      className="size-8 rounded-full"
                    />
                  </MenuButton>
                </div>
                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                >
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                    >
                      Your Profile
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                    >
                      Settings
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                    >
                      Sign out
                    </a>
                  </MenuItem>
                </MenuItems>
              </Menu>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="lg:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
          <DisclosureButton
            as="a"
            href="#"
            className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
          >
            Dashboard
          </DisclosureButton>
          <DisclosureButton
            as="a"
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Team
          </DisclosureButton>
          <DisclosureButton
            as="a"
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Projects
          </DisclosureButton>
          <DisclosureButton
            as="a"
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Calendar
          </DisclosureButton>
        </div>
        <div className="border-t border-gray-700 pt-4 pb-3">
          <div className="flex items-center px-5">
            <div className="shrink-0">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="size-10 rounded-full"
              />
            </div>
            <div className="ml-3">
              <div className="text-base font-medium text-white">Tom Cook</div>
              <div className="text-sm font-medium text-gray-400">tom@example.com</div>
            </div>
            <button
              type="button"
              className="relative ml-auto shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-3 space-y-1 px-2">
            <DisclosureButton
              as="a"
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
            >
              Your Profile
            </DisclosureButton>
            <DisclosureButton
              as="a"
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
            >
              Settings
            </DisclosureButton>
            <DisclosureButton
              as="a"
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
            >
              Sign out
            </DisclosureButton>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
`;function L(){return e.jsxs(c,{as:"nav",className:"bg-white shadow-sm",children:[e.jsx("div",{className:"mx-auto max-w-7xl px-2 sm:px-4 lg:px-8",children:e.jsxs("div",{className:"flex h-16 justify-between",children:[e.jsxs("div",{className:"flex px-2 lg:px-0",children:[e.jsx("div",{className:"flex shrink-0 items-center",children:e.jsx("img",{alt:"Your Company",src:"https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600",className:"h-8 w-auto"})}),e.jsxs("div",{className:"hidden lg:ml-6 lg:flex lg:space-x-8",children:[e.jsx("a",{href:"#",className:"inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900",children:"Dashboard"}),e.jsx("a",{href:"#",className:"inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700",children:"Team"}),e.jsx("a",{href:"#",className:"inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700",children:"Projects"}),e.jsx("a",{href:"#",className:"inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700",children:"Calendar"})]})]}),e.jsx("div",{className:"flex flex-1 items-center justify-center px-2 lg:ml-6 lg:justify-end",children:e.jsxs("div",{className:"grid w-full max-w-lg grid-cols-1 lg:max-w-xs",children:[e.jsx("input",{name:"search",type:"search",placeholder:"Search",className:"col-start-1 row-start-1 block w-full rounded-md bg-white py-1.5 pr-3 pl-10 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"}),e.jsx(h,{"aria-hidden":"true",className:"pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400"})]})}),e.jsx("div",{className:"flex items-center lg:hidden",children:e.jsxs(s,{className:"group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:outline-hidden focus:ring-inset",children:[e.jsx("span",{className:"absolute -inset-0.5"}),e.jsx("span",{className:"sr-only",children:"Open main menu"}),e.jsx(i,{"aria-hidden":"true",className:"block size-6 group-data-open:hidden"}),e.jsx(n,{"aria-hidden":"true",className:"hidden size-6 group-data-open:block"})]})}),e.jsxs("div",{className:"hidden lg:ml-4 lg:flex lg:items-center",children:[e.jsxs("button",{type:"button",className:"relative shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden",children:[e.jsx("span",{className:"absolute -inset-1.5"}),e.jsx("span",{className:"sr-only",children:"View notifications"}),e.jsx(r,{"aria-hidden":"true",className:"size-6"})]}),e.jsxs(o,{as:"div",className:"relative ml-4 shrink-0",children:[e.jsx("div",{children:e.jsxs(l,{className:"relative flex rounded-full bg-white text-sm focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden",children:[e.jsx("span",{className:"absolute -inset-1.5"}),e.jsx("span",{className:"sr-only",children:"Open user menu"}),e.jsx("img",{alt:"",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",className:"size-8 rounded-full"})]})}),e.jsxs(d,{transition:!0,className:"absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in",children:[e.jsx(t,{children:e.jsx("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden",children:"Your Profile"})}),e.jsx(t,{children:e.jsx("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden",children:"Settings"})}),e.jsx(t,{children:e.jsx("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden",children:"Sign out"})})]})]})]})]})}),e.jsxs(m,{className:"lg:hidden",children:[e.jsxs("div",{className:"space-y-1 pt-2 pb-3",children:[e.jsx(s,{as:"a",href:"#",className:"block border-l-4 border-indigo-500 bg-indigo-50 py-2 pr-4 pl-3 text-base font-medium text-indigo-700",children:"Dashboard"}),e.jsx(s,{as:"a",href:"#",className:"block border-l-4 border-transparent py-2 pr-4 pl-3 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800",children:"Team"}),e.jsx(s,{as:"a",href:"#",className:"block border-l-4 border-transparent py-2 pr-4 pl-3 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800",children:"Projects"}),e.jsx(s,{as:"a",href:"#",className:"block border-l-4 border-transparent py-2 pr-4 pl-3 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800",children:"Calendar"})]}),e.jsxs("div",{className:"border-t border-gray-200 pt-4 pb-3",children:[e.jsxs("div",{className:"flex items-center px-4",children:[e.jsx("div",{className:"shrink-0",children:e.jsx("img",{alt:"",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",className:"size-10 rounded-full"})}),e.jsxs("div",{className:"ml-3",children:[e.jsx("div",{className:"text-base font-medium text-gray-800",children:"Tom Cook"}),e.jsx("div",{className:"text-sm font-medium text-gray-500",children:"tom@example.com"})]}),e.jsxs("button",{type:"button",className:"relative ml-auto shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden",children:[e.jsx("span",{className:"absolute -inset-1.5"}),e.jsx("span",{className:"sr-only",children:"View notifications"}),e.jsx(r,{"aria-hidden":"true",className:"size-6"})]})]}),e.jsxs("div",{className:"mt-3 space-y-1",children:[e.jsx(s,{as:"a",href:"#",className:"block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800",children:"Your Profile"}),e.jsx(s,{as:"a",href:"#",className:"block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800",children:"Settings"}),e.jsx(s,{as:"a",href:"#",className:"block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800",children:"Sign out"})]})]})]})]})}const A=`import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex px-2 lg:px-0">
            <div className="flex shrink-0 items-center">
              <img
                alt="Your Company"
                src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </div>
            <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
              {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
              <a
                href="#"
                className="inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900"
              >
                Dashboard
              </a>
              <a
                href="#"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >
                Team
              </a>
              <a
                href="#"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >
                Projects
              </a>
              <a
                href="#"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >
                Calendar
              </a>
            </div>
          </div>
          <div className="flex flex-1 items-center justify-center px-2 lg:ml-6 lg:justify-end">
            <div className="grid w-full max-w-lg grid-cols-1 lg:max-w-xs">
              <input
                name="search"
                type="search"
                placeholder="Search"
                className="col-start-1 row-start-1 block w-full rounded-md bg-white py-1.5 pr-3 pl-10 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
              <MagnifyingGlassIcon
                aria-hidden="true"
                className="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400"
              />
            </div>
          </div>
          <div className="flex items-center lg:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="hidden lg:ml-4 lg:flex lg:items-center">
            <button
              type="button"
              className="relative shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="size-6" />
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-4 shrink-0">
              <div>
                <MenuButton className="relative flex rounded-full bg-white text-sm focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="size-8 rounded-full"
                  />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Your Profile
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="lg:hidden">
        <div className="space-y-1 pt-2 pb-3">
          {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800" */}
          <DisclosureButton
            as="a"
            href="#"
            className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pr-4 pl-3 text-base font-medium text-indigo-700"
          >
            Dashboard
          </DisclosureButton>
          <DisclosureButton
            as="a"
            href="#"
            className="block border-l-4 border-transparent py-2 pr-4 pl-3 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
          >
            Team
          </DisclosureButton>
          <DisclosureButton
            as="a"
            href="#"
            className="block border-l-4 border-transparent py-2 pr-4 pl-3 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
          >
            Projects
          </DisclosureButton>
          <DisclosureButton
            as="a"
            href="#"
            className="block border-l-4 border-transparent py-2 pr-4 pl-3 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
          >
            Calendar
          </DisclosureButton>
        </div>
        <div className="border-t border-gray-200 pt-4 pb-3">
          <div className="flex items-center px-4">
            <div className="shrink-0">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="size-10 rounded-full"
              />
            </div>
            <div className="ml-3">
              <div className="text-base font-medium text-gray-800">Tom Cook</div>
              <div className="text-sm font-medium text-gray-500">tom@example.com</div>
            </div>
            <button
              type="button"
              className="relative ml-auto shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-3 space-y-1">
            <DisclosureButton
              as="a"
              href="#"
              className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
            >
              Your Profile
            </DisclosureButton>
            <DisclosureButton
              as="a"
              href="#"
              className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
            >
              Settings
            </DisclosureButton>
            <DisclosureButton
              as="a"
              href="#"
              className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
            >
              Sign out
            </DisclosureButton>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
`,g={name:"Tom Cook",email:"tom@example.com",imageUrl:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"},w=[{name:"Dashboard",href:"#",current:!0},{name:"Team",href:"#",current:!1},{name:"Projects",href:"#",current:!1},{name:"Calendar",href:"#",current:!1}],k=[{name:"Your Profile",href:"#"},{name:"Settings",href:"#"},{name:"Sign out",href:"#"}];function D(...a){return a.filter(Boolean).join(" ")}function K(){return e.jsxs(c,{as:"header",className:"bg-gray-800",children:[e.jsxs("div",{className:"mx-auto max-w-7xl px-2 sm:px-4 lg:divide-y lg:divide-gray-700 lg:px-8",children:[e.jsxs("div",{className:"relative flex h-16 justify-between",children:[e.jsx("div",{className:"relative z-10 flex px-2 lg:px-0",children:e.jsx("div",{className:"flex shrink-0 items-center",children:e.jsx("img",{alt:"Your Company",src:"https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500",className:"h-8 w-auto"})})}),e.jsx("div",{className:"relative z-0 flex flex-1 items-center justify-center px-2 sm:absolute sm:inset-0",children:e.jsxs("div",{className:"grid w-full grid-cols-1 sm:max-w-xs",children:[e.jsx("input",{name:"search",type:"search",placeholder:"Search","aria-label":"Search",className:"col-start-1 row-start-1 block w-full rounded-md bg-gray-700 py-1.5 pr-3 pl-10 text-base text-white outline-hidden placeholder:text-gray-400 focus:bg-white focus:text-gray-900 focus:placeholder:text-gray-400 sm:text-sm/6"}),e.jsx(h,{"aria-hidden":"true",className:"pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400"})]})}),e.jsx("div",{className:"relative z-10 flex items-center lg:hidden",children:e.jsxs(s,{className:"group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset",children:[e.jsx("span",{className:"absolute -inset-0.5"}),e.jsx("span",{className:"sr-only",children:"Open menu"}),e.jsx(i,{"aria-hidden":"true",className:"block size-6 group-data-open:hidden"}),e.jsx(n,{"aria-hidden":"true",className:"hidden size-6 group-data-open:block"})]})}),e.jsxs("div",{className:"hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center",children:[e.jsxs("button",{type:"button",className:"relative shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden",children:[e.jsx("span",{className:"absolute -inset-1.5"}),e.jsx("span",{className:"sr-only",children:"View notifications"}),e.jsx(r,{"aria-hidden":"true",className:"size-6"})]}),e.jsxs(o,{as:"div",className:"relative ml-4 shrink-0",children:[e.jsx("div",{children:e.jsxs(l,{className:"relative flex rounded-full bg-gray-800 text-sm text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden",children:[e.jsx("span",{className:"absolute -inset-1.5"}),e.jsx("span",{className:"sr-only",children:"Open user menu"}),e.jsx("img",{alt:"",src:g.imageUrl,className:"size-8 rounded-full"})]})}),e.jsx(d,{transition:!0,className:"absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in",children:k.map(a=>e.jsx(t,{children:e.jsx("a",{href:a.href,className:"block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden",children:a.name})},a.name))})]})]})]}),e.jsx("nav",{"aria-label":"Global",className:"hidden lg:flex lg:space-x-8 lg:py-2",children:w.map(a=>e.jsx("a",{href:a.href,"aria-current":a.current?"page":void 0,className:D(a.current?"bg-gray-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white","inline-flex items-center rounded-md px-3 py-2 text-sm font-medium"),children:a.name},a.name))})]}),e.jsxs(m,{as:"nav","aria-label":"Global",className:"lg:hidden",children:[e.jsx("div",{className:"space-y-1 px-2 pt-2 pb-3",children:w.map(a=>e.jsx(s,{as:"a",href:a.href,"aria-current":a.current?"page":void 0,className:D(a.current?"bg-gray-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white","block rounded-md px-3 py-2 text-base font-medium"),children:a.name},a.name))}),e.jsxs("div",{className:"border-t border-gray-700 pt-4 pb-3",children:[e.jsxs("div",{className:"flex items-center px-4",children:[e.jsx("div",{className:"shrink-0",children:e.jsx("img",{alt:"",src:g.imageUrl,className:"size-10 rounded-full"})}),e.jsxs("div",{className:"ml-3",children:[e.jsx("div",{className:"text-base font-medium text-white",children:g.name}),e.jsx("div",{className:"text-sm font-medium text-gray-400",children:g.email})]}),e.jsxs("button",{type:"button",className:"relative ml-auto shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden",children:[e.jsx("span",{className:"absolute -inset-1.5"}),e.jsx("span",{className:"sr-only",children:"View notifications"}),e.jsx(r,{"aria-hidden":"true",className:"size-6"})]})]}),e.jsx("div",{className:"mt-3 space-y-1 px-2",children:k.map(a=>e.jsx(s,{as:"a",href:a.href,className:"block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white",children:a.name},a.name))})]})]})]})}const Z=`import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Disclosure as="header" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:divide-y lg:divide-gray-700 lg:px-8">
        <div className="relative flex h-16 justify-between">
          <div className="relative z-10 flex px-2 lg:px-0">
            <div className="flex shrink-0 items-center">
              <img
                alt="Your Company"
                src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                className="h-8 w-auto"
              />
            </div>
          </div>
          <div className="relative z-0 flex flex-1 items-center justify-center px-2 sm:absolute sm:inset-0">
            <div className="grid w-full grid-cols-1 sm:max-w-xs">
              <input
                name="search"
                type="search"
                placeholder="Search"
                aria-label="Search"
                className="col-start-1 row-start-1 block w-full rounded-md bg-gray-700 py-1.5 pr-3 pl-10 text-base text-white outline-hidden placeholder:text-gray-400 focus:bg-white focus:text-gray-900 focus:placeholder:text-gray-400 sm:text-sm/6"
              />
              <MagnifyingGlassIcon
                aria-hidden="true"
                className="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400"
              />
            </div>
          </div>
          <div className="relative z-10 flex items-center lg:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
            <button
              type="button"
              className="relative shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="size-6" />
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-4 shrink-0">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img alt="" src={user.imageUrl} className="size-8 rounded-full" />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                {userNavigation.map((item) => (
                  <MenuItem key={item.name}>
                    <a
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                    >
                      {item.name}
                    </a>
                  </MenuItem>
                ))}
              </MenuItems>
            </Menu>
          </div>
        </div>
        <nav aria-label="Global" className="hidden lg:flex lg:space-x-8 lg:py-2">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'inline-flex items-center rounded-md px-3 py-2 text-sm font-medium',
              )}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>

      <DisclosurePanel as="nav" aria-label="Global" className="lg:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
        <div className="border-t border-gray-700 pt-4 pb-3">
          <div className="flex items-center px-4">
            <div className="shrink-0">
              <img alt="" src={user.imageUrl} className="size-10 rounded-full" />
            </div>
            <div className="ml-3">
              <div className="text-base font-medium text-white">{user.name}</div>
              <div className="text-sm font-medium text-gray-400">{user.email}</div>
            </div>
            <button
              type="button"
              className="relative ml-auto shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-3 space-y-1 px-2">
            {userNavigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
`,f={name:"Tom Cook",email:"tom@example.com",imageUrl:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"},B=[{name:"Dashboard",href:"#",current:!0},{name:"Team",href:"#",current:!1},{name:"Projects",href:"#",current:!1},{name:"Calendar",href:"#",current:!1}],M=[{name:"Your Profile",href:"#"},{name:"Settings",href:"#"},{name:"Sign out",href:"#"}];function I(...a){return a.filter(Boolean).join(" ")}function _(){return e.jsxs(c,{as:"header",className:"bg-white shadow-sm",children:[e.jsxs("div",{className:"mx-auto max-w-7xl px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8",children:[e.jsxs("div",{className:"relative flex h-16 justify-between",children:[e.jsx("div",{className:"relative z-10 flex px-2 lg:px-0",children:e.jsx("div",{className:"flex shrink-0 items-center",children:e.jsx("img",{alt:"Your Company",src:"https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600",className:"h-8 w-auto"})})}),e.jsx("div",{className:"relative z-0 flex flex-1 items-center justify-center px-2 sm:absolute sm:inset-0",children:e.jsxs("div",{className:"grid w-full grid-cols-1 sm:max-w-xs",children:[e.jsx("input",{name:"search",type:"search",placeholder:"Search",className:"col-start-1 row-start-1 block w-full rounded-md bg-white py-1.5 pr-3 pl-10 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"}),e.jsx(h,{"aria-hidden":"true",className:"pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400"})]})}),e.jsx("div",{className:"relative z-10 flex items-center lg:hidden",children:e.jsxs(s,{className:"group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:outline-hidden focus:ring-inset",children:[e.jsx("span",{className:"absolute -inset-0.5"}),e.jsx("span",{className:"sr-only",children:"Open menu"}),e.jsx(i,{"aria-hidden":"true",className:"block size-6 group-data-open:hidden"}),e.jsx(n,{"aria-hidden":"true",className:"hidden size-6 group-data-open:block"})]})}),e.jsxs("div",{className:"hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center",children:[e.jsxs("button",{type:"button",className:"relative shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden",children:[e.jsx("span",{className:"absolute -inset-1.5"}),e.jsx("span",{className:"sr-only",children:"View notifications"}),e.jsx(r,{"aria-hidden":"true",className:"size-6"})]}),e.jsxs(o,{as:"div",className:"relative ml-4 shrink-0",children:[e.jsx("div",{children:e.jsxs(l,{className:"relative flex rounded-full bg-white focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden",children:[e.jsx("span",{className:"absolute -inset-1.5"}),e.jsx("span",{className:"sr-only",children:"Open user menu"}),e.jsx("img",{alt:"",src:f.imageUrl,className:"size-8 rounded-full"})]})}),e.jsx(d,{transition:!0,className:"absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in",children:M.map(a=>e.jsx(t,{children:e.jsx("a",{href:a.href,className:"block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden",children:a.name})},a.name))})]})]})]}),e.jsx("nav",{"aria-label":"Global",className:"hidden lg:flex lg:space-x-8 lg:py-2",children:B.map(a=>e.jsx("a",{href:a.href,"aria-current":a.current?"page":void 0,className:I(a.current?"bg-gray-100 text-gray-900":"text-gray-900 hover:bg-gray-50 hover:text-gray-900","inline-flex items-center rounded-md px-3 py-2 text-sm font-medium"),children:a.name},a.name))})]}),e.jsxs(m,{as:"nav","aria-label":"Global",className:"lg:hidden",children:[e.jsx("div",{className:"space-y-1 px-2 pt-2 pb-3",children:B.map(a=>e.jsx(s,{as:"a",href:a.href,"aria-current":a.current?"page":void 0,className:I(a.current?"bg-gray-100 text-gray-900":"text-gray-900 hover:bg-gray-50 hover:text-gray-900","block rounded-md px-3 py-2 text-base font-medium"),children:a.name},a.name))}),e.jsxs("div",{className:"border-t border-gray-200 pt-4 pb-3",children:[e.jsxs("div",{className:"flex items-center px-4",children:[e.jsx("div",{className:"shrink-0",children:e.jsx("img",{alt:"",src:f.imageUrl,className:"size-10 rounded-full"})}),e.jsxs("div",{className:"ml-3",children:[e.jsx("div",{className:"text-base font-medium text-gray-800",children:f.name}),e.jsx("div",{className:"text-sm font-medium text-gray-500",children:f.email})]}),e.jsxs("button",{type:"button",className:"relative ml-auto shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden",children:[e.jsx("span",{className:"absolute -inset-1.5"}),e.jsx("span",{className:"sr-only",children:"View notifications"}),e.jsx(r,{"aria-hidden":"true",className:"size-6"})]})]}),e.jsx("div",{className:"mt-3 space-y-1 px-2",children:M.map(a=>e.jsx(s,{as:"a",href:a.href,className:"block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900",children:a.name},a.name))})]})]})]})}const ee=`import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Disclosure as="header" className="bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8">
        <div className="relative flex h-16 justify-between">
          <div className="relative z-10 flex px-2 lg:px-0">
            <div className="flex shrink-0 items-center">
              <img
                alt="Your Company"
                src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </div>
          </div>
          <div className="relative z-0 flex flex-1 items-center justify-center px-2 sm:absolute sm:inset-0">
            <div className="grid w-full grid-cols-1 sm:max-w-xs">
              <input
                name="search"
                type="search"
                placeholder="Search"
                className="col-start-1 row-start-1 block w-full rounded-md bg-white py-1.5 pr-3 pl-10 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
              <MagnifyingGlassIcon
                aria-hidden="true"
                className="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400"
              />
            </div>
          </div>
          <div className="relative z-10 flex items-center lg:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
            <button
              type="button"
              className="relative shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="size-6" />
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-4 shrink-0">
              <div>
                <MenuButton className="relative flex rounded-full bg-white focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img alt="" src={user.imageUrl} className="size-8 rounded-full" />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                {userNavigation.map((item) => (
                  <MenuItem key={item.name}>
                    <a
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                    >
                      {item.name}
                    </a>
                  </MenuItem>
                ))}
              </MenuItems>
            </Menu>
          </div>
        </div>
        <nav aria-label="Global" className="hidden lg:flex lg:space-x-8 lg:py-2">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-900 hover:bg-gray-50 hover:text-gray-900',
                'inline-flex items-center rounded-md px-3 py-2 text-sm font-medium',
              )}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>

      <DisclosurePanel as="nav" aria-label="Global" className="lg:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-900 hover:bg-gray-50 hover:text-gray-900',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
        <div className="border-t border-gray-200 pt-4 pb-3">
          <div className="flex items-center px-4">
            <div className="shrink-0">
              <img alt="" src={user.imageUrl} className="size-10 rounded-full" />
            </div>
            <div className="ml-3">
              <div className="text-base font-medium text-gray-800">{user.name}</div>
              <div className="text-sm font-medium text-gray-500">{user.email}</div>
            </div>
            <button
              type="button"
              className="relative ml-auto shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-3 space-y-1 px-2">
            {userNavigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
`,p={name:"Chelsea Hagon",email:"chelsea.hagon@example.com",imageUrl:"https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"},ae=[{name:"Dashboard",href:"#",current:!0},{name:"Calendar",href:"#",current:!1},{name:"Teams",href:"#",current:!1},{name:"Directory",href:"#",current:!1}],z=[{name:"Your Profile",href:"#"},{name:"Settings",href:"#"},{name:"Sign out",href:"#"}];function se(...a){return a.filter(Boolean).join(" ")}function te(){return e.jsx(e.Fragment,{children:e.jsxs(C,{as:"header",className:"bg-white shadow-xs data-open:fixed data-open:inset-0 data-open:z-40 data-open:overflow-y-auto lg:static lg:overflow-y-visible data-open:lg:static data-open:lg:overflow-y-visible",children:[e.jsx("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"relative flex justify-between lg:gap-8 xl:grid xl:grid-cols-12",children:[e.jsx("div",{className:"flex md:absolute md:inset-y-0 md:left-0 lg:static xl:col-span-2",children:e.jsx("div",{className:"flex shrink-0 items-center",children:e.jsx("a",{href:"#",children:e.jsx("img",{alt:"Your Company",src:"https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600",className:"h-8 w-auto"})})})}),e.jsx("div",{className:"min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6",children:e.jsx("div",{className:"flex items-center px-6 py-4 md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-none xl:px-0",children:e.jsxs("div",{className:"grid w-full grid-cols-1",children:[e.jsx("input",{name:"search",type:"search",placeholder:"Search",className:"col-start-1 row-start-1 block w-full rounded-md bg-white py-1.5 pr-3 pl-10 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"}),e.jsx(h,{"aria-hidden":"true",className:"pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400"})]})})}),e.jsx("div",{className:"flex items-center md:absolute md:inset-y-0 md:right-0 lg:hidden",children:e.jsxs(O,{className:"group relative -mx-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:outline-hidden focus:ring-inset",children:[e.jsx("span",{className:"absolute -inset-0.5"}),e.jsx("span",{className:"sr-only",children:"Open menu"}),e.jsx(i,{"aria-hidden":"true",className:"block size-6 group-data-open:hidden"}),e.jsx(n,{"aria-hidden":"true",className:"hidden size-6 group-data-open:block"})]})}),e.jsxs("div",{className:"hidden lg:flex lg:items-center lg:justify-end xl:col-span-4",children:[e.jsxs("button",{type:"button",className:"relative ml-5 shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden",children:[e.jsx("span",{className:"absolute -inset-1.5"}),e.jsx("span",{className:"sr-only",children:"View notifications"}),e.jsx(r,{"aria-hidden":"true",className:"size-6"})]}),e.jsxs(o,{as:"div",className:"relative ml-5 shrink-0",children:[e.jsx("div",{children:e.jsxs(l,{className:"relative flex rounded-full bg-white focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden",children:[e.jsx("span",{className:"absolute -inset-1.5"}),e.jsx("span",{className:"sr-only",children:"Open user menu"}),e.jsx("img",{alt:"",src:p.imageUrl,className:"size-8 rounded-full"})]})}),e.jsx(d,{transition:!0,className:"absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in",children:z.map(a=>e.jsx(t,{children:e.jsx("a",{href:a.href,className:"block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden",children:a.name})},a.name))})]}),e.jsx("a",{href:"#",className:"ml-6 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"New Project"})]})]})}),e.jsxs(E,{as:"nav","aria-label":"Global",className:"lg:hidden",children:[e.jsx("div",{className:"mx-auto max-w-3xl space-y-1 px-2 pt-2 pb-3 sm:px-4",children:ae.map(a=>e.jsx("a",{href:a.href,"aria-current":a.current?"page":void 0,className:se(a.current?"bg-gray-100 text-gray-900":"hover:bg-gray-50","block rounded-md px-3 py-2 text-base font-medium"),children:a.name},a.name))}),e.jsxs("div",{className:"border-t border-gray-200 pt-4 pb-3",children:[e.jsxs("div",{className:"mx-auto flex max-w-3xl items-center px-4 sm:px-6",children:[e.jsx("div",{className:"shrink-0",children:e.jsx("img",{alt:"",src:p.imageUrl,className:"size-10 rounded-full"})}),e.jsxs("div",{className:"ml-3",children:[e.jsx("div",{className:"text-base font-medium text-gray-800",children:p.name}),e.jsx("div",{className:"text-sm font-medium text-gray-500",children:p.email})]}),e.jsxs("button",{type:"button",className:"relative ml-auto shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden",children:[e.jsx("span",{className:"absolute -inset-1.5"}),e.jsx("span",{className:"sr-only",children:"View notifications"}),e.jsx(r,{"aria-hidden":"true",className:"size-6"})]})]}),e.jsx("div",{className:"mx-auto mt-3 max-w-3xl space-y-1 px-2 sm:px-4",children:z.map(a=>e.jsx("a",{href:a.href,className:"block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900",children:a.name},a.name))})]})]})]})})}const re=`import { Menu, MenuButton, MenuItem, MenuItems, Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const user = {
  name: 'Chelsea Hagon',
  email: 'chelsea.hagon@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Calendar', href: '#', current: false },
  { name: 'Teams', href: '#', current: false },
  { name: 'Directory', href: '#', current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <>
      {/* When the mobile menu is open, add \`overflow-hidden\` to the \`body\` element to prevent double scrollbars */}
      <Popover
        as="header"
        className="bg-white shadow-xs data-open:fixed data-open:inset-0 data-open:z-40 data-open:overflow-y-auto lg:static lg:overflow-y-visible data-open:lg:static data-open:lg:overflow-y-visible"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative flex justify-between lg:gap-8 xl:grid xl:grid-cols-12">
            <div className="flex md:absolute md:inset-y-0 md:left-0 lg:static xl:col-span-2">
              <div className="flex shrink-0 items-center">
                <a href="#">
                  <img
                    alt="Your Company"
                    src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                    className="h-8 w-auto"
                  />
                </a>
              </div>
            </div>
            <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
              <div className="flex items-center px-6 py-4 md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-none xl:px-0">
                <div className="grid w-full grid-cols-1">
                  <input
                    name="search"
                    type="search"
                    placeholder="Search"
                    className="col-start-1 row-start-1 block w-full rounded-md bg-white py-1.5 pr-3 pl-10 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                  <MagnifyingGlassIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center md:absolute md:inset-y-0 md:right-0 lg:hidden">
              {/* Mobile menu button */}
              <PopoverButton className="group relative -mx-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:outline-hidden focus:ring-inset">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
              </PopoverButton>
            </div>
            <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4">
              <button
                type="button"
                className="relative ml-5 shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
                <BellIcon aria-hidden="true" className="size-6" />
              </button>

              {/* Profile dropdown */}
              <Menu as="div" className="relative ml-5 shrink-0">
                <div>
                  <MenuButton className="relative flex rounded-full bg-white focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <img alt="" src={user.imageUrl} className="size-8 rounded-full" />
                  </MenuButton>
                </div>
                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                >
                  {userNavigation.map((item) => (
                    <MenuItem key={item.name}>
                      <a
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                      >
                        {item.name}
                      </a>
                    </MenuItem>
                  ))}
                </MenuItems>
              </Menu>

              <a
                href="#"
                className="ml-6 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                New Project
              </a>
            </div>
          </div>
        </div>

        <PopoverPanel as="nav" aria-label="Global" className="lg:hidden">
          <div className="mx-auto max-w-3xl space-y-1 px-2 pt-2 pb-3 sm:px-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                aria-current={item.current ? 'page' : undefined}
                className={classNames(
                  item.current ? 'bg-gray-100 text-gray-900' : 'hover:bg-gray-50',
                  'block rounded-md px-3 py-2 text-base font-medium',
                )}
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="border-t border-gray-200 pt-4 pb-3">
            <div className="mx-auto flex max-w-3xl items-center px-4 sm:px-6">
              <div className="shrink-0">
                <img alt="" src={user.imageUrl} className="size-10 rounded-full" />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-gray-800">{user.name}</div>
                <div className="text-sm font-medium text-gray-500">{user.email}</div>
              </div>
              <button
                type="button"
                className="relative ml-auto shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
                <BellIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mx-auto mt-3 max-w-3xl space-y-1 px-2 sm:px-4">
              {userNavigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </PopoverPanel>
      </Popover>
    </>
  )
}
`,je=()=>{const a=[{id:"01",name:"Simple dark with menu button on left",component:e.jsx(Y,{}),raw:T},{id:"02",name:"Dark with quick action",component:e.jsx(W,{}),raw:V},{id:"03",name:"Simple dark",component:e.jsx(J,{}),raw:q},{id:"04",name:"Simple with menu button on left",component:e.jsx(H,{}),raw:Q},{id:"05",name:"Simple",component:e.jsx($,{}),raw:U},{id:"06",name:"With quick action",component:e.jsx(X,{}),raw:G},{id:"07",name:"Dark with search",component:e.jsx(R,{}),raw:F},{id:"08",name:"With search",component:e.jsx(L,{}),raw:A},{id:"09",name:"Dark with centered search and secondary links",component:e.jsx(K,{}),raw:Z},{id:"10",name:"With centered search and secondary links",component:e.jsx(_,{}),raw:ee},{id:"11",name:"With search in column layout",component:e.jsx(te,{}),raw:re}];return e.jsx("div",{className:"space-y-10 pb-20",children:a.map(u=>e.jsxs("section",{children:[e.jsxs("h2",{className:"mb-4 text-lg font-bold text-gray-800",children:[u.id,". ",u.name]}),e.jsx(S,{name:u.name,code:u.raw,children:u.component})]},u.id))})};export{je as default};
