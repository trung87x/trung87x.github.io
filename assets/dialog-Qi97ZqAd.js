import{r as i,j as n,aE as o}from"./index-B7qH8gVZ.js";import{P as f}from"./PreviewWrapper-DYMCDcbn.js";import{D as s,a as l,b as a,c as r,d as c}from"./dialog-CHCpazDu.js";import{b as p,L as u}from"./fieldset-DB8Yqkct.js";import{I as d}from"./input-12HYAEHp.js";import{D as g,a as h,b as D,c as m}from"./dropdown-i2BgEGYe.js";import{F as x}from"./ChevronDownIcon-CL44tL97.js";import"./text-Dnewor1q.js";import"./field-BXlkLCnz.js";import"./form-fields-BpZA5VTV.js";import"./label-GK_KVatz.js";import"./menu-BZv175AG.js";import"./floating-CtgAjhoN.js";import"./element-movement-DgY1Rcir.js";import"./bugs-BgPMPwh9.js";import"./use-resolve-button-type-BqYZtN-V.js";import"./use-text-value-_82-ZZ5I.js";import"./use-tree-walker-D0yw0yyC.js";function j(){let[t,e]=i.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(o,{type:"button",onClick:()=>e(!0),children:"Refund payment"}),n.jsxs(s,{open:t,onClose:e,children:[n.jsx(l,{children:"Refund payment"}),n.jsx(a,{children:"The refund will be reflected in the customer’s bank account 2 to 3 business days after processing."}),n.jsx(r,{children:n.jsxs(p,{children:[n.jsx(u,{children:"Amount"}),n.jsx(d,{name:"amount",placeholder:"$0.00"})]})}),n.jsxs(c,{children:[n.jsx(o,{plain:!0,onClick:()=>e(!1),children:"Cancel"}),n.jsx(o,{onClick:()=>e(!1),children:"Refund"})]})]})]})}const b=`import { Button } from "@/components/ui-kit/button";
import {
  Dialog,
  DialogActions,
  DialogBody,
  DialogDescription,
  DialogTitle,
} from "@/components/ui-kit/dialog";
import { Field, Label } from "@/components/ui-kit/fieldset";
import { Input } from "@/components/ui-kit/input";
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
`;function k(){let[t,e]=i.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(o,{type:"button",onClick:()=>e(!0),children:"Refund payment"}),n.jsxs(s,{size:"xl",open:t,onClose:e,children:[n.jsx(l,{children:"Refund payment"}),n.jsx(a,{children:"The refund will be reflected in the customer’s bank account 2 to 3 business days after processing."}),n.jsx(r,{children:n.jsxs(p,{children:[n.jsx(u,{children:"Amount"}),n.jsx(d,{name:"amount",placeholder:"$0.00"})]})}),n.jsxs(c,{children:[n.jsx(o,{plain:!0,onClick:()=>e(!1),children:"Cancel"}),n.jsx(o,{onClick:()=>e(!1),children:"Refund"})]})]})]})}const y=`import { Button } from "@/components/ui-kit/button";
import {
  Dialog,
  DialogActions,
  DialogBody,
  DialogDescription,
  DialogTitle,
} from "@/components/ui-kit/dialog";
import { Field, Label } from "@/components/ui-kit/fieldset";
import { Input } from "@/components/ui-kit/input";
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
`;function w(){let[t,e]=i.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsxs(g,{children:[n.jsxs(h,{outline:!0,children:["Options",n.jsx(x,{})]}),n.jsxs(D,{children:[n.jsx(m,{onClick:()=>e(!0),children:"Refund"}),n.jsx(m,{href:"#",disabled:!0,children:"Download"})]})]}),n.jsxs(s,{open:t,onClose:e,children:[n.jsx(l,{children:"Refund payment"}),n.jsx(a,{children:"The refund will be reflected in the customer’s bank account 2 to 3 business days after processing."}),n.jsx(r,{children:n.jsxs(p,{children:[n.jsx(u,{children:"Amount"}),n.jsx(d,{name:"amount",placeholder:"$0.00"})]})}),n.jsxs(c,{children:[n.jsx(o,{plain:!0,onClick:()=>e(!1),children:"Cancel"}),n.jsx(o,{onClick:()=>e(!1),children:"Refund"})]})]})]})}const B=`import { Button } from "@/components/ui-kit/button";
import {
  Dialog,
  DialogActions,
  DialogBody,
  DialogDescription,
  DialogTitle,
} from "@/components/ui-kit/dialog";
import {
  Dropdown,
  DropdownButton,
  DropdownItem,
  DropdownMenu,
} from "@/components/ui-kit/dropdown";
import { Field, Label } from "@/components/ui-kit/fieldset";
import { Input } from "@/components/ui-kit/input";
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
`;function C(){let[t,e]=i.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(o,{type:"button",onClick:()=>e(!0),children:"Refund payment"}),n.jsxs(s,{open:t,onClose:e,children:[n.jsx(l,{children:"Refund payment"}),n.jsx(a,{children:"The refund will be reflected in the customer’s bank account 2 to 3 business days after processing."}),n.jsx(r,{children:n.jsxs(p,{children:[n.jsx(u,{children:"Amount"}),n.jsx(d,{name:"amount",placeholder:"$0.00",autoFocus:!0})]})}),n.jsxs(c,{children:[n.jsx(o,{plain:!0,onClick:()=>e(!1),children:"Cancel"}),n.jsx(o,{onClick:()=>e(!1),children:"Refund"})]})]})]})}const I=`import { Button } from "@/components/ui-kit/button";
import {
  Dialog,
  DialogActions,
  DialogBody,
  DialogDescription,
  DialogTitle,
} from "@/components/ui-kit/dialog";
import { Field, Label } from "@/components/ui-kit/fieldset";
import { Input } from "@/components/ui-kit/input";
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
`;function O(){let[t,e]=i.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(o,{type:"button",onClick:()=>e(!0),children:"Agree to terms"}),n.jsxs(s,{open:t,onClose:e,size:"xl",children:[n.jsx(l,{children:"Terms and conditions"}),n.jsx(a,{children:"Please agree to the following terms and conditions to continue."}),n.jsxs(r,{className:"text-sm/6 text-zinc-900 dark:text-white",children:[n.jsx("p",{className:"mt-4",children:"By accessing and using our services, you are agreeing to these terms, which have been meticulously tailored for our benefit and your compliance."}),n.jsx("h3",{className:"mt-6 font-bold",children:"Comprehensive Acceptance of Terms"}),n.jsx("p",{className:"mt-4",children:"Your engagement with our application signifies your irrevocable acceptance of these terms, which are binding regardless of your awareness or understanding of them. Your continued use acts as a silent nod of agreement to any and all stipulations outlined herein."})]}),n.jsxs(c,{children:[n.jsx(o,{plain:!0,onClick:()=>e(!1),children:"Cancel"}),n.jsx(o,{onClick:()=>e(!1),children:"I agree"})]})]})]})}const R=`import { Button } from "@/components/ui-kit/button";
import {
  Dialog,
  DialogActions,
  DialogBody,
  DialogDescription,
  DialogTitle,
} from "@/components/ui-kit/dialog";
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
`,K=()=>{const t=[{id:"01",name:"Basic",component:n.jsx(j,{}),raw:b},{id:"02",name:"Dialog Width",component:n.jsx(k,{}),raw:y},{id:"03",name:"Opening from Dropdown",component:n.jsx(w,{}),raw:B},{id:"04",name:"Auto-focusing Elements",component:n.jsx(C,{}),raw:I},{id:"05",name:"With Scrolling Content",component:n.jsx(O,{}),raw:R}];return n.jsx("div",{className:"space-y-10 pb-20",children:t.map(e=>n.jsxs("section",{className:"border-b border-gray-100 pb-10 last:border-0",children:[n.jsxs("h2",{className:"mb-4 text-lg font-bold text-gray-800",children:[e.id,". ",e.name]}),n.jsx(f,{name:e.name,code:e.raw,children:e.component})]},e.id))})};export{K as default};
