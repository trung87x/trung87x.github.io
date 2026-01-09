import{j as e,aD as a}from"./index-CvCVbuS9.js";import{P as s}from"./PreviewWrapper-TzFvRoPZ.js";function i({soft:n=!1,className:r,...t}){return e.jsx("hr",{role:"presentation",...t,className:a(r,"w-full border-t",n&&"border-zinc-950/5 dark:border-white/5",!n&&"border-zinc-950/10 dark:border-white/10")})}function o(){return e.jsx(i,{})}const d=`import { Divider } from "@/features/tailwind-v4/components/ui-kit/divider";

export default function Example() {
  return <Divider />;
}
`;function c(){return e.jsx(i,{soft:!0})}const m=`import { Divider } from "@/features/tailwind-v4/components/ui-kit/divider";

export default function Example() {
  return <Divider soft />;
}
`;function p(){return e.jsx(i,{className:"my-6"})}const l=`import { Divider } from "@/features/tailwind-v4/components/ui-kit/divider";

export default function Example() {
  return <Divider className="my-6" />;
}
`,f=()=>{const n=[{id:"01",name:"Basic",component:e.jsx(o,{}),raw:d},{id:"02",name:"With reduced contrast",component:e.jsx(c,{}),raw:m},{id:"03",name:"With spacing",component:e.jsx(p,{}),raw:l}];return e.jsx("div",{className:"space-y-10 pb-20",children:n.map(r=>e.jsxs("section",{className:"border-b border-gray-100 pb-10 last:border-0",children:[e.jsxs("h2",{className:"mb-4 text-lg font-bold text-gray-800",children:[r.id,". ",r.name]}),e.jsx(s,{name:r.name,code:r.raw,children:r.component})]},r.id))})};export{f as default};
