import{r as y,j as e}from"./index-BUE_4nSx.js";import{P as F}from"./PreviewWrapper-C5kxKQgy.js";import{A as c}from"./avatar-CdKU74gH.js";import{D as b,a as p,b as h,c as r,g as a,e as l}from"./dropdown-DhP5gKd7.js";import{b as t,F as w,f as S,N as u,c as C,a as D}from"./navbar-D6uZNuwW.js";import{y as R,S as N,a as M,b as n,c as i,e as m,F as j,d as B,f as z,g as H,h as $}from"./sidebar-BIuUbHhh.js";import{h as T,L as E,z as A}from"./dialog-DzJiKgmR.js";import{F as O}from"./ChevronDownIcon-PEDjg2_9.js";import{F as x}from"./Cog8ToothIcon-BvZplsob.js";import{F as P}from"./PlusIcon-C_PmVC-V.js";import{F as g}from"./MagnifyingGlassIcon-DdqoUQ09.js";import{F as U}from"./HomeIcon-CoO_QdzB.js";import{F as W,a as q,b as G}from"./TicketIcon-C_pYXvMG.js";import{F as Y}from"./Cog6ToothIcon-BcQUh6GN.js";import{F as Z}from"./QuestionMarkCircleIcon-BvuLRJki.js";import{F as J}from"./SparklesIcon-BlX-dQuq.js";import{F as Q}from"./ChevronUpIcon-DIqX5o4W.js";import{F as v,a as I}from"./UserIcon-WtlnqPJc.js";import"./clsx-B-dksMZM.js";import"./button-DGx1EBOd.js";import"./link-gY3vJwZa.js";import"./useFocusRing-DcMgcFf7.js";import"./use-active-press-CdjcnPjf.js";import"./owner-C7ikqkQc.js";import"./render-CNyBWpu3.js";import"./use-slot-BZcd_w4P.js";import"./disabled-1up_um9U.js";import"./menu-wSU_4UrN.js";import"./index-5-nG4q7h.js";import"./floating-DDf1F5o_.js";import"./dom-BlW_0b_t.js";import"./element-movement-DVBsFgAL.js";import"./bugs-BLuxiOOY.js";import"./portal-DcpW2Nz_.js";import"./focus-management-C0S51YJM.js";import"./use-sync-refs-Dh0umLOC.js";import"./use-inert-others-BaroeGy-.js";import"./use-resolve-button-type-BuRlBvvn.js";import"./use-text-value-Bui0uthF.js";import"./open-closed-BGpwrHHP.js";import"./use-tree-walker-BMsWof6B.js";import"./description-11b0SVwG.js";import"./keyboard-C1Wiwm26.js";import"./label-CN3TFCLp.js";import"./close-provider-CYB1hxin.js";import"./use-event-listener-DpzbZMQu.js";import"./use-tab-direction-D2DDqWO7.js";import"./hidden-c0o-GYKL.js";import"./transition-C2KOCvAu.js";import"./use-is-mounted-CiYMpse4.js";import"./active-element-history-NQ_rx8nl.js";function V(){return e.jsx("svg",{"data-slot":"icon",viewBox:"0 0 20 20","aria-hidden":"true",children:e.jsx("path",{d:"M2 6.75C2 6.33579 2.33579 6 2.75 6H17.25C17.6642 6 18 6.33579 18 6.75C18 7.16421 17.6642 7.5 17.25 7.5H2.75C2.33579 7.5 2 7.16421 2 6.75ZM2 13.25C2 12.8358 2.33579 12.5 2.75 12.5H17.25C17.6642 12.5 18 12.8358 18 13.25C18 13.6642 17.6642 14 17.25 14H2.75C2.33579 14 2 13.6642 2 13.25Z"})})}function K(){return e.jsx("svg",{"data-slot":"icon",viewBox:"0 0 20 20","aria-hidden":"true",children:e.jsx("path",{d:"M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"})})}function X({open:s,close:d,children:o}){return e.jsxs(T,{open:s,onClose:d,className:"lg:hidden",children:[e.jsx(E,{transition:!0,className:"fixed inset-0 bg-black/30 transition data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"}),e.jsx(A,{transition:!0,className:"fixed inset-y-0 w-full max-w-80 p-2 transition duration-300 ease-in-out data-closed:-translate-x-full",children:e.jsxs("div",{className:"flex h-full flex-col rounded-lg bg-white ring-1 shadow-xs ring-zinc-950/5 dark:bg-zinc-900 dark:ring-white/10",children:[e.jsx("div",{className:"-mb-3 px-4 pt-3",children:e.jsx(R,{as:t,"aria-label":"Close navigation",children:e.jsx(K,{})})}),o]})})]})}function L({navbar:s,sidebar:d,children:o}){let[k,f]=y.useState(!1);return e.jsxs("div",{className:"relative isolate flex min-h-svh w-full bg-white max-lg:flex-col lg:bg-zinc-100 dark:bg-zinc-900 dark:lg:bg-zinc-950",children:[e.jsx("div",{className:"fixed inset-y-0 left-0 w-64 max-lg:hidden",children:d}),e.jsx(X,{open:k,close:()=>f(!1),children:d}),e.jsxs("header",{className:"flex items-center px-4 lg:hidden",children:[e.jsx("div",{className:"py-2.5",children:e.jsx(t,{onClick:()=>f(!0),"aria-label":"Open navigation",children:e.jsx(V,{})})}),e.jsx("div",{className:"min-w-0 flex-1",children:s})]}),e.jsx("main",{className:"flex flex-1 flex-col pb-2 lg:min-w-0 lg:pt-2 lg:pr-2 lg:pl-64",children:e.jsx("div",{className:"grow p-6 lg:rounded-lg lg:bg-white lg:p-10 lg:ring-1 lg:shadow-xs lg:ring-zinc-950/5 dark:lg:bg-zinc-900 dark:lg:ring-white/10",children:e.jsx("div",{className:"mx-auto max-w-6xl",children:o})})})]})}function _(){return e.jsx(L,{navbar:e.jsxs(u,{children:[e.jsx(C,{}),e.jsxs(D,{children:[e.jsx(t,{href:"/search","aria-label":"Search",children:e.jsx(g,{})}),e.jsx(t,{href:"/inbox","aria-label":"Inbox",children:e.jsx(j,{})}),e.jsxs(b,{children:[e.jsx(p,{as:t,children:e.jsx(c,{src:"/src/assets/images/profile-photo.svg",square:!0})}),e.jsxs(h,{className:"min-w-64",anchor:"bottom end",children:[e.jsxs(r,{href:"/my-profile",children:[e.jsx(v,{}),e.jsx(a,{children:"My profile"})]}),e.jsxs(r,{href:"/settings",children:[e.jsx(x,{}),e.jsx(a,{children:"Settings"})]}),e.jsx(l,{}),e.jsxs(r,{href:"/privacy-policy",children:[e.jsx(w,{}),e.jsx(a,{children:"Privacy policy"})]}),e.jsxs(r,{href:"/share-feedback",children:[e.jsx(S,{}),e.jsx(a,{children:"Share feedback"})]}),e.jsx(l,{}),e.jsxs(r,{href:"/logout",children:[e.jsx(I,{}),e.jsx(a,{children:"Sign out"})]})]})]})]})]}),sidebar:e.jsxs(N,{children:[e.jsxs(M,{children:[e.jsxs(b,{children:[e.jsxs(p,{as:n,className:"lg:mb-2.5",children:[e.jsx(c,{src:"/src/assets/images/tailwind-logo.svg"}),e.jsx(i,{children:"Tailwind Labs"}),e.jsx(O,{})]}),e.jsxs(h,{className:"min-w-80 lg:min-w-64",anchor:"bottom start",children:[e.jsxs(r,{href:"/teams/1/settings",children:[e.jsx(x,{}),e.jsx(a,{children:"Settings"})]}),e.jsx(l,{}),e.jsxs(r,{href:"/teams/1",children:[e.jsx(c,{slot:"icon",src:"/src/assets/images/tailwind-logo.svg"}),e.jsx(a,{children:"Tailwind Labs"})]}),e.jsxs(r,{href:"/teams/2",children:[e.jsx(c,{slot:"icon",initials:"WC",className:"bg-purple-500 text-white"}),e.jsx(a,{children:"Workcation"})]}),e.jsx(l,{}),e.jsxs(r,{href:"/teams/create",children:[e.jsx(P,{}),e.jsx(a,{children:"New team…"})]})]})]}),e.jsxs(m,{className:"max-lg:hidden",children:[e.jsxs(n,{href:"/search",children:[e.jsx(g,{}),e.jsx(i,{children:"Search"})]}),e.jsxs(n,{href:"/inbox",children:[e.jsx(j,{}),e.jsx(i,{children:"Inbox"})]})]})]}),e.jsxs(B,{children:[e.jsxs(m,{children:[e.jsxs(n,{href:"/",children:[e.jsx(U,{}),e.jsx(i,{children:"Home"})]}),e.jsxs(n,{href:"/events",children:[e.jsx(W,{}),e.jsx(i,{children:"Events"})]}),e.jsxs(n,{href:"/orders",children:[e.jsx(q,{}),e.jsx(i,{children:"Orders"})]}),e.jsxs(n,{href:"/settings",children:[e.jsx(Y,{}),e.jsx(i,{children:"Settings"})]}),e.jsxs(n,{href:"/broadcasts",children:[e.jsx(G,{}),e.jsx(i,{children:"Broadcasts"})]})]}),e.jsxs(m,{className:"max-lg:hidden",children:[e.jsx(z,{children:"Upcoming Events"}),e.jsx(n,{href:"/events/1",children:"Bear Hug: Live in Concert"}),e.jsx(n,{href:"/events/2",children:"Viking People"}),e.jsx(n,{href:"/events/3",children:"Six Fingers — DJ Set"}),e.jsx(n,{href:"/events/4",children:"We All Look The Same"})]}),e.jsx(H,{}),e.jsxs(m,{children:[e.jsxs(n,{href:"/support",children:[e.jsx(Z,{}),e.jsx(i,{children:"Support"})]}),e.jsxs(n,{href:"/changelog",children:[e.jsx(J,{}),e.jsx(i,{children:"Changelog"})]})]})]}),e.jsx($,{className:"max-lg:hidden",children:e.jsxs(b,{children:[e.jsxs(p,{as:n,children:[e.jsxs("span",{className:"flex min-w-0 items-center gap-3",children:[e.jsx(c,{src:"/src/assets/images/profile-photo.svg",className:"size-10",square:!0,alt:""}),e.jsxs("span",{className:"min-w-0",children:[e.jsx("span",{className:"block truncate text-sm/5 font-medium text-zinc-950 dark:text-white",children:"Erica"}),e.jsx("span",{className:"block truncate text-xs/5 font-normal text-zinc-500 dark:text-zinc-400",children:"erica@example.com"})]})]}),e.jsx(Q,{})]}),e.jsxs(h,{className:"min-w-64",anchor:"top start",children:[e.jsxs(r,{href:"/my-profile",children:[e.jsx(v,{}),e.jsx(a,{children:"My profile"})]}),e.jsxs(r,{href:"/settings",children:[e.jsx(x,{}),e.jsx(a,{children:"Settings"})]}),e.jsx(l,{}),e.jsxs(r,{href:"/privacy-policy",children:[e.jsx(w,{}),e.jsx(a,{children:"Privacy policy"})]}),e.jsxs(r,{href:"/share-feedback",children:[e.jsx(S,{}),e.jsx(a,{children:"Share feedback"})]}),e.jsx(l,{}),e.jsxs(r,{href:"/logout",children:[e.jsx(I,{}),e.jsx(a,{children:"Sign out"})]})]})]})})]})})}const ee=`import { Avatar } from "@/components/ui-kit/avatar";
import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from "@/components/ui-kit/dropdown";
import {
  Navbar,
  NavbarItem,
  NavbarSection,
  NavbarSpacer,
} from "@/components/ui-kit/navbar";
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
} from "@/components/ui-kit/sidebar";
import { SidebarLayout } from "@/components/ui-kit/sidebar-layout";
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
`;function ne({children:s}){return e.jsx(L,{sidebar:e.jsx(N,{}),navbar:e.jsx(u,{children:e.jsxs(D,{children:[e.jsx(t,{href:"/",children:"Home"}),e.jsx(t,{href:"/events",children:"Events"}),e.jsx(t,{href:"/orders",children:"Orders"})]})}),children:s})}const re=`// import { Navbar } from "@/components/ui-kit/navbar";
import { Navbar, NavbarItem, NavbarSection } from "@/components/ui-kit/navbar";
import { Sidebar } from "@/components/ui-kit/sidebar";
import { SidebarLayout } from "@/components/ui-kit/sidebar-layout";

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
`,en=()=>{const s=({title:o})=>e.jsxs("div",{className:"p-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-zinc-950",children:o}),e.jsx("p",{className:"mt-2 text-zinc-600",children:"Chào Trung, đây là nội dung trang web (children) được hiển thị bên trong Layout."}),e.jsx("div",{className:"mt-6 h-40 rounded-xl border-2 border-dashed border-zinc-200 bg-zinc-50"})]}),d=[{id:"00",name:"Sidebar Layout",component:e.jsx(_,{children:e.jsx(s,{title:"Dashboard Overview"})}),raw:ee},{id:"01",name:"Basic Sidebar Layout",component:e.jsx(ne,{children:e.jsx(s,{title:"Dashboard Overview"})}),raw:re}];return e.jsx("div",{className:"space-y-10 pb-20",children:d.map(o=>e.jsxs("section",{className:"border-b border-gray-100 pb-10 last:border-0",children:[e.jsxs("h2",{className:"mb-4 text-lg font-bold text-gray-800",children:[o.id,". ",o.name]}),e.jsx(F,{name:o.name,code:o.raw,children:o.component})]},o.id))})};export{en as default};
