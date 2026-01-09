import{j as e,r as l}from"./index-CvCVbuS9.js";import{P as c}from"./PreviewWrapper-TzFvRoPZ.js";import{T as i}from"./textarea-C6vPBpWF.js";import{b as a,L as r,D as s,E as d}from"./fieldset-DSTAHszk.js";import{W as m}from"./field-BUH74JGD.js";import"./label-CY_Q6YdE.js";import"./form-fields-DfbHTuSb.js";function p(){return e.jsx(i,{"aria-label":"Description",name:"description"})}const x=`import { Textarea } from "@/features/tailwind-v4/components/ui-kit/textarea";

export default function Example() {
  return <Textarea aria-label="Description" name="description" />;
}
`;function u(){return e.jsxs(a,{children:[e.jsx(r,{children:"Description"}),e.jsx(i,{name:"description"})]})}const f=`import {
  Field,
  Label,
} from "@/features/tailwind-v4/components/ui-kit/fieldset";
import { Textarea } from "@/features/tailwind-v4/components/ui-kit/textarea";

export default function Example() {
  return (
    <Field>
      <Label>Description</Label>
      <Textarea name="description" />
    </Field>
  );
}
`;function h(){return e.jsxs(a,{children:[e.jsx(r,{children:"Description"}),e.jsx(s,{children:"This will be shown under the product title."}),e.jsx(i,{name:"name"})]})}const w=`import {
  Description,
  Field,
  Label,
} from "@/features/tailwind-v4/components/ui-kit/fieldset";
import { Textarea } from "@/features/tailwind-v4/components/ui-kit/textarea";

export default function Example() {
  return (
    <Field>
      <Label>Description</Label>
      <Description>This will be shown under the product title.</Description>
      <Textarea name="name" />
    </Field>
  );
}
`;function b(){return e.jsxs(a,{disabled:!0,children:[e.jsx(r,{children:"Description"}),e.jsx(i,{name:"description"})]})}const j=`import {
  Field,
  Label,
} from "@/features/tailwind-v4/components/ui-kit/fieldset";
import { Textarea } from "@/features/tailwind-v4/components/ui-kit/textarea";

export default function Example() {
  return (
    <Field disabled>
      <Label>Description</Label>
      <Textarea name="description" />
    </Field>
  );
}
`;function v({errors:t}){return e.jsxs(a,{children:[e.jsx(r,{children:"Description"}),e.jsx(i,{name:"description",invalid:t.has("description")}),t.has("description")&&e.jsx(d,{children:t.get("description")})]})}const D=`import {
  ErrorMessage,
  Field,
  Label,
} from "@/features/tailwind-v4/components/ui-kit/fieldset";
import { Textarea } from "@/features/tailwind-v4/components/ui-kit/textarea";

export default function Example({ errors }) {
  return (
    <Field>
      <Label>Description</Label>
      <Textarea name="description" invalid={errors.has("description")} />
      {errors.has("description") && (
        <ErrorMessage>{errors.get("description")}</ErrorMessage>
      )}
    </Field>
  );
}
`;function E(){return e.jsxs(m,{className:"grid grid-cols-12 gap-6",children:[e.jsxs("div",{className:"col-span-5",children:[e.jsx(r,{children:"Description"}),e.jsx(s,{className:"mt-1",children:"This will be shown under the product title."})]}),e.jsx("div",{className:"col-span-7",children:e.jsx(i,{name:"description",rows:"3"})})]})}const L=`import {
  Description,
  Label,
} from "@/features/tailwind-v4/components/ui-kit/fieldset";
import { Textarea } from "@/features/tailwind-v4/components/ui-kit/textarea";
import * as Headless from "@headlessui/react";

export default function Example() {
  return (
    <Headless.Field className="grid grid-cols-12 gap-6">
      <div className="col-span-5">
        <Label>Description</Label>
        <Description className="mt-1">
          This will be shown under the product title.
        </Description>
      </div>
      <div className="col-span-7">
        <Textarea name="description" rows="3" />
      </div>
    </Headless.Field>
  );
}
`;function g(){let[t,n]=l.useState("");return e.jsxs(a,{children:[e.jsx(r,{children:"Description"}),e.jsx(i,{name:"description",value:t,onChange:o=>n(o.target.value)})]})}const T=`import {
  Field,
  Label,
} from "@/features/tailwind-v4/components/ui-kit/fieldset";
import { Textarea } from "@/features/tailwind-v4/components/ui-kit/textarea";
import { useState } from "react";

export default function Example() {
  let [name, setName] = useState("");

  return (
    <Field>
      <Label>Description</Label>
      <Textarea
        name="description"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </Field>
  );
}
`,F=new Map([["description","Vui lòng nhập mô tả chi tiết sản phẩm (tối thiểu 20 ký tự)."]]),S=()=>{const t=[{id:"01",name:"Basic",component:e.jsx(p,{}),raw:x},{id:"02",name:"With Label",component:e.jsx(u,{}),raw:f},{id:"03",name:"With Description",component:e.jsx(h,{}),raw:w},{id:"04",name:"Disabled State",component:e.jsx(b,{}),raw:j},{id:"05",name:"Validation Errors",component:e.jsx(v,{errors:F}),raw:D},{id:"06",name:"With Custom Layout",component:e.jsx(E,{}),raw:L},{id:"07",name:"Controlled Component",component:e.jsx(g,{}),raw:T}];return e.jsx("div",{className:"space-y-10 pb-20",children:t.map(n=>e.jsxs("section",{className:"border-b border-gray-100 pb-10 last:border-0",children:[e.jsxs("h2",{className:"mb-4 text-lg font-bold text-gray-800",children:[n.id,". ",n.name]}),e.jsx(c,{name:n.name,code:n.raw,children:e.jsx("div",{className:"mx-auto w-full max-w-xl py-6",children:n.component})})]},n.id))})};export{S as default};
