import{j as t,aE as e}from"./index-CvCVbuS9.js";import{P as r}from"./PreviewWrapper-TzFvRoPZ.js";import{F as a}from"./PlusIcon-BAANU77I.js";function i(){return t.jsx(e,{color:"cyan",children:"Save changes"})}const s=`import { Button } from "@/features/tailwind-v4/components/ui-kit/button";

export default function Example() {
  return <Button color="cyan">Save changes</Button>;
}
`;function u(){return t.jsx(e,{outline:!0,children:"Save draft"})}const c=`import { Button } from "@/features/tailwind-v4/components/ui-kit/button";

export default function Example() {
  return <Button outline>Save draft</Button>;
}
`;function m(){return t.jsx(e,{plain:!0,children:"Save draft"})}const d=`import { Button } from "@/features/tailwind-v4/components/ui-kit/button";

export default function Example() {
  return <Button plain>Save draft</Button>;
}
`;function l(){return t.jsx(e,{disabled:!0,children:"Save changes"})}const p=`import { Button } from "@/features/tailwind-v4/components/ui-kit/button";

export default function Example() {
  return <Button disabled>Save changes</Button>;
}
`;function f(){return t.jsxs(e,{children:[t.jsx(a,{}),"Add item"]})}const x=`import { Button } from "@/features/tailwind-v4/components/ui-kit/button";
import { PlusIcon } from "@heroicons/react/16/solid";

export default function Example() {
  return (
    <Button>
      <PlusIcon />
      Add item
    </Button>
  );
}
`;function B(){return t.jsx(e,{href:"/get-started",children:"Get started"})}const w=`import { Button } from "@/features/tailwind-v4/components/ui-kit/button";

export default function Example() {
  return <Button href="/get-started">Get started</Button>;
}
`,v=()=>{const o=[{id:"01",name:"Button Colors",component:t.jsx(i,{}),raw:s},{id:"02",name:"Outline Buttons",component:t.jsx(u,{}),raw:c},{id:"03",name:"Plain Buttons",component:t.jsx(m,{}),raw:d},{id:"04",name:"Disabled States",component:t.jsx(l,{}),raw:p},{id:"05",name:"With Icon",component:t.jsx(f,{}),raw:x},{id:"06",name:"Using as a Link",component:t.jsx(B,{}),raw:w}];return t.jsx("div",{className:"space-y-10 pb-20",children:o.map(n=>t.jsxs("section",{className:"border-b border-gray-100 pb-10 last:border-0",children:[t.jsxs("h2",{className:"mb-4 text-lg font-bold text-gray-800",children:[n.id,". ",n.name]}),t.jsx(r,{name:n.name,code:n.raw,children:n.component})]},n.id))})};export{v as default};
