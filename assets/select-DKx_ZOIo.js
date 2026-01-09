import{j as e,r as l}from"./index-CvCVbuS9.js";import{P as d}from"./PreviewWrapper-TzFvRoPZ.js";import{S as a}from"./select-CsO5tj1F.js";import{b as o,L as i,D as c,E as r}from"./fieldset-DSTAHszk.js";import{W as u}from"./field-BUH74JGD.js";import"./label-CY_Q6YdE.js";import"./form-fields-DfbHTuSb.js";function p(){return e.jsxs(a,{"aria-label":"Project status",name:"status",children:[e.jsx("option",{value:"active",children:"Active"}),e.jsx("option",{value:"paused",children:"Paused"}),e.jsx("option",{value:"delayed",children:"Delayed"}),e.jsx("option",{value:"canceled",children:"Canceled"})]})}const m=`import { Select } from "@/features/tailwind-v4/components/ui-kit/select";

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
`;function v(){return e.jsxs(o,{children:[e.jsx(i,{children:"Project status"}),e.jsxs(a,{name:"status",children:[e.jsx("option",{value:"active",children:"Active"}),e.jsx("option",{value:"paused",children:"Paused"}),e.jsx("option",{value:"delayed",children:"Delayed"}),e.jsx("option",{value:"canceled",children:"Canceled"})]})]})}const x=`import {
  Field,
  Label,
} from "@/features/tailwind-v4/components/ui-kit/fieldset";
import { Select } from "@/features/tailwind-v4/components/ui-kit/select";

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
`;function j(){return e.jsxs(o,{children:[e.jsx(i,{children:"Project status"}),e.jsx(c,{children:"This will be visible to clients on the project."}),e.jsxs(a,{name:"status",children:[e.jsx("option",{value:"active",children:"Active"}),e.jsx("option",{value:"paused",children:"Paused"}),e.jsx("option",{value:"delayed",children:"Delayed"}),e.jsx("option",{value:"canceled",children:"Canceled"})]})]})}const h=`import {
  Description,
  Field,
  Label,
} from "@/features/tailwind-v4/components/ui-kit/fieldset";
import { Select } from "@/features/tailwind-v4/components/ui-kit/select";

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
`;function f(){return e.jsxs(o,{disabled:!0,children:[e.jsx(i,{children:"Project status"}),e.jsxs(a,{name:"status",children:[e.jsx("option",{value:"active",children:"Active"}),e.jsx("option",{value:"paused",children:"Paused"}),e.jsx("option",{value:"delayed",children:"Delayed"}),e.jsx("option",{value:"canceled",children:"Canceled"})]})]})}const y=`import {
  Field,
  Label,
} from "@/features/tailwind-v4/components/ui-kit/fieldset";
import { Select } from "@/features/tailwind-v4/components/ui-kit/select";

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
`;function b({errors:n}){return e.jsxs(o,{children:[e.jsx(i,{children:"Project status"}),e.jsxs(a,{name:"status",defaultValue:"",invalid:n.has("status"),children:[e.jsx("option",{value:"",disabled:!0,children:"Select a status…"}),e.jsx("option",{value:"active",children:"Active"}),e.jsx("option",{value:"paused",children:"Paused"}),e.jsx("option",{value:"delayed",children:"Delayed"}),e.jsx("option",{value:"canceled",children:"Canceled"})]}),n.has("status")&&e.jsx(r,{children:n.get("status")})]})}const w=`import {
  ErrorMessage,
  Field,
  Label,
} from "@/features/tailwind-v4/components/ui-kit/fieldset";
import { Select } from "@/features/tailwind-v4/components/ui-kit/select";

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
`;function S(){return e.jsxs(o,{children:[e.jsx(i,{children:"Day of the week"}),e.jsxs(a,{className:"max-w-40",name:"day_of_the_week",children:[e.jsx("option",{children:"Monday"}),e.jsx("option",{children:"Tuesday"}),e.jsx("option",{children:"Wednesday"}),e.jsx("option",{children:"Thursday"}),e.jsx("option",{children:"Friday"}),e.jsx("option",{children:"Saturday"}),e.jsx("option",{children:"Sunday"})]})]})}const P=`import {
  Field,
  Label,
} from "@/features/tailwind-v4/components/ui-kit/fieldset";
import { Select } from "@/features/tailwind-v4/components/ui-kit/select";

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
`;function L(){return e.jsxs(u,{className:"flex items-baseline justify-center gap-6",children:[e.jsx(i,{children:"Project status"}),e.jsxs(a,{name:"status",className:"max-w-48",children:[e.jsx("option",{value:"active",children:"Active"}),e.jsx("option",{value:"paused",children:"Paused"}),e.jsx("option",{value:"delayed",children:"Delayed"}),e.jsx("option",{value:"canceled",children:"Canceled"})]})]})}const E=`import { Label } from "@/features/tailwind-v4/components/ui-kit/fieldset";
import { Select } from "@/features/tailwind-v4/components/ui-kit/select";
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
`;function D(){let[n,t]=l.useState("active");return e.jsxs(o,{children:[e.jsx(i,{children:"Project status"}),e.jsxs(a,{name:"status",value:n,onChange:s=>t(s.target.value),children:[e.jsx("option",{value:"active",children:"Active"}),e.jsx("option",{value:"paused",children:"Paused"}),e.jsx("option",{value:"delayed",children:"Delayed"}),e.jsx("option",{value:"canceled",children:"Canceled"})]})]})}const C=`import {
  Field,
  Label,
} from "@/features/tailwind-v4/components/ui-kit/fieldset";
import { Select } from "@/features/tailwind-v4/components/ui-kit/select";
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
`,F={has:n=>n==="status",get:n=>"Trường này là bắt buộc!"},$=()=>{const n=[{id:"01",name:"Basic",component:e.jsx(p,{}),raw:m},{id:"02",name:"With Label",component:e.jsx(v,{}),raw:x},{id:"03",name:"With Description",component:e.jsx(j,{}),raw:h},{id:"04",name:"Disabled State",component:e.jsx(f,{}),raw:y},{id:"05",name:"Validation Errors",component:e.jsx(b,{errors:F}),raw:w},{id:"06",name:"Constraining Width",component:e.jsx(S,{}),raw:P},{id:"07",name:"With Custom Layout",component:e.jsx(L,{}),raw:E},{id:"08",name:"Controlled Component",component:e.jsx(D,{}),raw:C}];return e.jsx("div",{className:"space-y-10 pb-20",children:n.map(t=>e.jsxs("section",{className:"border-b border-gray-100 pb-10 last:border-0",children:[e.jsxs("h2",{className:"mb-4 text-lg font-bold text-gray-800",children:[t.id,". ",t.name]}),e.jsx(d,{name:t.name,code:t.raw,children:e.jsx("div",{className:"flex min-h-[150px] items-center justify-center py-6",children:e.jsx("div",{className:"w-full max-w-sm",children:t.component})})})]},t.id))})};export{$ as default};
