import{j as e}from"./index-CvCVbuS9.js";import{P as i}from"./PreviewWrapper-TzFvRoPZ.js";import{H as r,S as t}from"./heading-D01NWPtQ.js";function o(){return e.jsx(r,{children:"Recent orders"})}const s=`import { Heading } from "@/features/tailwind-v4/components/ui-kit/heading";

export default function Example() {
  return <Heading>Recent orders</Heading>;
}
`;function d(){return e.jsx(t,{children:"Recent orders"})}const c=`import { Subheading } from "@/features/tailwind-v4/components/ui-kit/heading";

export default function Example() {
  return <Subheading>Recent orders</Subheading>;
}
`;function m(){return e.jsx(r,{level:2,children:"Recent orders"})}const p=`import { Heading } from "@/features/tailwind-v4/components/ui-kit/heading";

export default function Example() {
  return <Heading level={2}>Recent orders</Heading>;
}
`,g=()=>{const a=[{id:"01",name:"Basic Heading",component:e.jsx(o,{}),raw:s},{id:"02",name:"Basic Subheading",component:e.jsx(d,{}),raw:c},{id:"03",name:"With Custom Level",component:e.jsx(m,{}),raw:p}];return e.jsx("div",{className:"space-y-10 pb-20",children:a.map(n=>e.jsxs("section",{className:"border-b border-gray-100 pb-10 last:border-0",children:[e.jsxs("h2",{className:"mb-4 text-lg font-bold text-gray-800",children:[n.id,". ",n.name]}),e.jsx(i,{name:n.name,code:n.raw,children:n.component})]},n.id))})};export{g as default};
