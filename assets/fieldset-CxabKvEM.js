import{j as e}from"./index-CvCVbuS9.js";import{P as x}from"./PreviewWrapper-TzFvRoPZ.js";import{F as l,a as m,c as d,b as i,L as t,D as s}from"./fieldset-DSTAHszk.js";import{I as n}from"./input-L2pA8V3X.js";import{S as r}from"./select-CsO5tj1F.js";import{T as p}from"./text-BLPIEcIv.js";import{T as a}from"./textarea-C6vPBpWF.js";import{W as c}from"./field-BUH74JGD.js";import"./label-CY_Q6YdE.js";import"./form-fields-DfbHTuSb.js";function h(){return e.jsx("form",{action:"/orders",method:"POST",children:e.jsxs(l,{children:[e.jsx(m,{children:"Shipping details"}),e.jsx(p,{children:"Without this your odds of getting your order are low."}),e.jsxs(d,{children:[e.jsxs(i,{children:[e.jsx(t,{children:"Street address"}),e.jsx(n,{name:"street_address"})]}),e.jsxs(i,{children:[e.jsx(t,{children:"Country"}),e.jsxs(r,{name:"country",children:[e.jsx("option",{children:"Canada"}),e.jsx("option",{children:"Mexico"}),e.jsx("option",{children:"United States"})]}),e.jsx(s,{children:"We currently only ship to North America."})]}),e.jsxs(i,{children:[e.jsx(t,{children:"Delivery notes"}),e.jsx(a,{name:"notes"}),e.jsx(s,{children:"If you have a tiger, we'd like to know about it."})]})]})]})})}const j=`import {
  Description,
  Field,
  FieldGroup,
  Fieldset,
  Label,
  Legend,
} from "@/features/tailwind-v4/components/ui-kit/fieldset";
import { Input } from "@/features/tailwind-v4/components/ui-kit/input";
import { Select } from "@/features/tailwind-v4/components/ui-kit/select";
import { Text } from "@/features/tailwind-v4/components/ui-kit/text";
import { Textarea } from "@/features/tailwind-v4/components/ui-kit/textarea";

export default function Example() {
  return (
    <form action="/orders" method="POST">
      {/* ... */}
      <Fieldset>
        <Legend>Shipping details</Legend>
        <Text>Without this your odds of getting your order are low.</Text>
        <FieldGroup>
          <Field>
            <Label>Street address</Label>
            <Input name="street_address" />
          </Field>
          <Field>
            <Label>Country</Label>
            <Select name="country">
              <option>Canada</option>
              <option>Mexico</option>
              <option>United States</option>
            </Select>
            <Description>We currently only ship to North America.</Description>
          </Field>
          <Field>
            <Label>Delivery notes</Label>
            <Textarea name="notes" />
            <Description>
              If you have a tiger, we'd like to know about it.
            </Description>
          </Field>
        </FieldGroup>
      </Fieldset>
      {/* ... */}
    </form>
  );
}
`;function f(){return e.jsx("form",{action:"/orders",method:"POST",children:e.jsx(l,{"aria-label":"Shipping details",children:e.jsxs(d,{children:[e.jsxs(i,{children:[e.jsx(t,{children:"Street address"}),e.jsx(n,{name:"street_address"})]}),e.jsxs(i,{children:[e.jsx(t,{children:"Country"}),e.jsxs(r,{name:"country",children:[e.jsx("option",{children:"Canada"}),e.jsx("option",{children:"Mexico"}),e.jsx("option",{children:"United States"})]}),e.jsx(s,{children:"We currently only ship to North America."})]}),e.jsxs(i,{children:[e.jsx(t,{children:"Delivery notes"}),e.jsx(a,{name:"notes"}),e.jsx(s,{children:"If you have a tiger, we'd like to know about it."})]})]})})})}const g=`import {
  Description,
  Field,
  FieldGroup,
  Fieldset,
  Label,
} from "@/features/tailwind-v4/components/ui-kit/fieldset";
import { Input } from "@/features/tailwind-v4/components/ui-kit/input";
import { Select } from "@/features/tailwind-v4/components/ui-kit/select";
import { Textarea } from "@/features/tailwind-v4/components/ui-kit/textarea";

export default function Example() {
  return (
    <form action="/orders" method="POST">
      <Fieldset aria-label="Shipping details">
        <FieldGroup>
          <Field>
            <Label>Street address</Label>
            <Input name="street_address" />
          </Field>
          <Field>
            <Label>Country</Label>
            <Select name="country">
              <option>Canada</option>
              <option>Mexico</option>
              <option>United States</option>
            </Select>
            <Description>We currently only ship to North America.</Description>
          </Field>
          <Field>
            <Label>Delivery notes</Label>
            <Textarea name="notes" />
            <Description>
              If you have a tiger, we'd like to know about it.
            </Description>
          </Field>
        </FieldGroup>
      </Fieldset>
    </form>
  );
}
`;function F(){return e.jsx("form",{action:"/orders",method:"POST",children:e.jsxs(d,{children:[e.jsxs(i,{children:[e.jsx(t,{children:"Street address"}),e.jsx(n,{name:"street_address"})]}),e.jsxs(i,{children:[e.jsx(t,{children:"Country"}),e.jsxs(r,{name:"country",children:[e.jsx("option",{children:"Canada"}),e.jsx("option",{children:"Mexico"}),e.jsx("option",{children:"United States"})]}),e.jsx(s,{children:"We currently only ship to North America."})]}),e.jsxs(i,{children:[e.jsx(t,{children:"Delivery notes"}),e.jsx(a,{name:"notes"}),e.jsx(s,{children:"If you have a tiger, we'd like to know about it."})]})]})})}const b=`import {
  Description,
  Field,
  FieldGroup,
  Label,
} from "@/features/tailwind-v4/components/ui-kit/fieldset";
import { Input } from "@/features/tailwind-v4/components/ui-kit/input";
import { Select } from "@/features/tailwind-v4/components/ui-kit/select";
import { Textarea } from "@/features/tailwind-v4/components/ui-kit/textarea";

export default function Example() {
  return (
    <form action="/orders" method="POST">
      <FieldGroup>
        <Field>
          <Label>Street address</Label>
          <Input name="street_address" />
        </Field>
        <Field>
          <Label>Country</Label>
          <Select name="country">
            <option>Canada</option>
            <option>Mexico</option>
            <option>United States</option>
          </Select>
          <Description>We currently only ship to North America.</Description>
        </Field>
        <Field>
          <Label>Delivery notes</Label>
          <Textarea name="notes" />
          <Description>
            If you have a tiger, we'd like to know about it.
          </Description>
        </Field>
      </FieldGroup>
    </form>
  );
}
`;function y(){return e.jsx("form",{action:"/orders",method:"POST",children:e.jsxs(l,{children:[e.jsx(m,{children:"Shipping details"}),e.jsx(p,{children:"Without this your odds of getting your order are low."}),e.jsxs(d,{children:[e.jsxs("div",{className:"grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-4",children:[e.jsxs(i,{children:[e.jsx(t,{children:"First name"}),e.jsx(n,{name:"first_name"})]}),e.jsxs(i,{children:[e.jsx(t,{children:"Last name"}),e.jsx(n,{name:"last_name"})]})]}),e.jsxs(i,{children:[e.jsx(t,{children:"Street address"}),e.jsx(n,{name:"street_address"})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-4",children:[e.jsxs(i,{className:"sm:col-span-2",children:[e.jsx(t,{children:"Country"}),e.jsxs(r,{name:"country",children:[e.jsx("option",{children:"Canada"}),e.jsx("option",{children:"Mexico"}),e.jsx("option",{children:"United States"})]})]}),e.jsxs(i,{children:[e.jsx(t,{children:"Postal code"}),e.jsx(n,{name:"postal_code"})]})]}),e.jsxs(i,{children:[e.jsx(t,{children:"Delivery notes"}),e.jsx(a,{name:"notes"}),e.jsx(s,{children:"If you have a tiger, we'd like to know about it."})]})]})]})})}const L=`import {
  Description,
  Field,
  FieldGroup,
  Fieldset,
  Label,
  Legend,
} from "@/features/tailwind-v4/components/ui-kit/fieldset";
import { Input } from "@/features/tailwind-v4/components/ui-kit/input";
import { Select } from "@/features/tailwind-v4/components/ui-kit/select";
import { Text } from "@/features/tailwind-v4/components/ui-kit/text";
import { Textarea } from "@/features/tailwind-v4/components/ui-kit/textarea";

export default function Example() {
  return (
    <form action="/orders" method="POST">
      {/* ... */}
      <Fieldset>
        <Legend>Shipping details</Legend>
        <Text>Without this your odds of getting your order are low.</Text>
        <FieldGroup>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-4">
            <Field>
              <Label>First name</Label>
              <Input name="first_name" />
            </Field>
            <Field>
              <Label>Last name</Label>
              <Input name="last_name" />
            </Field>
          </div>
          <Field>
            <Label>Street address</Label>
            <Input name="street_address" />
          </Field>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-4">
            <Field className="sm:col-span-2">
              <Label>Country</Label>
              <Select name="country">
                <option>Canada</option>
                <option>Mexico</option>
                <option>United States</option>
              </Select>
            </Field>
            <Field>
              <Label>Postal code</Label>
              <Input name="postal_code" />
            </Field>
          </div>
          <Field>
            <Label>Delivery notes</Label>
            <Textarea name="notes" />
            <Description>
              If you have a tiger, we'd like to know about it.
            </Description>
          </Field>
        </FieldGroup>
      </Fieldset>
      {/* ... */}
    </form>
  );
}
`;function w(){return e.jsx("form",{action:"/orders",method:"POST",children:e.jsxs(l,{children:[e.jsx(m,{children:"Shipping details"}),e.jsx(p,{children:"Without this your odds of getting your order are low."}),e.jsxs("div",{"data-slot":"control",className:"grid grid-cols-1 items-center gap-x-4 gap-y-6 sm:grid-cols-3",children:[e.jsxs(c,{className:"grid grid-cols-subgrid sm:col-span-3",children:[e.jsx(t,{children:"Full name"}),e.jsx(n,{className:"mt-3 sm:col-span-2 sm:mt-0",name:"full_name"})]}),e.jsxs(c,{className:"grid grid-cols-subgrid sm:col-span-3",children:[e.jsx(t,{children:"Street address"}),e.jsx(n,{className:"mt-3 sm:col-span-2 sm:mt-0",name:"street_address"})]}),e.jsxs(c,{className:"grid grid-cols-subgrid sm:col-span-3",children:[e.jsx(t,{children:"Country"}),e.jsxs(r,{className:"mt-3 sm:col-span-2 sm:mt-0",name:"country",children:[e.jsx("option",{children:"Canada"}),e.jsx("option",{children:"Mexico"}),e.jsx("option",{children:"United States"})]})]}),e.jsxs(c,{className:"grid grid-cols-subgrid sm:col-span-3",children:[e.jsx(t,{children:"Delivery notes"}),e.jsx(a,{className:"mt-3 sm:col-span-2 sm:mt-0",name:"notes"})]})]})]})})}const S=`import {
  Fieldset,
  Label,
  Legend,
} from "@/features/tailwind-v4/components/ui-kit/fieldset";
import { Input } from "@/features/tailwind-v4/components/ui-kit/input";
import { Select } from "@/features/tailwind-v4/components/ui-kit/select";
import { Text } from "@/features/tailwind-v4/components/ui-kit/text";
import { Textarea } from "@/features/tailwind-v4/components/ui-kit/textarea";
import * as Headless from "@headlessui/react";

export default function Example() {
  return (
    <form action="/orders" method="POST">
      {/* ... */}
      <Fieldset>
        <Legend>Shipping details</Legend>
        <Text>Without this your odds of getting your order are low.</Text>
        <div
          data-slot="control"
          className="grid grid-cols-1 items-center gap-x-4 gap-y-6 sm:grid-cols-3"
        >
          <Headless.Field className="grid grid-cols-subgrid sm:col-span-3">
            <Label>Full name</Label>
            <Input className="mt-3 sm:col-span-2 sm:mt-0" name="full_name" />
          </Headless.Field>
          <Headless.Field className="grid grid-cols-subgrid sm:col-span-3">
            <Label>Street address</Label>
            <Input
              className="mt-3 sm:col-span-2 sm:mt-0"
              name="street_address"
            />
          </Headless.Field>
          <Headless.Field className="grid grid-cols-subgrid sm:col-span-3">
            <Label>Country</Label>
            <Select className="mt-3 sm:col-span-2 sm:mt-0" name="country">
              <option>Canada</option>
              <option>Mexico</option>
              <option>United States</option>
            </Select>
          </Headless.Field>
          <Headless.Field className="grid grid-cols-subgrid sm:col-span-3">
            <Label>Delivery notes</Label>
            <Textarea className="mt-3 sm:col-span-2 sm:mt-0" name="notes" />
          </Headless.Field>
        </div>
      </Fieldset>
      {/* ... */}
    </form>
  );
}
`;function v(){return e.jsx("form",{action:"/orders",method:"POST",children:e.jsxs(l,{disabled:!0,children:[e.jsx(m,{children:"Shipping details"}),e.jsx(p,{children:"Without this your odds of getting your order are low."}),e.jsxs(d,{children:[e.jsxs(i,{children:[e.jsx(t,{children:"Street address"}),e.jsx(n,{name:"street_address"})]}),e.jsxs(i,{children:[e.jsx(t,{children:"Country"}),e.jsxs(r,{name:"country",children:[e.jsx("option",{children:"Canada"}),e.jsx("option",{children:"Mexico"}),e.jsx("option",{children:"United States"})]}),e.jsx(s,{children:"We currently only ship to North America."})]}),e.jsxs(i,{children:[e.jsx(t,{children:"Delivery notes"}),e.jsx(a,{name:"notes"}),e.jsx(s,{children:"If you have a tiger, we'd like to know about it."})]})]})]})})}const k=`import {
  Description,
  Field,
  FieldGroup,
  Fieldset,
  Label,
  Legend,
} from "@/features/tailwind-v4/components/ui-kit/fieldset";
import { Input } from "@/features/tailwind-v4/components/ui-kit/input";
import { Select } from "@/features/tailwind-v4/components/ui-kit/select";
import { Text } from "@/features/tailwind-v4/components/ui-kit/text";
import { Textarea } from "@/features/tailwind-v4/components/ui-kit/textarea";

export default function Example() {
  return (
    <form action="/orders" method="POST">
      {/* ... */}
      <Fieldset disabled>
        <Legend>Shipping details</Legend>
        <Text>Without this your odds of getting your order are low.</Text>
        <FieldGroup>
          <Field>
            <Label>Street address</Label>
            <Input name="street_address" />
          </Field>
          <Field>
            <Label>Country</Label>
            <Select name="country">
              <option>Canada</option>
              <option>Mexico</option>
              <option>United States</option>
            </Select>
            <Description>We currently only ship to North America.</Description>
          </Field>
          <Field>
            <Label>Delivery notes</Label>
            <Textarea name="notes" />
            <Description>
              If you have a tiger, we'd like to know about it.
            </Description>
          </Field>
        </FieldGroup>
      </Fieldset>
      {/* ... */}
    </form>
  );
}
`,M=()=>{const u=[{id:"01",name:"Basic",component:e.jsx(h,{}),raw:j},{id:"02",name:"Without Legend",component:e.jsx(f,{}),raw:g},{id:"03",name:"Without Role",component:e.jsx(F,{}),raw:b},{id:"04",name:"With Grid Layout",component:e.jsx(y,{}),raw:L},{id:"05",name:"With Custom Layout",component:e.jsx(w,{}),raw:S},{id:"06",name:"Disabled State",component:e.jsx(v,{}),raw:k}];return e.jsx("div",{className:"space-y-10 pb-20",children:u.map(o=>e.jsxs("section",{className:"border-b border-gray-100 pb-10 last:border-0",children:[e.jsxs("h2",{className:"mb-4 text-lg font-bold text-gray-800",children:[o.id,". ",o.name]}),e.jsx(x,{name:o.name,code:o.raw,children:o.component})]},o.id))})};export{M as default};
