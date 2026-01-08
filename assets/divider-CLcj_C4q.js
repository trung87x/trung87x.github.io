import{j as e,c as o}from"./index-DoTC0ASh.js";import{P as a}from"./PreviewWrapper-DHobF2kM.js";function i({soft:n=!1,className:r,...t}){return e.jsx("hr",{role:"presentation",...t,className:o(r,"w-full border-t",n&&"border-zinc-950/5 dark:border-white/5",!n&&"border-zinc-950/10 dark:border-white/10")})}function s(){return e.jsx(i,{})}const c=`import { Divider } from "@/components/ui-kit/divider";

export default function Example() {
  return <Divider />;
}
`;function d(){return e.jsx(i,{soft:!0})}const m=`import { Divider } from "@/components/ui-kit/divider";

export default function Example() {
  return <Divider soft />;
}
`;function p(){return e.jsx(i,{className:"my-6"})}const x=`import { Divider } from "@/components/ui-kit/divider";

export default function Example() {
  return <Divider className="my-6" />;
}
`,f=()=>{const n=[{id:"01",name:"Basic",component:e.jsx(s,{}),raw:c},{id:"02",name:"With reduced contrast",component:e.jsx(d,{}),raw:m},{id:"03",name:"With spacing",component:e.jsx(p,{}),raw:x}];return e.jsx("div",{className:"space-y-10 pb-20",children:n.map(r=>e.jsxs("section",{className:"border-b border-gray-100 pb-10 last:border-0",children:[e.jsxs("h2",{className:"mb-4 text-lg font-bold text-gray-800",children:[r.id,". ",r.name]}),e.jsx(a,{name:r.name,code:r.raw,children:r.component})]},r.id))})};export{f as default};
