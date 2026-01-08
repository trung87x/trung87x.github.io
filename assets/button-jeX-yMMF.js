import{j as n,B as o}from"./index-BR3Ik3k9.js";import{P as r}from"./PreviewWrapper-WSHTaK5Z.js";import{F as a}from"./PlusIcon-D3oliWLv.js";function s(){return n.jsx(o,{color:"cyan",children:"Save changes"})}const i=`import { Button } from "@/components/ui-kit/button";

export default function Example() {
  return <Button color="cyan">Save changes</Button>;
}
`;function u(){return n.jsx(o,{outline:!0,children:"Save draft"})}const c=`import { Button } from "@/components/ui-kit/button";

export default function Example() {
  return <Button outline>Save draft</Button>;
}
`;function m(){return n.jsx(o,{plain:!0,children:"Save draft"})}const d=`import { Button } from "@/components/ui-kit/button";

export default function Example() {
  return <Button plain>Save draft</Button>;
}
`;function p(){return n.jsx(o,{disabled:!0,children:"Save changes"})}const l=`import { Button } from "@/components/ui-kit/button";

export default function Example() {
  return <Button disabled>Save changes</Button>;
}
`;function x(){return n.jsxs(o,{children:[n.jsx(a,{}),"Add item"]})}const f=`import { Button } from "@/components/ui-kit/button";
import { PlusIcon } from "@heroicons/react/16/solid";

export default function Example() {
  return (
    <Button>
      <PlusIcon />
      Add item
    </Button>
  );
}
`;function B(){return n.jsx(o,{href:"/get-started",children:"Get started"})}const h=`import { Button } from "@/components/ui-kit/button";

export default function Example() {
  return <Button href="/get-started">Get started</Button>;
}
`,E=()=>{const e=[{id:"01",name:"Button Colors",component:n.jsx(s,{}),raw:i},{id:"02",name:"Outline Buttons",component:n.jsx(u,{}),raw:c},{id:"03",name:"Plain Buttons",component:n.jsx(m,{}),raw:d},{id:"04",name:"Disabled States",component:n.jsx(p,{}),raw:l},{id:"05",name:"With Icon",component:n.jsx(x,{}),raw:f},{id:"06",name:"Using as a Link",component:n.jsx(B,{}),raw:h}];return n.jsx("div",{className:"space-y-10 pb-20",children:e.map(t=>n.jsxs("section",{className:"border-b border-gray-100 pb-10 last:border-0",children:[n.jsxs("h2",{className:"mb-4 text-lg font-bold text-gray-800",children:[t.id,". ",t.name]}),n.jsx(r,{name:t.name,code:t.raw,children:t.component})]},t.id))})};export{E as default};
