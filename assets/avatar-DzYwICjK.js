import{j as a}from"./index-BUE_4nSx.js";import{P as i}from"./PreviewWrapper-C5kxKQgy.js";import{A as r,a as n}from"./avatar-CdKU74gH.js";import"./clsx-B-dksMZM.js";import"./button-DGx1EBOd.js";import"./link-gY3vJwZa.js";import"./useFocusRing-DcMgcFf7.js";import"./use-active-press-CdjcnPjf.js";import"./owner-C7ikqkQc.js";import"./render-CNyBWpu3.js";import"./use-slot-BZcd_w4P.js";import"./disabled-1up_um9U.js";function c({user:t}){return a.jsxs(a.Fragment,{children:[a.jsx(r,{className:"size-6",src:t.avatarUrl}),a.jsx(r,{className:"size-8",src:t.avatarUrl}),a.jsx(r,{className:"size-10",src:t.avatarUrl})]})}const l=`import { Avatar } from "@/components/ui-kit/avatar";

export default function Example({ user }) {
  return (
    <>
      <Avatar className="size-6" src={user.avatarUrl} />
      <Avatar className="size-8" src={user.avatarUrl} />
      <Avatar className="size-10" src={user.avatarUrl} />
    </>
  );
}
`;function m(){return a.jsxs(a.Fragment,{children:[a.jsx(r,{initials:"tw",className:"size-6 bg-zinc-900 text-white dark:bg-white dark:text-black"}),a.jsx(r,{initials:"tw",className:"size-8 bg-zinc-900 text-white dark:bg-white dark:text-black"}),a.jsx(r,{initials:"tw",className:"size-10 bg-zinc-900 text-white dark:bg-white dark:text-black"})]})}const o=`import { Avatar } from "@/components/ui-kit/avatar";

export default function Example() {
  return (
    <>
      <Avatar
        initials="tw"
        className="size-6 bg-zinc-900 text-white dark:bg-white dark:text-black"
      />
      <Avatar
        initials="tw"
        className="size-8 bg-zinc-900 text-white dark:bg-white dark:text-black"
      />
      <Avatar
        initials="tw"
        className="size-10 bg-zinc-900 text-white dark:bg-white dark:text-black"
      />
    </>
  );
}
`;function u({user:t}){return a.jsxs(a.Fragment,{children:[a.jsx(r,{src:t.avatarUrl,initials:t.initials,className:"size-6 bg-purple-500 text-white"}),a.jsx(r,{src:t.avatarUrl,initials:t.initials,className:"size-8 bg-purple-500 text-white"}),a.jsx(r,{src:t.avatarUrl,initials:t.initials,className:"size-10 bg-purple-500 text-white"})]})}const p=`import { Avatar } from "@/components/ui-kit/avatar";

export default function Example({ user }) {
  return (
    <>
      <Avatar
        src={user.avatarUrl}
        initials={user.initials}
        className="size-6 bg-purple-500 text-white"
      />
      <Avatar
        src={user.avatarUrl}
        initials={user.initials}
        className="size-8 bg-purple-500 text-white"
      />
      <Avatar
        src={user.avatarUrl}
        initials={user.initials}
        className="size-10 bg-purple-500 text-white"
      />
    </>
  );
}
`;function x({user:t}){return a.jsxs(a.Fragment,{children:[a.jsx(r,{square:!0,className:"size-8",src:t.avatarUrl}),a.jsx(r,{square:!0,initials:t.initials,className:"size-8 bg-zinc-900 text-white dark:bg-white dark:text-black"})]})}const v=`import { Avatar } from "@/components/ui-kit/avatar";

export default function Example({ user }) {
  return (
    <>
      <Avatar square className="size-8" src={user.avatarUrl} />
      <Avatar
        square
        initials={user.initials}
        className="size-8 bg-zinc-900 text-white dark:bg-white dark:text-black"
      />
    </>
  );
}
`;function d({users:t}){return a.jsx("div",{className:"flex items-center justify-center -space-x-2",children:t.map(e=>a.jsx(r,{src:e.avatarUrl,className:"size-8 ring-2 ring-white dark:ring-zinc-900"}))})}const f=`import { Avatar } from "@/components/ui-kit/avatar";

export default function Example({ users }) {
  return (
    <div className="flex items-center justify-center -space-x-2">
      {users.map((user) => (
        <Avatar
          src={user.avatarUrl}
          className="size-8 ring-2 ring-white dark:ring-zinc-900"
        />
      ))}
    </div>
  );
}
`;function h({user:t}){return a.jsxs(a.Fragment,{children:[a.jsx(n,{className:"size-8",src:t.avatarUrl}),a.jsx(n,{square:!0,className:"size-8",src:t.avatarUrl})]})}const w=`import { AvatarButton } from "@/components/ui-kit/avatar";

export default function Example({ user }) {
  return (
    <>
      <AvatarButton className="size-8" src={user.avatarUrl} />
      <AvatarButton square className="size-8" src={user.avatarUrl} />
    </>
  );
}
`;function g({user:t}){return a.jsxs(a.Fragment,{children:[a.jsx(n,{href:t.url,className:"size-8",src:t.avatarUrl}),a.jsx(n,{square:!0,href:t.url,className:"size-8",src:t.avatarUrl})]})}const b=`import { AvatarButton } from "@/components/ui-kit/avatar";

export default function Example({ user }) {
  return (
    <>
      <AvatarButton href={user.url} className="size-8" src={user.avatarUrl} />
      <AvatarButton
        square
        href={user.url}
        className="size-8"
        src={user.avatarUrl}
      />
    </>
  );
}
`,s={name:"Erica",avatarUrl:"https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",initials:"E"},z=[{id:1,name:"User 1",avatarUrl:"https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?w=32&h=32&facepad=2&fit=facearea&auto=format&q=80",initials:"U1"},{id:2,name:"User 2",avatarUrl:"https://images.unsplash.com/photo-1550525811-e5869dd03032?w=32&h=32&facepad=2&fit=facearea&auto=format&q=80",initials:"U2"},{id:3,name:"User 3",avatarUrl:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&facepad=2&fit=facearea&auto=format&q=80",initials:"U3"},{id:4,name:"User 4",avatarUrl:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&facepad=2&fit=facearea&auto=format&q=80",initials:"U4"}],P=()=>{const t=[{id:"01",name:"Basic",component:a.jsx(c,{user:s}),raw:l},{id:"02",name:"With initials",component:a.jsx(m,{}),raw:o},{id:"03",name:"With initials as fallback",component:a.jsx(u,{user:s}),raw:p},{id:"04",name:"Square avatars",component:a.jsx(x,{user:s}),raw:v},{id:"05",name:"Avatar groups",component:a.jsx(d,{users:z}),raw:f},{id:"06",name:"Using as buttons",component:a.jsx(h,{user:s}),raw:w},{id:"07",name:"Using as links",component:a.jsx(g,{user:s}),raw:b}];return a.jsx("div",{className:"space-y-10 pb-20",children:t.map(e=>a.jsxs("section",{className:"border-b border-gray-100 pb-10 last:border-0",children:[a.jsxs("h2",{className:"mb-4 text-lg font-bold text-gray-800",children:[e.id,". ",e.name]}),a.jsx(i,{name:e.name,code:e.raw,children:e.component})]},e.id))})};export{P as default};
