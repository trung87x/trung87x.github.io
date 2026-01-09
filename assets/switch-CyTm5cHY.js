import{j as e,aD as s,r as m}from"./index-CvCVbuS9.js";import{P as p}from"./PreviewWrapper-TzFvRoPZ.js";import{t as b}from"./switch-Q0wxqEeq.js";import{W as l}from"./field-BUH74JGD.js";import{L as r,D as o,F as d,a as h}from"./fieldset-DSTAHszk.js";import{T as w}from"./text-BLPIEcIv.js";import"./use-default-value-Cs7QsSkB.js";import"./use-resolve-button-type-J0J8N5g4.js";import"./form-fields-DfbHTuSb.js";import"./label-CY_Q6YdE.js";import"./bugs-qQ_SbDk4.js";function c({className:n,...t}){return e.jsx("div",{"data-slot":"control",...t,className:s(n,"space-y-3 **:data-[slot=label]:font-normal","has-data-[slot=description]:space-y-6 has-data-[slot=description]:**:data-[slot=label]:font-medium")})}function a({className:n,...t}){return e.jsx(l,{"data-slot":"field",...t,className:s(n,"grid grid-cols-[1fr_auto] items-center gap-x-8 gap-y-1 sm:grid-cols-[1fr_auto]","*:data-[slot=control]:col-start-2 *:data-[slot=control]:self-center","*:data-[slot=label]:col-start-1 *:data-[slot=label]:row-start-1 *:data-[slot=label]:justify-self-start","*:data-[slot=description]:col-start-1 *:data-[slot=description]:row-start-2","has-data-[slot=description]:**:data-[slot=label]:font-medium")})}const u={"dark/zinc":["[--switch-bg-ring:var(--color-zinc-950)]/90 [--switch-bg:var(--color-zinc-900)] dark:[--switch-bg-ring:transparent] dark:[--switch-bg:var(--color-white)]/25","[--switch-ring:var(--color-zinc-950)]/90 [--switch-shadow:var(--color-black)]/10 [--switch:white] dark:[--switch-ring:var(--color-zinc-700)]/90"],"dark/white":["[--switch-bg-ring:var(--color-zinc-950)]/90 [--switch-bg:var(--color-zinc-900)] dark:[--switch-bg-ring:transparent] dark:[--switch-bg:var(--color-white)]","[--switch-ring:var(--color-zinc-950)]/90 [--switch-shadow:var(--color-black)]/10 [--switch:white] dark:[--switch-ring:transparent] dark:[--switch:var(--color-zinc-900)]"],dark:["[--switch-bg-ring:var(--color-zinc-950)]/90 [--switch-bg:var(--color-zinc-900)] dark:[--switch-bg-ring:var(--color-white)]/15","[--switch-ring:var(--color-zinc-950)]/90 [--switch-shadow:var(--color-black)]/10 [--switch:white]"],zinc:["[--switch-bg-ring:var(--color-zinc-700)]/90 [--switch-bg:var(--color-zinc-600)] dark:[--switch-bg-ring:transparent]","[--switch-shadow:var(--color-black)]/10 [--switch:white] [--switch-ring:var(--color-zinc-700)]/90"],white:["[--switch-bg-ring:var(--color-black)]/15 [--switch-bg:white] dark:[--switch-bg-ring:transparent]","[--switch-shadow:var(--color-black)]/10 [--switch-ring:transparent] [--switch:var(--color-zinc-950)]"],red:["[--switch-bg-ring:var(--color-red-700)]/90 [--switch-bg:var(--color-red-600)] dark:[--switch-bg-ring:transparent]","[--switch:white] [--switch-ring:var(--color-red-700)]/90 [--switch-shadow:var(--color-red-900)]/20"],orange:["[--switch-bg-ring:var(--color-orange-600)]/90 [--switch-bg:var(--color-orange-500)] dark:[--switch-bg-ring:transparent]","[--switch:white] [--switch-ring:var(--color-orange-600)]/90 [--switch-shadow:var(--color-orange-900)]/20"],amber:["[--switch-bg-ring:var(--color-amber-500)]/80 [--switch-bg:var(--color-amber-400)] dark:[--switch-bg-ring:transparent]","[--switch-ring:transparent] [--switch-shadow:transparent] [--switch:var(--color-amber-950)]"],yellow:["[--switch-bg-ring:var(--color-yellow-400)]/80 [--switch-bg:var(--color-yellow-300)] dark:[--switch-bg-ring:transparent]","[--switch-ring:transparent] [--switch-shadow:transparent] [--switch:var(--color-yellow-950)]"],lime:["[--switch-bg-ring:var(--color-lime-400)]/80 [--switch-bg:var(--color-lime-300)] dark:[--switch-bg-ring:transparent]","[--switch-ring:transparent] [--switch-shadow:transparent] [--switch:var(--color-lime-950)]"],green:["[--switch-bg-ring:var(--color-green-700)]/90 [--switch-bg:var(--color-green-600)] dark:[--switch-bg-ring:transparent]","[--switch:white] [--switch-ring:var(--color-green-700)]/90 [--switch-shadow:var(--color-green-900)]/20"],emerald:["[--switch-bg-ring:var(--color-emerald-600)]/90 [--switch-bg:var(--color-emerald-500)] dark:[--switch-bg-ring:transparent]","[--switch:white] [--switch-ring:var(--color-emerald-600)]/90 [--switch-shadow:var(--color-emerald-900)]/20"],teal:["[--switch-bg-ring:var(--color-teal-700)]/90 [--switch-bg:var(--color-teal-600)] dark:[--switch-bg-ring:transparent]","[--switch:white] [--switch-ring:var(--color-teal-700)]/90 [--switch-shadow:var(--color-teal-900)]/20"],cyan:["[--switch-bg-ring:var(--color-cyan-400)]/80 [--switch-bg:var(--color-cyan-300)] dark:[--switch-bg-ring:transparent]","[--switch-ring:transparent] [--switch-shadow:transparent] [--switch:var(--color-cyan-950)]"],sky:["[--switch-bg-ring:var(--color-sky-600)]/80 [--switch-bg:var(--color-sky-500)] dark:[--switch-bg-ring:transparent]","[--switch:white] [--switch-ring:var(--color-sky-600)]/80 [--switch-shadow:var(--color-sky-900)]/20"],blue:["[--switch-bg-ring:var(--color-blue-700)]/90 [--switch-bg:var(--color-blue-600)] dark:[--switch-bg-ring:transparent]","[--switch:white] [--switch-ring:var(--color-blue-700)]/90 [--switch-shadow:var(--color-blue-900)]/20"],indigo:["[--switch-bg-ring:var(--color-indigo-600)]/90 [--switch-bg:var(--color-indigo-500)] dark:[--switch-bg-ring:transparent]","[--switch:white] [--switch-ring:var(--color-indigo-600)]/90 [--switch-shadow:var(--color-indigo-900)]/20"],violet:["[--switch-bg-ring:var(--color-violet-600)]/90 [--switch-bg:var(--color-violet-500)] dark:[--switch-bg-ring:transparent]","[--switch:white] [--switch-ring:var(--color-violet-600)]/90 [--switch-shadow:var(--color-violet-900)]/20"],purple:["[--switch-bg-ring:var(--color-purple-600)]/90 [--switch-bg:var(--color-purple-500)] dark:[--switch-bg-ring:transparent]","[--switch:white] [--switch-ring:var(--color-purple-600)]/90 [--switch-shadow:var(--color-purple-900)]/20"],fuchsia:["[--switch-bg-ring:var(--color-fuchsia-600)]/90 [--switch-bg:var(--color-fuchsia-500)] dark:[--switch-bg-ring:transparent]","[--switch:white] [--switch-ring:var(--color-fuchsia-600)]/90 [--switch-shadow:var(--color-fuchsia-900)]/20"],pink:["[--switch-bg-ring:var(--color-pink-600)]/90 [--switch-bg:var(--color-pink-500)] dark:[--switch-bg-ring:transparent]","[--switch:white] [--switch-ring:var(--color-pink-600)]/90 [--switch-shadow:var(--color-pink-900)]/20"],rose:["[--switch-bg-ring:var(--color-rose-600)]/90 [--switch-bg:var(--color-rose-500)] dark:[--switch-bg-ring:transparent]","[--switch:white] [--switch-ring:var(--color-rose-600)]/90 [--switch-shadow:var(--color-rose-900)]/20"]};function i({color:n="dark/zinc",className:t,...g}){return e.jsx(b,{"data-slot":"control",...g,className:s(t,"group relative isolate inline-flex h-6 w-10 cursor-default rounded-full p-[3px] sm:h-5 sm:w-8","transition duration-0 ease-in-out data-changing:duration-200","forced-colors:outline forced-colors:[--switch-bg:Highlight] dark:forced-colors:[--switch-bg:Highlight]","bg-zinc-200 ring-1 ring-black/5 ring-inset dark:bg-white/5 dark:ring-white/15","data-checked:bg-(--switch-bg) data-checked:ring-(--switch-bg-ring) dark:data-checked:bg-(--switch-bg) dark:data-checked:ring-(--switch-bg-ring)","focus:outline-hidden data-focus:outline-2 data-focus:outline-offset-2 data-focus:outline-blue-500","data-hover:ring-black/15 data-hover:data-checked:ring-(--switch-bg-ring)","dark:data-hover:ring-white/25 dark:data-hover:data-checked:ring-(--switch-bg-ring)","data-disabled:bg-zinc-200 data-disabled:opacity-50 data-disabled:data-checked:bg-zinc-200 data-disabled:data-checked:ring-black/5","dark:data-disabled:bg-white/15 dark:data-disabled:data-checked:bg-white/15 dark:data-disabled:data-checked:ring-white/15",u[n]),children:e.jsx("span",{"aria-hidden":"true",className:s("pointer-events-none relative inline-block size-[1.125rem] rounded-full sm:size-3.5","translate-x-0 transition duration-200 ease-in-out","border border-transparent","bg-white ring-1 shadow-sm ring-black/5","group-data-checked:bg-(--switch) group-data-checked:shadow-(--switch-shadow) group-data-checked:ring-(--switch-ring)","group-data-checked:translate-x-4 sm:group-data-checked:translate-x-3","group-data-checked:group-data-disabled:bg-white group-data-checked:group-data-disabled:shadow-sm group-data-checked:group-data-disabled:ring-black/5")})})}function v(){return e.jsx(i,{"aria-label":"Allow embedding",name:"allow_embedding"})}const f=`import { Switch } from "@/features/tailwind-v4/components/ui-kit/switch";

export default function Example() {
  return <Switch aria-label="Allow embedding" name="allow_embedding" />;
}
`;function x(){return e.jsxs(a,{children:[e.jsx(r,{children:"Allow embedding"}),e.jsx(i,{name:"allow_embedding"})]})}const k=`import { Label } from "@/features/tailwind-v4/components/ui-kit/fieldset";
import {
  Switch,
  SwitchField,
} from "@/features/tailwind-v4/components/ui-kit/switch";

export default function Example() {
  return (
    <SwitchField>
      <Label>Allow embedding</Label>
      <Switch name="allow_embedding" />
    </SwitchField>
  );
}
`;function j(){return e.jsxs(a,{children:[e.jsx(r,{children:"Allow embedding"}),e.jsx(o,{children:"Allow others to embed your event details on their own site."}),e.jsx(i,{name:"allow_embedding"})]})}const S=`import {
  Description,
  Label,
} from "@/features/tailwind-v4/components/ui-kit/fieldset";
import {
  Switch,
  SwitchField,
} from "@/features/tailwind-v4/components/ui-kit/switch";

export default function Example() {
  return (
    <SwitchField>
      <Label>Allow embedding</Label>
      <Description>
        Allow others to embed your event details on their own site.
      </Description>
      <Switch name="allow_embedding" />
    </SwitchField>
  );
}
`;function y(){return e.jsxs(l,{className:"flex items-center gap-4",children:[e.jsx(i,{name:"allow_embedding"}),e.jsx(r,{children:"Allow embedding"})]})}const L=`import { Label } from "@/features/tailwind-v4/components/ui-kit/fieldset";
import { Switch } from "@/features/tailwind-v4/components/ui-kit/switch";
import * as Headless from "@headlessui/react";

export default function Example() {
  return (
    <Headless.Field className="flex items-center gap-4">
      <Switch name="allow_embedding" />
      <Label>Allow embedding</Label>
    </Headless.Field>
  );
}
`;function D(){return e.jsx(i,{color:"sky",defaultChecked:!0})}const F=`import { Switch } from "@/features/tailwind-v4/components/ui-kit/switch";

export default function Example() {
  return <Switch color="sky" defaultChecked />;
}
`;function _(){return e.jsx(i,{name:"embed",value:"allow"})}const A=`import { Switch } from "@/features/tailwind-v4/components/ui-kit/switch";

export default function Example() {
  return <Switch name="embed" value="allow" />;
}
`;function C(){return e.jsx(i,{defaultChecked:!0})}const E=`import { Switch } from "@/features/tailwind-v4/components/ui-kit/switch";

export default function Example() {
  return <Switch defaultChecked />;
}
`;function z(){let[n,t]=m.useState(!0);return e.jsx(i,{checked:n,onChange:t})}const R=`import { Switch } from "@/features/tailwind-v4/components/ui-kit/switch";
import { useState } from "react";

export default function Example() {
  let [checked, setChecked] = useState(true);

  return <Switch checked={checked} onChange={setChecked} />;
}
`;function W(){return e.jsxs(c,{children:[e.jsxs(a,{children:[e.jsx(r,{children:"Show on events page"}),e.jsx(o,{children:"Make this event visible on your profile."}),e.jsx(i,{name:"show_on_events_page",defaultChecked:!0})]}),e.jsxs(a,{children:[e.jsx(r,{children:"Allow embedding"}),e.jsx(o,{children:"Allow others to embed your event details on their own site."}),e.jsx(i,{name:"allow_embedding"})]})]})}const G=`import {
  Description,
  Label,
} from "@/features/tailwind-v4/components/ui-kit/fieldset";
import {
  Switch,
  SwitchField,
  SwitchGroup,
} from "@/features/tailwind-v4/components/ui-kit/switch";

export default function Example() {
  return (
    <SwitchGroup>
      <SwitchField>
        <Label>Show on events page</Label>
        <Description>Make this event visible on your profile.</Description>
        <Switch name="show_on_events_page" defaultChecked />
      </SwitchField>
      <SwitchField>
        <Label>Allow embedding</Label>
        <Description>
          Allow others to embed your event details on their own site.
        </Description>
        <Switch name="allow_embedding" />
      </SwitchField>
    </SwitchGroup>
  );
}
`;function N(){return e.jsxs(d,{children:[e.jsx(h,{children:"Discoverability"}),e.jsx(w,{children:"Decide where your events can be found across the web."}),e.jsxs(c,{children:[e.jsxs(a,{children:[e.jsx(r,{children:"Show on events page"}),e.jsx(o,{children:"Make this event visible on your profile."}),e.jsx(i,{name:"show_on_events_page",defaultChecked:!0})]}),e.jsxs(a,{children:[e.jsx(r,{children:"Allow embedding"}),e.jsx(o,{children:"Allow others to embed your event details on their own site."}),e.jsx(i,{name:"allow_embedding"})]})]})]})}const $=`import {
  Description,
  Fieldset,
  Label,
  Legend,
} from "@/features/tailwind-v4/components/ui-kit/fieldset";
import {
  Switch,
  SwitchField,
  SwitchGroup,
} from "@/features/tailwind-v4/components/ui-kit/switch";
import { Text } from "@/features/tailwind-v4/components/ui-kit/text";

export default function Example() {
  return (
    <Fieldset>
      <Legend>Discoverability</Legend>
      <Text>Decide where your events can be found across the web.</Text>
      <SwitchGroup>
        <SwitchField>
          <Label>Show on events page</Label>
          <Description>Make this event visible on your profile.</Description>
          <Switch name="show_on_events_page" defaultChecked />
        </SwitchField>
        <SwitchField>
          <Label>Allow embedding</Label>
          <Description>
            Allow others to embed your event details on their own site.
          </Description>
          <Switch name="allow_embedding" />
        </SwitchField>
      </SwitchGroup>
    </Fieldset>
  );
}
`;function M(){return e.jsxs(d,{children:[e.jsx(h,{children:"Discoverability"}),e.jsx(w,{children:"Decide where your events can be found across the web."}),e.jsxs(c,{children:[e.jsxs(a,{children:[e.jsx(r,{children:"Show on events page"}),e.jsx(o,{children:"Make this event visible on your profile."}),e.jsx(i,{name:"discoverability",value:"show_on_events_page"})]}),e.jsxs(a,{disabled:!0,children:[e.jsx(r,{children:"Allow embedding"}),e.jsx(o,{children:"Allow others to embed your event details on their own site."}),e.jsx(i,{name:"discoverability",value:"allow_embedding"})]})]})]})}const T=`import {
  Description,
  Fieldset,
  Label,
  Legend,
} from "@/features/tailwind-v4/components/ui-kit/fieldset";
import {
  Switch,
  SwitchField,
  SwitchGroup,
} from "@/features/tailwind-v4/components/ui-kit/switch";
import { Text } from "@/features/tailwind-v4/components/ui-kit/text";

export default function Example() {
  return (
    <Fieldset>
      <Legend>Discoverability</Legend>
      <Text>Decide where your events can be found across the web.</Text>
      <SwitchGroup>
        <SwitchField>
          <Label>Show on events page</Label>
          <Description>Make this event visible on your profile.</Description>
          <Switch name="discoverability" value="show_on_events_page" />
        </SwitchField>
        <SwitchField disabled>
          <Label>Allow embedding</Label>
          <Description>
            Allow others to embed your event details on their own site.
          </Description>
          <Switch name="discoverability" value="allow_embedding" />
        </SwitchField>
      </SwitchGroup>
    </Fieldset>
  );
}
`,X=()=>{const n=[{id:"01",name:"Basic",component:e.jsx(v,{}),raw:f},{id:"02",name:"With Label",component:e.jsx(x,{}),raw:k},{id:"03",name:"With Description",component:e.jsx(j,{}),raw:S},{id:"04",name:"With Custom Layout",component:e.jsx(y,{}),raw:L},{id:"05",name:"With Accent Color",component:e.jsx(D,{}),raw:F},{id:"06",name:"With Custom Value",component:e.jsx(_,{}),raw:A},{id:"07",name:"Default Checked State",component:e.jsx(C,{}),raw:E},{id:"08",name:"Controlled Component",component:e.jsx(z,{}),raw:R},{id:"09",name:"Multiple Switches",component:e.jsx(W,{}),raw:G},{id:"10",name:"With Fieldset",component:e.jsx(N,{}),raw:$},{id:"11",name:"Disabled State",component:e.jsx(M,{}),raw:T}];return e.jsx("div",{className:"space-y-10 pb-20",children:n.map(t=>e.jsxs("section",{className:"border-b border-gray-100 pb-10 last:border-0",children:[e.jsxs("h2",{className:"mb-4 text-lg font-bold text-gray-800",children:[t.id,". ",t.name]}),e.jsx(p,{name:t.name,code:t.raw,children:e.jsx("div",{className:"flex justify-center py-6",children:t.component})})]},t.id))})};export{X as default};
