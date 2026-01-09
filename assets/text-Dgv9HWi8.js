import{j as e}from"./index-CvCVbuS9.js";import{P as r}from"./PreviewWrapper-TzFvRoPZ.js";import{T as t,a,S as i,C as s}from"./text-BLPIEcIv.js";function c(){return e.jsx(t,{children:"Deleting your account is permanent, and your data will not be able to be recovered."})}const d=`import { Text } from "@/features/tailwind-v4/components/ui-kit/text";

export default function Example() {
  return (
    <Text>
      Deleting your account is permanent, and your data will not be able to be
      recovered.
    </Text>
  );
}
`;function l(){return e.jsxs(t,{children:["Deleting your account is permanent, and your data will not be able to be recovered. If you still want to use this account in the future, learn about ",e.jsx(a,{href:"#",children:"pausing your subscription"})," instead."]})}const u=`import { Text, TextLink } from "@/features/tailwind-v4/components/ui-kit/text";

export default function Example() {
  return (
    <Text>
      Deleting your account is permanent, and your data will not be able to be
      recovered. If you still want to use this account in the future, learn
      about <TextLink href="#">pausing your subscription</TextLink> instead.
    </Text>
  );
}
`;function x(){return e.jsxs(t,{children:["Deleting your account is permanent, and"," ",e.jsx(i,{children:"your account data cannot be recovered"}),"."]})}const m=`import { Strong, Text } from "@/features/tailwind-v4/components/ui-kit/text";

export default function Example() {
  return (
    <Text>
      Deleting your account is permanent, and{" "}
      <Strong>your account data cannot be recovered</Strong>.
    </Text>
  );
}
`;function p(){return e.jsxs(t,{children:["Your new API token is ",e.jsx(s,{children:"BaVrRKpRMS_ndKU"}),". Store this token somewhere safe as it will only be displayed once."]})}const f=`import { Code, Text } from "@/features/tailwind-v4/components/ui-kit/text";

export default function Example() {
  return (
    <Text>
      Your new API token is <Code>BaVrRKpRMS_ndKU</Code>. Store this token
      somewhere safe as it will only be displayed once.
    </Text>
  );
}
`,g=()=>{const o=[{id:"01",name:"Basic Text",component:e.jsx(c,{}),raw:d},{id:"02",name:"With Link",component:e.jsx(l,{}),raw:u},{id:"03",name:"With Strong (Bold)",component:e.jsx(x,{}),raw:m},{id:"04",name:"With Code (Inline)",component:e.jsx(p,{}),raw:f}];return e.jsx("div",{className:"space-y-10 pb-20",children:o.map(n=>e.jsxs("section",{className:"border-b border-gray-100 pb-10 last:border-0",children:[e.jsxs("h2",{className:"mb-4 text-lg font-bold text-gray-800",children:[n.id,". ",n.name]}),e.jsx(r,{name:n.name,code:n.raw,children:e.jsx("div",{className:"prose prose-slate max-w-none bg-white p-6",children:n.component})})]},n.id))})};export{g as default};
