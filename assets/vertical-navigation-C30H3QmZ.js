import{j as r}from"./index-CvCVbuS9.js";import{P as d}from"./PreviewWrapper-TzFvRoPZ.js";import{F as i,a as s}from"./HomeIcon-DYfG8a2o.js";import{F as o}from"./UsersIcon-BtfmJCZO.js";import{F as l}from"./FolderIcon-BaDjF-i0.js";import{F as c}from"./CalendarIcon-BGNgCXOy.js";import{F as m}from"./ChartPieIcon-0b6DQGNv.js";const x=[{name:"Dashboard",href:"#",current:!0},{name:"Team",href:"#",current:!1},{name:"Projects",href:"#",current:!1},{name:"Calendar",href:"#",current:!1},{name:"Documents",href:"#",current:!1},{name:"Reports",href:"#",current:!1}];function g(...e){return e.filter(Boolean).join(" ")}function h(){return r.jsx("nav",{"aria-label":"Sidebar",className:"flex flex-1 flex-col",children:r.jsx("ul",{role:"list",className:"-mx-2 space-y-1",children:x.map(e=>r.jsx("li",{children:r.jsx("a",{href:e.href,className:g(e.current?"bg-gray-50 text-indigo-600":"text-gray-700 hover:bg-gray-50 hover:text-indigo-600","group flex gap-x-3 rounded-md p-2 pl-3 text-sm/6 font-semibold"),children:e.name})},e.name))})})}const p=`const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
  { name: 'Documents', href: '#', current: false },
  { name: 'Reports', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <nav aria-label="Sidebar" className="flex flex-1 flex-col">
      <ul role="list" className="-mx-2 space-y-1">
        {navigation.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              className={classNames(
                item.current ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
                'group flex gap-x-3 rounded-md p-2 pl-3 text-sm/6 font-semibold',
              )}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
`,y=[{name:"Dashboard",href:"#",count:"5",current:!0},{name:"Team",href:"#",current:!1},{name:"Projects",href:"#",count:"12",current:!1},{name:"Calendar",href:"#",count:"20+",current:!1},{name:"Documents",href:"#",current:!1},{name:"Reports",href:"#",current:!1}];function b(...e){return e.filter(Boolean).join(" ")}function N(){return r.jsx("nav",{"aria-label":"Sidebar",className:"flex flex-1 flex-col",children:r.jsx("ul",{role:"list",className:"-mx-2 space-y-1",children:y.map(e=>r.jsx("li",{children:r.jsxs("a",{href:e.href,className:b(e.current?"bg-gray-50 text-indigo-600":"text-gray-700 hover:bg-gray-50 hover:text-indigo-600","group flex gap-x-3 rounded-md p-2 pl-3 text-sm/6 font-semibold"),children:[e.name,e.count?r.jsx("span",{"aria-hidden":"true",className:"ml-auto w-9 min-w-max rounded-full bg-white px-2.5 py-0.5 text-center text-xs/5 font-medium whitespace-nowrap text-gray-600 ring-1 ring-gray-200 ring-inset",children:e.count}):null]})},e.name))})})}const v=`const navigation = [
  { name: 'Dashboard', href: '#', count: '5', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', count: '12', current: false },
  { name: 'Calendar', href: '#', count: '20+', current: false },
  { name: 'Documents', href: '#', current: false },
  { name: 'Reports', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <nav aria-label="Sidebar" className="flex flex-1 flex-col">
      <ul role="list" className="-mx-2 space-y-1">
        {navigation.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              className={classNames(
                item.current ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
                'group flex gap-x-3 rounded-md p-2 pl-3 text-sm/6 font-semibold',
              )}
            >
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
    </nav>
  )
}
`,j=[{name:"Dashboard",href:"#",icon:i,count:"5",current:!0},{name:"Team",href:"#",icon:o,current:!1},{name:"Projects",href:"#",icon:l,count:"12",current:!1},{name:"Calendar",href:"#",icon:c,count:"20+",current:!1},{name:"Documents",href:"#",icon:s,current:!1},{name:"Reports",href:"#",icon:m,current:!1}];function u(...e){return e.filter(Boolean).join(" ")}function w(){return r.jsx("nav",{"aria-label":"Sidebar",className:"flex flex-1 flex-col",children:r.jsx("ul",{role:"list",className:"-mx-2 space-y-1",children:j.map(e=>r.jsx("li",{children:r.jsxs("a",{href:e.href,className:u(e.current?"bg-gray-50 text-indigo-600":"text-gray-700 hover:bg-gray-50 hover:text-indigo-600","group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"),children:[r.jsx(e.icon,{"aria-hidden":"true",className:u(e.current?"text-indigo-600":"text-gray-400 group-hover:text-indigo-600","size-6 shrink-0")}),e.name,e.count?r.jsx("span",{"aria-hidden":"true",className:"ml-auto w-9 min-w-max rounded-full bg-white px-2.5 py-0.5 text-center text-xs/5 font-medium whitespace-nowrap text-gray-600 ring-1 ring-gray-200 ring-inset",children:e.count}):null]})},e.name))})})}const I=`import {
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

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <nav aria-label="Sidebar" className="flex flex-1 flex-col">
      <ul role="list" className="-mx-2 space-y-1">
        {navigation.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              className={classNames(
                item.current ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
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
    </nav>
  )
}
`,D=[{name:"Dashboard",href:"#",icon:i,current:!0},{name:"Team",href:"#",icon:o,current:!1},{name:"Projects",href:"#",icon:l,current:!1},{name:"Calendar",href:"#",icon:c,current:!1},{name:"Documents",href:"#",icon:s,current:!1},{name:"Reports",href:"#",icon:m,current:!1}];function f(...e){return e.filter(Boolean).join(" ")}function P(){return r.jsx("nav",{"aria-label":"Sidebar",className:"flex flex-1 flex-col",children:r.jsx("ul",{role:"list",className:"-mx-2 space-y-1",children:D.map(e=>r.jsx("li",{children:r.jsxs("a",{href:e.href,className:f(e.current?"bg-gray-50 text-indigo-600":"text-gray-700 hover:bg-gray-50 hover:text-indigo-600","group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"),children:[r.jsx(e.icon,{"aria-hidden":"true",className:f(e.current?"text-indigo-600":"text-gray-400 group-hover:text-indigo-600","size-6 shrink-0")}),e.name]})},e.name))})})}const C=`import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
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
  return (
    <nav aria-label="Sidebar" className="flex flex-1 flex-col">
      <ul role="list" className="-mx-2 space-y-1">
        {navigation.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              className={classNames(
                item.current ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
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
    </nav>
  )
}
`,R=[{name:"Dashboard",href:"#",icon:i,count:"5",current:!0},{name:"Team",href:"#",icon:o,current:!1},{name:"Projects",href:"#",icon:l,count:"12",current:!1},{name:"Calendar",href:"#",icon:c,count:"20+",current:!1},{name:"Documents",href:"#",icon:s,current:!1},{name:"Reports",href:"#",icon:m,current:!1}],$=[{name:"Website redesign",href:"#",initial:"W",current:!1},{name:"GraphQL API",href:"#",initial:"G",current:!1},{name:"Customer migration guides",href:"#",initial:"C",current:!1},{name:"Profit sharing program",href:"#",initial:"P",current:!1}];function n(...e){return e.filter(Boolean).join(" ")}function k(){return r.jsx("nav",{"aria-label":"Sidebar",className:"flex flex-1 flex-col",children:r.jsxs("ul",{role:"list",className:"flex flex-1 flex-col gap-y-7",children:[r.jsx("li",{children:r.jsx("ul",{role:"list",className:"-mx-2 space-y-1",children:R.map(e=>r.jsx("li",{children:r.jsxs("a",{href:e.href,className:n(e.current?"bg-gray-50 text-indigo-600":"text-gray-700 hover:bg-gray-50 hover:text-indigo-600","group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"),children:[r.jsx(e.icon,{"aria-hidden":"true",className:n(e.current?"text-indigo-600":"text-gray-400 group-hover:text-indigo-600","size-6 shrink-0")}),e.name,e.count?r.jsx("span",{"aria-hidden":"true",className:"ml-auto w-9 min-w-max rounded-full bg-white px-2.5 py-0.5 text-center text-xs/5 font-medium whitespace-nowrap text-gray-600 ring-1 ring-gray-200 ring-inset",children:e.count}):null]})},e.name))})}),r.jsxs("li",{children:[r.jsx("div",{className:"text-xs/6 font-semibold text-gray-400",children:"Projects"}),r.jsx("ul",{role:"list",className:"-mx-2 mt-2 space-y-1",children:$.map(e=>r.jsx("li",{children:r.jsxs("a",{href:e.href,className:n(e.current?"bg-gray-50 text-indigo-600":"text-gray-700 hover:bg-gray-50 hover:text-indigo-600","group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"),children:[r.jsx("span",{className:n(e.current?"border-indigo-600 text-indigo-600":"border-gray-200 text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600","flex size-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium"),children:e.initial}),r.jsx("span",{className:"truncate",children:e.name})]})},e.name))})]})]})})}const F=`import {
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
const secondaryNavigation = [
  { name: 'Website redesign', href: '#', initial: 'W', current: false },
  { name: 'GraphQL API', href: '#', initial: 'G', current: false },
  { name: 'Customer migration guides', href: '#', initial: 'C', current: false },
  { name: 'Profit sharing program', href: '#', initial: 'P', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <nav aria-label="Sidebar" className="flex flex-1 flex-col">
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
          <div className="text-xs/6 font-semibold text-gray-400">Projects</div>
          <ul role="list" className="-mx-2 mt-2 space-y-1">
            {secondaryNavigation.map((item) => (
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
                  <span
                    className={classNames(
                      item.current
                        ? 'border-indigo-600 text-indigo-600'
                        : 'border-gray-200 text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600',
                      'flex size-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium',
                    )}
                  >
                    {item.initial}
                  </span>
                  <span className="truncate">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </nav>
  )
}
`,W=[{name:"Dashboard",href:"#",icon:i,count:"5",current:!0},{name:"Team",href:"#",icon:o,current:!1},{name:"Projects",href:"#",icon:l,count:"12",current:!1},{name:"Calendar",href:"#",icon:c,count:"20+",current:!1},{name:"Documents",href:"#",icon:s,current:!1},{name:"Reports",href:"#",icon:m,current:!1}],S=[{name:"Website redesign",href:"#",initial:"W",current:!1},{name:"GraphQL API",href:"#",initial:"G",current:!1},{name:"Customer migration guides",href:"#",initial:"C",current:!1},{name:"Profit sharing program",href:"#",initial:"P",current:!1}];function t(...e){return e.filter(Boolean).join(" ")}function B(){return r.jsx("nav",{"aria-label":"Sidebar",className:"flex flex-1 flex-col",children:r.jsxs("ul",{role:"list",className:"flex flex-1 flex-col gap-y-7",children:[r.jsx("li",{children:r.jsx("ul",{role:"list",className:"-mx-2 space-y-1",children:W.map(e=>r.jsx("li",{children:r.jsxs("a",{href:e.href,className:t(e.current?"bg-gray-100 text-indigo-600":"text-gray-700 hover:bg-gray-100 hover:text-indigo-600","group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"),children:[r.jsx(e.icon,{"aria-hidden":"true",className:t(e.current?"text-indigo-600":"text-gray-400 group-hover:text-indigo-600","size-6 shrink-0")}),e.name,e.count?r.jsx("span",{"aria-hidden":"true",className:"ml-auto w-9 min-w-max rounded-full bg-gray-50 px-2.5 py-0.5 text-center text-xs/5 font-medium whitespace-nowrap text-gray-600 ring-1 ring-gray-200 ring-inset",children:e.count}):null]})},e.name))})}),r.jsxs("li",{children:[r.jsx("div",{className:"text-xs/6 font-semibold text-gray-400",children:"Projects"}),r.jsx("ul",{role:"list",className:"-mx-2 mt-2 space-y-1",children:S.map(e=>r.jsx("li",{children:r.jsxs("a",{href:e.href,className:t(e.current?"bg-gray-50 text-indigo-600":"text-gray-700 hover:bg-gray-100 hover:text-indigo-600","group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"),children:[r.jsx("span",{className:t(e.current?"border-indigo-600 text-indigo-600":"border-gray-200 text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600","flex size-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium"),children:e.initial}),r.jsx("span",{className:"truncate",children:e.name})]})},e.name))})]})]})})}const E=`import {
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
const secondaryNavigation = [
  { name: 'Website redesign', href: '#', initial: 'W', current: false },
  { name: 'GraphQL API', href: '#', initial: 'G', current: false },
  { name: 'Customer migration guides', href: '#', initial: 'C', current: false },
  { name: 'Profit sharing program', href: '#', initial: 'P', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <nav aria-label="Sidebar" className="flex flex-1 flex-col">
      <ul role="list" className="flex flex-1 flex-col gap-y-7">
        <li>
          <ul role="list" className="-mx-2 space-y-1">
            {navigation.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-100 text-indigo-600'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-indigo-600',
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
                      className="ml-auto w-9 min-w-max rounded-full bg-gray-50 px-2.5 py-0.5 text-center text-xs/5 font-medium whitespace-nowrap text-gray-600 ring-1 ring-gray-200 ring-inset"
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
          <div className="text-xs/6 font-semibold text-gray-400">Projects</div>
          <ul role="list" className="-mx-2 mt-2 space-y-1">
            {secondaryNavigation.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-50 text-indigo-600'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-indigo-600',
                    'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                  )}
                >
                  <span
                    className={classNames(
                      item.current
                        ? 'border-indigo-600 text-indigo-600'
                        : 'border-gray-200 text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600',
                      'flex size-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium',
                    )}
                  >
                    {item.initial}
                  </span>
                  <span className="truncate">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </nav>
  )
}
`,Q=()=>{const e=[{id:"01",name:"Simple",component:r.jsx(h,{}),raw:p},{id:"02",name:"With badges",component:r.jsx(N,{}),raw:v},{id:"03",name:"With icons and badges",component:r.jsx(w,{}),raw:I},{id:"04",name:"With icons",component:r.jsx(P,{}),raw:C},{id:"05",name:"With secondary navigation",component:r.jsx(k,{}),raw:F},{id:"06",name:"On gray",component:r.jsx(B,{}),raw:E}];return r.jsx("div",{className:"space-y-10 pb-20",children:e.map(a=>r.jsxs("section",{children:[r.jsxs("h2",{className:"mb-4 text-lg font-bold text-gray-800",children:[a.id,". ",a.name]}),r.jsx(d,{name:a.name,code:a.raw,children:a.component})]},a.id))})};export{Q as default};
