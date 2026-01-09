import{j as e,aD as t}from"./index-CvCVbuS9.js";import{P as o}from"./PreviewWrapper-TzFvRoPZ.js";import{S as a}from"./heading-D01NWPtQ.js";function c({className:s,...i}){return e.jsx("dl",{...i,className:t(s,"grid grid-cols-1 text-base/6 sm:grid-cols-[min(50%,--spacing(80))_auto] sm:text-sm/6")})}function n({className:s,...i}){return e.jsx("dt",{...i,className:t(s,"col-start-1 border-t border-zinc-950/5 pt-3 text-zinc-500 first:border-none sm:border-t sm:border-zinc-950/5 sm:py-3 dark:border-white/5 dark:text-zinc-400 sm:dark:border-white/5")})}function r({className:s,...i}){return e.jsx("dd",{...i,className:t(s,"pt-1 pb-3 text-zinc-950 sm:border-t sm:border-zinc-950/5 sm:py-3 sm:nth-2:border-none dark:text-white dark:sm:border-white/5")})}function m(){return e.jsxs(c,{children:[e.jsx(n,{children:"Customer"}),e.jsx(r,{children:"Leslie Alexander"}),e.jsx(n,{children:"Email"}),e.jsx(r,{children:"leslie.alexander@example.com"}),e.jsx(n,{children:"Access"}),e.jsx(r,{children:"Admin"})]})}const l=`import {
  DescriptionDetails,
  DescriptionList,
  DescriptionTerm,
} from "@/features/tailwind-v4/components/ui-kit/description-list";

export default function Example() {
  return (
    <DescriptionList>
      <DescriptionTerm>Customer</DescriptionTerm>
      <DescriptionDetails>Leslie Alexander</DescriptionDetails>

      <DescriptionTerm>Email</DescriptionTerm>
      <DescriptionDetails>leslie.alexander@example.com</DescriptionDetails>

      <DescriptionTerm>Access</DescriptionTerm>
      <DescriptionDetails>Admin</DescriptionDetails>
    </DescriptionList>
  );
}
`;function p(){return e.jsxs(e.Fragment,{children:[e.jsx(a,{children:"Order #1011"}),e.jsxs(c,{className:"mt-4",children:[e.jsx(n,{children:"Customer"}),e.jsx(r,{children:"Michael Foster"}),e.jsx(n,{children:"Event"}),e.jsx(r,{children:"Bear Hug: Live in Concert"}),e.jsx(n,{children:"Amount"}),e.jsx(r,{children:"$150.00 USD"}),e.jsx(n,{children:"Amount after exchange rate"}),e.jsx(r,{children:"US$150.00 → CA$199.79"}),e.jsx(n,{children:"Fee"}),e.jsx(r,{children:"$4.79 USD"}),e.jsx(n,{children:"Net"}),e.jsx(r,{children:"$1,955.00"})]})]})}const d=`import {
  DescriptionDetails,
  DescriptionList,
  DescriptionTerm,
} from "@/features/tailwind-v4/components/ui-kit/description-list";
import { Subheading } from "@/features/tailwind-v4/components/ui-kit/heading";

export default function Example() {
  return (
    <>
      <Subheading>Order #1011</Subheading>
      <DescriptionList className="mt-4">
        <DescriptionTerm>Customer</DescriptionTerm>
        <DescriptionDetails>Michael Foster</DescriptionDetails>

        <DescriptionTerm>Event</DescriptionTerm>
        <DescriptionDetails>Bear Hug: Live in Concert</DescriptionDetails>

        <DescriptionTerm>Amount</DescriptionTerm>
        <DescriptionDetails>$150.00 USD</DescriptionDetails>

        <DescriptionTerm>Amount after exchange rate</DescriptionTerm>
        <DescriptionDetails>US$150.00 &rarr; CA$199.79</DescriptionDetails>

        <DescriptionTerm>Fee</DescriptionTerm>
        <DescriptionDetails>$4.79 USD</DescriptionDetails>

        <DescriptionTerm>Net</DescriptionTerm>
        <DescriptionDetails>$1,955.00</DescriptionDetails>
      </DescriptionList>
    </>
  );
}
`,u=()=>{const s=[{id:"01",name:"Basic",component:e.jsx(m,{}),raw:l},{id:"02",name:"With Heading",component:e.jsx(p,{}),raw:d}];return e.jsx("div",{className:"space-y-10 pb-20",children:s.map(i=>e.jsxs("section",{className:"border-b border-gray-100 pb-10 last:border-0",children:[e.jsxs("h2",{className:"mb-4 text-lg font-bold text-gray-800",children:[i.id,". ",i.name]}),e.jsx(o,{name:i.name,code:i.raw,children:i.component})]},i.id))})};export{u as default};
