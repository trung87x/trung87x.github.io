import{j as n}from"./index-BUE_4nSx.js";import{P as a}from"./PreviewWrapper-C5kxKQgy.js";import{B as o,a as t}from"./badge-Bor1xpFm.js";import"./clsx-B-dksMZM.js";import"./button-DGx1EBOd.js";import"./link-gY3vJwZa.js";import"./useFocusRing-DcMgcFf7.js";import"./use-active-press-CdjcnPjf.js";import"./owner-C7ikqkQc.js";import"./render-CNyBWpu3.js";import"./use-slot-BZcd_w4P.js";import"./disabled-1up_um9U.js";function i(){return n.jsxs("div",{className:"flex gap-3",children:[n.jsx(o,{color:"lime",children:"documentation"}),n.jsx(o,{color:"purple",children:"help wanted"}),n.jsx(o,{color:"rose",children:"bug"})]})}const d=`import { Badge } from "@/components/ui-kit/badge";

export default function Example() {
  return (
    <div className="flex gap-3">
      <Badge color="lime">documentation</Badge>
      <Badge color="purple">help wanted</Badge>
      <Badge color="rose">bug</Badge>
    </div>
  );
}
`;function s(){return n.jsx(t,{children:"documentation"})}const m=`import { BadgeButton } from "@/components/ui-kit/badge";

export default function Example() {
  return <BadgeButton>documentation</BadgeButton>;
}
`;function c(){return n.jsx(t,{href:"#",children:"documentation"})}const p=`import { BadgeButton } from "@/components/ui-kit/badge";

export default function Example() {
  return <BadgeButton href="#">documentation</BadgeButton>;
}
`,v=()=>{const r=[{id:"01",name:"Badge Colors",component:n.jsx(i,{}),raw:d},{id:"02",name:"Using as Buttons",component:n.jsx(s,{}),raw:m},{id:"03",name:"Using as Links",component:n.jsx(c,{}),raw:p}];return n.jsx("div",{className:"space-y-10 pb-20",children:r.map(e=>n.jsxs("section",{className:"border-b border-gray-100 pb-10 last:border-0",children:[n.jsxs("h2",{className:"mb-4 text-lg font-bold text-gray-800",children:[e.id,". ",e.name]}),n.jsx(a,{name:e.name,code:e.raw,children:e.component})]},e.id))})};export{v as default};
