import{j as e}from"./index-CvCVbuS9.js";import{P as s}from"./PreviewWrapper-TzFvRoPZ.js";const d=[{id:1}];function t(){return e.jsx("ul",{role:"list",className:"divide-y divide-gray-200",children:d.map(n=>e.jsx("li",{className:"py-4"},n.id))})}const a=`const items = [
  { id: 1 },
  // More items...
]

export default function Example() {
  return (
    <ul role="list" className="divide-y divide-gray-200">
      {items.map((item) => (
        <li key={item.id} className="py-4">
          {/* Your content */}
        </li>
      ))}
    </ul>
  )
}
`,l=[{id:1}];function m(){return e.jsx("div",{className:"overflow-hidden rounded-md bg-white shadow-sm",children:e.jsx("ul",{role:"list",className:"divide-y divide-gray-200",children:l.map(n=>e.jsx("li",{className:"px-6 py-4"},n.id))})})}const r=`const items = [
  { id: 1 },
  // More items...
]

export default function Example() {
  return (
    <div className="overflow-hidden rounded-md bg-white shadow-sm">
      <ul role="list" className="divide-y divide-gray-200">
        {items.map((item) => (
          <li key={item.id} className="px-6 py-4">
            {/* Your content */}
          </li>
        ))}
      </ul>
    </div>
  )
}
`,o=[{id:1}];function c(){return e.jsx("div",{className:"overflow-hidden bg-white shadow-sm sm:rounded-md",children:e.jsx("ul",{role:"list",className:"divide-y divide-gray-200",children:o.map(n=>e.jsx("li",{className:"px-4 py-4 sm:px-6"},n.id))})})}const p=`const items = [
  { id: 1 },
  // More items...
]

export default function Example() {
  return (
    <div className="overflow-hidden bg-white shadow-sm sm:rounded-md">
      <ul role="list" className="divide-y divide-gray-200">
        {items.map((item) => (
          <li key={item.id} className="px-4 py-4 sm:px-6">
            {/* Your content */}
          </li>
        ))}
      </ul>
    </div>
  )
}
`,u=[{id:1}];function x(){return e.jsx("ul",{role:"list",className:"space-y-3",children:u.map(n=>e.jsx("li",{className:"overflow-hidden rounded-md bg-white px-6 py-4 shadow-sm"},n.id))})}const h=`const items = [
  { id: 1 },
  // More items...
]

export default function Example() {
  return (
    <ul role="list" className="space-y-3">
      {items.map((item) => (
        <li key={item.id} className="overflow-hidden rounded-md bg-white px-6 py-4 shadow-sm">
          {/* Your content */}
        </li>
      ))}
    </ul>
  )
}
`,w=[{id:1}];function v(){return e.jsx("ul",{role:"list",className:"space-y-3",children:w.map(n=>e.jsx("li",{className:"overflow-hidden bg-white px-4 py-4 shadow-sm sm:rounded-md sm:px-6"},n.id))})}const y=`const items = [
  { id: 1 },
  // More items...
]

export default function Example() {
  return (
    <ul role="list" className="space-y-3">
      {items.map((item) => (
        <li key={item.id} className="overflow-hidden bg-white px-4 py-4 shadow-sm sm:rounded-md sm:px-6">
          {/* Your content */}
        </li>
      ))}
    </ul>
  )
}
`,f=[{id:1}];function N(){return e.jsx("div",{className:"overflow-hidden rounded-md border border-gray-300 bg-white",children:e.jsx("ul",{role:"list",className:"divide-y divide-gray-300",children:f.map(n=>e.jsx("li",{className:"px-6 py-4"},n.id))})})}const j=`const items = [
  { id: 1 },
  // More items...
]

export default function Example() {
  return (
    <div className="overflow-hidden rounded-md border border-gray-300 bg-white">
      <ul role="list" className="divide-y divide-gray-300">
        {items.map((item) => (
          <li key={item.id} className="px-6 py-4">
            {/* Your content */}
          </li>
        ))}
      </ul>
    </div>
  )
}
`,g=[{id:1}];function b(){return e.jsx("ul",{role:"list",className:"divide-y divide-gray-200",children:g.map(n=>e.jsx("li",{className:"px-4 py-4 sm:px-0"},n.id))})}const E=`const items = [
  { id: 1 },
  // More items...
]

export default function Example() {
  return (
    <ul role="list" className="divide-y divide-gray-200">
      {items.map((item) => (
        <li key={item.id} className="px-4 py-4 sm:px-0">
          {/* Your content */}
        </li>
      ))}
    </ul>
  )
}
`,W=()=>{const n=[{id:"01",name:"Simple with dividers",component:e.jsx(t,{}),raw:a},{id:"02",name:"Card with dividers",component:e.jsx(m,{}),raw:r},{id:"03",name:"Card with dividers, full-width on mobile",component:e.jsx(c,{}),raw:p},{id:"04",name:"Separate cards",component:e.jsx(x,{}),raw:h},{id:"05",name:"Separate cards, full-width on mobile",component:e.jsx(v,{}),raw:y},{id:"06",name:"Flat card with dividers",component:e.jsx(N,{}),raw:j},{id:"07",name:"Simple with dividers, full-width on mobile",component:e.jsx(b,{}),raw:E}];return e.jsx("div",{className:"space-y-10 pb-20",children:n.map(i=>e.jsxs("section",{children:[e.jsxs("h2",{className:"mb-4 text-lg font-bold text-gray-800",children:[i.id,". ",i.name]}),e.jsx(s,{name:i.name,code:i.raw,children:i.component})]},i.id))})};export{W as default};
