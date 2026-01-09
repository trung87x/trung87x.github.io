import{j as n,r as o}from"./index-CvCVbuS9.js";import{P as s}from"./PreviewWrapper-TzFvRoPZ.js";import{I as e,a as m}from"./input-L2pA8V3X.js";import{b as r,L as a,D as u,E as p}from"./fieldset-DSTAHszk.js";import{F as c}from"./MagnifyingGlassIcon-DqZk019t.js";import{W as d}from"./field-BUH74JGD.js";import"./label-CY_Q6YdE.js";import"./form-fields-DfbHTuSb.js";function f(){return n.jsx(e,{"aria-label":"Full name",name:"full_name"})}const x=`import { Input } from "@/features/tailwind-v4/components/ui-kit/input";

export default function Example() {
  return <Input aria-label="Full name" name="full_name" />;
}
`;function h(){return n.jsxs(r,{children:[n.jsx(a,{children:"Full name"}),n.jsx(e,{name:"full_name"})]})}const j=`import {
  Field,
  Label,
} from "@/features/tailwind-v4/components/ui-kit/fieldset";
import { Input } from "@/features/tailwind-v4/components/ui-kit/input";

export default function Example() {
  return (
    <Field>
      <Label>Full name</Label>
      <Input name="full_name" />
    </Field>
  );
}
`;function w(){return n.jsxs(r,{children:[n.jsx(a,{children:"Product name"}),n.jsx(u,{children:"Use the name you'd like people to see in their cart."}),n.jsx(e,{name:"product_name"})]})}const b=`import {
  Description,
  Field,
  Label,
} from "@/features/tailwind-v4/components/ui-kit/fieldset";
import { Input } from "@/features/tailwind-v4/components/ui-kit/input";

export default function Example() {
  return (
    <Field>
      <Label>Product name</Label>
      <Description>
        Use the name you'd like people to see in their cart.
      </Description>
      <Input name="product_name" />
    </Field>
  );
}
`;function F(){return n.jsxs(m,{children:[n.jsx(c,{}),n.jsx(e,{name:"search",placeholder:"Search…","aria-label":"Search"})]})}const v=`import {
  Input,
  InputGroup,
} from "@/features/tailwind-v4/components/ui-kit/input";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";

export default function Example() {
  return (
    <InputGroup>
      <MagnifyingGlassIcon />
      <Input name="search" placeholder="Search&hellip;" aria-label="Search" />
    </InputGroup>
  );
}
`;function E(){return n.jsxs(r,{children:[n.jsx(a,{children:"Your website"}),n.jsx(e,{type:"url",name:"url"})]})}const I=`import {
  Field,
  Label,
} from "@/features/tailwind-v4/components/ui-kit/fieldset";
import { Input } from "@/features/tailwind-v4/components/ui-kit/input";

export default function Example() {
  return (
    <Field>
      <Label>Your website</Label>
      <Input type="url" name="url" />
    </Field>
  );
}
`;function L(){return n.jsxs(r,{disabled:!0,children:[n.jsx(a,{children:"Full name"}),n.jsx(e,{name:"full_name"})]})}const g=`import {
  Field,
  Label,
} from "@/features/tailwind-v4/components/ui-kit/fieldset";
import { Input } from "@/features/tailwind-v4/components/ui-kit/input";

export default function Example() {
  return (
    <Field disabled>
      <Label>Full name</Label>
      <Input name="full_name" />
    </Field>
  );
}
`;function k({errors:i}){return n.jsxs(r,{children:[n.jsx(a,{children:"Full name"}),n.jsx(e,{name:"full_name",invalid:i.has("full_name")}),i.has("full_name")&&n.jsx(p,{children:i.get("full_name")})]})}const _=`import {
  ErrorMessage,
  Field,
  Label,
} from "@/features/tailwind-v4/components/ui-kit/fieldset";
import { Input } from "@/features/tailwind-v4/components/ui-kit/input";

export default function Example({ errors }) {
  return (
    <Field>
      <Label>Full name</Label>
      <Input name="full_name" invalid={errors.has("full_name")} />
      {errors.has("full_name") && (
        <ErrorMessage>{errors.get("full_name")}</ErrorMessage>
      )}
    </Field>
  );
}
`;function C(){return n.jsxs(r,{children:[n.jsx(a,{children:"CVC"}),n.jsx(e,{className:"max-w-24",name:"cvc",pattern:"[0-9]*"})]})}const N=`import {
  Field,
  Label,
} from "@/features/tailwind-v4/components/ui-kit/fieldset";
import { Input } from "@/features/tailwind-v4/components/ui-kit/input";

export default function Example() {
  return (
    <Field>
      <Label>CVC</Label>
      <Input className="max-w-24" name="cvc" pattern="[0-9]*" />
    </Field>
  );
}
`;function y(){return n.jsxs(d,{className:"flex items-center justify-center gap-6",children:[n.jsx(a,{children:"Full name"}),n.jsx(e,{name:"full_name",className:"max-w-48"})]})}const R=`import { Label } from "@/features/tailwind-v4/components/ui-kit/fieldset";
import { Input } from "@/features/tailwind-v4/components/ui-kit/input";
import * as Headless from "@headlessui/react";

export default function Example() {
  return (
    <Headless.Field className="flex items-center justify-center gap-6">
      <Label>Full name</Label>
      <Input name="full_name" className="max-w-48" />
    </Headless.Field>
  );
}
`;function S(){let[i,t]=o.useState("");return n.jsxs(r,{children:[n.jsx(a,{children:"Full name"}),n.jsx(e,{name:"full_name",value:i,onChange:l=>t(l.target.value)})]})}const W=`import {
  Field,
  Label,
} from "@/features/tailwind-v4/components/ui-kit/fieldset";
import { Input } from "@/features/tailwind-v4/components/ui-kit/input";
import { useState } from "react";

export default function Example() {
  let [name, setName] = useState("");

  return (
    <Field>
      <Label>Full name</Label>
      <Input
        name="full_name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </Field>
  );
}
`,D=new Map([["full_name","Họ và tên là bắt buộc và không được để trống."],["email","Địa chỉ email không hợp lệ."]]),U=()=>{const i=[{id:"01",name:"Basic",component:n.jsx(f,{}),raw:x},{id:"02",name:"With Label",component:n.jsx(h,{}),raw:j},{id:"03",name:"With Description",component:n.jsx(w,{}),raw:b},{id:"04",name:"With Icon",component:n.jsx(F,{}),raw:v},{id:"05",name:"Setting the Type",component:n.jsx(E,{}),raw:I},{id:"06",name:"Disabled State",component:n.jsx(L,{}),raw:g},{id:"07",name:"Validation Errors",component:n.jsx(k,{errors:D}),raw:_},{id:"08",name:"Constraining Width",component:n.jsx(C,{}),raw:N},{id:"09",name:"With Custom Layout",component:n.jsx(y,{}),raw:R},{id:"10",name:"Controlled Component",component:n.jsx(S,{}),raw:W}];return n.jsx("div",{className:"space-y-10 pb-20",children:i.map(t=>n.jsxs("section",{className:"border-b border-gray-100 pb-10 last:border-0",children:[n.jsxs("h2",{className:"mb-4 text-lg font-bold text-gray-800",children:[t.id,". ",t.name]}),n.jsx(s,{name:t.name,code:t.raw,children:n.jsx("div",{className:"mx-auto max-w-xl py-4",children:t.component})})]},t.id))})};export{U as default};
