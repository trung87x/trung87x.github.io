import{r as t,j as e}from"./index-CvCVbuS9.js";import{P as d}from"./PreviewWrapper-TzFvRoPZ.js";import{F as c}from"./UsersIcon-BtfmJCZO.js";import{F as m}from"./CursorArrowRaysIcon-DMMKSA1z.js";function o({title:a,titleId:s,...n},i){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:i,"aria-labelledby":s},n),a?t.createElement("title",{id:s},a):null,t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"}))}const x=t.forwardRef(o);function g({title:a,titleId:s,...n},i){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:i,"aria-labelledby":s},n),a?t.createElement("title",{id:s},a):null,t.createElement("path",{fillRule:"evenodd",d:"M10 3a.75.75 0 0 1 .75.75v10.638l3.96-4.158a.75.75 0 1 1 1.08 1.04l-5.25 5.5a.75.75 0 0 1-1.08 0l-5.25-5.5a.75.75 0 1 1 1.08-1.04l3.96 4.158V3.75A.75.75 0 0 1 10 3Z",clipRule:"evenodd"}))}const r=t.forwardRef(g);function p({title:a,titleId:s,...n},i){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:i,"aria-labelledby":s},n),a?t.createElement("title",{id:s},a):null,t.createElement("path",{fillRule:"evenodd",d:"M10 17a.75.75 0 0 1-.75-.75V5.612L5.29 9.77a.75.75 0 0 1-1.08-1.04l5.25-5.5a.75.75 0 0 1 1.08 0l5.25 5.5a.75.75 0 1 1-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0 1 10 17Z",clipRule:"evenodd"}))}const l=t.forwardRef(p),h=[{name:"Revenue",value:"$405,091.00",change:"+4.75%",changeType:"positive"},{name:"Overdue invoices",value:"$12,787.00",change:"+54.02%",changeType:"negative"},{name:"Outstanding invoices",value:"$245,988.00",change:"-1.39%",changeType:"positive"},{name:"Expenses",value:"$30,156.00",change:"+10.18%",changeType:"negative"}];function u(...a){return a.filter(Boolean).join(" ")}function v(){return e.jsx("dl",{className:"mx-auto grid grid-cols-1 gap-px bg-gray-900/5 sm:grid-cols-2 lg:grid-cols-4",children:h.map(a=>e.jsxs("div",{className:"flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-4 py-10 sm:px-6 xl:px-8",children:[e.jsx("dt",{className:"text-sm/6 font-medium text-gray-500",children:a.name}),e.jsx("dd",{className:u(a.changeType==="negative"?"text-rose-600":"text-gray-700","text-xs font-medium"),children:a.change}),e.jsx("dd",{className:"w-full flex-none text-3xl/10 font-medium tracking-tight text-gray-900",children:a.value})]},a.name))})}const f=`const stats = [
  { name: 'Revenue', value: '$405,091.00', change: '+4.75%', changeType: 'positive' },
  { name: 'Overdue invoices', value: '$12,787.00', change: '+54.02%', changeType: 'negative' },
  { name: 'Outstanding invoices', value: '$245,988.00', change: '-1.39%', changeType: 'positive' },
  { name: 'Expenses', value: '$30,156.00', change: '+10.18%', changeType: 'negative' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <dl className="mx-auto grid grid-cols-1 gap-px bg-gray-900/5 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.name}
          className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-4 py-10 sm:px-6 xl:px-8"
        >
          <dt className="text-sm/6 font-medium text-gray-500">{stat.name}</dt>
          <dd
            className={classNames(
              stat.changeType === 'negative' ? 'text-rose-600' : 'text-gray-700',
              'text-xs font-medium',
            )}
          >
            {stat.change}
          </dd>
          <dd className="w-full flex-none text-3xl/10 font-medium tracking-tight text-gray-900">{stat.value}</dd>
        </div>
      ))}
    </dl>
  )
}
`,y=[{name:"Number of deploys",value:"405"},{name:"Average deploy time",value:"3.65",unit:"mins"},{name:"Number of servers",value:"3"},{name:"Success rate",value:"98.5%"}];function b(){return e.jsx("div",{className:"bg-gray-900",children:e.jsx("div",{className:"mx-auto max-w-7xl",children:e.jsx("div",{className:"grid grid-cols-1 gap-px bg-white/5 sm:grid-cols-2 lg:grid-cols-4",children:y.map(a=>e.jsxs("div",{className:"bg-gray-900 px-4 py-6 sm:px-6 lg:px-8",children:[e.jsx("p",{className:"text-sm/6 font-medium text-gray-400",children:a.name}),e.jsxs("p",{className:"mt-2 flex items-baseline gap-x-2",children:[e.jsx("span",{className:"text-4xl font-semibold tracking-tight text-white",children:a.value}),a.unit?e.jsx("span",{className:"text-sm text-gray-400",children:a.unit}):null]})]},a.name))})})})}const N=`const stats = [
  { name: 'Number of deploys', value: '405' },
  { name: 'Average deploy time', value: '3.65', unit: 'mins' },
  { name: 'Number of servers', value: '3' },
  { name: 'Success rate', value: '98.5%' },
]

