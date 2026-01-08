import{j as n,r as o}from"./index-BAlIhux4.js";import{P as m}from"./PreviewWrapper-CW4F6PO4.js";import{I as e,a as s}from"./input-BOQyKZ41.js";import{b as l,L as a,D as u,E as p}from"./fieldset-BMW7KQ97.js";import{F as c}from"./MagnifyingGlassIcon-Bc1h9NtU.js";import{W as d}from"./field-CMZDW5Mf.js";import"./label-CnRdmZY7.js";import"./form-fields-1j2hxBo2.js";function f(){return n.jsx(e,{"aria-label":"Full name",name:"full_name"})}const x=`import { Input } from "@/components/ui-kit/input";

export default function Example() {
  return <Input aria-label="Full name" name="full_name" />;
}
`;function h(){return n.jsxs(l,{children:[n.jsx(a,{children:"Full name"}),n.jsx(e,{name:"full_name"})]})}const j=`import { Field, Label } from "@/components/ui-kit/fieldset";
import { Input } from "@/components/ui-kit/input";

export default function Example() {
  return (
    <Field>
      <Label>Full name</Label>
      <Input name="full_name" />
    </Field>
  );
}
`;function b(){return n.jsxs(l,{children:[n.jsx(a,{children:"Product name"}),n.jsx(u,{children:"Use the name you'd like people to see in their cart."}),n.jsx(e,{name:"product_name"})]})}const F=`import { Description, Field, Label } from "@/components/ui-kit/fieldset";
import { Input } from "@/components/ui-kit/input";

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
`;function w(){return n.jsxs(s,{children:[n.jsx(c,{}),n.jsx(e,{name:"search",placeholder:"Search…","aria-label":"Search"})]})}const E=`import { Input, InputGroup } from "@/components/ui-kit/input";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";

export default function Example() {
  return (
    <InputGroup>
      <MagnifyingGlassIcon />
      <Input name="search" placeholder="Search&hellip;" aria-label="Search" />
    </InputGroup>
  );
}
`;function I(){return n.jsxs(l,{children:[n.jsx(a,{children:"Your website"}),n.jsx(e,{type:"url",name:"url"})]})}const L=`import { Field, Label } from "@/components/ui-kit/fieldset";
import { Input } from "@/components/ui-kit/input";

export default function Example() {
  return (
    <Field>
      <Label>Your website</Label>
      <Input type="url" name="url" />
    </Field>
  );
}
`;function g(){return n.jsxs(l,{disabled:!0,children:[n.jsx(a,{children:"Full name"}),n.jsx(e,{name:"full_name"})]})}const k=`import { Field, Label } from "@/components/ui-kit/fieldset";
import { Input } from "@/components/ui-kit/input";

export default function Example() {
  return (
    <Field disabled>
      <Label>Full name</Label>
      <Input name="full_name" />
    </Field>
  );
}
`;function _({errors:r}){return n.jsxs(l,{children:[n.jsx(a,{children:"Full name"}),n.jsx(e,{name:"full_name",invalid:r.has("full_name")}),r.has("full_name")&&n.jsx(p,{children:r.get("full_name")})]})}const C=`import { ErrorMessage, Field, Label } from "@/components/ui-kit/fieldset";
import { Input } from "@/components/ui-kit/input";

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
`;function v(){return n.jsxs(l,{children:[n.jsx(a,{children:"CVC"}),n.jsx(e,{className:"max-w-24",name:"cvc",pattern:"[0-9]*"})]})}const N=`import { Field, Label } from "@/components/ui-kit/fieldset";
import { Input } from "@/components/ui-kit/input";

export default function Example() {
  return (
    <Field>
      <Label>CVC</Label>
      <Input className="max-w-24" name="cvc" pattern="[0-9]*" />
    </Field>
  );
}
`;function y(){return n.jsxs(d,{className:"flex items-center justify-center gap-6",children:[n.jsx(a,{children:"Full name"}),n.jsx(e,{name:"full_name",className:"max-w-48"})]})}const R=`import { Label } from "@/components/ui-kit/fieldset";
import { Input } from "@/components/ui-kit/input";
import * as Headless from "@headlessui/react";

export default function Example() {
  return (
    <Headless.Field className="flex items-center justify-center gap-6">
      <Label>Full name</Label>
      <Input name="full_name" className="max-w-48" />
    </Headless.Field>
  );
}
`;function S(){let[r,t]=o.useState("");return n.jsxs(l,{children:[n.jsx(a,{children:"Full name"}),n.jsx(e,{name:"full_name",value:r,onChange:i=>t(i.target.value)})]})}const W=`import { Field, Label } from "@/components/ui-kit/fieldset";
import { Input } from "@/components/ui-kit/input";
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
`,D=new Map([["full_name","Họ và tên là bắt buộc và không được để trống."],["email","Địa chỉ email không hợp lệ."]]),U=()=>{const r=[{id:"01",name:"Basic",component:n.jsx(f,{}),raw:x},{id:"02",name:"With Label",component:n.jsx(h,{}),raw:j},{id:"03",name:"With Description",component:n.jsx(b,{}),raw:F},{id:"04",name:"With Icon",component:n.jsx(w,{}),raw:E},{id:"05",name:"Setting the Type",component:n.jsx(I,{}),raw:L},{id:"06",name:"Disabled State",component:n.jsx(g,{}),raw:k},{id:"07",name:"Validation Errors",component:n.jsx(_,{errors:D}),raw:C},{id:"08",name:"Constraining Width",component:n.jsx(v,{}),raw:N},{id:"09",name:"With Custom Layout",component:n.jsx(y,{}),raw:R},{id:"10",name:"Controlled Component",component:n.jsx(S,{}),raw:W}];return n.jsx("div",{className:"space-y-10 pb-20",children:r.map(t=>n.jsxs("section",{className:"border-b border-gray-100 pb-10 last:border-0",children:[n.jsxs("h2",{className:"mb-4 text-lg font-bold text-gray-800",children:[t.id,". ",t.name]}),n.jsx(m,{name:t.name,code:t.raw,children:n.jsx("div",{className:"mx-auto max-w-xl py-4",children:t.component})})]},t.id))})};export{U as default};
