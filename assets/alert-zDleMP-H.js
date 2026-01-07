import{j as e,r as o}from"./index-BUE_4nSx.js";import{P as f}from"./PreviewWrapper-C5kxKQgy.js";import{c as r}from"./clsx-B-dksMZM.js";import{T as x}from"./text-DABiVdVP.js";import{h as A,L as h,z as w,Q as y}from"./dialog-DzJiKgmR.js";import{M as j}from"./description-11b0SVwG.js";import{B as s}from"./button-DGx1EBOd.js";import{I as c}from"./input-iPFv-sYW.js";import"./link-gY3vJwZa.js";import"./useFocusRing-DcMgcFf7.js";import"./use-active-press-CdjcnPjf.js";import"./owner-C7ikqkQc.js";import"./render-CNyBWpu3.js";import"./use-slot-BZcd_w4P.js";import"./keyboard-C1Wiwm26.js";import"./use-event-listener-DpzbZMQu.js";import"./portal-DcpW2Nz_.js";import"./dom-BlW_0b_t.js";import"./focus-management-C0S51YJM.js";import"./index-5-nG4q7h.js";import"./use-sync-refs-Dh0umLOC.js";import"./use-inert-others-BaroeGy-.js";import"./use-tab-direction-D2DDqWO7.js";import"./hidden-c0o-GYKL.js";import"./transition-C2KOCvAu.js";import"./use-is-mounted-CiYMpse4.js";import"./open-closed-BGpwrHHP.js";import"./close-provider-CYB1hxin.js";import"./active-element-history-NQ_rx8nl.js";import"./disabled-1up_um9U.js";import"./label-CN3TFCLp.js";const C={xs:"sm:max-w-xs",sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl","3xl":"sm:max-w-3xl","4xl":"sm:max-w-4xl","5xl":"sm:max-w-5xl"};function i({size:t="md",className:n,children:m,...d}){return e.jsxs(A,{...d,children:[e.jsx(h,{transition:!0,className:"fixed inset-0 flex w-screen justify-center overflow-y-auto bg-zinc-950/15 px-2 py-2 transition duration-100 focus:outline-0 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in sm:px-6 sm:py-8 lg:px-8 lg:py-16 dark:bg-zinc-950/50"}),e.jsx("div",{className:"fixed inset-0 w-screen overflow-y-auto pt-6 sm:pt-0",children:e.jsx("div",{className:"grid min-h-full grid-rows-[1fr_auto_1fr] justify-items-center p-8 sm:grid-rows-[1fr_auto_3fr] sm:p-4",children:e.jsx(w,{transition:!0,className:r(n,C[t],"row-start-2 w-full rounded-2xl bg-white p-8 ring-1 shadow-lg ring-zinc-950/10 sm:rounded-2xl sm:p-6 dark:bg-zinc-900 dark:ring-white/10 forced-colors:outline","transition duration-100 will-change-transform data-closed:opacity-0 data-enter:ease-out data-closed:data-enter:scale-95 data-leave:ease-in"),children:m})})})]})}function l({className:t,...n}){return e.jsx(y,{...n,className:r(t,"text-center text-base/6 font-semibold text-balance text-zinc-950 sm:text-left sm:text-sm/6 sm:text-wrap dark:text-white")})}function a({className:t,...n}){return e.jsx(j,{as:x,...n,className:r(t,"mt-2 text-center text-pretty sm:text-left")})}function u({className:t,...n}){return e.jsx("div",{...n,className:r(t,"mt-4")})}function p({className:t,...n}){return e.jsx("div",{...n,className:r(t,"mt-6 flex flex-col-reverse items-center justify-end gap-3 *:w-full sm:mt-4 sm:flex-row sm:*:w-auto")})}function b(){let[t,n]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(s,{type:"button",onClick:()=>n(!0),children:"Refund payment"}),e.jsxs(i,{open:t,onClose:n,children:[e.jsx(l,{children:"Are you sure you want to refund this payment?"}),e.jsx(a,{children:"The refund will be reflected in the customer’s bank account 2 to 3 business days after processing."}),e.jsxs(p,{children:[e.jsx(s,{plain:!0,onClick:()=>n(!1),children:"Cancel"}),e.jsx(s,{onClick:()=>n(!1),children:"Refund"})]})]})]})}const k=`import {
  Alert,
  AlertActions,
  AlertDescription,
  AlertTitle,
} from "@/components/ui-kit/alert";
import { Button } from "@/components/ui-kit/button";
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
`;function B(){let[t,n]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(s,{type:"button",onClick:()=>n(!0),children:"Refund payment"}),e.jsxs(i,{open:t,onClose:n,size:"lg",children:[e.jsx(l,{children:"Are you sure you want to refund this payment?"}),e.jsx(a,{children:"The refund will be reflected in the customer’s bank account 2 to 3 business days after processing."}),e.jsxs(p,{children:[e.jsx(s,{plain:!0,onClick:()=>n(!1),children:"Cancel"}),e.jsx(s,{onClick:()=>n(!1),children:"Refund"})]})]})]})}const O=`import {
  Alert,
  AlertActions,
  AlertDescription,
  AlertTitle,
} from "@/components/ui-kit/alert";
import { Button } from "@/components/ui-kit/button";
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
`;function g(){let[t,n]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(s,{type:"button",onClick:()=>n(!0),children:"Delete repository"}),e.jsxs(i,{open:t,onClose:n,size:"sm",children:[e.jsx(l,{children:"Verification required"}),e.jsx(a,{children:"To continue, please enter your password."}),e.jsx(u,{children:e.jsx(c,{name:"password",type:"password","aria-label":"Password",placeholder:"•••••••"})}),e.jsxs(p,{children:[e.jsx(s,{plain:!0,onClick:()=>n(!1),children:"Cancel"}),e.jsx(s,{onClick:()=>n(!1),children:"Continue"})]})]})]})}const I=`import {
  Alert,
  AlertActions,
  AlertBody,
  AlertDescription,
  AlertTitle,
} from "@/components/ui-kit/alert";
import { Button } from "@/components/ui-kit/button";
import { Input } from "@/components/ui-kit/input";
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
`;function T(){let[t,n]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(s,{type:"button",onClick:()=>n(!0),children:"Delete repository"}),e.jsxs(i,{open:t,onClose:n,size:"sm",children:[e.jsx(l,{children:"Verification required"}),e.jsx(a,{children:"To continue, please enter your password."}),e.jsx(u,{children:e.jsx(c,{autoFocus:!0,name:"password",type:"password","aria-label":"Password",placeholder:"•••••••"})}),e.jsxs(p,{children:[e.jsx(s,{plain:!0,onClick:()=>n(!1),children:"Cancel"}),e.jsx(s,{onClick:()=>n(!1),children:"Continue"})]})]})]})}const D=`import {
  Alert,
  AlertActions,
  AlertBody,
  AlertDescription,
  AlertTitle,
} from "@/components/ui-kit/alert";
import { Button } from "@/components/ui-kit/button";
import { Input } from "@/components/ui-kit/input";
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
`,le=()=>{const t=[{id:"01",name:"Basic",component:e.jsx(b,{}),raw:k},{id:"02",name:"Alert Width",component:e.jsx(B,{}),raw:O},{id:"03",name:"With Body",component:e.jsx(g,{}),raw:I},{id:"04",name:"Auto-focusing Elements",component:e.jsx(T,{}),raw:D}];return e.jsx("div",{className:"space-y-10 pb-20",children:t.map(n=>e.jsxs("section",{className:"border-b border-gray-100 pb-10 last:border-0",children:[e.jsxs("h2",{className:"mb-4 text-lg font-bold text-gray-800",children:[n.id,". ",n.name]}),e.jsx(f,{name:n.name,code:n.raw,children:n.component})]},n.id))})};export{le as default};
