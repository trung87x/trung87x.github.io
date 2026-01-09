import{r as n,j as e}from"./index-CvCVbuS9.js";import{P as f}from"./PreviewWrapper-TzFvRoPZ.js";import{F as d}from"./CheckIcon-BfHG0Qrp.js";import{F as x}from"./CheckCircleIcon-B2t_uyUG.js";function h({title:s,titleId:a,...p},u){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:u,"aria-labelledby":a},p),s?n.createElement("title",{id:a},s):null,n.createElement("path",{fillRule:"evenodd",d:"M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z",clipRule:"evenodd"}))}const c=n.forwardRef(h),g=[{id:"Step 1",name:"Job details",href:"#",status:"complete"},{id:"Step 2",name:"Application form",href:"#",status:"current"},{id:"Step 3",name:"Preview",href:"#",status:"upcoming"}];function N(){return e.jsx("nav",{"aria-label":"Progress",children:e.jsx("ol",{role:"list",className:"space-y-4 md:flex md:space-y-0 md:space-x-8",children:g.map(s=>e.jsx("li",{className:"md:flex-1",children:s.status==="complete"?e.jsxs("a",{href:s.href,className:"group flex flex-col border-l-4 border-indigo-600 py-2 pl-4 hover:border-indigo-800 md:border-t-4 md:border-l-0 md:pt-4 md:pb-0 md:pl-0",children:[e.jsx("span",{className:"text-sm font-medium text-indigo-600 group-hover:text-indigo-800",children:s.id}),e.jsx("span",{className:"text-sm font-medium",children:s.name})]}):s.status==="current"?e.jsxs("a",{href:s.href,"aria-current":"step",className:"flex flex-col border-l-4 border-indigo-600 py-2 pl-4 md:border-t-4 md:border-l-0 md:pt-4 md:pb-0 md:pl-0",children:[e.jsx("span",{className:"text-sm font-medium text-indigo-600",children:s.id}),e.jsx("span",{className:"text-sm font-medium",children:s.name})]}):e.jsxs("a",{href:s.href,className:"group flex flex-col border-l-4 border-gray-200 py-2 pl-4 hover:border-gray-300 md:border-t-4 md:border-l-0 md:pt-4 md:pb-0 md:pl-0",children:[e.jsx("span",{className:"text-sm font-medium text-gray-500 group-hover:text-gray-700",children:s.id}),e.jsx("span",{className:"text-sm font-medium",children:s.name})]})},s.name))})})}const b=`const steps = [
  { id: 'Step 1', name: 'Job details', href: '#', status: 'complete' },
  { id: 'Step 2', name: 'Application form', href: '#', status: 'current' },
  { id: 'Step 3', name: 'Preview', href: '#', status: 'upcoming' },
]

export default function Example() {
  return (
    <nav aria-label="Progress">
      <ol role="list" className="space-y-4 md:flex md:space-y-0 md:space-x-8">
        {steps.map((step) => (
          <li key={step.name} className="md:flex-1">
            {step.status === 'complete' ? (
              <a
                href={step.href}
                className="group flex flex-col border-l-4 border-indigo-600 py-2 pl-4 hover:border-indigo-800 md:border-t-4 md:border-l-0 md:pt-4 md:pb-0 md:pl-0"
              >
                <span className="text-sm font-medium text-indigo-600 group-hover:text-indigo-800">{step.id}</span>
                <span className="text-sm font-medium">{step.name}</span>
              </a>
            ) : step.status === 'current' ? (
              <a
                href={step.href}
                aria-current="step"
                className="flex flex-col border-l-4 border-indigo-600 py-2 pl-4 md:border-t-4 md:border-l-0 md:pt-4 md:pb-0 md:pl-0"
              >
                <span className="text-sm font-medium text-indigo-600">{step.id}</span>
                <span className="text-sm font-medium">{step.name}</span>
              </a>
            ) : (
              <a
                href={step.href}
                className="group flex flex-col border-l-4 border-gray-200 py-2 pl-4 hover:border-gray-300 md:border-t-4 md:border-l-0 md:pt-4 md:pb-0 md:pl-0"
              >
                <span className="text-sm font-medium text-gray-500 group-hover:text-gray-700">{step.id}</span>
                <span className="text-sm font-medium">{step.name}</span>
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
`,i=[{id:"01",name:"Job details",href:"#",status:"complete"},{id:"02",name:"Application form",href:"#",status:"current"},{id:"03",name:"Preview",href:"#",status:"upcoming"}];function v(){return e.jsx("nav",{"aria-label":"Progress",children:e.jsx("ol",{role:"list",className:"divide-y divide-gray-300 rounded-md border border-gray-300 md:flex md:divide-y-0",children:i.map((s,a)=>e.jsxs("li",{className:"relative md:flex md:flex-1",children:[s.status==="complete"?e.jsx("a",{href:s.href,className:"group flex w-full items-center",children:e.jsxs("span",{className:"flex items-center px-6 py-4 text-sm font-medium",children:[e.jsx("span",{className:"flex size-10 shrink-0 items-center justify-center rounded-full bg-indigo-600 group-hover:bg-indigo-800",children:e.jsx(c,{"aria-hidden":"true",className:"size-6 text-white"})}),e.jsx("span",{className:"ml-4 text-sm font-medium text-gray-900",children:s.name})]})}):s.status==="current"?e.jsxs("a",{href:s.href,"aria-current":"step",className:"flex items-center px-6 py-4 text-sm font-medium",children:[e.jsx("span",{className:"flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-indigo-600",children:e.jsx("span",{className:"text-indigo-600",children:s.id})}),e.jsx("span",{className:"ml-4 text-sm font-medium text-indigo-600",children:s.name})]}):e.jsx("a",{href:s.href,className:"group flex items-center",children:e.jsxs("span",{className:"flex items-center px-6 py-4 text-sm font-medium",children:[e.jsx("span",{className:"flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-gray-300 group-hover:border-gray-400",children:e.jsx("span",{className:"text-gray-500 group-hover:text-gray-900",children:s.id})}),e.jsx("span",{className:"ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900",children:s.name})]})}),a!==i.length-1?e.jsx(e.Fragment,{children:e.jsx("div",{"aria-hidden":"true",className:"absolute top-0 right-0 hidden h-full w-5 md:block",children:e.jsx("svg",{fill:"none",viewBox:"0 0 22 80",preserveAspectRatio:"none",className:"size-full text-gray-300",children:e.jsx("path",{d:"M0 -2L20 40L0 82",stroke:"currentcolor",vectorEffect:"non-scaling-stroke",strokeLinejoin:"round"})})})}):null]},s.name))})})}const j=`import { CheckIcon } from '@heroicons/react/24/solid'

const steps = [
  { id: '01', name: 'Job details', href: '#', status: 'complete' },
  { id: '02', name: 'Application form', href: '#', status: 'current' },
  { id: '03', name: 'Preview', href: '#', status: 'upcoming' },
]

export default function Example() {
  return (
    <nav aria-label="Progress">
      <ol role="list" className="divide-y divide-gray-300 rounded-md border border-gray-300 md:flex md:divide-y-0">
        {steps.map((step, stepIdx) => (
          <li key={step.name} className="relative md:flex md:flex-1">
            {step.status === 'complete' ? (
              <a href={step.href} className="group flex w-full items-center">
                <span className="flex items-center px-6 py-4 text-sm font-medium">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-indigo-600 group-hover:bg-indigo-800">
                    <CheckIcon aria-hidden="true" className="size-6 text-white" />
                  </span>
                  <span className="ml-4 text-sm font-medium text-gray-900">{step.name}</span>
                </span>
              </a>
            ) : step.status === 'current' ? (
              <a href={step.href} aria-current="step" className="flex items-center px-6 py-4 text-sm font-medium">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-indigo-600">
                  <span className="text-indigo-600">{step.id}</span>
                </span>
                <span className="ml-4 text-sm font-medium text-indigo-600">{step.name}</span>
              </a>
            ) : (
              <a href={step.href} className="group flex items-center">
                <span className="flex items-center px-6 py-4 text-sm font-medium">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-gray-300 group-hover:border-gray-400">
                    <span className="text-gray-500 group-hover:text-gray-900">{step.id}</span>
                  </span>
                  <span className="ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900">{step.name}</span>
                </span>
              </a>
            )}

            {stepIdx !== steps.length - 1 ? (
              <>
                {/* Arrow separator for lg screens and up */}
                <div aria-hidden="true" className="absolute top-0 right-0 hidden h-full w-5 md:block">
                  <svg fill="none" viewBox="0 0 22 80" preserveAspectRatio="none" className="size-full text-gray-300">
                    <path
                      d="M0 -2L20 40L0 82"
                      stroke="currentcolor"
                      vectorEffect="non-scaling-stroke"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  )
}
`,l=[{name:"Step 1",href:"#",status:"complete"},{name:"Step 2",href:"#",status:"current"},{name:"Step 3",href:"#",status:"upcoming"},{name:"Step 4",href:"#",status:"upcoming"}];function y(){return e.jsxs("nav",{"aria-label":"Progress",className:"flex items-center justify-center",children:[e.jsxs("p",{className:"text-sm font-medium",children:["Step ",l.findIndex(s=>s.status==="current")+1," of ",l.length]}),e.jsx("ol",{role:"list",className:"ml-8 flex items-center space-x-5",children:l.map(s=>e.jsx("li",{children:s.status==="complete"?e.jsx("a",{href:s.href,className:"block size-2.5 rounded-full bg-indigo-600 hover:bg-indigo-900",children:e.jsx("span",{className:"sr-only",children:s.name})}):s.status==="current"?e.jsxs("a",{href:s.href,"aria-current":"step",className:"relative flex items-center justify-center",children:[e.jsx("span",{"aria-hidden":"true",className:"absolute flex size-5 p-px",children:e.jsx("span",{className:"size-full rounded-full bg-indigo-200"})}),e.jsx("span",{"aria-hidden":"true",className:"relative block size-2.5 rounded-full bg-indigo-600"}),e.jsx("span",{className:"sr-only",children:s.name})]}):e.jsx("a",{href:s.href,className:"block size-2.5 rounded-full bg-gray-200 hover:bg-gray-400",children:e.jsx("span",{className:"sr-only",children:s.name})})},s.name))})]})}const w=`const steps = [
  { name: 'Step 1', href: '#', status: 'complete' },
  { name: 'Step 2', href: '#', status: 'current' },
  { name: 'Step 3', href: '#', status: 'upcoming' },
  { name: 'Step 4', href: '#', status: 'upcoming' },
]

export default function Example() {
  return (
    <nav aria-label="Progress" className="flex items-center justify-center">
      <p className="text-sm font-medium">
        Step {steps.findIndex((step) => step.status === 'current') + 1} of {steps.length}
      </p>
      <ol role="list" className="ml-8 flex items-center space-x-5">
        {steps.map((step) => (
          <li key={step.name}>
            {step.status === 'complete' ? (
              <a href={step.href} className="block size-2.5 rounded-full bg-indigo-600 hover:bg-indigo-900">
                <span className="sr-only">{step.name}</span>
              </a>
            ) : step.status === 'current' ? (
              <a href={step.href} aria-current="step" className="relative flex items-center justify-center">
                <span aria-hidden="true" className="absolute flex size-5 p-px">
                  <span className="size-full rounded-full bg-indigo-200" />
                </span>
                <span aria-hidden="true" className="relative block size-2.5 rounded-full bg-indigo-600" />
                <span className="sr-only">{step.name}</span>
              </a>
            ) : (
              <a href={step.href} className="block size-2.5 rounded-full bg-gray-200 hover:bg-gray-400">
                <span className="sr-only">{step.name}</span>
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
`,m=[{id:"01",name:"Job Details",description:"Vitae sed mi luctus laoreet.",href:"#",status:"complete"},{id:"02",name:"Application form",description:"Cursus semper viverra.",href:"#",status:"current"},{id:"03",name:"Preview",description:"Penatibus eu quis ante.",href:"#",status:"upcoming"}];function r(...s){return s.filter(Boolean).join(" ")}function z(){return e.jsx("div",{className:"lg:border-t lg:border-b lg:border-gray-200",children:e.jsx("nav",{"aria-label":"Progress",className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:e.jsx("ol",{role:"list",className:"overflow-hidden rounded-md lg:flex lg:rounded-none lg:border-r lg:border-l lg:border-gray-200",children:m.map((s,a)=>e.jsx("li",{className:"relative overflow-hidden lg:flex-1",children:e.jsxs("div",{className:r(a===0?"rounded-t-md border-b-0":"",a===m.length-1?"rounded-b-md border-t-0":"","overflow-hidden border border-gray-200 lg:border-0"),children:[s.status==="complete"?e.jsxs("a",{href:s.href,className:"group",children:[e.jsx("span",{"aria-hidden":"true",className:"absolute top-0 left-0 h-full w-1 bg-transparent group-hover:bg-gray-200 lg:top-auto lg:bottom-0 lg:h-1 lg:w-full"}),e.jsxs("span",{className:r(a!==0?"lg:pl-9":"","flex items-start px-6 py-5 text-sm font-medium"),children:[e.jsx("span",{className:"shrink-0",children:e.jsx("span",{className:"flex size-10 items-center justify-center rounded-full bg-indigo-600",children:e.jsx(c,{"aria-hidden":"true",className:"size-6 text-white"})})}),e.jsxs("span",{className:"mt-0.5 ml-4 flex min-w-0 flex-col",children:[e.jsx("span",{className:"text-sm font-medium",children:s.name}),e.jsx("span",{className:"text-sm font-medium text-gray-500",children:s.description})]})]})]}):s.status==="current"?e.jsxs("a",{href:s.href,"aria-current":"step",children:[e.jsx("span",{"aria-hidden":"true",className:"absolute top-0 left-0 h-full w-1 bg-indigo-600 lg:top-auto lg:bottom-0 lg:h-1 lg:w-full"}),e.jsxs("span",{className:r(a!==0?"lg:pl-9":"","flex items-start px-6 py-5 text-sm font-medium"),children:[e.jsx("span",{className:"shrink-0",children:e.jsx("span",{className:"flex size-10 items-center justify-center rounded-full border-2 border-indigo-600",children:e.jsx("span",{className:"text-indigo-600",children:s.id})})}),e.jsxs("span",{className:"mt-0.5 ml-4 flex min-w-0 flex-col",children:[e.jsx("span",{className:"text-sm font-medium text-indigo-600",children:s.name}),e.jsx("span",{className:"text-sm font-medium text-gray-500",children:s.description})]})]})]}):e.jsxs("a",{href:s.href,className:"group",children:[e.jsx("span",{"aria-hidden":"true",className:"absolute top-0 left-0 h-full w-1 bg-transparent group-hover:bg-gray-200 lg:top-auto lg:bottom-0 lg:h-1 lg:w-full"}),e.jsxs("span",{className:r(a!==0?"lg:pl-9":"","flex items-start px-6 py-5 text-sm font-medium"),children:[e.jsx("span",{className:"shrink-0",children:e.jsx("span",{className:"flex size-10 items-center justify-center rounded-full border-2 border-gray-300",children:e.jsx("span",{className:"text-gray-500",children:s.id})})}),e.jsxs("span",{className:"mt-0.5 ml-4 flex min-w-0 flex-col",children:[e.jsx("span",{className:"text-sm font-medium text-gray-500",children:s.name}),e.jsx("span",{className:"text-sm font-medium text-gray-500",children:s.description})]})]})]}),a!==0?e.jsx(e.Fragment,{children:e.jsx("div",{"aria-hidden":"true",className:"absolute inset-0 top-0 left-0 hidden w-3 lg:block",children:e.jsx("svg",{fill:"none",viewBox:"0 0 12 82",preserveAspectRatio:"none",className:"size-full text-gray-300",children:e.jsx("path",{d:"M0.5 0V31L10.5 41L0.5 51V82",stroke:"currentcolor",vectorEffect:"non-scaling-stroke"})})})}):null]})},s.id))})})})}const k=`import { CheckIcon } from '@heroicons/react/24/solid'

const steps = [
  { id: '01', name: 'Job Details', description: 'Vitae sed mi luctus laoreet.', href: '#', status: 'complete' },
  { id: '02', name: 'Application form', description: 'Cursus semper viverra.', href: '#', status: 'current' },
  { id: '03', name: 'Preview', description: 'Penatibus eu quis ante.', href: '#', status: 'upcoming' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="lg:border-t lg:border-b lg:border-gray-200">
      <nav aria-label="Progress" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ol
          role="list"
          className="overflow-hidden rounded-md lg:flex lg:rounded-none lg:border-r lg:border-l lg:border-gray-200"
        >
          {steps.map((step, stepIdx) => (
            <li key={step.id} className="relative overflow-hidden lg:flex-1">
              <div
                className={classNames(
                  stepIdx === 0 ? 'rounded-t-md border-b-0' : '',
                  stepIdx === steps.length - 1 ? 'rounded-b-md border-t-0' : '',
                  'overflow-hidden border border-gray-200 lg:border-0',
                )}
              >
                {step.status === 'complete' ? (
                  <a href={step.href} className="group">
                    <span
                      aria-hidden="true"
                      className="absolute top-0 left-0 h-full w-1 bg-transparent group-hover:bg-gray-200 lg:top-auto lg:bottom-0 lg:h-1 lg:w-full"
                    />
                    <span
                      className={classNames(
                        stepIdx !== 0 ? 'lg:pl-9' : '',
                        'flex items-start px-6 py-5 text-sm font-medium',
                      )}
                    >
                      <span className="shrink-0">
                        <span className="flex size-10 items-center justify-center rounded-full bg-indigo-600">
                          <CheckIcon aria-hidden="true" className="size-6 text-white" />
                        </span>
                      </span>
                      <span className="mt-0.5 ml-4 flex min-w-0 flex-col">
                        <span className="text-sm font-medium">{step.name}</span>
                        <span className="text-sm font-medium text-gray-500">{step.description}</span>
                      </span>
                    </span>
                  </a>
                ) : step.status === 'current' ? (
                  <a href={step.href} aria-current="step">
                    <span
                      aria-hidden="true"
                      className="absolute top-0 left-0 h-full w-1 bg-indigo-600 lg:top-auto lg:bottom-0 lg:h-1 lg:w-full"
                    />
                    <span
                      className={classNames(
                        stepIdx !== 0 ? 'lg:pl-9' : '',
                        'flex items-start px-6 py-5 text-sm font-medium',
                      )}
                    >
                      <span className="shrink-0">
                        <span className="flex size-10 items-center justify-center rounded-full border-2 border-indigo-600">
                          <span className="text-indigo-600">{step.id}</span>
                        </span>
                      </span>
                      <span className="mt-0.5 ml-4 flex min-w-0 flex-col">
                        <span className="text-sm font-medium text-indigo-600">{step.name}</span>
                        <span className="text-sm font-medium text-gray-500">{step.description}</span>
                      </span>
                    </span>
                  </a>
                ) : (
                  <a href={step.href} className="group">
                    <span
                      aria-hidden="true"
                      className="absolute top-0 left-0 h-full w-1 bg-transparent group-hover:bg-gray-200 lg:top-auto lg:bottom-0 lg:h-1 lg:w-full"
                    />
                    <span
                      className={classNames(
                        stepIdx !== 0 ? 'lg:pl-9' : '',
                        'flex items-start px-6 py-5 text-sm font-medium',
                      )}
                    >
                      <span className="shrink-0">
                        <span className="flex size-10 items-center justify-center rounded-full border-2 border-gray-300">
                          <span className="text-gray-500">{step.id}</span>
                        </span>
                      </span>
                      <span className="mt-0.5 ml-4 flex min-w-0 flex-col">
                        <span className="text-sm font-medium text-gray-500">{step.name}</span>
                        <span className="text-sm font-medium text-gray-500">{step.description}</span>
                      </span>
                    </span>
                  </a>
                )}

                {stepIdx !== 0 ? (
                  <>
                    {/* Separator */}
                    <div aria-hidden="true" className="absolute inset-0 top-0 left-0 hidden w-3 lg:block">
                      <svg
                        fill="none"
                        viewBox="0 0 12 82"
                        preserveAspectRatio="none"
                        className="size-full text-gray-300"
                      >
                        <path d="M0.5 0V31L10.5 41L0.5 51V82" stroke="currentcolor" vectorEffect="non-scaling-stroke" />
                      </svg>
                    </div>
                  </>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  )
}
`,o=[{name:"Step 1",href:"#",status:"complete"},{name:"Step 2",href:"#",status:"complete"},{name:"Step 3",href:"#",status:"current"},{name:"Step 4",href:"#",status:"upcoming"},{name:"Step 5",href:"#",status:"upcoming"}];function P(...s){return s.filter(Boolean).join(" ")}function S(){return e.jsx("nav",{"aria-label":"Progress",children:e.jsx("ol",{role:"list",className:"flex items-center",children:o.map((s,a)=>e.jsx("li",{className:P(a!==o.length-1?"pr-8 sm:pr-20":"","relative"),children:s.status==="complete"?e.jsxs(e.Fragment,{children:[e.jsx("div",{"aria-hidden":"true",className:"absolute inset-0 flex items-center",children:e.jsx("div",{className:"h-0.5 w-full bg-indigo-600"})}),e.jsxs("a",{href:"#",className:"relative flex size-8 items-center justify-center rounded-full bg-indigo-600 hover:bg-indigo-900",children:[e.jsx(d,{"aria-hidden":"true",className:"size-5 text-white"}),e.jsx("span",{className:"sr-only",children:s.name})]})]}):s.status==="current"?e.jsxs(e.Fragment,{children:[e.jsx("div",{"aria-hidden":"true",className:"absolute inset-0 flex items-center",children:e.jsx("div",{className:"h-0.5 w-full bg-gray-200"})}),e.jsxs("a",{href:"#","aria-current":"step",className:"relative flex size-8 items-center justify-center rounded-full border-2 border-indigo-600 bg-white",children:[e.jsx("span",{"aria-hidden":"true",className:"size-2.5 rounded-full bg-indigo-600"}),e.jsx("span",{className:"sr-only",children:s.name})]})]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{"aria-hidden":"true",className:"absolute inset-0 flex items-center",children:e.jsx("div",{className:"h-0.5 w-full bg-gray-200"})}),e.jsxs("a",{href:"#",className:"group relative flex size-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white hover:border-gray-400",children:[e.jsx("span",{"aria-hidden":"true",className:"size-2.5 rounded-full bg-transparent group-hover:bg-gray-300"}),e.jsx("span",{className:"sr-only",children:s.name})]})]})},s.name))})})}const C=`import { CheckIcon } from '@heroicons/react/20/solid'

const steps = [
  { name: 'Step 1', href: '#', status: 'complete' },
  { name: 'Step 2', href: '#', status: 'complete' },
  { name: 'Step 3', href: '#', status: 'current' },
  { name: 'Step 4', href: '#', status: 'upcoming' },
  { name: 'Step 5', href: '#', status: 'upcoming' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <nav aria-label="Progress">
      <ol role="list" className="flex items-center">
        {steps.map((step, stepIdx) => (
          <li key={step.name} className={classNames(stepIdx !== steps.length - 1 ? 'pr-8 sm:pr-20' : '', 'relative')}>
            {step.status === 'complete' ? (
              <>
                <div aria-hidden="true" className="absolute inset-0 flex items-center">
                  <div className="h-0.5 w-full bg-indigo-600" />
                </div>
                <a
                  href="#"
                  className="relative flex size-8 items-center justify-center rounded-full bg-indigo-600 hover:bg-indigo-900"
                >
                  <CheckIcon aria-hidden="true" className="size-5 text-white" />
                  <span className="sr-only">{step.name}</span>
                </a>
              </>
            ) : step.status === 'current' ? (
              <>
                <div aria-hidden="true" className="absolute inset-0 flex items-center">
                  <div className="h-0.5 w-full bg-gray-200" />
                </div>
                <a
                  href="#"
                  aria-current="step"
                  className="relative flex size-8 items-center justify-center rounded-full border-2 border-indigo-600 bg-white"
                >
                  <span aria-hidden="true" className="size-2.5 rounded-full bg-indigo-600" />
                  <span className="sr-only">{step.name}</span>
                </a>
              </>
            ) : (
              <>
                <div aria-hidden="true" className="absolute inset-0 flex items-center">
                  <div className="h-0.5 w-full bg-gray-200" />
                </div>
                <a
                  href="#"
                  className="group relative flex size-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white hover:border-gray-400"
                >
                  <span aria-hidden="true" className="size-2.5 rounded-full bg-transparent group-hover:bg-gray-300" />
                  <span className="sr-only">{step.name}</span>
                </a>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
`,E=[{name:"Create account",href:"#",status:"complete"},{name:"Profile information",href:"#",status:"current"},{name:"Theme",href:"#",status:"upcoming"},{name:"Preview",href:"#",status:"upcoming"}];function I(){return e.jsx("div",{className:"px-4 py-12 sm:px-6 lg:px-8",children:e.jsx("nav",{"aria-label":"Progress",className:"flex justify-center",children:e.jsx("ol",{role:"list",className:"space-y-6",children:E.map(s=>e.jsx("li",{children:s.status==="complete"?e.jsx("a",{href:s.href,className:"group",children:e.jsxs("span",{className:"flex items-start",children:[e.jsx("span",{className:"relative flex size-5 shrink-0 items-center justify-center",children:e.jsx(x,{"aria-hidden":"true",className:"size-full text-indigo-600 group-hover:text-indigo-800"})}),e.jsx("span",{className:"ml-3 text-sm font-medium text-gray-500 group-hover:text-gray-900",children:s.name})]})}):s.status==="current"?e.jsxs("a",{href:s.href,"aria-current":"step",className:"flex items-start",children:[e.jsxs("span",{"aria-hidden":"true",className:"relative flex size-5 shrink-0 items-center justify-center",children:[e.jsx("span",{className:"absolute size-4 rounded-full bg-indigo-200"}),e.jsx("span",{className:"relative block size-2 rounded-full bg-indigo-600"})]}),e.jsx("span",{className:"ml-3 text-sm font-medium text-indigo-600",children:s.name})]}):e.jsx("a",{href:s.href,className:"group",children:e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{"aria-hidden":"true",className:"relative flex size-5 shrink-0 items-center justify-center",children:e.jsx("div",{className:"size-2 rounded-full bg-gray-300 group-hover:bg-gray-400"})}),e.jsx("p",{className:"ml-3 text-sm font-medium text-gray-500 group-hover:text-gray-900",children:s.name})]})})},s.name))})})})}const B=`import { CheckCircleIcon } from '@heroicons/react/20/solid'

const steps = [
  { name: 'Create account', href: '#', status: 'complete' },
  { name: 'Profile information', href: '#', status: 'current' },
  { name: 'Theme', href: '#', status: 'upcoming' },
  { name: 'Preview', href: '#', status: 'upcoming' },
]

export default function Example() {
  return (
    <div className="px-4 py-12 sm:px-6 lg:px-8">
      <nav aria-label="Progress" className="flex justify-center">
        <ol role="list" className="space-y-6">
          {steps.map((step) => (
            <li key={step.name}>
              {step.status === 'complete' ? (
                <a href={step.href} className="group">
                  <span className="flex items-start">
                    <span className="relative flex size-5 shrink-0 items-center justify-center">
                      <CheckCircleIcon
                        aria-hidden="true"
                        className="size-full text-indigo-600 group-hover:text-indigo-800"
                      />
                    </span>
                    <span className="ml-3 text-sm font-medium text-gray-500 group-hover:text-gray-900">
                      {step.name}
                    </span>
                  </span>
                </a>
              ) : step.status === 'current' ? (
                <a href={step.href} aria-current="step" className="flex items-start">
                  <span aria-hidden="true" className="relative flex size-5 shrink-0 items-center justify-center">
                    <span className="absolute size-4 rounded-full bg-indigo-200" />
                    <span className="relative block size-2 rounded-full bg-indigo-600" />
                  </span>
                  <span className="ml-3 text-sm font-medium text-indigo-600">{step.name}</span>
                </a>
              ) : (
                <a href={step.href} className="group">
                  <div className="flex items-start">
                    <div aria-hidden="true" className="relative flex size-5 shrink-0 items-center justify-center">
                      <div className="size-2 rounded-full bg-gray-300 group-hover:bg-gray-400" />
                    </div>
                    <p className="ml-3 text-sm font-medium text-gray-500 group-hover:text-gray-900">{step.name}</p>
                  </div>
                </a>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  )
}
`,t=[{name:"Create account",description:"Vitae sed mi luctus laoreet.",href:"#",status:"complete"},{name:"Profile information",description:"Cursus semper viverra facilisis et et some more.",href:"#",status:"current"},{name:"Business information",description:"Penatibus eu quis ante.",href:"#",status:"upcoming"},{name:"Theme",description:"Faucibus nec enim leo et.",href:"#",status:"upcoming"},{name:"Preview",description:"Iusto et officia maiores porro ad non quas.",href:"#",status:"upcoming"}];function R(...s){return s.filter(Boolean).join(" ")}function $(){return e.jsx("nav",{"aria-label":"Progress",children:e.jsx("ol",{role:"list",className:"overflow-hidden",children:t.map((s,a)=>e.jsx("li",{className:R(a!==t.length-1?"pb-10":"","relative"),children:s.status==="complete"?e.jsxs(e.Fragment,{children:[a!==t.length-1?e.jsx("div",{"aria-hidden":"true",className:"absolute top-4 left-4 mt-0.5 -ml-px h-full w-0.5 bg-indigo-600"}):null,e.jsxs("a",{href:s.href,className:"group relative flex items-start",children:[e.jsx("span",{className:"flex h-9 items-center",children:e.jsx("span",{className:"relative z-10 flex size-8 items-center justify-center rounded-full bg-indigo-600 group-hover:bg-indigo-800",children:e.jsx(d,{"aria-hidden":"true",className:"size-5 text-white"})})}),e.jsxs("span",{className:"ml-4 flex min-w-0 flex-col",children:[e.jsx("span",{className:"text-sm font-medium",children:s.name}),e.jsx("span",{className:"text-sm text-gray-500",children:s.description})]})]})]}):s.status==="current"?e.jsxs(e.Fragment,{children:[a!==t.length-1?e.jsx("div",{"aria-hidden":"true",className:"absolute top-4 left-4 mt-0.5 -ml-px h-full w-0.5 bg-gray-300"}):null,e.jsxs("a",{href:s.href,"aria-current":"step",className:"group relative flex items-start",children:[e.jsx("span",{"aria-hidden":"true",className:"flex h-9 items-center",children:e.jsx("span",{className:"relative z-10 flex size-8 items-center justify-center rounded-full border-2 border-indigo-600 bg-white",children:e.jsx("span",{className:"size-2.5 rounded-full bg-indigo-600"})})}),e.jsxs("span",{className:"ml-4 flex min-w-0 flex-col",children:[e.jsx("span",{className:"text-sm font-medium text-indigo-600",children:s.name}),e.jsx("span",{className:"text-sm text-gray-500",children:s.description})]})]})]}):e.jsxs(e.Fragment,{children:[a!==t.length-1?e.jsx("div",{"aria-hidden":"true",className:"absolute top-4 left-4 mt-0.5 -ml-px h-full w-0.5 bg-gray-300"}):null,e.jsxs("a",{href:s.href,className:"group relative flex items-start",children:[e.jsx("span",{"aria-hidden":"true",className:"flex h-9 items-center",children:e.jsx("span",{className:"relative z-10 flex size-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white group-hover:border-gray-400",children:e.jsx("span",{className:"size-2.5 rounded-full bg-transparent group-hover:bg-gray-300"})})}),e.jsxs("span",{className:"ml-4 flex min-w-0 flex-col",children:[e.jsx("span",{className:"text-sm font-medium text-gray-500",children:s.name}),e.jsx("span",{className:"text-sm text-gray-500",children:s.description})]})]})]})},s.name))})})}const F=`import { CheckIcon } from '@heroicons/react/20/solid'

const steps = [
  { name: 'Create account', description: 'Vitae sed mi luctus laoreet.', href: '#', status: 'complete' },
  {
    name: 'Profile information',
    description: 'Cursus semper viverra facilisis et et some more.',
    href: '#',
    status: 'current',
  },
  { name: 'Business information', description: 'Penatibus eu quis ante.', href: '#', status: 'upcoming' },
  { name: 'Theme', description: 'Faucibus nec enim leo et.', href: '#', status: 'upcoming' },
  { name: 'Preview', description: 'Iusto et officia maiores porro ad non quas.', href: '#', status: 'upcoming' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <nav aria-label="Progress">
      <ol role="list" className="overflow-hidden">
        {steps.map((step, stepIdx) => (
          <li key={step.name} className={classNames(stepIdx !== steps.length - 1 ? 'pb-10' : '', 'relative')}>
            {step.status === 'complete' ? (
              <>
                {stepIdx !== steps.length - 1 ? (
                  <div aria-hidden="true" className="absolute top-4 left-4 mt-0.5 -ml-px h-full w-0.5 bg-indigo-600" />
                ) : null}
                <a href={step.href} className="group relative flex items-start">
                  <span className="flex h-9 items-center">
                    <span className="relative z-10 flex size-8 items-center justify-center rounded-full bg-indigo-600 group-hover:bg-indigo-800">
                      <CheckIcon aria-hidden="true" className="size-5 text-white" />
                    </span>
                  </span>
                  <span className="ml-4 flex min-w-0 flex-col">
                    <span className="text-sm font-medium">{step.name}</span>
                    <span className="text-sm text-gray-500">{step.description}</span>
                  </span>
                </a>
              </>
            ) : step.status === 'current' ? (
              <>
                {stepIdx !== steps.length - 1 ? (
                  <div aria-hidden="true" className="absolute top-4 left-4 mt-0.5 -ml-px h-full w-0.5 bg-gray-300" />
                ) : null}
                <a href={step.href} aria-current="step" className="group relative flex items-start">
                  <span aria-hidden="true" className="flex h-9 items-center">
                    <span className="relative z-10 flex size-8 items-center justify-center rounded-full border-2 border-indigo-600 bg-white">
                      <span className="size-2.5 rounded-full bg-indigo-600" />
                    </span>
                  </span>
                  <span className="ml-4 flex min-w-0 flex-col">
                    <span className="text-sm font-medium text-indigo-600">{step.name}</span>
                    <span className="text-sm text-gray-500">{step.description}</span>
                  </span>
                </a>
              </>
            ) : (
              <>
                {stepIdx !== steps.length - 1 ? (
                  <div aria-hidden="true" className="absolute top-4 left-4 mt-0.5 -ml-px h-full w-0.5 bg-gray-300" />
                ) : null}
                <a href={step.href} className="group relative flex items-start">
                  <span aria-hidden="true" className="flex h-9 items-center">
                    <span className="relative z-10 flex size-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white group-hover:border-gray-400">
                      <span className="size-2.5 rounded-full bg-transparent group-hover:bg-gray-300" />
                    </span>
                  </span>
                  <span className="ml-4 flex min-w-0 flex-col">
                    <span className="text-sm font-medium text-gray-500">{step.name}</span>
                    <span className="text-sm text-gray-500">{step.description}</span>
                  </span>
                </a>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
`;function A(){return e.jsxs("div",{children:[e.jsx("h4",{className:"sr-only",children:"Status"}),e.jsx("p",{className:"text-sm font-medium text-gray-900",children:"Migrating MySQL database..."}),e.jsxs("div",{"aria-hidden":"true",className:"mt-6",children:[e.jsx("div",{className:"overflow-hidden rounded-full bg-gray-200",children:e.jsx("div",{style:{width:"37.5%"},className:"h-2 rounded-full bg-indigo-600"})}),e.jsxs("div",{className:"mt-6 hidden grid-cols-4 text-sm font-medium text-gray-600 sm:grid",children:[e.jsx("div",{className:"text-indigo-600",children:"Copying files"}),e.jsx("div",{className:"text-center text-indigo-600",children:"Migrating database"}),e.jsx("div",{className:"text-center",children:"Compiling assets"}),e.jsx("div",{className:"text-right",children:"Deployed"})]})]})]})}const L=`export default function Example() {
  return (
    <div>
      <h4 className="sr-only">Status</h4>
      <p className="text-sm font-medium text-gray-900">Migrating MySQL database...</p>
      <div aria-hidden="true" className="mt-6">
        <div className="overflow-hidden rounded-full bg-gray-200">
          <div style={{ width: '37.5%' }} className="h-2 rounded-full bg-indigo-600" />
        </div>
        <div className="mt-6 hidden grid-cols-4 text-sm font-medium text-gray-600 sm:grid">
          <div className="text-indigo-600">Copying files</div>
          <div className="text-center text-indigo-600">Migrating database</div>
          <div className="text-center">Compiling assets</div>
          <div className="text-right">Deployed</div>
        </div>
      </div>
    </div>
  )
}
`,T=()=>{const s=[{id:"01",name:"Simple",component:e.jsx(N,{}),raw:b},{id:"02",name:"Panels",component:e.jsx(v,{}),raw:j},{id:"03",name:"Bullets",component:e.jsx(y,{}),raw:w},{id:"04",name:"Panels with border",component:e.jsx(z,{}),raw:k},{id:"05",name:"Circles",component:e.jsx(S,{}),raw:C},{id:"06",name:"Bullets and text",component:e.jsx(I,{}),raw:B},{id:"07",name:"Circles with text",component:e.jsx($,{}),raw:F},{id:"08",name:"Progress bar",component:e.jsx(A,{}),raw:L}];return e.jsx("div",{className:"space-y-10 pb-20",children:s.map(a=>e.jsxs("section",{children:[e.jsxs("h2",{className:"mb-4 text-lg font-bold text-gray-800",children:[a.id,". ",a.name]}),e.jsx(f,{name:a.name,code:a.raw,children:a.component})]},a.id))})};export{T as default};
