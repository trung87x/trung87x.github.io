import{j as e}from"./index-CvCVbuS9.js";import{P as a}from"./PreviewWrapper-TzFvRoPZ.js";function o(){return e.jsx("div",{className:"mx-auto max-w-7xl sm:px-6 lg:px-8"})}const x=`export default function Example() {
  return <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">{/* Content goes here */}</div>
}
`;function s(){return e.jsx("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"})}const i=`export default function Example() {
  return <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{/* Content goes here */}</div>
}
`;function d(){return e.jsx("div",{className:"container mx-auto sm:px-6 lg:px-8"})}const r=`export default function Example() {
  return <div className="container mx-auto sm:px-6 lg:px-8">{/* Content goes here */}</div>
}
`;function m(){return e.jsx("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8"})}const l=`export default function Example() {
  return <div className="container mx-auto px-4 sm:px-6 lg:px-8">{/* Content goes here */}</div>
}
`;function p(){return e.jsx("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:e.jsx("div",{className:"mx-auto max-w-3xl"})})}const c=`export default function Example() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
      <div className="mx-auto max-w-3xl">{/* Content goes here */}</div>
    </div>
  )
}
`,h=()=>{const t=[{id:"01",name:"Full-width on mobile, constrained with padded content above",component:e.jsx(o,{}),raw:x},{id:"02",name:"Constrained with padded content",component:e.jsx(s,{}),raw:i},{id:"03",name:"Full-width on mobile, constrained to breakpoint with padded content above mobile",component:e.jsx(d,{}),raw:r},{id:"04",name:"Constrained to breakpoint with padded content",component:e.jsx(m,{}),raw:l},{id:"05",name:"Narrow constrained with padded content",component:e.jsx(p,{}),raw:c}];return e.jsx("div",{className:"space-y-10 pb-20",children:t.map(n=>e.jsxs("section",{children:[e.jsxs("h2",{className:"mb-4 text-lg font-bold text-gray-800",children:[n.id,". ",n.name]}),e.jsx(a,{name:n.name,code:n.raw,children:n.component})]},n.id))})};export{h as default};
