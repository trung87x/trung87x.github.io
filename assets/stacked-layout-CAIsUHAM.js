import{j as n,aO as x,aP as v,aQ as f,aR as m,aS as g,aT as S,aU as I,aI as D,aK as t,aN as N,aM as L,aJ as b,aL as y}from"./index-BYerd89Y.js";import{P as k}from"./PreviewWrapper-CTxuiFOE.js";import{A as i}from"./avatar-BI7pjPXZ.js";import{D as l,a as c,b as u,c as r,g as a,e as d}from"./dropdown-zb-R-x8K.js";import{F as p}from"./ChevronDownIcon-DTrYuY1Y.js";import{F as B}from"./MagnifyingGlassIcon-Be54N5yZ.js";import{F as R}from"./InboxIcon-D5zYykGk.js";import{F,a as M}from"./UserIcon-_ErdtdDF.js";import{F as j}from"./Cog8ToothIcon-DMP0G3lY.js";import{F as T,a as C}from"./ShieldCheckIcon-7e54h4Cn.js";import{F as A}from"./PlusIcon-DpC7D9dZ.js";import"./menu-DxEDGPye.js";import"./floating-BWvl1yvz.js";import"./element-movement-CXG5_UqN.js";import"./bugs-DsACY0mQ.js";import"./use-resolve-button-type-Cet8QFH7.js";import"./use-text-value-Cp1STAri.js";import"./use-tree-walker-BlGBSWUb.js";import"./label-DwlBodm1.js";const h=[{label:"Home",url:"/"},{label:"Events",url:"/events"},{label:"Orders",url:"/orders"},{label:"Broadcasts",url:"/broadcasts"},{label:"Settings",url:"/settings"}];function w(){return n.jsxs(u,{className:"min-w-80 lg:min-w-64",anchor:"bottom start",children:[n.jsxs(r,{href:"/teams/1/settings",children:[n.jsx(j,{}),n.jsx(a,{children:"Settings"})]}),n.jsx(d,{}),n.jsxs(r,{href:"/teams/1",children:[n.jsx(i,{slot:"icon",src:"/src/assets/images/tailwind-logo.svg"}),n.jsx(a,{children:"Tailwind Labs"})]}),n.jsxs(r,{href:"/teams/2",children:[n.jsx(i,{slot:"icon",initials:"WC",className:"bg-purple-500 text-white"}),n.jsx(a,{children:"Workcation"})]}),n.jsx(d,{}),n.jsxs(r,{href:"/teams/create",children:[n.jsx(A,{}),n.jsx(a,{children:"New team…"})]})]})}function $({children:s}){return n.jsx(x,{navbar:n.jsxs(D,{children:[n.jsxs(l,{children:[n.jsxs(c,{as:t,className:"max-lg:hidden",children:[n.jsx(i,{src:"/src/assets/images/tailwind-logo.svg"}),n.jsx(N,{children:"Tailwind Labs"}),n.jsx(p,{})]}),n.jsx(w,{})]}),n.jsx(L,{className:"max-lg:hidden"}),n.jsx(b,{className:"max-lg:hidden",children:h.map(({label:o,url:e})=>n.jsx(t,{href:e,children:o},o))}),n.jsx(y,{}),n.jsxs(b,{children:[n.jsx(t,{href:"/search","aria-label":"Search",children:n.jsx(B,{})}),n.jsx(t,{href:"/inbox","aria-label":"Inbox",children:n.jsx(R,{})}),n.jsxs(l,{children:[n.jsx(c,{as:t,children:n.jsx(i,{src:"/src/assets/images/profile-photo.svg",square:!0})}),n.jsxs(u,{className:"min-w-64",anchor:"bottom end",children:[n.jsxs(r,{href:"/my-profile",children:[n.jsx(F,{}),n.jsx(a,{children:"My profile"})]}),n.jsxs(r,{href:"/settings",children:[n.jsx(j,{}),n.jsx(a,{children:"Settings"})]}),n.jsx(d,{}),n.jsxs(r,{href:"/privacy-policy",children:[n.jsx(T,{}),n.jsx(a,{children:"Privacy policy"})]}),n.jsxs(r,{href:"/share-feedback",children:[n.jsx(C,{}),n.jsx(a,{children:"Share feedback"})]}),n.jsx(d,{}),n.jsxs(r,{href:"/logout",children:[n.jsx(M,{}),n.jsx(a,{children:"Sign out"})]})]})]})]})]}),sidebar:n.jsxs(v,{children:[n.jsx(f,{children:n.jsxs(l,{children:[n.jsxs(c,{as:m,className:"lg:mb-2.5",children:[n.jsx(i,{src:"/src/assets/images/tailwind-logo.svg"}),n.jsx(g,{children:"Tailwind Labs"}),n.jsx(p,{})]}),n.jsx(w,{})]})}),n.jsx(S,{children:n.jsx(I,{children:h.map(({label:o,url:e})=>n.jsx(m,{href:e,children:o},o))})})]}),children:s})}const P=`import { Avatar } from "@/components/ui-kit/avatar";
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
  NavbarDivider,
  NavbarItem,
  NavbarLabel,
  NavbarSection,
  NavbarSpacer,
} from "@/components/ui-kit/navbar";
import {
  Sidebar,
  SidebarBody,
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
} from "@/components/ui-kit/sidebar";
import { StackedLayout } from "@/components/ui-kit/stacked-layout";
import {
  ArrowRightStartOnRectangleIcon,
  ChevronDownIcon,
  Cog8ToothIcon,
  LightBulbIcon,
  PlusIcon,
  ShieldCheckIcon,
  UserIcon,
} from "@heroicons/react/16/solid";
import { InboxIcon, MagnifyingGlassIcon } from "@heroicons/react/20/solid";

const navItems = [
  { label: "Home", url: "/" },
  { label: "Events", url: "/events" },
  { label: "Orders", url: "/orders" },
  { label: "Broadcasts", url: "/broadcasts" },
  { label: "Settings", url: "/settings" },
];

function TeamDropdownMenu() {
  return (
    <DropdownMenu className="min-w-80 lg:min-w-64" anchor="bottom start">
      <DropdownItem href="/teams/1/settings">
        <Cog8ToothIcon />
        <DropdownLabel>Settings</DropdownLabel>
      </DropdownItem>
      <DropdownDivider />
      <DropdownItem href="/teams/1">
        <Avatar slot="icon" src="/src/assets/images/tailwind-logo.svg" />
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
  );
}

export default function Example({ children }) {
  return (
    <StackedLayout
      navbar={
        <Navbar>
          <Dropdown>
            <DropdownButton as={NavbarItem} className="max-lg:hidden">
              <Avatar src="/src/assets/images/tailwind-logo.svg" />
              <NavbarLabel>Tailwind Labs</NavbarLabel>
              <ChevronDownIcon />
            </DropdownButton>
            <TeamDropdownMenu />
          </Dropdown>
          <NavbarDivider className="max-lg:hidden" />
          <NavbarSection className="max-lg:hidden">
            {navItems.map(({ label, url }) => (
              <NavbarItem key={label} href={url}>
                {label}
              </NavbarItem>
            ))}
          </NavbarSection>
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
              <TeamDropdownMenu />
            </Dropdown>
          </SidebarHeader>
          <SidebarBody>
            <SidebarSection>
              {navItems.map(({ label, url }) => (
                <SidebarItem key={label} href={url}>
                  {label}
                </SidebarItem>
              ))}
            </SidebarSection>
          </SidebarBody>
        </Sidebar>
      }
    >
      {children}
    </StackedLayout>
  );
}
`;function E({children:s}){return n.jsx(x,{navbar:n.jsx(D,{}),sidebar:n.jsx(v,{}),children:s})}const O=`import { Navbar } from "@/components/ui-kit/navbar";
import { Sidebar } from "@/components/ui-kit/sidebar";
import { StackedLayout } from "@/components/ui-kit/stacked-layout";

export default function Example({ children }) {
  return (
    <StackedLayout
      navbar={<Navbar>{/* Your navbar content */}</Navbar>}
      sidebar={<Sidebar>{/* Your sidebar content */}</Sidebar>}
    >
      {/* Your page content */}
      {children}
    </StackedLayout>
  );
}
`,sn=()=>{const s=({title:e})=>n.jsxs("div",{className:"p-6",children:[n.jsx("h3",{className:"text-xl font-semibold text-zinc-950",children:e}),n.jsx("p",{className:"mt-2 text-zinc-600",children:"Chào Trung, đây là nội dung trang web (children) được hiển thị bên trong Layout."}),n.jsx("div",{className:"mt-6 h-40 rounded-xl border-2 border-dashed border-zinc-200 bg-zinc-50"})]}),o=[{id:"00",name:"Sidebar Layout",component:n.jsx($,{children:n.jsx(s,{title:"Dashboard Overview"})}),raw:P},{id:"01",name:"Basic Sidebar Layout",component:n.jsx(E,{children:n.jsx(s,{title:"Dashboard Overview"})}),raw:O}];return n.jsx("div",{className:"space-y-10 pb-20",children:o.map(e=>n.jsxs("section",{className:"border-b border-gray-100 pb-10 last:border-0",children:[n.jsxs("h2",{className:"mb-4 text-lg font-bold text-gray-800",children:[e.id,". ",e.name]}),n.jsx(k,{name:e.name,code:e.raw,children:e.component})]},e.id))})};export{sn as default};
