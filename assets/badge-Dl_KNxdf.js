import{j as e}from"./index-CvCVbuS9.js";import{P as r}from"./PreviewWrapper-TzFvRoPZ.js";import{B as t,a as o}from"./badge-BVGrNEDL.js";function d(){return e.jsxs("div",{className:"flex gap-3",children:[e.jsx(t,{color:"lime",children:"documentation"}),e.jsx(t,{color:"purple",children:"help wanted"}),e.jsx(t,{color:"rose",children:"bug"})]})}const s=`import { Badge } from "@/features/tailwind-v4/components/ui-kit/badge";

export default function Example() {
  return (
    <div className="flex gap-3">
      <Badge color="lime">documentation</Badge>
      <Badge color="purple">help wanted</Badge>
      <Badge color="rose">bug</Badge>
    </div>
  );
}
`;function i(){return e.jsx(o,{children:"documentation"})}const c=`import { BadgeButton } from "@/features/tailwind-v4/components/ui-kit/badge";

export default function Example() {
  return <BadgeButton>documentation</BadgeButton>;
}
`;function m(){return e.jsx(o,{href:"#",children:"documentation"})}const l=`import { BadgeButton } from "@/features/tailwind-v4/components/ui-kit/badge";

export default function Example() {
  return <BadgeButton href="#">documentation</BadgeButton>;
}
`,x=()=>{const a=[{id:"01",name:"Badge Colors",component:e.jsx(d,{}),raw:s},{id:"02",name:"Using as Buttons",component:e.jsx(i,{}),raw:c},{id:"03",name:"Using as Links",component:e.jsx(m,{}),raw:l}];return e.jsx("div",{className:"space-y-10 pb-20",children:a.map(n=>e.jsxs("section",{className:"border-b border-gray-100 pb-10 last:border-0",children:[e.jsxs("h2",{className:"mb-4 text-lg font-bold text-gray-800",children:[n.id,". ",n.name]}),e.jsx(r,{name:n.name,code:n.raw,children:n.component})]},n.id))})};export{x as default};
