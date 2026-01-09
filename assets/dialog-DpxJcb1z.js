import{r as i,j as n,aE as t}from"./index-CvCVbuS9.js";import{P as f}from"./PreviewWrapper-TzFvRoPZ.js";import{D as s,a,b as l,c as r,d as c}from"./dialog-Sf_lVmqP.js";import{b as u,L as p}from"./fieldset-DSTAHszk.js";import{I as d}from"./input-L2pA8V3X.js";import{D as g,a as h,b as D,c as m}from"./dropdown-CWgsCawx.js";import{F as x}from"./ChevronDownIcon-DVV5oLHi.js";import"./text-BLPIEcIv.js";import"./field-BUH74JGD.js";import"./form-fields-DfbHTuSb.js";import"./label-CY_Q6YdE.js";import"./menu-DqpGavi0.js";import"./floating-CjydGm1Z.js";import"./element-movement-BT6A7GGi.js";import"./bugs-qQ_SbDk4.js";import"./use-resolve-button-type-J0J8N5g4.js";import"./use-text-value-CB9rzUUM.js";import"./use-tree-walker-_f7mgbza.js";function w(){let[o,e]=i.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(t,{type:"button",onClick:()=>e(!0),children:"Refund payment"}),n.jsxs(s,{open:o,onClose:e,children:[n.jsx(a,{children:"Refund payment"}),n.jsx(l,{children:"The refund will be reflected in the customer’s bank account 2 to 3 business days after processing."}),n.jsx(r,{children:n.jsxs(u,{children:[n.jsx(p,{children:"Amount"}),n.jsx(d,{name:"amount",placeholder:"$0.00"})]})}),n.jsxs(c,{children:[n.jsx(t,{plain:!0,onClick:()=>e(!1),children:"Cancel"}),n.jsx(t,{onClick:()=>e(!1),children:"Refund"})]})]})]})}const j=`import { Button } from "@/features/tailwind-v4/components/ui-kit/button";
import {
  Dialog,
  DialogActions,
  DialogBody,
  DialogDescription,
  DialogTitle,
} from "@/features/tailwind-v4/components/ui-kit/dialog";
import {
  Field,
  Label,
} from "@/features/tailwind-v4/components/ui-kit/fieldset";
import { Input } from "@/features/tailwind-v4/components/ui-kit/input";
import { useState } from "react";

export default function Example() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button type="button" onClick={() => setIsOpen(true)}>
        Refund payment
      </Button>
      <Dialog open={isOpen} onClose={setIsOpen}>
        <DialogTitle>Refund payment</DialogTitle>
        <DialogDescription>
          The refund will be reflected in the customer’s bank account 2 to 3
          business days after processing.
        </DialogDescription>
        <DialogBody>
          <Field>
            <Label>Amount</Label>
            <Input name="amount" placeholder="$0.00" />
          </Field>
        </DialogBody>
        <DialogActions>
          <Button plain onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => setIsOpen(false)}>Refund</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
`;function b(){let[o,e]=i.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(t,{type:"button",onClick:()=>e(!0),children:"Refund payment"}),n.jsxs(s,{size:"xl",open:o,onClose:e,children:[n.jsx(a,{children:"Refund payment"}),n.jsx(l,{children:"The refund will be reflected in the customer’s bank account 2 to 3 business days after processing."}),n.jsx(r,{children:n.jsxs(u,{children:[n.jsx(p,{children:"Amount"}),n.jsx(d,{name:"amount",placeholder:"$0.00"})]})}),n.jsxs(c,{children:[n.jsx(t,{plain:!0,onClick:()=>e(!1),children:"Cancel"}),n.jsx(t,{onClick:()=>e(!1),children:"Refund"})]})]})]})}const k=`import { Button } from "@/features/tailwind-v4/components/ui-kit/button";
import {
  Dialog,
  DialogActions,
  DialogBody,
  DialogDescription,
  DialogTitle,
} from "@/features/tailwind-v4/components/ui-kit/dialog";
import {
  Field,
  Label,
} from "@/features/tailwind-v4/components/ui-kit/fieldset";
import { Input } from "@/features/tailwind-v4/components/ui-kit/input";
import { useState } from "react";

export default function Example() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button type="button" onClick={() => setIsOpen(true)}>
        Refund payment
      </Button>
      <Dialog size="xl" open={isOpen} onClose={setIsOpen}>
        <DialogTitle>Refund payment</DialogTitle>
        <DialogDescription>
          The refund will be reflected in the customer’s bank account 2 to 3
          business days after processing.
        </DialogDescription>
        <DialogBody>
          <Field>
            <Label>Amount</Label>
            <Input name="amount" placeholder="$0.00" />
          </Field>
        </DialogBody>
        <DialogActions>
          <Button plain onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => setIsOpen(false)}>Refund</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
`;function y(){let[o,e]=i.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsxs(g,{children:[n.jsxs(h,{outline:!0,children:["Options",n.jsx(x,{})]}),n.jsxs(D,{children:[n.jsx(m,{onClick:()=>e(!0),children:"Refund"}),n.jsx(m,{href:"#",disabled:!0,children:"Download"})]})]}),n.jsxs(s,{open:o,onClose:e,children:[n.jsx(a,{children:"Refund payment"}),n.jsx(l,{children:"The refund will be reflected in the customer’s bank account 2 to 3 business days after processing."}),n.jsx(r,{children:n.jsxs(u,{children:[n.jsx(p,{children:"Amount"}),n.jsx(d,{name:"amount",placeholder:"$0.00"})]})}),n.jsxs(c,{children:[n.jsx(t,{plain:!0,onClick:()=>e(!1),children:"Cancel"}),n.jsx(t,{onClick:()=>e(!1),children:"Refund"})]})]})]})}const B=`import { Button } from "@/features/tailwind-v4/components/ui-kit/button";
import {
  Dialog,
  DialogActions,
  DialogBody,
  DialogDescription,
  DialogTitle,
} from "@/features/tailwind-v4/components/ui-kit/dialog";
import {
  Dropdown,
  DropdownButton,
  DropdownItem,
  DropdownMenu,
} from "@/features/tailwind-v4/components/ui-kit/dropdown";
import {
  Field,
  Label,
} from "@/features/tailwind-v4/components/ui-kit/fieldset";
import { Input } from "@/features/tailwind-v4/components/ui-kit/input";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

export default function Example() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Dropdown>
        <DropdownButton outline>
          Options
          <ChevronDownIcon />
        </DropdownButton>
        <DropdownMenu>
          <DropdownItem onClick={() => setIsOpen(true)}>Refund</DropdownItem>
          <DropdownItem href="#" disabled>
            Download
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>

      <Dialog open={isOpen} onClose={setIsOpen}>
        <DialogTitle>Refund payment</DialogTitle>
        <DialogDescription>
          The refund will be reflected in the customer’s bank account 2 to 3
          business days after processing.
        </DialogDescription>
        <DialogBody>
          <Field>
            <Label>Amount</Label>
            <Input name="amount" placeholder="$0.00" />
          </Field>
        </DialogBody>
        <DialogActions>
          <Button plain onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => setIsOpen(false)}>Refund</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
`;function C(){let[o,e]=i.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(t,{type:"button",onClick:()=>e(!0),children:"Refund payment"}),n.jsxs(s,{open:o,onClose:e,children:[n.jsx(a,{children:"Refund payment"}),n.jsx(l,{children:"The refund will be reflected in the customer’s bank account 2 to 3 business days after processing."}),n.jsx(r,{children:n.jsxs(u,{children:[n.jsx(p,{children:"Amount"}),n.jsx(d,{name:"amount",placeholder:"$0.00",autoFocus:!0})]})}),n.jsxs(c,{children:[n.jsx(t,{plain:!0,onClick:()=>e(!1),children:"Cancel"}),n.jsx(t,{onClick:()=>e(!1),children:"Refund"})]})]})]})}const I=`import { Button } from "@/features/tailwind-v4/components/ui-kit/button";
import {
  Dialog,
  DialogActions,
  DialogBody,
  DialogDescription,
  DialogTitle,
} from "@/features/tailwind-v4/components/ui-kit/dialog";
import {
  Field,
  Label,
} from "@/features/tailwind-v4/components/ui-kit/fieldset";
import { Input } from "@/features/tailwind-v4/components/ui-kit/input";
import { useState } from "react";

export default function Example() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button type="button" onClick={() => setIsOpen(true)}>
        Refund payment
      </Button>
      <Dialog open={isOpen} onClose={setIsOpen}>
        <DialogTitle>Refund payment</DialogTitle>
        <DialogDescription>
          The refund will be reflected in the customer’s bank account 2 to 3
          business days after processing.
        </DialogDescription>
        <DialogBody>
          <Field>
            <Label>Amount</Label>
            <Input name="amount" placeholder="$0.00" autoFocus />
          </Field>
        </DialogBody>
        <DialogActions>
          <Button plain onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => setIsOpen(false)}>Refund</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
`;function O(){let[o,e]=i.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(t,{type:"button",onClick:()=>e(!0),children:"Agree to terms"}),n.jsxs(s,{open:o,onClose:e,size:"xl",children:[n.jsx(a,{children:"Terms and conditions"}),n.jsx(l,{children:"Please agree to the following terms and conditions to continue."}),n.jsxs(r,{className:"text-sm/6 text-zinc-900 dark:text-white",children:[n.jsx("p",{className:"mt-4",children:"By accessing and using our services, you are agreeing to these terms, which have been meticulously tailored for our benefit and your compliance."}),n.jsx("h3",{className:"mt-6 font-bold",children:"Comprehensive Acceptance of Terms"}),n.jsx("p",{className:"mt-4",children:"Your engagement with our application signifies your irrevocable acceptance of these terms, which are binding regardless of your awareness or understanding of them. Your continued use acts as a silent nod of agreement to any and all stipulations outlined herein."})]}),n.jsxs(c,{children:[n.jsx(t,{plain:!0,onClick:()=>e(!1),children:"Cancel"}),n.jsx(t,{onClick:()=>e(!1),children:"I agree"})]})]})]})}const v=`import { Button } from "@/features/tailwind-v4/components/ui-kit/button";
import {
  Dialog,
  DialogActions,
  DialogBody,
  DialogDescription,
  DialogTitle,
} from "@/features/tailwind-v4/components/ui-kit/dialog";
import { useState } from "react";

export default function Example() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button type="button" onClick={() => setIsOpen(true)}>
        Agree to terms
      </Button>
      <Dialog open={isOpen} onClose={setIsOpen} size="xl">
        <DialogTitle>Terms and conditions</DialogTitle>
        <DialogDescription>
          Please agree to the following terms and conditions to continue.
        </DialogDescription>
        <DialogBody className="text-sm/6 text-zinc-900 dark:text-white">
          <p className="mt-4">
            By accessing and using our services, you are agreeing to these
            terms, which have been meticulously tailored for our benefit and
            your compliance.
          </p>
          <h3 className="mt-6 font-bold">Comprehensive Acceptance of Terms</h3>
          <p className="mt-4">
            Your engagement with our application signifies your irrevocable
            acceptance of these terms, which are binding regardless of your
            awareness or understanding of them. Your continued use acts as a
            silent nod of agreement to any and all stipulations outlined herein.
          </p>
          {/* ... */}
        </DialogBody>
        <DialogActions>
          <Button plain onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => setIsOpen(false)}>I agree</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
`,K=()=>{const o=[{id:"01",name:"Basic",component:n.jsx(w,{}),raw:j},{id:"02",name:"Dialog Width",component:n.jsx(b,{}),raw:k},{id:"03",name:"Opening from Dropdown",component:n.jsx(y,{}),raw:B},{id:"04",name:"Auto-focusing Elements",component:n.jsx(C,{}),raw:I},{id:"05",name:"With Scrolling Content",component:n.jsx(O,{}),raw:v}];return n.jsx("div",{className:"space-y-10 pb-20",children:o.map(e=>n.jsxs("section",{className:"border-b border-gray-100 pb-10 last:border-0",children:[n.jsxs("h2",{className:"mb-4 text-lg font-bold text-gray-800",children:[e.id,". ",e.name]}),n.jsx(f,{name:e.name,code:e.raw,children:e.component})]},e.id))})};export{K as default};
