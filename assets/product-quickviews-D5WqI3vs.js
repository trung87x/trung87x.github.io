import{r as n,j as e,h,L as f,z as y}from"./index-CvCVbuS9.js";import{P as w}from"./PreviewWrapper-TzFvRoPZ.js";import{F as b}from"./XMarkIcon-DRrKznFm.js";import{F as v}from"./StarIcon-BLYUB6tL.js";import{y as g,K as u}from"./radio-group-Bn8ONlYl.js";import{F as k}from"./CheckIcon-BfHG0Qrp.js";import{F as S}from"./QuestionMarkCircleIcon-BrsUz3Ow.js";import{F as C}from"./ShieldCheckIcon-BoQm2FMq.js";import"./use-by-comparator-Ch7KvTmY.js";import"./use-default-value-Cs7QsSkB.js";import"./form-fields-DfbHTuSb.js";import"./label-CY_Q6YdE.js";import"./bugs-qQ_SbDk4.js";const o={name:"Basic Tee 6-Pack ",price:"$192",rating:3.9,reviewCount:117,imageSrc:"https://tailwindui.com/plus-assets/img/ecommerce-images/product-quick-preview-02-detail.jpg",imageAlt:"Two each of gray, white, and black shirts arranged on table.",colors:[{name:"White",class:"bg-white",selectedClass:"ring-gray-400"},{name:"Gray",class:"bg-gray-200",selectedClass:"ring-gray-400"},{name:"Black",class:"bg-gray-900",selectedClass:"ring-gray-900"}],sizes:[{name:"XXS",inStock:!0},{name:"XS",inStock:!0},{name:"S",inStock:!0},{name:"M",inStock:!0},{name:"L",inStock:!0},{name:"XL",inStock:!0},{name:"XXL",inStock:!0},{name:"XXXL",inStock:!1}]};function p(...i){return i.filter(Boolean).join(" ")}function z(){const[i,s]=n.useState(!1),[c,m]=n.useState(o.colors[0]),[t,N]=n.useState(o.sizes[2]);return e.jsxs(h,{open:i,onClose:s,className:"relative z-10",children:[e.jsx(f,{transition:!0,className:"fixed inset-0 hidden bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in md:block"}),e.jsx("div",{className:"fixed inset-0 z-10 w-screen overflow-y-auto",children:e.jsx("div",{className:"flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4",children:e.jsx(y,{transition:!0,className:"flex w-full transform text-left text-base transition data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in md:my-8 md:max-w-2xl md:px-4 data-closed:md:translate-y-0 data-closed:md:scale-95 lg:max-w-4xl",children:e.jsxs("div",{className:"relative flex w-full items-center overflow-hidden bg-white px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8",children:[e.jsxs("button",{type:"button",onClick:()=>s(!1),className:"absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8",children:[e.jsx("span",{className:"sr-only",children:"Close"}),e.jsx(b,{"aria-hidden":"true",className:"size-6"})]}),e.jsxs("div",{className:"grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8",children:[e.jsx("img",{alt:o.imageAlt,src:o.imageSrc,className:"aspect-2/3 w-full rounded-lg bg-gray-100 object-cover sm:col-span-4 lg:col-span-5"}),e.jsxs("div",{className:"sm:col-span-8 lg:col-span-7",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900 sm:pr-12",children:o.name}),e.jsxs("section",{"aria-labelledby":"information-heading",className:"mt-2",children:[e.jsx("h3",{id:"information-heading",className:"sr-only",children:"Product information"}),e.jsx("p",{className:"text-2xl text-gray-900",children:o.price}),e.jsxs("div",{className:"mt-6",children:[e.jsx("h4",{className:"sr-only",children:"Reviews"}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"flex items-center",children:[0,1,2,3,4].map(a=>e.jsx(v,{"aria-hidden":"true",className:p(o.rating>a?"text-gray-900":"text-gray-200","size-5 shrink-0")},a))}),e.jsxs("p",{className:"sr-only",children:[o.rating," out of 5 stars"]}),e.jsxs("a",{href:"#",className:"ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500",children:[o.reviewCount," reviews"]})]})]})]}),e.jsxs("section",{"aria-labelledby":"options-heading",className:"mt-10",children:[e.jsx("h3",{id:"options-heading",className:"sr-only",children:"Product options"}),e.jsxs("form",{children:[e.jsxs("fieldset",{"aria-label":"Choose a color",children:[e.jsx("legend",{className:"text-sm font-medium text-gray-900",children:"Color"}),e.jsx(g,{value:c,onChange:m,className:"mt-4 flex items-center gap-x-3",children:o.colors.map(a=>e.jsx(u,{value:a,"aria-label":a.name,className:p(a.selectedClass,"relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-hidden data-checked:ring-2 data-focus:data-checked:ring-3 data-focus:data-checked:ring-offset-1"),children:e.jsx("span",{"aria-hidden":"true",className:p(a.class,"size-8 rounded-full border border-black/10")})},a.name))})]}),e.jsxs("fieldset",{"aria-label":"Choose a size",className:"mt-10",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{className:"text-sm font-medium text-gray-900",children:"Size"}),e.jsx("a",{href:"#",className:"text-sm font-medium text-indigo-600 hover:text-indigo-500",children:"Size guide"})]}),e.jsx(g,{value:t,onChange:N,className:"mt-4 grid grid-cols-4 gap-4",children:o.sizes.map(a=>e.jsxs(u,{value:a,disabled:!a.inStock,className:p(a.inStock?"cursor-pointer bg-white text-gray-900 shadow-xs":"cursor-not-allowed bg-gray-50 text-gray-200","group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-hidden data-focus:ring-2 data-focus:ring-indigo-500 sm:flex-1"),children:[e.jsx("span",{children:a.name}),a.inStock?e.jsx("span",{"aria-hidden":"true",className:"pointer-events-none absolute -inset-px rounded-md border-2 border-transparent group-data-checked:border-indigo-500 group-data-focus:border"}):e.jsx("span",{"aria-hidden":"true",className:"pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200",children:e.jsx("svg",{stroke:"currentColor",viewBox:"0 0 100 100",preserveAspectRatio:"none",className:"absolute inset-0 size-full stroke-2 text-gray-200",children:e.jsx("line",{x1:0,x2:100,y1:100,y2:0,vectorEffect:"non-scaling-stroke"})})})]},a.name))})]}),e.jsx("button",{type:"submit",className:"mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden",children:"Add to bag"})]})]})]})]})]})})})})]})}const R=`'use client'

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, Radio, RadioGroup } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/20/solid'

const product = {
  name: 'Basic Tee 6-Pack ',
  price: '$192',
  rating: 3.9,
  reviewCount: 117,
  href: '#',
  imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/product-quick-preview-02-detail.jpg',
  imageAlt: 'Two each of gray, white, and black shirts arranged on table.',
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
    { name: 'XXS', inStock: true },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: 'XXL', inStock: true },
    { name: 'XXXL', inStock: false },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [open, setOpen] = useState(false)
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[2])

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 hidden bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in md:block"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
          <DialogPanel
            transition
            className="flex w-full transform text-left text-base transition data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in md:my-8 md:max-w-2xl md:px-4 data-closed:md:translate-y-0 data-closed:md:scale-95 lg:max-w-4xl"
          >
            <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
              >
                <span className="sr-only">Close</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>

              <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="aspect-2/3 w-full rounded-lg bg-gray-100 object-cover sm:col-span-4 lg:col-span-5"
                />
                <div className="sm:col-span-8 lg:col-span-7">
                  <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">{product.name}</h2>

                  <section aria-labelledby="information-heading" className="mt-2">
                    <h3 id="information-heading" className="sr-only">
                      Product information
                    </h3>

                    <p className="text-2xl text-gray-900">{product.price}</p>

                    {/* Reviews */}
                    <div className="mt-6">
                      <h4 className="sr-only">Reviews</h4>
                      <div className="flex items-center">
                        <div className="flex items-center">
                          {[0, 1, 2, 3, 4].map((rating) => (
                            <StarIcon
                              key={rating}
                              aria-hidden="true"
                              className={classNames(
                                product.rating > rating ? 'text-gray-900' : 'text-gray-200',
                                'size-5 shrink-0',
                              )}
                            />
                          ))}
                        </div>
                        <p className="sr-only">{product.rating} out of 5 stars</p>
                        <a href="#" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                          {product.reviewCount} reviews
                        </a>
                      </div>
                    </div>
                  </section>

                  <section aria-labelledby="options-heading" className="mt-10">
                    <h3 id="options-heading" className="sr-only">
                      Product options
                    </h3>

                    <form>
                      {/* Colors */}
                      <fieldset aria-label="Choose a color">
                        <legend className="text-sm font-medium text-gray-900">Color</legend>

                        <RadioGroup
                          value={selectedColor}
                          onChange={setSelectedColor}
                          className="mt-4 flex items-center gap-x-3"
                        >
                          {product.colors.map((color) => (
                            <Radio
                              key={color.name}
                              value={color}
                              aria-label={color.name}
                              className={classNames(
                                color.selectedClass,
                                'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-hidden data-checked:ring-2 data-focus:data-checked:ring-3 data-focus:data-checked:ring-offset-1',
                              )}
                            >
                              <span
                                aria-hidden="true"
                                className={classNames(color.class, 'size-8 rounded-full border border-black/10')}
                              />
                            </Radio>
                          ))}
                        </RadioGroup>
                      </fieldset>

                      {/* Sizes */}
                      <fieldset aria-label="Choose a size" className="mt-10">
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-medium text-gray-900">Size</div>
                          <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                            Size guide
                          </a>
                        </div>

                        <RadioGroup
                          value={selectedSize}
                          onChange={setSelectedSize}
                          className="mt-4 grid grid-cols-4 gap-4"
                        >
                          {product.sizes.map((size) => (
                            <Radio
                              key={size.name}
                              value={size}
                              disabled={!size.inStock}
                              className={classNames(
                                size.inStock
                                  ? 'cursor-pointer bg-white text-gray-900 shadow-xs'
                                  : 'cursor-not-allowed bg-gray-50 text-gray-200',
                                'group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-hidden data-focus:ring-2 data-focus:ring-indigo-500 sm:flex-1',
                              )}
                            >
                              <span>{size.name}</span>
                              {size.inStock ? (
                                <span
                                  aria-hidden="true"
                                  className="pointer-events-none absolute -inset-px rounded-md border-2 border-transparent group-data-checked:border-indigo-500 group-data-focus:border"
                                />
                              ) : (
                                <span
                                  aria-hidden="true"
                                  className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                >
                                  <svg
                                    stroke="currentColor"
                                    viewBox="0 0 100 100"
                                    preserveAspectRatio="none"
                                    className="absolute inset-0 size-full stroke-2 text-gray-200"
                                  >
                                    <line x1={0} x2={100} y1={100} y2={0} vectorEffect="non-scaling-stroke" />
                                  </svg>
                                </span>
                              )}
                            </Radio>
                          ))}
                        </RadioGroup>
                      </fieldset>

                      <button
                        type="submit"
                        className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
                      >
                        Add to bag
                      </button>
                    </form>
                  </section>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
`,r={name:"Women's Basic Tee",price:"$32",rating:3.9,reviewCount:512,href:"#",imageSrc:"https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-featured-product-shot.jpg",imageAlt:"Back of women's Basic Tee in black.",colors:[{name:"Black",bgColor:"bg-gray-900",selectedColor:"ring-gray-900"},{name:"Heather Grey",bgColor:"bg-gray-400",selectedColor:"ring-gray-400"}],sizes:[{name:"XXS",inStock:!0},{name:"XS",inStock:!0},{name:"S",inStock:!0},{name:"M",inStock:!0},{name:"L",inStock:!0},{name:"XL",inStock:!0},{name:"XXL",inStock:!1}]};function x(...i){return i.filter(Boolean).join(" ")}function B(){const[i,s]=n.useState(!1),[c,m]=n.useState(r.colors[0]),[t,N]=n.useState(r.sizes[2]);return e.jsxs(h,{open:i,onClose:s,className:"relative z-10",children:[e.jsx(f,{transition:!0,className:"fixed inset-0 hidden bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in md:block"}),e.jsx("div",{className:"fixed inset-0 z-10 w-screen overflow-y-auto",children:e.jsxs("div",{className:"flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4",children:[e.jsx("span",{"aria-hidden":"true",className:"hidden md:inline-block md:h-screen md:align-middle",children:"​"}),e.jsx(y,{transition:!0,className:"flex w-full transform text-left text-base transition data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in md:my-8 md:max-w-2xl md:px-4 data-closed:md:translate-y-0 data-closed:md:scale-95 lg:max-w-4xl",children:e.jsxs("div",{className:"relative flex w-full items-center overflow-hidden bg-white px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8",children:[e.jsxs("button",{type:"button",onClick:()=>s(!1),className:"absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8",children:[e.jsx("span",{className:"sr-only",children:"Close"}),e.jsx(b,{"aria-hidden":"true",className:"size-6"})]}),e.jsxs("div",{className:"grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:items-center lg:gap-x-8",children:[e.jsx("img",{alt:r.imageAlt,src:r.imageSrc,className:"aspect-2/3 w-full rounded-lg bg-gray-100 object-cover sm:col-span-4 lg:col-span-5"}),e.jsxs("div",{className:"sm:col-span-8 lg:col-span-7",children:[e.jsx("h2",{className:"text-xl font-medium text-gray-900 sm:pr-12",children:r.name}),e.jsxs("section",{"aria-labelledby":"information-heading",className:"mt-1",children:[e.jsx("h3",{id:"information-heading",className:"sr-only",children:"Product information"}),e.jsx("p",{className:"font-medium text-gray-900",children:r.price}),e.jsxs("div",{className:"mt-4",children:[e.jsx("h4",{className:"sr-only",children:"Reviews"}),e.jsxs("div",{className:"flex items-center",children:[e.jsxs("p",{className:"text-sm text-gray-700",children:[r.rating,e.jsx("span",{className:"sr-only",children:" out of 5 stars"})]}),e.jsx("div",{className:"ml-1 flex items-center",children:[0,1,2,3,4].map(a=>e.jsx(v,{"aria-hidden":"true",className:x(r.rating>a?"text-yellow-400":"text-gray-200","size-5 shrink-0")},a))}),e.jsxs("div",{className:"ml-4 hidden lg:flex lg:items-center",children:[e.jsx("span",{"aria-hidden":"true",className:"text-gray-300",children:"·"}),e.jsxs("a",{href:"#",className:"ml-4 text-sm font-medium text-indigo-600 hover:text-indigo-500",children:["See all ",r.reviewCount," reviews"]})]})]})]})]}),e.jsxs("section",{"aria-labelledby":"options-heading",className:"mt-8",children:[e.jsx("h3",{id:"options-heading",className:"sr-only",children:"Product options"}),e.jsxs("form",{children:[e.jsxs("fieldset",{"aria-label":"Choose a color",children:[e.jsx("legend",{className:"text-sm font-medium text-gray-900",children:"Color"}),e.jsx(g,{value:c,onChange:m,className:"mt-2 flex items-center gap-x-3",children:r.colors.map(a=>e.jsx(u,{value:a,"aria-label":a.name,className:x(a.selectedColor,"relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-hidden data-checked:ring-2 data-focus:data-checked:ring-3 data-focus:data-checked:ring-offset-1"),children:e.jsx("span",{"aria-hidden":"true",className:x(a.bgColor,"size-8 rounded-full border border-black/10")})},a.name))})]}),e.jsxs("fieldset",{"aria-label":"Choose a size",className:"mt-8",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{className:"text-sm font-medium text-gray-900",children:"Size"}),e.jsx("a",{href:"#",className:"text-sm font-medium text-indigo-600 hover:text-indigo-500",children:"Size guide"})]}),e.jsx(g,{value:t,onChange:N,className:"mt-2 grid grid-cols-7 gap-2",children:r.sizes.map(a=>e.jsx(u,{value:a,disabled:!a.inStock,className:x(a.inStock?"cursor-pointer focus:outline-hidden":"cursor-not-allowed opacity-25","flex items-center justify-center rounded-md border border-gray-200 bg-white px-3 py-3 text-sm font-medium text-gray-900 uppercase hover:bg-gray-50 data-checked:border-transparent data-checked:bg-indigo-600 data-checked:text-white data-checked:hover:bg-indigo-700 data-focus:ring-2 data-focus:ring-indigo-500 data-focus:ring-offset-2 sm:flex-1"),children:a.name},a.name))})]}),e.jsx("button",{type:"submit",className:"mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden",children:"Add to bag"}),e.jsx("p",{className:"absolute top-4 left-4 text-center sm:static sm:mt-8",children:e.jsx("a",{href:r.href,className:"font-medium text-indigo-600 hover:text-indigo-500",children:"View full details"})})]})]})]})]})]})})]})})]})}const X=`'use client'

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, Radio, RadioGroup } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/20/solid'

const product = {
  name: "Women's Basic Tee",
  price: '$32',
  rating: 3.9,
  reviewCount: 512,
  href: '#',
  imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-featured-product-shot.jpg',
  imageAlt: "Back of women's Basic Tee in black.",
  colors: [
    { name: 'Black', bgColor: 'bg-gray-900', selectedColor: 'ring-gray-900' },
    { name: 'Heather Grey', bgColor: 'bg-gray-400', selectedColor: 'ring-gray-400' },
  ],
  sizes: [
    { name: 'XXS', inStock: true },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: 'XXL', inStock: false },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [open, setOpen] = useState(false)
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[2])

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 hidden bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in md:block"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
          {/* This element is to trick the browser into centering the modal contents. */}
          <span aria-hidden="true" className="hidden md:inline-block md:h-screen md:align-middle">
            &#8203;
          </span>
          <DialogPanel
            transition
            className="flex w-full transform text-left text-base transition data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in md:my-8 md:max-w-2xl md:px-4 data-closed:md:translate-y-0 data-closed:md:scale-95 lg:max-w-4xl"
          >
            <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
              >
                <span className="sr-only">Close</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>

              <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:items-center lg:gap-x-8">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="aspect-2/3 w-full rounded-lg bg-gray-100 object-cover sm:col-span-4 lg:col-span-5"
                />
                <div className="sm:col-span-8 lg:col-span-7">
                  <h2 className="text-xl font-medium text-gray-900 sm:pr-12">{product.name}</h2>

                  <section aria-labelledby="information-heading" className="mt-1">
                    <h3 id="information-heading" className="sr-only">
                      Product information
                    </h3>

                    <p className="font-medium text-gray-900">{product.price}</p>

                    {/* Reviews */}
                    <div className="mt-4">
                      <h4 className="sr-only">Reviews</h4>
                      <div className="flex items-center">
                        <p className="text-sm text-gray-700">
                          {product.rating}
                          <span className="sr-only"> out of 5 stars</span>
                        </p>
                        <div className="ml-1 flex items-center">
                          {[0, 1, 2, 3, 4].map((rating) => (
                            <StarIcon
                              key={rating}
                              aria-hidden="true"
                              className={classNames(
                                product.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                                'size-5 shrink-0',
                              )}
                            />
                          ))}
                        </div>
                        <div className="ml-4 hidden lg:flex lg:items-center">
                          <span aria-hidden="true" className="text-gray-300">
                            &middot;
                          </span>
                          <a href="#" className="ml-4 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                            See all {product.reviewCount} reviews
                          </a>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section aria-labelledby="options-heading" className="mt-8">
                    <h3 id="options-heading" className="sr-only">
                      Product options
                    </h3>

                    <form>
                      {/* Color picker */}
                      <fieldset aria-label="Choose a color">
                        <legend className="text-sm font-medium text-gray-900">Color</legend>

                        <RadioGroup
                          value={selectedColor}
                          onChange={setSelectedColor}
                          className="mt-2 flex items-center gap-x-3"
                        >
                          {product.colors.map((color) => (
                            <Radio
                              key={color.name}
                              value={color}
                              aria-label={color.name}
                              className={classNames(
                                color.selectedColor,
                                'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-hidden data-checked:ring-2 data-focus:data-checked:ring-3 data-focus:data-checked:ring-offset-1',
                              )}
                            >
                              <span
                                aria-hidden="true"
                                className={classNames(color.bgColor, 'size-8 rounded-full border border-black/10')}
                              />
                            </Radio>
                          ))}
                        </RadioGroup>
                      </fieldset>

                      {/* Size picker */}
                      <fieldset aria-label="Choose a size" className="mt-8">
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-medium text-gray-900">Size</div>
                          <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                            Size guide
                          </a>
                        </div>

                        <RadioGroup
                          value={selectedSize}
                          onChange={setSelectedSize}
                          className="mt-2 grid grid-cols-7 gap-2"
                        >
                          {product.sizes.map((size) => (
                            <Radio
                              key={size.name}
                              value={size}
                              disabled={!size.inStock}
                              className={classNames(
                                size.inStock ? 'cursor-pointer focus:outline-hidden' : 'cursor-not-allowed opacity-25',
                                'flex items-center justify-center rounded-md border border-gray-200 bg-white px-3 py-3 text-sm font-medium text-gray-900 uppercase hover:bg-gray-50 data-checked:border-transparent data-checked:bg-indigo-600 data-checked:text-white data-checked:hover:bg-indigo-700 data-focus:ring-2 data-focus:ring-indigo-500 data-focus:ring-offset-2 sm:flex-1',
                              )}
                            >
                              {size.name}
                            </Radio>
                          ))}
                        </RadioGroup>
                      </fieldset>

                      <button
                        type="submit"
                        className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
                      >
                        Add to bag
                      </button>

                      <p className="absolute top-4 left-4 text-center sm:static sm:mt-8">
                        <a href={product.href} className="font-medium text-indigo-600 hover:text-indigo-500">
                          View full details
                        </a>
                      </p>
                    </form>
                  </section>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
`,d={name:"Everyday Ruck Snack",price:"$220",rating:3.9,href:"#",imageSrc:"https://tailwindui.com/plus-assets/img/ecommerce-images/product-quick-preview-03-detail.jpg",imageAlt:"Interior of light green canvas bag with padded laptop sleeve and internal organization pouch.",sizes:[{name:"18L",description:"Perfect for a reasonable amount of snacks."},{name:"20L",description:"Enough room for a serious amount of snacks."}]};function D(...i){return i.filter(Boolean).join(" ")}function P(){const[i,s]=n.useState(!1),[c,m]=n.useState(d.sizes[0]);return e.jsxs(h,{open:i,onClose:s,className:"relative z-10",children:[e.jsx(f,{transition:!0,className:"fixed inset-0 hidden bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in md:block"}),e.jsx("div",{className:"fixed inset-0 z-10 w-screen overflow-y-auto",children:e.jsx("div",{className:"flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4",children:e.jsx(y,{transition:!0,className:"flex w-full transform text-left text-base transition data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in md:my-8 md:max-w-2xl md:px-4 data-closed:md:translate-y-0 data-closed:md:scale-95 lg:max-w-4xl",children:e.jsxs("div",{className:"relative flex w-full items-center overflow-hidden bg-white px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8",children:[e.jsxs("button",{type:"button",onClick:()=>s(!1),className:"absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8",children:[e.jsx("span",{className:"sr-only",children:"Close"}),e.jsx(b,{"aria-hidden":"true",className:"size-6"})]}),e.jsxs("div",{className:"grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8",children:[e.jsxs("div",{className:"sm:col-span-4 lg:col-span-5",children:[e.jsx("img",{alt:d.imageAlt,src:d.imageSrc,className:"aspect-square w-full rounded-lg bg-gray-100 object-cover"}),e.jsx("p",{className:"absolute top-4 left-4 text-center sm:static sm:mt-6",children:e.jsx("a",{href:d.href,className:"font-medium text-indigo-600 hover:text-indigo-500",children:"View full details"})})]}),e.jsxs("div",{className:"sm:col-span-8 lg:col-span-7",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900 sm:pr-12",children:d.name}),e.jsxs("section",{"aria-labelledby":"information-heading",className:"mt-4",children:[e.jsx("h3",{id:"information-heading",className:"sr-only",children:"Product information"}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("p",{className:"text-lg text-gray-900 sm:text-xl",children:d.price}),e.jsxs("div",{className:"ml-4 border-l border-gray-300 pl-4",children:[e.jsx("h4",{className:"sr-only",children:"Reviews"}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"flex items-center",children:[0,1,2,3,4].map(t=>e.jsx(v,{"aria-hidden":"true",className:D(d.rating>t?"text-yellow-400":"text-gray-300","size-5 shrink-0")},t))}),e.jsxs("p",{className:"sr-only",children:[d.rating," out of 5 stars"]})]})]})]}),e.jsxs("div",{className:"mt-6 flex items-center",children:[e.jsx(k,{"aria-hidden":"true",className:"size-5 shrink-0 text-green-500"}),e.jsx("p",{className:"ml-2 font-medium text-gray-500",children:"In stock and ready to ship"})]})]}),e.jsxs("section",{"aria-labelledby":"options-heading",className:"mt-6",children:[e.jsx("h3",{id:"options-heading",className:"sr-only",children:"Product options"}),e.jsxs("form",{children:[e.jsx("div",{className:"sm:flex sm:justify-between",children:e.jsxs("fieldset",{children:[e.jsx("legend",{className:"block text-sm font-medium text-gray-700",children:"Size"}),e.jsx(g,{value:c,onChange:m,children:e.jsx("div",{className:"mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2",children:d.sizes.map(t=>e.jsxs(u,{as:"div",value:t,"aria-label":t.name,"aria-description":t.description,className:"group relative block cursor-pointer rounded-lg border border-gray-300 p-4 focus:outline-hidden data-focus:ring-2 data-focus:ring-indigo-500",children:[e.jsx("p",{className:"text-base font-medium text-gray-900",children:t.name}),e.jsx("p",{className:"mt-1 text-sm text-gray-500",children:t.description}),e.jsx("div",{"aria-hidden":"true",className:"pointer-events-none absolute -inset-px rounded-lg border-2 border-transparent group-data-checked:border-indigo-500 group-data-focus:border"})]},t.name))})})]})}),e.jsx("div",{className:"mt-4 flex",children:e.jsxs("a",{href:"#",className:"group flex text-sm text-gray-500 hover:text-gray-700",children:[e.jsx("span",{children:"What size should I buy?"}),e.jsx(S,{"aria-hidden":"true",className:"ml-2 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"})]})}),e.jsx("div",{className:"mt-6",children:e.jsx("button",{type:"submit",className:"flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 focus:outline-hidden",children:"Add to bag"})}),e.jsx("div",{className:"mt-6 text-center",children:e.jsxs("a",{href:"#",className:"group inline-flex text-base font-medium",children:[e.jsx(C,{"aria-hidden":"true",className:"mr-2 size-6 shrink-0 text-gray-400 group-hover:text-gray-500"}),e.jsx("span",{className:"text-gray-500 group-hover:text-gray-700",children:"Lifetime Guarantee"})]})})]})]})]})]})]})})})})]})}const A=`'use client'

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, Radio, RadioGroup } from '@headlessui/react'
import { ShieldCheckIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { CheckIcon, QuestionMarkCircleIcon, StarIcon } from '@heroicons/react/20/solid'

const product = {
  name: 'Everyday Ruck Snack',
  price: '$220',
  rating: 3.9,
  href: '#',
  imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/product-quick-preview-03-detail.jpg',
  imageAlt: 'Interior of light green canvas bag with padded laptop sleeve and internal organization pouch.',
  sizes: [
    { name: '18L', description: 'Perfect for a reasonable amount of snacks.' },
    { name: '20L', description: 'Enough room for a serious amount of snacks.' },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [open, setOpen] = useState(false)
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 hidden bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in md:block"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
          <DialogPanel
            transition
            className="flex w-full transform text-left text-base transition data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in md:my-8 md:max-w-2xl md:px-4 data-closed:md:translate-y-0 data-closed:md:scale-95 lg:max-w-4xl"
          >
            <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
              >
                <span className="sr-only">Close</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>

              <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                <div className="sm:col-span-4 lg:col-span-5">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="aspect-square w-full rounded-lg bg-gray-100 object-cover"
                  />
                  <p className="absolute top-4 left-4 text-center sm:static sm:mt-6">
                    <a href={product.href} className="font-medium text-indigo-600 hover:text-indigo-500">
                      View full details
                    </a>
                  </p>
                </div>
                <div className="sm:col-span-8 lg:col-span-7">
                  <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">{product.name}</h2>

                  <section aria-labelledby="information-heading" className="mt-4">
                    <h3 id="information-heading" className="sr-only">
                      Product information
                    </h3>

                    <div className="flex items-center">
                      <p className="text-lg text-gray-900 sm:text-xl">{product.price}</p>

                      <div className="ml-4 border-l border-gray-300 pl-4">
                        <h4 className="sr-only">Reviews</h4>
                        <div className="flex items-center">
                          <div className="flex items-center">
                            {[0, 1, 2, 3, 4].map((rating) => (
                              <StarIcon
                                key={rating}
                                aria-hidden="true"
                                className={classNames(
                                  product.rating > rating ? 'text-yellow-400' : 'text-gray-300',
                                  'size-5 shrink-0',
                                )}
                              />
                            ))}
                          </div>
                          <p className="sr-only">{product.rating} out of 5 stars</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 flex items-center">
                      <CheckIcon aria-hidden="true" className="size-5 shrink-0 text-green-500" />
                      <p className="ml-2 font-medium text-gray-500">In stock and ready to ship</p>
                    </div>
                  </section>

                  <section aria-labelledby="options-heading" className="mt-6">
                    <h3 id="options-heading" className="sr-only">
                      Product options
                    </h3>

                    <form>
                      <div className="sm:flex sm:justify-between">
                        {/* Size selector */}
                        <fieldset>
                          <legend className="block text-sm font-medium text-gray-700">Size</legend>
                          <RadioGroup value={selectedSize} onChange={setSelectedSize}>
                            <div className="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
                              {product.sizes.map((size) => (
                                <Radio
                                  key={size.name}
                                  as="div"
                                  value={size}
                                  aria-label={size.name}
                                  aria-description={size.description}
                                  className="group relative block cursor-pointer rounded-lg border border-gray-300 p-4 focus:outline-hidden data-focus:ring-2 data-focus:ring-indigo-500"
                                >
                                  <p className="text-base font-medium text-gray-900">{size.name}</p>
                                  <p className="mt-1 text-sm text-gray-500">{size.description}</p>
                                  <div
                                    aria-hidden="true"
                                    className="pointer-events-none absolute -inset-px rounded-lg border-2 border-transparent group-data-checked:border-indigo-500 group-data-focus:border"
                                  />
                                </Radio>
                              ))}
                            </div>
                          </RadioGroup>
                        </fieldset>
                      </div>
                      <div className="mt-4 flex">
                        <a href="#" className="group flex text-sm text-gray-500 hover:text-gray-700">
                          <span>What size should I buy?</span>
                          <QuestionMarkCircleIcon
                            aria-hidden="true"
                            className="ml-2 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
                          />
                        </a>
                      </div>
                      <div className="mt-6">
                        <button
                          type="submit"
                          className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 focus:outline-hidden"
                        >
                          Add to bag
                        </button>
                      </div>
                      <div className="mt-6 text-center">
                        <a href="#" className="group inline-flex text-base font-medium">
                          <ShieldCheckIcon
                            aria-hidden="true"
                            className="mr-2 size-6 shrink-0 text-gray-400 group-hover:text-gray-500"
                          />
                          <span className="text-gray-500 group-hover:text-gray-700">Lifetime Guarantee</span>
                        </a>
                      </div>
                    </form>
                  </section>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
`,l={name:"Zip Tote Basket",price:"$220",rating:3.9,href:"#",description:"The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.",imageSrc:"https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-03-product-04.jpg",imageAlt:"Back angled view with bag open and handles to the side.",colors:[{name:"Washed Black",bgColor:"bg-gray-700",selectedColor:"ring-gray-700"},{name:"White",bgColor:"bg-white",selectedColor:"ring-gray-400"},{name:"Washed Gray",bgColor:"bg-gray-500",selectedColor:"ring-gray-500"}]};function j(...i){return i.filter(Boolean).join(" ")}function I(){const[i,s]=n.useState(!1),[c,m]=n.useState(l.colors[0]);return e.jsxs(h,{open:i,onClose:s,className:"relative z-10",children:[e.jsx(f,{transition:!0,className:"fixed inset-0 hidden bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in md:block"}),e.jsx("div",{className:"fixed inset-0 z-10 w-screen overflow-y-auto",children:e.jsx("div",{className:"flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4",children:e.jsx(y,{transition:!0,className:"flex w-full transform text-left text-base transition data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in md:my-8 md:max-w-2xl md:px-4 data-closed:md:translate-y-0 data-closed:md:scale-95 lg:max-w-4xl",children:e.jsxs("div",{className:"relative flex w-full items-center overflow-hidden bg-white px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8",children:[e.jsxs("button",{type:"button",onClick:()=>s(!1),className:"absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8",children:[e.jsx("span",{className:"sr-only",children:"Close"}),e.jsx(b,{"aria-hidden":"true",className:"size-6"})]}),e.jsxs("div",{className:"grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8",children:[e.jsx("div",{className:"sm:col-span-4 lg:col-span-5",children:e.jsx("img",{alt:l.imageAlt,src:l.imageSrc,className:"aspect-square w-full rounded-lg bg-gray-100 object-cover"})}),e.jsxs("div",{className:"sm:col-span-8 lg:col-span-7",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900 sm:pr-12",children:l.name}),e.jsxs("section",{"aria-labelledby":"information-heading",className:"mt-3",children:[e.jsx("h3",{id:"information-heading",className:"sr-only",children:"Product information"}),e.jsx("p",{className:"text-2xl text-gray-900",children:l.price}),e.jsxs("div",{className:"mt-3",children:[e.jsx("h4",{className:"sr-only",children:"Reviews"}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"flex items-center",children:[0,1,2,3,4].map(t=>e.jsx(v,{"aria-hidden":"true",className:j(l.rating>t?"text-gray-400":"text-gray-200","size-5 shrink-0")},t))}),e.jsxs("p",{className:"sr-only",children:[l.rating," out of 5 stars"]})]})]}),e.jsxs("div",{className:"mt-6",children:[e.jsx("h4",{className:"sr-only",children:"Description"}),e.jsx("p",{className:"text-sm text-gray-700",children:l.description})]})]}),e.jsxs("section",{"aria-labelledby":"options-heading",className:"mt-6",children:[e.jsx("h3",{id:"options-heading",className:"sr-only",children:"Product options"}),e.jsxs("form",{children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium text-gray-600",children:"Color"}),e.jsx("fieldset",{"aria-label":"Choose a color",className:"mt-2",children:e.jsx(g,{value:c,onChange:m,className:"flex items-center gap-x-3",children:l.colors.map(t=>e.jsx(u,{value:t,"aria-label":t.name,className:j(t.selectedColor,"relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-hidden data-checked:ring-2 data-focus:data-checked:ring-3 data-focus:data-checked:ring-offset-1"),children:e.jsx("span",{"aria-hidden":"true",className:j(t.bgColor,"size-8 rounded-full border border-black/10")})},t.name))})})]}),e.jsx("div",{className:"mt-6",children:e.jsx("button",{type:"submit",className:"flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 focus:outline-hidden",children:"Add to bag"})}),e.jsx("p",{className:"absolute top-4 left-4 text-center sm:static sm:mt-6",children:e.jsx("a",{href:l.href,className:"font-medium text-indigo-600 hover:text-indigo-500",children:"View full details"})})]})]})]})]})]})})})})]})}const L=`'use client'

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, Radio, RadioGroup } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/20/solid'

const product = {
  name: 'Zip Tote Basket',
  price: '$220',
  rating: 3.9,
  href: '#',
  description:
    'The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.',
  imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-03-product-04.jpg',
  imageAlt: 'Back angled view with bag open and handles to the side.',
  colors: [
    { name: 'Washed Black', bgColor: 'bg-gray-700', selectedColor: 'ring-gray-700' },
    { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400' },
    { name: 'Washed Gray', bgColor: 'bg-gray-500', selectedColor: 'ring-gray-500' },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [open, setOpen] = useState(false)
  const [selectedColor, setSelectedColor] = useState(product.colors[0])

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 hidden bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in md:block"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
          <DialogPanel
            transition
            className="flex w-full transform text-left text-base transition data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in md:my-8 md:max-w-2xl md:px-4 data-closed:md:translate-y-0 data-closed:md:scale-95 lg:max-w-4xl"
          >
            <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
              >
                <span className="sr-only">Close</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>

              <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                <div className="sm:col-span-4 lg:col-span-5">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="aspect-square w-full rounded-lg bg-gray-100 object-cover"
                  />
                </div>
                <div className="sm:col-span-8 lg:col-span-7">
                  <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">{product.name}</h2>

                  <section aria-labelledby="information-heading" className="mt-3">
                    <h3 id="information-heading" className="sr-only">
                      Product information
                    </h3>

                    <p className="text-2xl text-gray-900">{product.price}</p>

                    {/* Reviews */}
                    <div className="mt-3">
                      <h4 className="sr-only">Reviews</h4>
                      <div className="flex items-center">
                        <div className="flex items-center">
                          {[0, 1, 2, 3, 4].map((rating) => (
                            <StarIcon
                              key={rating}
                              aria-hidden="true"
                              className={classNames(
                                product.rating > rating ? 'text-gray-400' : 'text-gray-200',
                                'size-5 shrink-0',
                              )}
                            />
                          ))}
                        </div>
                        <p className="sr-only">{product.rating} out of 5 stars</p>
                      </div>
                    </div>

                    <div className="mt-6">
                      <h4 className="sr-only">Description</h4>

                      <p className="text-sm text-gray-700">{product.description}</p>
                    </div>
                  </section>

                  <section aria-labelledby="options-heading" className="mt-6">
                    <h3 id="options-heading" className="sr-only">
                      Product options
                    </h3>

                    <form>
                      {/* Colors */}
                      <div>
                        <h4 className="text-sm font-medium text-gray-600">Color</h4>

                        <fieldset aria-label="Choose a color" className="mt-2">
                          <RadioGroup
                            value={selectedColor}
                            onChange={setSelectedColor}
                            className="flex items-center gap-x-3"
                          >
                            {product.colors.map((color) => (
                              <Radio
                                key={color.name}
                                value={color}
                                aria-label={color.name}
                                className={classNames(
                                  color.selectedColor,
                                  'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-hidden data-checked:ring-2 data-focus:data-checked:ring-3 data-focus:data-checked:ring-offset-1',
                                )}
                              >
                                <span
                                  aria-hidden="true"
                                  className={classNames(color.bgColor, 'size-8 rounded-full border border-black/10')}
                                />
                              </Radio>
                            ))}
                          </RadioGroup>
                        </fieldset>
                      </div>

                      <div className="mt-6">
                        <button
                          type="submit"
                          className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 focus:outline-hidden"
                        >
                          Add to bag
                        </button>
                      </div>

                      <p className="absolute top-4 left-4 text-center sm:static sm:mt-6">
                        <a href={product.href} className="font-medium text-indigo-600 hover:text-indigo-500">
                          View full details
                        </a>
                      </p>
                    </form>
                  </section>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
`,Q=()=>{const i=[{id:"01",name:"With color and size selector",component:e.jsx(z,{}),raw:R},{id:"02",name:"With color selector, size selector, and details link",component:e.jsx(B,{}),raw:X},{id:"03",name:"With large size selector",component:e.jsx(P,{}),raw:A},{id:"04",name:"With color selector and description",component:e.jsx(I,{}),raw:L}];return e.jsx("div",{className:"space-y-10 pb-20",children:i.map(s=>e.jsxs("section",{children:[e.jsxs("h2",{className:"mb-4 text-lg font-bold text-gray-800",children:[s.id,". ",s.name]}),e.jsx(w,{name:s.name,code:s.raw,children:s.component})]},s.id))})};export{Q as default};
