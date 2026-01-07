import{r as i,j as n}from"./index-BUE_4nSx.js";import{P as f}from"./PreviewWrapper-C5kxKQgy.js";import{B as o}from"./button-DGx1EBOd.js";import{D as s,a as l,b as r,c as a,d as c}from"./dialog-vIfXZdQs.js";import{b as p,L as u}from"./fieldset-CqPvSkW4.js";import{I as m}from"./input-iPFv-sYW.js";import{D as g,a as h,b as D,c as d}from"./dropdown-DhP5gKd7.js";import{F as x}from"./ChevronDownIcon-PEDjg2_9.js";import"./clsx-B-dksMZM.js";import"./link-gY3vJwZa.js";import"./useFocusRing-DcMgcFf7.js";import"./use-active-press-CdjcnPjf.js";import"./owner-C7ikqkQc.js";import"./render-CNyBWpu3.js";import"./use-slot-BZcd_w4P.js";import"./disabled-1up_um9U.js";import"./text-DABiVdVP.js";import"./dialog-DzJiKgmR.js";import"./keyboard-C1Wiwm26.js";import"./use-event-listener-DpzbZMQu.js";import"./portal-DcpW2Nz_.js";import"./dom-BlW_0b_t.js";import"./focus-management-C0S51YJM.js";import"./index-5-nG4q7h.js";import"./use-sync-refs-Dh0umLOC.js";import"./use-inert-others-BaroeGy-.js";import"./use-tab-direction-D2DDqWO7.js";import"./hidden-c0o-GYKL.js";import"./transition-C2KOCvAu.js";import"./use-is-mounted-CiYMpse4.js";import"./open-closed-BGpwrHHP.js";import"./close-provider-CYB1hxin.js";import"./description-11b0SVwG.js";import"./active-element-history-NQ_rx8nl.js";import"./field-BQNjiGlu.js";import"./form-fields-DC_tpJae.js";import"./label-CN3TFCLp.js";import"./menu-wSU_4UrN.js";import"./floating-DDf1F5o_.js";import"./element-movement-DVBsFgAL.js";import"./bugs-BLuxiOOY.js";import"./use-resolve-button-type-BuRlBvvn.js";import"./use-text-value-Bui0uthF.js";import"./use-tree-walker-BMsWof6B.js";function j(){let[t,e]=i.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(o,{type:"button",onClick:()=>e(!0),children:"Refund payment"}),n.jsxs(s,{open:t,onClose:e,children:[n.jsx(l,{children:"Refund payment"}),n.jsx(r,{children:"The refund will be reflected in the customer’s bank account 2 to 3 business days after processing."}),n.jsx(a,{children:n.jsxs(p,{children:[n.jsx(u,{children:"Amount"}),n.jsx(m,{name:"amount",placeholder:"$0.00"})]})}),n.jsxs(c,{children:[n.jsx(o,{plain:!0,onClick:()=>e(!1),children:"Cancel"}),n.jsx(o,{onClick:()=>e(!1),children:"Refund"})]})]})]})}const b=`import { Button } from "@/components/ui-kit/button";
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
`;function k(){let[t,e]=i.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(o,{type:"button",onClick:()=>e(!0),children:"Refund payment"}),n.jsxs(s,{size:"xl",open:t,onClose:e,children:[n.jsx(l,{children:"Refund payment"}),n.jsx(r,{children:"The refund will be reflected in the customer’s bank account 2 to 3 business days after processing."}),n.jsx(a,{children:n.jsxs(p,{children:[n.jsx(u,{children:"Amount"}),n.jsx(m,{name:"amount",placeholder:"$0.00"})]})}),n.jsxs(c,{children:[n.jsx(o,{plain:!0,onClick:()=>e(!1),children:"Cancel"}),n.jsx(o,{onClick:()=>e(!1),children:"Refund"})]})]})]})}const y=`import { Button } from "@/components/ui-kit/button";
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
`;function B(){let[t,e]=i.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsxs(g,{children:[n.jsxs(h,{outline:!0,children:["Options",n.jsx(x,{})]}),n.jsxs(D,{children:[n.jsx(d,{onClick:()=>e(!0),children:"Refund"}),n.jsx(d,{href:"#",disabled:!0,children:"Download"})]})]}),n.jsxs(s,{open:t,onClose:e,children:[n.jsx(l,{children:"Refund payment"}),n.jsx(r,{children:"The refund will be reflected in the customer’s bank account 2 to 3 business days after processing."}),n.jsx(a,{children:n.jsxs(p,{children:[n.jsx(u,{children:"Amount"}),n.jsx(m,{name:"amount",placeholder:"$0.00"})]})}),n.jsxs(c,{children:[n.jsx(o,{plain:!0,onClick:()=>e(!1),children:"Cancel"}),n.jsx(o,{onClick:()=>e(!1),children:"Refund"})]})]})]})}const w=`import { Button } from "@/components/ui-kit/button";
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
`;function C(){let[t,e]=i.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(o,{type:"button",onClick:()=>e(!0),children:"Refund payment"}),n.jsxs(s,{open:t,onClose:e,children:[n.jsx(l,{children:"Refund payment"}),n.jsx(r,{children:"The refund will be reflected in the customer’s bank account 2 to 3 business days after processing."}),n.jsx(a,{children:n.jsxs(p,{children:[n.jsx(u,{children:"Amount"}),n.jsx(m,{name:"amount",placeholder:"$0.00",autoFocus:!0})]})}),n.jsxs(c,{children:[n.jsx(o,{plain:!0,onClick:()=>e(!1),children:"Cancel"}),n.jsx(o,{onClick:()=>e(!1),children:"Refund"})]})]})]})}const I=`import { Button } from "@/components/ui-kit/button";
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
`;function O(){let[t,e]=i.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(o,{type:"button",onClick:()=>e(!0),children:"Agree to terms"}),n.jsxs(s,{open:t,onClose:e,size:"xl",children:[n.jsx(l,{children:"Terms and conditions"}),n.jsx(r,{children:"Please agree to the following terms and conditions to continue."}),n.jsxs(a,{className:"text-sm/6 text-zinc-900 dark:text-white",children:[n.jsx("p",{className:"mt-4",children:"By accessing and using our services, you are agreeing to these terms, which have been meticulously tailored for our benefit and your compliance."}),n.jsx("h3",{className:"mt-6 font-bold",children:"Comprehensive Acceptance of Terms"}),n.jsx("p",{className:"mt-4",children:"Your engagement with our application signifies your irrevocable acceptance of these terms, which are binding regardless of your awareness or understanding of them. Your continued use acts as a silent nod of agreement to any and all stipulations outlined herein."})]}),n.jsxs(c,{children:[n.jsx(o,{plain:!0,onClick:()=>e(!1),children:"Cancel"}),n.jsx(o,{onClick:()=>e(!1),children:"I agree"})]})]})]})}const R=`import { Button } from "@/components/ui-kit/button";
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
`,bn=()=>{const t=[{id:"01",name:"Basic",component:n.jsx(j,{}),raw:b},{id:"02",name:"Dialog Width",component:n.jsx(k,{}),raw:y},{id:"03",name:"Opening from Dropdown",component:n.jsx(B,{}),raw:w},{id:"04",name:"Auto-focusing Elements",component:n.jsx(C,{}),raw:I},{id:"05",name:"With Scrolling Content",component:n.jsx(O,{}),raw:R}];return n.jsx("div",{className:"space-y-10 pb-20",children:t.map(e=>n.jsxs("section",{className:"border-b border-gray-100 pb-10 last:border-0",children:[n.jsxs("h2",{className:"mb-4 text-lg font-bold text-gray-800",children:[e.id,". ",e.name]}),n.jsx(f,{name:e.name,code:e.raw,children:e.component})]},e.id))})};export{bn as default};
