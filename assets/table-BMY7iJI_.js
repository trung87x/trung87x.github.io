import{j as e,r as b,aD as x,aF as P,aE as w}from"./index-CvCVbuS9.js";import{P as k}from"./PreviewWrapper-TzFvRoPZ.js";import{A as B}from"./avatar-D6f6JjSo.js";import{B as N}from"./badge-BVGrNEDL.js";import{P as D,a as E,b as z,c as u,d as A,e as I}from"./pagination-DIG9ZXGh.js";import{D as M,a as W,b as O,c as f}from"./dropdown-CWgsCawx.js";import{F as S}from"./EllipsisHorizontalIcon-906JYacV.js";import{D as G,a as L,b as U,c as $,d as F}from"./dialog-Sf_lVmqP.js";import"./menu-DqpGavi0.js";import"./floating-CjydGm1Z.js";import"./element-movement-BT6A7GGi.js";import"./bugs-qQ_SbDk4.js";import"./use-resolve-button-type-J0J8N5g4.js";import"./use-text-value-CB9rzUUM.js";import"./use-tree-walker-_f7mgbza.js";import"./label-CY_Q6YdE.js";import"./text-BLPIEcIv.js";const p=b.createContext({bleed:!1,dense:!1,grid:!1,striped:!1});function t({bleed:s=!1,dense:a=!1,grid:c=!1,striped:i=!1,className:h,children:T,...g}){return e.jsx(p.Provider,{value:{bleed:s,dense:a,grid:c,striped:i},children:e.jsx("div",{className:"flow-root",children:e.jsx("div",{...g,className:x(h,"-mx-(--gutter) overflow-x-auto whitespace-nowrap"),children:e.jsx("div",{className:x("inline-block min-w-full align-middle",!s&&"sm:px-(--gutter)"),children:e.jsx("table",{className:"min-w-full text-left text-sm/6 text-zinc-950 dark:text-white",children:T})})})})})}function o({className:s,...a}){return e.jsx("thead",{...a,className:x(s,"text-zinc-500 dark:text-zinc-400")})}function d(s){return e.jsx("tbody",{...s})}const H=b.createContext({href:void 0,target:void 0,title:void 0});function r({href:s,target:a,title:c,className:i,...h}){let{striped:T}=b.useContext(p);return e.jsx(H.Provider,{value:{href:s,target:a,title:c},children:e.jsx("tr",{...h,className:x(i,s&&"has-[[data-row-link][data-focus]]:outline-2 has-[[data-row-link][data-focus]]:-outline-offset-2 has-[[data-row-link][data-focus]]:outline-blue-500 dark:focus-within:bg-white/[2.5%]",T&&"even:bg-zinc-950/[2.5%] dark:even:bg-white/[2.5%]",s&&T&&"hover:bg-zinc-950/5 dark:hover:bg-white/5",s&&!T&&"hover:bg-zinc-950/[2.5%] dark:hover:bg-white/[2.5%]")})})}function n({className:s,...a}){let{bleed:c,grid:i}=b.useContext(p);return e.jsx("th",{...a,className:x(s,"border-b border-b-zinc-950/10 px-4 py-2 font-medium first:pl-(--gutter,--spacing(2)) last:pr-(--gutter,--spacing(2)) dark:border-b-white/10",i&&"border-l border-l-zinc-950/5 first:border-l-0 dark:border-l-white/5",!c&&"sm:first:pl-1 sm:last:pr-1")})}function l({className:s,children:a,...c}){let{bleed:i,dense:h,grid:T,striped:g}=b.useContext(p),{href:j,target:C,title:R}=b.useContext(H),[v,y]=b.useState(null);return e.jsxs("td",{ref:j?y:void 0,...c,className:x(s,"relative px-4 first:pl-(--gutter,--spacing(2)) last:pr-(--gutter,--spacing(2))",!g&&"border-b border-zinc-950/5 dark:border-white/5",T&&"border-l border-l-zinc-950/5 first:border-l-0 dark:border-l-white/5",h?"py-2.5":"py-4",!i&&"sm:first:pl-1 sm:last:pr-1"),children:[j&&e.jsx(P,{"data-row-link":!0,href:j,target:C,"aria-label":R,tabIndex:v?.previousElementSibling===null?0:-1,className:"absolute inset-0 focus:outline-hidden"}),a]})}function q({users:s}){return e.jsxs(t,{children:[e.jsx(o,{children:e.jsxs(r,{children:[e.jsx(n,{children:"Name"}),e.jsx(n,{children:"Email"}),e.jsx(n,{children:"Role"})]})}),e.jsx(d,{children:s.map(a=>e.jsxs(r,{children:[e.jsx(l,{className:"font-medium",children:a.name}),e.jsx(l,{children:a.email}),e.jsx(l,{className:"text-zinc-500",children:a.access})]},a.handle))})]})}const V=`import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/features/tailwind-v4/components/ui-kit/table";

export default function Example({ users }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeader>Name</TableHeader>
          <TableHeader>Email</TableHeader>
          <TableHeader>Role</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.handle}>
            <TableCell className="font-medium">{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell className="text-zinc-500">{user.access}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
`;function Q({users:s}){return e.jsxs(t,{className:"[--gutter:--spacing(6)] sm:[--gutter:--spacing(8)]",children:[e.jsx(o,{children:e.jsxs(r,{children:[e.jsx(n,{children:"Name"}),e.jsx(n,{children:"Handle"}),e.jsx(n,{children:"Role"}),e.jsx(n,{children:"Email"}),e.jsx(n,{children:"Access"})]})}),e.jsx(d,{children:s.map(a=>e.jsxs(r,{children:[e.jsx(l,{className:"font-medium",children:a.name}),e.jsxs(l,{children:["@",a.handle]}),e.jsx(l,{children:a.role}),e.jsx(l,{children:a.email}),e.jsx(l,{className:"text-zinc-500",children:a.access})]},a.handle))})]})}const J=`import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/features/tailwind-v4/components/ui-kit/table";

export default function Example({ users }) {
  return (
    <Table className="[--gutter:--spacing(6)] sm:[--gutter:--spacing(8)]">
      <TableHead>
        <TableRow>
          <TableHeader>Name</TableHeader>
          <TableHeader>Handle</TableHeader>
          <TableHeader>Role</TableHeader>
          <TableHeader>Email</TableHeader>
          <TableHeader>Access</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.handle}>
            <TableCell className="font-medium">{user.name}</TableCell>
            <TableCell>@{user.handle}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell className="text-zinc-500">{user.access}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
`;function K({users:s}){return e.jsxs(t,{bleed:!0,className:"[--gutter:--spacing(6)] sm:[--gutter:--spacing(8)]",children:[e.jsx(o,{children:e.jsxs(r,{children:[e.jsx(n,{children:"Name"}),e.jsx(n,{children:"Email"}),e.jsx(n,{children:"Role"})]})}),e.jsx(d,{children:s.map(a=>e.jsxs(r,{children:[e.jsx(l,{className:"font-medium",children:a.name}),e.jsx(l,{children:a.email}),e.jsx(l,{className:"text-zinc-500",children:a.access})]},a.handle))})]})}const X=`import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/features/tailwind-v4/components/ui-kit/table";

export default function Example({ users }) {
  return (
    <Table bleed className="[--gutter:--spacing(6)] sm:[--gutter:--spacing(8)]">
      <TableHead>
        <TableRow>
          <TableHeader>Name</TableHeader>
          <TableHeader>Email</TableHeader>
          <TableHeader>Role</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.handle}>
            <TableCell className="font-medium">{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell className="text-zinc-500">{user.access}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
`;function Y({users:s}){return e.jsxs(t,{className:"[--gutter:--spacing(6)] sm:[--gutter:--spacing(8)]",children:[e.jsx(o,{children:e.jsxs(r,{children:[e.jsx(n,{children:"Name"}),e.jsx(n,{children:"Email"}),e.jsx(n,{children:"Role"})]})}),e.jsx(d,{children:s.map(a=>e.jsxs(r,{href:a.url,children:[e.jsx(l,{className:"font-medium",children:a.name}),e.jsx(l,{children:a.email}),e.jsx(l,{className:"text-zinc-500",children:a.access})]},a.handle))})]})}const Z=`import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/features/tailwind-v4/components/ui-kit/table";

export default function Example({ users }) {
  return (
    <Table className="[--gutter:--spacing(6)] sm:[--gutter:--spacing(8)]">
      <TableHead>
        <TableRow>
          <TableHeader>Name</TableHeader>
          <TableHeader>Email</TableHeader>
          <TableHeader>Role</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.handle} href={user.url}>
            <TableCell className="font-medium">{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell className="text-zinc-500">{user.access}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
`;function _({players:s}){return e.jsxs(t,{dense:!0,className:"[--gutter:--spacing(6)] sm:[--gutter:--spacing(8)]",children:[e.jsx(o,{children:e.jsxs(r,{children:[e.jsx(n,{children:"Rank"}),e.jsx(n,{children:"Player"}),e.jsx(n,{className:"text-right",children:"Pos"}),e.jsx(n,{className:"text-right",children:"GP"}),e.jsx(n,{className:"text-right",children:"G"}),e.jsx(n,{className:"text-right",children:"A"}),e.jsx(n,{className:"text-right",children:"P"}),e.jsx(n,{className:"text-right",children:"+/-"})]})}),e.jsx(d,{children:s.map(a=>e.jsxs(r,{children:[e.jsx(l,{className:"tabular-nums",children:a.rank}),e.jsx(l,{className:"font-medium",children:a.name}),e.jsx(l,{className:"text-right",children:a.position}),e.jsx(l,{className:"text-right tabular-nums",children:a.gamesPlayed}),e.jsx(l,{className:"text-right tabular-nums",children:a.goals}),e.jsx(l,{className:"text-right tabular-nums",children:a.assists}),e.jsx(l,{className:"text-right tabular-nums",children:a.points}),e.jsx(l,{className:"text-right tabular-nums",children:a.plusMinus})]},a.rank))})]})}const ee=`import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/features/tailwind-v4/components/ui-kit/table";

export default function Example({ players }) {
  return (
    <Table dense className="[--gutter:--spacing(6)] sm:[--gutter:--spacing(8)]">
      <TableHead>
        <TableRow>
          <TableHeader>Rank</TableHeader>
          <TableHeader>Player</TableHeader>
          <TableHeader className="text-right">Pos</TableHeader>
          <TableHeader className="text-right">GP</TableHeader>
          <TableHeader className="text-right">G</TableHeader>
          <TableHeader className="text-right">A</TableHeader>
          <TableHeader className="text-right">P</TableHeader>
          <TableHeader className="text-right">+/-</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {players.map((player) => (
          <TableRow key={player.rank}>
            <TableCell className="tabular-nums">{player.rank}</TableCell>
            <TableCell className="font-medium">{player.name}</TableCell>
            <TableCell className="text-right">{player.position}</TableCell>
            <TableCell className="text-right tabular-nums">
              {player.gamesPlayed}
            </TableCell>
            <TableCell className="text-right tabular-nums">
              {player.goals}
            </TableCell>
            <TableCell className="text-right tabular-nums">
              {player.assists}
            </TableCell>
            <TableCell className="text-right tabular-nums">
              {player.points}
            </TableCell>
            <TableCell className="text-right tabular-nums">
              {player.plusMinus}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
`;function ae({users:s}){return e.jsxs(t,{grid:!0,className:"[--gutter:--spacing(6)] sm:[--gutter:--spacing(8)]",children:[e.jsx(o,{children:e.jsxs(r,{children:[e.jsx(n,{children:"Name"}),e.jsx(n,{children:"Email"}),e.jsx(n,{children:"Role"})]})}),e.jsx(d,{children:s.map(a=>e.jsxs(r,{children:[e.jsx(l,{className:"font-medium",children:a.name}),e.jsx(l,{children:a.email}),e.jsx(l,{className:"text-zinc-500",children:a.access})]},a.handle))})]})}const ne=`import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/features/tailwind-v4/components/ui-kit/table";

export default function Example({ users }) {
  return (
    <Table grid className="[--gutter:--spacing(6)] sm:[--gutter:--spacing(8)]">
      <TableHead>
        <TableRow>
          <TableHeader>Name</TableHeader>
          <TableHeader>Email</TableHeader>
          <TableHeader>Role</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.handle}>
            <TableCell className="font-medium">{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell className="text-zinc-500">{user.access}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
`;function le({users:s}){return e.jsxs(t,{striped:!0,className:"[--gutter:--spacing(6)] sm:[--gutter:--spacing(8)]",children:[e.jsx(o,{children:e.jsxs(r,{children:[e.jsx(n,{children:"Name"}),e.jsx(n,{children:"Email"}),e.jsx(n,{children:"Role"})]})}),e.jsx(d,{children:s.map(a=>e.jsxs(r,{children:[e.jsx(l,{className:"font-medium",children:a.name}),e.jsx(l,{children:a.email}),e.jsx(l,{className:"text-zinc-500",children:a.access})]},a.handle))})]})}const se=`import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/features/tailwind-v4/components/ui-kit/table";

export default function Example({ users }) {
  return (
    <Table
      striped
      className="[--gutter:--spacing(6)] sm:[--gutter:--spacing(8)]"
    >
      <TableHead>
        <TableRow>
          <TableHeader>Name</TableHeader>
          <TableHeader>Email</TableHeader>
          <TableHeader>Role</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.handle}>
            <TableCell className="font-medium">{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell className="text-zinc-500">{user.access}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
`;function re({users:s}){return e.jsxs(t,{className:"[--gutter:--spacing(6)] sm:[--gutter:--spacing(8)]",children:[e.jsx(o,{children:e.jsxs(r,{className:"text-zinc-950 dark:text-white",children:[e.jsx(n,{children:"Name"}),e.jsx(n,{children:"Email"}),e.jsx(n,{children:"Role"})]})}),e.jsx(d,{children:s.map(a=>e.jsxs(r,{children:[e.jsx(l,{className:"font-medium",children:a.name}),e.jsx(l,{children:a.email}),e.jsx(l,{className:"text-zinc-500",children:a.access})]},a.handle))})]})}const ie=`import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/features/tailwind-v4/components/ui-kit/table";

export default function Example({ users }) {
  return (
    <Table className="[--gutter:--spacing(6)] sm:[--gutter:--spacing(8)]">
      <TableHead>
        <TableRow className="text-zinc-950 dark:text-white">
          <TableHeader>Name</TableHeader>
          <TableHeader>Email</TableHeader>
          <TableHeader>Role</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.handle}>
            <TableCell className="font-medium">{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell className="text-zinc-500">{user.access}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
`;function te({users:s}){return e.jsxs(t,{className:"[--gutter:--spacing(6)] sm:[--gutter:--spacing(8)]",children:[e.jsx(o,{children:e.jsxs(r,{children:[e.jsx(n,{children:"Name"}),e.jsx(n,{children:"Role"}),e.jsx(n,{children:"Status"})]})}),e.jsx(d,{children:s.map(a=>e.jsxs(r,{children:[e.jsx(l,{children:e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(B,{src:a.avatarUrl,className:"size-12"}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium",children:a.name}),e.jsx("div",{className:"text-zinc-500",children:e.jsx("a",{href:"#",className:"hover:text-zinc-700",children:a.email})})]})]})}),e.jsx(l,{className:"text-zinc-500",children:a.access}),e.jsx(l,{children:a.online?e.jsx(N,{color:"lime",children:"Online"}):e.jsx(N,{color:"zinc",children:"Offline"})})]},a.handle))})]})}const oe=`import { Avatar } from "@/features/tailwind-v4/components/ui-kit/avatar";
import { Badge } from "@/features/tailwind-v4/components/ui-kit/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/features/tailwind-v4/components/ui-kit/table";

export default function ComplexExample({ users }) {
  return (
    <Table className="[--gutter:--spacing(6)] sm:[--gutter:--spacing(8)]">
      <TableHead>
        <TableRow>
          <TableHeader>Name</TableHeader>
          <TableHeader>Role</TableHeader>
          <TableHeader>Status</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.handle}>
            <TableCell>
              <div className="flex items-center gap-4">
                <Avatar src={user.avatarUrl} className="size-12" />
                <div>
                  <div className="font-medium">{user.name}</div>
                  <div className="text-zinc-500">
                    <a href="#" className="hover:text-zinc-700">
                      {user.email}
                    </a>
                  </div>
                </div>
              </div>
            </TableCell>
            <TableCell className="text-zinc-500">{user.access}</TableCell>
            <TableCell>
              {user.online ? (
                <Badge color="lime">Online</Badge>
              ) : (
                <Badge color="zinc">Offline</Badge>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
`;function de({users:s}){return e.jsxs(e.Fragment,{children:[e.jsx("h1",{className:"mb-6 text-base font-semibold",children:"Users"}),e.jsxs(t,{children:[e.jsx(o,{children:e.jsxs(r,{children:[e.jsx(n,{children:"Name"}),e.jsx(n,{children:"Email"}),e.jsx(n,{children:"Access"})]})}),e.jsx(d,{children:s.map(a=>e.jsxs(r,{children:[e.jsx(l,{className:"font-medium",children:a.name}),e.jsx(l,{children:a.email}),e.jsx(l,{className:"text-zinc-500",children:a.access})]},a.handle))})]}),e.jsxs(D,{className:"mt-6",children:[e.jsx(E,{href:"?page=2"}),e.jsxs(z,{children:[e.jsx(u,{href:"?page=1",children:"1"}),e.jsx(u,{href:"?page=2",children:"2"}),e.jsx(u,{href:"?page=3",current:!0,children:"3"}),e.jsx(u,{href:"?page=4",children:"4"}),e.jsx(A,{}),e.jsx(u,{href:"?page=65",children:"65"}),e.jsx(u,{href:"?page=66",children:"66"})]}),e.jsx(I,{href:"?page=4"})]})]})}const ce=`import {
  Pagination,
  PaginationGap,
  PaginationList,
  PaginationNext,
  PaginationPage,
  PaginationPrevious,
} from "@/features/tailwind-v4/components/ui-kit/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/features/tailwind-v4/components/ui-kit/table";

export default function Example({ users }) {
  return (
    <>
      <h1 className="mb-6 text-base font-semibold">Users</h1>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>Name</TableHeader>
            <TableHeader>Email</TableHeader>
            <TableHeader>Access</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.handle}>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell className="text-zinc-500">{user.access}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination className="mt-6">
        <PaginationPrevious href="?page=2" />
        <PaginationList>
          <PaginationPage href="?page=1">1</PaginationPage>
          <PaginationPage href="?page=2">2</PaginationPage>
          <PaginationPage href="?page=3" current>
            3
          </PaginationPage>
          <PaginationPage href="?page=4">4</PaginationPage>
          <PaginationGap />
          <PaginationPage href="?page=65">65</PaginationPage>
          <PaginationPage href="?page=66">66</PaginationPage>
        </PaginationList>
        <PaginationNext href="?page=4" />
      </Pagination>
    </>
  );
}
`;function me({users:s}){return e.jsxs(t,{className:"[--gutter:--spacing(6)] sm:[--gutter:--spacing(8)]",children:[e.jsx(o,{children:e.jsxs(r,{children:[e.jsx(n,{children:"Name"}),e.jsx(n,{children:"Email"}),e.jsx(n,{children:"Access"}),e.jsx(n,{className:"relative w-0",children:e.jsx("span",{className:"sr-only",children:"Actions"})})]})}),e.jsx(d,{children:s.map(a=>e.jsxs(r,{children:[e.jsx(l,{className:"font-medium",children:a.name}),e.jsx(l,{children:a.email}),e.jsx(l,{className:"text-zinc-500",children:a.access}),e.jsx(l,{children:e.jsx("div",{className:"-mx-3 -my-1.5 sm:-mx-2.5",children:e.jsxs(M,{children:[e.jsx(W,{plain:!0,"aria-label":"More options",children:e.jsx(S,{})}),e.jsxs(O,{anchor:"bottom end",children:[e.jsx(f,{children:"View"}),e.jsx(f,{children:"Edit"}),e.jsx(f,{children:"Delete"})]})]})})})]},a.handle))})]})}const be=`import {
  Dropdown,
  DropdownButton,
  DropdownItem,
  DropdownMenu,
} from "@/features/tailwind-v4/components/ui-kit/dropdown";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/features/tailwind-v4/components/ui-kit/table";
import { EllipsisHorizontalIcon } from "@heroicons/react/16/solid";

export default function Example({ users }) {
  return (
    <Table className="[--gutter:--spacing(6)] sm:[--gutter:--spacing(8)]">
      <TableHead>
        <TableRow>
          <TableHeader>Name</TableHeader>
          <TableHeader>Email</TableHeader>
          <TableHeader>Access</TableHeader>
          <TableHeader className="relative w-0">
            <span className="sr-only">Actions</span>
          </TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.handle}>
            <TableCell className="font-medium">{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell className="text-zinc-500">{user.access}</TableCell>
            <TableCell>
              <div className="-mx-3 -my-1.5 sm:-mx-2.5">
                <Dropdown>
                  <DropdownButton plain aria-label="More options">
                    <EllipsisHorizontalIcon />
                  </DropdownButton>
                  <DropdownMenu anchor="bottom end">
                    <DropdownItem>View</DropdownItem>
                    <DropdownItem>Edit</DropdownItem>
                    <DropdownItem>Delete</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
`;function Te({users:s}){let[a,c]=b.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(w,{type:"button",onClick:()=>c(!0),children:"Show users"}),e.jsxs(G,{open:a,onClose:c,size:"3xl",children:[e.jsx(L,{children:"Users"}),e.jsx(U,{children:"The follow users have access to your account."}),e.jsx($,{children:e.jsxs(t,{bleed:!0,compact:!0,children:[e.jsx(o,{children:e.jsxs(r,{children:[e.jsx(n,{children:"Name"}),e.jsx(n,{children:"Email"}),e.jsx(n,{children:"Role"})]})}),e.jsx(d,{children:s.map(i=>e.jsxs(r,{children:[e.jsx(l,{className:"font-medium",children:i.name}),e.jsx(l,{children:i.email}),e.jsx(l,{className:"text-zinc-500",children:i.access})]},i.handle))})]})}),e.jsx(F,{children:e.jsx(w,{onClick:()=>c(!1),children:"Close"})})]})]})}const ue=`import { Button } from "@/features/tailwind-v4/components/ui-kit/button";
import {
  Dialog,
  DialogActions,
  DialogBody,
  DialogDescription,
  DialogTitle,
} from "@/features/tailwind-v4/components/ui-kit/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/features/tailwind-v4/components/ui-kit/table";
import { useState } from "react";

export default function Example({ users }) {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button type="button" onClick={() => setIsOpen(true)}>
        Show users
      </Button>
      <Dialog open={isOpen} onClose={setIsOpen} size="3xl">
        <DialogTitle>Users</DialogTitle>
        <DialogDescription>
          The follow users have access to your account.
        </DialogDescription>
        <DialogBody>
          <Table bleed compact>
            <TableHead>
              <TableRow>
                <TableHeader>Name</TableHeader>
                <TableHeader>Email</TableHeader>
                <TableHeader>Role</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.handle}>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell className="text-zinc-500">{user.access}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </DialogBody>
        <DialogActions>
          <Button onClick={() => setIsOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
`,m=[{handle:"trung-dinh",name:"Đinh Quang Trung",email:"trung.dinh@example.com",access:"Admin",avatarUrl:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",online:!0},{handle:"erica-h",name:"Erica Hancock",email:"erica.h@example.com",access:"Editor",avatarUrl:"https://images.unsplash.com/photo-1550525811-e5869dd03032?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",online:!1},{handle:"giao-g",name:"Giao Giao",email:"giao.g@example.com",access:"Viewer",avatarUrl:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",online:!0}],xe=[{rank:1,name:"Leon Draisaitl",position:"C",gamesPlayed:71,goals:31,assists:68,points:99,plusMinus:-9},{rank:2,name:"Connor McDavid",position:"C",gamesPlayed:64,goals:31,assists:65,points:96,plusMinus:-7},{rank:3,name:"David Pastrnak",position:"RW",gamesPlayed:70,goals:48,assists:47,points:95,plusMinus:21},{rank:4,name:"Artemi Panarin",position:"LW",gamesPlayed:69,goals:32,assists:63,points:95,plusMinus:36}],ze=()=>{const s=[{id:"01",name:"Basic Table",component:e.jsx(q,{users:m}),raw:V},{id:"02",name:"Responsive Tables",component:e.jsx(Q,{users:m}),raw:J},{id:"03",name:"Full-width Tables",component:e.jsx(K,{users:m}),raw:X},{id:"04",name:"Rows as Links",component:e.jsx(Y,{users:m}),raw:Z},{id:"05",name:"With Condensed Spacing",component:e.jsx(_,{players:xe}),raw:ee},{id:"06",name:"With Grid Lines",component:e.jsx(ae,{users:m}),raw:ne},{id:"07",name:"With Striped Rows",component:e.jsx(le,{users:m}),raw:se},{id:"08",name:"With Different Heading Color",component:e.jsx(re,{users:m}),raw:ie},{id:"09",name:"With Complex Content",component:e.jsx(te,{users:m}),raw:oe},{id:"10",name:"With Pagination",component:e.jsx(de,{users:m}),raw:ce},{id:"11",name:"With Dropdowns",component:e.jsx(me,{users:m}),raw:be},{id:"12",name:"In Dialog",component:e.jsx(Te,{users:m}),raw:ue}];return e.jsx("div",{className:"space-y-10 pb-20",children:s.map(a=>e.jsxs("section",{className:"border-b border-gray-100 pb-10 last:border-0",children:[e.jsxs("h2",{className:"mb-4 text-lg font-bold text-gray-800",children:[a.id,". ",a.name]}),e.jsx(k,{name:a.name,code:a.raw,children:e.jsx("div",{className:"overflow-hidden rounded-lg bg-white",children:a.component})})]},a.id))})};export{ze as default};
