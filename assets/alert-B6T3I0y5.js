import{j as e,h as f,L as x,z as A,aD as r,az as h,M as w,r as o,aE as s}from"./index-CvCVbuS9.js";import{P as y}from"./PreviewWrapper-TzFvRoPZ.js";import{T as j}from"./text-BLPIEcIv.js";import{I as u}from"./input-L2pA8V3X.js";import"./label-CY_Q6YdE.js";const C={xs:"sm:max-w-xs",sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl","3xl":"sm:max-w-3xl","4xl":"sm:max-w-4xl","5xl":"sm:max-w-5xl"};function i({size:t="md",className:n,children:d,...m}){return e.jsxs(f,{...m,children:[e.jsx(x,{transition:!0,className:"fixed inset-0 flex w-screen justify-center overflow-y-auto bg-zinc-950/15 px-2 py-2 transition duration-100 focus:outline-0 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in sm:px-6 sm:py-8 lg:px-8 lg:py-16 dark:bg-zinc-950/50"}),e.jsx("div",{className:"fixed inset-0 w-screen overflow-y-auto pt-6 sm:pt-0",children:e.jsx("div",{className:"grid min-h-full grid-rows-[1fr_auto_1fr] justify-items-center p-8 sm:grid-rows-[1fr_auto_3fr] sm:p-4",children:e.jsx(A,{transition:!0,className:r(n,C[t],"row-start-2 w-full rounded-2xl bg-white p-8 ring-1 shadow-lg ring-zinc-950/10 sm:rounded-2xl sm:p-6 dark:bg-zinc-900 dark:ring-white/10 forced-colors:outline","transition duration-100 will-change-transform data-closed:opacity-0 data-enter:ease-out data-closed:data-enter:scale-95 data-leave:ease-in"),children:d})})})]})}function l({className:t,...n}){return e.jsx(h,{...n,className:r(t,"text-center text-base/6 font-semibold text-balance text-zinc-950 sm:text-left sm:text-sm/6 sm:text-wrap dark:text-white")})}function a({className:t,...n}){return e.jsx(w,{as:j,...n,className:r(t,"mt-2 text-center text-pretty sm:text-left")})}function p({className:t,...n}){return e.jsx("div",{...n,className:r(t,"mt-4")})}function c({className:t,...n}){return e.jsx("div",{...n,className:r(t,"mt-6 flex flex-col-reverse items-center justify-end gap-3 *:w-full sm:mt-4 sm:flex-row sm:*:w-auto")})}function b(){let[t,n]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(s,{type:"button",onClick:()=>n(!0),children:"Refund payment"}),e.jsxs(i,{open:t,onClose:n,children:[e.jsx(l,{children:"Are you sure you want to refund this payment?"}),e.jsx(a,{children:"The refund will be reflected in the customer’s bank account 2 to 3 business days after processing."}),e.jsxs(c,{children:[e.jsx(s,{plain:!0,onClick:()=>n(!1),children:"Cancel"}),e.jsx(s,{onClick:()=>n(!1),children:"Refund"})]})]})]})}const k=`import {
  Alert,
  AlertActions,
  AlertDescription,
  AlertTitle,
} from "@/features/tailwind-v4/components/ui-kit/alert";
import { Button } from "@/features/tailwind-v4/components/ui-kit/button";
import { useState } from "react";

export default function Example() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button type="button" onClick={() => setIsOpen(true)}>
        Refund payment
      </Button>
      <Alert open={isOpen} onClose={setIsOpen}>
        <AlertTitle>Are you sure you want to refund this payment?</AlertTitle>
        <AlertDescription>
          The refund will be reflected in the customer’s bank account 2 to 3
          business days after processing.
        </AlertDescription>
        <AlertActions>
          <Button plain onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => setIsOpen(false)}>Refund</Button>
        </AlertActions>
      </Alert>
    </>
  );
}
`;function B(){let[t,n]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(s,{type:"button",onClick:()=>n(!0),children:"Refund payment"}),e.jsxs(i,{open:t,onClose:n,size:"lg",children:[e.jsx(l,{children:"Are you sure you want to refund this payment?"}),e.jsx(a,{children:"The refund will be reflected in the customer’s bank account 2 to 3 business days after processing."}),e.jsxs(c,{children:[e.jsx(s,{plain:!0,onClick:()=>n(!1),children:"Cancel"}),e.jsx(s,{onClick:()=>n(!1),children:"Refund"})]})]})]})}const O=`import {
  Alert,
  AlertActions,
  AlertDescription,
  AlertTitle,
} from "@/features/tailwind-v4/components/ui-kit/alert";
import { Button } from "@/features/tailwind-v4/components/ui-kit/button";
import { useState } from "react";

