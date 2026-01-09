import{Y as ce,r as b,a1 as ne,as as re,q as te,o as u,s as D,$ as ae,b as ie,w as le,V as de,d as se,K as he,C as w,j as e,aD as m}from"./index-CvCVbuS9.js";import{P as be}from"./PreviewWrapper-TzFvRoPZ.js";import{l as ke,b as xe}from"./use-default-value-Cs7QsSkB.js";import{g as ue,j as me}from"./form-fields-DfbHTuSb.js";import{u as pe,N as fe}from"./label-CY_Q6YdE.js";import{s as ve}from"./bugs-qQ_SbDk4.js";import{W as _}from"./field-BUH74JGD.js";import{L as t,D as d,F as E,a as S}from"./fieldset-DSTAHszk.js";import{T as $}from"./text-BLPIEcIv.js";let ge="span";function we(n,o){let r=b.useId(),f=pe(),k=ne(),{id:v=f||`headlessui-checkbox-${r}`,disabled:l=k||!1,autoFocus:j=!1,checked:A,defaultChecked:z,onChange:G,name:y,value:R,form:T,indeterminate:g=!1,tabIndex:W=0,...N}=n,s=ke(z),[x,h]=xe(A,G,s??!1),H=fe(),M=re(),P=te(),[I,L]=b.useState(!1),F=u(()=>{L(!0),h?.(!x),P.nextFrame(()=>{L(!1)})}),K=u(a=>{if(ve(a.currentTarget))return a.preventDefault();a.preventDefault(),F()}),B=u(a=>{a.key===D.Space?(a.preventDefault(),F()):a.key===D.Enter&&ue(a.currentTarget)}),V=u(a=>a.preventDefault()),{isFocusVisible:U,focusProps:q}=ae({autoFocus:j}),{isHovered:O,hoverProps:X}=ie({isDisabled:l}),{pressed:Y,pressProps:J}=le({disabled:l}),Q=de({ref:o,id:v,role:"checkbox","aria-checked":g?"mixed":x?"true":"false","aria-labelledby":H,"aria-describedby":M,"aria-disabled":l?!0:void 0,indeterminate:g?"true":void 0,tabIndex:l?void 0:W,onKeyUp:l?void 0:B,onKeyPress:l?void 0:V,onClick:l?void 0:K},q,X,J),Z=se({checked:x,disabled:l,hover:O,focus:U,active:Y,indeterminate:g,changing:I,autofocus:j}),ee=b.useCallback(()=>{if(s!==void 0)return h?.(s)},[h,s]),oe=he();return w.createElement(w.Fragment,null,y!=null&&w.createElement(me,{disabled:l,data:{[y]:R||"on"},overrides:{type:"checkbox",checked:x},form:T,onReset:ee}),oe({ourProps:Q,theirProps:N,slot:Z,defaultTag:ge,name:"Checkbox"}))}let Ce=ce(we);function p({className:n,...o}){return e.jsx("div",{"data-slot":"control",...o,className:m(n,"space-y-3","has-data-[slot=description]:space-y-6 has-data-[slot=description]:**:data-[slot=label]:font-medium")})}function i({className:n,...o}){return e.jsx(_,{"data-slot":"field",...o,className:m(n,"grid grid-cols-[1.125rem_1fr] items-center gap-x-4 gap-y-1 sm:grid-cols-[1rem_1fr]","*:data-[slot=control]:col-start-1 *:data-[slot=control]:row-start-1 *:data-[slot=control]:justify-self-center","*:data-[slot=label]:col-start-2 *:data-[slot=label]:row-start-1 *:data-[slot=label]:justify-self-start","*:data-[slot=description]:col-start-2 *:data-[slot=description]:row-start-2","has-data-[slot=description]:**:data-[slot=label]:font-medium")})}const je=["relative isolate flex size-[1.125rem] items-center justify-center rounded-[0.3125rem] sm:size-4","before:absolute before:inset-0 before:-z-10 before:rounded-[calc(0.3125rem-1px)] before:bg-white before:shadow-sm","group-data-checked:before:bg-(--checkbox-checked-bg)","dark:before:hidden","dark:bg-white/5 dark:group-data-checked:bg-(--checkbox-checked-bg)","border border-zinc-950/15 group-data-checked:border-transparent group-data-hover:group-data-checked:border-transparent group-data-hover:border-zinc-950/30 group-data-checked:bg-(--checkbox-checked-border)","dark:border-white/15 dark:group-data-checked:border-white/5 dark:group-data-hover:group-data-checked:border-white/5 dark:group-data-hover:border-white/30","after:absolute after:inset-0 after:rounded-[calc(0.3125rem-1px)] after:shadow-[inset_0_1px_--theme(--color-white/15%)]","dark:after:-inset-px dark:after:hidden dark:after:rounded-[0.3125rem] dark:group-data-checked:after:block","group-data-focus:outline group-data-focus:outline-2 group-data-focus:outline-offset-2 group-data-focus:outline-blue-500","group-data-disabled:opacity-50","group-data-disabled:border-zinc-950/25 group-data-disabled:bg-zinc-950/5 group-data-disabled:[--checkbox-check:var(--color-zinc-950)]/50 group-data-disabled:before:bg-transparent","dark:group-data-disabled:border-white/20 dark:group-data-disabled:bg-white/[2.5%] dark:group-data-disabled:[--checkbox-check:var(--color-white)]/50 dark:group-data-checked:group-data-disabled:after:hidden","forced-colors:[--checkbox-check:HighlightText] forced-colors:[--checkbox-checked-bg:Highlight] forced-colors:group-data-disabled:[--checkbox-check:Highlight]","dark:forced-colors:[--checkbox-check:HighlightText] dark:forced-colors:[--checkbox-checked-bg:Highlight] dark:forced-colors:group-data-disabled:[--checkbox-check:Highlight]"],ye={"dark/zinc":["[--checkbox-check:var(--color-white)] [--checkbox-checked-bg:var(--color-zinc-900)] [--checkbox-checked-border:var(--color-zinc-950)]/90","dark:[--checkbox-checked-bg:var(--color-zinc-600)]"],"dark/white":["[--checkbox-check:var(--color-white)] [--checkbox-checked-bg:var(--color-zinc-900)] [--checkbox-checked-border:var(--color-zinc-950)]/90","dark:[--checkbox-check:var(--color-zinc-900)] dark:[--checkbox-checked-bg:var(--color-white)] dark:[--checkbox-checked-border:var(--color-zinc-950)]/15"],white:"[--checkbox-check:var(--color-zinc-900)] [--checkbox-checked-bg:var(--color-white)] [--checkbox-checked-border:var(--color-zinc-950)]/15",dark:"[--checkbox-check:var(--color-white)] [--checkbox-checked-bg:var(--color-zinc-900)] [--checkbox-checked-border:var(--color-zinc-950)]/90",zinc:"[--checkbox-check:var(--color-white)] [--checkbox-checked-bg:var(--color-zinc-600)] [--checkbox-checked-border:var(--color-zinc-700)]/90",red:"[--checkbox-check:var(--color-white)] [--checkbox-checked-bg:var(--color-red-600)] [--checkbox-checked-border:var(--color-red-700)]/90",orange:"[--checkbox-check:var(--color-white)] [--checkbox-checked-bg:var(--color-orange-500)] [--checkbox-checked-border:var(--color-orange-600)]/90",amber:"[--checkbox-check:var(--color-amber-950)] [--checkbox-checked-bg:var(--color-amber-400)] [--checkbox-checked-border:var(--color-amber-500)]/80",yellow:"[--checkbox-check:var(--color-yellow-950)] [--checkbox-checked-bg:var(--color-yellow-300)] [--checkbox-checked-border:var(--color-yellow-400)]/80",lime:"[--checkbox-check:var(--color-lime-950)] [--checkbox-checked-bg:var(--color-lime-300)] [--checkbox-checked-border:var(--color-lime-400)]/80",green:"[--checkbox-check:var(--color-white)] [--checkbox-checked-bg:var(--color-green-600)] [--checkbox-checked-border:var(--color-green-700)]/90",emerald:"[--checkbox-check:var(--color-white)] [--checkbox-checked-bg:var(--color-emerald-600)] [--checkbox-checked-border:var(--color-emerald-700)]/90",teal:"[--checkbox-check:var(--color-white)] [--checkbox-checked-bg:var(--color-teal-600)] [--checkbox-checked-border:var(--color-teal-700)]/90",cyan:"[--checkbox-check:var(--color-cyan-950)] [--checkbox-checked-bg:var(--color-cyan-300)] [--checkbox-checked-border:var(--color-cyan-400)]/80",sky:"[--checkbox-check:var(--color-white)] [--checkbox-checked-bg:var(--color-sky-500)] [--checkbox-checked-border:var(--color-sky-600)]/80",blue:"[--checkbox-check:var(--color-white)] [--checkbox-checked-bg:var(--color-blue-600)] [--checkbox-checked-border:var(--color-blue-700)]/90",indigo:"[--checkbox-check:var(--color-white)] [--checkbox-checked-bg:var(--color-indigo-500)] [--checkbox-checked-border:var(--color-indigo-600)]/90",violet:"[--checkbox-check:var(--color-white)] [--checkbox-checked-bg:var(--color-violet-500)] [--checkbox-checked-border:var(--color-violet-600)]/90",purple:"[--checkbox-check:var(--color-white)] [--checkbox-checked-bg:var(--color-purple-500)] [--checkbox-checked-border:var(--color-purple-600)]/90",fuchsia:"[--checkbox-check:var(--color-white)] [--checkbox-checked-bg:var(--color-fuchsia-500)] [--checkbox-checked-border:var(--color-fuchsia-600)]/90",pink:"[--checkbox-check:var(--color-white)] [--checkbox-checked-bg:var(--color-pink-500)] [--checkbox-checked-border:var(--color-pink-600)]/90",rose:"[--checkbox-check:var(--color-white)] [--checkbox-checked-bg:var(--color-rose-500)] [--checkbox-checked-border:var(--color-rose-600)]/90"};function c({color:n="dark/zinc",className:o,...r}){return e.jsx(Ce,{"data-slot":"control",...r,className:m(o,"group inline-flex focus:outline-hidden"),children:e.jsx("span",{className:m([je,ye[n]]),children:e.jsxs("svg",{className:"size-4 stroke-(--checkbox-check) opacity-0 group-data-checked:opacity-100 sm:h-3.5 sm:w-3.5",viewBox:"0 0 14 14",fill:"none",children:[e.jsx("path",{className:"opacity-100 group-data-indeterminate:opacity-0",d:"M3 8L6 11L11 3.5",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{className:"opacity-0 group-data-indeterminate:opacity-100",d:"M3 7H11",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})]})})})}function Le(){return e.jsx(c,{"aria-label":"Allow embedding",name:"allow_embedding"})}const Fe=`import { Checkbox } from "@/features/tailwind-v4/components/ui-kit/checkbox";

export default function Example() {
  return <Checkbox aria-label="Allow embedding" name="allow_embedding" />;
}
`;function De(){return e.jsxs(i,{children:[e.jsx(c,{name:"allow_embedding"}),e.jsx(t,{children:"Allow embedding"})]})}const _e=`import {
  Checkbox,
  CheckboxField,
} from "@/features/tailwind-v4/components/ui-kit/checkbox";
import { Label } from "@/features/tailwind-v4/components/ui-kit/fieldset";

export default function Example() {
  return (
    <CheckboxField>
      <Checkbox name="allow_embedding" />
      <Label>Allow embedding</Label>
    </CheckboxField>
  );
}
`;function Ee(){return e.jsxs(i,{children:[e.jsx(c,{name:"allow_embedding"}),e.jsx(t,{children:"Allow embedding"}),e.jsx(d,{children:"Allow others to embed your event details on their own site."})]})}const Se=`import {
  Checkbox,
  CheckboxField,
} from "@/features/tailwind-v4/components/ui-kit/checkbox";
import {
  Description,
  Label,
} from "@/features/tailwind-v4/components/ui-kit/fieldset";

export default function Example() {
  return (
    <CheckboxField>
      <Checkbox name="allow_embedding" />
      <Label>Allow embedding</Label>
      <Description>
        Allow others to embed your event details on their own site.
      </Description>
    </CheckboxField>
  );
}
`;function $e(){return e.jsxs(_,{className:"flex items-center justify-between gap-4",children:[e.jsx(t,{children:"Allow embedding"}),e.jsx(c,{name:"allow_embedding"})]})}const Ae=`import { Checkbox } from "@/features/tailwind-v4/components/ui-kit/checkbox";
import { Label } from "@/features/tailwind-v4/components/ui-kit/fieldset";
import * as Headless from "@headlessui/react";

export default function Example() {
  return (
    <Headless.Field className="flex items-center justify-between gap-4">
      <Label>Allow embedding</Label>
      <Checkbox name="allow_embedding" />
    </Headless.Field>
  );
}
`;function ze(){return e.jsx(c,{color:"sky",defaultChecked:!0})}const Ge=`import { Checkbox } from "@/features/tailwind-v4/components/ui-kit/checkbox";

export default function Example() {
  return <Checkbox color="sky" defaultChecked />;
}
`;function Re(){return e.jsx(c,{name:"embed",value:"allow"})}const Te=`import { Checkbox } from "@/features/tailwind-v4/components/ui-kit/checkbox";

export default function Example() {
  return <Checkbox name="embed" value="allow" />;
}
`;function We(){return e.jsx(c,{defaultChecked:!0})}const Ne=`import { Checkbox } from "@/features/tailwind-v4/components/ui-kit/checkbox";

export default function Example() {
  return <Checkbox defaultChecked />;
}
`,C=["Show on events page","Allow embedding"];function He(){let[n,o]=b.useState(["Show on events page"]);return e.jsxs(p,{role:"group","aria-label":"Discoverability",children:[e.jsxs(i,{children:[e.jsx(c,{checked:n.length>0,indeterminate:n.length!==C.length,onChange:r=>o(r?C:[])}),e.jsx(t,{children:"Select all"})]}),C.map(r=>e.jsxs(i,{children:[e.jsx(c,{name:r,checked:n.includes(r),onChange:f=>o(k=>f?[...k,r]:k.filter(v=>v!==r))}),e.jsx(t,{children:r})]},r))]})}const Me=`import {
  Checkbox,
  CheckboxField,
  CheckboxGroup,
} from "@/features/tailwind-v4/components/ui-kit/checkbox";
import { Label } from "@/features/tailwind-v4/components/ui-kit/fieldset";
import { useState } from "react";

const options = ["Show on events page", "Allow embedding"];

export default function Example() {
  let [selected, setSelected] = useState(["Show on events page"]);

  return (
    <CheckboxGroup role="group" aria-label="Discoverability">
      <CheckboxField>
        <Checkbox
          checked={selected.length > 0}
          indeterminate={selected.length !== options.length}
          onChange={(checked) => setSelected(checked ? options : [])}
        />
        <Label>Select all</Label>
      </CheckboxField>

      {options.map((option) => (
        <CheckboxField key={option}>
          <Checkbox
            name={option}
            checked={selected.includes(option)}
            onChange={(checked) => {
              return setSelected((pending) => {
                return checked
                  ? [...pending, option]
                  : pending.filter((item) => item !== option);
              });
            }}
          />
          <Label>{option}</Label>
        </CheckboxField>
      ))}
    </CheckboxGroup>
  );
}
`;function Pe(){let[n,o]=b.useState(!0);return e.jsx(c,{checked:n,onChange:o})}const Ie=`import { Checkbox } from "@/features/tailwind-v4/components/ui-kit/checkbox";
import { useState } from "react";

export default function Example() {
  let [checked, setChecked] = useState(true);

  return <Checkbox checked={checked} onChange={setChecked} />;
}
`;function Ke(){return e.jsxs(p,{children:[e.jsxs(i,{children:[e.jsx(c,{name:"show_on_events_page",defaultChecked:!0}),e.jsx(t,{children:"Show on events page"}),e.jsx(d,{children:"Make this event visible on your profile."})]}),e.jsxs(i,{children:[e.jsx(c,{name:"allow_embedding"}),e.jsx(t,{children:"Allow embedding"}),e.jsx(d,{children:"Allow others to embed your event details on their own site."})]})]})}const Be=`import {
  Checkbox,
  CheckboxField,
  CheckboxGroup,
} from "@/features/tailwind-v4/components/ui-kit/checkbox";
import {
  Description,
  Label,
} from "@/features/tailwind-v4/components/ui-kit/fieldset";

export default function Example() {
  return (
    <CheckboxGroup>
      <CheckboxField>
        <Checkbox name="show_on_events_page" defaultChecked />
        <Label>Show on events page</Label>
        <Description>Make this event visible on your profile.</Description>
      </CheckboxField>
      <CheckboxField>
        <Checkbox name="allow_embedding" />
        <Label>Allow embedding</Label>
        <Description>
          Allow others to embed your event details on their own site.
        </Description>
      </CheckboxField>
    </CheckboxGroup>
  );
}
`;function Ve(){return e.jsxs(E,{children:[e.jsx(S,{children:"Discoverability"}),e.jsx($,{children:"Decide where your events can be found across the web."}),e.jsxs(p,{children:[e.jsxs(i,{children:[e.jsx(c,{name:"discoverability",value:"show_on_events_page",defaultChecked:!0}),e.jsx(t,{children:"Show on events page"}),e.jsx(d,{children:"Make this event visible on your profile."})]}),e.jsxs(i,{children:[e.jsx(c,{name:"discoverability",value:"allow_embedding"}),e.jsx(t,{children:"Allow embedding"}),e.jsx(d,{children:"Allow others to embed your event details on their own site."})]})]})]})}const Ue=`import {
  Checkbox,
  CheckboxField,
  CheckboxGroup,
} from "@/features/tailwind-v4/components/ui-kit/checkbox";
import {
  Description,
  Fieldset,
  Label,
  Legend,
} from "@/features/tailwind-v4/components/ui-kit/fieldset";
import { Text } from "@/features/tailwind-v4/components/ui-kit/text";

export default function Example() {
  return (
    <Fieldset>
      <Legend>Discoverability</Legend>
      <Text>Decide where your events can be found across the web.</Text>
      <CheckboxGroup>
        <CheckboxField>
          <Checkbox
            name="discoverability"
            value="show_on_events_page"
            defaultChecked
          />
          <Label>Show on events page</Label>
          <Description>Make this event visible on your profile.</Description>
        </CheckboxField>
        <CheckboxField>
          <Checkbox name="discoverability" value="allow_embedding" />
          <Label>Allow embedding</Label>
          <Description>
            Allow others to embed your event details on their own site.
          </Description>
        </CheckboxField>
      </CheckboxGroup>
    </Fieldset>
  );
}
`;function qe(){return e.jsxs(E,{children:[e.jsx(S,{children:"Discoverability"}),e.jsx($,{children:"Decide where your events can be found across the web."}),e.jsxs(p,{children:[e.jsxs(i,{children:[e.jsx(c,{name:"discoverability",value:"show_on_events_page"}),e.jsx(t,{children:"Show on events page"}),e.jsx(d,{children:"Make this event visible on your profile."})]}),e.jsxs(i,{disabled:!0,children:[e.jsx(c,{name:"discoverability",value:"allow_embedding"}),e.jsx(t,{children:"Allow embedding"}),e.jsx(d,{children:"Allow others to embed your event details on their own site."})]})]})]})}const Oe=`import {
  Checkbox,
  CheckboxField,
  CheckboxGroup,
} from "@/features/tailwind-v4/components/ui-kit/checkbox";
import {
  Description,
  Fieldset,
  Label,
  Legend,
} from "@/features/tailwind-v4/components/ui-kit/fieldset";
import { Text } from "@/features/tailwind-v4/components/ui-kit/text";

export default function Example() {
  return (
    <Fieldset>
      <Legend>Discoverability</Legend>
      <Text>Decide where your events can be found across the web.</Text>
      <CheckboxGroup>
        <CheckboxField>
          <Checkbox name="discoverability" value="show_on_events_page" />
          <Label>Show on events page</Label>
          <Description>Make this event visible on your profile.</Description>
        </CheckboxField>
        <CheckboxField disabled>
          <Checkbox name="discoverability" value="allow_embedding" />
          <Label>Allow embedding</Label>
          <Description>
            Allow others to embed your event details on their own site.
          </Description>
        </CheckboxField>
      </CheckboxGroup>
    </Fieldset>
  );
}
`,ro=()=>{const n=[{id:"01",name:"Basic Example",component:e.jsx(Le,{}),raw:Fe},{id:"02",name:"With Label",component:e.jsx(De,{}),raw:_e},{id:"03",name:"With Description",component:e.jsx(Ee,{}),raw:Se},{id:"04",name:"With Custom Layout",component:e.jsx($e,{}),raw:Ae},{id:"05",name:"With Accent Color",component:e.jsx(ze,{}),raw:Ge},{id:"06",name:"With Custom Value",component:e.jsx(Re,{}),raw:Te},{id:"07",name:"Default Checked State",component:e.jsx(We,{}),raw:Ne},{id:"08",name:"Indeterminate State",component:e.jsx(He,{}),raw:Me},{id:"09",name:"Controlled Component",component:e.jsx(Pe,{}),raw:Ie},{id:"10",name:"Multiple Checkboxes",component:e.jsx(Ke,{}),raw:Be},{id:"11",name:"With Fieldset",component:e.jsx(Ve,{}),raw:Ue},{id:"12",name:"Disabled State",component:e.jsx(qe,{}),raw:Oe}];return e.jsx("div",{className:"space-y-10 pb-20",children:n.map(o=>e.jsxs("section",{className:"border-b border-gray-100 pb-10 last:border-0",children:[e.jsxs("h2",{className:"mb-4 text-lg font-bold text-gray-800",children:[o.id,". ",o.name]}),e.jsx(be,{name:o.name,code:o.raw,children:o.component})]},o.id))})};export{ro as default};