export default function Example() {
  return (
    <div className="bg-gray-900">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-px bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.name} className="bg-gray-900 px-4 py-6 sm:px-6 lg:px-8">
              <p className="text-sm/6 font-medium text-gray-400">{stat.name}</p>
              <p className="mt-2 flex items-baseline gap-x-2">
                <span className="text-4xl font-semibold tracking-tight text-white">{stat.value}</span>
                {stat.unit ? <span className="text-sm text-gray-400">{stat.unit}</span> : null}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
`,w=[{name:"Total Subscribers",stat:"71,897"},{name:"Avg. Open Rate",stat:"58.16%"},{name:"Avg. Click Rate",stat:"24.57%"}];function j(){return e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-semibold text-gray-900",children:"Last 30 days"}),e.jsx("dl",{className:"mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3",children:w.map(a=>e.jsxs("div",{className:"overflow-hidden rounded-lg bg-white px-4 py-5 shadow-sm sm:p-6",children:[e.jsx("dt",{className:"truncate text-sm font-medium text-gray-500",children:a.name}),e.jsx("dd",{className:"mt-1 text-3xl font-semibold tracking-tight text-gray-900",children:a.stat})]},a.name))})]})}const T=`const stats = [
  { name: 'Total Subscribers', stat: '71,897' },
  { name: 'Avg. Open Rate', stat: '58.16%' },
  { name: 'Avg. Click Rate', stat: '24.57%' },
]

export default function Example() {
  return (
    <div>
      <h3 className="text-base font-semibold text-gray-900">Last 30 days</h3>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {stats.map((item) => (
          <div key={item.name} className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow-sm sm:p-6">
            <dt className="truncate text-sm font-medium text-gray-500">{item.name}</dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{item.stat}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
`,R=[{id:1,name:"Total Subscribers",stat:"71,897",icon:c,change:"122",changeType:"increase"},{id:2,name:"Avg. Open Rate",stat:"58.16%",icon:x,change:"5.4%",changeType:"increase"},{id:3,name:"Avg. Click Rate",stat:"24.57%",icon:m,change:"3.2%",changeType:"decrease"}];function k(...a){return a.filter(Boolean).join(" ")}function A(){return e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-semibold text-gray-900",children:"Last 30 days"}),e.jsx("dl",{className:"mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3",children:R.map(a=>e.jsxs("div",{className:"relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-12 shadow-sm sm:px-6 sm:pt-6",children:[e.jsxs("dt",{children:[e.jsx("div",{className:"absolute rounded-md bg-indigo-500 p-3",children:e.jsx(a.icon,{"aria-hidden":"true",className:"size-6 text-white"})}),e.jsx("p",{className:"ml-16 truncate text-sm font-medium text-gray-500",children:a.name})]}),e.jsxs("dd",{className:"ml-16 flex items-baseline pb-6 sm:pb-7",children:[e.jsx("p",{className:"text-2xl font-semibold text-gray-900",children:a.stat}),e.jsxs("p",{className:k(a.changeType==="increase"?"text-green-600":"text-red-600","ml-2 flex items-baseline text-sm font-semibold"),children:[a.changeType==="increase"?e.jsx(l,{"aria-hidden":"true",className:"size-5 shrink-0 self-center text-green-500"}):e.jsx(r,{"aria-hidden":"true",className:"size-5 shrink-0 self-center text-red-500"}),e.jsxs("span",{className:"sr-only",children:[" ",a.changeType==="increase"?"Increased":"Decreased"," by "]}),a.change]}),e.jsx("div",{className:"absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6",children:e.jsx("div",{className:"text-sm",children:e.jsxs("a",{href:"#",className:"font-medium text-indigo-600 hover:text-indigo-500",children:["View all",e.jsxs("span",{className:"sr-only",children:[" ",a.name," stats"]})]})})})]})]},a.id))})]})}const E=`import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid'
import { CursorArrowRaysIcon, EnvelopeOpenIcon, UsersIcon } from '@heroicons/react/24/outline'

const stats = [
  { id: 1, name: 'Total Subscribers', stat: '71,897', icon: UsersIcon, change: '122', changeType: 'increase' },
  { id: 2, name: 'Avg. Open Rate', stat: '58.16%', icon: EnvelopeOpenIcon, change: '5.4%', changeType: 'increase' },
  { id: 3, name: 'Avg. Click Rate', stat: '24.57%', icon: CursorArrowRaysIcon, change: '3.2%', changeType: 'decrease' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div>
      <h3 className="text-base font-semibold text-gray-900">Last 30 days</h3>

      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-12 shadow-sm sm:px-6 sm:pt-6"
          >
            <dt>
              <div className="absolute rounded-md bg-indigo-500 p-3">
                <item.icon aria-hidden="true" className="size-6 text-white" />
              </div>
              <p className="ml-16 truncate text-sm font-medium text-gray-500">{item.name}</p>
            </dt>
            <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
              <p className="text-2xl font-semibold text-gray-900">{item.stat}</p>
              <p
                className={classNames(
                  item.changeType === 'increase' ? 'text-green-600' : 'text-red-600',
                  'ml-2 flex items-baseline text-sm font-semibold',
                )}
              >
                {item.changeType === 'increase' ? (
                  <ArrowUpIcon aria-hidden="true" className="size-5 shrink-0 self-center text-green-500" />
                ) : (
                  <ArrowDownIcon aria-hidden="true" className="size-5 shrink-0 self-center text-red-500" />
                )}

                <span className="sr-only"> {item.changeType === 'increase' ? 'Increased' : 'Decreased'} by </span>
                {item.change}
              </p>
              <div className="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
                <div className="text-sm">
                  <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                    View all<span className="sr-only"> {item.name} stats</span>
                  </a>
                </div>
              </div>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
`,S=[{name:"Total Subscribers",stat:"71,897",previousStat:"70,946",change:"12%",changeType:"increase"},{name:"Avg. Open Rate",stat:"58.16%",previousStat:"56.14%",change:"2.02%",changeType:"increase"},{name:"Avg. Click Rate",stat:"24.57%",previousStat:"28.62%",change:"4.05%",changeType:"decrease"}];function $(...a){return a.filter(Boolean).join(" ")}function I(){return e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-semibold text-gray-900",children:"Last 30 days"}),e.jsx("dl",{className:"mt-5 grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow-sm md:grid-cols-3 md:divide-x md:divide-y-0",children:S.map(a=>e.jsxs("div",{className:"px-4 py-5 sm:p-6",children:[e.jsx("dt",{className:"text-base font-normal text-gray-900",children:a.name}),e.jsxs("dd",{className:"mt-1 flex items-baseline justify-between md:block lg:flex",children:[e.jsxs("div",{className:"flex items-baseline text-2xl font-semibold text-indigo-600",children:[a.stat,e.jsxs("span",{className:"ml-2 text-sm font-medium text-gray-500",children:["from ",a.previousStat]})]}),e.jsxs("div",{className:$(a.changeType==="increase"?"bg-green-100 text-green-800":"bg-red-100 text-red-800","inline-flex items-baseline rounded-full px-2.5 py-0.5 text-sm font-medium md:mt-2 lg:mt-0"),children:[a.changeType==="increase"?e.jsx(l,{"aria-hidden":"true",className:"mr-0.5 -ml-1 size-5 shrink-0 self-center text-green-500"}):e.jsx(r,{"aria-hidden":"true",className:"mr-0.5 -ml-1 size-5 shrink-0 self-center text-red-500"}),e.jsxs("span",{className:"sr-only",children:[" ",a.changeType==="increase"?"Increased":"Decreased"," by "]}),a.change]})]})]},a.name))})]})}const O=`import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid'

const stats = [
  { name: 'Total Subscribers', stat: '71,897', previousStat: '70,946', change: '12%', changeType: 'increase' },
  { name: 'Avg. Open Rate', stat: '58.16%', previousStat: '56.14%', change: '2.02%', changeType: 'increase' },
  { name: 'Avg. Click Rate', stat: '24.57%', previousStat: '28.62%', change: '4.05%', changeType: 'decrease' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div>
      <h3 className="text-base font-semibold text-gray-900">Last 30 days</h3>
      <dl className="mt-5 grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow-sm md:grid-cols-3 md:divide-x md:divide-y-0">
        {stats.map((item) => (
          <div key={item.name} className="px-4 py-5 sm:p-6">
            <dt className="text-base font-normal text-gray-900">{item.name}</dt>
            <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
              <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                {item.stat}
                <span className="ml-2 text-sm font-medium text-gray-500">from {item.previousStat}</span>
              </div>

              <div
                className={classNames(
                  item.changeType === 'increase' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800',
                  'inline-flex items-baseline rounded-full px-2.5 py-0.5 text-sm font-medium md:mt-2 lg:mt-0',
                )}
              >
                {item.changeType === 'increase' ? (
                  <ArrowUpIcon aria-hidden="true" className="mr-0.5 -ml-1 size-5 shrink-0 self-center text-green-500" />
                ) : (
                  <ArrowDownIcon aria-hidden="true" className="mr-0.5 -ml-1 size-5 shrink-0 self-center text-red-500" />
                )}

                <span className="sr-only"> {item.changeType === 'increase' ? 'Increased' : 'Decreased'} by </span>
                {item.change}
              </div>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
`,L=()=>{const a=[{id:"01",name:"With trending",component:e.jsx(v,{}),raw:f},{id:"02",name:"Simple",component:e.jsx(b,{}),raw:N},{id:"03",name:"Simple in cards",component:e.jsx(j,{}),raw:T},{id:"04",name:"With brand icon",component:e.jsx(A,{}),raw:E},{id:"05",name:"With shared borders",component:e.jsx(I,{}),raw:O}];return e.jsx("div",{className:"space-y-10 pb-20",children:a.map(s=>e.jsxs("section",{children:[e.jsxs("h2",{className:"mb-4 text-lg font-bold text-gray-800",children:[s.id,". ",s.name]}),e.jsx(d,{name:s.name,code:s.raw,children:s.component})]},s.id))})};export{L as default};