export default function Example() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button type="button" onClick={() => setIsOpen(true)}>
        Refund payment
      </Button>
      <Alert open={isOpen} onClose={setIsOpen} size="lg">
        <AlertTitle>Are you sure you want to refund this payment?</AlertTitle>
        <AlertDescription>
          The refund will be reflected in the customer’s bank account 2 to 3
          business days after processing.
        </AlertDescription>
        <AlertActions>
          <Button plain onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => setIsOpen(false)}>Refund</Button>
        </AlertActions>
      </Alert>
    </>
  );
}
`;function g(){let[t,n]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(s,{type:"button",onClick:()=>n(!0),children:"Delete repository"}),e.jsxs(i,{open:t,onClose:n,size:"sm",children:[e.jsx(l,{children:"Verification required"}),e.jsx(a,{children:"To continue, please enter your password."}),e.jsx(p,{children:e.jsx(u,{name:"password",type:"password","aria-label":"Password",placeholder:"•••••••"})}),e.jsxs(c,{children:[e.jsx(s,{plain:!0,onClick:()=>n(!1),children:"Cancel"}),e.jsx(s,{onClick:()=>n(!1),children:"Continue"})]})]})]})}const I=`import {
  Alert,
  AlertActions,
  AlertBody,
  AlertDescription,
  AlertTitle,
} from "@/features/tailwind-v4/components/ui-kit/alert";
import { Button } from "@/features/tailwind-v4/components/ui-kit/button";
import { Input } from "@/features/tailwind-v4/components/ui-kit/input";
import { useState } from "react";

export default function Example() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button type="button" onClick={() => setIsOpen(true)}>
        Delete repository
      </Button>
      <Alert open={isOpen} onClose={setIsOpen} size="sm">
        <AlertTitle>Verification required</AlertTitle>
        <AlertDescription>
          To continue, please enter your password.
        </AlertDescription>
        <AlertBody>
          <Input
            name="password"
            type="password"
            aria-label="Password"
            placeholder="•••••••"
          />
        </AlertBody>
        <AlertActions>
          <Button plain onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => setIsOpen(false)}>Continue</Button>
        </AlertActions>
      </Alert>
    </>
  );
}
`;function T(){let[t,n]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(s,{type:"button",onClick:()=>n(!0),children:"Delete repository"}),e.jsxs(i,{open:t,onClose:n,size:"sm",children:[e.jsx(l,{children:"Verification required"}),e.jsx(a,{children:"To continue, please enter your password."}),e.jsx(p,{children:e.jsx(u,{autoFocus:!0,name:"password",type:"password","aria-label":"Password",placeholder:"•••••••"})}),e.jsxs(c,{children:[e.jsx(s,{plain:!0,onClick:()=>n(!1),children:"Cancel"}),e.jsx(s,{onClick:()=>n(!1),children:"Continue"})]})]})]})}const v=`import {
  Alert,
  AlertActions,
  AlertBody,
  AlertDescription,
  AlertTitle,
} from "@/features/tailwind-v4/components/ui-kit/alert";
import { Button } from "@/features/tailwind-v4/components/ui-kit/button";
import { Input } from "@/features/tailwind-v4/components/ui-kit/input";
import { useState } from "react";

export default function Example() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button type="button" onClick={() => setIsOpen(true)}>
        Delete repository
      </Button>
      <Alert open={isOpen} onClose={setIsOpen} size="sm">
        <AlertTitle>Verification required</AlertTitle>
        <AlertDescription>
          To continue, please enter your password.
        </AlertDescription>
        <AlertBody>
          <Input
            autoFocus
            name="password"
            type="password"
            aria-label="Password"
            placeholder="•••••••"
          />
        </AlertBody>
        <AlertActions>
          <Button plain onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => setIsOpen(false)}>Continue</Button>
        </AlertActions>
      </Alert>
    </>
  );
}
`,N=()=>{const t=[{id:"01",name:"Basic",component:e.jsx(b,{}),raw:k},{id:"02",name:"Alert Width",component:e.jsx(B,{}),raw:O},{id:"03",name:"With Body",component:e.jsx(g,{}),raw:I},{id:"04",name:"Auto-focusing Elements",component:e.jsx(T,{}),raw:v}];return e.jsx("div",{className:"space-y-10 pb-20",children:t.map(n=>e.jsxs("section",{className:"border-b border-gray-100 pb-10 last:border-0",children:[e.jsxs("h2",{className:"mb-4 text-lg font-bold text-gray-800",children:[n.id,". ",n.name]}),e.jsx(y,{name:n.name,code:n.raw,children:n.component})]},n.id))})};export{N as default};
