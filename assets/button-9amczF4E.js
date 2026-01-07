import{j as t}from"./index-BUE_4nSx.js";import{P as r}from"./PreviewWrapper-C5kxKQgy.js";import{B as o}from"./button-DGx1EBOd.js";import{F as a}from"./PlusIcon-C_PmVC-V.js";import"./clsx-B-dksMZM.js";import"./link-gY3vJwZa.js";import"./useFocusRing-DcMgcFf7.js";import"./use-active-press-CdjcnPjf.js";import"./owner-C7ikqkQc.js";import"./render-CNyBWpu3.js";import"./use-slot-BZcd_w4P.js";import"./disabled-1up_um9U.js";function i(){return t.jsx(o,{color:"cyan",children:"Save changes"})}const s=`import { Button } from "@/components/ui-kit/button";

export default function Example() {
  return <Button color="cyan">Save changes</Button>;
}
`;function u(){return t.jsx(o,{outline:!0,children:"Save draft"})}const m=`import { Button } from "@/components/ui-kit/button";

export default function Example() {
  return <Button outline>Save draft</Button>;
}
`;function c(){return t.jsx(o,{plain:!0,children:"Save draft"})}const p=`import { Button } from "@/components/ui-kit/button";

export default function Example() {
  return <Button plain>Save draft</Button>;
}
`;function d(){return t.jsx(o,{disabled:!0,children:"Save changes"})}const l=`import { Button } from "@/components/ui-kit/button";

export default function Example() {
  return <Button disabled>Save changes</Button>;
}
`;function x(){return t.jsxs(o,{children:[t.jsx(a,{}),"Add item"]})}const f=`import { Button } from "@/components/ui-kit/button";
import { PlusIcon } from "@heroicons/react/16/solid";

export default function Example() {
  return (
    <Button>
      <PlusIcon />
      Add item
    </Button>
  );
}
`;function B(){return t.jsx(o,{href:"/get-started",children:"Get started"})}const h=`import { Button } from "@/components/ui-kit/button";

export default function Example() {
  return <Button href="/get-started">Get started</Button>;
}
`,A=()=>{const e=[{id:"01",name:"Button Colors",component:t.jsx(i,{}),raw:s},{id:"02",name:"Outline Buttons",component:t.jsx(u,{}),raw:m},{id:"03",name:"Plain Buttons",component:t.jsx(c,{}),raw:p},{id:"04",name:"Disabled States",component:t.jsx(d,{}),raw:l},{id:"05",name:"With Icon",component:t.jsx(x,{}),raw:f},{id:"06",name:"Using as a Link",component:t.jsx(B,{}),raw:h}];return t.jsx("div",{className:"space-y-10 pb-20",children:e.map(n=>t.jsxs("section",{className:"border-b border-gray-100 pb-10 last:border-0",children:[t.jsxs("h2",{className:"mb-4 text-lg font-bold text-gray-800",children:[n.id,". ",n.name]}),t.jsx(r,{name:n.name,code:n.raw,children:n.component})]},n.id))})};export{A as default};
