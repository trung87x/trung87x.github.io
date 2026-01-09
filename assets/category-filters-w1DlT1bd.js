import{r as u,j as e,h as p,L as h,z as g}from"./index-CvCVbuS9.js";import{P}from"./PreviewWrapper-TzFvRoPZ.js";import{F as x}from"./XMarkIcon-DRrKznFm.js";import{F as N}from"./PlusIcon-C7vyHRSD.js";import{F as k}from"./MinusIcon-CbukvF63.js";import{F as r}from"./ChevronDownIcon-CpWKsJQ8.js";import{F as I,a as $}from"./Squares2X2Icon-DoLshETw.js";import{X as o,x as n,L as d}from"./disclosure-Bconf5lh.js";import{l as b,f,y as v,g as y}from"./menu-DqpGavi0.js";import{h as B,v as C,D,L as F}from"./popover-CbBi4FOn.js";import"./use-resolve-button-type-J0J8N5g4.js";import"./bugs-qQ_SbDk4.js";import"./floating-CjydGm1Z.js";import"./element-movement-BT6A7GGi.js";import"./use-text-value-CB9rzUUM.js";import"./use-tree-walker-_f7mgbza.js";import"./label-CY_Q6YdE.js";const W=[{name:"Most Popular",href:"#",current:!0},{name:"Best Rating",href:"#",current:!1},{name:"Newest",href:"#",current:!1},{name:"Price: Low to High",href:"#",current:!1},{name:"Price: High to Low",href:"#",current:!1}],j=[{name:"Totes",href:"#"},{name:"Backpacks",href:"#"},{name:"Travel Bags",href:"#"},{name:"Hip Bags",href:"#"},{name:"Laptop Sleeves",href:"#"}],w=[{id:"color",name:"Color",options:[{value:"white",label:"White",checked:!1},{value:"beige",label:"Beige",checked:!1},{value:"blue",label:"Blue",checked:!0},{value:"brown",label:"Brown",checked:!1},{value:"green",label:"Green",checked:!1},{value:"purple",label:"Purple",checked:!1}]},{id:"category",name:"Category",options:[{value:"new-arrivals",label:"New Arrivals",checked:!1},{value:"sale",label:"Sale",checked:!1},{value:"travel",label:"Travel",checked:!0},{value:"organization",label:"Organization",checked:!1},{value:"accessories",label:"Accessories",checked:!1}]},{id:"size",name:"Size",options:[{value:"2l",label:"2L",checked:!1},{value:"6l",label:"6L",checked:!1},{value:"12l",label:"12L",checked:!1},{value:"18l",label:"18L",checked:!1},{value:"20l",label:"20L",checked:!1},{value:"40l",label:"40L",checked:!0}]}];function S(...s){return s.filter(Boolean).join(" ")}function O(){const[s,t]=u.useState(!1);return e.jsx("div",{className:"bg-white",children:e.jsxs("div",{children:[e.jsxs(p,{open:s,onClose:t,className:"relative z-40 lg:hidden",children:[e.jsx(h,{transition:!0,className:"fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"}),e.jsx("div",{className:"fixed inset-0 z-40 flex",children:e.jsxs(g,{transition:!0,className:"relative ml-auto flex size-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-closed:translate-x-full",children:[e.jsxs("div",{className:"flex items-center justify-between px-4",children:[e.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Filters"}),e.jsxs("button",{type:"button",onClick:()=>t(!1),className:"-mr-2 flex size-10 items-center justify-center rounded-md bg-white p-2 text-gray-400",children:[e.jsx("span",{className:"sr-only",children:"Close menu"}),e.jsx(x,{"aria-hidden":"true",className:"size-6"})]})]}),e.jsxs("form",{className:"mt-4 border-t border-gray-200",children:[e.jsx("h3",{className:"sr-only",children:"Categories"}),e.jsx("ul",{role:"list",className:"px-2 py-3 font-medium text-gray-900",children:j.map(a=>e.jsx("li",{children:e.jsx("a",{href:a.href,className:"block px-2 py-3",children:a.name})},a.name))}),w.map(a=>e.jsxs(o,{as:"div",className:"border-t border-gray-200 px-4 py-6",children:[e.jsx("h3",{className:"-mx-2 -my-3 flow-root",children:e.jsxs(n,{className:"group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500",children:[e.jsx("span",{className:"font-medium text-gray-900",children:a.name}),e.jsxs("span",{className:"ml-6 flex items-center",children:[e.jsx(N,{"aria-hidden":"true",className:"size-5 group-data-open:hidden"}),e.jsx(k,{"aria-hidden":"true",className:"size-5 group-not-data-open:hidden"})]})]})}),e.jsx(d,{className:"pt-6",children:e.jsx("div",{className:"space-y-6",children:a.options.map((i,l)=>e.jsxs("div",{className:"flex gap-3",children:[e.jsx("div",{className:"flex h-5 shrink-0 items-center",children:e.jsxs("div",{className:"group grid size-4 grid-cols-1",children:[e.jsx("input",{defaultValue:i.value,id:`filter-mobile-${a.id}-${l}`,name:`${a.id}[]`,type:"checkbox",className:"col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"}),e.jsxs("svg",{fill:"none",viewBox:"0 0 14 14",className:"pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25",children:[e.jsx("path",{d:"M3 8L6 11L11 3.5",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"opacity-0 group-has-checked:opacity-100"}),e.jsx("path",{d:"M3 7H11",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"opacity-0 group-has-indeterminate:opacity-100"})]})]})}),e.jsx("label",{htmlFor:`filter-mobile-${a.id}-${l}`,className:"min-w-0 flex-1 text-gray-500",children:i.label})]},i.value))})})]},a.id))]})]})})]}),e.jsxs("main",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6",children:[e.jsx("h1",{className:"text-4xl font-bold tracking-tight text-gray-900",children:"New Arrivals"}),e.jsxs("div",{className:"flex items-center",children:[e.jsxs(b,{as:"div",className:"relative inline-block text-left",children:[e.jsx("div",{children:e.jsxs(f,{className:"group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900",children:["Sort",e.jsx(r,{"aria-hidden":"true",className:"-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"})]})}),e.jsx(v,{transition:!0,className:"absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white ring-1 shadow-2xl ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in",children:e.jsx("div",{className:"py-1",children:W.map(a=>e.jsx(y,{children:e.jsx("a",{href:a.href,className:S(a.current?"font-medium text-gray-900":"text-gray-500","block px-4 py-2 text-sm data-focus:bg-gray-100 data-focus:outline-hidden"),children:a.name})},a.name))})})]}),e.jsxs("button",{type:"button",className:"-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7",children:[e.jsx("span",{className:"sr-only",children:"View grid"}),e.jsx(I,{"aria-hidden":"true",className:"size-5"})]}),e.jsxs("button",{type:"button",onClick:()=>t(!0),className:"-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden",children:[e.jsx("span",{className:"sr-only",children:"Filters"}),e.jsx($,{"aria-hidden":"true",className:"size-5"})]})]})]}),e.jsxs("section",{"aria-labelledby":"products-heading",className:"pt-6 pb-24",children:[e.jsx("h2",{id:"products-heading",className:"sr-only",children:"Products"}),e.jsxs("div",{className:"grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4",children:[e.jsxs("form",{className:"hidden lg:block",children:[e.jsx("h3",{className:"sr-only",children:"Categories"}),e.jsx("ul",{role:"list",className:"space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900",children:j.map(a=>e.jsx("li",{children:e.jsx("a",{href:a.href,children:a.name})},a.name))}),w.map(a=>e.jsxs(o,{as:"div",className:"border-b border-gray-200 py-6",children:[e.jsx("h3",{className:"-my-3 flow-root",children:e.jsxs(n,{className:"group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500",children:[e.jsx("span",{className:"font-medium text-gray-900",children:a.name}),e.jsxs("span",{className:"ml-6 flex items-center",children:[e.jsx(N,{"aria-hidden":"true",className:"size-5 group-data-open:hidden"}),e.jsx(k,{"aria-hidden":"true",className:"size-5 group-not-data-open:hidden"})]})]})}),e.jsx(d,{className:"pt-6",children:e.jsx("div",{className:"space-y-4",children:a.options.map((i,l)=>e.jsxs("div",{className:"flex gap-3",children:[e.jsx("div",{className:"flex h-5 shrink-0 items-center",children:e.jsxs("div",{className:"group grid size-4 grid-cols-1",children:[e.jsx("input",{defaultValue:i.value,defaultChecked:i.checked,id:`filter-${a.id}-${l}`,name:`${a.id}[]`,type:"checkbox",className:"col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"}),e.jsxs("svg",{fill:"none",viewBox:"0 0 14 14",className:"pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25",children:[e.jsx("path",{d:"M3 8L6 11L11 3.5",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"opacity-0 group-has-checked:opacity-100"}),e.jsx("path",{d:"M3 7H11",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"opacity-0 group-has-indeterminate:opacity-100"})]})]})}),e.jsx("label",{htmlFor:`filter-${a.id}-${l}`,className:"text-sm text-gray-600",children:i.label})]},i.value))})})]},a.id))]}),e.jsx("div",{className:"lg:col-span-3"})]})]})]})]})})}const H=`'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'

const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
]
const subCategories = [
  { name: 'Totes', href: '#' },
  { name: 'Backpacks', href: '#' },
  { name: 'Travel Bags', href: '#' },
  { name: 'Hip Bags', href: '#' },
  { name: 'Laptop Sleeves', href: '#' },
]
const filters = [
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'white', label: 'White', checked: false },
      { value: 'beige', label: 'Beige', checked: false },
      { value: 'blue', label: 'Blue', checked: true },
      { value: 'brown', label: 'Brown', checked: false },
      { value: 'green', label: 'Green', checked: false },
      { value: 'purple', label: 'Purple', checked: false },
    ],
  },
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'new-arrivals', label: 'New Arrivals', checked: false },
      { value: 'sale', label: 'Sale', checked: false },
      { value: 'travel', label: 'Travel', checked: true },
      { value: 'organization', label: 'Organization', checked: false },
      { value: 'accessories', label: 'Accessories', checked: false },
    ],
  },
  {
    id: 'size',
    name: 'Size',
    options: [
      { value: '2l', label: '2L', checked: false },
      { value: '6l', label: '6L', checked: false },
      { value: '12l', label: '12L', checked: false },
      { value: '18l', label: '18L', checked: false },
      { value: '20l', label: '20L', checked: false },
      { value: '40l', label: '40L', checked: true },
    ],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Dialog open={mobileFiltersOpen} onClose={setMobileFiltersOpen} className="relative z-40 lg:hidden">
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
          />

          <div className="fixed inset-0 z-40 flex">
            <DialogPanel
              transition
              className="relative ml-auto flex size-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-closed:translate-x-full"
            >
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="-mr-2 flex size-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>

              {/* Filters */}
              <form className="mt-4 border-t border-gray-200">
                <h3 className="sr-only">Categories</h3>
                <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <a href={category.href} className="block px-2 py-3">
                        {category.name}
                      </a>
                    </li>
                  ))}
                </ul>

                {filters.map((section) => (
                  <Disclosure key={section.id} as="div" className="border-t border-gray-200 px-4 py-6">
                    <h3 className="-mx-2 -my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">{section.name}</span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon aria-hidden="true" className="size-5 group-data-open:hidden" />
                          <MinusIcon aria-hidden="true" className="size-5 group-not-data-open:hidden" />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                      <div className="space-y-6">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex gap-3">
                            <div className="flex h-5 shrink-0 items-center">
                              <div className="group grid size-4 grid-cols-1">
                                <input
                                  defaultValue={option.value}
                                  id={\`filter-mobile-\${section.id}-\${optionIdx}\`}
                                  name={\`\${section.id}[]\`}
                                  type="checkbox"
                                  className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                />
                                <svg
                                  fill="none"
                                  viewBox="0 0 14 14"
                                  className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                >
                                  <path
                                    d="M3 8L6 11L11 3.5"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="opacity-0 group-has-checked:opacity-100"
                                  />
                                  <path
                                    d="M3 7H11"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="opacity-0 group-has-indeterminate:opacity-100"
                                  />
                                </svg>
                              </div>
                            </div>
                            <label
                              htmlFor={\`filter-mobile-\${section.id}-\${optionIdx}\`}
                              className="min-w-0 flex-1 text-gray-500"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                ))}
              </form>
            </DialogPanel>
          </div>
        </Dialog>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">New Arrivals</h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                  </MenuButton>
                </div>

                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white ring-1 shadow-2xl ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                >
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <MenuItem key={option.name}>
                        <a
                          href={option.href}
                          className={classNames(
                            option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                            'block px-4 py-2 text-sm data-focus:bg-gray-100 data-focus:outline-hidden',
                          )}
                        >
                          {option.name}
                        </a>
                      </MenuItem>
                    ))}
                  </div>
                </MenuItems>
              </Menu>

              <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                <span className="sr-only">View grid</span>
                <Squares2X2Icon aria-hidden="true" className="size-5" />
              </button>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon aria-hidden="true" className="size-5" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>
                <ul role="list" className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <a href={category.href}>{category.name}</a>
                    </li>
                  ))}
                </ul>

                {filters.map((section) => (
                  <Disclosure key={section.id} as="div" className="border-b border-gray-200 py-6">
                    <h3 className="-my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">{section.name}</span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon aria-hidden="true" className="size-5 group-data-open:hidden" />
                          <MinusIcon aria-hidden="true" className="size-5 group-not-data-open:hidden" />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                      <div className="space-y-4">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex gap-3">
                            <div className="flex h-5 shrink-0 items-center">
                              <div className="group grid size-4 grid-cols-1">
                                <input
                                  defaultValue={option.value}
                                  defaultChecked={option.checked}
                                  id={\`filter-\${section.id}-\${optionIdx}\`}
                                  name={\`\${section.id}[]\`}
                                  type="checkbox"
                                  className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                />
                                <svg
                                  fill="none"
                                  viewBox="0 0 14 14"
                                  className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                >
                                  <path
                                    d="M3 8L6 11L11 3.5"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="opacity-0 group-has-checked:opacity-100"
                                  />
                                  <path
                                    d="M3 7H11"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="opacity-0 group-has-indeterminate:opacity-100"
                                  />
                                </svg>
                              </div>
                            </div>
                            <label htmlFor={\`filter-\${section.id}-\${optionIdx}\`} className="text-sm text-gray-600">
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                ))}
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">{/* Your content */}</div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
`,A=[{name:"Most Popular",href:"#"},{name:"Best Rating",href:"#"},{name:"Newest",href:"#"}],L=[{id:"category",name:"Category",options:[{value:"tees",label:"Tees"},{value:"crewnecks",label:"Crewnecks"},{value:"hats",label:"Hats"}]},{id:"brand",name:"Brand",options:[{value:"clothing-company",label:"Clothing Company"},{value:"fashion-inc",label:"Fashion Inc."},{value:"shoes-n-more",label:"Shoes 'n More"}]},{id:"color",name:"Color",options:[{value:"white",label:"White"},{value:"black",label:"Black"},{value:"grey",label:"Grey"}]},{id:"sizes",name:"Sizes",options:[{value:"s",label:"S"},{value:"m",label:"M"},{value:"l",label:"L"}]}];function V(){const[s,t]=u.useState(!1);return e.jsxs("div",{className:"bg-gray-50",children:[e.jsxs(p,{open:s,onClose:t,className:"relative z-40 sm:hidden",children:[e.jsx(h,{transition:!0,className:"fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"}),e.jsx("div",{className:"fixed inset-0 z-40 flex",children:e.jsxs(g,{transition:!0,className:"relative ml-auto flex size-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl transition duration-300 ease-in-out data-closed:translate-x-full",children:[e.jsxs("div",{className:"flex items-center justify-between px-4",children:[e.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Filters"}),e.jsxs("button",{type:"button",onClick:()=>t(!1),className:"-mr-2 flex size-10 items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:outline-hidden",children:[e.jsx("span",{className:"sr-only",children:"Close menu"}),e.jsx(x,{"aria-hidden":"true",className:"size-6"})]})]}),e.jsx("form",{className:"mt-4",children:L.map(a=>e.jsxs(o,{as:"div",className:"border-t border-gray-200 px-4 py-6",children:[e.jsx("h3",{className:"-mx-2 -my-3 flow-root",children:e.jsxs(n,{className:"group flex w-full items-center justify-between bg-white px-2 py-3 text-sm text-gray-400",children:[e.jsx("span",{className:"font-medium text-gray-900",children:a.name}),e.jsx("span",{className:"ml-6 flex items-center",children:e.jsx(r,{"aria-hidden":"true",className:"size-5 rotate-0 transform group-data-open:-rotate-180"})})]})}),e.jsx(d,{className:"pt-6",children:e.jsx("div",{className:"space-y-6",children:a.options.map((i,l)=>e.jsxs("div",{className:"flex gap-3",children:[e.jsx("div",{className:"flex h-5 shrink-0 items-center",children:e.jsxs("div",{className:"group grid size-4 grid-cols-1",children:[e.jsx("input",{defaultValue:i.value,id:`filter-mobile-${a.id}-${l}`,name:`${a.id}[]`,type:"checkbox",className:"col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"}),e.jsxs("svg",{fill:"none",viewBox:"0 0 14 14",className:"pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25",children:[e.jsx("path",{d:"M3 8L6 11L11 3.5",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"opacity-0 group-has-checked:opacity-100"}),e.jsx("path",{d:"M3 7H11",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"opacity-0 group-has-indeterminate:opacity-100"})]})]})}),e.jsx("label",{htmlFor:`filter-mobile-${a.id}-${l}`,className:"text-sm text-gray-500",children:i.label})]},i.value))})})]},a.name))})]})})]}),e.jsxs("div",{className:"mx-auto max-w-3xl px-4 text-center sm:px-6 lg:max-w-7xl lg:px-8",children:[e.jsxs("div",{className:"py-24",children:[e.jsx("h1",{className:"text-4xl font-bold tracking-tight text-gray-900",children:"New Arrivals"}),e.jsx("p",{className:"mx-auto mt-4 max-w-3xl text-base text-gray-500",children:"Thoughtfully designed objects for the workspace, home, and travel."})]}),e.jsxs("section",{"aria-labelledby":"filter-heading",className:"border-t border-gray-200 py-6",children:[e.jsx("h2",{id:"filter-heading",className:"sr-only",children:"Product filters"}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs(b,{as:"div",className:"relative inline-block text-left",children:[e.jsx("div",{children:e.jsxs(f,{className:"group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900",children:["Sort",e.jsx(r,{"aria-hidden":"true",className:"-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"})]})}),e.jsx(v,{transition:!0,className:"absolute left-0 z-10 mt-2 w-40 origin-top-left rounded-md bg-white ring-1 shadow-2xl ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in",children:e.jsx("div",{className:"py-1",children:A.map(a=>e.jsx(y,{children:e.jsx("a",{href:a.href,className:"block px-4 py-2 text-sm font-medium text-gray-900 data-focus:bg-gray-100 data-focus:outline-hidden",children:a.name})},a))})})]}),e.jsx("button",{type:"button",onClick:()=>t(!0),className:"inline-block text-sm font-medium text-gray-700 hover:text-gray-900 sm:hidden",children:"Filters"}),e.jsx(B,{className:"hidden sm:flex sm:items-baseline sm:space-x-8",children:L.map((a,i)=>e.jsxs(C,{id:`desktop-menu-${i}`,className:"relative inline-block text-left",children:[e.jsx("div",{children:e.jsxs(D,{className:"group inline-flex items-center justify-center text-sm font-medium text-gray-700 hover:text-gray-900",children:[e.jsx("span",{children:a.name}),i===0?e.jsx("span",{className:"ml-1.5 rounded-sm bg-gray-200 px-1.5 py-0.5 text-xs font-semibold text-gray-700 tabular-nums",children:"1"}):null,e.jsx(r,{"aria-hidden":"true",className:"-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"})]})}),e.jsx(F,{transition:!0,className:"absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white p-4 ring-1 shadow-2xl ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in",children:e.jsx("form",{className:"space-y-4",children:a.options.map((l,c)=>e.jsxs("div",{className:"flex gap-3",children:[e.jsx("div",{className:"flex h-5 shrink-0 items-center",children:e.jsxs("div",{className:"group grid size-4 grid-cols-1",children:[e.jsx("input",{defaultValue:l.value,id:`filter-${a.id}-${c}`,name:`${a.id}[]`,type:"checkbox",className:"col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"}),e.jsxs("svg",{fill:"none",viewBox:"0 0 14 14",className:"pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25",children:[e.jsx("path",{d:"M3 8L6 11L11 3.5",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"opacity-0 group-has-checked:opacity-100"}),e.jsx("path",{d:"M3 7H11",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"opacity-0 group-has-indeterminate:opacity-100"})]})]})}),e.jsx("label",{htmlFor:`filter-${a.id}-${c}`,className:"pr-6 text-sm font-medium whitespace-nowrap text-gray-900",children:l.label})]},l.value))})})]},a.name))})]})]})]})]})}const X=`'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const sortOptions = [
  { name: 'Most Popular', href: '#' },
  { name: 'Best Rating', href: '#' },
  { name: 'Newest', href: '#' },
]
const filters = [
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'tees', label: 'Tees' },
      { value: 'crewnecks', label: 'Crewnecks' },
      { value: 'hats', label: 'Hats' },
    ],
  },
  {
    id: 'brand',
    name: 'Brand',
    options: [
      { value: 'clothing-company', label: 'Clothing Company' },
      { value: 'fashion-inc', label: 'Fashion Inc.' },
      { value: 'shoes-n-more', label: "Shoes 'n More" },
    ],
  },
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'white', label: 'White' },
      { value: 'black', label: 'Black' },
      { value: 'grey', label: 'Grey' },
    ],
  },
  {
    id: 'sizes',
    name: 'Sizes',
    options: [
      { value: 's', label: 'S' },
      { value: 'm', label: 'M' },
      { value: 'l', label: 'L' },
    ],
  },
]

export default function Example() {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-gray-50">
      {/* Mobile filter dialog */}
      <Dialog open={open} onClose={setOpen} className="relative z-40 sm:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
        />

        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative ml-auto flex size-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl transition duration-300 ease-in-out data-closed:translate-x-full"
          >
            <div className="flex items-center justify-between px-4">
              <h2 className="text-lg font-medium text-gray-900">Filters</h2>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="-mr-2 flex size-10 items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:outline-hidden"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>

            {/* Filters */}
            <form className="mt-4">
              {filters.map((section) => (
                <Disclosure key={section.name} as="div" className="border-t border-gray-200 px-4 py-6">
                  <h3 className="-mx-2 -my-3 flow-root">
                    <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-sm text-gray-400">
                      <span className="font-medium text-gray-900">{section.name}</span>
                      <span className="ml-6 flex items-center">
                        <ChevronDownIcon
                          aria-hidden="true"
                          className="size-5 rotate-0 transform group-data-open:-rotate-180"
                        />
                      </span>
                    </DisclosureButton>
                  </h3>
                  <DisclosurePanel className="pt-6">
                    <div className="space-y-6">
                      {section.options.map((option, optionIdx) => (
                        <div key={option.value} className="flex gap-3">
                          <div className="flex h-5 shrink-0 items-center">
                            <div className="group grid size-4 grid-cols-1">
                              <input
                                defaultValue={option.value}
                                id={\`filter-mobile-\${section.id}-\${optionIdx}\`}
                                name={\`\${section.id}[]\`}
                                type="checkbox"
                                className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                              />
                              <svg
                                fill="none"
                                viewBox="0 0 14 14"
                                className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                              >
                                <path
                                  d="M3 8L6 11L11 3.5"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="opacity-0 group-has-checked:opacity-100"
                                />
                                <path
                                  d="M3 7H11"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="opacity-0 group-has-indeterminate:opacity-100"
                                />
                              </svg>
                            </div>
                          </div>
                          <label htmlFor={\`filter-mobile-\${section.id}-\${optionIdx}\`} className="text-sm text-gray-500">
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </DisclosurePanel>
                </Disclosure>
              ))}
            </form>
          </DialogPanel>
        </div>
      </Dialog>

      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="py-24">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">New Arrivals</h1>
          <p className="mx-auto mt-4 max-w-3xl text-base text-gray-500">
            Thoughtfully designed objects for the workspace, home, and travel.
          </p>
        </div>

        <section aria-labelledby="filter-heading" className="border-t border-gray-200 py-6">
          <h2 id="filter-heading" className="sr-only">
            Product filters
          </h2>

          <div className="flex items-center justify-between">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                  Sort
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
                  />
                </MenuButton>
              </div>

              <MenuItems
                transition
                className="absolute left-0 z-10 mt-2 w-40 origin-top-left rounded-md bg-white ring-1 shadow-2xl ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <div className="py-1">
                  {sortOptions.map((option) => (
                    <MenuItem key={option}>
                      <a
                        href={option.href}
                        className="block px-4 py-2 text-sm font-medium text-gray-900 data-focus:bg-gray-100 data-focus:outline-hidden"
                      >
                        {option.name}
                      </a>
                    </MenuItem>
                  ))}
                </div>
              </MenuItems>
            </Menu>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-block text-sm font-medium text-gray-700 hover:text-gray-900 sm:hidden"
            >
              Filters
            </button>

            <PopoverGroup className="hidden sm:flex sm:items-baseline sm:space-x-8">
              {filters.map((section, sectionIdx) => (
                <Popover
                  key={section.name}
                  id={\`desktop-menu-\${sectionIdx}\`}
                  className="relative inline-block text-left"
                >
                  <div>
                    <PopoverButton className="group inline-flex items-center justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                      <span>{section.name}</span>
                      {sectionIdx === 0 ? (
                        <span className="ml-1.5 rounded-sm bg-gray-200 px-1.5 py-0.5 text-xs font-semibold text-gray-700 tabular-nums">
                          1
                        </span>
                      ) : null}
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
                      />
                    </PopoverButton>
                  </div>

                  <PopoverPanel
                    transition
                    className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white p-4 ring-1 shadow-2xl ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                  >
                    <form className="space-y-4">
                      {section.options.map((option, optionIdx) => (
                        <div key={option.value} className="flex gap-3">
                          <div className="flex h-5 shrink-0 items-center">
                            <div className="group grid size-4 grid-cols-1">
                              <input
                                defaultValue={option.value}
                                id={\`filter-\${section.id}-\${optionIdx}\`}
                                name={\`\${section.id}[]\`}
                                type="checkbox"
                                className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                              />
                              <svg
                                fill="none"
                                viewBox="0 0 14 14"
                                className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                              >
                                <path
                                  d="M3 8L6 11L11 3.5"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="opacity-0 group-has-checked:opacity-100"
                                />
                                <path
                                  d="M3 7H11"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="opacity-0 group-has-indeterminate:opacity-100"
                                />
                              </svg>
                            </div>
                          </div>
                          <label
                            htmlFor={\`filter-\${section.id}-\${optionIdx}\`}
                            className="pr-6 text-sm font-medium whitespace-nowrap text-gray-900"
                          >
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </form>
                  </PopoverPanel>
                </Popover>
              ))}
            </PopoverGroup>
          </div>
        </section>
      </div>
    </div>
  )
}
`,R=[{name:"Most Popular",href:"#",current:!0},{name:"Best Rating",href:"#",current:!1},{name:"Newest",href:"#",current:!1}],z=[{id:"category",name:"Category",options:[{value:"new-arrivals",label:"All New Arrivals",checked:!1},{value:"tees",label:"Tees",checked:!1},{value:"objects",label:"Objects",checked:!0}]},{id:"color",name:"Color",options:[{value:"white",label:"White",checked:!1},{value:"beige",label:"Beige",checked:!1},{value:"blue",label:"Blue",checked:!1}]},{id:"sizes",name:"Sizes",options:[{value:"s",label:"S",checked:!1},{value:"m",label:"M",checked:!1},{value:"l",label:"L",checked:!1}]}],T=[{value:"objects",label:"Objects"}];function E(...s){return s.filter(Boolean).join(" ")}function G(){const[s,t]=u.useState(!1);return e.jsxs("div",{className:"bg-white",children:[e.jsxs(p,{open:s,onClose:t,className:"relative z-40 sm:hidden",children:[e.jsx(h,{transition:!0,className:"fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"}),e.jsx("div",{className:"fixed inset-0 z-40 flex",children:e.jsxs(g,{transition:!0,className:"relative ml-auto flex size-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-closed:translate-x-full",children:[e.jsxs("div",{className:"flex items-center justify-between px-4",children:[e.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Filters"}),e.jsxs("button",{type:"button",onClick:()=>t(!1),className:"-mr-2 flex size-10 items-center justify-center rounded-md bg-white p-2 text-gray-400",children:[e.jsx("span",{className:"sr-only",children:"Close menu"}),e.jsx(x,{"aria-hidden":"true",className:"size-6"})]})]}),e.jsx("form",{className:"mt-4",children:z.map(a=>e.jsxs(o,{as:"div",className:"border-t border-gray-200 px-4 py-6",children:[e.jsx("h3",{className:"-mx-2 -my-3 flow-root",children:e.jsxs(n,{className:"group flex w-full items-center justify-between bg-white px-2 py-3 text-sm text-gray-400",children:[e.jsx("span",{className:"font-medium text-gray-900",children:a.name}),e.jsx("span",{className:"ml-6 flex items-center",children:e.jsx(r,{"aria-hidden":"true",className:"size-5 rotate-0 transform group-data-open:-rotate-180"})})]})}),e.jsx(d,{className:"pt-6",children:e.jsx("div",{className:"space-y-6",children:a.options.map((i,l)=>e.jsxs("div",{className:"flex gap-3",children:[e.jsx("div",{className:"flex h-5 shrink-0 items-center",children:e.jsxs("div",{className:"group grid size-4 grid-cols-1",children:[e.jsx("input",{defaultValue:i.value,defaultChecked:i.checked,id:`filter-mobile-${a.id}-${l}`,name:`${a.id}[]`,type:"checkbox",className:"col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"}),e.jsxs("svg",{fill:"none",viewBox:"0 0 14 14",className:"pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25",children:[e.jsx("path",{d:"M3 8L6 11L11 3.5",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"opacity-0 group-has-checked:opacity-100"}),e.jsx("path",{d:"M3 7H11",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"opacity-0 group-has-indeterminate:opacity-100"})]})]})}),e.jsx("label",{htmlFor:`filter-mobile-${a.id}-${l}`,className:"text-sm text-gray-500",children:i.label})]},i.value))})})]},a.name))})]})})]}),e.jsxs("div",{className:"mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8",children:[e.jsx("h1",{className:"text-3xl font-bold tracking-tight text-gray-900",children:"Workspace sale"}),e.jsx("p",{className:"mt-4 max-w-xl text-sm text-gray-700",children:"Our thoughtfully designed workspace objects are crafted in limited runs. Improve your productivity and organization with these sale items before we run out."})]}),e.jsxs("section",{"aria-labelledby":"filter-heading",children:[e.jsx("h2",{id:"filter-heading",className:"sr-only",children:"Filters"}),e.jsx("div",{className:"border-b border-gray-200 bg-white pb-4",children:e.jsxs("div",{className:"mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8",children:[e.jsxs(b,{as:"div",className:"relative inline-block text-left",children:[e.jsx("div",{children:e.jsxs(f,{className:"group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900",children:["Sort",e.jsx(r,{"aria-hidden":"true",className:"-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"})]})}),e.jsx(v,{transition:!0,className:"absolute left-0 z-10 mt-2 w-40 origin-top-left rounded-md bg-white ring-1 shadow-2xl ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in",children:e.jsx("div",{className:"py-1",children:R.map(a=>e.jsx(y,{children:e.jsx("a",{href:a.href,className:E(a.current?"font-medium text-gray-900":"text-gray-500","block px-4 py-2 text-sm data-focus:bg-gray-100 data-focus:outline-hidden"),children:a.name})},a.name))})})]}),e.jsx("button",{type:"button",onClick:()=>t(!0),className:"inline-block text-sm font-medium text-gray-700 hover:text-gray-900 sm:hidden",children:"Filters"}),e.jsx("div",{className:"hidden sm:block",children:e.jsx("div",{className:"flow-root",children:e.jsx(B,{className:"-mx-4 flex items-center divide-x divide-gray-200",children:z.map((a,i)=>e.jsxs(C,{className:"relative inline-block px-4 text-left",children:[e.jsxs(D,{className:"group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900",children:[e.jsx("span",{children:a.name}),i===0?e.jsx("span",{className:"ml-1.5 rounded-sm bg-gray-200 px-1.5 py-0.5 text-xs font-semibold text-gray-700 tabular-nums",children:"1"}):null,e.jsx(r,{"aria-hidden":"true",className:"-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"})]}),e.jsx(F,{transition:!0,className:"absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white p-4 ring-1 shadow-2xl ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in",children:e.jsx("form",{className:"space-y-4",children:a.options.map((l,c)=>e.jsxs("div",{className:"flex gap-3",children:[e.jsx("div",{className:"flex h-5 shrink-0 items-center",children:e.jsxs("div",{className:"group grid size-4 grid-cols-1",children:[e.jsx("input",{defaultValue:l.value,defaultChecked:l.checked,id:`filter-${a.id}-${c}`,name:`${a.id}[]`,type:"checkbox",className:"col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"}),e.jsxs("svg",{fill:"none",viewBox:"0 0 14 14",className:"pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25",children:[e.jsx("path",{d:"M3 8L6 11L11 3.5",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"opacity-0 group-has-checked:opacity-100"}),e.jsx("path",{d:"M3 7H11",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"opacity-0 group-has-indeterminate:opacity-100"})]})]})}),e.jsx("label",{htmlFor:`filter-${a.id}-${c}`,className:"pr-6 text-sm font-medium whitespace-nowrap text-gray-900",children:l.label})]},l.value))})})]},a.name))})})})]})}),e.jsx("div",{className:"bg-gray-100",children:e.jsxs("div",{className:"mx-auto max-w-7xl px-4 py-3 sm:flex sm:items-center sm:px-6 lg:px-8",children:[e.jsxs("h3",{className:"text-sm font-medium text-gray-500",children:["Filters",e.jsx("span",{className:"sr-only",children:", active"})]}),e.jsx("div",{"aria-hidden":"true",className:"hidden h-5 w-px bg-gray-300 sm:ml-4 sm:block"}),e.jsx("div",{className:"mt-2 sm:mt-0 sm:ml-4",children:e.jsx("div",{className:"-m-1 flex flex-wrap items-center",children:T.map(a=>e.jsxs("span",{className:"m-1 inline-flex items-center rounded-full border border-gray-200 bg-white py-1.5 pr-2 pl-3 text-sm font-medium text-gray-900",children:[e.jsx("span",{children:a.label}),e.jsxs("button",{type:"button",className:"ml-1 inline-flex size-4 shrink-0 rounded-full p-1 text-gray-400 hover:bg-gray-200 hover:text-gray-500",children:[e.jsxs("span",{className:"sr-only",children:["Remove filter for ",a.label]}),e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 8 8",className:"size-2",children:e.jsx("path",{d:"M1 1l6 6m0-6L1 7",strokeWidth:"1.5",strokeLinecap:"round"})})]})]},a.value))})})]})})]})]})}const q=`'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
]
const filters = [
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'new-arrivals', label: 'All New Arrivals', checked: false },
      { value: 'tees', label: 'Tees', checked: false },
      { value: 'objects', label: 'Objects', checked: true },
    ],
  },
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'white', label: 'White', checked: false },
      { value: 'beige', label: 'Beige', checked: false },
      { value: 'blue', label: 'Blue', checked: false },
    ],
  },
  {
    id: 'sizes',
    name: 'Sizes',
    options: [
      { value: 's', label: 'S', checked: false },
      { value: 'm', label: 'M', checked: false },
      { value: 'l', label: 'L', checked: false },
    ],
  },
]
const activeFilters = [{ value: 'objects', label: 'Objects' }]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-white">
      {/* Mobile filter dialog */}
      <Dialog open={open} onClose={setOpen} className="relative z-40 sm:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
        />

        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative ml-auto flex size-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-closed:translate-x-full"
          >
            <div className="flex items-center justify-between px-4">
              <h2 className="text-lg font-medium text-gray-900">Filters</h2>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="-mr-2 flex size-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>

            {/* Filters */}
            <form className="mt-4">
              {filters.map((section) => (
                <Disclosure key={section.name} as="div" className="border-t border-gray-200 px-4 py-6">
                  <h3 className="-mx-2 -my-3 flow-root">
                    <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-sm text-gray-400">
                      <span className="font-medium text-gray-900">{section.name}</span>
                      <span className="ml-6 flex items-center">
                        <ChevronDownIcon
                          aria-hidden="true"
                          className="size-5 rotate-0 transform group-data-open:-rotate-180"
                        />
                      </span>
                    </DisclosureButton>
                  </h3>
                  <DisclosurePanel className="pt-6">
                    <div className="space-y-6">
                      {section.options.map((option, optionIdx) => (
                        <div key={option.value} className="flex gap-3">
                          <div className="flex h-5 shrink-0 items-center">
                            <div className="group grid size-4 grid-cols-1">
                              <input
                                defaultValue={option.value}
                                defaultChecked={option.checked}
                                id={\`filter-mobile-\${section.id}-\${optionIdx}\`}
                                name={\`\${section.id}[]\`}
                                type="checkbox"
                                className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                              />
                              <svg
                                fill="none"
                                viewBox="0 0 14 14"
                                className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                              >
                                <path
                                  d="M3 8L6 11L11 3.5"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="opacity-0 group-has-checked:opacity-100"
                                />
                                <path
                                  d="M3 7H11"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="opacity-0 group-has-indeterminate:opacity-100"
                                />
                              </svg>
                            </div>
                          </div>
                          <label htmlFor={\`filter-mobile-\${section.id}-\${optionIdx}\`} className="text-sm text-gray-500">
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </DisclosurePanel>
                </Disclosure>
              ))}
            </form>
          </DialogPanel>
        </div>
      </Dialog>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Workspace sale</h1>
        <p className="mt-4 max-w-xl text-sm text-gray-700">
          Our thoughtfully designed workspace objects are crafted in limited runs. Improve your productivity and
          organization with these sale items before we run out.
        </p>
      </div>

      {/* Filters */}
      <section aria-labelledby="filter-heading">
        <h2 id="filter-heading" className="sr-only">
          Filters
        </h2>

        <div className="border-b border-gray-200 bg-white pb-4">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                  Sort
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
                  />
                </MenuButton>
              </div>

              <MenuItems
                transition
                className="absolute left-0 z-10 mt-2 w-40 origin-top-left rounded-md bg-white ring-1 shadow-2xl ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <div className="py-1">
                  {sortOptions.map((option) => (
                    <MenuItem key={option.name}>
                      <a
                        href={option.href}
                        className={classNames(
                          option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                          'block px-4 py-2 text-sm data-focus:bg-gray-100 data-focus:outline-hidden',
                        )}
                      >
                        {option.name}
                      </a>
                    </MenuItem>
                  ))}
                </div>
              </MenuItems>
            </Menu>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-block text-sm font-medium text-gray-700 hover:text-gray-900 sm:hidden"
            >
              Filters
            </button>

            <div className="hidden sm:block">
              <div className="flow-root">
                <PopoverGroup className="-mx-4 flex items-center divide-x divide-gray-200">
                  {filters.map((section, sectionIdx) => (
                    <Popover key={section.name} className="relative inline-block px-4 text-left">
                      <PopoverButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                        <span>{section.name}</span>
                        {sectionIdx === 0 ? (
                          <span className="ml-1.5 rounded-sm bg-gray-200 px-1.5 py-0.5 text-xs font-semibold text-gray-700 tabular-nums">
                            1
                          </span>
                        ) : null}
                        <ChevronDownIcon
                          aria-hidden="true"
                          className="-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
                        />
                      </PopoverButton>

                      <PopoverPanel
                        transition
                        className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white p-4 ring-1 shadow-2xl ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                      >
                        <form className="space-y-4">
                          {section.options.map((option, optionIdx) => (
                            <div key={option.value} className="flex gap-3">
                              <div className="flex h-5 shrink-0 items-center">
                                <div className="group grid size-4 grid-cols-1">
                                  <input
                                    defaultValue={option.value}
                                    defaultChecked={option.checked}
                                    id={\`filter-\${section.id}-\${optionIdx}\`}
                                    name={\`\${section.id}[]\`}
                                    type="checkbox"
                                    className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                  />
                                  <svg
                                    fill="none"
                                    viewBox="0 0 14 14"
                                    className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                  >
                                    <path
                                      d="M3 8L6 11L11 3.5"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="opacity-0 group-has-checked:opacity-100"
                                    />
                                    <path
                                      d="M3 7H11"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="opacity-0 group-has-indeterminate:opacity-100"
                                    />
                                  </svg>
                                </div>
                              </div>
                              <label
                                htmlFor={\`filter-\${section.id}-\${optionIdx}\`}
                                className="pr-6 text-sm font-medium whitespace-nowrap text-gray-900"
                              >
                                {option.label}
                              </label>
                            </div>
                          ))}
                        </form>
                      </PopoverPanel>
                    </Popover>
                  ))}
                </PopoverGroup>
              </div>
            </div>
          </div>
        </div>

        {/* Active filters */}
        <div className="bg-gray-100">
          <div className="mx-auto max-w-7xl px-4 py-3 sm:flex sm:items-center sm:px-6 lg:px-8">
            <h3 className="text-sm font-medium text-gray-500">
              Filters
              <span className="sr-only">, active</span>
            </h3>

            <div aria-hidden="true" className="hidden h-5 w-px bg-gray-300 sm:ml-4 sm:block" />

            <div className="mt-2 sm:mt-0 sm:ml-4">
              <div className="-m-1 flex flex-wrap items-center">
                {activeFilters.map((activeFilter) => (
                  <span
                    key={activeFilter.value}
                    className="m-1 inline-flex items-center rounded-full border border-gray-200 bg-white py-1.5 pr-2 pl-3 text-sm font-medium text-gray-900"
                  >
                    <span>{activeFilter.label}</span>
                    <button
                      type="button"
                      className="ml-1 inline-flex size-4 shrink-0 rounded-full p-1 text-gray-400 hover:bg-gray-200 hover:text-gray-500"
                    >
                      <span className="sr-only">Remove filter for {activeFilter.label}</span>
                      <svg fill="none" stroke="currentColor" viewBox="0 0 8 8" className="size-2">
                        <path d="M1 1l6 6m0-6L1 7" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
`,m={price:[{value:"0",label:"$0 - $25",checked:!1},{value:"25",label:"$25 - $50",checked:!1},{value:"50",label:"$50 - $75",checked:!1},{value:"75",label:"$75+",checked:!1}],color:[{value:"white",label:"White",checked:!1},{value:"beige",label:"Beige",checked:!1},{value:"blue",label:"Blue",checked:!0},{value:"brown",label:"Brown",checked:!1},{value:"green",label:"Green",checked:!1},{value:"purple",label:"Purple",checked:!1}],size:[{value:"xs",label:"XS",checked:!1},{value:"s",label:"S",checked:!0},{value:"m",label:"M",checked:!1},{value:"l",label:"L",checked:!1},{value:"xl",label:"XL",checked:!1},{value:"2xl",label:"2XL",checked:!1}],category:[{value:"all-new-arrivals",label:"All New Arrivals",checked:!1},{value:"tees",label:"Tees",checked:!1},{value:"objects",label:"Objects",checked:!1},{value:"sweatshirts",label:"Sweatshirts",checked:!1},{value:"pants-and-shorts",label:"Pants & Shorts",checked:!1}]},Y=[{name:"Most Popular",href:"#",current:!0},{name:"Best Rating",href:"#",current:!1},{name:"Newest",href:"#",current:!1}];function J(...s){return s.filter(Boolean).join(" ")}function K(){return e.jsxs("div",{className:"bg-white",children:[e.jsxs("div",{className:"px-4 py-16 text-center sm:px-6 lg:px-8",children:[e.jsx("h1",{className:"text-4xl font-bold tracking-tight text-gray-900",children:"Workspace"}),e.jsx("p",{className:"mx-auto mt-4 max-w-xl text-base text-gray-500",children:"The secret to a tidy desk? Don't get rid of anything, just put it in really really nice looking containers."})]}),e.jsxs(o,{as:"section","aria-labelledby":"filter-heading",className:"grid items-center border-t border-b border-gray-200",children:[e.jsx("h2",{id:"filter-heading",className:"sr-only",children:"Filters"}),e.jsx("div",{className:"relative col-start-1 row-start-1 py-4",children:e.jsxs("div",{className:"mx-auto flex max-w-7xl divide-x divide-gray-200 px-4 text-sm sm:px-6 lg:px-8",children:[e.jsx("div",{className:"pr-6",children:e.jsxs(n,{className:"group flex items-center font-medium text-gray-700",children:[e.jsx($,{"aria-hidden":"true",className:"mr-2 size-5 flex-none text-gray-400 group-hover:text-gray-500"}),"2 Filters"]})}),e.jsx("div",{className:"pl-6",children:e.jsx("button",{type:"button",className:"text-gray-500",children:"Clear all"})})]})}),e.jsx(d,{className:"border-t border-gray-200 py-10",children:e.jsxs("div",{className:"mx-auto grid max-w-7xl grid-cols-2 gap-x-4 px-4 text-sm sm:px-6 md:gap-x-6 lg:px-8",children:[e.jsxs("div",{className:"grid auto-rows-min grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-6",children:[e.jsxs("fieldset",{children:[e.jsx("legend",{className:"block font-medium",children:"Price"}),e.jsx("div",{className:"space-y-6 pt-6 sm:space-y-4 sm:pt-4",children:m.price.map((s,t)=>e.jsxs("div",{className:"flex gap-3",children:[e.jsx("div",{className:"flex h-5 shrink-0 items-center",children:e.jsxs("div",{className:"group grid size-4 grid-cols-1",children:[e.jsx("input",{defaultValue:s.value,defaultChecked:s.checked,id:`price-${t}`,name:"price[]",type:"checkbox",className:"col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"}),e.jsxs("svg",{fill:"none",viewBox:"0 0 14 14",className:"pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25",children:[e.jsx("path",{d:"M3 8L6 11L11 3.5",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"opacity-0 group-has-checked:opacity-100"}),e.jsx("path",{d:"M3 7H11",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"opacity-0 group-has-indeterminate:opacity-100"})]})]})}),e.jsx("label",{htmlFor:`price-${t}`,className:"text-base text-gray-600 sm:text-sm",children:s.label})]},s.value))})]}),e.jsxs("fieldset",{children:[e.jsx("legend",{className:"block font-medium",children:"Color"}),e.jsx("div",{className:"space-y-6 pt-6 sm:space-y-4 sm:pt-4",children:m.color.map((s,t)=>e.jsxs("div",{className:"flex gap-3",children:[e.jsx("div",{className:"flex h-5 shrink-0 items-center",children:e.jsxs("div",{className:"group grid size-4 grid-cols-1",children:[e.jsx("input",{defaultValue:s.value,defaultChecked:s.checked,id:`color-${t}`,name:"color[]",type:"checkbox",className:"col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"}),e.jsxs("svg",{fill:"none",viewBox:"0 0 14 14",className:"pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25",children:[e.jsx("path",{d:"M3 8L6 11L11 3.5",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"opacity-0 group-has-checked:opacity-100"}),e.jsx("path",{d:"M3 7H11",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"opacity-0 group-has-indeterminate:opacity-100"})]})]})}),e.jsx("label",{htmlFor:`color-${t}`,className:"text-base text-gray-600 sm:text-sm",children:s.label})]},s.value))})]})]}),e.jsxs("div",{className:"grid auto-rows-min grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-6",children:[e.jsxs("fieldset",{children:[e.jsx("legend",{className:"block font-medium",children:"Size"}),e.jsx("div",{className:"space-y-6 pt-6 sm:space-y-4 sm:pt-4",children:m.size.map((s,t)=>e.jsxs("div",{className:"flex gap-3",children:[e.jsx("div",{className:"flex h-5 shrink-0 items-center",children:e.jsxs("div",{className:"group grid size-4 grid-cols-1",children:[e.jsx("input",{defaultValue:s.value,defaultChecked:s.checked,id:`size-${t}`,name:"size[]",type:"checkbox",className:"col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"}),e.jsxs("svg",{fill:"none",viewBox:"0 0 14 14",className:"pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25",children:[e.jsx("path",{d:"M3 8L6 11L11 3.5",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"opacity-0 group-has-checked:opacity-100"}),e.jsx("path",{d:"M3 7H11",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"opacity-0 group-has-indeterminate:opacity-100"})]})]})}),e.jsx("label",{htmlFor:`size-${t}`,className:"text-base text-gray-600 sm:text-sm",children:s.label})]},s.value))})]}),e.jsxs("fieldset",{children:[e.jsx("legend",{className:"block font-medium",children:"Category"}),e.jsx("div",{className:"space-y-6 pt-6 sm:space-y-4 sm:pt-4",children:m.category.map((s,t)=>e.jsxs("div",{className:"flex gap-3",children:[e.jsx("div",{className:"flex h-5 shrink-0 items-center",children:e.jsxs("div",{className:"group grid size-4 grid-cols-1",children:[e.jsx("input",{defaultValue:s.value,defaultChecked:s.checked,id:`category-${t}`,name:"category[]",type:"checkbox",className:"col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"}),e.jsxs("svg",{fill:"none",viewBox:"0 0 14 14",className:"pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25",children:[e.jsx("path",{d:"M3 8L6 11L11 3.5",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"opacity-0 group-has-checked:opacity-100"}),e.jsx("path",{d:"M3 7H11",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"opacity-0 group-has-indeterminate:opacity-100"})]})]})}),e.jsx("label",{htmlFor:`category-${t}`,className:"text-base text-gray-600 sm:text-sm",children:s.label})]},s.value))})]})]})]})}),e.jsx("div",{className:"col-start-1 row-start-1 py-4",children:e.jsx("div",{className:"mx-auto flex max-w-7xl justify-end px-4 sm:px-6 lg:px-8",children:e.jsxs(b,{as:"div",className:"relative inline-block",children:[e.jsx("div",{className:"flex",children:e.jsxs(f,{className:"group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900",children:["Sort",e.jsx(r,{"aria-hidden":"true",className:"-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"})]})}),e.jsx(v,{transition:!0,className:"absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white ring-1 shadow-2xl ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in",children:e.jsx("div",{className:"py-1",children:Y.map(s=>e.jsx(y,{children:e.jsx("a",{href:s.href,className:J(s.current?"font-medium text-gray-900":"text-gray-500","block px-4 py-2 text-sm data-focus:bg-gray-100 data-focus:outline-hidden"),children:s.name})},s.name))})})]})})})]})]})}const Q=`import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon, FunnelIcon } from '@heroicons/react/20/solid'

const filters = {
  price: [
    { value: '0', label: '$0 - $25', checked: false },
    { value: '25', label: '$25 - $50', checked: false },
    { value: '50', label: '$50 - $75', checked: false },
    { value: '75', label: '$75+', checked: false },
  ],
  color: [
    { value: 'white', label: 'White', checked: false },
    { value: 'beige', label: 'Beige', checked: false },
    { value: 'blue', label: 'Blue', checked: true },
    { value: 'brown', label: 'Brown', checked: false },
    { value: 'green', label: 'Green', checked: false },
    { value: 'purple', label: 'Purple', checked: false },
  ],
  size: [
    { value: 'xs', label: 'XS', checked: false },
    { value: 's', label: 'S', checked: true },
    { value: 'm', label: 'M', checked: false },
    { value: 'l', label: 'L', checked: false },
    { value: 'xl', label: 'XL', checked: false },
    { value: '2xl', label: '2XL', checked: false },
  ],
  category: [
    { value: 'all-new-arrivals', label: 'All New Arrivals', checked: false },
    { value: 'tees', label: 'Tees', checked: false },
    { value: 'objects', label: 'Objects', checked: false },
    { value: 'sweatshirts', label: 'Sweatshirts', checked: false },
    { value: 'pants-and-shorts', label: 'Pants & Shorts', checked: false },
  ],
}
const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="bg-white">
      <div className="px-4 py-16 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">Workspace</h1>
        <p className="mx-auto mt-4 max-w-xl text-base text-gray-500">
          The secret to a tidy desk? Don't get rid of anything, just put it in really really nice looking containers.
        </p>
      </div>

      {/* Filters */}
      <Disclosure
        as="section"
        aria-labelledby="filter-heading"
        className="grid items-center border-t border-b border-gray-200"
      >
        <h2 id="filter-heading" className="sr-only">
          Filters
        </h2>
        <div className="relative col-start-1 row-start-1 py-4">
          <div className="mx-auto flex max-w-7xl divide-x divide-gray-200 px-4 text-sm sm:px-6 lg:px-8">
            <div className="pr-6">
              <DisclosureButton className="group flex items-center font-medium text-gray-700">
                <FunnelIcon
                  aria-hidden="true"
                  className="mr-2 size-5 flex-none text-gray-400 group-hover:text-gray-500"
                />
                2 Filters
              </DisclosureButton>
            </div>
            <div className="pl-6">
              <button type="button" className="text-gray-500">
                Clear all
              </button>
            </div>
          </div>
        </div>
        <DisclosurePanel className="border-t border-gray-200 py-10">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-4 px-4 text-sm sm:px-6 md:gap-x-6 lg:px-8">
            <div className="grid auto-rows-min grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-6">
              <fieldset>
                <legend className="block font-medium">Price</legend>
                <div className="space-y-6 pt-6 sm:space-y-4 sm:pt-4">
                  {filters.price.map((option, optionIdx) => (
                    <div key={option.value} className="flex gap-3">
                      <div className="flex h-5 shrink-0 items-center">
                        <div className="group grid size-4 grid-cols-1">
                          <input
                            defaultValue={option.value}
                            defaultChecked={option.checked}
                            id={\`price-\${optionIdx}\`}
                            name="price[]"
                            type="checkbox"
                            className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                          />
                          <svg
                            fill="none"
                            viewBox="0 0 14 14"
                            className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                          >
                            <path
                              d="M3 8L6 11L11 3.5"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="opacity-0 group-has-checked:opacity-100"
                            />
                            <path
                              d="M3 7H11"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="opacity-0 group-has-indeterminate:opacity-100"
                            />
                          </svg>
                        </div>
                      </div>
                      <label htmlFor={\`price-\${optionIdx}\`} className="text-base text-gray-600 sm:text-sm">
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </fieldset>
              <fieldset>
                <legend className="block font-medium">Color</legend>
                <div className="space-y-6 pt-6 sm:space-y-4 sm:pt-4">
                  {filters.color.map((option, optionIdx) => (
                    <div key={option.value} className="flex gap-3">
                      <div className="flex h-5 shrink-0 items-center">
                        <div className="group grid size-4 grid-cols-1">
                          <input
                            defaultValue={option.value}
                            defaultChecked={option.checked}
                            id={\`color-\${optionIdx}\`}
                            name="color[]"
                            type="checkbox"
                            className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                          />
                          <svg
                            fill="none"
                            viewBox="0 0 14 14"
                            className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                          >
                            <path
                              d="M3 8L6 11L11 3.5"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="opacity-0 group-has-checked:opacity-100"
                            />
                            <path
                              d="M3 7H11"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="opacity-0 group-has-indeterminate:opacity-100"
                            />
                          </svg>
                        </div>
                      </div>
                      <label htmlFor={\`color-\${optionIdx}\`} className="text-base text-gray-600 sm:text-sm">
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </fieldset>
            </div>
            <div className="grid auto-rows-min grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-6">
              <fieldset>
                <legend className="block font-medium">Size</legend>
                <div className="space-y-6 pt-6 sm:space-y-4 sm:pt-4">
                  {filters.size.map((option, optionIdx) => (
                    <div key={option.value} className="flex gap-3">
                      <div className="flex h-5 shrink-0 items-center">
                        <div className="group grid size-4 grid-cols-1">
                          <input
                            defaultValue={option.value}
                            defaultChecked={option.checked}
                            id={\`size-\${optionIdx}\`}
                            name="size[]"
                            type="checkbox"
                            className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                          />
                          <svg
                            fill="none"
                            viewBox="0 0 14 14"
                            className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                          >
                            <path
                              d="M3 8L6 11L11 3.5"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="opacity-0 group-has-checked:opacity-100"
                            />
                            <path
                              d="M3 7H11"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="opacity-0 group-has-indeterminate:opacity-100"
                            />
                          </svg>
                        </div>
                      </div>
                      <label htmlFor={\`size-\${optionIdx}\`} className="text-base text-gray-600 sm:text-sm">
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </fieldset>
              <fieldset>
                <legend className="block font-medium">Category</legend>
                <div className="space-y-6 pt-6 sm:space-y-4 sm:pt-4">
                  {filters.category.map((option, optionIdx) => (
                    <div key={option.value} className="flex gap-3">
                      <div className="flex h-5 shrink-0 items-center">
                        <div className="group grid size-4 grid-cols-1">
                          <input
                            defaultValue={option.value}
                            defaultChecked={option.checked}
                            id={\`category-\${optionIdx}\`}
                            name="category[]"
                            type="checkbox"
                            className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                          />
                          <svg
                            fill="none"
                            viewBox="0 0 14 14"
                            className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                          >
                            <path
                              d="M3 8L6 11L11 3.5"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="opacity-0 group-has-checked:opacity-100"
                            />
                            <path
                              d="M3 7H11"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="opacity-0 group-has-indeterminate:opacity-100"
                            />
                          </svg>
                        </div>
                      </div>
                      <label htmlFor={\`category-\${optionIdx}\`} className="text-base text-gray-600 sm:text-sm">
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </fieldset>
            </div>
          </div>
        </DisclosurePanel>
        <div className="col-start-1 row-start-1 py-4">
          <div className="mx-auto flex max-w-7xl justify-end px-4 sm:px-6 lg:px-8">
            <Menu as="div" className="relative inline-block">
              <div className="flex">
                <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                  Sort
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
                  />
                </MenuButton>
              </div>

              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white ring-1 shadow-2xl ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <div className="py-1">
                  {sortOptions.map((option) => (
                    <MenuItem key={option.name}>
                      <a
                        href={option.href}
                        className={classNames(
                          option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                          'block px-4 py-2 text-sm data-focus:bg-gray-100 data-focus:outline-hidden',
                        )}
                      >
                        {option.name}
                      </a>
                    </MenuItem>
                  ))}
                </div>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </Disclosure>
    </div>
  )
}
`,M=[{id:"color",name:"Color",options:[{value:"white",label:"White"},{value:"beige",label:"Beige"},{value:"blue",label:"Blue"},{value:"brown",label:"Brown"},{value:"green",label:"Green"},{value:"purple",label:"Purple"}]},{id:"category",name:"Category",options:[{value:"new-arrivals",label:"All New Arrivals"},{value:"tees",label:"Tees"},{value:"crewnecks",label:"Crewnecks"},{value:"sweatshirts",label:"Sweatshirts"},{value:"pants-shorts",label:"Pants & Shorts"}]},{id:"sizes",name:"Sizes",options:[{value:"xs",label:"XS"},{value:"s",label:"S"},{value:"m",label:"M"},{value:"l",label:"L"},{value:"xl",label:"XL"},{value:"2xl",label:"2XL"}]}];function U(){const[s,t]=u.useState(!1);return e.jsx("div",{className:"bg-white",children:e.jsxs("div",{children:[e.jsxs(p,{open:s,onClose:t,className:"relative z-40 lg:hidden",children:[e.jsx(h,{transition:!0,className:"fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"}),e.jsx("div",{className:"fixed inset-0 z-40 flex",children:e.jsxs(g,{transition:!0,className:"relative ml-auto flex size-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl transition duration-300 ease-in-out data-closed:translate-x-full",children:[e.jsxs("div",{className:"flex items-center justify-between px-4",children:[e.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Filters"}),e.jsxs("button",{type:"button",onClick:()=>t(!1),className:"-mr-2 flex size-10 items-center justify-center p-2 text-gray-400 hover:text-gray-500",children:[e.jsx("span",{className:"sr-only",children:"Close menu"}),e.jsx(x,{"aria-hidden":"true",className:"size-6"})]})]}),e.jsx("form",{className:"mt-4",children:M.map(a=>e.jsx(o,{as:"div",className:"border-t border-gray-200 pt-4 pb-4",children:e.jsxs("fieldset",{children:[e.jsx("legend",{className:"w-full px-2",children:e.jsxs(n,{className:"group flex w-full items-center justify-between p-2 text-gray-400 hover:text-gray-500",children:[e.jsx("span",{className:"text-sm font-medium text-gray-900",children:a.name}),e.jsx("span",{className:"ml-6 flex h-7 items-center",children:e.jsx(r,{"aria-hidden":"true",className:"size-5 rotate-0 transform group-data-open:-rotate-180"})})]})}),e.jsx(d,{className:"px-4 pt-4 pb-2",children:e.jsx("div",{className:"space-y-6",children:a.options.map((i,l)=>e.jsxs("div",{className:"flex gap-3",children:[e.jsx("div",{className:"flex h-5 shrink-0 items-center",children:e.jsxs("div",{className:"group grid size-4 grid-cols-1",children:[e.jsx("input",{defaultValue:i.value,id:`${a.id}-${l}-mobile`,name:`${a.id}[]`,type:"checkbox",className:"col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"}),e.jsxs("svg",{fill:"none",viewBox:"0 0 14 14",className:"pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25",children:[e.jsx("path",{d:"M3 8L6 11L11 3.5",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"opacity-0 group-has-checked:opacity-100"}),e.jsx("path",{d:"M3 7H11",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"opacity-0 group-has-indeterminate:opacity-100"})]})]})}),e.jsx("label",{htmlFor:`${a.id}-${l}-mobile`,className:"text-sm text-gray-500",children:i.label})]},i.value))})})]})},a.name))})]})})]}),e.jsxs("main",{className:"mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8",children:[e.jsxs("div",{className:"border-b border-gray-200 pb-10",children:[e.jsx("h1",{className:"text-4xl font-bold tracking-tight text-gray-900",children:"New Arrivals"}),e.jsx("p",{className:"mt-4 text-base text-gray-500",children:"Checkout out the latest release of Basic Tees, new and improved with four openings!"})]}),e.jsxs("div",{className:"pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4",children:[e.jsxs("aside",{children:[e.jsx("h2",{className:"sr-only",children:"Filters"}),e.jsxs("button",{type:"button",onClick:()=>t(!0),className:"inline-flex items-center lg:hidden",children:[e.jsx("span",{className:"text-sm font-medium text-gray-700",children:"Filters"}),e.jsx(N,{"aria-hidden":"true",className:"ml-1 size-5 shrink-0 text-gray-400"})]}),e.jsx("div",{className:"hidden lg:block",children:e.jsx("form",{className:"divide-y divide-gray-200",children:M.map(a=>e.jsx("div",{className:"py-10 first:pt-0 last:pb-0",children:e.jsxs("fieldset",{children:[e.jsx("legend",{className:"block text-sm font-medium text-gray-900",children:a.name}),e.jsx("div",{className:"space-y-3 pt-6",children:a.options.map((i,l)=>e.jsxs("div",{className:"flex gap-3",children:[e.jsx("div",{className:"flex h-5 shrink-0 items-center",children:e.jsxs("div",{className:"group grid size-4 grid-cols-1",children:[e.jsx("input",{defaultValue:i.value,id:`${a.id}-${l}`,name:`${a.id}[]`,type:"checkbox",className:"col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"}),e.jsxs("svg",{fill:"none",viewBox:"0 0 14 14",className:"pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25",children:[e.jsx("path",{d:"M3 8L6 11L11 3.5",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"opacity-0 group-has-checked:opacity-100"}),e.jsx("path",{d:"M3 7H11",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"opacity-0 group-has-indeterminate:opacity-100"})]})]})}),e.jsx("label",{htmlFor:`${a.id}-${l}`,className:"text-sm text-gray-600",children:i.label})]},i.value))})]})},a.name))})})]}),e.jsx("div",{className:"mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3"})]})]})]})})}const Z=`'use client'

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, PlusIcon } from '@heroicons/react/20/solid'

const filters = [
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'white', label: 'White' },
      { value: 'beige', label: 'Beige' },
      { value: 'blue', label: 'Blue' },
      { value: 'brown', label: 'Brown' },
      { value: 'green', label: 'Green' },
      { value: 'purple', label: 'Purple' },
    ],
  },
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'new-arrivals', label: 'All New Arrivals' },
      { value: 'tees', label: 'Tees' },
      { value: 'crewnecks', label: 'Crewnecks' },
      { value: 'sweatshirts', label: 'Sweatshirts' },
      { value: 'pants-shorts', label: 'Pants & Shorts' },
    ],
  },
  {
    id: 'sizes',
    name: 'Sizes',
    options: [
      { value: 'xs', label: 'XS' },
      { value: 's', label: 'S' },
      { value: 'm', label: 'M' },
      { value: 'l', label: 'L' },
      { value: 'xl', label: 'XL' },
      { value: '2xl', label: '2XL' },
    ],
  },
]

export default function Example() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Dialog open={mobileFiltersOpen} onClose={setMobileFiltersOpen} className="relative z-40 lg:hidden">
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
          />

          <div className="fixed inset-0 z-40 flex">
            <DialogPanel
              transition
              className="relative ml-auto flex size-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl transition duration-300 ease-in-out data-closed:translate-x-full"
            >
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="-mr-2 flex size-10 items-center justify-center p-2 text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>

              {/* Filters */}
              <form className="mt-4">
                {filters.map((section) => (
                  <Disclosure key={section.name} as="div" className="border-t border-gray-200 pt-4 pb-4">
                    <fieldset>
                      <legend className="w-full px-2">
                        <DisclosureButton className="group flex w-full items-center justify-between p-2 text-gray-400 hover:text-gray-500">
                          <span className="text-sm font-medium text-gray-900">{section.name}</span>
                          <span className="ml-6 flex h-7 items-center">
                            <ChevronDownIcon
                              aria-hidden="true"
                              className="size-5 rotate-0 transform group-data-open:-rotate-180"
                            />
                          </span>
                        </DisclosureButton>
                      </legend>
                      <DisclosurePanel className="px-4 pt-4 pb-2">
                        <div className="space-y-6">
                          {section.options.map((option, optionIdx) => (
                            <div key={option.value} className="flex gap-3">
                              <div className="flex h-5 shrink-0 items-center">
                                <div className="group grid size-4 grid-cols-1">
                                  <input
                                    defaultValue={option.value}
                                    id={\`\${section.id}-\${optionIdx}-mobile\`}
                                    name={\`\${section.id}[]\`}
                                    type="checkbox"
                                    className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                  />
                                  <svg
                                    fill="none"
                                    viewBox="0 0 14 14"
                                    className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                  >
                                    <path
                                      d="M3 8L6 11L11 3.5"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="opacity-0 group-has-checked:opacity-100"
                                    />
                                    <path
                                      d="M3 7H11"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="opacity-0 group-has-indeterminate:opacity-100"
                                    />
                                  </svg>
                                </div>
                              </div>
                              <label htmlFor={\`\${section.id}-\${optionIdx}-mobile\`} className="text-sm text-gray-500">
                                {option.label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </DisclosurePanel>
                    </fieldset>
                  </Disclosure>
                ))}
              </form>
            </DialogPanel>
          </div>
        </Dialog>

        <main className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="border-b border-gray-200 pb-10">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">New Arrivals</h1>
            <p className="mt-4 text-base text-gray-500">
              Checkout out the latest release of Basic Tees, new and improved with four openings!
            </p>
          </div>

          <div className="pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
            <aside>
              <h2 className="sr-only">Filters</h2>

              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="inline-flex items-center lg:hidden"
              >
                <span className="text-sm font-medium text-gray-700">Filters</span>
                <PlusIcon aria-hidden="true" className="ml-1 size-5 shrink-0 text-gray-400" />
              </button>

              <div className="hidden lg:block">
                <form className="divide-y divide-gray-200">
                  {filters.map((section) => (
                    <div key={section.name} className="py-10 first:pt-0 last:pb-0">
                      <fieldset>
                        <legend className="block text-sm font-medium text-gray-900">{section.name}</legend>
                        <div className="space-y-3 pt-6">
                          {section.options.map((option, optionIdx) => (
                            <div key={option.value} className="flex gap-3">
                              <div className="flex h-5 shrink-0 items-center">
                                <div className="group grid size-4 grid-cols-1">
                                  <input
                                    defaultValue={option.value}
                                    id={\`\${section.id}-\${optionIdx}\`}
                                    name={\`\${section.id}[]\`}
                                    type="checkbox"
                                    className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                  />
                                  <svg
                                    fill="none"
                                    viewBox="0 0 14 14"
                                    className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                  >
                                    <path
                                      d="M3 8L6 11L11 3.5"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="opacity-0 group-has-checked:opacity-100"
                                    />
                                    <path
                                      d="M3 7H11"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="opacity-0 group-has-indeterminate:opacity-100"
                                    />
                                  </svg>
                                </div>
                              </div>
                              <label htmlFor={\`\${section.id}-\${optionIdx}\`} className="text-sm text-gray-600">
                                {option.label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </fieldset>
                    </div>
                  ))}
                </form>
              </div>
            </aside>

            {/* Product grid */}
            <div className="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3">{/* Your content */}</div>
          </div>
        </main>
      </div>
    </div>
  )
}
`,xe=()=>{const s=[{id:"01",name:"With inline actions and expandable sidebar filters",component:e.jsx(O,{}),raw:H},{id:"02",name:"With centered text and dropdown product filters",component:e.jsx(V,{}),raw:X},{id:"03",name:"With dropdown product filters",component:e.jsx(G,{}),raw:q},{id:"04",name:"With expandable product filter panel",component:e.jsx(K,{}),raw:Q},{id:"05",name:"Sidebar filters",component:e.jsx(U,{}),raw:Z}];return e.jsx("div",{className:"space-y-10 pb-20",children:s.map(t=>e.jsxs("section",{children:[e.jsxs("h2",{className:"mb-4 text-lg font-bold text-gray-800",children:[t.id,". ",t.name]}),e.jsx(P,{name:t.name,code:t.raw,children:t.component})]},t.id))})};export{xe as default};
