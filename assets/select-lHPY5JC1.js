import{j as e,r as l}from"./index-DoTC0ASh.js";import{P as c}from"./PreviewWrapper-DHobF2kM.js";import{S as a}from"./select-CDJ_Ya_q.js";import{b as i,L as o,D as d,E as r}from"./fieldset-CaD507Bv.js";import{W as p}from"./field-Epo4LRXa.js";import"./label-ZIN2fbqp.js";import"./form-fields-Pijg8yTu.js";function u(){return e.jsxs(a,{"aria-label":"Project status",name:"status",children:[e.jsx("option",{value:"active",children:"Active"}),e.jsx("option",{value:"paused",children:"Paused"}),e.jsx("option",{value:"delayed",children:"Delayed"}),e.jsx("option",{value:"canceled",children:"Canceled"})]})}const m=`import { Select } from "@/components/ui-kit/select";

export default function Example() {
  return (
    <Select aria-label="Project status" name="status">
      <option value="active">Active</option>
      <option value="paused">Paused</option>
      <option value="delayed">Delayed</option>
      <option value="canceled">Canceled</option>
    </Select>
  );
}
`;function x(){return e.jsxs(i,{children:[e.jsx(o,{children:"Project status"}),e.jsxs(a,{name:"status",children:[e.jsx("option",{value:"active",children:"Active"}),e.jsx("option",{value:"paused",children:"Paused"}),e.jsx("option",{value:"delayed",children:"Delayed"}),e.jsx("option",{value:"canceled",children:"Canceled"})]})]})}const v=`import { Field, Label } from "@/components/ui-kit/fieldset";
import { Select } from "@/components/ui-kit/select";

export default function Example() {
  return (
    <Field>
      <Label>Project status</Label>
      <Select name="status">
        <option value="active">Active</option>
        <option value="paused">Paused</option>
        <option value="delayed">Delayed</option>
        <option value="canceled">Canceled</option>
      </Select>
    </Field>
  );
}
`;function j(){return e.jsxs(i,{children:[e.jsx(o,{children:"Project status"}),e.jsx(d,{children:"This will be visible to clients on the project."}),e.jsxs(a,{name:"status",children:[e.jsx("option",{value:"active",children:"Active"}),e.jsx("option",{value:"paused",children:"Paused"}),e.jsx("option",{value:"delayed",children:"Delayed"}),e.jsx("option",{value:"canceled",children:"Canceled"})]})]})}const h=`import { Description, Field, Label } from "@/components/ui-kit/fieldset";
import { Select } from "@/components/ui-kit/select";

export default function Example() {
  return (
    <Field>
      <Label>Project status</Label>
      <Description>This will be visible to clients on the project.</Description>
      <Select name="status">
        <option value="active">Active</option>
        <option value="paused">Paused</option>
        <option value="delayed">Delayed</option>
        <option value="canceled">Canceled</option>
      </Select>
    </Field>
  );
}
`;function f(){return e.jsxs(i,{disabled:!0,children:[e.jsx(o,{children:"Project status"}),e.jsxs(a,{name:"status",children:[e.jsx("option",{value:"active",children:"Active"}),e.jsx("option",{value:"paused",children:"Paused"}),e.jsx("option",{value:"delayed",children:"Delayed"}),e.jsx("option",{value:"canceled",children:"Canceled"})]})]})}const y=`import { Field, Label } from "@/components/ui-kit/fieldset";
import { Select } from "@/components/ui-kit/select";

export default function Example() {
  return (
    <Field disabled>
      <Label>Project status</Label>
      <Select name="status">
        <option value="active">Active</option>
        <option value="paused">Paused</option>
        <option value="delayed">Delayed</option>
        <option value="canceled">Canceled</option>
      </Select>
    </Field>
  );
}
`;function b({errors:n}){return e.jsxs(i,{children:[e.jsx(o,{children:"Project status"}),e.jsxs(a,{name:"status",defaultValue:"",invalid:n.has("status"),children:[e.jsx("option",{value:"",disabled:!0,children:"Select a status…"}),e.jsx("option",{value:"active",children:"Active"}),e.jsx("option",{value:"paused",children:"Paused"}),e.jsx("option",{value:"delayed",children:"Delayed"}),e.jsx("option",{value:"canceled",children:"Canceled"})]}),n.has("status")&&e.jsx(r,{children:n.get("status")})]})}const S=`import { ErrorMessage, Field, Label } from "@/components/ui-kit/fieldset";
import { Select } from "@/components/ui-kit/select";

export default function Example({ errors }) {
  return (
    <Field>
      <Label>Project status</Label>
      <Select name="status" defaultValue="" invalid={errors.has("status")}>
        <option value="" disabled>
          Select a status&hellip;
        </option>
        <option value="active">Active</option>
        <option value="paused">Paused</option>
        <option value="delayed">Delayed</option>
        <option value="canceled">Canceled</option>
      </Select>
      {errors.has("status") && (
        <ErrorMessage>{errors.get("status")}</ErrorMessage>
      )}
    </Field>
  );
}
`;function P(){return e.jsxs(i,{children:[e.jsx(o,{children:"Day of the week"}),e.jsxs(a,{className:"max-w-40",name:"day_of_the_week",children:[e.jsx("option",{children:"Monday"}),e.jsx("option",{children:"Tuesday"}),e.jsx("option",{children:"Wednesday"}),e.jsx("option",{children:"Thursday"}),e.jsx("option",{children:"Friday"}),e.jsx("option",{children:"Saturday"}),e.jsx("option",{children:"Sunday"})]})]})}const w=`import { Field, Label } from "@/components/ui-kit/fieldset";
import { Select } from "@/components/ui-kit/select";

export default function Example() {
  return (
    <Field>
      <Label>Day of the week</Label>
      <Select className="max-w-40" name="day_of_the_week">
        <option>Monday</option>
        <option>Tuesday</option>
        <option>Wednesday</option>
        <option>Thursday</option>
        <option>Friday</option>
        <option>Saturday</option>
        <option>Sunday</option>
      </Select>
    </Field>
  );
}
`;function L(){return e.jsxs(p,{className:"flex items-baseline justify-center gap-6",children:[e.jsx(o,{children:"Project status"}),e.jsxs(a,{name:"status",className:"max-w-48",children:[e.jsx("option",{value:"active",children:"Active"}),e.jsx("option",{value:"paused",children:"Paused"}),e.jsx("option",{value:"delayed",children:"Delayed"}),e.jsx("option",{value:"canceled",children:"Canceled"})]})]})}const E=`import { Label } from "@/components/ui-kit/fieldset";
import { Select } from "@/components/ui-kit/select";
import * as Headless from "@headlessui/react";

export default function Example() {
  return (
    <Headless.Field className="flex items-baseline justify-center gap-6">
      <Label>Project status</Label>
      <Select name="status" className="max-w-48">
        <option value="active">Active</option>
        <option value="paused">Paused</option>
        <option value="delayed">Delayed</option>
        <option value="canceled">Canceled</option>
      </Select>
    </Headless.Field>
  );
}
`;function D(){let[n,t]=l.useState("active");return e.jsxs(i,{children:[e.jsx(o,{children:"Project status"}),e.jsxs(a,{name:"status",value:n,onChange:s=>t(s.target.value),children:[e.jsx("option",{value:"active",children:"Active"}),e.jsx("option",{value:"paused",children:"Paused"}),e.jsx("option",{value:"delayed",children:"Delayed"}),e.jsx("option",{value:"canceled",children:"Canceled"})]})]})}const C=`import { Field, Label } from "@/components/ui-kit/fieldset";
import { Select } from "@/components/ui-kit/select";
import { useState } from "react";

export default function Example() {
  let [status, setStatus] = useState("active");

  return (
    <Field>
      <Label>Project status</Label>
      <Select
        name="status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="active">Active</option>
        <option value="paused">Paused</option>
        <option value="delayed">Delayed</option>
        <option value="canceled">Canceled</option>
      </Select>
    </Field>
  );
}
`,F={has:n=>n==="status",get:n=>"Trường này là bắt buộc!"},$=()=>{const n=[{id:"01",name:"Basic",component:e.jsx(u,{}),raw:m},{id:"02",name:"With Label",component:e.jsx(x,{}),raw:v},{id:"03",name:"With Description",component:e.jsx(j,{}),raw:h},{id:"04",name:"Disabled State",component:e.jsx(f,{}),raw:y},{id:"05",name:"Validation Errors",component:e.jsx(b,{errors:F}),raw:S},{id:"06",name:"Constraining Width",component:e.jsx(P,{}),raw:w},{id:"07",name:"With Custom Layout",component:e.jsx(L,{}),raw:E},{id:"08",name:"Controlled Component",component:e.jsx(D,{}),raw:C}];return e.jsx("div",{className:"space-y-10 pb-20",children:n.map(t=>e.jsxs("section",{className:"border-b border-gray-100 pb-10 last:border-0",children:[e.jsxs("h2",{className:"mb-4 text-lg font-bold text-gray-800",children:[t.id,". ",t.name]}),e.jsx(c,{name:t.name,code:t.raw,children:e.jsx("div",{className:"flex min-h-[150px] items-center justify-center py-6",children:e.jsx("div",{className:"w-full max-w-sm",children:t.component})})})]},t.id))})};export{$ as default};
