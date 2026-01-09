import{r as o,j as e,h as m,L as d,z as c,az as g,aB as u}from"./index-CvCVbuS9.js";import{P as h}from"./PreviewWrapper-TzFvRoPZ.js";import{F as p}from"./XMarkIcon-DRrKznFm.js";import{F as i}from"./ChevronDownIcon-DVV5oLHi.js";import{F as f}from"./XMarkIcon-aALukfH1.js";import{F as r}from"./CheckIcon-BfHG0Qrp.js";import{F as l}from"./ClockIcon-ChOLlvBW.js";import{F as n}from"./QuestionMarkCircleIcon-BrsUz3Ow.js";import{F as y}from"./MagnifyingGlassIcon-C0bqFgul.js";import{v,D as N,L as b}from"./popover-CbBi4FOn.js";import"./floating-CjydGm1Z.js";import"./use-resolve-button-type-J0J8N5g4.js";import"./bugs-qQ_SbDk4.js";const j=[{id:1,name:"Zip Tote Basket",href:"#",color:"White and black",price:"$140.00",imageSrc:"https://tailwindui.com/plus-assets/img/ecommerce-images/shopping-cart-page-04-product-03.jpg",imageAlt:"Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls."},{id:2,name:"Throwback Hip Bag",href:"#",color:"Salmon",price:"$90.00",imageSrc:"https://tailwindui.com/plus-assets/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",imageAlt:"Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."}];function w(){const[s,t]=o.useState(!0);return e.jsxs(m,{open:s,onClose:t,className:"relative z-10",children:[e.jsx(d,{transition:!0,className:"hidden data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:fixed sm:inset-0 sm:block sm:bg-gray-500/75 sm:transition-opacity"}),e.jsx("div",{className:"fixed inset-0 z-10 w-screen overflow-y-auto",children:e.jsx("div",{className:"flex min-h-full items-stretch justify-center text-center sm:items-center sm:px-6 lg:px-8",children:e.jsx(c,{transition:!0,className:"flex w-full max-w-3xl transform text-left text-base transition data-closed:scale-105 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8",children:e.jsxs("form",{className:"relative flex w-full flex-col overflow-hidden bg-white pt-6 pb-8 sm:rounded-lg sm:pb-6 lg:py-8",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 sm:px-6 lg:px-8",children:[e.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Shopping Cart"}),e.jsxs("button",{type:"button",onClick:()=>t(!1),className:"text-gray-400 hover:text-gray-500",children:[e.jsx("span",{className:"sr-only",children:"Close"}),e.jsx(p,{"aria-hidden":"true",className:"size-6"})]})]}),e.jsxs("section",{"aria-labelledby":"cart-heading",children:[e.jsx("h2",{id:"cart-heading",className:"sr-only",children:"Items in your shopping cart"}),e.jsx("ul",{role:"list",className:"divide-y divide-gray-200 px-4 sm:px-6 lg:px-8",children:j.map((a,x)=>e.jsxs("li",{className:"flex py-8 text-sm sm:items-center",children:[e.jsx("img",{alt:a.imageAlt,src:a.imageSrc,className:"size-24 flex-none rounded-lg border border-gray-200 sm:size-32"}),e.jsxs("div",{className:"ml-4 grid flex-auto grid-cols-1 grid-rows-1 items-start gap-x-5 gap-y-3 sm:ml-6 sm:flex sm:items-center sm:gap-0",children:[e.jsxs("div",{className:"row-end-1 flex-auto sm:pr-6",children:[e.jsx("h3",{className:"font-medium text-gray-900",children:e.jsx("a",{href:a.href,children:a.name})}),e.jsx("p",{className:"mt-1 text-gray-500",children:a.color})]}),e.jsx("p",{className:"row-span-2 row-end-2 font-medium text-gray-900 sm:order-1 sm:ml-6 sm:w-1/3 sm:flex-none sm:text-right",children:a.price}),e.jsxs("div",{className:"flex items-center sm:block sm:flex-none sm:text-center",children:[e.jsxs("div",{className:"inline-grid w-full max-w-16 grid-cols-1",children:[e.jsxs("select",{name:`quantity-${x}`,"aria-label":`Quantity, ${a.name}`,className:"col-start-1 row-start-1 appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6",children:[e.jsx("option",{value:1,children:"1"}),e.jsx("option",{value:2,children:"2"}),e.jsx("option",{value:3,children:"3"}),e.jsx("option",{value:4,children:"4"}),e.jsx("option",{value:5,children:"5"}),e.jsx("option",{value:6,children:"6"}),e.jsx("option",{value:7,children:"7"}),e.jsx("option",{value:8,children:"8"})]}),e.jsx(i,{"aria-hidden":"true",className:"pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"})]}),e.jsx("button",{type:"button",className:"ml-4 font-medium text-indigo-600 hover:text-indigo-500 sm:mt-2 sm:ml-0",children:e.jsx("span",{children:"Remove"})})]})]})]},a.id))})]}),e.jsx("section",{"aria-labelledby":"summary-heading",className:"mt-auto sm:px-6 lg:px-8",children:e.jsxs("div",{className:"bg-gray-50 p-6 sm:rounded-lg sm:p-8",children:[e.jsx("h2",{id:"summary-heading",className:"sr-only",children:"Order summary"}),e.jsx("div",{className:"flow-root",children:e.jsxs("dl",{className:"-my-4 divide-y divide-gray-200 text-sm",children:[e.jsxs("div",{className:"flex items-center justify-between py-4",children:[e.jsx("dt",{className:"text-gray-600",children:"Subtotal"}),e.jsx("dd",{className:"font-medium text-gray-900",children:"$262.00"})]}),e.jsxs("div",{className:"flex items-center justify-between py-4",children:[e.jsx("dt",{className:"text-gray-600",children:"Shipping"}),e.jsx("dd",{className:"font-medium text-gray-900",children:"$5.00"})]}),e.jsxs("div",{className:"flex items-center justify-between py-4",children:[e.jsx("dt",{className:"text-gray-600",children:"Tax"}),e.jsx("dd",{className:"font-medium text-gray-900",children:"$53.40"})]}),e.jsxs("div",{className:"flex items-center justify-between py-4",children:[e.jsx("dt",{className:"text-base font-medium text-gray-900",children:"Order total"}),e.jsx("dd",{className:"text-base font-medium text-gray-900",children:"$320.40"})]})]})})]})}),e.jsx("div",{className:"mt-8 flex justify-end px-4 sm:px-6 lg:px-8",children:e.jsx("button",{type:"submit",className:"rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-xs hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 focus:outline-hidden",children:"Continue to Payment"})})]})})})})]})}const k=`'use client'

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/16/solid'

const products = [
  {
    id: 1,
    name: 'Zip Tote Basket',
    href: '#',
    color: 'White and black',
    price: '$140.00',
    imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/shopping-cart-page-04-product-03.jpg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
  },
  {
    id: 2,
    name: 'Throwback Hip Bag',
    href: '#',
    color: 'Salmon',
    price: '$90.00',
    imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
    imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
  },
  // More products...
]

export default function Example() {
  const [open, setOpen] = useState(true)

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="hidden data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:fixed sm:inset-0 sm:block sm:bg-gray-500/75 sm:transition-opacity"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-stretch justify-center text-center sm:items-center sm:px-6 lg:px-8">
          <DialogPanel
            transition
            className="flex w-full max-w-3xl transform text-left text-base transition data-closed:scale-105 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8"
          >
            <form className="relative flex w-full flex-col overflow-hidden bg-white pt-6 pb-8 sm:rounded-lg sm:pb-6 lg:py-8">
              <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8">
                <h2 className="text-lg font-medium text-gray-900">Shopping Cart</h2>
                <button type="button" onClick={() => setOpen(false)} className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Close</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>

              <section aria-labelledby="cart-heading">
                <h2 id="cart-heading" className="sr-only">
                  Items in your shopping cart
                </h2>

                <ul role="list" className="divide-y divide-gray-200 px-4 sm:px-6 lg:px-8">
                  {products.map((product, productIdx) => (
                    <li key={product.id} className="flex py-8 text-sm sm:items-center">
                      <img
                        alt={product.imageAlt}
                        src={product.imageSrc}
                        className="size-24 flex-none rounded-lg border border-gray-200 sm:size-32"
                      />
                      <div className="ml-4 grid flex-auto grid-cols-1 grid-rows-1 items-start gap-x-5 gap-y-3 sm:ml-6 sm:flex sm:items-center sm:gap-0">
                        <div className="row-end-1 flex-auto sm:pr-6">
                          <h3 className="font-medium text-gray-900">
                            <a href={product.href}>{product.name}</a>
                          </h3>
                          <p className="mt-1 text-gray-500">{product.color}</p>
                        </div>
                        <p className="row-span-2 row-end-2 font-medium text-gray-900 sm:order-1 sm:ml-6 sm:w-1/3 sm:flex-none sm:text-right">
                          {product.price}
                        </p>
                        <div className="flex items-center sm:block sm:flex-none sm:text-center">
                          <div className="inline-grid w-full max-w-16 grid-cols-1">
                            <select
                              name={\`quantity-\${productIdx}\`}
                              aria-label={\`Quantity, \${product.name}\`}
                              className="col-start-1 row-start-1 appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            >
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                              <option value={4}>4</option>
                              <option value={5}>5</option>
                              <option value={6}>6</option>
                              <option value={7}>7</option>
                              <option value={8}>8</option>
                            </select>
                            <ChevronDownIcon
                              aria-hidden="true"
                              className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                            />
                          </div>

                          <button
                            type="button"
                            className="ml-4 font-medium text-indigo-600 hover:text-indigo-500 sm:mt-2 sm:ml-0"
                          >
                            <span>Remove</span>
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>

              <section aria-labelledby="summary-heading" className="mt-auto sm:px-6 lg:px-8">
                <div className="bg-gray-50 p-6 sm:rounded-lg sm:p-8">
                  <h2 id="summary-heading" className="sr-only">
                    Order summary
                  </h2>

                  <div className="flow-root">
                    <dl className="-my-4 divide-y divide-gray-200 text-sm">
                      <div className="flex items-center justify-between py-4">
                        <dt className="text-gray-600">Subtotal</dt>
                        <dd className="font-medium text-gray-900">$262.00</dd>
                      </div>
                      <div className="flex items-center justify-between py-4">
                        <dt className="text-gray-600">Shipping</dt>
                        <dd className="font-medium text-gray-900">$5.00</dd>
                      </div>
                      <div className="flex items-center justify-between py-4">
                        <dt className="text-gray-600">Tax</dt>
                        <dd className="font-medium text-gray-900">$53.40</dd>
                      </div>
                      <div className="flex items-center justify-between py-4">
                        <dt className="text-base font-medium text-gray-900">Order total</dt>
                        <dd className="text-base font-medium text-gray-900">$320.40</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </section>

              <div className="mt-8 flex justify-end px-4 sm:px-6 lg:px-8">
                <button
                  type="submit"
                  className="rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-xs hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 focus:outline-hidden"
                >
                  Continue to Payment
                </button>
              </div>
            </form>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
`,S=[{id:1,name:"Basic Tee",href:"#",price:"$32.00",color:"Sienna",inStock:!0,size:"Large",imageSrc:"https://tailwindui.com/plus-assets/img/ecommerce-images/shopping-cart-page-01-product-01.jpg",imageAlt:"Front of men's Basic Tee in sienna."},{id:2,name:"Basic Tee",href:"#",price:"$32.00",color:"Black",inStock:!1,leadTime:"3–4 weeks",size:"Large",imageSrc:"https://tailwindui.com/plus-assets/img/ecommerce-images/shopping-cart-page-01-product-02.jpg",imageAlt:"Front of men's Basic Tee in black."},{id:3,name:"Nomad Tumbler",href:"#",price:"$35.00",color:"White",inStock:!0,imageSrc:"https://tailwindui.com/plus-assets/img/ecommerce-images/shopping-cart-page-01-product-03.jpg",imageAlt:"Insulated bottle with white base and black snap lid."}];function z(){return e.jsx("div",{className:"bg-white",children:e.jsxs("div",{className:"mx-auto max-w-2xl px-4 pt-16 pb-24 sm:px-6 lg:max-w-7xl lg:px-8",children:[e.jsx("h1",{className:"text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl",children:"Shopping Cart"}),e.jsxs("form",{className:"mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16",children:[e.jsxs("section",{"aria-labelledby":"cart-heading",className:"lg:col-span-7",children:[e.jsx("h2",{id:"cart-heading",className:"sr-only",children:"Items in your shopping cart"}),e.jsx("ul",{role:"list",className:"divide-y divide-gray-200 border-t border-b border-gray-200",children:S.map((s,t)=>e.jsxs("li",{className:"flex py-6 sm:py-10",children:[e.jsx("div",{className:"shrink-0",children:e.jsx("img",{alt:s.imageAlt,src:s.imageSrc,className:"size-24 rounded-md object-cover sm:size-48"})}),e.jsxs("div",{className:"ml-4 flex flex-1 flex-col justify-between sm:ml-6",children:[e.jsxs("div",{className:"relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0",children:[e.jsxs("div",{children:[e.jsx("div",{className:"flex justify-between",children:e.jsx("h3",{className:"text-sm",children:e.jsx("a",{href:s.href,className:"font-medium text-gray-700 hover:text-gray-800",children:s.name})})}),e.jsxs("div",{className:"mt-1 flex text-sm",children:[e.jsx("p",{className:"text-gray-500",children:s.color}),s.size?e.jsx("p",{className:"ml-4 border-l border-gray-200 pl-4 text-gray-500",children:s.size}):null]}),e.jsx("p",{className:"mt-1 text-sm font-medium text-gray-900",children:s.price})]}),e.jsxs("div",{className:"mt-4 sm:mt-0 sm:pr-9",children:[e.jsxs("div",{className:"grid w-full max-w-16 grid-cols-1",children:[e.jsxs("select",{name:`quantity-${t}`,"aria-label":`Quantity, ${s.name}`,className:"col-start-1 row-start-1 appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6",children:[e.jsx("option",{value:1,children:"1"}),e.jsx("option",{value:2,children:"2"}),e.jsx("option",{value:3,children:"3"}),e.jsx("option",{value:4,children:"4"}),e.jsx("option",{value:5,children:"5"}),e.jsx("option",{value:6,children:"6"}),e.jsx("option",{value:7,children:"7"}),e.jsx("option",{value:8,children:"8"})]}),e.jsx(i,{"aria-hidden":"true",className:"pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"})]}),e.jsx("div",{className:"absolute top-0 right-0",children:e.jsxs("button",{type:"button",className:"-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500",children:[e.jsx("span",{className:"sr-only",children:"Remove"}),e.jsx(f,{"aria-hidden":"true",className:"size-5"})]})})]})]}),e.jsxs("p",{className:"mt-4 flex space-x-2 text-sm text-gray-700",children:[s.inStock?e.jsx(r,{"aria-hidden":"true",className:"size-5 shrink-0 text-green-500"}):e.jsx(l,{"aria-hidden":"true",className:"size-5 shrink-0 text-gray-300"}),e.jsx("span",{children:s.inStock?"In stock":`Ships in ${s.leadTime}`})]})]})]},s.id))})]}),e.jsxs("section",{"aria-labelledby":"summary-heading",className:"mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8",children:[e.jsx("h2",{id:"summary-heading",className:"text-lg font-medium text-gray-900",children:"Order summary"}),e.jsxs("dl",{className:"mt-6 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("dt",{className:"text-sm text-gray-600",children:"Subtotal"}),e.jsx("dd",{className:"text-sm font-medium text-gray-900",children:"$99.00"})]}),e.jsxs("div",{className:"flex items-center justify-between border-t border-gray-200 pt-4",children:[e.jsxs("dt",{className:"flex items-center text-sm text-gray-600",children:[e.jsx("span",{children:"Shipping estimate"}),e.jsxs("a",{href:"#",className:"ml-2 shrink-0 text-gray-400 hover:text-gray-500",children:[e.jsx("span",{className:"sr-only",children:"Learn more about how shipping is calculated"}),e.jsx(n,{"aria-hidden":"true",className:"size-5"})]})]}),e.jsx("dd",{className:"text-sm font-medium text-gray-900",children:"$5.00"})]}),e.jsxs("div",{className:"flex items-center justify-between border-t border-gray-200 pt-4",children:[e.jsxs("dt",{className:"flex text-sm text-gray-600",children:[e.jsx("span",{children:"Tax estimate"}),e.jsxs("a",{href:"#",className:"ml-2 shrink-0 text-gray-400 hover:text-gray-500",children:[e.jsx("span",{className:"sr-only",children:"Learn more about how tax is calculated"}),e.jsx(n,{"aria-hidden":"true",className:"size-5"})]})]}),e.jsx("dd",{className:"text-sm font-medium text-gray-900",children:"$8.32"})]}),e.jsxs("div",{className:"flex items-center justify-between border-t border-gray-200 pt-4",children:[e.jsx("dt",{className:"text-base font-medium text-gray-900",children:"Order total"}),e.jsx("dd",{className:"text-base font-medium text-gray-900",children:"$112.32"})]})]}),e.jsx("div",{className:"mt-6",children:e.jsx("button",{type:"submit",className:"w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-xs hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 focus:outline-hidden",children:"Checkout"})})]})]})]})})}const $=`import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { CheckIcon, ClockIcon, QuestionMarkCircleIcon, XMarkIcon } from '@heroicons/react/20/solid'

const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    price: '$32.00',
    color: 'Sienna',
    inStock: true,
    size: 'Large',
    imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/shopping-cart-page-01-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in sienna.",
  },
  {
    id: 2,
    name: 'Basic Tee',
    href: '#',
    price: '$32.00',
    color: 'Black',
    inStock: false,
    leadTime: '3–4 weeks',
    size: 'Large',
    imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/shopping-cart-page-01-product-02.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 3,
    name: 'Nomad Tumbler',
    href: '#',
    price: '$35.00',
    color: 'White',
    inStock: true,
    imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/shopping-cart-page-01-product-03.jpg',
    imageAlt: 'Insulated bottle with white base and black snap lid.',
  },
]

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 pt-16 pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Shopping Cart</h1>
        <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <section aria-labelledby="cart-heading" className="lg:col-span-7">
            <h2 id="cart-heading" className="sr-only">
              Items in your shopping cart
            </h2>

            <ul role="list" className="divide-y divide-gray-200 border-t border-b border-gray-200">
              {products.map((product, productIdx) => (
                <li key={product.id} className="flex py-6 sm:py-10">
                  <div className="shrink-0">
                    <img
                      alt={product.imageAlt}
                      src={product.imageSrc}
                      className="size-24 rounded-md object-cover sm:size-48"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                    <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                      <div>
                        <div className="flex justify-between">
                          <h3 className="text-sm">
                            <a href={product.href} className="font-medium text-gray-700 hover:text-gray-800">
                              {product.name}
                            </a>
                          </h3>
                        </div>
                        <div className="mt-1 flex text-sm">
                          <p className="text-gray-500">{product.color}</p>
                          {product.size ? (
                            <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">{product.size}</p>
                          ) : null}
                        </div>
                        <p className="mt-1 text-sm font-medium text-gray-900">{product.price}</p>
                      </div>

                      <div className="mt-4 sm:mt-0 sm:pr-9">
                        <div className="grid w-full max-w-16 grid-cols-1">
                          <select
                            name={\`quantity-\${productIdx}\`}
                            aria-label={\`Quantity, \${product.name}\`}
                            className="col-start-1 row-start-1 appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                          >
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                            <option value={8}>8</option>
                          </select>
                          <ChevronDownIcon
                            aria-hidden="true"
                            className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                          />
                        </div>

                        <div className="absolute top-0 right-0">
                          <button type="button" className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Remove</span>
                            <XMarkIcon aria-hidden="true" className="size-5" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <p className="mt-4 flex space-x-2 text-sm text-gray-700">
                      {product.inStock ? (
                        <CheckIcon aria-hidden="true" className="size-5 shrink-0 text-green-500" />
                      ) : (
                        <ClockIcon aria-hidden="true" className="size-5 shrink-0 text-gray-300" />
                      )}

                      <span>{product.inStock ? 'In stock' : \`Ships in \${product.leadTime}\`}</span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Order summary */}
          <section
            aria-labelledby="summary-heading"
            className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
          >
            <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
              Order summary
            </h2>

            <dl className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <dt className="text-sm text-gray-600">Subtotal</dt>
                <dd className="text-sm font-medium text-gray-900">$99.00</dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="flex items-center text-sm text-gray-600">
                  <span>Shipping estimate</span>
                  <a href="#" className="ml-2 shrink-0 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Learn more about how shipping is calculated</span>
                    <QuestionMarkCircleIcon aria-hidden="true" className="size-5" />
                  </a>
                </dt>
                <dd className="text-sm font-medium text-gray-900">$5.00</dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="flex text-sm text-gray-600">
                  <span>Tax estimate</span>
                  <a href="#" className="ml-2 shrink-0 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Learn more about how tax is calculated</span>
                    <QuestionMarkCircleIcon aria-hidden="true" className="size-5" />
                  </a>
                </dt>
                <dd className="text-sm font-medium text-gray-900">$8.32</dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="text-base font-medium text-gray-900">Order total</dt>
                <dd className="text-base font-medium text-gray-900">$112.32</dd>
              </div>
            </dl>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-xs hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 focus:outline-hidden"
              >
                Checkout
              </button>
            </div>
          </section>
        </form>
      </div>
    </div>
  )
}
`,C=[{id:1,name:"Artwork Tee",href:"#",price:"$32.00",color:"Mint",size:"Medium",inStock:!0,imageSrc:"https://tailwindui.com/plus-assets/img/ecommerce-images/checkout-page-03-product-04.jpg",imageAlt:"Front side of mint cotton t-shirt with wavey lines pattern."},{id:2,name:"Basic Tee",href:"#",price:"$32.00",color:"Charcoal",inStock:!1,leadTime:"7-8 years",size:"Large",imageSrc:"https://tailwindui.com/plus-assets/img/ecommerce-images/shopping-cart-page-01-product-02.jpg",imageAlt:"Front side of charcoal cotton t-shirt."}];function I(){return e.jsx("div",{className:"bg-white",children:e.jsxs("div",{className:"mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:px-0",children:[e.jsx("h1",{className:"text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl",children:"Shopping Cart"}),e.jsxs("form",{className:"mt-12",children:[e.jsxs("section",{"aria-labelledby":"cart-heading",children:[e.jsx("h2",{id:"cart-heading",className:"sr-only",children:"Items in your shopping cart"}),e.jsx("ul",{role:"list",className:"divide-y divide-gray-200 border-t border-b border-gray-200",children:C.map(s=>e.jsxs("li",{className:"flex py-6",children:[e.jsx("div",{className:"shrink-0",children:e.jsx("img",{alt:s.imageAlt,src:s.imageSrc,className:"size-24 rounded-md object-cover sm:size-32"})}),e.jsxs("div",{className:"ml-4 flex flex-1 flex-col sm:ml-6",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("h4",{className:"text-sm",children:e.jsx("a",{href:s.href,className:"font-medium text-gray-700 hover:text-gray-800",children:s.name})}),e.jsx("p",{className:"ml-4 text-sm font-medium text-gray-900",children:s.price})]}),e.jsx("p",{className:"mt-1 text-sm text-gray-500",children:s.color}),e.jsx("p",{className:"mt-1 text-sm text-gray-500",children:s.size})]}),e.jsxs("div",{className:"mt-4 flex flex-1 items-end justify-between",children:[e.jsxs("p",{className:"flex items-center space-x-2 text-sm text-gray-700",children:[s.inStock?e.jsx(r,{"aria-hidden":"true",className:"size-5 shrink-0 text-green-500"}):e.jsx(l,{"aria-hidden":"true",className:"size-5 shrink-0 text-gray-300"}),e.jsx("span",{children:s.inStock?"In stock":`Will ship in ${s.leadTime}`})]}),e.jsx("div",{className:"ml-4",children:e.jsx("button",{type:"button",className:"text-sm font-medium text-indigo-600 hover:text-indigo-500",children:e.jsx("span",{children:"Remove"})})})]})]})]},s.id))})]}),e.jsxs("section",{"aria-labelledby":"summary-heading",className:"mt-10",children:[e.jsx("h2",{id:"summary-heading",className:"sr-only",children:"Order summary"}),e.jsxs("div",{children:[e.jsx("dl",{className:"space-y-4",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("dt",{className:"text-base font-medium text-gray-900",children:"Subtotal"}),e.jsx("dd",{className:"ml-4 text-base font-medium text-gray-900",children:"$96.00"})]})}),e.jsx("p",{className:"mt-1 text-sm text-gray-500",children:"Shipping and taxes will be calculated at checkout."})]}),e.jsx("div",{className:"mt-10",children:e.jsx("button",{type:"submit",className:"w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-xs hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 focus:outline-hidden",children:"Checkout"})}),e.jsx("div",{className:"mt-6 text-center text-sm",children:e.jsxs("p",{children:["or"," ",e.jsxs("a",{href:"#",className:"font-medium text-indigo-600 hover:text-indigo-500",children:["Continue Shopping",e.jsx("span",{"aria-hidden":"true",children:" →"})]})]})})]})]})]})})}const T=`import { CheckIcon, ClockIcon } from '@heroicons/react/20/solid'

const products = [
  {
    id: 1,
    name: 'Artwork Tee',
    href: '#',
    price: '$32.00',
    color: 'Mint',
    size: 'Medium',
    inStock: true,
    imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/checkout-page-03-product-04.jpg',
    imageAlt: 'Front side of mint cotton t-shirt with wavey lines pattern.',
  },
  {
    id: 2,
    name: 'Basic Tee',
    href: '#',
    price: '$32.00',
    color: 'Charcoal',
    inStock: false,
    leadTime: '7-8 years',
    size: 'Large',
    imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/shopping-cart-page-01-product-02.jpg',
    imageAlt: 'Front side of charcoal cotton t-shirt.',
  },
  // More products...
]

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:px-0">
        <h1 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Shopping Cart</h1>

        <form className="mt-12">
          <section aria-labelledby="cart-heading">
            <h2 id="cart-heading" className="sr-only">
              Items in your shopping cart
            </h2>

            <ul role="list" className="divide-y divide-gray-200 border-t border-b border-gray-200">
              {products.map((product) => (
                <li key={product.id} className="flex py-6">
                  <div className="shrink-0">
                    <img
                      alt={product.imageAlt}
                      src={product.imageSrc}
                      className="size-24 rounded-md object-cover sm:size-32"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col sm:ml-6">
                    <div>
                      <div className="flex justify-between">
                        <h4 className="text-sm">
                          <a href={product.href} className="font-medium text-gray-700 hover:text-gray-800">
                            {product.name}
                          </a>
                        </h4>
                        <p className="ml-4 text-sm font-medium text-gray-900">{product.price}</p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                      <p className="mt-1 text-sm text-gray-500">{product.size}</p>
                    </div>

                    <div className="mt-4 flex flex-1 items-end justify-between">
                      <p className="flex items-center space-x-2 text-sm text-gray-700">
                        {product.inStock ? (
                          <CheckIcon aria-hidden="true" className="size-5 shrink-0 text-green-500" />
                        ) : (
                          <ClockIcon aria-hidden="true" className="size-5 shrink-0 text-gray-300" />
                        )}

                        <span>{product.inStock ? 'In stock' : \`Will ship in \${product.leadTime}\`}</span>
                      </p>
                      <div className="ml-4">
                        <button type="button" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                          <span>Remove</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Order summary */}
          <section aria-labelledby="summary-heading" className="mt-10">
            <h2 id="summary-heading" className="sr-only">
              Order summary
            </h2>

            <div>
              <dl className="space-y-4">
                <div className="flex items-center justify-between">
                  <dt className="text-base font-medium text-gray-900">Subtotal</dt>
                  <dd className="ml-4 text-base font-medium text-gray-900">$96.00</dd>
                </div>
              </dl>
              <p className="mt-1 text-sm text-gray-500">Shipping and taxes will be calculated at checkout.</p>
            </div>

            <div className="mt-10">
              <button
                type="submit"
                className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-xs hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 focus:outline-hidden"
              >
                Checkout
              </button>
            </div>

            <div className="mt-6 text-center text-sm">
              <p>
                or{' '}
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Continue Shopping
                  <span aria-hidden="true"> &rarr;</span>
                </a>
              </p>
            </div>
          </section>
        </form>
      </div>
    </div>
  )
}
`,A=[{id:1,name:"Nomad Tumbler",href:"#",price:"$35.00",color:"White",inStock:!0,imageSrc:"https://tailwindui.com/plus-assets/img/ecommerce-images/shopping-cart-page-01-product-03.jpg",imageAlt:"Insulated bottle with white base and black snap lid."},{id:2,name:"Basic Tee",href:"#",price:"$32.00",color:"Sienna",inStock:!0,size:"Large",imageSrc:"https://tailwindui.com/plus-assets/img/ecommerce-images/shopping-cart-page-01-product-01.jpg",imageAlt:"Front of men's Basic Tee in sienna."}];function B(){return e.jsx("div",{className:"bg-white",children:e.jsxs("div",{className:"mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8",children:[e.jsx("h1",{className:"text-3xl font-bold tracking-tight text-gray-900",children:"Shopping Cart"}),e.jsxs("form",{className:"mt-12",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"sr-only",children:"Items in your shopping cart"}),e.jsx("ul",{role:"list",className:"divide-y divide-gray-200 border-t border-b border-gray-200",children:A.map((s,t)=>e.jsxs("li",{className:"flex py-6 sm:py-10",children:[e.jsx("div",{className:"shrink-0",children:e.jsx("img",{alt:s.imageAlt,src:s.imageSrc,className:"size-24 rounded-lg object-cover sm:size-32"})}),e.jsxs("div",{className:"relative ml-4 flex flex-1 flex-col justify-between sm:ml-6",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between sm:grid sm:grid-cols-2",children:[e.jsxs("div",{className:"pr-6",children:[e.jsx("h3",{className:"text-sm",children:e.jsx("a",{href:s.href,className:"font-medium text-gray-700 hover:text-gray-800",children:s.name})}),e.jsx("p",{className:"mt-1 text-sm text-gray-500",children:s.color}),s.size?e.jsx("p",{className:"mt-1 text-sm text-gray-500",children:s.size}):null]}),e.jsx("p",{className:"text-right text-sm font-medium text-gray-900",children:s.price})]}),e.jsxs("div",{className:"mt-4 flex items-center sm:absolute sm:top-0 sm:left-1/2 sm:mt-0 sm:block",children:[e.jsxs("div",{className:"inline-grid w-full max-w-16 grid-cols-1",children:[e.jsxs("select",{name:`quantity-${t}`,"aria-label":`Quantity, ${s.name}`,className:"col-start-1 row-start-1 appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6",children:[e.jsx("option",{value:1,children:"1"}),e.jsx("option",{value:2,children:"2"}),e.jsx("option",{value:3,children:"3"}),e.jsx("option",{value:4,children:"4"}),e.jsx("option",{value:5,children:"5"}),e.jsx("option",{value:6,children:"6"}),e.jsx("option",{value:7,children:"7"}),e.jsx("option",{value:8,children:"8"})]}),e.jsx(i,{"aria-hidden":"true",className:"pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"})]}),e.jsx("button",{type:"button",className:"ml-4 text-sm font-medium text-indigo-600 hover:text-indigo-500 sm:mt-3 sm:ml-0",children:e.jsx("span",{children:"Remove"})})]})]}),e.jsxs("p",{className:"mt-4 flex space-x-2 text-sm text-gray-700",children:[s.inStock?e.jsx(r,{"aria-hidden":"true",className:"size-5 shrink-0 text-green-500"}):e.jsx(l,{"aria-hidden":"true",className:"size-5 shrink-0 text-gray-300"}),e.jsx("span",{children:s.inStock?"In stock":`Ships in ${s.leadTime}`})]})]})]},s.id))})]}),e.jsxs("div",{className:"mt-10 sm:ml-32 sm:pl-6",children:[e.jsxs("div",{className:"rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:p-8",children:[e.jsx("h2",{className:"sr-only",children:"Order summary"}),e.jsx("div",{className:"flow-root",children:e.jsxs("dl",{className:"-my-4 divide-y divide-gray-200 text-sm",children:[e.jsxs("div",{className:"flex items-center justify-between py-4",children:[e.jsx("dt",{className:"text-gray-600",children:"Subtotal"}),e.jsx("dd",{className:"font-medium text-gray-900",children:"$99.00"})]}),e.jsxs("div",{className:"flex items-center justify-between py-4",children:[e.jsx("dt",{className:"text-gray-600",children:"Shipping"}),e.jsx("dd",{className:"font-medium text-gray-900",children:"$5.00"})]}),e.jsxs("div",{className:"flex items-center justify-between py-4",children:[e.jsx("dt",{className:"text-gray-600",children:"Tax"}),e.jsx("dd",{className:"font-medium text-gray-900",children:"$8.32"})]}),e.jsxs("div",{className:"flex items-center justify-between py-4",children:[e.jsx("dt",{className:"text-base font-medium text-gray-900",children:"Order total"}),e.jsx("dd",{className:"text-base font-medium text-gray-900",children:"$112.32"})]})]})})]}),e.jsx("div",{className:"mt-10",children:e.jsx("button",{type:"submit",className:"w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-xs hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 focus:outline-hidden",children:"Checkout"})}),e.jsx("div",{className:"mt-6 text-center text-sm text-gray-500",children:e.jsxs("p",{children:["or"," ",e.jsxs("a",{href:"#",className:"font-medium text-indigo-600 hover:text-indigo-500",children:["Continue Shopping",e.jsx("span",{"aria-hidden":"true",children:" →"})]})]})})]})]})]})})}const D=`import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { CheckIcon, ClockIcon } from '@heroicons/react/20/solid'

const products = [
  {
    id: 1,
    name: 'Nomad Tumbler',
    href: '#',
    price: '$35.00',
    color: 'White',
    inStock: true,
    imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/shopping-cart-page-01-product-03.jpg',
    imageAlt: 'Insulated bottle with white base and black snap lid.',
  },
  {
    id: 2,
    name: 'Basic Tee',
    href: '#',
    price: '$32.00',
    color: 'Sienna',
    inStock: true,
    size: 'Large',
    imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/shopping-cart-page-01-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in sienna.",
  },
  // More products...
]

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Shopping Cart</h1>

        <form className="mt-12">
          <div>
            <h2 className="sr-only">Items in your shopping cart</h2>

            <ul role="list" className="divide-y divide-gray-200 border-t border-b border-gray-200">
              {products.map((product, productIdx) => (
                <li key={product.id} className="flex py-6 sm:py-10">
                  <div className="shrink-0">
                    <img
                      alt={product.imageAlt}
                      src={product.imageSrc}
                      className="size-24 rounded-lg object-cover sm:size-32"
                    />
                  </div>

                  <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                    <div>
                      <div className="flex justify-between sm:grid sm:grid-cols-2">
                        <div className="pr-6">
                          <h3 className="text-sm">
                            <a href={product.href} className="font-medium text-gray-700 hover:text-gray-800">
                              {product.name}
                            </a>
                          </h3>
                          <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                          {product.size ? <p className="mt-1 text-sm text-gray-500">{product.size}</p> : null}
                        </div>

                        <p className="text-right text-sm font-medium text-gray-900">{product.price}</p>
                      </div>

                      <div className="mt-4 flex items-center sm:absolute sm:top-0 sm:left-1/2 sm:mt-0 sm:block">
                        <div className="inline-grid w-full max-w-16 grid-cols-1">
                          <select
                            name={\`quantity-\${productIdx}\`}
                            aria-label={\`Quantity, \${product.name}\`}
                            className="col-start-1 row-start-1 appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                          >
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                            <option value={8}>8</option>
                          </select>
                          <ChevronDownIcon
                            aria-hidden="true"
                            className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                          />
                        </div>

                        <button
                          type="button"
                          className="ml-4 text-sm font-medium text-indigo-600 hover:text-indigo-500 sm:mt-3 sm:ml-0"
                        >
                          <span>Remove</span>
                        </button>
                      </div>
                    </div>

                    <p className="mt-4 flex space-x-2 text-sm text-gray-700">
                      {product.inStock ? (
                        <CheckIcon aria-hidden="true" className="size-5 shrink-0 text-green-500" />
                      ) : (
                        <ClockIcon aria-hidden="true" className="size-5 shrink-0 text-gray-300" />
                      )}

                      <span>{product.inStock ? 'In stock' : \`Ships in \${product.leadTime}\`}</span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Order summary */}
          <div className="mt-10 sm:ml-32 sm:pl-6">
            <div className="rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:p-8">
              <h2 className="sr-only">Order summary</h2>

              <div className="flow-root">
                <dl className="-my-4 divide-y divide-gray-200 text-sm">
                  <div className="flex items-center justify-between py-4">
                    <dt className="text-gray-600">Subtotal</dt>
                    <dd className="font-medium text-gray-900">$99.00</dd>
                  </div>
                  <div className="flex items-center justify-between py-4">
                    <dt className="text-gray-600">Shipping</dt>
                    <dd className="font-medium text-gray-900">$5.00</dd>
                  </div>
                  <div className="flex items-center justify-between py-4">
                    <dt className="text-gray-600">Tax</dt>
                    <dd className="font-medium text-gray-900">$8.32</dd>
                  </div>
                  <div className="flex items-center justify-between py-4">
                    <dt className="text-base font-medium text-gray-900">Order total</dt>
                    <dd className="text-base font-medium text-gray-900">$112.32</dd>
                  </div>
                </dl>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-xs hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 focus:outline-hidden"
              >
                Checkout
              </button>
            </div>

            <div className="mt-6 text-center text-sm text-gray-500">
              <p>
                or{' '}
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Continue Shopping
                  <span aria-hidden="true"> &rarr;</span>
                </a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
`,F=[{id:1,name:"Throwback Hip Bag",href:"#",color:"Salmon",price:"$90.00",quantity:1,imageSrc:"https://tailwindui.com/plus-assets/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",imageAlt:"Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."},{id:2,name:"Medium Stuff Satchel",href:"#",color:"Blue",price:"$32.00",quantity:1,imageSrc:"https://tailwindui.com/plus-assets/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",imageAlt:"Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch."}];function M(){const[s,t]=o.useState(!0);return e.jsxs(m,{open:s,onClose:t,className:"relative z-10",children:[e.jsx(d,{transition:!0,className:"fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-closed:opacity-0"}),e.jsx("div",{className:"fixed inset-0 overflow-hidden",children:e.jsx("div",{className:"absolute inset-0 overflow-hidden",children:e.jsx("div",{className:"pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10",children:e.jsx(c,{transition:!0,className:"pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700",children:e.jsxs("div",{className:"flex h-full flex-col overflow-y-scroll bg-white shadow-xl",children:[e.jsxs("div",{className:"flex-1 overflow-y-auto px-4 py-6 sm:px-6",children:[e.jsxs("div",{className:"flex items-start justify-between",children:[e.jsx(g,{className:"text-lg font-medium text-gray-900",children:"Shopping cart"}),e.jsx("div",{className:"ml-3 flex h-7 items-center",children:e.jsxs("button",{type:"button",onClick:()=>t(!1),className:"relative -m-2 p-2 text-gray-400 hover:text-gray-500",children:[e.jsx("span",{className:"absolute -inset-0.5"}),e.jsx("span",{className:"sr-only",children:"Close panel"}),e.jsx(p,{"aria-hidden":"true",className:"size-6"})]})})]}),e.jsx("div",{className:"mt-8",children:e.jsx("div",{className:"flow-root",children:e.jsx("ul",{role:"list",className:"-my-6 divide-y divide-gray-200",children:F.map(a=>e.jsxs("li",{className:"flex py-6",children:[e.jsx("div",{className:"size-24 shrink-0 overflow-hidden rounded-md border border-gray-200",children:e.jsx("img",{alt:a.imageAlt,src:a.imageSrc,className:"size-full object-cover"})}),e.jsxs("div",{className:"ml-4 flex flex-1 flex-col",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between text-base font-medium text-gray-900",children:[e.jsx("h3",{children:e.jsx("a",{href:a.href,children:a.name})}),e.jsx("p",{className:"ml-4",children:a.price})]}),e.jsx("p",{className:"mt-1 text-sm text-gray-500",children:a.color})]}),e.jsxs("div",{className:"flex flex-1 items-end justify-between text-sm",children:[e.jsxs("p",{className:"text-gray-500",children:["Qty ",a.quantity]}),e.jsx("div",{className:"flex",children:e.jsx("button",{type:"button",className:"font-medium text-indigo-600 hover:text-indigo-500",children:"Remove"})})]})]})]},a.id))})})})]}),e.jsxs("div",{className:"border-t border-gray-200 px-4 py-6 sm:px-6",children:[e.jsxs("div",{className:"flex justify-between text-base font-medium text-gray-900",children:[e.jsx("p",{children:"Subtotal"}),e.jsx("p",{children:"$262.00"})]}),e.jsx("p",{className:"mt-0.5 text-sm text-gray-500",children:"Shipping and taxes calculated at checkout."}),e.jsx("div",{className:"mt-6",children:e.jsx("a",{href:"#",className:"flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-xs hover:bg-indigo-700",children:"Checkout"})}),e.jsx("div",{className:"mt-6 flex justify-center text-center text-sm text-gray-500",children:e.jsxs("p",{children:["or"," ",e.jsxs("button",{type:"button",onClick:()=>t(!1),className:"font-medium text-indigo-600 hover:text-indigo-500",children:["Continue Shopping",e.jsx("span",{"aria-hidden":"true",children:" →"})]})]})})]})]})})})})})]})}const O=`'use client'

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

const products = [
  {
    id: 1,
    name: 'Throwback Hip Bag',
    href: '#',
    color: 'Salmon',
    price: '$90.00',
    quantity: 1,
    imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
    imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
  },
  {
    id: 2,
    name: 'Medium Stuff Satchel',
    href: '#',
    color: 'Blue',
    price: '$32.00',
    quantity: 1,
    imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
  // More products...
]

export default function Example() {
  const [open, setOpen] = useState(true)

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-closed:opacity-0"
      />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
            >
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <DialogTitle className="text-lg font-medium text-gray-900">Shopping cart</DialogTitle>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                      >
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon aria-hidden="true" className="size-6" />
                      </button>
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="flow-root">
                      <ul role="list" className="-my-6 divide-y divide-gray-200">
                        {products.map((product) => (
                          <li key={product.id} className="flex py-6">
                            <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <img alt={product.imageAlt} src={product.imageSrc} className="size-full object-cover" />
                            </div>

                            <div className="ml-4 flex flex-1 flex-col">
                              <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                  <h3>
                                    <a href={product.href}>{product.name}</a>
                                  </h3>
                                  <p className="ml-4">{product.price}</p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                              </div>
                              <div className="flex flex-1 items-end justify-between text-sm">
                                <p className="text-gray-500">Qty {product.quantity}</p>

                                <div className="flex">
                                  <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>$262.00</p>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                  <div className="mt-6">
                    <a
                      href="#"
                      className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-xs hover:bg-indigo-700"
                    >
                      Checkout
                    </a>
                  </div>
                  <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                      or{' '}
                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Continue Shopping
                        <span aria-hidden="true"> &rarr;</span>
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  )
}
`,P=[{name:"Women",href:"#"},{name:"Men",href:"#"},{name:"Company",href:"#"},{name:"Stores",href:"#"}],R=[{id:1,name:"Throwback Hip Bag",href:"#",color:"Salmon",imageSrc:"https://tailwindui.com/plus-assets/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",imageAlt:"Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."},{id:2,name:"Medium Stuff Satchel",href:"#",color:"Blue",imageSrc:"https://tailwindui.com/plus-assets/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",imageAlt:"Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch."}];function L(){return e.jsx("header",{className:"relative bg-white",children:e.jsx("nav",{"aria-label":"Top",className:"mx-auto max-w-7xl sm:px-6 lg:px-8",children:e.jsx("div",{className:"relative border-b border-gray-200 px-4 pb-14 sm:static sm:px-0 sm:pb-0",children:e.jsxs("div",{className:"flex h-16 items-center justify-between",children:[e.jsx("div",{className:"flex flex-1",children:e.jsxs("a",{href:"#",children:[e.jsx("span",{className:"sr-only",children:"Your Company"}),e.jsx("img",{alt:"",src:"https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600",className:"h-8 w-auto"})]})}),e.jsx("div",{className:"absolute inset-x-0 bottom-0 overflow-x-auto border-t sm:static sm:border-t-0",children:e.jsx("div",{className:"flex h-14 items-center space-x-8 px-4 sm:h-auto",children:P.map(s=>e.jsx("a",{href:s.href,className:"text-sm font-medium text-gray-700 hover:text-gray-800",children:s.name},s.name))})}),e.jsxs("div",{className:"flex flex-1 items-center justify-end",children:[e.jsxs("a",{href:"#",className:"p-2 text-gray-400 hover:text-gray-500",children:[e.jsx("span",{className:"sr-only",children:"Search"}),e.jsx(y,{"aria-hidden":"true",className:"size-6"})]}),e.jsxs(v,{className:"ml-4 flow-root text-sm lg:relative lg:ml-8",children:[e.jsxs(N,{className:"group -m-2 flex items-center p-2",children:[e.jsx(u,{"aria-hidden":"true",className:"size-6 shrink-0 text-gray-400 group-hover:text-gray-500"}),e.jsx("span",{className:"ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800",children:"0"}),e.jsx("span",{className:"sr-only",children:"items in cart, view bag"})]}),e.jsxs(b,{transition:!0,className:"absolute inset-x-0 top-16 mt-px bg-white pb-6 shadow-lg transition data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in sm:px-2 lg:top-full lg:right-0 lg:left-auto lg:mt-3 lg:-mr-1.5 lg:w-80 lg:rounded-lg lg:ring-1 lg:ring-black/5",children:[e.jsx("h2",{className:"sr-only",children:"Shopping Cart"}),e.jsxs("form",{className:"mx-auto max-w-2xl px-4",children:[e.jsx("ul",{role:"list",className:"divide-y divide-gray-200",children:R.map(s=>e.jsxs("li",{className:"flex items-center py-6",children:[e.jsx("img",{alt:s.imageAlt,src:s.imageSrc,className:"size-16 flex-none rounded-md border border-gray-200"}),e.jsxs("div",{className:"ml-4 flex-auto",children:[e.jsx("h3",{className:"font-medium text-gray-900",children:e.jsx("a",{href:s.href,children:s.name})}),e.jsx("p",{className:"text-gray-500",children:s.color})]})]},s.id))}),e.jsx("button",{type:"submit",className:"w-full rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-xs hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 focus:outline-hidden",children:"Checkout"}),e.jsx("p",{className:"mt-6 text-center",children:e.jsx("a",{href:"#",className:"text-sm font-medium text-indigo-600 hover:text-indigo-500",children:"View Shopping Bag"})})]})]})]})]})]})})})})}const E=`import { MagnifyingGlassIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'

const navigation = [
  { name: 'Women', href: '#' },
  { name: 'Men', href: '#' },
  { name: 'Company', href: '#' },
  { name: 'Stores', href: '#' },
]
const products = [
  {
    id: 1,
    name: 'Throwback Hip Bag',
    href: '#',
    color: 'Salmon',
    imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
    imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
  },
  {
    id: 2,
    name: 'Medium Stuff Satchel',
    href: '#',
    color: 'Blue',
    imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
  // More products...
]

export default function Example() {
  return (
    <header className="relative bg-white">
      <nav aria-label="Top" className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative border-b border-gray-200 px-4 pb-14 sm:static sm:px-0 sm:pb-0">
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

            <div className="absolute inset-x-0 bottom-0 overflow-x-auto border-t sm:static sm:border-t-0">
              <div className="flex h-14 items-center space-x-8 px-4 sm:h-auto">
                {navigation.map((item) => (
                  <a key={item.name} href={item.href} className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-1 items-center justify-end">
              {/* Search */}
              <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                <span className="sr-only">Search</span>
                <MagnifyingGlassIcon aria-hidden="true" className="size-6" />
              </a>

              {/* Cart */}
              <Popover className="ml-4 flow-root text-sm lg:relative lg:ml-8">
                <PopoverButton className="group -m-2 flex items-center p-2">
                  <ShoppingBagIcon
                    aria-hidden="true"
                    className="size-6 shrink-0 text-gray-400 group-hover:text-gray-500"
                  />
                  <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                  <span className="sr-only">items in cart, view bag</span>
                </PopoverButton>
                <PopoverPanel
                  transition
                  className="absolute inset-x-0 top-16 mt-px bg-white pb-6 shadow-lg transition data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in sm:px-2 lg:top-full lg:right-0 lg:left-auto lg:mt-3 lg:-mr-1.5 lg:w-80 lg:rounded-lg lg:ring-1 lg:ring-black/5"
                >
                  <h2 className="sr-only">Shopping Cart</h2>

                  <form className="mx-auto max-w-2xl px-4">
                    <ul role="list" className="divide-y divide-gray-200">
                      {products.map((product) => (
                        <li key={product.id} className="flex items-center py-6">
                          <img
                            alt={product.imageAlt}
                            src={product.imageSrc}
                            className="size-16 flex-none rounded-md border border-gray-200"
                          />
                          <div className="ml-4 flex-auto">
                            <h3 className="font-medium text-gray-900">
                              <a href={product.href}>{product.name}</a>
                            </h3>
                            <p className="text-gray-500">{product.color}</p>
                          </div>
                        </li>
                      ))}
                    </ul>

                    <button
                      type="submit"
                      className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-xs hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 focus:outline-hidden"
                    >
                      Checkout
                    </button>

                    <p className="mt-6 text-center">
                      <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                        View Shopping Bag
                      </a>
                    </p>
                  </form>
                </PopoverPanel>
              </Popover>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
`,ee=()=>{const s=[{id:"01",name:"Drawer",component:e.jsx(w,{}),raw:k},{id:"02",name:"Two column with quantity dropdown",component:e.jsx(z,{}),raw:$},{id:"03",name:"Single column",component:e.jsx(I,{}),raw:T},{id:"04",name:"With extended summary",component:e.jsx(B,{}),raw:D},{id:"05",name:"Dialog",component:e.jsx(M,{}),raw:O},{id:"06",name:"Popover",component:e.jsx(L,{}),raw:E}];return e.jsx("div",{className:"space-y-10 pb-20",children:s.map(t=>e.jsxs("section",{children:[e.jsxs("h2",{className:"mb-4 text-lg font-bold text-gray-800",children:[t.id,". ",t.name]}),e.jsx(h,{name:t.name,code:t.raw,children:t.component})]},t.id))})};export{ee as default};
