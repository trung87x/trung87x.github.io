import{j as n}from"./index-BR3Ik3k9.js";import{P as r}from"./PreviewWrapper-WSHTaK5Z.js";import{B as o,a as t}from"./badge-Dgzl7o6M.js";function d(){return n.jsxs("div",{className:"flex gap-3",children:[n.jsx(o,{color:"lime",children:"documentation"}),n.jsx(o,{color:"purple",children:"help wanted"}),n.jsx(o,{color:"rose",children:"bug"})]})}const s=`import { Badge } from "@/components/ui-kit/badge";

export default function Example() {
  return (
    <div className="flex gap-3">
      <Badge color="lime">documentation</Badge>
      <Badge color="purple">help wanted</Badge>
      <Badge color="rose">bug</Badge>
    </div>
  );
}
`;function i(){return n.jsx(t,{children:"documentation"})}const c=`import { BadgeButton } from "@/components/ui-kit/badge";

export default function Example() {
  return <BadgeButton>documentation</BadgeButton>;
}
`;function m(){return n.jsx(t,{href:"#",children:"documentation"})}const l=`import { BadgeButton } from "@/components/ui-kit/badge";

export default function Example() {
  return <BadgeButton href="#">documentation</BadgeButton>;
}
`,x=()=>{const a=[{id:"01",name:"Badge Colors",component:n.jsx(d,{}),raw:s},{id:"02",name:"Using as Buttons",component:n.jsx(i,{}),raw:c},{id:"03",name:"Using as Links",component:n.jsx(m,{}),raw:l}];return n.jsx("div",{className:"space-y-10 pb-20",children:a.map(e=>n.jsxs("section",{className:"border-b border-gray-100 pb-10 last:border-0",children:[n.jsxs("h2",{className:"mb-4 text-lg font-bold text-gray-800",children:[e.id,". ",e.name]}),n.jsx(r,{name:e.name,code:e.raw,children:e.component})]},e.id))})};export{x as default};
