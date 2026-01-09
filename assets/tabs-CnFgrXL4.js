import{r as t,j as a}from"./index-CvCVbuS9.js";import{P as y}from"./PreviewWrapper-TzFvRoPZ.js";import{F as n}from"./ChevronDownIcon-DVV5oLHi.js";import{F as v}from"./UserIcon-8-oXPr7d.js";import{F as w}from"./CreditCardIcon-DRerdtc4.js";function N({title:e,titleId:r,...l},o){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":r},l),e?t.createElement("title",{id:r},e):null,t.createElement("path",{fillRule:"evenodd",d:"M4 16.5v-13h-.25a.75.75 0 0 1 0-1.5h12.5a.75.75 0 0 1 0 1.5H16v13h.25a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75v-2.5a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0-.75.75v2.5a.75.75 0 0 1-.75.75h-3.5a.75.75 0 0 1 0-1.5H4Zm3-11a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM7.5 9a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1ZM11 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm.5 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z",clipRule:"evenodd"}))}const j=t.forwardRef(N);function C({title:e,titleId:r,...l},o){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":r},l),e?t.createElement("title",{id:r},e):null,t.createElement("path",{d:"M7 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM14.5 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM1.615 16.428a1.224 1.224 0 0 1-.569-1.175 6.002 6.002 0 0 1 11.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 0 1 7 18a9.953 9.953 0 0 1-5.385-1.572ZM14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 0 0-1.588-3.755 4.502 4.502 0 0 1 5.874 2.636.818.818 0 0 1-.36.98A7.465 7.465 0 0 1 14.5 16Z"}))}const T=t.forwardRef(C),i=[{name:"My Account",href:"#",current:!1},{name:"Company",href:"#",current:!1},{name:"Team Members",href:"#",current:!0},{name:"Billing",href:"#",current:!1}];function B(...e){return e.filter(Boolean).join(" ")}function M(){return a.jsxs("div",{children:[a.jsxs("div",{className:"grid grid-cols-1 sm:hidden",children:[a.jsx("select",{defaultValue:i.find(e=>e.current).name,"aria-label":"Select a tab",className:"col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600",children:i.map(e=>a.jsx("option",{children:e.name},e.name))}),a.jsx(n,{"aria-hidden":"true",className:"pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end fill-gray-500"})]}),a.jsx("div",{className:"hidden sm:block",children:a.jsx("div",{className:"border-b border-gray-200",children:a.jsx("nav",{"aria-label":"Tabs",className:"-mb-px flex space-x-8",children:i.map(e=>a.jsx("a",{href:e.href,"aria-current":e.current?"page":void 0,className:B(e.current?"border-indigo-500 text-indigo-600":"border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700","border-b-2 px-1 py-4 text-sm font-medium whitespace-nowrap"),children:e.name},e.name))})})})]})}const k=`import { ChevronDownIcon } from '@heroicons/react/16/solid'

const tabs = [
  { name: 'My Account', href: '#', current: false },
  { name: 'Company', href: '#', current: false },
  { name: 'Team Members', href: '#', current: true },
  { name: 'Billing', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:hidden">
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          defaultValue={tabs.find((tab) => tab.current).name}
          aria-label="Select a tab"
          className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
        <ChevronDownIcon
          aria-hidden="true"
          className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end fill-gray-500"
        />
      </div>
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav aria-label="Tabs" className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <a
                key={tab.name}
                href={tab.href}
                aria-current={tab.current ? 'page' : undefined}
                className={classNames(
                  tab.current
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                  'border-b-2 px-1 py-4 text-sm font-medium whitespace-nowrap',
                )}
              >
                {tab.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}
`,c=[{name:"My Account",href:"#",icon:v,current:!1},{name:"Company",href:"#",icon:j,current:!1},{name:"Team Members",href:"#",icon:T,current:!0},{name:"Billing",href:"#",icon:w,current:!1}];function p(...e){return e.filter(Boolean).join(" ")}function I(){return a.jsxs("div",{children:[a.jsxs("div",{className:"grid grid-cols-1 sm:hidden",children:[a.jsx("select",{defaultValue:c.find(e=>e.current).name,"aria-label":"Select a tab",className:"col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600",children:c.map(e=>a.jsx("option",{children:e.name},e.name))}),a.jsx(n,{"aria-hidden":"true",className:"pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end fill-gray-500"})]}),a.jsx("div",{className:"hidden sm:block",children:a.jsx("div",{className:"border-b border-gray-200",children:a.jsx("nav",{"aria-label":"Tabs",className:"-mb-px flex space-x-8",children:c.map(e=>a.jsxs("a",{href:e.href,"aria-current":e.current?"page":void 0,className:p(e.current?"border-indigo-500 text-indigo-600":"border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700","group inline-flex items-center border-b-2 px-1 py-4 text-sm font-medium"),children:[a.jsx(e.icon,{"aria-hidden":"true",className:p(e.current?"text-indigo-500":"text-gray-400 group-hover:text-gray-500","mr-2 -ml-0.5 size-5")}),a.jsx("span",{children:e.name})]},e.name))})})})]})}const R=`import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { BuildingOfficeIcon, CreditCardIcon, UserIcon, UsersIcon } from '@heroicons/react/20/solid'

const tabs = [
  { name: 'My Account', href: '#', icon: UserIcon, current: false },
  { name: 'Company', href: '#', icon: BuildingOfficeIcon, current: false },
  { name: 'Team Members', href: '#', icon: UsersIcon, current: true },
  { name: 'Billing', href: '#', icon: CreditCardIcon, current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:hidden">
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          defaultValue={tabs.find((tab) => tab.current).name}
          aria-label="Select a tab"
          className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
        <ChevronDownIcon
          aria-hidden="true"
          className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end fill-gray-500"
        />
      </div>
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav aria-label="Tabs" className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <a
                key={tab.name}
                href={tab.href}
                aria-current={tab.current ? 'page' : undefined}
                className={classNames(
                  tab.current
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                  'group inline-flex items-center border-b-2 px-1 py-4 text-sm font-medium',
                )}
              >
                <tab.icon
                  aria-hidden="true"
                  className={classNames(
                    tab.current ? 'text-indigo-500' : 'text-gray-400 group-hover:text-gray-500',
                    'mr-2 -ml-0.5 size-5',
                  )}
                />
                <span>{tab.name}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}
`,d=[{name:"My Account",href:"#",current:!1},{name:"Company",href:"#",current:!1},{name:"Team Members",href:"#",current:!0},{name:"Billing",href:"#",current:!1}];function U(...e){return e.filter(Boolean).join(" ")}function $(){return a.jsxs("div",{children:[a.jsxs("div",{className:"grid grid-cols-1 sm:hidden",children:[a.jsx("select",{defaultValue:d.find(e=>e.current).name,"aria-label":"Select a tab",className:"col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600",children:d.map(e=>a.jsx("option",{children:e.name},e.name))}),a.jsx(n,{"aria-hidden":"true",className:"pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end fill-gray-500"})]}),a.jsx("div",{className:"hidden sm:block",children:a.jsx("nav",{"aria-label":"Tabs",className:"flex space-x-4",children:d.map(e=>a.jsx("a",{href:e.href,"aria-current":e.current?"page":void 0,className:U(e.current?"bg-gray-100 text-gray-700":"text-gray-500 hover:text-gray-700","rounded-md px-3 py-2 text-sm font-medium"),children:e.name},e.name))})})]})}const E=`import { ChevronDownIcon } from '@heroicons/react/16/solid'

const tabs = [
  { name: 'My Account', href: '#', current: false },
  { name: 'Company', href: '#', current: false },
  { name: 'Team Members', href: '#', current: true },
  { name: 'Billing', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:hidden">
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          defaultValue={tabs.find((tab) => tab.current).name}
          aria-label="Select a tab"
          className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
        <ChevronDownIcon
          aria-hidden="true"
          className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end fill-gray-500"
        />
      </div>
      <div className="hidden sm:block">
        <nav aria-label="Tabs" className="flex space-x-4">
          {tabs.map((tab) => (
            <a
              key={tab.name}
              href={tab.href}
              aria-current={tab.current ? 'page' : undefined}
              className={classNames(
                tab.current ? 'bg-gray-100 text-gray-700' : 'text-gray-500 hover:text-gray-700',
                'rounded-md px-3 py-2 text-sm font-medium',
              )}
            >
              {tab.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}
`,m=[{name:"My Account",href:"#",current:!1},{name:"Company",href:"#",current:!1},{name:"Team Members",href:"#",current:!0},{name:"Billing",href:"#",current:!1}];function z(...e){return e.filter(Boolean).join(" ")}function A(){return a.jsxs("div",{children:[a.jsxs("div",{className:"grid grid-cols-1 sm:hidden",children:[a.jsx("select",{defaultValue:m.find(e=>e.current).name,"aria-label":"Select a tab",className:"col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600",children:m.map(e=>a.jsx("option",{children:e.name},e.name))}),a.jsx(n,{"aria-hidden":"true",className:"pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end fill-gray-500"})]}),a.jsx("div",{className:"hidden sm:block",children:a.jsx("nav",{"aria-label":"Tabs",className:"flex space-x-4",children:m.map(e=>a.jsx("a",{href:e.href,"aria-current":e.current?"page":void 0,className:z(e.current?"bg-gray-200 text-gray-800":"text-gray-600 hover:text-gray-800","rounded-md px-3 py-2 text-sm font-medium"),children:e.name},e.name))})})]})}const S=`import { ChevronDownIcon } from '@heroicons/react/16/solid'

const tabs = [
  { name: 'My Account', href: '#', current: false },
  { name: 'Company', href: '#', current: false },
  { name: 'Team Members', href: '#', current: true },
  { name: 'Billing', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:hidden">
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          defaultValue={tabs.find((tab) => tab.current).name}
          aria-label="Select a tab"
          className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
        <ChevronDownIcon
          aria-hidden="true"
          className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end fill-gray-500"
        />
      </div>
      <div className="hidden sm:block">
        <nav aria-label="Tabs" className="flex space-x-4">
          {tabs.map((tab) => (
            <a
              key={tab.name}
              href={tab.href}
              aria-current={tab.current ? 'page' : undefined}
              className={classNames(
                tab.current ? 'bg-gray-200 text-gray-800' : 'text-gray-600 hover:text-gray-800',
                'rounded-md px-3 py-2 text-sm font-medium',
              )}
            >
              {tab.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}
`,u=[{name:"My Account",href:"#",current:!1},{name:"Company",href:"#",current:!1},{name:"Team Members",href:"#",current:!0},{name:"Billing",href:"#",current:!1}];function D(...e){return e.filter(Boolean).join(" ")}function V(){return a.jsxs("div",{children:[a.jsxs("div",{className:"grid grid-cols-1 sm:hidden",children:[a.jsx("select",{defaultValue:u.find(e=>e.current).name,"aria-label":"Select a tab",className:"col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600",children:u.map(e=>a.jsx("option",{children:e.name},e.name))}),a.jsx(n,{"aria-hidden":"true",className:"pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end fill-gray-500"})]}),a.jsx("div",{className:"hidden sm:block",children:a.jsx("nav",{"aria-label":"Tabs",className:"flex space-x-4",children:u.map(e=>a.jsx("a",{href:e.href,"aria-current":e.current?"page":void 0,className:D(e.current?"bg-indigo-100 text-indigo-700":"text-gray-500 hover:text-gray-700","rounded-md px-3 py-2 text-sm font-medium"),children:e.name},e.name))})})]})}const F=`import { ChevronDownIcon } from '@heroicons/react/16/solid'

const tabs = [
  { name: 'My Account', href: '#', current: false },
  { name: 'Company', href: '#', current: false },
  { name: 'Team Members', href: '#', current: true },
  { name: 'Billing', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:hidden">
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          defaultValue={tabs.find((tab) => tab.current).name}
          aria-label="Select a tab"
          className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
        <ChevronDownIcon
          aria-hidden="true"
          className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end fill-gray-500"
        />
      </div>
      <div className="hidden sm:block">
        <nav aria-label="Tabs" className="flex space-x-4">
          {tabs.map((tab) => (
            <a
              key={tab.name}
              href={tab.href}
              aria-current={tab.current ? 'page' : undefined}
              className={classNames(
                tab.current ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:text-gray-700',
                'rounded-md px-3 py-2 text-sm font-medium',
              )}
            >
              {tab.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}
`,f=[{name:"My Account",href:"#",current:!1},{name:"Company",href:"#",current:!1},{name:"Team Members",href:"#",current:!0},{name:"Billing",href:"#",current:!1}];function L(...e){return e.filter(Boolean).join(" ")}function Z(){return a.jsxs("div",{children:[a.jsxs("div",{className:"grid grid-cols-1 sm:hidden",children:[a.jsx("select",{defaultValue:f.find(e=>e.current).name,"aria-label":"Select a tab",className:"col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600",children:f.map(e=>a.jsx("option",{children:e.name},e.name))}),a.jsx(n,{"aria-hidden":"true",className:"pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end fill-gray-500"})]}),a.jsx("div",{className:"hidden sm:block",children:a.jsx("div",{className:"border-b border-gray-200",children:a.jsx("nav",{"aria-label":"Tabs",className:"-mb-px flex",children:f.map(e=>a.jsx("a",{href:e.href,"aria-current":e.current?"page":void 0,className:L(e.current?"border-indigo-500 text-indigo-600":"border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700","w-1/4 border-b-2 px-1 py-4 text-center text-sm font-medium"),children:e.name},e.name))})})})]})}const O=`import { ChevronDownIcon } from '@heroicons/react/16/solid'

const tabs = [
  { name: 'My Account', href: '#', current: false },
  { name: 'Company', href: '#', current: false },
  { name: 'Team Members', href: '#', current: true },
  { name: 'Billing', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:hidden">
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          defaultValue={tabs.find((tab) => tab.current).name}
          aria-label="Select a tab"
          className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
        <ChevronDownIcon
          aria-hidden="true"
          className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end fill-gray-500"
        />
      </div>
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav aria-label="Tabs" className="-mb-px flex">
            {tabs.map((tab) => (
              <a
                key={tab.name}
                href={tab.href}
                aria-current={tab.current ? 'page' : undefined}
                className={classNames(
                  tab.current
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                  'w-1/4 border-b-2 px-1 py-4 text-center text-sm font-medium',
                )}
              >
                {tab.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}
`,s=[{name:"My Account",href:"#",current:!1},{name:"Company",href:"#",current:!1},{name:"Team Members",href:"#",current:!0},{name:"Billing",href:"#",current:!1}];function x(...e){return e.filter(Boolean).join(" ")}function P(){return a.jsxs("div",{children:[a.jsxs("div",{className:"grid grid-cols-1 sm:hidden",children:[a.jsx("select",{defaultValue:s.find(e=>e.current).name,"aria-label":"Select a tab",className:"col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600",children:s.map(e=>a.jsx("option",{children:e.name},e.name))}),a.jsx(n,{"aria-hidden":"true",className:"pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end fill-gray-500"})]}),a.jsx("div",{className:"hidden sm:block",children:a.jsx("nav",{"aria-label":"Tabs",className:"isolate flex divide-x divide-gray-200 rounded-lg shadow-sm",children:s.map((e,r)=>a.jsxs("a",{href:e.href,"aria-current":e.current?"page":void 0,className:x(e.current?"text-gray-900":"text-gray-500 hover:text-gray-700",r===0?"rounded-l-lg":"",r===s.length-1?"rounded-r-lg":"","group relative min-w-0 flex-1 overflow-hidden bg-white px-4 py-4 text-center text-sm font-medium hover:bg-gray-50 focus:z-10"),children:[a.jsx("span",{children:e.name}),a.jsx("span",{"aria-hidden":"true",className:x(e.current?"bg-indigo-500":"bg-transparent","absolute inset-x-0 bottom-0 h-0.5")})]},e.name))})})]})}const W=`import { ChevronDownIcon } from '@heroicons/react/16/solid'

const tabs = [
  { name: 'My Account', href: '#', current: false },
  { name: 'Company', href: '#', current: false },
  { name: 'Team Members', href: '#', current: true },
  { name: 'Billing', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:hidden">
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          defaultValue={tabs.find((tab) => tab.current).name}
          aria-label="Select a tab"
          className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
        <ChevronDownIcon
          aria-hidden="true"
          className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end fill-gray-500"
        />
      </div>
      <div className="hidden sm:block">
        <nav aria-label="Tabs" className="isolate flex divide-x divide-gray-200 rounded-lg shadow-sm">
          {tabs.map((tab, tabIdx) => (
            <a
              key={tab.name}
              href={tab.href}
              aria-current={tab.current ? 'page' : undefined}
              className={classNames(
                tab.current ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700',
                tabIdx === 0 ? 'rounded-l-lg' : '',
                tabIdx === tabs.length - 1 ? 'rounded-r-lg' : '',
                'group relative min-w-0 flex-1 overflow-hidden bg-white px-4 py-4 text-center text-sm font-medium hover:bg-gray-50 focus:z-10',
              )}
            >
              <span>{tab.name}</span>
              <span
                aria-hidden="true"
                className={classNames(
                  tab.current ? 'bg-indigo-500' : 'bg-transparent',
                  'absolute inset-x-0 bottom-0 h-0.5',
                )}
              />
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}
`,h=[{name:"Applied",href:"#",count:"52",current:!1},{name:"Phone Screening",href:"#",count:"6",current:!1},{name:"Interview",href:"#",count:"4",current:!0},{name:"Offer",href:"#",current:!1},{name:"Disqualified",href:"#",current:!1}];function g(...e){return e.filter(Boolean).join(" ")}function q(){return a.jsxs("div",{children:[a.jsxs("div",{className:"grid grid-cols-1 sm:hidden",children:[a.jsx("select",{defaultValue:h.find(e=>e.current).name,"aria-label":"Select a tab",className:"col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600",children:h.map(e=>a.jsx("option",{children:e.name},e.name))}),a.jsx(n,{"aria-hidden":"true",className:"pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end fill-gray-500"})]}),a.jsx("div",{className:"hidden sm:block",children:a.jsx("div",{className:"border-b border-gray-200",children:a.jsx("nav",{"aria-label":"Tabs",className:"-mb-px flex space-x-8",children:h.map(e=>a.jsxs("a",{href:"#","aria-current":e.current?"page":void 0,className:g(e.current?"border-indigo-500 text-indigo-600":"border-transparent text-gray-500 hover:border-gray-200 hover:text-gray-700","flex border-b-2 px-1 py-4 text-sm font-medium whitespace-nowrap"),children:[e.name,e.count?a.jsx("span",{className:g(e.current?"bg-indigo-100 text-indigo-600":"bg-gray-100 text-gray-900","ml-3 hidden rounded-full px-2.5 py-0.5 text-xs font-medium md:inline-block"),children:e.count}):null]},e.name))})})})]})}const H=`import { ChevronDownIcon } from '@heroicons/react/16/solid'

const tabs = [
  { name: 'Applied', href: '#', count: '52', current: false },
  { name: 'Phone Screening', href: '#', count: '6', current: false },
  { name: 'Interview', href: '#', count: '4', current: true },
  { name: 'Offer', href: '#', current: false },
  { name: 'Disqualified', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:hidden">
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          defaultValue={tabs.find((tab) => tab.current).name}
          aria-label="Select a tab"
          className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
        <ChevronDownIcon
          aria-hidden="true"
          className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end fill-gray-500"
        />
      </div>
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav aria-label="Tabs" className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <a
                key={tab.name}
                href="#"
                aria-current={tab.current ? 'page' : undefined}
                className={classNames(
                  tab.current
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:border-gray-200 hover:text-gray-700',
                  'flex border-b-2 px-1 py-4 text-sm font-medium whitespace-nowrap',
                )}
              >
                {tab.name}
                {tab.count ? (
                  <span
                    className={classNames(
                      tab.current ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-100 text-gray-900',
                      'ml-3 hidden rounded-full px-2.5 py-0.5 text-xs font-medium md:inline-block',
                    )}
                  >
                    {tab.count}
                  </span>
                ) : null}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}
`,b=[{name:"My Account",href:"#",current:!1},{name:"Company",href:"#",current:!1},{name:"Team Members",href:"#",current:!0},{name:"Billing",href:"#",current:!1}];function G(){return a.jsx("div",{className:"bg-gray-900 px-4 py-6 sm:px-6 lg:px-8",children:a.jsxs("div",{className:"mx-auto max-w-7xl",children:[a.jsxs("div",{className:"grid grid-cols-1 sm:hidden",children:[a.jsx("select",{defaultValue:b.find(e=>e.current).name,"aria-label":"Select a tab",className:"col-start-1 row-start-1 w-full appearance-none rounded-md bg-white/5 py-2 pr-8 pl-3 text-base text-white outline-1 -outline-offset-1 outline-white/10 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500",children:b.map(e=>a.jsx("option",{children:e.name},e.name))}),a.jsx(n,{"aria-hidden":"true",className:"pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end fill-gray-400"})]}),a.jsx("div",{className:"hidden sm:block",children:a.jsx("nav",{className:"flex border-b border-white/10 py-4",children:a.jsx("ul",{role:"list",className:"flex min-w-full flex-none gap-x-8 px-2 text-sm/6 font-semibold text-gray-400",children:b.map(e=>a.jsx("li",{children:a.jsx("a",{href:e.href,className:e.current?"text-indigo-400":"",children:e.name})},e.name))})})})]})})}const J=`import { ChevronDownIcon } from '@heroicons/react/16/solid'

const tabs = [
  { name: 'My Account', href: '#', current: false },
  { name: 'Company', href: '#', current: false },
  { name: 'Team Members', href: '#', current: true },
  { name: 'Billing', href: '#', current: false },
]

export default function Example() {
  return (
    <div className="bg-gray-900 px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 sm:hidden">
          {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
          <select
            defaultValue={tabs.find((tab) => tab.current).name}
            aria-label="Select a tab"
            className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white/5 py-2 pr-8 pl-3 text-base text-white outline-1 -outline-offset-1 outline-white/10 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
          >
            {tabs.map((tab) => (
              <option key={tab.name}>{tab.name}</option>
            ))}
          </select>
          <ChevronDownIcon
            aria-hidden="true"
            className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end fill-gray-400"
          />
        </div>
        <div className="hidden sm:block">
          <nav className="flex border-b border-white/10 py-4">
            <ul role="list" className="flex min-w-full flex-none gap-x-8 px-2 text-sm/6 font-semibold text-gray-400">
              {tabs.map((tab) => (
                <li key={tab.name}>
                  <a href={tab.href} className={tab.current ? 'text-indigo-400' : ''}>
                    {tab.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}
`,ee=()=>{const e=[{id:"01",name:"Tabs with underline",component:a.jsx(M,{}),raw:k},{id:"02",name:"Tabs with underline and icons",component:a.jsx(I,{}),raw:R},{id:"03",name:"Tabs in pills",component:a.jsx($,{}),raw:E},{id:"04",name:"Tabs in pills on gray",component:a.jsx(A,{}),raw:S},{id:"05",name:"Tabs in pills with brand color",component:a.jsx(V,{}),raw:F},{id:"06",name:"Full-width tabs with underline",component:a.jsx(Z,{}),raw:O},{id:"07",name:"Bar with underline",component:a.jsx(P,{}),raw:W},{id:"08",name:"Tabs with underline and badges",component:a.jsx(q,{}),raw:H},{id:"09",name:"Simple",component:a.jsx(G,{}),raw:J}];return a.jsx("div",{className:"space-y-10 pb-20",children:e.map(r=>a.jsxs("section",{children:[a.jsxs("h2",{className:"mb-4 text-lg font-bold text-gray-800",children:[r.id,". ",r.name]}),a.jsx(y,{name:r.name,code:r.raw,children:r.component})]},r.id))})};export{ee as default};
