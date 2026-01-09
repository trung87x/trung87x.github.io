import{r as n,j as e,h as v,L as N,z as b,aB as w}from"./index-CvCVbuS9.js";import{P as $}from"./PreviewWrapper-TzFvRoPZ.js";import{F as j}from"./XMarkIcon-DRrKznFm.js";import{F as k}from"./Bars3Icon-DlixG59f.js";import{F as o}from"./MagnifyingGlassIcon-C0bqFgul.js";import{B as S,W as A,d as C,j as P,K as T}from"./tabs-D0YT4ZW5.js";import{h as p,v as x,D as f,L as u}from"./popover-CbBi4FOn.js";import{F as y}from"./ChevronDownIcon-CpWKsJQ8.js";import{F as W}from"./QuestionMarkCircleIcon-Clc1FLT_.js";import{F as I}from"./UserIcon-Db8bl_VK.js";import{F}from"./ShoppingCartIcon-CEiXHHz_.js";import"./use-resolve-button-type-J0J8N5g4.js";import"./floating-CjydGm1Z.js";import"./bugs-qQ_SbDk4.js";const c={categories:[{id:"women",name:"Women",featured:[{name:"New Arrivals",href:"#",imageSrc:"https://tailwindui.com/plus-assets/img/ecommerce-images/mega-menu-category-01.jpg",imageAlt:"Models sitting back to back, wearing Basic Tee in black and bone."},{name:"Basic Tees",href:"#",imageSrc:"https://tailwindui.com/plus-assets/img/ecommerce-images/mega-menu-category-02.jpg",imageAlt:"Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees."}],sections:[{id:"clothing",name:"Clothing",items:[{name:"Tops",href:"#"},{name:"Dresses",href:"#"},{name:"Pants",href:"#"},{name:"Denim",href:"#"},{name:"Sweaters",href:"#"},{name:"T-Shirts",href:"#"},{name:"Jackets",href:"#"},{name:"Activewear",href:"#"},{name:"Browse All",href:"#"}]},{id:"accessories",name:"Accessories",items:[{name:"Watches",href:"#"},{name:"Wallets",href:"#"},{name:"Bags",href:"#"},{name:"Sunglasses",href:"#"},{name:"Hats",href:"#"},{name:"Belts",href:"#"}]},{id:"brands",name:"Brands",items:[{name:"Full Nelson",href:"#"},{name:"My Way",href:"#"},{name:"Re-Arranged",href:"#"},{name:"Counterfeit",href:"#"},{name:"Significant Other",href:"#"}]}]},{id:"men",name:"Men",featured:[{name:"New Arrivals",href:"#",imageSrc:"https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",imageAlt:"Drawstring top with elastic loop closure and textured interior padding."},{name:"Artwork Tees",href:"#",imageSrc:"https://tailwindui.com/plus-assets/img/ecommerce-images/category-page-02-image-card-06.jpg",imageAlt:"Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt."}],sections:[{id:"clothing",name:"Clothing",items:[{name:"Tops",href:"#"},{name:"Pants",href:"#"},{name:"Sweaters",href:"#"},{name:"T-Shirts",href:"#"},{name:"Jackets",href:"#"},{name:"Activewear",href:"#"},{name:"Browse All",href:"#"}]},{id:"accessories",name:"Accessories",items:[{name:"Watches",href:"#"},{name:"Wallets",href:"#"},{name:"Bags",href:"#"},{name:"Sunglasses",href:"#"},{name:"Hats",href:"#"},{name:"Belts",href:"#"}]},{id:"brands",name:"Brands",items:[{name:"Re-Arranged",href:"#"},{name:"Counterfeit",href:"#"},{name:"Full Nelson",href:"#"},{name:"My Way",href:"#"}]}]}],pages:[{name:"Company",href:"#"},{name:"Stores",href:"#"}]};function G(){const[i,r]=n.useState(!1);return e.jsxs("div",{className:"bg-white",children:[e.jsxs(v,{open:i,onClose:r,className:"relative z-40 lg:hidden",children:[e.jsx(N,{transition:!0,className:"fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"}),e.jsx("div",{className:"fixed inset-0 z-40 flex",children:e.jsxs(b,{transition:!0,className:"relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-closed:-translate-x-full",children:[e.jsx("div",{className:"flex px-4 pt-5 pb-2",children:e.jsxs("button",{type:"button",onClick:()=>r(!1),className:"relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400",children:[e.jsx("span",{className:"absolute -inset-0.5"}),e.jsx("span",{className:"sr-only",children:"Close menu"}),e.jsx(j,{"aria-hidden":"true",className:"size-6"})]})}),e.jsxs(S,{className:"mt-2",children:[e.jsx("div",{className:"border-b border-gray-200",children:e.jsx(A,{className:"-mb-px flex space-x-8 px-4",children:c.categories.map(a=>e.jsx(C,{className:"flex-1 border-b-2 border-transparent px-1 py-4 text-base font-medium whitespace-nowrap text-gray-900 data-selected:border-indigo-600 data-selected:text-indigo-600",children:a.name},a.name))})}),e.jsx(P,{as:n.Fragment,children:c.categories.map(a=>e.jsxs(T,{className:"space-y-10 px-4 pt-10 pb-8",children:[e.jsx("div",{className:"grid grid-cols-2 gap-x-4",children:a.featured.map(s=>e.jsxs("div",{className:"group relative text-sm",children:[e.jsx("img",{alt:s.imageAlt,src:s.imageSrc,className:"aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"}),e.jsxs("a",{href:s.href,className:"mt-6 block font-medium text-gray-900",children:[e.jsx("span",{"aria-hidden":"true",className:"absolute inset-0 z-10"}),s.name]}),e.jsx("p",{"aria-hidden":"true",className:"mt-1",children:"Shop now"})]},s.name))}),a.sections.map(s=>e.jsxs("div",{children:[e.jsx("p",{id:`${a.id}-${s.id}-heading-mobile`,className:"font-medium text-gray-900",children:s.name}),e.jsx("ul",{role:"list","aria-labelledby":`${a.id}-${s.id}-heading-mobile`,className:"mt-6 flex flex-col space-y-6",children:s.items.map(t=>e.jsx("li",{className:"flow-root",children:e.jsx("a",{href:t.href,className:"-m-2 block p-2 text-gray-500",children:t.name})},t.name))})]},s.name))]},a.name))})]}),e.jsx("div",{className:"space-y-6 border-t border-gray-200 px-4 py-6",children:c.pages.map(a=>e.jsx("div",{className:"flow-root",children:e.jsx("a",{href:a.href,className:"-m-2 block p-2 font-medium text-gray-900",children:a.name})},a.name))}),e.jsxs("div",{className:"space-y-6 border-t border-gray-200 px-4 py-6",children:[e.jsx("div",{className:"flow-root",children:e.jsx("a",{href:"#",className:"-m-2 block p-2 font-medium text-gray-900",children:"Sign in"})}),e.jsx("div",{className:"flow-root",children:e.jsx("a",{href:"#",className:"-m-2 block p-2 font-medium text-gray-900",children:"Create account"})})]}),e.jsx("div",{className:"border-t border-gray-200 px-4 py-6",children:e.jsxs("a",{href:"#",className:"-m-2 flex items-center p-2",children:[e.jsx("img",{alt:"",src:"https://tailwindui.com/plus-assets/img/flags/flag-canada.svg",className:"block h-auto w-5 shrink-0"}),e.jsx("span",{className:"ml-3 block text-base font-medium text-gray-900",children:"CAD"}),e.jsx("span",{className:"sr-only",children:", change currency"})]})})]})})]}),e.jsxs("header",{className:"relative bg-white",children:[e.jsx("p",{className:"flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8",children:"Get free delivery on orders over $100"}),e.jsx("nav",{"aria-label":"Top",className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:e.jsx("div",{className:"border-b border-gray-200",children:e.jsxs("div",{className:"flex h-16 items-center",children:[e.jsxs("button",{type:"button",onClick:()=>r(!0),className:"relative rounded-md bg-white p-2 text-gray-400 lg:hidden",children:[e.jsx("span",{className:"absolute -inset-0.5"}),e.jsx("span",{className:"sr-only",children:"Open menu"}),e.jsx(k,{"aria-hidden":"true",className:"size-6"})]}),e.jsx("div",{className:"ml-4 flex lg:ml-0",children:e.jsxs("a",{href:"#",children:[e.jsx("span",{className:"sr-only",children:"Your Company"}),e.jsx("img",{alt:"",src:"https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600",className:"h-8 w-auto"})]})}),e.jsx(p,{className:"hidden lg:ml-8 lg:block lg:self-stretch",children:e.jsxs("div",{className:"flex h-full space-x-8",children:[c.categories.map(a=>e.jsxs(x,{className:"flex",children:[e.jsx("div",{className:"relative flex",children:e.jsx(f,{className:"relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800 data-open:border-indigo-600 data-open:text-indigo-600",children:a.name})}),e.jsxs(u,{transition:!0,className:"absolute inset-x-0 top-full text-sm text-gray-500 transition data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in",children:[e.jsx("div",{"aria-hidden":"true",className:"absolute inset-0 top-1/2 bg-white shadow-sm"}),e.jsx("div",{className:"relative bg-white",children:e.jsx("div",{className:"mx-auto max-w-7xl px-8",children:e.jsxs("div",{className:"grid grid-cols-2 gap-x-8 gap-y-10 py-16",children:[e.jsx("div",{className:"col-start-2 grid grid-cols-2 gap-x-8",children:a.featured.map(s=>e.jsxs("div",{className:"group relative text-base sm:text-sm",children:[e.jsx("img",{alt:s.imageAlt,src:s.imageSrc,className:"aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"}),e.jsxs("a",{href:s.href,className:"mt-6 block font-medium text-gray-900",children:[e.jsx("span",{"aria-hidden":"true",className:"absolute inset-0 z-10"}),s.name]}),e.jsx("p",{"aria-hidden":"true",className:"mt-1",children:"Shop now"})]},s.name))}),e.jsx("div",{className:"row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm",children:a.sections.map(s=>e.jsxs("div",{children:[e.jsx("p",{id:`${s.name}-heading`,className:"font-medium text-gray-900",children:s.name}),e.jsx("ul",{role:"list","aria-labelledby":`${s.name}-heading`,className:"mt-6 space-y-6 sm:mt-4 sm:space-y-4",children:s.items.map(t=>e.jsx("li",{className:"flex",children:e.jsx("a",{href:t.href,className:"hover:text-gray-800",children:t.name})},t.name))})]},s.name))})]})})})]})]},a.name)),c.pages.map(a=>e.jsx("a",{href:a.href,className:"flex items-center text-sm font-medium text-gray-700 hover:text-gray-800",children:a.name},a.name))]})}),e.jsxs("div",{className:"ml-auto flex items-center",children:[e.jsxs("div",{className:"hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6",children:[e.jsx("a",{href:"#",className:"text-sm font-medium text-gray-700 hover:text-gray-800",children:"Sign in"}),e.jsx("span",{"aria-hidden":"true",className:"h-6 w-px bg-gray-200"}),e.jsx("a",{href:"#",className:"text-sm font-medium text-gray-700 hover:text-gray-800",children:"Create account"})]}),e.jsx("div",{className:"hidden lg:ml-8 lg:flex",children:e.jsxs("a",{href:"#",className:"flex items-center text-gray-700 hover:text-gray-800",children:[e.jsx("img",{alt:"",src:"https://tailwindui.com/plus-assets/img/flags/flag-canada.svg",className:"block h-auto w-5 shrink-0"}),e.jsx("span",{className:"ml-3 block text-sm font-medium",children:"CAD"}),e.jsx("span",{className:"sr-only",children:", change currency"})]})}),e.jsx("div",{className:"flex lg:ml-6",children:e.jsxs("a",{href:"#",className:"p-2 text-gray-400 hover:text-gray-500",children:[e.jsx("span",{className:"sr-only",children:"Search"}),e.jsx(o,{"aria-hidden":"true",className:"size-6"})]})}),e.jsx("div",{className:"ml-4 flow-root lg:ml-6",children:e.jsxs("a",{href:"#",className:"group -m-2 flex items-center p-2",children:[e.jsx(w,{"aria-hidden":"true",className:"size-6 shrink-0 text-gray-400 group-hover:text-gray-500"}),e.jsx("span",{className:"ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800",children:"0"}),e.jsx("span",{className:"sr-only",children:"items in cart, view bag"})]})})]})]})})})]})]})}const O=`'use client'

import { Fragment, useState } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = {
  categories: [
    {
      id: 'women',
      name: 'Women',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', href: '#' },
            { name: 'Dresses', href: '#' },
            { name: 'Pants', href: '#' },
            { name: 'Denim', href: '#' },
            { name: 'Sweaters', href: '#' },
            { name: 'T-Shirts', href: '#' },
            { name: 'Jackets', href: '#' },
            { name: 'Activewear', href: '#' },
            { name: 'Browse All', href: '#' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', href: '#' },
            { name: 'Wallets', href: '#' },
            { name: 'Bags', href: '#' },
            { name: 'Sunglasses', href: '#' },
            { name: 'Hats', href: '#' },
            { name: 'Belts', href: '#' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Full Nelson', href: '#' },
            { name: 'My Way', href: '#' },
            { name: 'Re-Arranged', href: '#' },
            { name: 'Counterfeit', href: '#' },
            { name: 'Significant Other', href: '#' },
          ],
        },
      ],
    },
    {
      id: 'men',
      name: 'Men',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc:
            'https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
          imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'Artwork Tees',
          href: '#',
          imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/category-page-02-image-card-06.jpg',
          imageAlt:
            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', href: '#' },
            { name: 'Pants', href: '#' },
            { name: 'Sweaters', href: '#' },
            { name: 'T-Shirts', href: '#' },
            { name: 'Jackets', href: '#' },
            { name: 'Activewear', href: '#' },
            { name: 'Browse All', href: '#' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', href: '#' },
            { name: 'Wallets', href: '#' },
            { name: 'Bags', href: '#' },
            { name: 'Sunglasses', href: '#' },
            { name: 'Hats', href: '#' },
            { name: 'Belts', href: '#' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Re-Arranged', href: '#' },
            { name: 'Counterfeit', href: '#' },
            { name: 'Full Nelson', href: '#' },
            { name: 'My Way', href: '#' },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: 'Company', href: '#' },
    { name: 'Stores', href: '#' },
  ],
}

export default function Example() {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
        />

        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-closed:-translate-x-full"
          >
            <div className="flex px-4 pt-5 pb-2">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>

            {/* Links */}
            <TabGroup className="mt-2">
              <div className="border-b border-gray-200">
                <TabList className="-mb-px flex space-x-8 px-4">
                  {navigation.categories.map((category) => (
                    <Tab
                      key={category.name}
                      className="flex-1 border-b-2 border-transparent px-1 py-4 text-base font-medium whitespace-nowrap text-gray-900 data-selected:border-indigo-600 data-selected:text-indigo-600"
                    >
                      {category.name}
                    </Tab>
                  ))}
                </TabList>
              </div>
              <TabPanels as={Fragment}>
                {navigation.categories.map((category) => (
                  <TabPanel key={category.name} className="space-y-10 px-4 pt-10 pb-8">
                    <div className="grid grid-cols-2 gap-x-4">
                      {category.featured.map((item) => (
                        <div key={item.name} className="group relative text-sm">
                          <img
                            alt={item.imageAlt}
                            src={item.imageSrc}
                            className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
                          />
                          <a href={item.href} className="mt-6 block font-medium text-gray-900">
                            <span aria-hidden="true" className="absolute inset-0 z-10" />
                            {item.name}
                          </a>
                          <p aria-hidden="true" className="mt-1">
                            Shop now
                          </p>
                        </div>
                      ))}
                    </div>
                    {category.sections.map((section) => (
                      <div key={section.name}>
                        <p id={\`\${category.id}-\${section.id}-heading-mobile\`} className="font-medium text-gray-900">
                          {section.name}
                        </p>
                        <ul
                          role="list"
                          aria-labelledby={\`\${category.id}-\${section.id}-heading-mobile\`}
                          className="mt-6 flex flex-col space-y-6"
                        >
                          {section.items.map((item) => (
                            <li key={item.name} className="flow-root">
                              <a href={item.href} className="-m-2 block p-2 text-gray-500">
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              {navigation.pages.map((page) => (
                <div key={page.name} className="flow-root">
                  <a href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                    {page.name}
                  </a>
                </div>
              ))}
            </div>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              <div className="flow-root">
                <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                  Sign in
                </a>
              </div>
              <div className="flow-root">
                <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                  Create account
                </a>
              </div>
            </div>

            <div className="border-t border-gray-200 px-4 py-6">
              <a href="#" className="-m-2 flex items-center p-2">
                <img
                  alt=""
                  src="https://tailwindui.com/plus-assets/img/flags/flag-canada.svg"
                  className="block h-auto w-5 shrink-0"
                />
                <span className="ml-3 block text-base font-medium text-gray-900">CAD</span>
                <span className="sr-only">, change currency</span>
              </a>
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      <header className="relative bg-white">
        <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          Get free delivery on orders over $100
        </p>

        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <a href="#">
                  <span className="sr-only">Your Company</span>
                  <img
                    alt=""
                    src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                    className="h-8 w-auto"
                  />
                </a>
              </div>

              {/* Flyout menus */}
              <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      <div className="relative flex">
                        <PopoverButton className="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800 data-open:border-indigo-600 data-open:text-indigo-600">
                          {category.name}
                        </PopoverButton>
                      </div>

                      <PopoverPanel
                        transition
                        className="absolute inset-x-0 top-full text-sm text-gray-500 transition data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                      >
                        {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                        <div aria-hidden="true" className="absolute inset-0 top-1/2 bg-white shadow-sm" />

                        <div className="relative bg-white">
                          <div className="mx-auto max-w-7xl px-8">
                            <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                              <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                {category.featured.map((item) => (
                                  <div key={item.name} className="group relative text-base sm:text-sm">
                                    <img
                                      alt={item.imageAlt}
                                      src={item.imageSrc}
                                      className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
                                    />
                                    <a href={item.href} className="mt-6 block font-medium text-gray-900">
                                      <span aria-hidden="true" className="absolute inset-0 z-10" />
                                      {item.name}
                                    </a>
                                    <p aria-hidden="true" className="mt-1">
                                      Shop now
                                    </p>
                                  </div>
                                ))}
                              </div>
                              <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                {category.sections.map((section) => (
                                  <div key={section.name}>
                                    <p id={\`\${section.name}-heading\`} className="font-medium text-gray-900">
                                      {section.name}
                                    </p>
                                    <ul
                                      role="list"
                                      aria-labelledby={\`\${section.name}-heading\`}
                                      className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                    >
                                      {section.items.map((item) => (
                                        <li key={item.name} className="flex">
                                          <a href={item.href} className="hover:text-gray-800">
                                            {item.name}
                                          </a>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </PopoverPanel>
                    </Popover>
                  ))}

                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </PopoverGroup>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    Sign in
                  </a>
                  <span aria-hidden="true" className="h-6 w-px bg-gray-200" />
                  <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    Create account
                  </a>
                </div>

                <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700 hover:text-gray-800">
                    <img
                      alt=""
                      src="https://tailwindui.com/plus-assets/img/flags/flag-canada.svg"
                      className="block h-auto w-5 shrink-0"
                    />
                    <span className="ml-3 block text-sm font-medium">CAD</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>

                {/* Search */}
                <div className="flex lg:ml-6">
                  <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon aria-hidden="true" className="size-6" />
                  </a>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <a href="#" className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                      aria-hidden="true"
                      className="size-6 shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
`,B=["CAD","USD","AUD","EUR","GBP"],d={categories:[{name:"Women",featured:[{name:"New Arrivals",href:"#",imageSrc:"https://tailwindui.com/plus-assets/img/ecommerce-images/mega-menu-category-01.jpg",imageAlt:"Models sitting back to back, wearing Basic Tee in black and bone."},{name:"Basic Tees",href:"#",imageSrc:"https://tailwindui.com/plus-assets/img/ecommerce-images/mega-menu-category-02.jpg",imageAlt:"Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees."},{name:"Accessories",href:"#",imageSrc:"https://tailwindui.com/plus-assets/img/ecommerce-images/mega-menu-category-03.jpg",imageAlt:"Model wearing minimalist watch with black wristband and white watch face."},{name:"Carry",href:"#",imageSrc:"https://tailwindui.com/plus-assets/img/ecommerce-images/mega-menu-category-04.jpg",imageAlt:"Model opening tan leather long wallet with credit card pockets and cash pouch."}]},{name:"Men",featured:[{name:"New Arrivals",href:"#",imageSrc:"https://tailwindui.com/plus-assets/img/ecommerce-images/mega-menu-01-men-category-01.jpg",imageAlt:"Hats and sweaters on wood shelves next to various colors of t-shirts on hangers."},{name:"Basic Tees",href:"#",imageSrc:"https://tailwindui.com/plus-assets/img/ecommerce-images/mega-menu-01-men-category-02.jpg",imageAlt:"Model wearing light heather gray t-shirt."},{name:"Accessories",href:"#",imageSrc:"https://tailwindui.com/plus-assets/img/ecommerce-images/mega-menu-01-men-category-03.jpg",imageAlt:"Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body."},{name:"Carry",href:"#",imageSrc:"https://tailwindui.com/plus-assets/img/ecommerce-images/mega-menu-01-men-category-04.jpg",imageAlt:"Model putting folded cash into slim card holder olive leather wallet with hand stitching."}]}],pages:[{name:"Company",href:"#"},{name:"Stores",href:"#"}]};function R(){const[i,r]=n.useState(!1);return e.jsxs("div",{className:"bg-white",children:[e.jsxs(v,{open:i,onClose:r,className:"relative z-40 lg:hidden",children:[e.jsx(N,{transition:!0,className:"fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"}),e.jsx("div",{className:"fixed inset-0 z-40 flex",children:e.jsxs(b,{transition:!0,className:"relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-closed:-translate-x-full",children:[e.jsx("div",{className:"flex px-4 pt-5 pb-2",children:e.jsxs("button",{type:"button",onClick:()=>r(!1),className:"-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400",children:[e.jsx("span",{className:"sr-only",children:"Close menu"}),e.jsx(j,{"aria-hidden":"true",className:"size-6"})]})}),e.jsxs(S,{className:"mt-2",children:[e.jsx("div",{className:"border-b border-gray-200",children:e.jsx(A,{className:"-mb-px flex space-x-8 px-4",children:d.categories.map(a=>e.jsx(C,{className:"flex-1 border-b-2 border-transparent px-1 py-4 text-base font-medium whitespace-nowrap text-gray-900 data-selected:border-indigo-600 data-selected:text-indigo-600",children:a.name},a.name))})}),e.jsx(P,{as:n.Fragment,children:d.categories.map(a=>e.jsx(T,{className:"space-y-12 px-4 py-6",children:e.jsx("div",{className:"grid grid-cols-2 gap-x-4 gap-y-10",children:a.featured.map(s=>e.jsxs("div",{className:"group relative",children:[e.jsx("img",{alt:s.imageAlt,src:s.imageSrc,className:"aspect-square w-full rounded-md bg-gray-100 object-cover group-hover:opacity-75"}),e.jsxs("a",{href:s.href,className:"mt-6 block text-sm font-medium text-gray-900",children:[e.jsx("span",{"aria-hidden":"true",className:"absolute inset-0 z-10"}),s.name]}),e.jsx("p",{"aria-hidden":"true",className:"mt-1 text-sm text-gray-500",children:"Shop now"})]},s.name))})},a.name))})]}),e.jsx("div",{className:"space-y-6 border-t border-gray-200 px-4 py-6",children:d.pages.map(a=>e.jsx("div",{className:"flow-root",children:e.jsx("a",{href:a.href,className:"-m-2 block p-2 font-medium text-gray-900",children:a.name})},a.name))}),e.jsxs("div",{className:"space-y-6 border-t border-gray-200 px-4 py-6",children:[e.jsx("div",{className:"flow-root",children:e.jsx("a",{href:"#",className:"-m-2 block p-2 font-medium text-gray-900",children:"Create an account"})}),e.jsx("div",{className:"flow-root",children:e.jsx("a",{href:"#",className:"-m-2 block p-2 font-medium text-gray-900",children:"Sign in"})})]}),e.jsx("div",{className:"space-y-6 border-t border-gray-200 px-4 py-6",children:e.jsx("form",{children:e.jsxs("div",{className:"-ml-2 inline-grid grid-cols-1",children:[e.jsx("select",{id:"mobile-currency",name:"currency","aria-label":"Currency",className:"col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-0.5 pr-7 pl-2 text-base font-medium text-gray-700 group-hover:text-gray-800 focus:outline-2 sm:text-sm/6",children:B.map(a=>e.jsx("option",{children:a},a))}),e.jsx(y,{"aria-hidden":"true",className:"pointer-events-none col-start-1 row-start-1 mr-1 size-5 self-center justify-self-end fill-gray-500"})]})})})]})})]}),e.jsx("header",{className:"relative",children:e.jsxs("nav",{"aria-label":"Top",children:[e.jsx("div",{className:"bg-gray-900",children:e.jsxs("div",{className:"mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8",children:[e.jsx("form",{children:e.jsxs("div",{className:"-ml-2 inline-grid grid-cols-1",children:[e.jsx("select",{id:"desktop-currency",name:"currency","aria-label":"Currency",className:"col-start-1 row-start-1 w-full appearance-none rounded-md bg-gray-900 py-0.5 pr-7 pl-2 text-left text-base font-medium text-white focus:outline-2 focus:-outline-offset-1 focus:outline-white sm:text-sm/6",children:B.map(a=>e.jsx("option",{children:a},a))}),e.jsx(y,{"aria-hidden":"true",className:"pointer-events-none col-start-1 row-start-1 mr-1 size-5 self-center justify-self-end fill-gray-300"})]})}),e.jsxs("div",{className:"flex items-center space-x-6",children:[e.jsx("a",{href:"#",className:"text-sm font-medium text-white hover:text-gray-100",children:"Sign in"}),e.jsx("a",{href:"#",className:"text-sm font-medium text-white hover:text-gray-100",children:"Create an account"})]})]})}),e.jsx("div",{className:"bg-white",children:e.jsx("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:e.jsx("div",{className:"border-b border-gray-200",children:e.jsxs("div",{className:"flex h-16 items-center justify-between",children:[e.jsx("div",{className:"hidden lg:flex lg:flex-1 lg:items-center",children:e.jsxs("a",{href:"#",children:[e.jsx("span",{className:"sr-only",children:"Your Company"}),e.jsx("img",{alt:"",src:"https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600",className:"h-8 w-auto"})]})}),e.jsx("div",{className:"hidden h-full lg:flex",children:e.jsx(p,{className:"inset-x-0 bottom-0 px-4",children:e.jsxs("div",{className:"flex h-full justify-center space-x-8",children:[d.categories.map(a=>e.jsxs(x,{className:"flex",children:[e.jsx("div",{className:"relative flex",children:e.jsx(f,{className:"relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800 data-open:border-indigo-600 data-open:text-indigo-600",children:a.name})}),e.jsxs(u,{transition:!0,className:"absolute inset-x-0 top-full text-sm text-gray-500 transition data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in",children:[e.jsx("div",{"aria-hidden":"true",className:"absolute inset-0 top-1/2 bg-white shadow-sm"}),e.jsx("div",{className:"relative bg-white",children:e.jsx("div",{className:"mx-auto max-w-7xl px-8",children:e.jsx("div",{className:"grid grid-cols-4 gap-x-8 gap-y-10 py-16",children:a.featured.map(s=>e.jsxs("div",{className:"group relative",children:[e.jsx("img",{alt:s.imageAlt,src:s.imageSrc,className:"aspect-square w-full rounded-md bg-gray-100 object-cover group-hover:opacity-75"}),e.jsxs("a",{href:s.href,className:"mt-4 block font-medium text-gray-900",children:[e.jsx("span",{"aria-hidden":"true",className:"absolute inset-0 z-10"}),s.name]}),e.jsx("p",{"aria-hidden":"true",className:"mt-1",children:"Shop now"})]},s.name))})})})]})]},a.name)),d.pages.map(a=>e.jsx("a",{href:a.href,className:"flex items-center text-sm font-medium text-gray-700 hover:text-gray-800",children:a.name},a.name))]})})}),e.jsxs("div",{className:"flex flex-1 items-center lg:hidden",children:[e.jsxs("button",{type:"button",onClick:()=>r(!0),className:"-ml-2 rounded-md bg-white p-2 text-gray-400",children:[e.jsx("span",{className:"sr-only",children:"Open menu"}),e.jsx(k,{"aria-hidden":"true",className:"size-6"})]}),e.jsxs("a",{href:"#",className:"ml-2 p-2 text-gray-400 hover:text-gray-500",children:[e.jsx("span",{className:"sr-only",children:"Search"}),e.jsx(o,{"aria-hidden":"true",className:"size-6"})]})]}),e.jsxs("a",{href:"#",className:"lg:hidden",children:[e.jsx("span",{className:"sr-only",children:"Your Company"}),e.jsx("img",{alt:"",src:"https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600",className:"h-8 w-auto"})]}),e.jsxs("div",{className:"flex flex-1 items-center justify-end",children:[e.jsx("a",{href:"#",className:"hidden text-sm font-medium text-gray-700 hover:text-gray-800 lg:block",children:"Search"}),e.jsxs("div",{className:"flex items-center lg:ml-8",children:[e.jsxs("a",{href:"#",className:"p-2 text-gray-400 hover:text-gray-500 lg:hidden",children:[e.jsx("span",{className:"sr-only",children:"Help"}),e.jsx(W,{"aria-hidden":"true",className:"size-6"})]}),e.jsx("a",{href:"#",className:"hidden text-sm font-medium text-gray-700 hover:text-gray-800 lg:block",children:"Help"}),e.jsx("div",{className:"ml-4 flow-root lg:ml-8",children:e.jsxs("a",{href:"#",className:"group -m-2 flex items-center p-2",children:[e.jsx(w,{"aria-hidden":"true",className:"size-6 shrink-0 text-gray-400 group-hover:text-gray-500"}),e.jsx("span",{className:"ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800",children:"0"}),e.jsx("span",{className:"sr-only",children:"items in cart, view bag"})]})})]})]})]})})})})]})})]})}const L=`'use client'

import { Fragment, useState } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@headlessui/react'
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const currencies = ['CAD', 'USD', 'AUD', 'EUR', 'GBP']
const navigation = {
  categories: [
    {
      name: 'Women',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
        {
          name: 'Accessories',
          href: '#',
          imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/mega-menu-category-03.jpg',
          imageAlt: 'Model wearing minimalist watch with black wristband and white watch face.',
        },
        {
          name: 'Carry',
          href: '#',
          imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/mega-menu-category-04.jpg',
          imageAlt: 'Model opening tan leather long wallet with credit card pockets and cash pouch.',
        },
      ],
    },
    {
      name: 'Men',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/mega-menu-01-men-category-01.jpg',
          imageAlt: 'Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.',
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/mega-menu-01-men-category-02.jpg',
          imageAlt: 'Model wearing light heather gray t-shirt.',
        },
        {
          name: 'Accessories',
          href: '#',
          imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/mega-menu-01-men-category-03.jpg',
          imageAlt:
            'Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body.',
        },
        {
          name: 'Carry',
          href: '#',
          imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/mega-menu-01-men-category-04.jpg',
          imageAlt: 'Model putting folded cash into slim card holder olive leather wallet with hand stitching.',
        },
      ],
    },
  ],
  pages: [
    { name: 'Company', href: '#' },
    { name: 'Stores', href: '#' },
  ],
}

export default function Example() {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
        />

        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-closed:-translate-x-full"
          >
            <div className="flex px-4 pt-5 pb-2">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>

            {/* Links */}
            <TabGroup className="mt-2">
              <div className="border-b border-gray-200">
                <TabList className="-mb-px flex space-x-8 px-4">
                  {navigation.categories.map((category) => (
                    <Tab
                      key={category.name}
                      className="flex-1 border-b-2 border-transparent px-1 py-4 text-base font-medium whitespace-nowrap text-gray-900 data-selected:border-indigo-600 data-selected:text-indigo-600"
                    >
                      {category.name}
                    </Tab>
                  ))}
                </TabList>
              </div>
              <TabPanels as={Fragment}>
                {navigation.categories.map((category) => (
                  <TabPanel key={category.name} className="space-y-12 px-4 py-6">
                    <div className="grid grid-cols-2 gap-x-4 gap-y-10">
                      {category.featured.map((item) => (
                        <div key={item.name} className="group relative">
                          <img
                            alt={item.imageAlt}
                            src={item.imageSrc}
                            className="aspect-square w-full rounded-md bg-gray-100 object-cover group-hover:opacity-75"
                          />
                          <a href={item.href} className="mt-6 block text-sm font-medium text-gray-900">
                            <span aria-hidden="true" className="absolute inset-0 z-10" />
                            {item.name}
                          </a>
                          <p aria-hidden="true" className="mt-1 text-sm text-gray-500">
                            Shop now
                          </p>
                        </div>
                      ))}
                    </div>
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              {navigation.pages.map((page) => (
                <div key={page.name} className="flow-root">
                  <a href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                    {page.name}
                  </a>
                </div>
              ))}
            </div>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              <div className="flow-root">
                <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                  Create an account
                </a>
              </div>
              <div className="flow-root">
                <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                  Sign in
                </a>
              </div>
            </div>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              {/* Currency selector */}
              <form>
                <div className="-ml-2 inline-grid grid-cols-1">
                  <select
                    id="mobile-currency"
                    name="currency"
                    aria-label="Currency"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-0.5 pr-7 pl-2 text-base font-medium text-gray-700 group-hover:text-gray-800 focus:outline-2 sm:text-sm/6"
                  >
                    {currencies.map((currency) => (
                      <option key={currency}>{currency}</option>
                    ))}
                  </select>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-1 size-5 self-center justify-self-end fill-gray-500"
                  />
                </div>
              </form>
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      <header className="relative">
        <nav aria-label="Top">
          {/* Top navigation */}
          <div className="bg-gray-900">
            <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
              {/* Currency selector */}
              <form>
                <div className="-ml-2 inline-grid grid-cols-1">
                  <select
                    id="desktop-currency"
                    name="currency"
                    aria-label="Currency"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-gray-900 py-0.5 pr-7 pl-2 text-left text-base font-medium text-white focus:outline-2 focus:-outline-offset-1 focus:outline-white sm:text-sm/6"
                  >
                    {currencies.map((currency) => (
                      <option key={currency}>{currency}</option>
                    ))}
                  </select>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-1 size-5 self-center justify-self-end fill-gray-300"
                  />
                </div>
              </form>

              <div className="flex items-center space-x-6">
                <a href="#" className="text-sm font-medium text-white hover:text-gray-100">
                  Sign in
                </a>
                <a href="#" className="text-sm font-medium text-white hover:text-gray-100">
                  Create an account
                </a>
              </div>
            </div>
          </div>

          {/* Secondary navigation */}
          <div className="bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="border-b border-gray-200">
                <div className="flex h-16 items-center justify-between">
                  {/* Logo (lg+) */}
                  <div className="hidden lg:flex lg:flex-1 lg:items-center">
                    <a href="#">
                      <span className="sr-only">Your Company</span>
                      <img
                        alt=""
                        src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                        className="h-8 w-auto"
                      />
                    </a>
                  </div>

                  <div className="hidden h-full lg:flex">
                    {/* Flyout menus */}
                    <PopoverGroup className="inset-x-0 bottom-0 px-4">
                      <div className="flex h-full justify-center space-x-8">
                        {navigation.categories.map((category) => (
                          <Popover key={category.name} className="flex">
                            <div className="relative flex">
                              <PopoverButton className="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800 data-open:border-indigo-600 data-open:text-indigo-600">
                                {category.name}
                              </PopoverButton>
                            </div>

                            <PopoverPanel
                              transition
                              className="absolute inset-x-0 top-full text-sm text-gray-500 transition data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                            >
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div aria-hidden="true" className="absolute inset-0 top-1/2 bg-white shadow-sm" />

                              <div className="relative bg-white">
                                <div className="mx-auto max-w-7xl px-8">
                                  <div className="grid grid-cols-4 gap-x-8 gap-y-10 py-16">
                                    {category.featured.map((item) => (
                                      <div key={item.name} className="group relative">
                                        <img
                                          alt={item.imageAlt}
                                          src={item.imageSrc}
                                          className="aspect-square w-full rounded-md bg-gray-100 object-cover group-hover:opacity-75"
                                        />
                                        <a href={item.href} className="mt-4 block font-medium text-gray-900">
                                          <span aria-hidden="true" className="absolute inset-0 z-10" />
                                          {item.name}
                                        </a>
                                        <p aria-hidden="true" className="mt-1">
                                          Shop now
                                        </p>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </PopoverPanel>
                          </Popover>
                        ))}

                        {navigation.pages.map((page) => (
                          <a
                            key={page.name}
                            href={page.href}
                            className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                          >
                            {page.name}
                          </a>
                        ))}
                      </div>
                    </PopoverGroup>
                  </div>

                  {/* Mobile menu and search (lg-) */}
                  <div className="flex flex-1 items-center lg:hidden">
                    <button
                      type="button"
                      onClick={() => setOpen(true)}
                      className="-ml-2 rounded-md bg-white p-2 text-gray-400"
                    >
                      <span className="sr-only">Open menu</span>
                      <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>

                    {/* Search */}
                    <a href="#" className="ml-2 p-2 text-gray-400 hover:text-gray-500">
                      <span className="sr-only">Search</span>
                      <MagnifyingGlassIcon aria-hidden="true" className="size-6" />
                    </a>
                  </div>

                  {/* Logo (lg-) */}
                  <a href="#" className="lg:hidden">
                    <span className="sr-only">Your Company</span>
                    <img
                      alt=""
                      src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                      className="h-8 w-auto"
                    />
                  </a>

                  <div className="flex flex-1 items-center justify-end">
                    <a href="#" className="hidden text-sm font-medium text-gray-700 hover:text-gray-800 lg:block">
                      Search
                    </a>

                    <div className="flex items-center lg:ml-8">
                      {/* Help */}
                      <a href="#" className="p-2 text-gray-400 hover:text-gray-500 lg:hidden">
                        <span className="sr-only">Help</span>
                        <QuestionMarkCircleIcon aria-hidden="true" className="size-6" />
                      </a>
                      <a href="#" className="hidden text-sm font-medium text-gray-700 hover:text-gray-800 lg:block">
                        Help
                      </a>

                      {/* Cart */}
                      <div className="ml-4 flow-root lg:ml-8">
                        <a href="#" className="group -m-2 flex items-center p-2">
                          <ShoppingBagIcon
                            aria-hidden="true"
                            className="size-6 shrink-0 text-gray-400 group-hover:text-gray-500"
                          />
                          <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                          <span className="sr-only">items in cart, view bag</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
`,z=["CAD","USD","AUD","EUR","GBP"],h={categories:[{name:"Women",featured:[{name:"Sleep",href:"#"},{name:"Swimwear",href:"#"},{name:"Underwear",href:"#"}],collection:[{name:"Everything",href:"#"},{name:"Core",href:"#"},{name:"New Arrivals",href:"#"},{name:"Sale",href:"#"}],categories:[{name:"Basic Tees",href:"#"},{name:"Artwork Tees",href:"#"},{name:"Bottoms",href:"#"},{name:"Underwear",href:"#"},{name:"Accessories",href:"#"}],brands:[{name:"Full Nelson",href:"#"},{name:"My Way",href:"#"},{name:"Re-Arranged",href:"#"},{name:"Counterfeit",href:"#"},{name:"Significant Other",href:"#"}]},{name:"Men",featured:[{name:"Casual",href:"#"},{name:"Boxers",href:"#"},{name:"Outdoor",href:"#"}],collection:[{name:"Everything",href:"#"},{name:"Core",href:"#"},{name:"New Arrivals",href:"#"},{name:"Sale",href:"#"}],categories:[{name:"Artwork Tees",href:"#"},{name:"Pants",href:"#"},{name:"Accessories",href:"#"},{name:"Boxers",href:"#"},{name:"Basic Tees",href:"#"}],brands:[{name:"Significant Other",href:"#"},{name:"My Way",href:"#"},{name:"Counterfeit",href:"#"},{name:"Re-Arranged",href:"#"},{name:"Full Nelson",href:"#"}]}],pages:[{name:"Company",href:"#"},{name:"Stores",href:"#"}]};function H(){const[i,r]=n.useState(!1);return e.jsxs("div",{className:"bg-white",children:[e.jsxs(v,{open:i,onClose:r,className:"relative z-40 lg:hidden",children:[e.jsx(N,{transition:!0,className:"fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"}),e.jsx("div",{className:"fixed inset-0 z-40 flex",children:e.jsxs(b,{transition:!0,className:"relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-closed:-translate-x-full",children:[e.jsx("div",{className:"flex px-4 pt-5 pb-2",children:e.jsxs("button",{type:"button",onClick:()=>r(!1),className:"-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400",children:[e.jsx("span",{className:"sr-only",children:"Close menu"}),e.jsx(j,{"aria-hidden":"true",className:"size-6"})]})}),e.jsxs(S,{className:"mt-2",children:[e.jsx("div",{className:"border-b border-gray-200",children:e.jsx(A,{className:"-mb-px flex space-x-8 px-4",children:h.categories.map(a=>e.jsx(C,{className:"flex-1 border-b-2 border-transparent px-1 py-4 text-base font-medium whitespace-nowrap text-gray-900 data-selected:border-indigo-600 data-selected:text-indigo-600",children:a.name},a.name))})}),e.jsx(P,{as:n.Fragment,children:h.categories.map((a,s)=>e.jsx(T,{className:"space-y-12 px-4 pt-10 pb-6",children:e.jsxs("div",{className:"grid grid-cols-1 items-start gap-x-6 gap-y-10",children:[e.jsxs("div",{className:"grid grid-cols-1 gap-x-6 gap-y-10",children:[e.jsxs("div",{children:[e.jsx("p",{id:`mobile-featured-heading-${s}`,className:"font-medium text-gray-900",children:"Featured"}),e.jsx("ul",{role:"list","aria-labelledby":`mobile-featured-heading-${s}`,className:"mt-6 space-y-6",children:a.featured.map(t=>e.jsx("li",{className:"flex",children:e.jsx("a",{href:t.href,className:"text-gray-500",children:t.name})},t.name))})]}),e.jsxs("div",{children:[e.jsx("p",{id:"mobile-categories-heading",className:"font-medium text-gray-900",children:"Categories"}),e.jsx("ul",{role:"list","aria-labelledby":"mobile-categories-heading",className:"mt-6 space-y-6",children:a.categories.map(t=>e.jsx("li",{className:"flex",children:e.jsx("a",{href:t.href,className:"text-gray-500",children:t.name})},t.name))})]})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-x-6 gap-y-10",children:[e.jsxs("div",{children:[e.jsx("p",{id:"mobile-collection-heading",className:"font-medium text-gray-900",children:"Collection"}),e.jsx("ul",{role:"list","aria-labelledby":"mobile-collection-heading",className:"mt-6 space-y-6",children:a.collection.map(t=>e.jsx("li",{className:"flex",children:e.jsx("a",{href:t.href,className:"text-gray-500",children:t.name})},t.name))})]}),e.jsxs("div",{children:[e.jsx("p",{id:"mobile-brand-heading",className:"font-medium text-gray-900",children:"Brands"}),e.jsx("ul",{role:"list","aria-labelledby":"mobile-brand-heading",className:"mt-6 space-y-6",children:a.brands.map(t=>e.jsx("li",{className:"flex",children:e.jsx("a",{href:t.href,className:"text-gray-500",children:t.name})},t.name))})]})]})]})},a.name))})]}),e.jsx("div",{className:"space-y-6 border-t border-gray-200 px-4 py-6",children:h.pages.map(a=>e.jsx("div",{className:"flow-root",children:e.jsx("a",{href:a.href,className:"-m-2 block p-2 font-medium text-gray-900",children:a.name})},a.name))}),e.jsxs("div",{className:"space-y-6 border-t border-gray-200 px-4 py-6",children:[e.jsx("div",{className:"flow-root",children:e.jsx("a",{href:"#",className:"-m-2 block p-2 font-medium text-gray-900",children:"Create an account"})}),e.jsx("div",{className:"flow-root",children:e.jsx("a",{href:"#",className:"-m-2 block p-2 font-medium text-gray-900",children:"Sign in"})})]}),e.jsx("div",{className:"space-y-6 border-t border-gray-200 px-4 py-6",children:e.jsx("form",{children:e.jsxs("div",{className:"-ml-2 inline-grid grid-cols-1",children:[e.jsx("select",{id:"mobile-currency",name:"currency","aria-label":"Currency",className:"col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-0.5 pr-7 pl-2 text-base font-medium text-gray-700 group-hover:text-gray-800 focus:outline-2 sm:text-sm/6",children:z.map(a=>e.jsx("option",{children:a},a))}),e.jsx(y,{"aria-hidden":"true",className:"pointer-events-none col-start-1 row-start-1 mr-1 size-5 self-center justify-self-end fill-gray-500"})]})})})]})})]}),e.jsx("header",{className:"relative",children:e.jsxs("nav",{"aria-label":"Top",children:[e.jsx("div",{className:"bg-gray-900",children:e.jsxs("div",{className:"mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8",children:[e.jsx("form",{className:"hidden lg:block lg:flex-1",children:e.jsx("form",{children:e.jsxs("div",{className:"-ml-2 inline-grid grid-cols-1",children:[e.jsx("select",{id:"desktop-currency",name:"currency","aria-label":"Currency",className:"col-start-1 row-start-1 w-full appearance-none rounded-md bg-gray-900 py-0.5 pr-7 pl-2 text-left text-base font-medium text-white focus:outline-2 focus:-outline-offset-1 focus:outline-white sm:text-sm/6",children:z.map(a=>e.jsx("option",{children:a},a))}),e.jsx(y,{"aria-hidden":"true",className:"pointer-events-none col-start-1 row-start-1 mr-1 size-5 self-center justify-self-end fill-gray-300"})]})})}),e.jsx("p",{className:"flex-1 text-center text-sm font-medium text-white lg:flex-none",children:"Get free delivery on orders over $100"}),e.jsxs("div",{className:"hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6",children:[e.jsx("a",{href:"#",className:"text-sm font-medium text-white hover:text-gray-100",children:"Create an account"}),e.jsx("span",{"aria-hidden":"true",className:"h-6 w-px bg-gray-600"}),e.jsx("a",{href:"#",className:"text-sm font-medium text-white hover:text-gray-100",children:"Sign in"})]})]})}),e.jsx("div",{className:"bg-white",children:e.jsx("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:e.jsx("div",{className:"border-b border-gray-200",children:e.jsxs("div",{className:"flex h-16 items-center justify-between",children:[e.jsx("div",{className:"hidden lg:flex lg:items-center",children:e.jsxs("a",{href:"#",children:[e.jsx("span",{className:"sr-only",children:"Your Company"}),e.jsx("img",{alt:"",src:"https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600",className:"h-8 w-auto"})]})}),e.jsx("div",{className:"hidden h-full lg:flex",children:e.jsx(p,{className:"ml-8",children:e.jsxs("div",{className:"flex h-full justify-center space-x-8",children:[h.categories.map((a,s)=>e.jsxs(x,{className:"flex",children:[e.jsx("div",{className:"relative flex",children:e.jsx(f,{className:"relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800 data-open:border-indigo-600 data-open:text-indigo-600",children:a.name})}),e.jsxs(u,{transition:!0,className:"absolute inset-x-0 top-full text-gray-500 transition data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in sm:text-sm",children:[e.jsx("div",{"aria-hidden":"true",className:"absolute inset-0 top-1/2 bg-white shadow-sm"}),e.jsx("div",{className:"relative bg-white",children:e.jsx("div",{className:"mx-auto max-w-7xl px-8",children:e.jsxs("div",{className:"grid grid-cols-2 items-start gap-x-8 gap-y-10 pt-10 pb-12",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-x-8 gap-y-10",children:[e.jsxs("div",{children:[e.jsx("p",{id:`desktop-featured-heading-${s}`,className:"font-medium text-gray-900",children:"Featured"}),e.jsx("ul",{role:"list","aria-labelledby":`desktop-featured-heading-${s}`,className:"mt-6 space-y-6 sm:mt-4 sm:space-y-4",children:a.featured.map(t=>e.jsx("li",{className:"flex",children:e.jsx("a",{href:t.href,className:"hover:text-gray-800",children:t.name})},t.name))})]}),e.jsxs("div",{children:[e.jsx("p",{id:"desktop-categories-heading",className:"font-medium text-gray-900",children:"Categories"}),e.jsx("ul",{role:"list","aria-labelledby":"desktop-categories-heading",className:"mt-6 space-y-6 sm:mt-4 sm:space-y-4",children:a.categories.map(t=>e.jsx("li",{className:"flex",children:e.jsx("a",{href:t.href,className:"hover:text-gray-800",children:t.name})},t.name))})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-x-8 gap-y-10",children:[e.jsxs("div",{children:[e.jsx("p",{id:"desktop-collection-heading",className:"font-medium text-gray-900",children:"Collection"}),e.jsx("ul",{role:"list","aria-labelledby":"desktop-collection-heading",className:"mt-6 space-y-6 sm:mt-4 sm:space-y-4",children:a.collection.map(t=>e.jsx("li",{className:"flex",children:e.jsx("a",{href:t.href,className:"hover:text-gray-800",children:t.name})},t.name))})]}),e.jsxs("div",{children:[e.jsx("p",{id:"desktop-brand-heading",className:"font-medium text-gray-900",children:"Brands"}),e.jsx("ul",{role:"list","aria-labelledby":"desktop-brand-heading",className:"mt-6 space-y-6 sm:mt-4 sm:space-y-4",children:a.brands.map(t=>e.jsx("li",{className:"flex",children:e.jsx("a",{href:t.href,className:"hover:text-gray-800",children:t.name})},t.name))})]})]})]})})})]})]},a.name)),h.pages.map(a=>e.jsx("a",{href:a.href,className:"flex items-center text-sm font-medium text-gray-700 hover:text-gray-800",children:a.name},a.name))]})})}),e.jsxs("div",{className:"flex flex-1 items-center lg:hidden",children:[e.jsxs("button",{type:"button",onClick:()=>r(!0),className:"-ml-2 rounded-md bg-white p-2 text-gray-400",children:[e.jsx("span",{className:"sr-only",children:"Open menu"}),e.jsx(k,{"aria-hidden":"true",className:"size-6"})]}),e.jsxs("a",{href:"#",className:"ml-2 p-2 text-gray-400 hover:text-gray-500",children:[e.jsx("span",{className:"sr-only",children:"Search"}),e.jsx(o,{"aria-hidden":"true",className:"size-6"})]})]}),e.jsxs("a",{href:"#",className:"lg:hidden",children:[e.jsx("span",{className:"sr-only",children:"Your Company"}),e.jsx("img",{alt:"",src:"https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600",className:"h-8 w-auto"})]}),e.jsx("div",{className:"flex flex-1 items-center justify-end",children:e.jsxs("div",{className:"flex items-center lg:ml-8",children:[e.jsxs("div",{className:"flex space-x-8",children:[e.jsx("div",{className:"hidden lg:flex",children:e.jsxs("a",{href:"#",className:"-m-2 p-2 text-gray-400 hover:text-gray-500",children:[e.jsx("span",{className:"sr-only",children:"Search"}),e.jsx(o,{"aria-hidden":"true",className:"size-6"})]})}),e.jsx("div",{className:"flex",children:e.jsxs("a",{href:"#",className:"-m-2 p-2 text-gray-400 hover:text-gray-500",children:[e.jsx("span",{className:"sr-only",children:"Account"}),e.jsx(I,{"aria-hidden":"true",className:"size-6"})]})})]}),e.jsx("span",{"aria-hidden":"true",className:"mx-4 h-6 w-px bg-gray-200 lg:mx-6"}),e.jsx("div",{className:"flow-root",children:e.jsxs("a",{href:"#",className:"group -m-2 flex items-center p-2",children:[e.jsx(F,{"aria-hidden":"true",className:"size-6 shrink-0 text-gray-400 group-hover:text-gray-500"}),e.jsx("span",{className:"ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800",children:"0"}),e.jsx("span",{className:"sr-only",children:"items in cart, view bag"})]})})]})})]})})})})]})})]})}const E=`'use client'

import { Fragment, useState } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingCartIcon, UserIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const currencies = ['CAD', 'USD', 'AUD', 'EUR', 'GBP']
const navigation = {
  categories: [
    {
      name: 'Women',
      featured: [
        { name: 'Sleep', href: '#' },
        { name: 'Swimwear', href: '#' },
        { name: 'Underwear', href: '#' },
      ],
      collection: [
        { name: 'Everything', href: '#' },
        { name: 'Core', href: '#' },
        { name: 'New Arrivals', href: '#' },
        { name: 'Sale', href: '#' },
      ],
      categories: [
        { name: 'Basic Tees', href: '#' },
        { name: 'Artwork Tees', href: '#' },
        { name: 'Bottoms', href: '#' },
        { name: 'Underwear', href: '#' },
        { name: 'Accessories', href: '#' },
      ],
      brands: [
        { name: 'Full Nelson', href: '#' },
        { name: 'My Way', href: '#' },
        { name: 'Re-Arranged', href: '#' },
        { name: 'Counterfeit', href: '#' },
        { name: 'Significant Other', href: '#' },
      ],
    },
    {
      name: 'Men',
      featured: [
        { name: 'Casual', href: '#' },
        { name: 'Boxers', href: '#' },
        { name: 'Outdoor', href: '#' },
      ],
      collection: [
        { name: 'Everything', href: '#' },
        { name: 'Core', href: '#' },
        { name: 'New Arrivals', href: '#' },
        { name: 'Sale', href: '#' },
      ],
      categories: [
        { name: 'Artwork Tees', href: '#' },
        { name: 'Pants', href: '#' },
        { name: 'Accessories', href: '#' },
        { name: 'Boxers', href: '#' },
        { name: 'Basic Tees', href: '#' },
      ],
      brands: [
        { name: 'Significant Other', href: '#' },
        { name: 'My Way', href: '#' },
        { name: 'Counterfeit', href: '#' },
        { name: 'Re-Arranged', href: '#' },
        { name: 'Full Nelson', href: '#' },
      ],
    },
  ],
  pages: [
    { name: 'Company', href: '#' },
    { name: 'Stores', href: '#' },
  ],
}

export default function Example() {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
        />

        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-closed:-translate-x-full"
          >
            <div className="flex px-4 pt-5 pb-2">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>

            {/* Links */}
            <TabGroup className="mt-2">
              <div className="border-b border-gray-200">
                <TabList className="-mb-px flex space-x-8 px-4">
                  {navigation.categories.map((category) => (
                    <Tab
                      key={category.name}
                      className="flex-1 border-b-2 border-transparent px-1 py-4 text-base font-medium whitespace-nowrap text-gray-900 data-selected:border-indigo-600 data-selected:text-indigo-600"
                    >
                      {category.name}
                    </Tab>
                  ))}
                </TabList>
              </div>
              <TabPanels as={Fragment}>
                {navigation.categories.map((category, categoryIdx) => (
                  <TabPanel key={category.name} className="space-y-12 px-4 pt-10 pb-6">
                    <div className="grid grid-cols-1 items-start gap-x-6 gap-y-10">
                      <div className="grid grid-cols-1 gap-x-6 gap-y-10">
                        <div>
                          <p id={\`mobile-featured-heading-\${categoryIdx}\`} className="font-medium text-gray-900">
                            Featured
                          </p>
                          <ul
                            role="list"
                            aria-labelledby={\`mobile-featured-heading-\${categoryIdx}\`}
                            className="mt-6 space-y-6"
                          >
                            {category.featured.map((item) => (
                              <li key={item.name} className="flex">
                                <a href={item.href} className="text-gray-500">
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p id="mobile-categories-heading" className="font-medium text-gray-900">
                            Categories
                          </p>
                          <ul role="list" aria-labelledby="mobile-categories-heading" className="mt-6 space-y-6">
                            {category.categories.map((item) => (
                              <li key={item.name} className="flex">
                                <a href={item.href} className="text-gray-500">
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 gap-x-6 gap-y-10">
                        <div>
                          <p id="mobile-collection-heading" className="font-medium text-gray-900">
                            Collection
                          </p>
                          <ul role="list" aria-labelledby="mobile-collection-heading" className="mt-6 space-y-6">
                            {category.collection.map((item) => (
                              <li key={item.name} className="flex">
                                <a href={item.href} className="text-gray-500">
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <p id="mobile-brand-heading" className="font-medium text-gray-900">
                            Brands
                          </p>
                          <ul role="list" aria-labelledby="mobile-brand-heading" className="mt-6 space-y-6">
                            {category.brands.map((item) => (
                              <li key={item.name} className="flex">
                                <a href={item.href} className="text-gray-500">
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              {navigation.pages.map((page) => (
                <div key={page.name} className="flow-root">
                  <a href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                    {page.name}
                  </a>
                </div>
              ))}
            </div>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              <div className="flow-root">
                <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                  Create an account
                </a>
              </div>
              <div className="flow-root">
                <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                  Sign in
                </a>
              </div>
            </div>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              {/* Currency selector */}
              <form>
                <div className="-ml-2 inline-grid grid-cols-1">
                  <select
                    id="mobile-currency"
                    name="currency"
                    aria-label="Currency"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-0.5 pr-7 pl-2 text-base font-medium text-gray-700 group-hover:text-gray-800 focus:outline-2 sm:text-sm/6"
                  >
                    {currencies.map((currency) => (
                      <option key={currency}>{currency}</option>
                    ))}
                  </select>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-1 size-5 self-center justify-self-end fill-gray-500"
                  />
                </div>
              </form>
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      <header className="relative">
        <nav aria-label="Top">
          {/* Top navigation */}
          <div className="bg-gray-900">
            <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
              {/* Currency selector */}
              <form className="hidden lg:block lg:flex-1">
                <form>
                  <div className="-ml-2 inline-grid grid-cols-1">
                    <select
                      id="desktop-currency"
                      name="currency"
                      aria-label="Currency"
                      className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-gray-900 py-0.5 pr-7 pl-2 text-left text-base font-medium text-white focus:outline-2 focus:-outline-offset-1 focus:outline-white sm:text-sm/6"
                    >
                      {currencies.map((currency) => (
                        <option key={currency}>{currency}</option>
                      ))}
                    </select>
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="pointer-events-none col-start-1 row-start-1 mr-1 size-5 self-center justify-self-end fill-gray-300"
                    />
                  </div>
                </form>
              </form>

              <p className="flex-1 text-center text-sm font-medium text-white lg:flex-none">
                Get free delivery on orders over $100
              </p>

              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                <a href="#" className="text-sm font-medium text-white hover:text-gray-100">
                  Create an account
                </a>
                <span aria-hidden="true" className="h-6 w-px bg-gray-600" />
                <a href="#" className="text-sm font-medium text-white hover:text-gray-100">
                  Sign in
                </a>
              </div>
            </div>
          </div>

          {/* Secondary navigation */}
          <div className="bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="border-b border-gray-200">
                <div className="flex h-16 items-center justify-between">
                  {/* Logo (lg+) */}
                  <div className="hidden lg:flex lg:items-center">
                    <a href="#">
                      <span className="sr-only">Your Company</span>
                      <img
                        alt=""
                        src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                        className="h-8 w-auto"
                      />
                    </a>
                  </div>

                  <div className="hidden h-full lg:flex">
                    {/* Mega menus */}
                    <PopoverGroup className="ml-8">
                      <div className="flex h-full justify-center space-x-8">
                        {navigation.categories.map((category, categoryIdx) => (
                          <Popover key={category.name} className="flex">
                            <div className="relative flex">
                              <PopoverButton className="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800 data-open:border-indigo-600 data-open:text-indigo-600">
                                {category.name}
                              </PopoverButton>
                            </div>

                            <PopoverPanel
                              transition
                              className="absolute inset-x-0 top-full text-gray-500 transition data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in sm:text-sm"
                            >
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div aria-hidden="true" className="absolute inset-0 top-1/2 bg-white shadow-sm" />

                              <div className="relative bg-white">
                                <div className="mx-auto max-w-7xl px-8">
                                  <div className="grid grid-cols-2 items-start gap-x-8 gap-y-10 pt-10 pb-12">
                                    <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                                      <div>
                                        <p
                                          id={\`desktop-featured-heading-\${categoryIdx}\`}
                                          className="font-medium text-gray-900"
                                        >
                                          Featured
                                        </p>
                                        <ul
                                          role="list"
                                          aria-labelledby={\`desktop-featured-heading-\${categoryIdx}\`}
                                          className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                        >
                                          {category.featured.map((item) => (
                                            <li key={item.name} className="flex">
                                              <a href={item.href} className="hover:text-gray-800">
                                                {item.name}
                                              </a>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                      <div>
                                        <p id="desktop-categories-heading" className="font-medium text-gray-900">
                                          Categories
                                        </p>
                                        <ul
                                          role="list"
                                          aria-labelledby="desktop-categories-heading"
                                          className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                        >
                                          {category.categories.map((item) => (
                                            <li key={item.name} className="flex">
                                              <a href={item.href} className="hover:text-gray-800">
                                                {item.name}
                                              </a>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                                      <div>
                                        <p id="desktop-collection-heading" className="font-medium text-gray-900">
                                          Collection
                                        </p>
                                        <ul
                                          role="list"
                                          aria-labelledby="desktop-collection-heading"
                                          className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                        >
                                          {category.collection.map((item) => (
                                            <li key={item.name} className="flex">
                                              <a href={item.href} className="hover:text-gray-800">
                                                {item.name}
                                              </a>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>

                                      <div>
                                        <p id="desktop-brand-heading" className="font-medium text-gray-900">
                                          Brands
                                        </p>
                                        <ul
                                          role="list"
                                          aria-labelledby="desktop-brand-heading"
                                          className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                        >
                                          {category.brands.map((item) => (
                                            <li key={item.name} className="flex">
                                              <a href={item.href} className="hover:text-gray-800">
                                                {item.name}
                                              </a>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </PopoverPanel>
                          </Popover>
                        ))}

                        {navigation.pages.map((page) => (
                          <a
                            key={page.name}
                            href={page.href}
                            className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                          >
                            {page.name}
                          </a>
                        ))}
                      </div>
                    </PopoverGroup>
                  </div>

                  {/* Mobile menu and search (lg-) */}
                  <div className="flex flex-1 items-center lg:hidden">
                    <button
                      type="button"
                      onClick={() => setOpen(true)}
                      className="-ml-2 rounded-md bg-white p-2 text-gray-400"
                    >
                      <span className="sr-only">Open menu</span>
                      <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>

                    {/* Search */}
                    <a href="#" className="ml-2 p-2 text-gray-400 hover:text-gray-500">
                      <span className="sr-only">Search</span>
                      <MagnifyingGlassIcon aria-hidden="true" className="size-6" />
                    </a>
                  </div>

                  {/* Logo (lg-) */}
                  <a href="#" className="lg:hidden">
                    <span className="sr-only">Your Company</span>
                    <img
                      alt=""
                      src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                      className="h-8 w-auto"
                    />
                  </a>

                  <div className="flex flex-1 items-center justify-end">
                    <div className="flex items-center lg:ml-8">
                      <div className="flex space-x-8">
                        <div className="hidden lg:flex">
                          <a href="#" className="-m-2 p-2 text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Search</span>
                            <MagnifyingGlassIcon aria-hidden="true" className="size-6" />
                          </a>
                        </div>

                        <div className="flex">
                          <a href="#" className="-m-2 p-2 text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Account</span>
                            <UserIcon aria-hidden="true" className="size-6" />
                          </a>
                        </div>
                      </div>

                      <span aria-hidden="true" className="mx-4 h-6 w-px bg-gray-200 lg:mx-6" />

                      <div className="flow-root">
                        <a href="#" className="group -m-2 flex items-center p-2">
                          <ShoppingCartIcon
                            aria-hidden="true"
                            className="size-6 shrink-0 text-gray-400 group-hover:text-gray-500"
                          />
                          <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                          <span className="sr-only">items in cart, view bag</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
`,g={categories:[{id:"women",name:"Women",featured:[{name:"New Arrivals",href:"#",imageSrc:"https://tailwindui.com/plus-assets/img/ecommerce-images/mega-menu-category-01.jpg",imageAlt:"Models sitting back to back, wearing Basic Tee in black and bone."},{name:"Basic Tees",href:"#",imageSrc:"https://tailwindui.com/plus-assets/img/ecommerce-images/mega-menu-category-02.jpg",imageAlt:"Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees."},{name:"Accessories",href:"#",imageSrc:"https://tailwindui.com/plus-assets/img/ecommerce-images/mega-menu-category-03.jpg",imageAlt:"Model wearing minimalist watch with black wristband and white watch face."}],sections:[[{id:"shoes",name:"Shoes & Accessories",items:[{name:"Sneakers",href:"#"},{name:"Boots",href:"#"},{name:"Flats",href:"#"},{name:"Sandals",href:"#"},{name:"Heels",href:"#"},{name:"Socks",href:"#"}]},{id:"collection",name:"Shop Collection",items:[{name:"Everything",href:"#"},{name:"Core",href:"#"},{name:"New Arrivals",href:"#"},{name:"Sale",href:"#"},{name:"Accessories",href:"#"}]}],[{id:"clothing",name:"All Clothing",items:[{name:"Basic Tees",href:"#"},{name:"Artwork Tees",href:"#"},{name:"Tops",href:"#"},{name:"Bottoms",href:"#"},{name:"Swimwear",href:"#"},{name:"Underwear",href:"#"}]},{id:"accessories",name:"All Accessories",items:[{name:"Watches",href:"#"},{name:"Wallets",href:"#"},{name:"Bags",href:"#"},{name:"Sunglasses",href:"#"},{name:"Hats",href:"#"},{name:"Belts",href:"#"}]}],[{id:"brands",name:"Brands",items:[{name:"Full Nelson",href:"#"},{name:"My Way",href:"#"},{name:"Re-Arranged",href:"#"},{name:"Counterfeit",href:"#"},{name:"Significant Other",href:"#"}]}]]},{id:"men",name:"Men",featured:[{name:"Accessories",href:"#",imageSrc:"https://tailwindui.com/plus-assets/img/ecommerce-images/home-page-03-category-01.jpg",imageAlt:"Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."},{name:"New Arrivals",href:"#",imageSrc:"https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",imageAlt:"Drawstring top with elastic loop closure and textured interior padding."},{name:"Artwork Tees",href:"#",imageSrc:"https://tailwindui.com/plus-assets/img/ecommerce-images/category-page-02-image-card-06.jpg",imageAlt:"Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt."}],sections:[[{id:"shoes",name:"Shoes & Accessories",items:[{name:"Sneakers",href:"#"},{name:"Boots",href:"#"},{name:"Sandals",href:"#"},{name:"Socks",href:"#"}]},{id:"collection",name:"Shop Collection",items:[{name:"Everything",href:"#"},{name:"Core",href:"#"},{name:"New Arrivals",href:"#"},{name:"Sale",href:"#"}]}],[{id:"clothing",name:"All Clothing",items:[{name:"Basic Tees",href:"#"},{name:"Artwork Tees",href:"#"},{name:"Pants",href:"#"},{name:"Hoodies",href:"#"},{name:"Swimsuits",href:"#"}]},{id:"accessories",name:"All Accessories",items:[{name:"Watches",href:"#"},{name:"Wallets",href:"#"},{name:"Bags",href:"#"},{name:"Sunglasses",href:"#"},{name:"Hats",href:"#"},{name:"Belts",href:"#"}]}],[{id:"brands",name:"Brands",items:[{name:"Re-Arranged",href:"#"},{name:"Counterfeit",href:"#"},{name:"Full Nelson",href:"#"},{name:"My Way",href:"#"}]}]]}],pages:[{name:"Company",href:"#"},{name:"Stores",href:"#"}]};function D(...i){return i.filter(Boolean).join(" ")}function U(){const[i,r]=n.useState(!1);return e.jsxs("div",{className:"bg-white",children:[e.jsxs(v,{open:i,onClose:r,className:"relative z-40 lg:hidden",children:[e.jsx(N,{transition:!0,className:"fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"}),e.jsx("div",{className:"fixed inset-0 z-40 flex",children:e.jsxs(b,{transition:!0,className:"relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-closed:-translate-x-full",children:[e.jsx("div",{className:"flex px-4 pt-5 pb-2",children:e.jsxs("button",{type:"button",onClick:()=>r(!1),className:"-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400",children:[e.jsx("span",{className:"sr-only",children:"Close menu"}),e.jsx(j,{"aria-hidden":"true",className:"size-6"})]})}),e.jsxs(S,{className:"mt-2",children:[e.jsx("div",{className:"border-b border-gray-200",children:e.jsx(A,{className:"-mb-px flex space-x-8 px-4",children:g.categories.map(a=>e.jsx(C,{className:"flex-1 border-b-2 border-transparent px-1 py-4 text-base font-medium whitespace-nowrap text-gray-900 data-selected:border-indigo-600 data-selected:text-indigo-600",children:a.name},a.name))})}),e.jsx(P,{as:n.Fragment,children:g.categories.map(a=>e.jsxs(T,{className:"space-y-10 px-4 pt-10 pb-8",children:[e.jsx("div",{className:"space-y-4",children:a.featured.map((s,t)=>e.jsxs("div",{className:"group relative overflow-hidden rounded-md bg-gray-100",children:[e.jsx("img",{alt:s.imageAlt,src:s.imageSrc,className:"aspect-square w-full object-cover group-hover:opacity-75"}),e.jsx("div",{className:"absolute inset-0 flex flex-col justify-end",children:e.jsxs("div",{className:"bg-white/60 p-4 text-base sm:text-sm",children:[e.jsxs("a",{href:s.href,className:"font-medium text-gray-900",children:[e.jsx("span",{"aria-hidden":"true",className:"absolute inset-0"}),s.name]}),e.jsx("p",{"aria-hidden":"true",className:"mt-0.5 text-gray-700 sm:mt-1",children:"Shop now"})]})})]},t))}),a.sections.map((s,t)=>e.jsx("div",{className:"space-y-10",children:s.map(l=>e.jsxs("div",{children:[e.jsx("p",{id:`${a.id}-${l.id}-heading-mobile`,className:"font-medium text-gray-900",children:l.name}),e.jsx("ul",{role:"list","aria-labelledby":`${a.id}-${l.id}-heading-mobile`,className:"mt-6 flex flex-col space-y-6",children:l.items.map(m=>e.jsx("li",{className:"flow-root",children:e.jsx("a",{href:m.href,className:"-m-2 block p-2 text-gray-500",children:m.name})},m.name))})]},l.name))},t))]},a.name))})]}),e.jsx("div",{className:"space-y-6 border-t border-gray-200 px-4 py-6",children:g.pages.map(a=>e.jsx("div",{className:"flow-root",children:e.jsx("a",{href:a.href,className:"-m-2 block p-2 font-medium text-gray-900",children:a.name})},a.name))}),e.jsx("div",{className:"border-t border-gray-200 px-4 py-6",children:e.jsxs("a",{href:"#",className:"-m-2 flex items-center p-2",children:[e.jsx("img",{alt:"",src:"https://tailwindui.com/plus-assets/img/flags/flag-canada.svg",className:"block h-auto w-5 shrink-0"}),e.jsx("span",{className:"ml-3 block text-base font-medium text-gray-900",children:"CAD"}),e.jsx("span",{className:"sr-only",children:", change currency"})]})})]})})]}),e.jsx("header",{className:"relative bg-white",children:e.jsx("nav",{"aria-label":"Top",className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:e.jsx("div",{className:"border-b border-gray-200",children:e.jsxs("div",{className:"flex h-16 items-center justify-between",children:[e.jsxs("div",{className:"flex flex-1 items-center lg:hidden",children:[e.jsxs("button",{type:"button",onClick:()=>r(!0),className:"-ml-2 rounded-md bg-white p-2 text-gray-400",children:[e.jsx("span",{className:"sr-only",children:"Open menu"}),e.jsx(k,{"aria-hidden":"true",className:"size-6"})]}),e.jsxs("a",{href:"#",className:"ml-2 p-2 text-gray-400 hover:text-gray-500",children:[e.jsx("span",{className:"sr-only",children:"Search"}),e.jsx(o,{"aria-hidden":"true",className:"size-6"})]})]}),e.jsx(p,{className:"hidden lg:block lg:flex-1 lg:self-stretch",children:e.jsxs("div",{className:"flex h-full space-x-8",children:[g.categories.map(a=>e.jsxs(x,{className:"flex",children:[e.jsx("div",{className:"relative flex",children:e.jsxs(f,{className:"group relative z-10 flex items-center justify-center text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800 data-open:text-indigo-600",children:[a.name,e.jsx("span",{"aria-hidden":"true",className:"absolute inset-x-0 bottom-0 h-0.5 transition-colors duration-200 ease-out group-data-open:bg-indigo-600 sm:mt-5 sm:translate-y-px sm:transform"})]})}),e.jsxs(u,{transition:!0,className:"absolute inset-x-0 top-full transition data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in",children:[e.jsx("div",{"aria-hidden":"true",className:"absolute inset-0 top-1/2 bg-white shadow-sm"}),e.jsx("div",{className:"relative bg-white",children:e.jsx("div",{className:"mx-auto max-w-7xl px-8",children:e.jsxs("div",{className:"grid grid-cols-2 gap-x-8 gap-y-10 py-16",children:[e.jsx("div",{className:"grid grid-cols-2 grid-rows-1 gap-8 text-sm",children:a.featured.map((s,t)=>e.jsxs("div",{className:D(t===0?"col-span-2":"","group relative overflow-hidden rounded-md bg-gray-100"),children:[e.jsx("img",{alt:s.imageAlt,src:s.imageSrc,className:D(t===0?"aspect-2/1":"aspect-square","w-full object-cover group-hover:opacity-75")}),e.jsx("div",{className:"absolute inset-0 flex flex-col justify-end",children:e.jsxs("div",{className:"bg-white/60 p-4 text-sm",children:[e.jsxs("a",{href:s.href,className:"font-medium text-gray-900",children:[e.jsx("span",{"aria-hidden":"true",className:"absolute inset-0"}),s.name]}),e.jsx("p",{"aria-hidden":"true",className:"mt-0.5 text-gray-700 sm:mt-1",children:"Shop now"})]})})]},s.name))}),e.jsx("div",{className:"grid grid-cols-3 gap-x-8 gap-y-10 text-sm text-gray-500",children:a.sections.map((s,t)=>e.jsx("div",{className:"space-y-10",children:s.map(l=>e.jsxs("div",{children:[e.jsx("p",{id:`${a.id}-${l.id}-heading`,className:"font-medium text-gray-900",children:l.name}),e.jsx("ul",{role:"list","aria-labelledby":`${a.id}-${l.id}-heading`,className:"mt-4 space-y-4",children:l.items.map(m=>e.jsx("li",{className:"flex",children:e.jsx("a",{href:m.href,className:"hover:text-gray-800",children:m.name})},m.name))})]},l.name))},t))})]})})})]})]},a.name)),g.pages.map(a=>e.jsx("a",{href:a.href,className:"flex items-center text-sm font-medium text-gray-700 hover:text-gray-800",children:a.name},a.name))]})}),e.jsxs("a",{href:"#",className:"flex",children:[e.jsx("span",{className:"sr-only",children:"Your Company"}),e.jsx("img",{alt:"",src:"https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600",className:"h-8 w-auto"})]}),e.jsxs("div",{className:"flex flex-1 items-center justify-end",children:[e.jsxs("a",{href:"#",className:"hidden text-gray-700 hover:text-gray-800 lg:flex lg:items-center",children:[e.jsx("img",{alt:"",src:"https://tailwindui.com/plus-assets/img/flags/flag-canada.svg",className:"block h-auto w-5 shrink-0"}),e.jsx("span",{className:"ml-3 block text-sm font-medium",children:"CAD"}),e.jsx("span",{className:"sr-only",children:", change currency"})]}),e.jsxs("a",{href:"#",className:"ml-6 hidden p-2 text-gray-400 hover:text-gray-500 lg:block",children:[e.jsx("span",{className:"sr-only",children:"Search"}),e.jsx(o,{"aria-hidden":"true",className:"size-6"})]}),e.jsxs("a",{href:"#",className:"p-2 text-gray-400 hover:text-gray-500 lg:ml-4",children:[e.jsx("span",{className:"sr-only",children:"Account"}),e.jsx(I,{"aria-hidden":"true",className:"size-6"})]}),e.jsx("div",{className:"ml-4 flow-root lg:ml-6",children:e.jsxs("a",{href:"#",className:"group -m-2 flex items-center p-2",children:[e.jsx(w,{"aria-hidden":"true",className:"size-6 shrink-0 text-gray-400 group-hover:text-gray-500"}),e.jsx("span",{className:"ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800",children:"0"}),e.jsx("span",{className:"sr-only",children:"items in cart, view bag"})]})})]})]})})})})]})}const J=`'use client'

import { Fragment, useState } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, UserIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = {
  categories: [
    {
      id: 'women',
      name: 'Women',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
        {
          name: 'Accessories',
          href: '#',
          imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/mega-menu-category-03.jpg',
          imageAlt: 'Model wearing minimalist watch with black wristband and white watch face.',
        },
      ],
      sections: [
        [
          {
            id: 'shoes',
            name: 'Shoes & Accessories',
            items: [
              { name: 'Sneakers', href: '#' },
              { name: 'Boots', href: '#' },
              { name: 'Flats', href: '#' },
              { name: 'Sandals', href: '#' },
              { name: 'Heels', href: '#' },
              { name: 'Socks', href: '#' },
            ],
          },
          {
            id: 'collection',
            name: 'Shop Collection',
            items: [
              { name: 'Everything', href: '#' },
              { name: 'Core', href: '#' },
              { name: 'New Arrivals', href: '#' },
              { name: 'Sale', href: '#' },
              { name: 'Accessories', href: '#' },
            ],
          },
        ],
        [
          {
            id: 'clothing',
            name: 'All Clothing',
            items: [
              { name: 'Basic Tees', href: '#' },
              { name: 'Artwork Tees', href: '#' },
              { name: 'Tops', href: '#' },
              { name: 'Bottoms', href: '#' },
              { name: 'Swimwear', href: '#' },
              { name: 'Underwear', href: '#' },
            ],
          },
          {
            id: 'accessories',
            name: 'All Accessories',
            items: [
              { name: 'Watches', href: '#' },
              { name: 'Wallets', href: '#' },
              { name: 'Bags', href: '#' },
              { name: 'Sunglasses', href: '#' },
              { name: 'Hats', href: '#' },
              { name: 'Belts', href: '#' },
            ],
          },
        ],
        [
          {
            id: 'brands',
            name: 'Brands',
            items: [
              { name: 'Full Nelson', href: '#' },
              { name: 'My Way', href: '#' },
              { name: 'Re-Arranged', href: '#' },
              { name: 'Counterfeit', href: '#' },
              { name: 'Significant Other', href: '#' },
            ],
          },
        ],
      ],
    },
    {
      id: 'men',
      name: 'Men',
      featured: [
        {
          name: 'Accessories',
          href: '#',
          imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/home-page-03-category-01.jpg',
          imageAlt:
            'Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters.',
        },
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc:
            'https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
          imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'Artwork Tees',
          href: '#',
          imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/category-page-02-image-card-06.jpg',
          imageAlt:
            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],
      sections: [
        [
          {
            id: 'shoes',
            name: 'Shoes & Accessories',
            items: [
              { name: 'Sneakers', href: '#' },
              { name: 'Boots', href: '#' },
              { name: 'Sandals', href: '#' },
              { name: 'Socks', href: '#' },
            ],
          },
          {
            id: 'collection',
            name: 'Shop Collection',
            items: [
              { name: 'Everything', href: '#' },
              { name: 'Core', href: '#' },
              { name: 'New Arrivals', href: '#' },
              { name: 'Sale', href: '#' },
            ],
          },
        ],
        [
          {
            id: 'clothing',
            name: 'All Clothing',
            items: [
              { name: 'Basic Tees', href: '#' },
              { name: 'Artwork Tees', href: '#' },
              { name: 'Pants', href: '#' },
              { name: 'Hoodies', href: '#' },
              { name: 'Swimsuits', href: '#' },
            ],
          },
          {
            id: 'accessories',
            name: 'All Accessories',
            items: [
              { name: 'Watches', href: '#' },
              { name: 'Wallets', href: '#' },
              { name: 'Bags', href: '#' },
              { name: 'Sunglasses', href: '#' },
              { name: 'Hats', href: '#' },
              { name: 'Belts', href: '#' },
            ],
          },
        ],
        [
          {
            id: 'brands',
            name: 'Brands',
            items: [
              { name: 'Re-Arranged', href: '#' },
              { name: 'Counterfeit', href: '#' },
              { name: 'Full Nelson', href: '#' },
              { name: 'My Way', href: '#' },
            ],
          },
        ],
      ],
    },
  ],
  pages: [
    { name: 'Company', href: '#' },
    { name: 'Stores', href: '#' },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
        />

        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-closed:-translate-x-full"
          >
            <div className="flex px-4 pt-5 pb-2">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>

            {/* Links */}
            <TabGroup className="mt-2">
              <div className="border-b border-gray-200">
                <TabList className="-mb-px flex space-x-8 px-4">
                  {navigation.categories.map((category) => (
                    <Tab
                      key={category.name}
                      className="flex-1 border-b-2 border-transparent px-1 py-4 text-base font-medium whitespace-nowrap text-gray-900 data-selected:border-indigo-600 data-selected:text-indigo-600"
                    >
                      {category.name}
                    </Tab>
                  ))}
                </TabList>
              </div>
              <TabPanels as={Fragment}>
                {navigation.categories.map((category) => (
                  <TabPanel key={category.name} className="space-y-10 px-4 pt-10 pb-8">
                    <div className="space-y-4">
                      {category.featured.map((item, itemIdx) => (
                        <div key={itemIdx} className="group relative overflow-hidden rounded-md bg-gray-100">
                          <img
                            alt={item.imageAlt}
                            src={item.imageSrc}
                            className="aspect-square w-full object-cover group-hover:opacity-75"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end">
                            <div className="bg-white/60 p-4 text-base sm:text-sm">
                              <a href={item.href} className="font-medium text-gray-900">
                                <span aria-hidden="true" className="absolute inset-0" />
                                {item.name}
                              </a>
                              <p aria-hidden="true" className="mt-0.5 text-gray-700 sm:mt-1">
                                Shop now
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    {category.sections.map((column, columnIdx) => (
                      <div key={columnIdx} className="space-y-10">
                        {column.map((section) => (
                          <div key={section.name}>
                            <p id={\`\${category.id}-\${section.id}-heading-mobile\`} className="font-medium text-gray-900">
                              {section.name}
                            </p>
                            <ul
                              role="list"
                              aria-labelledby={\`\${category.id}-\${section.id}-heading-mobile\`}
                              className="mt-6 flex flex-col space-y-6"
                            >
                              {section.items.map((item) => (
                                <li key={item.name} className="flow-root">
                                  <a href={item.href} className="-m-2 block p-2 text-gray-500">
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ))}
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              {navigation.pages.map((page) => (
                <div key={page.name} className="flow-root">
                  <a href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                    {page.name}
                  </a>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 px-4 py-6">
              <a href="#" className="-m-2 flex items-center p-2">
                <img
                  alt=""
                  src="https://tailwindui.com/plus-assets/img/flags/flag-canada.svg"
                  className="block h-auto w-5 shrink-0"
                />
                <span className="ml-3 block text-base font-medium text-gray-900">CAD</span>
                <span className="sr-only">, change currency</span>
              </a>
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      <header className="relative bg-white">
        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center lg:hidden">
                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  className="-ml-2 rounded-md bg-white p-2 text-gray-400"
                >
                  <span className="sr-only">Open menu</span>
                  <Bars3Icon aria-hidden="true" className="size-6" />
                </button>

                <a href="#" className="ml-2 p-2 text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Search</span>
                  <MagnifyingGlassIcon aria-hidden="true" className="size-6" />
                </a>
              </div>

              {/* Flyout menus */}
              <PopoverGroup className="hidden lg:block lg:flex-1 lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      <div className="relative flex">
                        <PopoverButton className="group relative z-10 flex items-center justify-center text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800 data-open:text-indigo-600">
                          {category.name}
                          <span
                            aria-hidden="true"
                            className="absolute inset-x-0 bottom-0 h-0.5 transition-colors duration-200 ease-out group-data-open:bg-indigo-600 sm:mt-5 sm:translate-y-px sm:transform"
                          />
                        </PopoverButton>
                      </div>

                      <PopoverPanel
                        transition
                        className="absolute inset-x-0 top-full transition data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                      >
                        {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                        <div aria-hidden="true" className="absolute inset-0 top-1/2 bg-white shadow-sm" />

                        <div className="relative bg-white">
                          <div className="mx-auto max-w-7xl px-8">
                            <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                              <div className="grid grid-cols-2 grid-rows-1 gap-8 text-sm">
                                {category.featured.map((item, itemIdx) => (
                                  <div
                                    key={item.name}
                                    className={classNames(
                                      itemIdx === 0 ? 'col-span-2' : '',
                                      'group relative overflow-hidden rounded-md bg-gray-100',
                                    )}
                                  >
                                    <img
                                      alt={item.imageAlt}
                                      src={item.imageSrc}
                                      className={classNames(
                                        itemIdx === 0 ? 'aspect-2/1' : 'aspect-square',
                                        'w-full object-cover group-hover:opacity-75',
                                      )}
                                    />
                                    <div className="absolute inset-0 flex flex-col justify-end">
                                      <div className="bg-white/60 p-4 text-sm">
                                        <a href={item.href} className="font-medium text-gray-900">
                                          <span aria-hidden="true" className="absolute inset-0" />
                                          {item.name}
                                        </a>
                                        <p aria-hidden="true" className="mt-0.5 text-gray-700 sm:mt-1">
                                          Shop now
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                              <div className="grid grid-cols-3 gap-x-8 gap-y-10 text-sm text-gray-500">
                                {category.sections.map((column, columnIdx) => (
                                  <div key={columnIdx} className="space-y-10">
                                    {column.map((section) => (
                                      <div key={section.name}>
                                        <p
                                          id={\`\${category.id}-\${section.id}-heading\`}
                                          className="font-medium text-gray-900"
                                        >
                                          {section.name}
                                        </p>
                                        <ul
                                          role="list"
                                          aria-labelledby={\`\${category.id}-\${section.id}-heading\`}
                                          className="mt-4 space-y-4"
                                        >
                                          {section.items.map((item) => (
                                            <li key={item.name} className="flex">
                                              <a href={item.href} className="hover:text-gray-800">
                                                {item.name}
                                              </a>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    ))}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </PopoverPanel>
                    </Popover>
                  ))}

                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </PopoverGroup>

              {/* Logo */}
              <a href="#" className="flex">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </a>

              <div className="flex flex-1 items-center justify-end">
                <a href="#" className="hidden text-gray-700 hover:text-gray-800 lg:flex lg:items-center">
                  <img
                    alt=""
                    src="https://tailwindui.com/plus-assets/img/flags/flag-canada.svg"
                    className="block h-auto w-5 shrink-0"
                  />
                  <span className="ml-3 block text-sm font-medium">CAD</span>
                  <span className="sr-only">, change currency</span>
                </a>

                {/* Search */}
                <a href="#" className="ml-6 hidden p-2 text-gray-400 hover:text-gray-500 lg:block">
                  <span className="sr-only">Search</span>
                  <MagnifyingGlassIcon aria-hidden="true" className="size-6" />
                </a>

                {/* Account */}
                <a href="#" className="p-2 text-gray-400 hover:text-gray-500 lg:ml-4">
                  <span className="sr-only">Account</span>
                  <UserIcon aria-hidden="true" className="size-6" />
                </a>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <a href="#" className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                      aria-hidden="true"
                      className="size-6 shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
`,M={categories:[{name:"Women",clothing:[[{name:"Tops",href:"#"},{name:"Dresses",href:"#"},{name:"Pants",href:"#"},{name:"Denim",href:"#"},{name:"Sweaters",href:"#"},{name:"T-Shirts",href:"#"}],[{name:"Jackets",href:"#"},{name:"Activewear",href:"#"},{name:"Shorts",href:"#"},{name:"Swimwear",href:"#"},{name:"Browse All",href:"#"}]],accessories:[{name:"Shoes",href:"#"},{name:"Jewelry",href:"#"},{name:"Handbags",href:"#"},{name:"Socks",href:"#"},{name:"Hats",href:"#"},{name:"Browse All",href:"#"}],categories:[{name:"New Arrivals",href:"#"},{name:"Sale",href:"#"},{name:"Basic Tees",href:"#"},{name:"Artwork Tees",href:"#"}]},{name:"Men",clothing:[[{name:"Dress Shirts",href:"#"},{name:"Pants",href:"#"},{name:"Jackets",href:"#"},{name:"T-Shirts",href:"#"},{name:"Jeans",href:"#"},{name:"Hoodies",href:"#"}],[{name:"Vests",href:"#"},{name:"Kilts",href:"#"},{name:"Outdoors",href:"#"},{name:"Capes",href:"#"},{name:"Browse All",href:"#"}]],accessories:[{name:"Watches",href:"#"},{name:"Boots",href:"#"},{name:"Fanny Packs",href:"#"},{name:"Sunglasses",href:"#"},{name:"Browse All",href:"#"}],categories:[{name:"Just Added",href:"#"},{name:"Clearance",href:"#"},{name:"Graphic Tees",href:"#"}]}],other:[{name:"Company",href:"#"},{name:"Stores",href:"#"}]};function Y(){return e.jsx("div",{className:"bg-white",children:e.jsx("header",{className:"relative bg-white",children:e.jsx("nav",{"aria-label":"Top",className:"mx-auto max-w-7xl sm:px-6 lg:px-8",children:e.jsx("div",{className:"border-b border-gray-200 px-4 pb-14 sm:px-0 sm:pb-0",children:e.jsxs("div",{className:"flex h-16 items-center justify-between",children:[e.jsx("div",{className:"flex flex-1",children:e.jsxs("a",{href:"#",children:[e.jsx("span",{className:"sr-only",children:"Your Company"}),e.jsx("img",{alt:"",src:"https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600",className:"h-8 w-auto"})]})}),e.jsx(p,{className:"absolute inset-x-0 bottom-0 sm:static sm:flex-1 sm:self-stretch",children:e.jsxs("div",{className:"flex h-14 space-x-8 overflow-x-auto border-t px-4 pb-px sm:h-full sm:justify-center sm:overflow-visible sm:border-t-0 sm:pb-0",children:[M.categories.map((i,r)=>e.jsxs(x,{className:"flex",children:[e.jsx("div",{className:"relative flex",children:e.jsx(f,{className:"relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800 data-open:border-indigo-600 data-open:text-indigo-600",children:i.name})}),e.jsxs(u,{transition:!0,className:"absolute inset-x-0 top-full text-gray-500 transition data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in sm:text-sm",children:[e.jsx("div",{"aria-hidden":"true",className:"absolute inset-0 top-1/2 bg-white shadow-sm"}),e.jsx("div",{className:"relative bg-white",children:e.jsx("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"grid grid-cols-1 items-start gap-x-6 gap-y-10 pt-10 pb-12 md:grid-cols-2 lg:gap-x-8",children:[e.jsx("div",{className:"grid grid-cols-1 gap-x-6 gap-y-10 lg:gap-x-8",children:e.jsxs("div",{children:[e.jsx("p",{id:"clothing-heading",className:"font-medium text-gray-900",children:"Clothing"}),e.jsxs("div",{className:"mt-4 border-t border-gray-200 pt-6 sm:grid sm:grid-cols-2 sm:gap-x-6",children:[e.jsx("ul",{role:"list","aria-labelledby":"clothing-heading",className:"space-y-6 sm:space-y-4",children:i.clothing[0].map(a=>e.jsx("li",{className:"flex",children:e.jsx("a",{href:a.href,className:"hover:text-gray-800",children:a.name})},a.name))}),e.jsx("ul",{role:"list","aria-label":"More clothing",className:"mt-6 space-y-6 sm:mt-0 sm:space-y-4",children:i.clothing[1].map(a=>e.jsx("li",{className:"flex",children:e.jsx("a",{href:a.href,className:"hover:text-gray-800",children:a.name})},a.name))})]})]})}),e.jsxs("div",{className:"grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:gap-x-8",children:[e.jsxs("div",{children:[e.jsx("p",{id:"accessories-heading",className:"font-medium text-gray-900",children:"Accessories"}),e.jsx("ul",{role:"list","aria-labelledby":"accessories-heading",className:"mt-4 space-y-6 border-t border-gray-200 pt-6 sm:space-y-4",children:i.accessories.map(a=>e.jsx("li",{className:"flex",children:e.jsx("a",{href:a.href,className:"hover:text-gray-800",children:a.name})},a.name))})]}),e.jsxs("div",{children:[e.jsx("p",{id:"categories-heading",className:"font-medium text-gray-900",children:"Categories"}),e.jsx("ul",{role:"list","aria-labelledby":"categories-heading",className:"mt-4 space-y-6 border-t border-gray-200 pt-6 sm:space-y-4",children:i.categories.map(a=>e.jsx("li",{className:"flex",children:e.jsx("a",{href:a.href,className:"hover:text-gray-800",children:a.name})},a.name))})]})]})]})})})]})]},r)),M.other.map(i=>e.jsx("a",{href:i.href,className:"flex items-center text-sm font-medium text-gray-700 hover:text-gray-800",children:i.name},i.name))]})}),e.jsxs("div",{className:"flex flex-1 items-center justify-end",children:[e.jsxs("a",{href:"#",className:"p-2 text-gray-400 hover:text-gray-500",children:[e.jsx("span",{className:"sr-only",children:"Search"}),e.jsx(o,{"aria-hidden":"true",className:"size-6"})]}),e.jsx("div",{className:"ml-4 flow-root lg:ml-8",children:e.jsxs("a",{href:"#",className:"group -m-2 flex items-center p-2",children:[e.jsx(w,{"aria-hidden":"true",className:"size-6 shrink-0 text-gray-400 group-hover:text-gray-500"}),e.jsx("span",{className:"ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800",children:"0"}),e.jsx("span",{className:"sr-only",children:"items in cart, view bag"})]})})]})]})})})})})}const q=`import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/react'
import { MagnifyingGlassIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'

const navigation = {
  categories: [
    {
      name: 'Women',
      clothing: [
        [
          { name: 'Tops', href: '#' },
          { name: 'Dresses', href: '#' },
          { name: 'Pants', href: '#' },
          { name: 'Denim', href: '#' },
          { name: 'Sweaters', href: '#' },
          { name: 'T-Shirts', href: '#' },
        ],
        [
          { name: 'Jackets', href: '#' },
          { name: 'Activewear', href: '#' },
          { name: 'Shorts', href: '#' },
          { name: 'Swimwear', href: '#' },
          { name: 'Browse All', href: '#' },
        ],
      ],
      accessories: [
        { name: 'Shoes', href: '#' },
        { name: 'Jewelry', href: '#' },
        { name: 'Handbags', href: '#' },
        { name: 'Socks', href: '#' },
        { name: 'Hats', href: '#' },
        { name: 'Browse All', href: '#' },
      ],
      categories: [
        { name: 'New Arrivals', href: '#' },
        { name: 'Sale', href: '#' },
        { name: 'Basic Tees', href: '#' },
        { name: 'Artwork Tees', href: '#' },
      ],
    },
    {
      name: 'Men',
      clothing: [
        [
          { name: 'Dress Shirts', href: '#' },
          { name: 'Pants', href: '#' },
          { name: 'Jackets', href: '#' },
          { name: 'T-Shirts', href: '#' },
          { name: 'Jeans', href: '#' },
          { name: 'Hoodies', href: '#' },
        ],
        [
          { name: 'Vests', href: '#' },
          { name: 'Kilts', href: '#' },
          { name: 'Outdoors', href: '#' },
          { name: 'Capes', href: '#' },
          { name: 'Browse All', href: '#' },
        ],
      ],
      accessories: [
        { name: 'Watches', href: '#' },
        { name: 'Boots', href: '#' },
        { name: 'Fanny Packs', href: '#' },
        { name: 'Sunglasses', href: '#' },
        { name: 'Browse All', href: '#' },
      ],
      categories: [
        { name: 'Just Added', href: '#' },
        { name: 'Clearance', href: '#' },
        { name: 'Graphic Tees', href: '#' },
      ],
    },
  ],
  other: [
    { name: 'Company', href: '#' },
    { name: 'Stores', href: '#' },
  ],
}

export default function Example() {
  return (
    <div className="bg-white">
      <header className="relative bg-white">
        <nav aria-label="Top" className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="border-b border-gray-200 px-4 pb-14 sm:px-0 sm:pb-0">
            <div className="flex h-16 items-center justify-between">
              {/* Logo */}
              <div className="flex flex-1">
                <a href="#">
                  <span className="sr-only">Your Company</span>
                  <img
                    alt=""
                    src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                    className="h-8 w-auto"
                  />
                </a>
              </div>

              {/* Flyout menus */}
              <PopoverGroup className="absolute inset-x-0 bottom-0 sm:static sm:flex-1 sm:self-stretch">
                <div className="flex h-14 space-x-8 overflow-x-auto border-t px-4 pb-px sm:h-full sm:justify-center sm:overflow-visible sm:border-t-0 sm:pb-0">
                  {navigation.categories.map((category, categoryIdx) => (
                    <Popover key={categoryIdx} className="flex">
                      <div className="relative flex">
                        <PopoverButton className="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800 data-open:border-indigo-600 data-open:text-indigo-600">
                          {category.name}
                        </PopoverButton>
                      </div>

                      <PopoverPanel
                        transition
                        className="absolute inset-x-0 top-full text-gray-500 transition data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in sm:text-sm"
                      >
                        {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                        <div aria-hidden="true" className="absolute inset-0 top-1/2 bg-white shadow-sm" />

                        <div className="relative bg-white">
                          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="grid grid-cols-1 items-start gap-x-6 gap-y-10 pt-10 pb-12 md:grid-cols-2 lg:gap-x-8">
                              <div className="grid grid-cols-1 gap-x-6 gap-y-10 lg:gap-x-8">
                                <div>
                                  <p id="clothing-heading" className="font-medium text-gray-900">
                                    Clothing
                                  </p>
                                  <div className="mt-4 border-t border-gray-200 pt-6 sm:grid sm:grid-cols-2 sm:gap-x-6">
                                    <ul
                                      role="list"
                                      aria-labelledby="clothing-heading"
                                      className="space-y-6 sm:space-y-4"
                                    >
                                      {category.clothing[0].map((item) => (
                                        <li key={item.name} className="flex">
                                          <a href={item.href} className="hover:text-gray-800">
                                            {item.name}
                                          </a>
                                        </li>
                                      ))}
                                    </ul>
                                    <ul
                                      role="list"
                                      aria-label="More clothing"
                                      className="mt-6 space-y-6 sm:mt-0 sm:space-y-4"
                                    >
                                      {category.clothing[1].map((item) => (
                                        <li key={item.name} className="flex">
                                          <a href={item.href} className="hover:text-gray-800">
                                            {item.name}
                                          </a>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:gap-x-8">
                                <div>
                                  <p id="accessories-heading" className="font-medium text-gray-900">
                                    Accessories
                                  </p>
                                  <ul
                                    role="list"
                                    aria-labelledby="accessories-heading"
                                    className="mt-4 space-y-6 border-t border-gray-200 pt-6 sm:space-y-4"
                                  >
                                    {category.accessories.map((item) => (
                                      <li key={item.name} className="flex">
                                        <a href={item.href} className="hover:text-gray-800">
                                          {item.name}
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div>
                                  <p id="categories-heading" className="font-medium text-gray-900">
                                    Categories
                                  </p>
                                  <ul
                                    role="list"
                                    aria-labelledby="categories-heading"
                                    className="mt-4 space-y-6 border-t border-gray-200 pt-6 sm:space-y-4"
                                  >
                                    {category.categories.map((item) => (
                                      <li key={item.name} className="flex">
                                        <a href={item.href} className="hover:text-gray-800">
                                          {item.name}
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </PopoverPanel>
                    </Popover>
                  ))}

                  {navigation.other.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </PopoverGroup>

              <div className="flex flex-1 items-center justify-end">
                {/* Search */}
                <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Search</span>
                  <MagnifyingGlassIcon aria-hidden="true" className="size-6" />
                </a>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-8">
                  <a href="#" className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                      aria-hidden="true"
                      className="size-6 shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
`,me=()=>{const i=[{id:"01",name:"With featured categories",component:e.jsx(G,{}),raw:O},{id:"02",name:"With image grid",component:e.jsx(R,{}),raw:L},{id:"03",name:"With simple menu and promo",component:e.jsx(H,{}),raw:E},{id:"04",name:"With centered logo and featured categories",component:e.jsx(U,{}),raw:J},{id:"05",name:"With double column and persistent mobile nav",component:e.jsx(Y,{}),raw:q}];return e.jsx("div",{className:"space-y-10 pb-20",children:i.map(r=>e.jsxs("section",{children:[e.jsxs("h2",{className:"mb-4 text-lg font-bold text-gray-800",children:[r.id,". ",r.name]}),e.jsx($,{name:r.name,code:r.raw,children:r.component})]},r.id))})};export{me as default};
