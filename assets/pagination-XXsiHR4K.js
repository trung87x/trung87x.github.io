import{j as n}from"./index-BUE_4nSx.js";import{P as s}from"./PreviewWrapper-C5kxKQgy.js";import{P as e,a as t,b as r,c as a,d as o,e as g}from"./pagination-DEgCm1bu.js";import"./clsx-B-dksMZM.js";import"./button-DGx1EBOd.js";import"./link-gY3vJwZa.js";import"./useFocusRing-DcMgcFf7.js";import"./use-active-press-CdjcnPjf.js";import"./owner-C7ikqkQc.js";import"./render-CNyBWpu3.js";import"./use-slot-BZcd_w4P.js";import"./disabled-1up_um9U.js";function p(){return n.jsxs(e,{children:[n.jsx(t,{href:"?page=2"}),n.jsxs(r,{children:[n.jsx(a,{href:"?page=1",children:"1"}),n.jsx(a,{href:"?page=2",children:"2"}),n.jsx(a,{href:"?page=3",current:!0,children:"3"}),n.jsx(a,{href:"?page=4",children:"4"}),n.jsx(o,{}),n.jsx(a,{href:"?page=65",children:"65"}),n.jsx(a,{href:"?page=66",children:"66"})]}),n.jsx(g,{href:"?page=4"})]})}const h=`import {
  Pagination,
  PaginationGap,
  PaginationList,
  PaginationNext,
  PaginationPage,
  PaginationPrevious,
} from "@/components/ui-kit/pagination";

export default function Example() {
  return (
    <Pagination>
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
  );
}
`;function c(){return n.jsxs(e,{children:[n.jsx(t,{}),n.jsxs(r,{children:[n.jsx(a,{href:"?page=1",current:!0,children:"1"}),n.jsx(a,{href:"?page=2",children:"2"}),n.jsx(a,{href:"?page=3",children:"3"}),n.jsx(a,{href:"?page=4",children:"4"}),n.jsx(o,{}),n.jsx(a,{href:"?page=65",children:"65"}),n.jsx(a,{href:"?page=66",children:"66"})]}),n.jsx(g,{href:"?page=2"})]})}const x=`import {
  Pagination,
  PaginationGap,
  PaginationList,
  PaginationNext,
  PaginationPage,
  PaginationPrevious,
} from "@/components/ui-kit/pagination";

export default function Example() {
  return (
    <Pagination>
      <PaginationPrevious />
      <PaginationList>
        <PaginationPage href="?page=1" current>
          {"1"}
        </PaginationPage>
        <PaginationPage href="?page=2">2</PaginationPage>
        <PaginationPage href="?page=3">3</PaginationPage>
        <PaginationPage href="?page=4">4</PaginationPage>
        <PaginationGap />
        <PaginationPage href="?page=65">65</PaginationPage>
        <PaginationPage href="?page=66">66</PaginationPage>
      </PaginationList>
      <PaginationNext href="?page=2" />
    </Pagination>
  );
}
`;function f(){return n.jsxs(e,{children:[n.jsx(t,{href:"?page=1"}),n.jsxs(r,{children:[n.jsx(a,{href:"?page=1",children:"1"}),n.jsx(a,{href:"?page=2",current:!0,children:"2"}),n.jsx(a,{href:"?page=3",children:"3"})]}),n.jsx(g,{href:"?page=3"})]})}const m=`import {
  Pagination,
  PaginationList,
  PaginationNext,
  PaginationPage,
  PaginationPrevious,
} from "@/components/ui-kit/pagination";

export default function Example() {
  return (
    <Pagination>
      <PaginationPrevious href="?page=1" />
      <PaginationList>
        <PaginationPage href="?page=1">1</PaginationPage>
        <PaginationPage href="?page=2" current>
          2
        </PaginationPage>
        <PaginationPage href="?page=3">3</PaginationPage>
      </PaginationList>
      <PaginationNext href="?page=3" />
    </Pagination>
  );
}
`;function d(){return n.jsxs(e,{children:[n.jsx(t,{}),n.jsx(g,{href:"?after=421c1b0"})]})}const l=`import {
  Pagination,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui-kit/pagination";

export default function Example() {
  return (
    <Pagination>
      <PaginationPrevious />
      <PaginationNext href="?after=421c1b0" />
    </Pagination>
  );
}
`,$=()=>{const P=[{id:"01",name:"Basic Pagination",component:n.jsx(p,{}),raw:h},{id:"02",name:"Disabling Previous/Next Links",component:n.jsx(c,{}),raw:x},{id:"03",name:"Current Page Active State",component:n.jsx(f,{}),raw:m},{id:"04",name:"Without Page Links",component:n.jsx(d,{}),raw:l}];return n.jsx("div",{className:"space-y-10 pb-20",children:P.map(i=>n.jsxs("section",{className:"border-b border-gray-100 pb-10 last:border-0",children:[n.jsxs("h2",{className:"mb-4 text-lg font-bold text-gray-800",children:[i.id,". ",i.name]}),n.jsx(s,{name:i.name,code:i.raw,children:n.jsx("div",{className:"flex justify-center py-8",children:i.component})})]},i.id))})};export{$ as default};
