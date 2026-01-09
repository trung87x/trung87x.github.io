import{j as e}from"./index-CvCVbuS9.js";import{F as r,P as i}from"./PreviewWrapper-TzFvRoPZ.js";import{F as d}from"./EllipsisVerticalIcon-DspHqTXt.js";import{F as m}from"./CheckCircleIcon-B2t_uyUG.js";import{l,f as c,y as n,g as t}from"./menu-DqpGavi0.js";import"./floating-CjydGm1Z.js";import"./element-movement-BT6A7GGi.js";import"./bugs-qQ_SbDk4.js";import"./use-resolve-button-type-J0J8N5g4.js";import"./use-text-value-CB9rzUUM.js";import"./use-tree-walker-_f7mgbza.js";import"./label-CY_Q6YdE.js";const o=[{number:"WU88191111",href:"#",invoiceHref:"#",createdDate:"Jul 6, 2021",createdDatetime:"2021-07-06",deliveredDate:"July 12, 2021",deliveredDatetime:"2021-07-12",total:"$160.00",products:[{id:1,name:"Micro Backpack",description:"Are you a minimalist looking for a compact carry option? The Micro Backpack is the perfect size for your essential everyday carry items. Wear it like a backpack or carry it like a satchel for all-day use.",href:"#",price:"$70.00",imageSrc:"https://tailwindui.com/plus-assets/img/ecommerce-images/order-history-page-03-product-01.jpg",imageAlt:"Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps."}]}];function x(){return e.jsx("div",{className:"bg-white",children:e.jsxs("div",{className:"py-16 sm:py-24",children:[e.jsx("div",{className:"mx-auto max-w-7xl sm:px-2 lg:px-8",children:e.jsxs("div",{className:"mx-auto max-w-2xl px-4 lg:max-w-4xl lg:px-0",children:[e.jsx("h1",{className:"text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl",children:"Order history"}),e.jsx("p",{className:"mt-2 text-sm text-gray-500",children:"Check the status of recent orders, manage returns, and discover similar products."})]})}),e.jsxs("div",{className:"mt-16",children:[e.jsx("h2",{className:"sr-only",children:"Recent orders"}),e.jsx("div",{className:"mx-auto max-w-7xl sm:px-2 lg:px-8",children:e.jsx("div",{className:"mx-auto max-w-2xl space-y-8 sm:px-4 lg:max-w-4xl lg:px-0",children:o.map(s=>e.jsxs("div",{className:"border-t border-b border-gray-200 bg-white shadow-xs sm:rounded-lg sm:border",children:[e.jsxs("h3",{className:"sr-only",children:["Order placed on ",e.jsx("time",{dateTime:s.createdDatetime,children:s.createdDate})]}),e.jsxs("div",{className:"flex items-center border-b border-gray-200 p-4 sm:grid sm:grid-cols-4 sm:gap-x-6 sm:p-6",children:[e.jsxs("dl",{className:"grid flex-1 grid-cols-2 gap-x-6 text-sm sm:col-span-3 sm:grid-cols-3 lg:col-span-2",children:[e.jsxs("div",{children:[e.jsx("dt",{className:"font-medium text-gray-900",children:"Order number"}),e.jsx("dd",{className:"mt-1 text-gray-500",children:s.number})]}),e.jsxs("div",{className:"hidden sm:block",children:[e.jsx("dt",{className:"font-medium text-gray-900",children:"Date placed"}),e.jsx("dd",{className:"mt-1 text-gray-500",children:e.jsx("time",{dateTime:s.createdDatetime,children:s.createdDate})})]}),e.jsxs("div",{children:[e.jsx("dt",{className:"font-medium text-gray-900",children:"Total amount"}),e.jsx("dd",{className:"mt-1 font-medium text-gray-900",children:s.total})]})]}),e.jsxs(l,{as:"div",className:"relative flex justify-end lg:hidden",children:[e.jsx("div",{className:"flex items-center",children:e.jsxs(c,{className:"-m-2 flex items-center p-2 text-gray-400 hover:text-gray-500",children:[e.jsxs("span",{className:"sr-only",children:["Options for order ",s.number]}),e.jsx(d,{"aria-hidden":"true",className:"size-6"})]})}),e.jsx(n,{transition:!0,className:"absolute right-0 z-10 mt-2 w-40 origin-bottom-right rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in",children:e.jsxs("div",{className:"py-1",children:[e.jsx(t,{children:e.jsx("a",{href:s.href,className:"block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden",children:"View"})}),e.jsx(t,{children:e.jsx("a",{href:s.invoiceHref,className:"block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden",children:"Invoice"})})]})})]}),e.jsxs("div",{className:"hidden lg:col-span-2 lg:flex lg:items-center lg:justify-end lg:space-x-4",children:[e.jsxs("a",{href:s.href,className:"flex items-center justify-center rounded-md border border-gray-300 bg-white px-2.5 py-2 text-sm font-medium text-gray-700 shadow-xs hover:bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden",children:[e.jsx("span",{children:"View Order"}),e.jsx("span",{className:"sr-only",children:s.number})]}),e.jsxs("a",{href:s.invoiceHref,className:"flex items-center justify-center rounded-md border border-gray-300 bg-white px-2.5 py-2 text-sm font-medium text-gray-700 shadow-xs hover:bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden",children:[e.jsx("span",{children:"View Invoice"}),e.jsxs("span",{className:"sr-only",children:["for order ",s.number]})]})]})]}),e.jsx("h4",{className:"sr-only",children:"Items"}),e.jsx("ul",{role:"list",className:"divide-y divide-gray-200",children:s.products.map(a=>e.jsxs("li",{className:"p-4 sm:p-6",children:[e.jsxs("div",{className:"flex items-center sm:items-start",children:[e.jsx("div",{className:"size-20 shrink-0 overflow-hidden rounded-lg bg-gray-200 sm:size-40",children:e.jsx("img",{alt:a.imageAlt,src:a.imageSrc,className:"size-full object-cover"})}),e.jsxs("div",{className:"ml-6 flex-1 text-sm",children:[e.jsxs("div",{className:"font-medium text-gray-900 sm:flex sm:justify-between",children:[e.jsx("h5",{children:a.name}),e.jsx("p",{className:"mt-2 sm:mt-0",children:a.price})]}),e.jsx("p",{className:"hidden text-gray-500 sm:mt-2 sm:block",children:a.description})]})]}),e.jsxs("div",{className:"mt-6 sm:flex sm:justify-between",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx(m,{"aria-hidden":"true",className:"size-5 text-green-500"}),e.jsxs("p",{className:"ml-2 text-sm font-medium text-gray-500",children:["Delivered on ",e.jsx("time",{dateTime:s.deliveredDatetime,children:s.deliveredDate})]})]}),e.jsxs("div",{className:"mt-6 flex items-center divide-x divide-gray-200 border-t border-gray-200 pt-4 text-sm font-medium sm:mt-0 sm:ml-4 sm:border-none sm:pt-0",children:[e.jsx("div",{className:"flex flex-1 justify-center pr-4",children:e.jsx("a",{href:a.href,className:"whitespace-nowrap text-indigo-600 hover:text-indigo-500",children:"View product"})}),e.jsx("div",{className:"flex flex-1 justify-center pl-4",children:e.jsx("a",{href:"#",className:"whitespace-nowrap text-indigo-600 hover:text-indigo-500",children:"Buy again"})})]})]})]},a.id))})]},s.number))})})]})]})})}const p=`import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline'
import { CheckCircleIcon } from '@heroicons/react/20/solid'

const orders = [
  {
    number: 'WU88191111',
    href: '#',
    invoiceHref: '#',
    createdDate: 'Jul 6, 2021',
    createdDatetime: '2021-07-06',
    deliveredDate: 'July 12, 2021',
    deliveredDatetime: '2021-07-12',
    total: '$160.00',
    products: [
      {
        id: 1,
        name: 'Micro Backpack',
        description:
          'Are you a minimalist looking for a compact carry option? The Micro Backpack is the perfect size for your essential everyday carry items. Wear it like a backpack or carry it like a satchel for all-day use.',
        href: '#',
        price: '$70.00',
        imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/order-history-page-03-product-01.jpg',
        imageAlt:
          'Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.',
      },
      // More products...
    ],
  },
  // More orders...
]

export default function Example() {
  return (
    <div className="bg-white">
      <div className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl sm:px-2 lg:px-8">
          <div className="mx-auto max-w-2xl px-4 lg:max-w-4xl lg:px-0">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Order history</h1>
            <p className="mt-2 text-sm text-gray-500">
              Check the status of recent orders, manage returns, and discover similar products.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="sr-only">Recent orders</h2>
          <div className="mx-auto max-w-7xl sm:px-2 lg:px-8">
            <div className="mx-auto max-w-2xl space-y-8 sm:px-4 lg:max-w-4xl lg:px-0">
              {orders.map((order) => (
                <div
                  key={order.number}
                  className="border-t border-b border-gray-200 bg-white shadow-xs sm:rounded-lg sm:border"
                >
                  <h3 className="sr-only">
                    Order placed on <time dateTime={order.createdDatetime}>{order.createdDate}</time>
                  </h3>

                  <div className="flex items-center border-b border-gray-200 p-4 sm:grid sm:grid-cols-4 sm:gap-x-6 sm:p-6">
                    <dl className="grid flex-1 grid-cols-2 gap-x-6 text-sm sm:col-span-3 sm:grid-cols-3 lg:col-span-2">
                      <div>
                        <dt className="font-medium text-gray-900">Order number</dt>
                        <dd className="mt-1 text-gray-500">{order.number}</dd>
                      </div>
                      <div className="hidden sm:block">
                        <dt className="font-medium text-gray-900">Date placed</dt>
                        <dd className="mt-1 text-gray-500">
                          <time dateTime={order.createdDatetime}>{order.createdDate}</time>
                        </dd>
                      </div>
                      <div>
                        <dt className="font-medium text-gray-900">Total amount</dt>
                        <dd className="mt-1 font-medium text-gray-900">{order.total}</dd>
                      </div>
                    </dl>

                    <Menu as="div" className="relative flex justify-end lg:hidden">
                      <div className="flex items-center">
                        <MenuButton className="-m-2 flex items-center p-2 text-gray-400 hover:text-gray-500">
                          <span className="sr-only">Options for order {order.number}</span>
                          <EllipsisVerticalIcon aria-hidden="true" className="size-6" />
                        </MenuButton>
                      </div>

                      <MenuItems
                        transition
                        className="absolute right-0 z-10 mt-2 w-40 origin-bottom-right rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                      >
                        <div className="py-1">
                          <MenuItem>
                            <a
                              href={order.href}
                              className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                            >
                              View
                            </a>
                          </MenuItem>
                          <MenuItem>
                            <a
                              href={order.invoiceHref}
                              className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                            >
                              Invoice
                            </a>
                          </MenuItem>
                        </div>
                      </MenuItems>
                    </Menu>

                    <div className="hidden lg:col-span-2 lg:flex lg:items-center lg:justify-end lg:space-x-4">
                      <a
                        href={order.href}
                        className="flex items-center justify-center rounded-md border border-gray-300 bg-white px-2.5 py-2 text-sm font-medium text-gray-700 shadow-xs hover:bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
                      >
                        <span>View Order</span>
                        <span className="sr-only">{order.number}</span>
                      </a>
                      <a
                        href={order.invoiceHref}
                        className="flex items-center justify-center rounded-md border border-gray-300 bg-white px-2.5 py-2 text-sm font-medium text-gray-700 shadow-xs hover:bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
                      >
                        <span>View Invoice</span>
                        <span className="sr-only">for order {order.number}</span>
                      </a>
                    </div>
                  </div>

                  {/* Products */}
                  <h4 className="sr-only">Items</h4>
                  <ul role="list" className="divide-y divide-gray-200">
                    {order.products.map((product) => (
                      <li key={product.id} className="p-4 sm:p-6">
                        <div className="flex items-center sm:items-start">
                          <div className="size-20 shrink-0 overflow-hidden rounded-lg bg-gray-200 sm:size-40">
                            <img alt={product.imageAlt} src={product.imageSrc} className="size-full object-cover" />
                          </div>
                          <div className="ml-6 flex-1 text-sm">
                            <div className="font-medium text-gray-900 sm:flex sm:justify-between">
                              <h5>{product.name}</h5>
                              <p className="mt-2 sm:mt-0">{product.price}</p>
                            </div>
                            <p className="hidden text-gray-500 sm:mt-2 sm:block">{product.description}</p>
                          </div>
                        </div>

                        <div className="mt-6 sm:flex sm:justify-between">
                          <div className="flex items-center">
                            <CheckCircleIcon aria-hidden="true" className="size-5 text-green-500" />
                            <p className="ml-2 text-sm font-medium text-gray-500">
                              Delivered on <time dateTime={order.deliveredDatetime}>{order.deliveredDate}</time>
                            </p>
                          </div>

                          <div className="mt-6 flex items-center divide-x divide-gray-200 border-t border-gray-200 pt-4 text-sm font-medium sm:mt-0 sm:ml-4 sm:border-none sm:pt-0">
                            <div className="flex flex-1 justify-center pr-4">
                              <a
                                href={product.href}
                                className="whitespace-nowrap text-indigo-600 hover:text-indigo-500"
                              >
                                View product
                              </a>
                            </div>
                            <div className="flex flex-1 justify-center pl-4">
                              <a href="#" className="whitespace-nowrap text-indigo-600 hover:text-indigo-500">
                                Buy again
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
`,u=[{number:"WU88191111",date:"January 22, 2021",datetime:"2021-01-22",invoiceHref:"#",total:"$238.00",products:[{id:1,name:"Machined Pen and Pencil Set",href:"#",price:"$70.00",status:"Delivered Jan 25, 2021",imageSrc:"https://tailwindui.com/plus-assets/img/ecommerce-images/order-history-page-02-product-01.jpg",imageAlt:"Detail of mechanical pencil tip with machined black steel shaft and chrome lead tip."}]}];function h(){return e.jsx("div",{className:"bg-white",children:e.jsxs("div",{className:"mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:pb-24",children:[e.jsxs("div",{className:"max-w-xl",children:[e.jsx("h1",{className:"text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl",children:"Order history"}),e.jsx("p",{className:"mt-2 text-sm text-gray-500",children:"Check the status of recent orders, manage returns, and download invoices."})]}),e.jsxs("div",{className:"mt-16",children:[e.jsx("h2",{className:"sr-only",children:"Recent orders"}),e.jsx("div",{className:"space-y-20",children:u.map(s=>e.jsxs("div",{children:[e.jsxs("h3",{className:"sr-only",children:["Order placed on ",e.jsx("time",{dateTime:s.datetime,children:s.date})]}),e.jsxs("div",{className:"rounded-lg bg-gray-50 px-4 py-6 sm:flex sm:items-center sm:justify-between sm:space-x-6 sm:px-6 lg:space-x-8",children:[e.jsxs("dl",{className:"flex-auto divide-y divide-gray-200 text-sm text-gray-600 sm:grid sm:grid-cols-3 sm:gap-x-6 sm:divide-y-0 lg:w-1/2 lg:flex-none lg:gap-x-8",children:[e.jsxs("div",{className:"max-sm:flex max-sm:justify-between max-sm:py-6 max-sm:first:pt-0 max-sm:last:pb-0",children:[e.jsx("dt",{className:"font-medium text-gray-900",children:"Date placed"}),e.jsx("dd",{className:"sm:mt-1",children:e.jsx("time",{dateTime:s.datetime,children:s.date})})]}),e.jsxs("div",{className:"max-sm:flex max-sm:justify-between max-sm:py-6 max-sm:first:pt-0 max-sm:last:pb-0",children:[e.jsx("dt",{className:"font-medium text-gray-900",children:"Order number"}),e.jsx("dd",{className:"sm:mt-1",children:s.number})]}),e.jsxs("div",{className:"max-sm:flex max-sm:justify-between max-sm:py-6 max-sm:first:pt-0 max-sm:last:pb-0",children:[e.jsx("dt",{className:"font-medium text-gray-900",children:"Total amount"}),e.jsx("dd",{className:"font-medium text-gray-900 sm:mt-1",children:s.total})]})]}),e.jsxs("a",{href:s.invoiceHref,className:"mt-6 flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-xs hover:bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden sm:mt-0 sm:w-auto",children:["View Invoice",e.jsxs("span",{className:"sr-only",children:["for order ",s.number]})]})]}),e.jsxs("table",{className:"mt-4 w-full text-gray-500 sm:mt-6",children:[e.jsx("caption",{className:"sr-only",children:"Products"}),e.jsx("thead",{className:"sr-only text-left text-sm text-gray-500 sm:not-sr-only",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"py-3 pr-8 font-normal sm:w-2/5 lg:w-1/3",children:"Product"}),e.jsx("th",{scope:"col",className:"hidden w-1/5 py-3 pr-8 font-normal sm:table-cell",children:"Price"}),e.jsx("th",{scope:"col",className:"hidden py-3 pr-8 font-normal sm:table-cell",children:"Status"}),e.jsx("th",{scope:"col",className:"w-0 py-3 text-right font-normal",children:"Info"})]})}),e.jsx("tbody",{className:"divide-y divide-gray-200 border-b border-gray-200 text-sm sm:border-t",children:s.products.map(a=>e.jsxs("tr",{children:[e.jsx("td",{className:"py-6 pr-8",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("img",{alt:a.imageAlt,src:a.imageSrc,className:"mr-6 size-16 rounded-sm object-cover"}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-gray-900",children:a.name}),e.jsx("div",{className:"mt-1 sm:hidden",children:a.price})]})]})}),e.jsx("td",{className:"hidden py-6 pr-8 sm:table-cell",children:a.price}),e.jsx("td",{className:"hidden py-6 pr-8 sm:table-cell",children:a.status}),e.jsx("td",{className:"py-6 text-right font-medium whitespace-nowrap",children:e.jsxs("a",{href:a.href,className:"text-indigo-600",children:["View",e.jsx("span",{className:"hidden lg:inline",children:" Product"}),e.jsxs("span",{className:"sr-only",children:[", ",a.name]})]})})]},a.id))})]})]},s.number))})]})]})})}const g=`const orders = [
  {
    number: 'WU88191111',
    date: 'January 22, 2021',
    datetime: '2021-01-22',
    invoiceHref: '#',
    total: '$238.00',
    products: [
      {
        id: 1,
        name: 'Machined Pen and Pencil Set',
        href: '#',
        price: '$70.00',
        status: 'Delivered Jan 25, 2021',
        imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/order-history-page-02-product-01.jpg',
        imageAlt: 'Detail of mechanical pencil tip with machined black steel shaft and chrome lead tip.',
      },
      // More products...
    ],
  },
  // More orders...
]

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:pb-24">
        <div className="max-w-xl">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Order history</h1>
          <p className="mt-2 text-sm text-gray-500">
            Check the status of recent orders, manage returns, and download invoices.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="sr-only">Recent orders</h2>

          <div className="space-y-20">
            {orders.map((order) => (
              <div key={order.number}>
                <h3 className="sr-only">
                  Order placed on <time dateTime={order.datetime}>{order.date}</time>
                </h3>

                <div className="rounded-lg bg-gray-50 px-4 py-6 sm:flex sm:items-center sm:justify-between sm:space-x-6 sm:px-6 lg:space-x-8">
                  <dl className="flex-auto divide-y divide-gray-200 text-sm text-gray-600 sm:grid sm:grid-cols-3 sm:gap-x-6 sm:divide-y-0 lg:w-1/2 lg:flex-none lg:gap-x-8">
                    <div className="max-sm:flex max-sm:justify-between max-sm:py-6 max-sm:first:pt-0 max-sm:last:pb-0">
                      <dt className="font-medium text-gray-900">Date placed</dt>
                      <dd className="sm:mt-1">
                        <time dateTime={order.datetime}>{order.date}</time>
                      </dd>
                    </div>
                    <div className="max-sm:flex max-sm:justify-between max-sm:py-6 max-sm:first:pt-0 max-sm:last:pb-0">
                      <dt className="font-medium text-gray-900">Order number</dt>
                      <dd className="sm:mt-1">{order.number}</dd>
                    </div>
                    <div className="max-sm:flex max-sm:justify-between max-sm:py-6 max-sm:first:pt-0 max-sm:last:pb-0">
                      <dt className="font-medium text-gray-900">Total amount</dt>
                      <dd className="font-medium text-gray-900 sm:mt-1">{order.total}</dd>
                    </div>
                  </dl>
                  <a
                    href={order.invoiceHref}
                    className="mt-6 flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-xs hover:bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden sm:mt-0 sm:w-auto"
                  >
                    View Invoice
                    <span className="sr-only">for order {order.number}</span>
                  </a>
                </div>

                <table className="mt-4 w-full text-gray-500 sm:mt-6">
                  <caption className="sr-only">Products</caption>
                  <thead className="sr-only text-left text-sm text-gray-500 sm:not-sr-only">
                    <tr>
                      <th scope="col" className="py-3 pr-8 font-normal sm:w-2/5 lg:w-1/3">
                        Product
                      </th>
                      <th scope="col" className="hidden w-1/5 py-3 pr-8 font-normal sm:table-cell">
                        Price
                      </th>
                      <th scope="col" className="hidden py-3 pr-8 font-normal sm:table-cell">
                        Status
                      </th>
                      <th scope="col" className="w-0 py-3 text-right font-normal">
                        Info
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 border-b border-gray-200 text-sm sm:border-t">
                    {order.products.map((product) => (
                      <tr key={product.id}>
                        <td className="py-6 pr-8">
                          <div className="flex items-center">
                            <img
                              alt={product.imageAlt}
                              src={product.imageSrc}
                              className="mr-6 size-16 rounded-sm object-cover"
                            />
                            <div>
                              <div className="font-medium text-gray-900">{product.name}</div>
                              <div className="mt-1 sm:hidden">{product.price}</div>
                            </div>
                          </div>
                        </td>
                        <td className="hidden py-6 pr-8 sm:table-cell">{product.price}</td>
                        <td className="hidden py-6 pr-8 sm:table-cell">{product.status}</td>
                        <td className="py-6 text-right font-medium whitespace-nowrap">
                          <a href={product.href} className="text-indigo-600">
                            View<span className="hidden lg:inline"> Product</span>
                            <span className="sr-only">, {product.name}</span>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
`,f=[{number:"WU88191111",date:"January 22, 2021",datetime:"2021-01-22",href:"#",invoiceHref:"#",total:"$302.00",products:[{id:1,name:"Nomad Tumbler",description:"This durable double-walled insulated tumbler keeps your beverages at the perfect temperature all day long. Hot, cold, or even lukewarm if you're weird like that, this bottle is ready for your next adventure.",href:"#",price:"$35.00",status:"out-for-delivery",date:"January 5, 2021",datetime:"2021-01-05",imageSrc:"https://tailwindui.com/plus-assets/img/ecommerce-images/order-history-page-06-product-01.jpg",imageAlt:"Olive drab green insulated bottle with flared screw lid and flat top."}]}];function y(){return e.jsx("div",{className:"bg-white",children:e.jsxs("div",{className:"mx-auto max-w-4xl py-16 sm:px-6 sm:py-24",children:[e.jsxs("div",{className:"px-4 sm:px-0",children:[e.jsx("h1",{className:"text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl",children:"Order history"}),e.jsx("p",{className:"mt-2 text-sm text-gray-500",children:"Check the status of recent orders, manage returns, and download invoices."})]}),e.jsxs("div",{className:"mt-16",children:[e.jsx("h2",{className:"sr-only",children:"Recent orders"}),e.jsx("div",{className:"space-y-16 sm:space-y-24",children:f.map(s=>e.jsxs("div",{children:[e.jsxs("h3",{className:"sr-only",children:["Order placed on ",e.jsx("time",{dateTime:s.datetime,children:s.date})]}),e.jsxs("div",{className:"bg-gray-50 px-4 py-6 sm:rounded-lg sm:p-6 md:flex md:items-center md:justify-between md:space-x-6 lg:space-x-8",children:[e.jsxs("dl",{className:"flex-auto divide-y divide-gray-200 text-sm text-gray-600 md:grid md:grid-cols-3 md:gap-x-6 md:divide-y-0 lg:w-1/2 lg:flex-none lg:gap-x-8",children:[e.jsxs("div",{className:"max-md:flex max-md:justify-between max-md:py-4 max-md:first:pt-0 max-md:last:pb-0",children:[e.jsx("dt",{className:"font-medium text-gray-900",children:"Order number"}),e.jsx("dd",{className:"md:mt-1",children:s.number})]}),e.jsxs("div",{className:"max-md:flex max-md:justify-between max-md:py-4 max-md:first:pt-0 max-md:last:pb-0",children:[e.jsx("dt",{className:"font-medium text-gray-900",children:"Date placed"}),e.jsx("dd",{className:"md:mt-1",children:e.jsx("time",{dateTime:s.datetime,children:s.date})})]}),e.jsxs("div",{className:"max-md:flex max-md:justify-between max-md:py-4 max-md:first:pt-0 max-md:last:pb-0",children:[e.jsx("dt",{className:"font-medium text-gray-900",children:"Total amount"}),e.jsx("dd",{className:"font-medium text-gray-900 md:mt-1",children:s.total})]})]}),e.jsxs("div",{className:"mt-6 space-y-4 sm:flex sm:space-y-0 sm:space-x-4 md:mt-0",children:[e.jsxs("a",{href:s.href,className:"flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-xs hover:bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden md:w-auto",children:["View Order",e.jsx("span",{className:"sr-only",children:s.number})]}),e.jsxs("a",{href:s.invoiceHref,className:"flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-xs hover:bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden md:w-auto",children:["View Invoice",e.jsxs("span",{className:"sr-only",children:["for order ",s.number]})]})]})]}),e.jsx("div",{className:"mt-6 flow-root px-4 sm:mt-10 sm:px-0",children:e.jsx("div",{className:"-my-6 divide-y divide-gray-200 sm:-my-10",children:s.products.map(a=>e.jsxs("div",{className:"flex py-6 sm:py-10",children:[e.jsxs("div",{className:"min-w-0 flex-1 lg:flex lg:flex-col",children:[e.jsxs("div",{className:"lg:flex-1",children:[e.jsxs("div",{className:"sm:flex",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-gray-900",children:a.name}),e.jsx("p",{className:"mt-2 hidden text-sm text-gray-500 sm:block",children:a.description})]}),e.jsx("p",{className:"mt-1 font-medium text-gray-900 sm:mt-0 sm:ml-6",children:a.price})]}),e.jsxs("div",{className:"mt-2 flex text-sm font-medium sm:mt-4",children:[e.jsx("a",{href:a.href,className:"text-indigo-600 hover:text-indigo-500",children:"View Product"}),e.jsx("div",{className:"ml-4 border-l border-gray-200 pl-4 sm:ml-6 sm:pl-6",children:e.jsx("a",{href:"#",className:"text-indigo-600 hover:text-indigo-500",children:"Buy Again"})})]})]}),e.jsx("div",{className:"mt-6 font-medium",children:a.status==="delivered"?e.jsxs("div",{className:"flex space-x-2",children:[e.jsx(r,{"aria-hidden":"true",className:"size-6 flex-none text-green-500"}),e.jsxs("p",{children:["Delivered",e.jsxs("span",{className:"hidden sm:inline",children:[" ","on ",e.jsx("time",{dateTime:a.datetime,children:a.date})]})]})]}):a.status==="out-for-delivery"?e.jsx("p",{children:"Out for delivery"}):a.status==="cancelled"?e.jsx("p",{className:"text-gray-500",children:"Cancelled"}):null})]}),e.jsx("div",{className:"ml-4 shrink-0 sm:order-first sm:m-0 sm:mr-6",children:e.jsx("img",{alt:a.imageAlt,src:a.imageSrc,className:"col-start-2 col-end-3 size-20 rounded-lg object-cover sm:col-start-1 sm:row-span-2 sm:row-start-1 sm:size-40 lg:size-52"})})]},a.id))})})]},s.number))})]})]})})}const v=`import { CheckIcon } from '@heroicons/react/24/outline'

const orders = [
  {
    number: 'WU88191111',
    date: 'January 22, 2021',
    datetime: '2021-01-22',
    href: '#',
    invoiceHref: '#',
    total: '$302.00',
    products: [
      {
        id: 1,
        name: 'Nomad Tumbler',
        description:
          "This durable double-walled insulated tumbler keeps your beverages at the perfect temperature all day long. Hot, cold, or even lukewarm if you're weird like that, this bottle is ready for your next adventure.",
        href: '#',
        price: '$35.00',
        status: 'out-for-delivery',
        date: 'January 5, 2021',
        datetime: '2021-01-05',
        imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/order-history-page-06-product-01.jpg',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
      },
      // More products...
    ],
  },
  // More orders...
]

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-4xl py-16 sm:px-6 sm:py-24">
        <div className="px-4 sm:px-0">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Order history</h1>
          <p className="mt-2 text-sm text-gray-500">
            Check the status of recent orders, manage returns, and download invoices.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="sr-only">Recent orders</h2>

          <div className="space-y-16 sm:space-y-24">
            {orders.map((order) => (
              <div key={order.number}>
                <h3 className="sr-only">
                  Order placed on <time dateTime={order.datetime}>{order.date}</time>
                </h3>

                <div className="bg-gray-50 px-4 py-6 sm:rounded-lg sm:p-6 md:flex md:items-center md:justify-between md:space-x-6 lg:space-x-8">
                  <dl className="flex-auto divide-y divide-gray-200 text-sm text-gray-600 md:grid md:grid-cols-3 md:gap-x-6 md:divide-y-0 lg:w-1/2 lg:flex-none lg:gap-x-8">
                    <div className="max-md:flex max-md:justify-between max-md:py-4 max-md:first:pt-0 max-md:last:pb-0">
                      <dt className="font-medium text-gray-900">Order number</dt>
                      <dd className="md:mt-1">{order.number}</dd>
                    </div>
                    <div className="max-md:flex max-md:justify-between max-md:py-4 max-md:first:pt-0 max-md:last:pb-0">
                      <dt className="font-medium text-gray-900">Date placed</dt>
                      <dd className="md:mt-1">
                        <time dateTime={order.datetime}>{order.date}</time>
                      </dd>
                    </div>
                    <div className="max-md:flex max-md:justify-between max-md:py-4 max-md:first:pt-0 max-md:last:pb-0">
                      <dt className="font-medium text-gray-900">Total amount</dt>
                      <dd className="font-medium text-gray-900 md:mt-1">{order.total}</dd>
                    </div>
                  </dl>
                  <div className="mt-6 space-y-4 sm:flex sm:space-y-0 sm:space-x-4 md:mt-0">
                    <a
                      href={order.href}
                      className="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-xs hover:bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden md:w-auto"
                    >
                      View Order
                      <span className="sr-only">{order.number}</span>
                    </a>
                    <a
                      href={order.invoiceHref}
                      className="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-xs hover:bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden md:w-auto"
                    >
                      View Invoice
                      <span className="sr-only">for order {order.number}</span>
                    </a>
                  </div>
                </div>

                <div className="mt-6 flow-root px-4 sm:mt-10 sm:px-0">
                  <div className="-my-6 divide-y divide-gray-200 sm:-my-10">
                    {order.products.map((product) => (
                      <div key={product.id} className="flex py-6 sm:py-10">
                        <div className="min-w-0 flex-1 lg:flex lg:flex-col">
                          <div className="lg:flex-1">
                            <div className="sm:flex">
                              <div>
                                <h4 className="font-medium text-gray-900">{product.name}</h4>
                                <p className="mt-2 hidden text-sm text-gray-500 sm:block">{product.description}</p>
                              </div>
                              <p className="mt-1 font-medium text-gray-900 sm:mt-0 sm:ml-6">{product.price}</p>
                            </div>
                            <div className="mt-2 flex text-sm font-medium sm:mt-4">
                              <a href={product.href} className="text-indigo-600 hover:text-indigo-500">
                                View Product
                              </a>
                              <div className="ml-4 border-l border-gray-200 pl-4 sm:ml-6 sm:pl-6">
                                <a href="#" className="text-indigo-600 hover:text-indigo-500">
                                  Buy Again
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="mt-6 font-medium">
                            {product.status === 'delivered' ? (
                              <div className="flex space-x-2">
                                <CheckIcon aria-hidden="true" className="size-6 flex-none text-green-500" />
                                <p>
                                  Delivered
                                  <span className="hidden sm:inline">
                                    {' '}
                                    on <time dateTime={product.datetime}>{product.date}</time>
                                  </span>
                                </p>
                              </div>
                            ) : product.status === 'out-for-delivery' ? (
                              <p>Out for delivery</p>
                            ) : product.status === 'cancelled' ? (
                              <p className="text-gray-500">Cancelled</p>
                            ) : null}
                          </div>
                        </div>
                        <div className="ml-4 shrink-0 sm:order-first sm:m-0 sm:mr-6">
                          <img
                            alt={product.imageAlt}
                            src={product.imageSrc}
                            className="col-start-2 col-end-3 size-20 rounded-lg object-cover sm:col-start-1 sm:row-span-2 sm:row-start-1 sm:size-40 lg:size-52"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
`,N=[{number:"4376",status:"Delivered on January 22, 2021",href:"#",invoiceHref:"#",products:[{id:1,name:"Machined Brass Puzzle",href:"#",price:"$95.00",color:"Brass",size:'3" x 3" x 3"',imageSrc:"https://tailwindui.com/plus-assets/img/ecommerce-images/order-history-page-07-product-01.jpg",imageAlt:"Brass puzzle in the shape of a jack with overlapping rounded posts."}]}];function b(){return e.jsx("div",{className:"bg-white",children:e.jsxs("div",{className:"mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24",children:[e.jsxs("div",{className:"max-w-xl",children:[e.jsx("h1",{id:"your-orders-heading",className:"text-3xl font-bold tracking-tight text-gray-900",children:"Your Orders"}),e.jsx("p",{className:"mt-2 text-sm text-gray-500",children:"Check the status of recent orders, manage returns, and discover similar products."})]}),e.jsx("div",{className:"mt-12 space-y-16 sm:mt-16",children:N.map(s=>e.jsxs("section",{"aria-labelledby":`${s.number}-heading`,children:[e.jsxs("div",{className:"space-y-1 md:flex md:items-baseline md:space-y-0 md:space-x-4",children:[e.jsxs("h2",{id:`${s.number}-heading`,className:"text-lg font-medium text-gray-900 md:shrink-0",children:["Order #",s.number]}),e.jsxs("div",{className:"space-y-5 sm:flex sm:items-baseline sm:justify-between sm:space-y-0 md:min-w-0 md:flex-1",children:[e.jsx("p",{className:"text-sm font-medium text-gray-500",children:s.status}),e.jsxs("div",{className:"flex text-sm font-medium",children:[e.jsx("a",{href:s.href,className:"text-indigo-600 hover:text-indigo-500",children:"Manage order"}),e.jsx("div",{className:"ml-4 border-l border-gray-200 pl-4 sm:ml-6 sm:pl-6",children:e.jsx("a",{href:s.invoiceHref,className:"text-indigo-600 hover:text-indigo-500",children:"View Invoice"})})]})]})]}),e.jsx("div",{className:"mt-6 -mb-6 flow-root divide-y divide-gray-200 border-t border-gray-200",children:s.products.map(a=>e.jsxs("div",{className:"py-6 sm:flex",children:[e.jsxs("div",{className:"flex space-x-4 sm:min-w-0 sm:flex-1 sm:space-x-6 lg:space-x-8",children:[e.jsx("img",{alt:a.imageAlt,src:a.imageSrc,className:"size-20 flex-none rounded-md object-cover sm:size-48"}),e.jsxs("div",{className:"min-w-0 flex-1 pt-1.5 sm:pt-0",children:[e.jsx("h3",{className:"text-sm font-medium text-gray-900",children:e.jsx("a",{href:a.href,children:a.name})}),e.jsxs("p",{className:"truncate text-sm text-gray-500",children:[e.jsx("span",{children:a.color})," ",e.jsx("span",{"aria-hidden":"true",className:"mx-1 text-gray-400",children:"·"})," ",e.jsx("span",{children:a.size})]}),e.jsx("p",{className:"mt-1 font-medium text-gray-900",children:a.price})]})]}),e.jsxs("div",{className:"mt-6 space-y-4 sm:mt-0 sm:ml-6 sm:w-40 sm:flex-none",children:[e.jsx("button",{type:"button",className:"flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-2.5 py-2 text-sm font-medium text-white shadow-xs hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden sm:w-full sm:grow-0",children:"Buy again"}),e.jsx("button",{type:"button",className:"flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-2.5 py-2 text-sm font-medium text-gray-700 shadow-xs hover:bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden sm:w-full sm:grow-0",children:"Shop similar"})]})]},a.id))})]},s.number))})]})})}const j=`const orders = [
  {
    number: '4376',
    status: 'Delivered on January 22, 2021',
    href: '#',
    invoiceHref: '#',
    products: [
      {
        id: 1,
        name: 'Machined Brass Puzzle',
        href: '#',
        price: '$95.00',
        color: 'Brass',
        size: '3" x 3" x 3"',
        imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/order-history-page-07-product-01.jpg',
        imageAlt: 'Brass puzzle in the shape of a jack with overlapping rounded posts.',
      },
      // More products...
    ],
  },
  // More orders...
]

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="max-w-xl">
          <h1 id="your-orders-heading" className="text-3xl font-bold tracking-tight text-gray-900">
            Your Orders
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Check the status of recent orders, manage returns, and discover similar products.
          </p>
        </div>

        <div className="mt-12 space-y-16 sm:mt-16">
          {orders.map((order) => (
            <section key={order.number} aria-labelledby={\`\${order.number}-heading\`}>
              <div className="space-y-1 md:flex md:items-baseline md:space-y-0 md:space-x-4">
                <h2 id={\`\${order.number}-heading\`} className="text-lg font-medium text-gray-900 md:shrink-0">
                  Order #{order.number}
                </h2>
                <div className="space-y-5 sm:flex sm:items-baseline sm:justify-between sm:space-y-0 md:min-w-0 md:flex-1">
                  <p className="text-sm font-medium text-gray-500">{order.status}</p>
                  <div className="flex text-sm font-medium">
                    <a href={order.href} className="text-indigo-600 hover:text-indigo-500">
                      Manage order
                    </a>
                    <div className="ml-4 border-l border-gray-200 pl-4 sm:ml-6 sm:pl-6">
                      <a href={order.invoiceHref} className="text-indigo-600 hover:text-indigo-500">
                        View Invoice
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 -mb-6 flow-root divide-y divide-gray-200 border-t border-gray-200">
                {order.products.map((product) => (
                  <div key={product.id} className="py-6 sm:flex">
                    <div className="flex space-x-4 sm:min-w-0 sm:flex-1 sm:space-x-6 lg:space-x-8">
                      <img
                        alt={product.imageAlt}
                        src={product.imageSrc}
                        className="size-20 flex-none rounded-md object-cover sm:size-48"
                      />
                      <div className="min-w-0 flex-1 pt-1.5 sm:pt-0">
                        <h3 className="text-sm font-medium text-gray-900">
                          <a href={product.href}>{product.name}</a>
                        </h3>
                        <p className="truncate text-sm text-gray-500">
                          <span>{product.color}</span>{' '}
                          <span aria-hidden="true" className="mx-1 text-gray-400">
                            &middot;
                          </span>{' '}
                          <span>{product.size}</span>
                        </p>
                        <p className="mt-1 font-medium text-gray-900">{product.price}</p>
                      </div>
                    </div>
                    <div className="mt-6 space-y-4 sm:mt-0 sm:ml-6 sm:w-40 sm:flex-none">
                      <button
                        type="button"
                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-2.5 py-2 text-sm font-medium text-white shadow-xs hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden sm:w-full sm:grow-0"
                      >
                        Buy again
                      </button>
                      <button
                        type="button"
                        className="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-2.5 py-2 text-sm font-medium text-gray-700 shadow-xs hover:bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden sm:w-full sm:grow-0"
                      >
                        Shop similar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
`,H=()=>{const s=[{id:"01",name:"Invoice panels",component:e.jsx(x,{}),raw:p},{id:"02",name:"Invoice table",component:e.jsx(h,{}),raw:g},{id:"03",name:"Invoice list",component:e.jsx(y,{}),raw:v},{id:"04",name:"Invoice list with quick actions",component:e.jsx(b,{}),raw:j}];return e.jsx("div",{className:"space-y-10 pb-20",children:s.map(a=>e.jsxs("section",{children:[e.jsxs("h2",{className:"mb-4 text-lg font-bold text-gray-800",children:[a.id,". ",a.name]}),e.jsx(i,{name:a.name,code:a.raw,children:a.component})]},a.id))})};export{H as default};
