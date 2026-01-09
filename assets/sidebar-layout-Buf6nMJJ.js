import{r as y,j as e,aK as t,h as F,L as C,z as R,aV as M,aP as I,aQ as B,aR as n,aS as s,aU as m,aT as z,aW as H,aX as T,aY as $,aI as D,aL as E,aJ as N}from"./index-CvCVbuS9.js";import{P as A}from"./PreviewWrapper-TzFvRoPZ.js";import{A as c}from"./avatar-D6f6JjSo.js";import{D as b,a as h,b as p,c as r,g as a,e as l}from"./dropdown-CWgsCawx.js";import{F as P}from"./ChevronDownIcon-DVV5oLHi.js";import{F as x}from"./Cog8ToothIcon-B_FHwQsL.js";import{F as O}from"./PlusIcon-BAANU77I.js";import{F as w}from"./MagnifyingGlassIcon-Tr5kZRgo.js";import{F as S}from"./InboxIcon-_EjWEZWX.js";import{F as U}from"./HomeIcon-DvybmW6M.js";import{F as W,a as q,b as Y}from"./TicketIcon-BbzGSdYN.js";import{F as G}from"./Cog6ToothIcon-BrDTebjR.js";import{F as J}from"./QuestionMarkCircleIcon-BrsUz3Ow.js";import{F as Q}from"./SparklesIcon-jfUWa5rm.js";import{F as V}from"./ChevronUpIcon-DXNbrID8.js";import{F as j,a as g}from"./UserIcon-CsK4E5KW.js";import{F as v,a as u}from"./ShieldCheckIcon--fNa2mld.js";import"./menu-DqpGavi0.js";import"./floating-CjydGm1Z.js";import"./element-movement-BT6A7GGi.js";import"./bugs-qQ_SbDk4.js";import"./use-resolve-button-type-J0J8N5g4.js";import"./use-text-value-CB9rzUUM.js";import"./use-tree-walker-_f7mgbza.js";import"./label-CY_Q6YdE.js";function Z(){return e.jsx("svg",{"data-slot":"icon",viewBox:"0 0 20 20","aria-hidden":"true",children:e.jsx("path",{d:"M2 6.75C2 6.33579 2.33579 6 2.75 6H17.25C17.6642 6 18 6.33579 18 6.75C18 7.16421 17.6642 7.5 17.25 7.5H2.75C2.33579 7.5 2 7.16421 2 6.75ZM2 13.25C2 12.8358 2.33579 12.5 2.75 12.5H17.25C17.6642 12.5 18 12.8358 18 13.25C18 13.6642 17.6642 14 17.25 14H2.75C2.33579 14 2 13.6642 2 13.25Z"})})}function K(){return e.jsx("svg",{"data-slot":"icon",viewBox:"0 0 20 20","aria-hidden":"true",children:e.jsx("path",{d:"M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"})})}function X({open:i,close:d,children:o}){return e.jsxs(F,{open:i,onClose:d,className:"lg:hidden",children:[e.jsx(C,{transition:!0,className:"fixed inset-0 bg-black/30 transition data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"}),e.jsx(R,{transition:!0,className:"fixed inset-y-0 w-full max-w-80 p-2 transition duration-300 ease-in-out data-closed:-translate-x-full",children:e.jsxs("div",{className:"flex h-full flex-col rounded-lg bg-white ring-1 shadow-xs ring-zinc-950/5 dark:bg-zinc-900 dark:ring-white/10",children:[e.jsx("div",{className:"-mb-3 px-4 pt-3",children:e.jsx(M,{as:t,"aria-label":"Close navigation",children:e.jsx(K,{})})}),o]})})]})}function L({navbar:i,sidebar:d,children:o}){let[k,f]=y.useState(!1);return e.jsxs("div",{className:"relative isolate flex min-h-svh w-full bg-white max-lg:flex-col lg:bg-zinc-100 dark:bg-zinc-900 dark:lg:bg-zinc-950",children:[e.jsx("div",{className:"fixed inset-y-0 left-0 w-64 max-lg:hidden",children:d}),e.jsx(X,{open:k,close:()=>f(!1),children:d}),e.jsxs("header",{className:"flex items-center px-4 lg:hidden",children:[e.jsx("div",{className:"py-2.5",children:e.jsx(t,{onClick:()=>f(!0),"aria-label":"Open navigation",children:e.jsx(Z,{})})}),e.jsx("div",{className:"min-w-0 flex-1",children:i})]}),e.jsx("main",{className:"flex flex-1 flex-col pb-2 lg:min-w-0 lg:pt-2 lg:pr-2 lg:pl-64",children:e.jsx("div",{className:"grow p-6 lg:rounded-lg lg:bg-white lg:p-10 lg:ring-1 lg:shadow-xs lg:ring-zinc-950/5 dark:lg:bg-zinc-900 dark:lg:ring-white/10",children:e.jsx("div",{className:"mx-auto max-w-6xl",children:o})})})]})}function _(){return e.jsx(L,{navbar:e.jsxs(D,{children:[e.jsx(E,{}),e.jsxs(N,{children:[e.jsx(t,{href:"/search","aria-label":"Search",children:e.jsx(w,{})}),e.jsx(t,{href:"/inbox","aria-label":"Inbox",children:e.jsx(S,{})}),e.jsxs(b,{children:[e.jsx(h,{as:t,children:e.jsx(c,{src:"/src/assets/images/profile-photo.svg",square:!0})}),e.jsxs(p,{className:"min-w-64",anchor:"bottom end",children:[e.jsxs(r,{href:"/my-profile",children:[e.jsx(j,{}),e.jsx(a,{children:"My profile"})]}),e.jsxs(r,{href:"/settings",children:[e.jsx(x,{}),e.jsx(a,{children:"Settings"})]}),e.jsx(l,{}),e.jsxs(r,{href:"/privacy-policy",children:[e.jsx(v,{}),e.jsx(a,{children:"Privacy policy"})]}),e.jsxs(r,{href:"/share-feedback",children:[e.jsx(u,{}),e.jsx(a,{children:"Share feedback"})]}),e.jsx(l,{}),e.jsxs(r,{href:"/logout",children:[e.jsx(g,{}),e.jsx(a,{children:"Sign out"})]})]})]})]})]}),sidebar:e.jsxs(I,{children:[e.jsxs(B,{children:[e.jsxs(b,{children:[e.jsxs(h,{as:n,className:"lg:mb-2.5",children:[e.jsx(c,{src:"/src/assets/images/tailwind-logo.svg"}),e.jsx(s,{children:"Tailwind Labs"}),e.jsx(P,{})]}),e.jsxs(p,{className:"min-w-80 lg:min-w-64",anchor:"bottom start",children:[e.jsxs(r,{href:"/teams/1/settings",children:[e.jsx(x,{}),e.jsx(a,{children:"Settings"})]}),e.jsx(l,{}),e.jsxs(r,{href:"/teams/1",children:[e.jsx(c,{slot:"icon",src:"/src/assets/images/tailwind-logo.svg"}),e.jsx(a,{children:"Tailwind Labs"})]}),e.jsxs(r,{href:"/teams/2",children:[e.jsx(c,{slot:"icon",initials:"WC",className:"bg-purple-500 text-white"}),e.jsx(a,{children:"Workcation"})]}),e.jsx(l,{}),e.jsxs(r,{href:"/teams/create",children:[e.jsx(O,{}),e.jsx(a,{children:"New team…"})]})]})]}),e.jsxs(m,{className:"max-lg:hidden",children:[e.jsxs(n,{href:"/search",children:[e.jsx(w,{}),e.jsx(s,{children:"Search"})]}),e.jsxs(n,{href:"/inbox",children:[e.jsx(S,{}),e.jsx(s,{children:"Inbox"})]})]})]}),e.jsxs(z,{children:[e.jsxs(m,{children:[e.jsxs(n,{href:"/",children:[e.jsx(U,{}),e.jsx(s,{children:"Home"})]}),e.jsxs(n,{href:"/events",children:[e.jsx(W,{}),e.jsx(s,{children:"Events"})]}),e.jsxs(n,{href:"/orders",children:[e.jsx(q,{}),e.jsx(s,{children:"Orders"})]}),e.jsxs(n,{href:"/settings",children:[e.jsx(G,{}),e.jsx(s,{children:"Settings"})]}),e.jsxs(n,{href:"/broadcasts",children:[e.jsx(Y,{}),e.jsx(s,{children:"Broadcasts"})]})]}),e.jsxs(m,{className:"max-lg:hidden",children:[e.jsx(H,{children:"Upcoming Events"}),e.jsx(n,{href:"/events/1",children:"Bear Hug: Live in Concert"}),e.jsx(n,{href:"/events/2",children:"Viking People"}),e.jsx(n,{href:"/events/3",children:"Six Fingers — DJ Set"}),e.jsx(n,{href:"/events/4",children:"We All Look The Same"})]}),e.jsx(T,{}),e.jsxs(m,{children:[e.jsxs(n,{href:"/support",children:[e.jsx(J,{}),e.jsx(s,{children:"Support"})]}),e.jsxs(n,{href:"/changelog",children:[e.jsx(Q,{}),e.jsx(s,{children:"Changelog"})]})]})]}),e.jsx($,{className:"max-lg:hidden",children:e.jsxs(b,{children:[e.jsxs(h,{as:n,children:[e.jsxs("span",{className:"flex min-w-0 items-center gap-3",children:[e.jsx(c,{src:"/src/assets/images/profile-photo.svg",className:"size-10",square:!0,alt:""}),e.jsxs("span",{className:"min-w-0",children:[e.jsx("span",{className:"block truncate text-sm/5 font-medium text-zinc-950 dark:text-white",children:"Erica"}),e.jsx("span",{className:"block truncate text-xs/5 font-normal text-zinc-500 dark:text-zinc-400",children:"erica@example.com"})]})]}),e.jsx(V,{})]}),e.jsxs(p,{className:"min-w-64",anchor:"top start",children:[e.jsxs(r,{href:"/my-profile",children:[e.jsx(j,{}),e.jsx(a,{children:"My profile"})]}),e.jsxs(r,{href:"/settings",children:[e.jsx(x,{}),e.jsx(a,{children:"Settings"})]}),e.jsx(l,{}),e.jsxs(r,{href:"/privacy-policy",children:[e.jsx(v,{}),e.jsx(a,{children:"Privacy policy"})]}),e.jsxs(r,{href:"/share-feedback",children:[e.jsx(u,{}),e.jsx(a,{children:"Share feedback"})]}),e.jsx(l,{}),e.jsxs(r,{href:"/logout",children:[e.jsx(g,{}),e.jsx(a,{children:"Sign out"})]})]})]})})]})})}const ee=`import { Avatar } from "@/features/tailwind-v4/components/ui-kit/avatar";
import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from "@/features/tailwind-v4/components/ui-kit/dropdown";
import {
  Navbar,
  NavbarItem,
  NavbarSection,
  NavbarSpacer,
} from "@/features/tailwind-v4/components/ui-kit/navbar";
import {
  Sidebar,
  SidebarBody,
  SidebarFooter,
  SidebarHeader,
  SidebarHeading,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
  SidebarSpacer,
} from "@/features/tailwind-v4/components/ui-kit/sidebar";
import { SidebarLayout } from "@/features/tailwind-v4/components/ui-kit/sidebar-layout";
import {
  ArrowRightStartOnRectangleIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  Cog8ToothIcon,
  LightBulbIcon,
  PlusIcon,
  ShieldCheckIcon,
  UserIcon,
} from "@heroicons/react/16/solid";
import {
  Cog6ToothIcon,
  HomeIcon,
  InboxIcon,
  MagnifyingGlassIcon,
  MegaphoneIcon,
  QuestionMarkCircleIcon,
  SparklesIcon,
  Square2StackIcon,
  TicketIcon,
} from "@heroicons/react/20/solid";

export default function Example() {
  return (
    <SidebarLayout
      navbar={
        <Navbar>
          <NavbarSpacer />
          <NavbarSection>
            <NavbarItem href="/search" aria-label="Search">
              <MagnifyingGlassIcon />
            </NavbarItem>
            <NavbarItem href="/inbox" aria-label="Inbox">
              <InboxIcon />
            </NavbarItem>
            <Dropdown>
              <DropdownButton as={NavbarItem}>
                <Avatar src="/src/assets/images/profile-photo.svg" square />
              </DropdownButton>
              <DropdownMenu className="min-w-64" anchor="bottom end">
                <DropdownItem href="/my-profile">
                  <UserIcon />
                  <DropdownLabel>My profile</DropdownLabel>
                </DropdownItem>
                <DropdownItem href="/settings">
                  <Cog8ToothIcon />
                  <DropdownLabel>Settings</DropdownLabel>
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem href="/privacy-policy">
                  <ShieldCheckIcon />
                  <DropdownLabel>Privacy policy</DropdownLabel>
                </DropdownItem>
                <DropdownItem href="/share-feedback">
                  <LightBulbIcon />
                  <DropdownLabel>Share feedback</DropdownLabel>
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem href="/logout">
                  <ArrowRightStartOnRectangleIcon />
                  <DropdownLabel>Sign out</DropdownLabel>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarSection>
        </Navbar>
      }
      sidebar={
        <Sidebar>
          <SidebarHeader>
            <Dropdown>
              <DropdownButton as={SidebarItem} className="lg:mb-2.5">
                <Avatar src="/src/assets/images/tailwind-logo.svg" />
                <SidebarLabel>Tailwind Labs</SidebarLabel>
                <ChevronDownIcon />
              </DropdownButton>
              <DropdownMenu
                className="min-w-80 lg:min-w-64"
                anchor="bottom start"
              >
                <DropdownItem href="/teams/1/settings">
                  <Cog8ToothIcon />
                  <DropdownLabel>Settings</DropdownLabel>
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem href="/teams/1">
                  <Avatar
                    slot="icon"
                    src="/src/assets/images/tailwind-logo.svg"
                  />
                  <DropdownLabel>Tailwind Labs</DropdownLabel>
                </DropdownItem>
                <DropdownItem href="/teams/2">
                  <Avatar
                    slot="icon"
                    initials="WC"
                    className="bg-purple-500 text-white"
                  />
                  <DropdownLabel>Workcation</DropdownLabel>
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem href="/teams/create">
                  <PlusIcon />
                  <DropdownLabel>New team&hellip;</DropdownLabel>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <SidebarSection className="max-lg:hidden">
              <SidebarItem href="/search">
                <MagnifyingGlassIcon />
                <SidebarLabel>Search</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/inbox">
                <InboxIcon />
                <SidebarLabel>Inbox</SidebarLabel>
              </SidebarItem>
            </SidebarSection>
          </SidebarHeader>
          <SidebarBody>
            <SidebarSection>
              <SidebarItem href="/">
                <HomeIcon />
                <SidebarLabel>Home</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/events">
                <Square2StackIcon />
                <SidebarLabel>Events</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/orders">
                <TicketIcon />
                <SidebarLabel>Orders</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/settings">
                <Cog6ToothIcon />
                <SidebarLabel>Settings</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/broadcasts">
                <MegaphoneIcon />
                <SidebarLabel>Broadcasts</SidebarLabel>
              </SidebarItem>
            </SidebarSection>
            <SidebarSection className="max-lg:hidden">
              <SidebarHeading>Upcoming Events</SidebarHeading>
              <SidebarItem href="/events/1">
                Bear Hug: Live in Concert
              </SidebarItem>
              <SidebarItem href="/events/2">Viking People</SidebarItem>
              <SidebarItem href="/events/3">Six Fingers — DJ Set</SidebarItem>
              <SidebarItem href="/events/4">We All Look The Same</SidebarItem>
            </SidebarSection>
            <SidebarSpacer />
            <SidebarSection>
              <SidebarItem href="/support">
                <QuestionMarkCircleIcon />
                <SidebarLabel>Support</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/changelog">
                <SparklesIcon />
                <SidebarLabel>Changelog</SidebarLabel>
              </SidebarItem>
            </SidebarSection>
          </SidebarBody>
          <SidebarFooter className="max-lg:hidden">
            <Dropdown>
              <DropdownButton as={SidebarItem}>
                <span className="flex min-w-0 items-center gap-3">
                  <Avatar
                    src="/src/assets/images/profile-photo.svg"
                    className="size-10"
                    square
                    alt=""
                  />
                  <span className="min-w-0">
                    <span className="block truncate text-sm/5 font-medium text-zinc-950 dark:text-white">
                      Erica
                    </span>
                    <span className="block truncate text-xs/5 font-normal text-zinc-500 dark:text-zinc-400">
                      erica@example.com
                    </span>
                  </span>
                </span>
                <ChevronUpIcon />
              </DropdownButton>
              <DropdownMenu className="min-w-64" anchor="top start">
                <DropdownItem href="/my-profile">
                  <UserIcon />
                  <DropdownLabel>My profile</DropdownLabel>
                </DropdownItem>
                <DropdownItem href="/settings">
                  <Cog8ToothIcon />
                  <DropdownLabel>Settings</DropdownLabel>
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem href="/privacy-policy">
                  <ShieldCheckIcon />
                  <DropdownLabel>Privacy policy</DropdownLabel>
                </DropdownItem>
                <DropdownItem href="/share-feedback">
                  <LightBulbIcon />
                  <DropdownLabel>Share feedback</DropdownLabel>
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem href="/logout">
                  <ArrowRightStartOnRectangleIcon />
                  <DropdownLabel>Sign out</DropdownLabel>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </SidebarFooter>
        </Sidebar>
      }
    >
      {/* The page content */}
    </SidebarLayout>
  );
}
`;function ne({children:i}){return e.jsx(L,{sidebar:e.jsx(I,{}),navbar:e.jsx(D,{children:e.jsxs(N,{children:[e.jsx(t,{href:"/",children:"Home"}),e.jsx(t,{href:"/events",children:"Events"}),e.jsx(t,{href:"/orders",children:"Orders"})]})}),children:i})}const re=`// import { Navbar } from "@/components/ui-kit/navbar";
import {
  Navbar,
  NavbarItem,
  NavbarSection,
} from "@/features/tailwind-v4/components/ui-kit/navbar";
import { Sidebar } from "@/features/tailwind-v4/components/ui-kit/sidebar";
import { SidebarLayout } from "@/features/tailwind-v4/components/ui-kit/sidebar-layout";

export default function Example({ children }) {
  return (
    <SidebarLayout
      sidebar={<Sidebar>{/* Your sidebar content */}</Sidebar>}
      // navbar={<Navbar>{/* Your navbar content */}</Navbar>}
      navbar={
        <Navbar>
          <NavbarSection>
            <NavbarItem href="/">Home</NavbarItem>
            <NavbarItem href="/events">Events</NavbarItem>
            <NavbarItem href="/orders">Orders</NavbarItem>
          </NavbarSection>
        </Navbar>
      }
    >
      {/* Your page content */}
      {children}
    </SidebarLayout>
  );
}
`,ye=()=>{const i=({title:o})=>e.jsxs("div",{className:"p-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-zinc-950",children:o}),e.jsx("p",{className:"mt-2 text-zinc-600",children:"Chào Trung, đây là nội dung trang web (children) được hiển thị bên trong Layout."}),e.jsx("div",{className:"mt-6 h-40 rounded-xl border-2 border-dashed border-zinc-200 bg-zinc-50"})]}),d=[{id:"00",name:"Sidebar Layout",component:e.jsx(_,{children:e.jsx(i,{title:"Dashboard Overview"})}),raw:ee},{id:"01",name:"Basic Sidebar Layout",component:e.jsx(ne,{children:e.jsx(i,{title:"Dashboard Overview"})}),raw:re}];return e.jsx("div",{className:"space-y-10 pb-20",children:d.map(o=>e.jsxs("section",{className:"border-b border-gray-100 pb-10 last:border-0",children:[e.jsxs("h2",{className:"mb-4 text-lg font-bold text-gray-800",children:[o.id,". ",o.name]}),e.jsx(A,{name:o.name,code:o.raw,children:o.component})]},o.id))})};export{ye as default};
