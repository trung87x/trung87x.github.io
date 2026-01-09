import{r as c,j as n}from"./index-CvCVbuS9.js";import{P as x}from"./PreviewWrapper-TzFvRoPZ.js";import{D as t,a as d,b as i,c as o,d as h,e as w,f as j,g as s,h as D,i as u,j as I}from"./dropdown-CWgsCawx.js";import{F as p}from"./ChevronDownIcon-DVV5oLHi.js";import{F as v}from"./ChevronUpIcon-DXNbrID8.js";import{F as b,a as g}from"./UserIcon-CsK4E5KW.js";import{F as k}from"./Cog8ToothIcon-B_FHwQsL.js";import{F as M}from"./EllipsisHorizontalIcon-906JYacV.js";import{a as C}from"./avatar-D6f6JjSo.js";import{F as B}from"./ChevronUpDownIcon-CsVx418E.js";import{f as E}from"./menu-DqpGavi0.js";import"./label-CY_Q6YdE.js";import"./floating-CjydGm1Z.js";import"./element-movement-BT6A7GGi.js";import"./bugs-qQ_SbDk4.js";import"./use-resolve-button-type-J0J8N5g4.js";import"./use-text-value-CB9rzUUM.js";import"./use-tree-walker-_f7mgbza.js";function O({title:e,titleId:r,...a},m){return c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:m,"aria-labelledby":r},a),e?c.createElement("title",{id:r},e):null,c.createElement("path",{fillRule:"evenodd",d:"M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0ZM9 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6.75 8a.75.75 0 0 0 0 1.5h.75v1.75a.75.75 0 0 0 1.5 0v-2.5A.75.75 0 0 0 8.25 8h-1.5Z",clipRule:"evenodd"}))}const R=c.forwardRef(O);function S({title:e,titleId:r,...a},m){return c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:m,"aria-labelledby":r},a),e?c.createElement("title",{id:r},e):null,c.createElement("path",{d:"M14.438 10.148c.19-.425-.321-.787-.748-.601A5.5 5.5 0 0 1 6.453 2.31c.186-.427-.176-.938-.6-.748a6.501 6.501 0 1 0 8.585 8.586Z"}))}const N=c.forwardRef(S);function y(){function e(){confirm("Are you sure you want to delete this user?")}return n.jsxs(t,{children:[n.jsxs(d,{outline:!0,children:["Options",n.jsx(p,{})]}),n.jsxs(i,{children:[n.jsx(o,{href:"/users/1",children:"View"}),n.jsx(o,{href:"/users/1/edit",children:"Edit"}),n.jsx(o,{onClick:()=>e(),children:"Delete"})]})]})}const F=`import {
  Dropdown,
  DropdownButton,
  DropdownItem,
  DropdownMenu,
} from "@/features/tailwind-v4/components/ui-kit/dropdown";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

export default function Example() {
  function deleteUser() {
    if (confirm("Are you sure you want to delete this user?")) {
      // ...
    }
  }

  return (
    <Dropdown>
      <DropdownButton outline>
        Options
        <ChevronDownIcon />
      </DropdownButton>
      <DropdownMenu>
        <DropdownItem href="/users/1">View</DropdownItem>
        <DropdownItem href="/users/1/edit">Edit</DropdownItem>
        <DropdownItem onClick={() => deleteUser()}>Delete</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
`;function U(){return n.jsxs(t,{children:[n.jsxs(d,{color:"cyan",children:["Options",n.jsx(p,{})]}),n.jsxs(i,{children:[n.jsx(o,{href:"#",children:"View"}),n.jsx(o,{href:"#",children:"Edit"}),n.jsx(o,{href:"#",children:"Export as CSV…"})]})]})}const z=`import {
  Dropdown,
  DropdownButton,
  DropdownItem,
  DropdownMenu,
} from "@/features/tailwind-v4/components/ui-kit/dropdown";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

export default function Example() {
  return (
    <Dropdown>
      <DropdownButton color="cyan">
        Options
        <ChevronDownIcon />
      </DropdownButton>
      <DropdownMenu>
        <DropdownItem href="#">View</DropdownItem>
        <DropdownItem href="#">Edit</DropdownItem>
        <DropdownItem href="#">Export as CSV&hellip;</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
`;function A(){return n.jsxs(t,{children:[n.jsxs(d,{outline:!0,children:["Options",n.jsx(v,{})]}),n.jsxs(i,{anchor:"top start",children:[n.jsx(o,{href:"#",children:"View"}),n.jsx(o,{href:"#",children:"Edit"}),n.jsx(o,{href:"#",children:"Export as CSV…"})]})]})}const L=`import {
  Dropdown,
  DropdownButton,
  DropdownItem,
  DropdownMenu,
} from "@/features/tailwind-v4/components/ui-kit/dropdown";
import { ChevronUpIcon } from "@heroicons/react/16/solid";

export default function Example() {
  return (
    <Dropdown>
      <DropdownButton outline>
        Options
        <ChevronUpIcon />
      </DropdownButton>
      <DropdownMenu anchor="top start">
        <DropdownItem href="#">View</DropdownItem>
        <DropdownItem href="#">Edit</DropdownItem>
        <DropdownItem href="#">Export as CSV&hellip;</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
`;function $({url:e,renameFile:r,deleteFile:a}){return n.jsxs(t,{children:[n.jsxs(d,{outline:!0,children:["Options",n.jsx(p,{})]}),n.jsxs(i,{children:[n.jsx(o,{href:e,children:"Open"}),n.jsx(o,{onClick:()=>r(),disabled:!0,children:"Rename"}),n.jsx(o,{onClick:()=>a(),children:"Delete"})]})]})}const W=`import {
  Dropdown,
  DropdownButton,
  DropdownItem,
  DropdownMenu,
} from "@/features/tailwind-v4/components/ui-kit/dropdown";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

export default function Example({ url, renameFile, deleteFile }) {
  return (
    <Dropdown>
      <DropdownButton outline>
        Options
        <ChevronDownIcon />
      </DropdownButton>
      <DropdownMenu>
        <DropdownItem href={url}>Open</DropdownItem>
        <DropdownItem onClick={() => renameFile()} disabled>
          Rename
        </DropdownItem>
        <DropdownItem onClick={() => deleteFile()}>Delete</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
`;function H(){return n.jsxs(t,{children:[n.jsxs(d,{outline:!0,children:["Options",n.jsx(p,{})]}),n.jsxs(i,{children:[n.jsxs(h,{"aria-label":"Account",children:[n.jsx(o,{href:"/account",children:"Account"}),n.jsx(o,{href:"/notifications",children:"Notifications"}),n.jsx(o,{href:"/billing",children:"Billing"})]}),n.jsx(w,{}),n.jsxs(h,{children:[n.jsx(j,{children:"My events"}),n.jsx(o,{href:"/upcoming-events",children:"Upcoming events"}),n.jsx(o,{href:"/past-events",children:"Past events"})]})]})]})}const V=`import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownHeading,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
} from "@/features/tailwind-v4/components/ui-kit/dropdown";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

export default function Example() {
  return (
    <Dropdown>
      <DropdownButton outline>
        Options
        <ChevronDownIcon />
      </DropdownButton>
      <DropdownMenu>
        <DropdownSection aria-label="Account">
          <DropdownItem href="/account">Account</DropdownItem>
          <DropdownItem href="/notifications">Notifications</DropdownItem>
          <DropdownItem href="/billing">Billing</DropdownItem>
        </DropdownSection>
        <DropdownDivider />
        <DropdownSection>
          <DropdownHeading>My events</DropdownHeading>
          <DropdownItem href="/upcoming-events">Upcoming events</DropdownItem>
          <DropdownItem href="/past-events">Past events</DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
}
`;function T({url:e,renameFile:r,deleteFile:a}){return n.jsxs(t,{children:[n.jsxs(d,{outline:!0,children:["Options",n.jsx(p,{})]}),n.jsxs(i,{children:[n.jsxs(o,{href:e,target:"_blank",children:[n.jsx(s,{children:"Open"}),n.jsx(D,{children:"Open the file in a new tab."})]}),n.jsxs(o,{onClick:()=>r(),children:[n.jsx(s,{children:"Rename"}),n.jsx(D,{children:"Rename the file."})]}),n.jsxs(o,{onClick:()=>a(),children:[n.jsx(s,{children:"Delete"}),n.jsx(D,{children:"Move the file to the trash."})]})]})]})}const P=`import {
  Dropdown,
  DropdownButton,
  DropdownDescription,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from "@/features/tailwind-v4/components/ui-kit/dropdown";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

export default function Example({ url, renameFile, deleteFile }) {
  return (
    <Dropdown>
      <DropdownButton outline>
        Options
        <ChevronDownIcon />
      </DropdownButton>
      <DropdownMenu>
        <DropdownItem href={url} target="_blank">
          <DropdownLabel>Open</DropdownLabel>
          <DropdownDescription>Open the file in a new tab.</DropdownDescription>
        </DropdownItem>
        <DropdownItem onClick={() => renameFile()}>
          <DropdownLabel>Rename</DropdownLabel>
          <DropdownDescription>Rename the file.</DropdownDescription>
        </DropdownItem>
        <DropdownItem onClick={() => deleteFile()}>
          <DropdownLabel>Delete</DropdownLabel>
          <DropdownDescription>Move the file to the trash.</DropdownDescription>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
`;function Z(){return n.jsxs(t,{children:[n.jsxs(d,{outline:!0,children:["Options",n.jsx(p,{})]}),n.jsxs(i,{anchor:"bottom",children:[n.jsxs(o,{href:"#",children:[n.jsx(b,{}),n.jsx(s,{children:"Account"})]}),n.jsxs(o,{href:"#",children:[n.jsx(k,{}),n.jsx(s,{children:"Settings"})]}),n.jsxs(o,{href:"#",children:[n.jsx(R,{}),n.jsx(s,{children:"Help center"})]}),n.jsx(w,{}),n.jsxs(o,{href:"#",children:[n.jsx(N,{}),n.jsx(s,{children:"Dark mode"})]}),n.jsx(w,{}),n.jsxs(o,{href:"#",children:[n.jsx(g,{}),n.jsx(s,{children:"Sign out"})]})]})]})}const _=`import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from "@/features/tailwind-v4/components/ui-kit/dropdown";
import {
  ArrowRightStartOnRectangleIcon,
  ChevronDownIcon,
  Cog8ToothIcon,
  InformationCircleIcon,
  MoonIcon,
  UserIcon,
} from "@heroicons/react/16/solid";

export default function Example() {
  return (
    <Dropdown>
      <DropdownButton outline>
        Options
        <ChevronDownIcon />
      </DropdownButton>
      <DropdownMenu anchor="bottom">
        <DropdownItem href="#">
          <UserIcon />
          <DropdownLabel>Account</DropdownLabel>
        </DropdownItem>
        <DropdownItem href="#">
          <Cog8ToothIcon />
          <DropdownLabel>Settings</DropdownLabel>
        </DropdownItem>
        <DropdownItem href="#">
          <InformationCircleIcon />
          <DropdownLabel>Help center</DropdownLabel>
        </DropdownItem>
        <DropdownDivider />
        <DropdownItem href="#">
          <MoonIcon />
          <DropdownLabel>Dark mode</DropdownLabel>
        </DropdownItem>
        <DropdownDivider />
        <DropdownItem href="#">
          <ArrowRightStartOnRectangleIcon />
          <DropdownLabel>Sign out</DropdownLabel>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
`;function q({url:e,renameFile:r,deleteFile:a}){return n.jsxs(t,{children:[n.jsxs(d,{outline:!0,children:["Options",n.jsx(p,{})]}),n.jsxs(i,{anchor:"bottom start",children:[n.jsxs(o,{href:e,children:[n.jsx(s,{children:"Open"}),n.jsx(u,{keys:"⌘O"})]}),n.jsxs(o,{onClick:()=>r(),children:[n.jsx(s,{children:"Rename"}),n.jsx(u,{keys:"⌘R"})]}),n.jsxs(o,{onClick:()=>a(),children:[n.jsx(s,{children:"Delete"}),n.jsx(u,{keys:"⇧⌘⌫"})]})]})]})}const K=`import {
  Dropdown,
  DropdownButton,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
  DropdownShortcut,
} from "@/features/tailwind-v4/components/ui-kit/dropdown";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

export default function Example({ url, renameFile, deleteFile }) {
  return (
    <Dropdown>
      <DropdownButton outline>
        Options
        <ChevronDownIcon />
      </DropdownButton>
      <DropdownMenu anchor="bottom start">
        <DropdownItem href={url}>
          <DropdownLabel>Open</DropdownLabel>
          <DropdownShortcut keys="⌘O" />
        </DropdownItem>
        <DropdownItem onClick={() => renameFile()}>
          <DropdownLabel>Rename</DropdownLabel>
          <DropdownShortcut keys="⌘R" />
        </DropdownItem>
        <DropdownItem onClick={() => deleteFile()}>
          <DropdownLabel>Delete</DropdownLabel>
          <DropdownShortcut keys="⇧⌘⌫" />
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
`;function Q({signOut:e}){return n.jsxs(t,{children:[n.jsxs(d,{outline:!0,children:["Options",n.jsx(p,{})]}),n.jsxs(i,{children:[n.jsx(I,{children:n.jsxs("div",{className:"pr-6",children:[n.jsx("div",{className:"text-xs text-zinc-500 dark:text-zinc-400",children:"Signed in as Tom Cook"}),n.jsx("div",{className:"text-sm/7 font-semibold text-zinc-800 dark:text-white",children:"tom@example.com"})]})}),n.jsx(w,{}),n.jsx(o,{href:"/my-profile",children:"My profile"}),n.jsx(o,{href:"/notifications",children:"Notifications"}),n.jsx(o,{href:"/security",children:"Security"}),n.jsx(o,{href:"/billing",children:"Billing"}),n.jsx(o,{onClick:()=>e(),children:"Sign out"})]})]})}const G=`import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  DropdownMenu,
} from "@/features/tailwind-v4/components/ui-kit/dropdown";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

export default function Example({ signOut }) {
  return (
    <Dropdown>
      <DropdownButton outline>
        Options
        <ChevronDownIcon />
      </DropdownButton>
      <DropdownMenu>
        <DropdownHeader>
          <div className="pr-6">
            <div className="text-xs text-zinc-500 dark:text-zinc-400">
              Signed in as Tom Cook
            </div>
            <div className="text-sm/7 font-semibold text-zinc-800 dark:text-white">
              tom@example.com
            </div>
          </div>
        </DropdownHeader>
        <DropdownDivider />
        <DropdownItem href="/my-profile">My profile</DropdownItem>
        <DropdownItem href="/notifications">Notifications</DropdownItem>
        <DropdownItem href="/security">Security</DropdownItem>
        <DropdownItem href="/billing">Billing</DropdownItem>
        <DropdownItem onClick={() => signOut()}>Sign out</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
`;function J({deleteUser:e}){return n.jsxs(t,{children:[n.jsxs(d,{outline:!0,disabled:!0,children:["Options",n.jsx(p,{})]}),n.jsxs(i,{children:[n.jsx(o,{href:"/users/1",children:"View"}),n.jsx(o,{href:"/users/1/edit",children:"Edit"}),n.jsx(o,{onClick:()=>e(),children:"Delete"})]})]})}const X=`import {
  Dropdown,
  DropdownButton,
  DropdownItem,
  DropdownMenu,
} from "@/features/tailwind-v4/components/ui-kit/dropdown";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

export default function Example({ deleteUser }) {
  return (
    <Dropdown>
      <DropdownButton outline disabled>
        Options
        <ChevronDownIcon />
      </DropdownButton>
      <DropdownMenu>
        <DropdownItem href="/users/1">View</DropdownItem>
        <DropdownItem href="/users/1/edit">Edit</DropdownItem>
        <DropdownItem onClick={() => deleteUser()}>Delete</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
`;function Y({deleteUser:e}){return n.jsxs(t,{children:[n.jsx(d,{plain:!0,"aria-label":"More options",children:n.jsx(M,{})}),n.jsxs(i,{children:[n.jsx(o,{href:"/users/1",children:"View"}),n.jsx(o,{href:"/users/1/edit",children:"Edit"}),n.jsx(o,{onClick:()=>e(),children:"Delete"})]})]})}const nn=`import {
  Dropdown,
  DropdownButton,
  DropdownItem,
  DropdownMenu,
} from "@/features/tailwind-v4/components/ui-kit/dropdown";
import { EllipsisHorizontalIcon } from "@heroicons/react/16/solid";

export default function Example({ deleteUser }) {
  return (
    <Dropdown>
      <DropdownButton plain aria-label="More options">
        <EllipsisHorizontalIcon />
      </DropdownButton>
      <DropdownMenu>
        <DropdownItem href="/users/1">View</DropdownItem>
        <DropdownItem href="/users/1/edit">Edit</DropdownItem>
        <DropdownItem onClick={() => deleteUser()}>Delete</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
`;function on({currentUser:e,signOut:r}){return n.jsxs(t,{children:[n.jsx(d,{className:"size-8",as:C,src:e.avatarUrl,"aria-label":"Account options"}),n.jsxs(i,{placement:"bottom",children:[n.jsx(o,{href:"/profile",children:"My profile"}),n.jsx(o,{href:"/settings",children:"Settings"}),n.jsx(w,{}),n.jsx(o,{onClick:()=>r(),children:"Sign out"})]})]})}const en=`import { AvatarButton } from "@/features/tailwind-v4/components/ui-kit/avatar";
import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownItem,
  DropdownMenu,
} from "@/features/tailwind-v4/components/ui-kit/dropdown";

export default function Example({ currentUser, signOut }) {
  return (
    <Dropdown>
      <DropdownButton
        className="size-8"
        as={AvatarButton}
        src={currentUser.avatarUrl}
        aria-label="Account options"
      />
      <DropdownMenu placement="bottom">
        <DropdownItem href="/profile">My profile</DropdownItem>
        <DropdownItem href="/settings">Settings</DropdownItem>
        <DropdownDivider />
        <DropdownItem onClick={() => signOut()}>Sign out</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
`;function rn({currentUser:e,signOut:r}){return n.jsxs(t,{children:[n.jsxs(E,{className:"flex w-48 items-center gap-3 rounded-xl border border-transparent p-1 data-active:border-zinc-200 data-hover:border-zinc-200 dark:data-active:border-zinc-700 dark:data-hover:border-zinc-700","aria-label":"Account options",children:[n.jsx("img",{className:"size-10 rounded-lg",src:e.avatarUrl,alt:""}),n.jsxs("span",{className:"block text-left",children:[n.jsx("span",{className:"block text-sm/5 font-medium",children:e.name}),n.jsx("span",{className:"block text-xs/5 text-zinc-500",children:e.role})]}),n.jsx(B,{className:"mr-1 ml-auto size-4 shrink-0 stroke-zinc-400"})]}),n.jsxs(i,{className:"min-w-(--button-width)",children:[n.jsx(o,{href:"/profile",children:"My profile"}),n.jsx(o,{href:"/settings",children:"Settings"}),n.jsx(w,{}),n.jsx(o,{onClick:()=>r(),children:"Sign out"})]})]})}const tn=`import {
  Dropdown,
  DropdownDivider,
  DropdownItem,
  DropdownMenu,
} from "@/features/tailwind-v4/components/ui-kit/dropdown";
import * as Headless from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/16/solid";

export default function Example({ currentUser, signOut }) {
  return (
    <Dropdown>
      <Headless.MenuButton
        className="flex w-48 items-center gap-3 rounded-xl border border-transparent p-1 data-active:border-zinc-200 data-hover:border-zinc-200 dark:data-active:border-zinc-700 dark:data-hover:border-zinc-700"
        aria-label="Account options"
      >
        <img
          className="size-10 rounded-lg"
          src={currentUser.avatarUrl}
          alt=""
        />
        <span className="block text-left">
          <span className="block text-sm/5 font-medium">
            {currentUser.name}
          </span>
          <span className="block text-xs/5 text-zinc-500">
            {currentUser.role}
          </span>
        </span>
        <ChevronUpDownIcon className="mr-1 ml-auto size-4 shrink-0 stroke-zinc-400" />
      </Headless.MenuButton>
      <DropdownMenu className="min-w-(--button-width)">
        <DropdownItem href="/profile">My profile</DropdownItem>
        <DropdownItem href="/settings">Settings</DropdownItem>
        <DropdownDivider />
        <DropdownItem onClick={() => signOut()}>Sign out</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
`;function dn(){return n.jsxs(t,{children:[n.jsxs(d,{outline:!0,children:["Options",n.jsx(p,{})]}),n.jsxs(i,{className:"min-w-48",children:[n.jsx(o,{href:"/account",children:"Account"}),n.jsx(o,{href:"/notifications",children:"Notifications"}),n.jsx(o,{href:"/billing",children:"Billing"})]})]})}const sn=`import {
  Dropdown,
  DropdownButton,
  DropdownItem,
  DropdownMenu,
} from "@/features/tailwind-v4/components/ui-kit/dropdown";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

export default function Example() {
  return (
    <Dropdown>
      <DropdownButton outline>
        Options
        <ChevronDownIcon />
      </DropdownButton>
      <DropdownMenu className="min-w-48">
        <DropdownItem href="/account">Account</DropdownItem>
        <DropdownItem href="/notifications">Notifications</DropdownItem>
        <DropdownItem href="/billing">Billing</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
`,f={name:"Đinh Quang Trung",avatarUrl:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"Administrator"},l={url:"https://google.com",renameFile:()=>alert("Rename!"),deleteFile:()=>alert("Delete!"),signOut:()=>alert("Signed out!"),deleteUser:()=>alert("User Deleted!")},Cn=()=>{const e=[{id:"01",name:"Basic",component:n.jsx(y,{}),raw:F},{id:"02",name:"Button Style",component:n.jsx(U,{}),raw:z},{id:"03",name:"Menu Placement",component:n.jsx(A,{}),raw:L},{id:"04",name:"With Disabled Items",component:n.jsx($,{...l}),raw:W},{id:"05",name:"With Sections",component:n.jsx(H,{}),raw:V},{id:"06",name:"With Descriptions",component:n.jsx(T,{...l}),raw:P},{id:"07",name:"With Icons",component:n.jsx(Z,{}),raw:_},{id:"08",name:"With Keyboard Shortcuts",component:n.jsx(q,{...l}),raw:K},{id:"09",name:"With Header",component:n.jsx(Q,{...l}),raw:G},{id:"10",name:"With Disabled Button",component:n.jsx(J,{...l}),raw:X},{id:"11",name:"With Icon Trigger",component:n.jsx(Y,{...l}),raw:nn},{id:"12",name:"With Avatar Trigger",component:n.jsx(on,{currentUser:f,...l}),raw:en},{id:"13",name:"With Custom Trigger",component:n.jsx(rn,{currentUser:f,...l}),raw:tn},{id:"14",name:"With Custom Menu Width",component:n.jsx(dn,{}),raw:sn}];return n.jsx("div",{className:"space-y-10 pb-20",children:e.map(r=>n.jsxs("section",{className:"border-b border-gray-100 pb-10 last:border-0",children:[n.jsxs("h2",{className:"mb-4 text-lg font-bold text-gray-800",children:[r.id,". ",r.name]}),n.jsx(x,{name:r.name,code:r.raw,children:n.jsx("div",{className:"flex min-h-[200px] justify-center pt-10",children:r.component})})]},r.id))})};export{Cn as default};
