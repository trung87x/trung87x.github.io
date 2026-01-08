import{j as e,r as l}from"./index-B7qH8gVZ.js";import{P as c}from"./PreviewWrapper-DYMCDcbn.js";import{T as i}from"./textarea-CNMO41xR.js";import{b as a,L as r,D as s,E as m}from"./fieldset-DB8Yqkct.js";import{W as p}from"./field-BXlkLCnz.js";import"./label-GK_KVatz.js";import"./form-fields-BpZA5VTV.js";function d(){return e.jsx(i,{"aria-label":"Description",name:"description"})}const x=`import { Textarea } from "@/components/ui-kit/textarea";

export default function Example() {
  return <Textarea aria-label="Description" name="description" />;
}
`;function u(){return e.jsxs(a,{children:[e.jsx(r,{children:"Description"}),e.jsx(i,{name:"description"})]})}const h=`import { Field, Label } from "@/components/ui-kit/fieldset";
import { Textarea } from "@/components/ui-kit/textarea";

export default function Example() {
  return (
    <Field>
      <Label>Description</Label>
      <Textarea name="description" />
    </Field>
  );
}
`;function f(){return e.jsxs(a,{children:[e.jsx(r,{children:"Description"}),e.jsx(s,{children:"This will be shown under the product title."}),e.jsx(i,{name:"name"})]})}const b=`import { Description, Field, Label } from "@/components/ui-kit/fieldset";
import { Textarea } from "@/components/ui-kit/textarea";

export default function Example() {
  return (
    <Field>
      <Label>Description</Label>
      <Description>This will be shown under the product title.</Description>
      <Textarea name="name" />
    </Field>
  );
}
`;function j(){return e.jsxs(a,{disabled:!0,children:[e.jsx(r,{children:"Description"}),e.jsx(i,{name:"description"})]})}const w=`import { Field, Label } from "@/components/ui-kit/fieldset";
import { Textarea } from "@/components/ui-kit/textarea";

export default function Example() {
  return (
    <Field disabled>
      <Label>Description</Label>
      <Textarea name="description" />
    </Field>
  );
}
`;function D({errors:t}){return e.jsxs(a,{children:[e.jsx(r,{children:"Description"}),e.jsx(i,{name:"description",invalid:t.has("description")}),t.has("description")&&e.jsx(m,{children:t.get("description")})]})}const E=`import { ErrorMessage, Field, Label } from "@/components/ui-kit/fieldset";
import { Textarea } from "@/components/ui-kit/textarea";

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
`;function L(){return e.jsxs(p,{className:"grid grid-cols-12 gap-6",children:[e.jsxs("div",{className:"col-span-5",children:[e.jsx(r,{children:"Description"}),e.jsx(s,{className:"mt-1",children:"This will be shown under the product title."})]}),e.jsx("div",{className:"col-span-7",children:e.jsx(i,{name:"description",rows:"3"})})]})}const g=`import { Description, Label } from "@/components/ui-kit/fieldset";
import { Textarea } from "@/components/ui-kit/textarea";
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
`;function T(){let[t,n]=l.useState("");return e.jsxs(a,{children:[e.jsx(r,{children:"Description"}),e.jsx(i,{name:"description",value:t,onChange:o=>n(o.target.value)})]})}const F=`import { Field, Label } from "@/components/ui-kit/fieldset";
import { Textarea } from "@/components/ui-kit/textarea";
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
`,k=new Map([["description","Vui lòng nhập mô tả chi tiết sản phẩm (tối thiểu 20 ký tự)."]]),S=()=>{const t=[{id:"01",name:"Basic",component:e.jsx(d,{}),raw:x},{id:"02",name:"With Label",component:e.jsx(u,{}),raw:h},{id:"03",name:"With Description",component:e.jsx(f,{}),raw:b},{id:"04",name:"Disabled State",component:e.jsx(j,{}),raw:w},{id:"05",name:"Validation Errors",component:e.jsx(D,{errors:k}),raw:E},{id:"06",name:"With Custom Layout",component:e.jsx(L,{}),raw:g},{id:"07",name:"Controlled Component",component:e.jsx(T,{}),raw:F}];return e.jsx("div",{className:"space-y-10 pb-20",children:t.map(n=>e.jsxs("section",{className:"border-b border-gray-100 pb-10 last:border-0",children:[e.jsxs("h2",{className:"mb-4 text-lg font-bold text-gray-800",children:[n.id,". ",n.name]}),e.jsx(c,{name:n.name,code:n.raw,children:e.jsx("div",{className:"mx-auto w-full max-w-xl py-6",children:n.component})})]},n.id))})};export{S as default};
