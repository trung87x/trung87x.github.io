import{r as i,j as e,h as l,L as c,z as n,O as g,az as r}from"./index-CvCVbuS9.js";import{P as y}from"./PreviewWrapper-TzFvRoPZ.js";import{F as o}from"./XMarkIcon-DRrKznFm.js";import{F as m}from"./PlusIcon-C7vyHRSD.js";import{F as v}from"./LinkIcon-C6wY_f3I.js";import{F as b}from"./QuestionMarkCircleIcon-BrsUz3Ow.js";import{F as x}from"./EllipsisVerticalIcon-BqDrHd0u.js";import{l as u,f,y as p,g as d}from"./menu-DqpGavi0.js";import{F as N}from"./HeartIcon-BTQB66M2.js";import{F as j}from"./PencilIcon-Dpk2KDxr.js";import"./floating-CjydGm1Z.js";import"./element-movement-BT6A7GGi.js";import"./bugs-qQ_SbDk4.js";import"./use-resolve-button-type-J0J8N5g4.js";import"./use-text-value-CB9rzUUM.js";import"./use-tree-walker-_f7mgbza.js";import"./label-CY_Q6YdE.js";function w(){const[a,s]=i.useState(!0);return e.jsxs(l,{open:a,onClose:s,className:"relative z-10",children:[e.jsx(c,{transition:!0,className:"fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-closed:opacity-0"}),e.jsx("div",{className:"fixed inset-0 overflow-hidden",children:e.jsx("div",{className:"absolute inset-0 overflow-hidden",children:e.jsx("div",{className:"pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10",children:e.jsxs(n,{transition:!0,className:"pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700",children:[e.jsx(g,{children:e.jsx("div",{className:"absolute top-0 left-0 -ml-8 flex pt-4 pr-2 duration-500 ease-in-out data-closed:opacity-0 sm:-ml-10 sm:pr-4",children:e.jsxs("button",{type:"button",onClick:()=>s(!1),className:"relative rounded-md text-gray-300 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden",children:[e.jsx("span",{className:"absolute -inset-2.5"}),e.jsx("span",{className:"sr-only",children:"Close panel"}),e.jsx(o,{"aria-hidden":"true",className:"size-6"})]})})}),e.jsxs("div",{className:"flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl",children:[e.jsx("div",{className:"px-4 sm:px-6",children:e.jsx(r,{className:"text-base font-semibold text-gray-900",children:"Panel title"})}),e.jsx("div",{className:"relative mt-6 flex-1 px-4 sm:px-6"})]})]})})})})]})}const k=`'use client'

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, TransitionChild } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

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
              className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
            >
              <TransitionChild>
                <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 duration-500 ease-in-out data-closed:opacity-0 sm:-ml-10 sm:pr-4">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="relative rounded-md text-gray-300 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden"
                  >
                    <span className="absolute -inset-2.5" />
                    <span className="sr-only">Close panel</span>
                    <XMarkIcon aria-hidden="true" className="size-6" />
                  </button>
                </div>
              </TransitionChild>
              <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                <div className="px-4 sm:px-6">
                  <DialogTitle className="text-base font-semibold text-gray-900">Panel title</DialogTitle>
                </div>
                <div className="relative mt-6 flex-1 px-4 sm:px-6">{/* Your content */}</div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  )
}
`;function D(){const[a,s]=i.useState(!0);return e.jsxs(l,{open:a,onClose:s,className:"relative z-10",children:[e.jsx("div",{className:"fixed inset-0"}),e.jsx("div",{className:"fixed inset-0 overflow-hidden",children:e.jsx("div",{className:"absolute inset-0 overflow-hidden",children:e.jsx("div",{className:"pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10",children:e.jsx(n,{transition:!0,className:"pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700",children:e.jsxs("div",{className:"flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl",children:[e.jsx("div",{className:"px-4 sm:px-6",children:e.jsxs("div",{className:"flex items-start justify-between",children:[e.jsx(r,{className:"text-base font-semibold text-gray-900",children:"Panel title"}),e.jsx("div",{className:"ml-3 flex h-7 items-center",children:e.jsxs("button",{type:"button",onClick:()=>s(!1),className:"relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden",children:[e.jsx("span",{className:"absolute -inset-2.5"}),e.jsx("span",{className:"sr-only",children:"Close panel"}),e.jsx(o,{"aria-hidden":"true",className:"size-6"})]})})]})}),e.jsx("div",{className:"relative mt-6 flex-1 px-4 sm:px-6"})]})})})})})]})}const M=`'use client'

import { useState } from 'react'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

export default function Example() {
  const [open, setOpen] = useState(true)

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <div className="fixed inset-0" />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
            >
              <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                <div className="px-4 sm:px-6">
                  <div className="flex items-start justify-between">
                    <DialogTitle className="text-base font-semibold text-gray-900">Panel title</DialogTitle>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
                      >
                        <span className="absolute -inset-2.5" />
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon aria-hidden="true" className="size-6" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="relative mt-6 flex-1 px-4 sm:px-6">{/* Your content */}</div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  )
}
`;function z(){const[a,s]=i.useState(!0);return e.jsxs(l,{open:a,onClose:s,className:"relative z-10",children:[e.jsx("div",{className:"fixed inset-0"}),e.jsx("div",{className:"fixed inset-0 overflow-hidden",children:e.jsx("div",{className:"absolute inset-0 overflow-hidden",children:e.jsx("div",{className:"pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16",children:e.jsx(n,{transition:!0,className:"pointer-events-auto w-screen max-w-2xl transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700",children:e.jsxs("div",{className:"flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl",children:[e.jsx("div",{className:"px-4 sm:px-6",children:e.jsxs("div",{className:"flex items-start justify-between",children:[e.jsx(r,{className:"text-base font-semibold text-gray-900",children:"Panel title"}),e.jsx("div",{className:"ml-3 flex h-7 items-center",children:e.jsxs("button",{type:"button",onClick:()=>s(!1),className:"relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden",children:[e.jsx("span",{className:"absolute -inset-2.5"}),e.jsx("span",{className:"sr-only",children:"Close panel"}),e.jsx(o,{"aria-hidden":"true",className:"size-6"})]})})]})}),e.jsx("div",{className:"relative mt-6 flex-1 px-4 sm:px-6"})]})})})})})]})}const C=`'use client'

import { useState } from 'react'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

export default function Example() {
  const [open, setOpen] = useState(true)

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <div className="fixed inset-0" />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-2xl transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
            >
              <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                <div className="px-4 sm:px-6">
                  <div className="flex items-start justify-between">
                    <DialogTitle className="text-base font-semibold text-gray-900">Panel title</DialogTitle>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
                      >
                        <span className="absolute -inset-2.5" />
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon aria-hidden="true" className="size-6" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="relative mt-6 flex-1 px-4 sm:px-6">{/* Your content */}</div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  )
}
`;function O(){const[a,s]=i.useState(!0);return e.jsxs(l,{open:a,onClose:s,className:"relative z-10",children:[e.jsx(c,{transition:!0,className:"fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-closed:opacity-0"}),e.jsx("div",{className:"fixed inset-0 overflow-hidden",children:e.jsx("div",{className:"absolute inset-0 overflow-hidden",children:e.jsx("div",{className:"pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10",children:e.jsx(n,{transition:!0,className:"pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700",children:e.jsxs("div",{className:"flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl",children:[e.jsx("div",{className:"px-4 sm:px-6",children:e.jsxs("div",{className:"flex items-start justify-between",children:[e.jsx(r,{className:"text-base font-semibold text-gray-900",children:"Panel title"}),e.jsx("div",{className:"ml-3 flex h-7 items-center",children:e.jsxs("button",{type:"button",onClick:()=>s(!1),className:"relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden",children:[e.jsx("span",{className:"absolute -inset-2.5"}),e.jsx("span",{className:"sr-only",children:"Close panel"}),e.jsx(o,{"aria-hidden":"true",className:"size-6"})]})})]})}),e.jsx("div",{className:"relative mt-6 flex-1 px-4 sm:px-6"})]})})})})})]})}const P=`'use client'

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

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
              <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                <div className="px-4 sm:px-6">
                  <div className="flex items-start justify-between">
                    <DialogTitle className="text-base font-semibold text-gray-900">Panel title</DialogTitle>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
                      >
                        <span className="absolute -inset-2.5" />
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon aria-hidden="true" className="size-6" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="relative mt-6 flex-1 px-4 sm:px-6">{/* Your content */}</div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  )
}
`;function E(){const[a,s]=i.useState(!0);return e.jsxs(l,{open:a,onClose:s,className:"relative z-10",children:[e.jsx("div",{className:"fixed inset-0"}),e.jsx("div",{className:"fixed inset-0 overflow-hidden",children:e.jsx("div",{className:"absolute inset-0 overflow-hidden",children:e.jsx("div",{className:"pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10",children:e.jsx(n,{transition:!0,className:"pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700",children:e.jsxs("div",{className:"flex h-full flex-col overflow-y-scroll bg-white shadow-xl",children:[e.jsxs("div",{className:"bg-indigo-700 px-4 py-6 sm:px-6",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(r,{className:"text-base font-semibold text-white",children:"Panel title"}),e.jsx("div",{className:"ml-3 flex h-7 items-center",children:e.jsxs("button",{type:"button",onClick:()=>s(!1),className:"relative rounded-md bg-indigo-700 text-indigo-200 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden",children:[e.jsx("span",{className:"absolute -inset-2.5"}),e.jsx("span",{className:"sr-only",children:"Close panel"}),e.jsx(o,{"aria-hidden":"true",className:"size-6"})]})})]}),e.jsx("div",{className:"mt-1",children:e.jsx("p",{className:"text-sm text-indigo-300",children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit aliquam ad hic recusandae soluta."})})]}),e.jsx("div",{className:"relative flex-1 px-4 py-6 sm:px-6"})]})})})})})]})}const I=`'use client'

import { useState } from 'react'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

export default function Example() {
  const [open, setOpen] = useState(true)

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <div className="fixed inset-0" />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
            >
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="bg-indigo-700 px-4 py-6 sm:px-6">
                  <div className="flex items-center justify-between">
                    <DialogTitle className="text-base font-semibold text-white">Panel title</DialogTitle>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="relative rounded-md bg-indigo-700 text-indigo-200 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden"
                      >
                        <span className="absolute -inset-2.5" />
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon aria-hidden="true" className="size-6" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-1">
                    <p className="text-sm text-indigo-300">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit aliquam ad hic recusandae soluta.
                    </p>
                  </div>
                </div>
                <div className="relative flex-1 px-4 py-6 sm:px-6">{/* Your content */}</div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  )
}
`;function B(){const[a,s]=i.useState(!0);return e.jsxs(l,{open:a,onClose:s,className:"relative z-10",children:[e.jsx("div",{className:"fixed inset-0"}),e.jsx("div",{className:"fixed inset-0 overflow-hidden",children:e.jsx("div",{className:"absolute inset-0 overflow-hidden",children:e.jsx("div",{className:"pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10",children:e.jsx(n,{transition:!0,className:"pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700",children:e.jsxs("div",{className:"flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl",children:[e.jsxs("div",{className:"flex min-h-0 flex-1 flex-col overflow-y-scroll py-6",children:[e.jsx("div",{className:"px-4 sm:px-6",children:e.jsxs("div",{className:"flex items-start justify-between",children:[e.jsx(r,{className:"text-base font-semibold text-gray-900",children:"Panel title"}),e.jsx("div",{className:"ml-3 flex h-7 items-center",children:e.jsxs("button",{type:"button",onClick:()=>s(!1),className:"relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:outline-hidden",children:[e.jsx("span",{className:"absolute -inset-2.5"}),e.jsx("span",{className:"sr-only",children:"Close panel"}),e.jsx(o,{"aria-hidden":"true",className:"size-6"})]})})]})}),e.jsx("div",{className:"relative mt-6 flex-1 px-4 sm:px-6"})]}),e.jsxs("div",{className:"flex shrink-0 justify-end px-4 py-4",children:[e.jsx("button",{type:"button",onClick:()=>s(!1),className:"rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:ring-gray-400",children:"Cancel"}),e.jsx("button",{type:"submit",className:"ml-4 inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500",children:"Save"})]})]})})})})})]})}const q=`'use client'

import { useState } from 'react'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

export default function Example() {
  const [open, setOpen] = useState(true)

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <div className="fixed inset-0" />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
            >
              <div className="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl">
                <div className="flex min-h-0 flex-1 flex-col overflow-y-scroll py-6">
                  <div className="px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <DialogTitle className="text-base font-semibold text-gray-900">Panel title</DialogTitle>
                      <div className="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          onClick={() => setOpen(false)}
                          className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:outline-hidden"
                        >
                          <span className="absolute -inset-2.5" />
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="relative mt-6 flex-1 px-4 sm:px-6">{/* Your content */}</div>
                </div>
                <div className="flex shrink-0 justify-end px-4 py-4">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:ring-gray-400"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="ml-4 inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  )
}
`,S=[{name:"Tom Cook",email:"tom.cook@example.com",href:"#",imageUrl:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"},{name:"Whitney Francis",email:"whitney.francis@example.com",href:"#",imageUrl:"https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"},{name:"Leonard Krasner",email:"leonard.krasner@example.com",href:"#",imageUrl:"https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"},{name:"Floyd Miles",email:"floyd.miles@example.com",href:"#",imageUrl:"https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"},{name:"Emily Selman",email:"emily.selman@example.com",href:"#",imageUrl:"https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}];function T(){const[a,s]=i.useState(!0);return e.jsxs(l,{open:a,onClose:s,className:"relative z-10",children:[e.jsx("div",{className:"fixed inset-0"}),e.jsx("div",{className:"fixed inset-0 overflow-hidden",children:e.jsx("div",{className:"absolute inset-0 overflow-hidden",children:e.jsx("div",{className:"pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16",children:e.jsx(n,{transition:!0,className:"pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700",children:e.jsxs("form",{className:"flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl",children:[e.jsxs("div",{className:"h-0 flex-1 overflow-y-auto",children:[e.jsxs("div",{className:"bg-indigo-700 px-4 py-6 sm:px-6",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(r,{className:"text-base font-semibold text-white",children:"New Project"}),e.jsx("div",{className:"ml-3 flex h-7 items-center",children:e.jsxs("button",{type:"button",onClick:()=>s(!1),className:"relative rounded-md bg-indigo-700 text-indigo-200 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden",children:[e.jsx("span",{className:"absolute -inset-2.5"}),e.jsx("span",{className:"sr-only",children:"Close panel"}),e.jsx(o,{"aria-hidden":"true",className:"size-6"})]})})]}),e.jsx("div",{className:"mt-1",children:e.jsx("p",{className:"text-sm text-indigo-300",children:"Get started by filling in the information below to create your new project."})})]}),e.jsx("div",{className:"flex flex-1 flex-col justify-between",children:e.jsxs("div",{className:"divide-y divide-gray-200 px-4 sm:px-6",children:[e.jsxs("div",{className:"space-y-6 pt-6 pb-5",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"project-name",className:"block text-sm/6 font-medium text-gray-900",children:"Project name"}),e.jsx("div",{className:"mt-2",children:e.jsx("input",{id:"project-name",name:"project-name",type:"text",className:"block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"})})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"project-description",className:"block text-sm/6 font-medium text-gray-900",children:"Description"}),e.jsx("div",{className:"mt-2",children:e.jsx("textarea",{id:"project-description",name:"project-description",rows:3,className:"block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6",defaultValue:""})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm/6 font-medium text-gray-900",children:"Team Members"}),e.jsx("div",{className:"mt-2",children:e.jsxs("div",{className:"flex space-x-2",children:[S.map(t=>e.jsx("a",{href:t.href,className:"relative rounded-full hover:opacity-75",children:e.jsx("img",{alt:t.name,src:t.imageUrl,className:"inline-block size-8 rounded-full"})},t.email)),e.jsxs("button",{type:"button",className:"relative inline-flex size-8 shrink-0 items-center justify-center rounded-full border-2 border-dashed border-gray-200 bg-white text-gray-400 hover:border-gray-300 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden",children:[e.jsx("span",{className:"absolute -inset-2"}),e.jsx("span",{className:"sr-only",children:"Add team member"}),e.jsx(m,{"aria-hidden":"true",className:"size-5"})]})]})})]}),e.jsxs("fieldset",{children:[e.jsx("legend",{className:"text-sm/6 font-medium text-gray-900",children:"Privacy"}),e.jsxs("div",{className:"mt-2 space-y-4",children:[e.jsxs("div",{className:"relative flex items-start",children:[e.jsx("div",{className:"absolute flex h-6 items-center",children:e.jsx("input",{defaultValue:"public",defaultChecked:!0,id:"privacy-public",name:"privacy",type:"radio","aria-describedby":"privacy-public-description",className:"relative size-4 appearance-none rounded-full border border-gray-300 before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"})}),e.jsxs("div",{className:"pl-7 text-sm/6",children:[e.jsx("label",{htmlFor:"privacy-public",className:"font-medium text-gray-900",children:"Public access"}),e.jsx("p",{id:"privacy-public-description",className:"text-gray-500",children:"Everyone with the link will see this project."})]})]}),e.jsx("div",{children:e.jsxs("div",{className:"relative flex items-start",children:[e.jsx("div",{className:"absolute flex h-6 items-center",children:e.jsx("input",{defaultValue:"private-to-project",id:"privacy-private-to-project",name:"privacy",type:"radio","aria-describedby":"privacy-private-to-project-description",className:"relative size-4 appearance-none rounded-full border border-gray-300 before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"})}),e.jsxs("div",{className:"pl-7 text-sm/6",children:[e.jsx("label",{htmlFor:"privacy-private-to-project",className:"font-medium text-gray-900",children:"Private to project members"}),e.jsx("p",{id:"privacy-private-to-project-description",className:"text-gray-500",children:"Only members of this project would be able to access."})]})]})}),e.jsx("div",{children:e.jsxs("div",{className:"relative flex items-start",children:[e.jsx("div",{className:"absolute flex h-6 items-center",children:e.jsx("input",{defaultValue:"private",id:"privacy-private",name:"privacy",type:"radio","aria-describedby":"privacy-private-to-project-description",className:"relative size-4 appearance-none rounded-full border border-gray-300 before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"})}),e.jsxs("div",{className:"pl-7 text-sm/6",children:[e.jsx("label",{htmlFor:"privacy-private",className:"font-medium text-gray-900",children:"Private to you"}),e.jsx("p",{id:"privacy-private-description",className:"text-gray-500",children:"You are the only one able to access this project."})]})]})})]})]})]}),e.jsxs("div",{className:"pt-4 pb-6",children:[e.jsx("div",{className:"flex text-sm",children:e.jsxs("a",{href:"#",className:"group inline-flex items-center font-medium text-indigo-600 hover:text-indigo-900",children:[e.jsx(v,{"aria-hidden":"true",className:"size-5 text-indigo-500 group-hover:text-indigo-900"}),e.jsx("span",{className:"ml-2",children:"Copy link"})]})}),e.jsx("div",{className:"mt-4 flex text-sm",children:e.jsxs("a",{href:"#",className:"group inline-flex items-center text-gray-500 hover:text-gray-900",children:[e.jsx(b,{"aria-hidden":"true",className:"size-5 text-gray-400 group-hover:text-gray-500"}),e.jsx("span",{className:"ml-2",children:"Learn more about sharing"})]})})]})]})})]}),e.jsxs("div",{className:"flex shrink-0 justify-end px-4 py-4",children:[e.jsx("button",{type:"button",onClick:()=>s(!1),className:"rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50",children:"Cancel"}),e.jsx("button",{type:"submit",className:"ml-4 inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"Save"})]})]})})})})})]})}const W=`'use client'

import { useState } from 'react'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { LinkIcon, PlusIcon, QuestionMarkCircleIcon } from '@heroicons/react/20/solid'

const team = [
  {
    name: 'Tom Cook',
    email: 'tom.cook@example.com',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Whitney Francis',
    email: 'whitney.francis@example.com',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Leonard Krasner',
    email: 'leonard.krasner@example.com',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Floyd Miles',
    email: 'floyd.miles@example.com',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Emily Selman',
    email: 'emily.selman@example.com',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]

export default function Example() {
  const [open, setOpen] = useState(true)

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <div className="fixed inset-0" />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
            >
              <form className="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl">
                <div className="h-0 flex-1 overflow-y-auto">
                  <div className="bg-indigo-700 px-4 py-6 sm:px-6">
                    <div className="flex items-center justify-between">
                      <DialogTitle className="text-base font-semibold text-white">New Project</DialogTitle>
                      <div className="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          onClick={() => setOpen(false)}
                          className="relative rounded-md bg-indigo-700 text-indigo-200 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden"
                        >
                          <span className="absolute -inset-2.5" />
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                      </div>
                    </div>
                    <div className="mt-1">
                      <p className="text-sm text-indigo-300">
                        Get started by filling in the information below to create your new project.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div className="divide-y divide-gray-200 px-4 sm:px-6">
                      <div className="space-y-6 pt-6 pb-5">
                        <div>
                          <label htmlFor="project-name" className="block text-sm/6 font-medium text-gray-900">
                            Project name
                          </label>
                          <div className="mt-2">
                            <input
                              id="project-name"
                              name="project-name"
                              type="text"
                              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="project-description" className="block text-sm/6 font-medium text-gray-900">
                            Description
                          </label>
                          <div className="mt-2">
                            <textarea
                              id="project-description"
                              name="project-description"
                              rows={3}
                              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                              defaultValue={''}
                            />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-sm/6 font-medium text-gray-900">Team Members</h3>
                          <div className="mt-2">
                            <div className="flex space-x-2">
                              {team.map((person) => (
                                <a
                                  key={person.email}
                                  href={person.href}
                                  className="relative rounded-full hover:opacity-75"
                                >
                                  <img
                                    alt={person.name}
                                    src={person.imageUrl}
                                    className="inline-block size-8 rounded-full"
                                  />
                                </a>
                              ))}
                              <button
                                type="button"
                                className="relative inline-flex size-8 shrink-0 items-center justify-center rounded-full border-2 border-dashed border-gray-200 bg-white text-gray-400 hover:border-gray-300 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
                              >
                                <span className="absolute -inset-2" />
                                <span className="sr-only">Add team member</span>
                                <PlusIcon aria-hidden="true" className="size-5" />
                              </button>
                            </div>
                          </div>
                        </div>
                        <fieldset>
                          <legend className="text-sm/6 font-medium text-gray-900">Privacy</legend>
                          <div className="mt-2 space-y-4">
                            <div className="relative flex items-start">
                              <div className="absolute flex h-6 items-center">
                                <input
                                  defaultValue="public"
                                  defaultChecked
                                  id="privacy-public"
                                  name="privacy"
                                  type="radio"
                                  aria-describedby="privacy-public-description"
                                  className="relative size-4 appearance-none rounded-full border border-gray-300 before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                                />
                              </div>
                              <div className="pl-7 text-sm/6">
                                <label htmlFor="privacy-public" className="font-medium text-gray-900">
                                  Public access
                                </label>
                                <p id="privacy-public-description" className="text-gray-500">
                                  Everyone with the link will see this project.
                                </p>
                              </div>
                            </div>
                            <div>
                              <div className="relative flex items-start">
                                <div className="absolute flex h-6 items-center">
                                  <input
                                    defaultValue="private-to-project"
                                    id="privacy-private-to-project"
                                    name="privacy"
                                    type="radio"
                                    aria-describedby="privacy-private-to-project-description"
                                    className="relative size-4 appearance-none rounded-full border border-gray-300 before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                                  />
                                </div>
                                <div className="pl-7 text-sm/6">
                                  <label htmlFor="privacy-private-to-project" className="font-medium text-gray-900">
                                    Private to project members
                                  </label>
                                  <p id="privacy-private-to-project-description" className="text-gray-500">
                                    Only members of this project would be able to access.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="relative flex items-start">
                                <div className="absolute flex h-6 items-center">
                                  <input
                                    defaultValue="private"
                                    id="privacy-private"
                                    name="privacy"
                                    type="radio"
                                    aria-describedby="privacy-private-to-project-description"
                                    className="relative size-4 appearance-none rounded-full border border-gray-300 before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                                  />
                                </div>
                                <div className="pl-7 text-sm/6">
                                  <label htmlFor="privacy-private" className="font-medium text-gray-900">
                                    Private to you
                                  </label>
                                  <p id="privacy-private-description" className="text-gray-500">
                                    You are the only one able to access this project.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </fieldset>
                      </div>
                      <div className="pt-4 pb-6">
                        <div className="flex text-sm">
                          <a
                            href="#"
                            className="group inline-flex items-center font-medium text-indigo-600 hover:text-indigo-900"
                          >
                            <LinkIcon
                              aria-hidden="true"
                              className="size-5 text-indigo-500 group-hover:text-indigo-900"
                            />
                            <span className="ml-2">Copy link</span>
                          </a>
                        </div>
                        <div className="mt-4 flex text-sm">
                          <a href="#" className="group inline-flex items-center text-gray-500 hover:text-gray-900">
                            <QuestionMarkCircleIcon
                              aria-hidden="true"
                              className="size-5 text-gray-400 group-hover:text-gray-500"
                            />
                            <span className="ml-2">Learn more about sharing</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex shrink-0 justify-end px-4 py-4">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="ml-4 inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Save
                  </button>
                </div>
              </form>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  )
}
`,F=[{name:"Tom Cook",email:"tom.cook@example.com",href:"#",imageUrl:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"},{name:"Whitney Francis",email:"whitney.francis@example.com",href:"#",imageUrl:"https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"},{name:"Leonard Krasner",email:"leonard.krasner@example.com",href:"#",imageUrl:"https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"},{name:"Floyd Miles",email:"floyd.miles@example.com",href:"#",imageUrl:"https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"},{name:"Emily Selman",email:"emily.selman@example.com",href:"#",imageUrl:"https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}];function H(){const[a,s]=i.useState(!0);return e.jsxs(l,{open:a,onClose:s,className:"relative z-10",children:[e.jsx("div",{className:"fixed inset-0"}),e.jsx("div",{className:"fixed inset-0 overflow-hidden",children:e.jsx("div",{className:"absolute inset-0 overflow-hidden",children:e.jsx("div",{className:"pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16",children:e.jsx(n,{transition:!0,className:"pointer-events-auto w-screen max-w-2xl transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700",children:e.jsxs("form",{className:"flex h-full flex-col overflow-y-scroll bg-white shadow-xl",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"bg-gray-50 px-4 py-6 sm:px-6",children:e.jsxs("div",{className:"flex items-start justify-between space-x-3",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx(r,{className:"text-base font-semibold text-gray-900",children:"New project"}),e.jsx("p",{className:"text-sm text-gray-500",children:"Get started by filling in the information below to create your new project."})]}),e.jsx("div",{className:"flex h-7 items-center",children:e.jsxs("button",{type:"button",onClick:()=>s(!1),className:"relative text-gray-400 hover:text-gray-500",children:[e.jsx("span",{className:"absolute -inset-2.5"}),e.jsx("span",{className:"sr-only",children:"Close panel"}),e.jsx(o,{"aria-hidden":"true",className:"size-6"})]})})]})}),e.jsxs("div",{className:"space-y-6 py-6 sm:space-y-0 sm:divide-y sm:divide-gray-200 sm:py-0",children:[e.jsxs("div",{className:"space-y-2 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5",children:[e.jsx("div",{children:e.jsx("label",{htmlFor:"project-name",className:"block text-sm/6 font-medium text-gray-900 sm:mt-1.5",children:"Project name"})}),e.jsx("div",{className:"sm:col-span-2",children:e.jsx("input",{id:"project-name",name:"project-name",type:"text",className:"block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"})})]}),e.jsxs("div",{className:"space-y-2 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5",children:[e.jsx("div",{children:e.jsx("label",{htmlFor:"project-description",className:"block text-sm/6 font-medium text-gray-900 sm:mt-1.5",children:"Description"})}),e.jsx("div",{className:"sm:col-span-2",children:e.jsx("textarea",{id:"project-description",name:"project-description",rows:3,className:"block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6",defaultValue:""})})]}),e.jsxs("div",{className:"space-y-2 px-4 sm:grid sm:grid-cols-3 sm:items-center sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5",children:[e.jsx("div",{children:e.jsx("h3",{className:"text-sm/6 font-medium text-gray-900",children:"Team Members"})}),e.jsx("div",{className:"sm:col-span-2",children:e.jsxs("div",{className:"flex space-x-2",children:[F.map(t=>e.jsx("a",{href:t.href,className:"shrink-0 rounded-full hover:opacity-75",children:e.jsx("img",{alt:t.name,src:t.imageUrl,className:"inline-block size-8 rounded-full"})},t.email)),e.jsxs("button",{type:"button",className:"relative inline-flex size-8 shrink-0 items-center justify-center rounded-full border-2 border-dashed border-gray-200 bg-white text-gray-400 hover:border-gray-300 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden",children:[e.jsx("span",{className:"absolute -inset-2"}),e.jsx("span",{className:"sr-only",children:"Add team member"}),e.jsx(m,{"aria-hidden":"true",className:"size-5"})]})]})})]}),e.jsxs("fieldset",{className:"space-y-2 px-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5",children:[e.jsx("legend",{className:"sr-only",children:"Privacy"}),e.jsx("div",{"aria-hidden":"true",className:"text-sm/6 font-medium text-gray-900",children:"Privacy"}),e.jsxs("div",{className:"space-y-5 sm:col-span-2",children:[e.jsxs("div",{className:"space-y-5 sm:mt-0",children:[e.jsxs("div",{className:"relative flex items-start",children:[e.jsx("div",{className:"absolute flex h-6 items-center",children:e.jsx("input",{defaultValue:"public",defaultChecked:!0,id:"privacy-public",name:"privacy",type:"radio","aria-describedby":"privacy-public-description",className:"relative size-4 appearance-none rounded-full border border-gray-300 before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"})}),e.jsxs("div",{className:"pl-7 text-sm/6",children:[e.jsx("label",{htmlFor:"privacy-public",className:"font-medium text-gray-900",children:"Public access"}),e.jsx("p",{id:"privacy-public-description",className:"text-gray-500",children:"Everyone with the link will see this project."})]})]}),e.jsxs("div",{className:"relative flex items-start",children:[e.jsx("div",{className:"absolute flex h-6 items-center",children:e.jsx("input",{defaultValue:"private-to-project",id:"privacy-private-to-project",name:"privacy",type:"radio","aria-describedby":"privacy-private-to-project-description",className:"relative size-4 appearance-none rounded-full border border-gray-300 before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"})}),e.jsxs("div",{className:"pl-7 text-sm/6",children:[e.jsx("label",{htmlFor:"privacy-private-to-project",className:"font-medium text-gray-900",children:"Private to project members"}),e.jsx("p",{id:"privacy-private-to-project-description",className:"text-gray-500",children:"Only members of this project would be able to access."})]})]}),e.jsxs("div",{className:"relative flex items-start",children:[e.jsx("div",{className:"absolute flex h-6 items-center",children:e.jsx("input",{defaultValue:"private",id:"privacy-private",name:"privacy",type:"radio","aria-describedby":"privacy-private-to-project-description",className:"relative size-4 appearance-none rounded-full border border-gray-300 before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"})}),e.jsxs("div",{className:"pl-7 text-sm/6",children:[e.jsx("label",{htmlFor:"privacy-private",className:"font-medium text-gray-900",children:"Private to you"}),e.jsx("p",{id:"privacy-private-description",className:"text-gray-500",children:"You are the only one able to access this project."})]})]})]}),e.jsx("hr",{className:"border-gray-200"}),e.jsxs("div",{className:"flex flex-col items-start space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0",children:[e.jsx("div",{children:e.jsxs("a",{href:"#",className:"group flex items-center space-x-2.5 text-sm font-medium text-indigo-600 hover:text-indigo-900",children:[e.jsx(v,{"aria-hidden":"true",className:"size-5 text-indigo-500 group-hover:text-indigo-900"}),e.jsx("span",{children:"Copy link"})]})}),e.jsx("div",{children:e.jsxs("a",{href:"#",className:"group flex items-center space-x-2.5 text-sm text-gray-500 hover:text-gray-900",children:[e.jsx(b,{"aria-hidden":"true",className:"size-5 text-gray-400 group-hover:text-gray-500"}),e.jsx("span",{children:"Learn more about sharing"})]})})]})]})]})]})]}),e.jsx("div",{className:"shrink-0 border-t border-gray-200 px-4 py-5 sm:px-6",children:e.jsxs("div",{className:"flex justify-end space-x-3",children:[e.jsx("button",{type:"button",onClick:()=>s(!1),className:"rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50",children:"Cancel"}),e.jsx("button",{type:"submit",className:"inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"Create"})]})})]})})})})})]})}const J=`'use client'

import { useState } from 'react'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { LinkIcon, PlusIcon, QuestionMarkCircleIcon } from '@heroicons/react/20/solid'

const team = [
  {
    name: 'Tom Cook',
    email: 'tom.cook@example.com',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Whitney Francis',
    email: 'whitney.francis@example.com',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Leonard Krasner',
    email: 'leonard.krasner@example.com',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Floyd Miles',
    email: 'floyd.miles@example.com',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Emily Selman',
    email: 'emily.selman@example.com',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]

export default function Example() {
  const [open, setOpen] = useState(true)

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <div className="fixed inset-0" />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-2xl transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
            >
              <form className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="flex-1">
                  {/* Header */}
                  <div className="bg-gray-50 px-4 py-6 sm:px-6">
                    <div className="flex items-start justify-between space-x-3">
                      <div className="space-y-1">
                        <DialogTitle className="text-base font-semibold text-gray-900">New project</DialogTitle>
                        <p className="text-sm text-gray-500">
                          Get started by filling in the information below to create your new project.
                        </p>
                      </div>
                      <div className="flex h-7 items-center">
                        <button
                          type="button"
                          onClick={() => setOpen(false)}
                          className="relative text-gray-400 hover:text-gray-500"
                        >
                          <span className="absolute -inset-2.5" />
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Divider container */}
                  <div className="space-y-6 py-6 sm:space-y-0 sm:divide-y sm:divide-gray-200 sm:py-0">
                    {/* Project name */}
                    <div className="space-y-2 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                      <div>
                        <label htmlFor="project-name" className="block text-sm/6 font-medium text-gray-900 sm:mt-1.5">
                          Project name
                        </label>
                      </div>
                      <div className="sm:col-span-2">
                        <input
                          id="project-name"
                          name="project-name"
                          type="text"
                          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                      </div>
                    </div>

                    {/* Project description */}
                    <div className="space-y-2 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                      <div>
                        <label
                          htmlFor="project-description"
                          className="block text-sm/6 font-medium text-gray-900 sm:mt-1.5"
                        >
                          Description
                        </label>
                      </div>
                      <div className="sm:col-span-2">
                        <textarea
                          id="project-description"
                          name="project-description"
                          rows={3}
                          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                          defaultValue={''}
                        />
                      </div>
                    </div>

                    {/* Team members */}
                    <div className="space-y-2 px-4 sm:grid sm:grid-cols-3 sm:items-center sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                      <div>
                        <h3 className="text-sm/6 font-medium text-gray-900">Team Members</h3>
                      </div>
                      <div className="sm:col-span-2">
                        <div className="flex space-x-2">
                          {team.map((person) => (
                            <a key={person.email} href={person.href} className="shrink-0 rounded-full hover:opacity-75">
                              <img
                                alt={person.name}
                                src={person.imageUrl}
                                className="inline-block size-8 rounded-full"
                              />
                            </a>
                          ))}

                          <button
                            type="button"
                            className="relative inline-flex size-8 shrink-0 items-center justify-center rounded-full border-2 border-dashed border-gray-200 bg-white text-gray-400 hover:border-gray-300 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
                          >
                            <span className="absolute -inset-2" />
                            <span className="sr-only">Add team member</span>
                            <PlusIcon aria-hidden="true" className="size-5" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Privacy */}
                    <fieldset className="space-y-2 px-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                      <legend className="sr-only">Privacy</legend>
                      <div aria-hidden="true" className="text-sm/6 font-medium text-gray-900">
                        Privacy
                      </div>
                      <div className="space-y-5 sm:col-span-2">
                        <div className="space-y-5 sm:mt-0">
                          <div className="relative flex items-start">
                            <div className="absolute flex h-6 items-center">
                              <input
                                defaultValue="public"
                                defaultChecked
                                id="privacy-public"
                                name="privacy"
                                type="radio"
                                aria-describedby="privacy-public-description"
                                className="relative size-4 appearance-none rounded-full border border-gray-300 before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                              />
                            </div>
                            <div className="pl-7 text-sm/6">
                              <label htmlFor="privacy-public" className="font-medium text-gray-900">
                                Public access
                              </label>
                              <p id="privacy-public-description" className="text-gray-500">
                                Everyone with the link will see this project.
                              </p>
                            </div>
                          </div>
                          <div className="relative flex items-start">
                            <div className="absolute flex h-6 items-center">
                              <input
                                defaultValue="private-to-project"
                                id="privacy-private-to-project"
                                name="privacy"
                                type="radio"
                                aria-describedby="privacy-private-to-project-description"
                                className="relative size-4 appearance-none rounded-full border border-gray-300 before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                              />
                            </div>
                            <div className="pl-7 text-sm/6">
                              <label htmlFor="privacy-private-to-project" className="font-medium text-gray-900">
                                Private to project members
                              </label>
                              <p id="privacy-private-to-project-description" className="text-gray-500">
                                Only members of this project would be able to access.
                              </p>
                            </div>
                          </div>
                          <div className="relative flex items-start">
                            <div className="absolute flex h-6 items-center">
                              <input
                                defaultValue="private"
                                id="privacy-private"
                                name="privacy"
                                type="radio"
                                aria-describedby="privacy-private-to-project-description"
                                className="relative size-4 appearance-none rounded-full border border-gray-300 before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                              />
                            </div>
                            <div className="pl-7 text-sm/6">
                              <label htmlFor="privacy-private" className="font-medium text-gray-900">
                                Private to you
                              </label>
                              <p id="privacy-private-description" className="text-gray-500">
                                You are the only one able to access this project.
                              </p>
                            </div>
                          </div>
                        </div>
                        <hr className="border-gray-200" />
                        <div className="flex flex-col items-start space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
                          <div>
                            <a
                              href="#"
                              className="group flex items-center space-x-2.5 text-sm font-medium text-indigo-600 hover:text-indigo-900"
                            >
                              <LinkIcon
                                aria-hidden="true"
                                className="size-5 text-indigo-500 group-hover:text-indigo-900"
                              />
                              <span>Copy link</span>
                            </a>
                          </div>
                          <div>
                            <a
                              href="#"
                              className="group flex items-center space-x-2.5 text-sm text-gray-500 hover:text-gray-900"
                            >
                              <QuestionMarkCircleIcon
                                aria-hidden="true"
                                className="size-5 text-gray-400 group-hover:text-gray-500"
                              />
                              <span>Learn more about sharing</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="shrink-0 border-t border-gray-200 px-4 py-5 sm:px-6">
                  <div className="flex justify-end space-x-3">
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Create
                    </button>
                  </div>
                </div>
              </form>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  )
}
`;function U(){const[a,s]=i.useState(!0);return e.jsxs(l,{open:a,onClose:s,className:"relative z-10",children:[e.jsx("div",{className:"fixed inset-0"}),e.jsx("div",{className:"fixed inset-0 overflow-hidden",children:e.jsx("div",{className:"absolute inset-0 overflow-hidden",children:e.jsx("div",{className:"pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16",children:e.jsx(n,{transition:!0,className:"pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700",children:e.jsxs("div",{className:"flex h-full flex-col overflow-y-scroll bg-white shadow-xl",children:[e.jsx("div",{className:"px-4 py-6 sm:px-6",children:e.jsxs("div",{className:"flex items-start justify-between",children:[e.jsx("h2",{id:"slide-over-heading",className:"text-base font-semibold text-gray-900",children:"Profile"}),e.jsx("div",{className:"ml-3 flex h-7 items-center",children:e.jsxs("button",{type:"button",onClick:()=>s(!1),className:"relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500",children:[e.jsx("span",{className:"absolute -inset-2.5"}),e.jsx("span",{className:"sr-only",children:"Close panel"}),e.jsx(o,{"aria-hidden":"true",className:"size-6"})]})})]})}),e.jsxs("div",{children:[e.jsx("div",{className:"pb-1 sm:pb-6",children:e.jsxs("div",{children:[e.jsx("div",{className:"relative h-40 sm:h-56",children:e.jsx("img",{alt:"",src:"https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&h=600&q=80",className:"absolute size-full object-cover"})}),e.jsx("div",{className:"mt-6 px-4 sm:mt-8 sm:flex sm:items-end sm:px-6",children:e.jsxs("div",{className:"sm:flex-1",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-900 sm:text-2xl",children:"Ashley Porter"}),e.jsx("span",{className:"ml-2.5 inline-block size-2 shrink-0 rounded-full bg-green-400",children:e.jsx("span",{className:"sr-only",children:"Online"})})]}),e.jsx("p",{className:"text-sm text-gray-500",children:"@ashleyporter"})]}),e.jsxs("div",{className:"mt-5 flex flex-wrap space-y-3 sm:space-y-0 sm:space-x-3",children:[e.jsx("button",{type:"button",className:"inline-flex w-full shrink-0 items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:flex-1",children:"Message"}),e.jsx("button",{type:"button",className:"inline-flex w-full flex-1 items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50",children:"Call"}),e.jsx("div",{className:"ml-3 inline-flex sm:ml-0",children:e.jsxs(u,{as:"div",className:"relative inline-block text-left",children:[e.jsxs(f,{className:"relative inline-flex items-center rounded-md bg-white p-2 text-gray-400 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50",children:[e.jsx("span",{className:"absolute -inset-1"}),e.jsx("span",{className:"sr-only",children:"Open options menu"}),e.jsx(x,{"aria-hidden":"true",className:"size-5"})]}),e.jsx(p,{transition:!0,className:"absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in",children:e.jsxs("div",{className:"py-1",children:[e.jsx(d,{children:e.jsx("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden",children:"View profile"})}),e.jsx(d,{children:e.jsx("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden",children:"Copy profile link"})})]})})]})})]})]})})]})}),e.jsx("div",{className:"px-4 pt-5 pb-5 sm:px-0 sm:pt-0",children:e.jsxs("dl",{className:"space-y-8 px-4 sm:space-y-6 sm:px-6",children:[e.jsxs("div",{children:[e.jsx("dt",{className:"text-sm font-medium text-gray-500 sm:w-40 sm:shrink-0",children:"Bio"}),e.jsx("dd",{className:"mt-1 text-sm text-gray-900 sm:col-span-2",children:e.jsx("p",{children:"Enim feugiat ut ipsum, neque ut. Tristique mi id elementum praesent. Gravida in tempus feugiat netus enim aliquet a, quam scelerisque. Dictumst in convallis nec in bibendum aenean arcu."})})]}),e.jsxs("div",{children:[e.jsx("dt",{className:"text-sm font-medium text-gray-500 sm:w-40 sm:shrink-0",children:"Location"}),e.jsx("dd",{className:"mt-1 text-sm text-gray-900 sm:col-span-2",children:"New York, NY, USA"})]}),e.jsxs("div",{children:[e.jsx("dt",{className:"text-sm font-medium text-gray-500 sm:w-40 sm:shrink-0",children:"Website"}),e.jsx("dd",{className:"mt-1 text-sm text-gray-900 sm:col-span-2",children:"ashleyporter.com"})]}),e.jsxs("div",{children:[e.jsx("dt",{className:"text-sm font-medium text-gray-500 sm:w-40 sm:shrink-0",children:"Birthday"}),e.jsx("dd",{className:"mt-1 text-sm text-gray-900 sm:col-span-2",children:e.jsx("time",{dateTime:"1988-06-23",children:"June 23, 1988"})})]})]})})]})]})})})})})]})}const Q=`'use client'

import { useState } from 'react'
import { Dialog, DialogPanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'

export default function Example() {
  const [open, setOpen] = useState(true)

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <div className="fixed inset-0" />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
            >
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <h2 id="slide-over-heading" className="text-base font-semibold text-gray-900">
                      Profile
                    </h2>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500"
                      >
                        <span className="absolute -inset-2.5" />
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon aria-hidden="true" className="size-6" />
                      </button>
                    </div>
                  </div>
                </div>
                {/* Main */}
                <div>
                  <div className="pb-1 sm:pb-6">
                    <div>
                      <div className="relative h-40 sm:h-56">
                        <img
                          alt=""
                          src="https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&h=600&q=80"
                          className="absolute size-full object-cover"
                        />
                      </div>
                      <div className="mt-6 px-4 sm:mt-8 sm:flex sm:items-end sm:px-6">
                        <div className="sm:flex-1">
                          <div>
                            <div className="flex items-center">
                              <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">Ashley Porter</h3>
                              <span className="ml-2.5 inline-block size-2 shrink-0 rounded-full bg-green-400">
                                <span className="sr-only">Online</span>
                              </span>
                            </div>
                            <p className="text-sm text-gray-500">@ashleyporter</p>
                          </div>
                          <div className="mt-5 flex flex-wrap space-y-3 sm:space-y-0 sm:space-x-3">
                            <button
                              type="button"
                              className="inline-flex w-full shrink-0 items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:flex-1"
                            >
                              Message
                            </button>
                            <button
                              type="button"
                              className="inline-flex w-full flex-1 items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50"
                            >
                              Call
                            </button>
                            <div className="ml-3 inline-flex sm:ml-0">
                              <Menu as="div" className="relative inline-block text-left">
                                <MenuButton className="relative inline-flex items-center rounded-md bg-white p-2 text-gray-400 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">
                                  <span className="absolute -inset-1" />
                                  <span className="sr-only">Open options menu</span>
                                  <EllipsisVerticalIcon aria-hidden="true" className="size-5" />
                                </MenuButton>
                                <MenuItems
                                  transition
                                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                                >
                                  <div className="py-1">
                                    <MenuItem>
                                      <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                                      >
                                        View profile
                                      </a>
                                    </MenuItem>
                                    <MenuItem>
                                      <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                                      >
                                        Copy profile link
                                      </a>
                                    </MenuItem>
                                  </div>
                                </MenuItems>
                              </Menu>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 pt-5 pb-5 sm:px-0 sm:pt-0">
                    <dl className="space-y-8 px-4 sm:space-y-6 sm:px-6">
                      <div>
                        <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:shrink-0">Bio</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                          <p>
                            Enim feugiat ut ipsum, neque ut. Tristique mi id elementum praesent. Gravida in tempus
                            feugiat netus enim aliquet a, quam scelerisque. Dictumst in convallis nec in bibendum aenean
                            arcu.
                          </p>
                        </dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:shrink-0">Location</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">New York, NY, USA</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:shrink-0">Website</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">ashleyporter.com</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:shrink-0">Birthday</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                          <time dateTime="1988-06-23">June 23, 1988</time>
                        </dd>
                      </div>
                    </dl>
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
`;function A(){const[a,s]=i.useState(!0);return e.jsxs(l,{open:a,onClose:s,className:"relative z-10",children:[e.jsx("div",{className:"fixed inset-0"}),e.jsx("div",{className:"fixed inset-0 overflow-hidden",children:e.jsx("div",{className:"absolute inset-0 overflow-hidden",children:e.jsx("div",{className:"pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16",children:e.jsx(n,{transition:!0,className:"pointer-events-auto w-screen max-w-2xl transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700",children:e.jsxs("div",{className:"flex h-full flex-col overflow-y-scroll bg-white shadow-xl",children:[e.jsx("div",{className:"px-4 py-6 sm:px-6",children:e.jsxs("div",{className:"flex items-start justify-between",children:[e.jsx(r,{className:"text-base font-semibold text-gray-900",children:"Profile"}),e.jsx("div",{className:"ml-3 flex h-7 items-center",children:e.jsxs("button",{type:"button",onClick:()=>s(!1),className:"relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500",children:[e.jsx("span",{className:"absolute -inset-2.5"}),e.jsx("span",{className:"sr-only",children:"Close panel"}),e.jsx(o,{"aria-hidden":"true",className:"size-6"})]})})]})}),e.jsxs("div",{className:"divide-y divide-gray-200",children:[e.jsxs("div",{className:"pb-6",children:[e.jsx("div",{className:"h-24 bg-indigo-700 sm:h-20 lg:h-28"}),e.jsxs("div",{className:"-mt-12 flow-root px-4 sm:-mt-8 sm:flex sm:items-end sm:px-6 lg:-mt-16",children:[e.jsx("div",{children:e.jsx("div",{className:"-m-1 flex",children:e.jsx("div",{className:"inline-flex overflow-hidden rounded-lg border-4 border-white",children:e.jsx("img",{alt:"",src:"https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80",className:"size-24 shrink-0 sm:size-40 lg:size-48"})})})}),e.jsxs("div",{className:"mt-6 sm:ml-6 sm:flex-1",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-900 sm:text-2xl",children:"Ashley Porter"}),e.jsx("span",{className:"ml-2.5 inline-block size-2 shrink-0 rounded-full bg-green-400",children:e.jsx("span",{className:"sr-only",children:"Online"})})]}),e.jsx("p",{className:"text-sm text-gray-500",children:"@ashleyporter"})]}),e.jsxs("div",{className:"mt-5 flex flex-wrap space-y-3 sm:space-y-0 sm:space-x-3",children:[e.jsx("button",{type:"button",className:"inline-flex w-full shrink-0 items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:flex-1",children:"Message"}),e.jsx("button",{type:"button",className:"inline-flex w-full flex-1 items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50",children:"Call"}),e.jsx("div",{className:"ml-3 inline-flex sm:ml-0",children:e.jsxs(u,{as:"div",className:"relative inline-block text-left",children:[e.jsxs(f,{className:"relative inline-flex items-center rounded-md bg-white p-2 text-gray-400 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50",children:[e.jsx("span",{className:"absolute -inset-1"}),e.jsx("span",{className:"sr-only",children:"Open options menu"}),e.jsx(x,{"aria-hidden":"true",className:"size-5"})]}),e.jsx(p,{transition:!0,className:"absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in",children:e.jsxs("div",{className:"py-1",children:[e.jsx(d,{children:e.jsx("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden",children:"View profile"})}),e.jsx(d,{children:e.jsx("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden",children:"Copy profile link"})})]})})]})})]})]})]})]}),e.jsx("div",{className:"px-4 py-5 sm:px-0 sm:py-0",children:e.jsxs("dl",{className:"space-y-8 sm:space-y-0 sm:divide-y sm:divide-gray-200",children:[e.jsxs("div",{className:"sm:flex sm:px-6 sm:py-5",children:[e.jsx("dt",{className:"text-sm font-medium text-gray-500 sm:w-40 sm:shrink-0 lg:w-48",children:"Bio"}),e.jsx("dd",{className:"mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 sm:ml-6",children:e.jsx("p",{children:"Enim feugiat ut ipsum, neque ut. Tristique mi id elementum praesent. Gravida in tempus feugiat netus enim aliquet a, quam scelerisque. Dictumst in convallis nec in bibendum aenean arcu."})})]}),e.jsxs("div",{className:"sm:flex sm:px-6 sm:py-5",children:[e.jsx("dt",{className:"text-sm font-medium text-gray-500 sm:w-40 sm:shrink-0 lg:w-48",children:"Location"}),e.jsx("dd",{className:"mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 sm:ml-6",children:"New York, NY, USA"})]}),e.jsxs("div",{className:"sm:flex sm:px-6 sm:py-5",children:[e.jsx("dt",{className:"text-sm font-medium text-gray-500 sm:w-40 sm:shrink-0 lg:w-48",children:"Website"}),e.jsx("dd",{className:"mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 sm:ml-6",children:"ashleyporter.com"})]}),e.jsxs("div",{className:"sm:flex sm:px-6 sm:py-5",children:[e.jsx("dt",{className:"text-sm font-medium text-gray-500 sm:w-40 sm:shrink-0 lg:w-48",children:"Birthday"}),e.jsx("dd",{className:"mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 sm:ml-6",children:e.jsx("time",{dateTime:"1982-06-23",children:"June 23, 1982"})})]})]})})]})]})})})})})]})}const V=`'use client'

import { useState } from 'react'
import { Dialog, DialogPanel, DialogTitle, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'

export default function Example() {
  const [open, setOpen] = useState(true)

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <div className="fixed inset-0" />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-2xl transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
            >
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <DialogTitle className="text-base font-semibold text-gray-900">Profile</DialogTitle>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500"
                      >
                        <span className="absolute -inset-2.5" />
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon aria-hidden="true" className="size-6" />
                      </button>
                    </div>
                  </div>
                </div>
                {/* Main */}
                <div className="divide-y divide-gray-200">
                  <div className="pb-6">
                    <div className="h-24 bg-indigo-700 sm:h-20 lg:h-28" />
                    <div className="-mt-12 flow-root px-4 sm:-mt-8 sm:flex sm:items-end sm:px-6 lg:-mt-16">
                      <div>
                        <div className="-m-1 flex">
                          <div className="inline-flex overflow-hidden rounded-lg border-4 border-white">
                            <img
                              alt=""
                              src="https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80"
                              className="size-24 shrink-0 sm:size-40 lg:size-48"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 sm:ml-6 sm:flex-1">
                        <div>
                          <div className="flex items-center">
                            <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">Ashley Porter</h3>
                            <span className="ml-2.5 inline-block size-2 shrink-0 rounded-full bg-green-400">
                              <span className="sr-only">Online</span>
                            </span>
                          </div>
                          <p className="text-sm text-gray-500">@ashleyporter</p>
                        </div>
                        <div className="mt-5 flex flex-wrap space-y-3 sm:space-y-0 sm:space-x-3">
                          <button
                            type="button"
                            className="inline-flex w-full shrink-0 items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:flex-1"
                          >
                            Message
                          </button>
                          <button
                            type="button"
                            className="inline-flex w-full flex-1 items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50"
                          >
                            Call
                          </button>
                          <div className="ml-3 inline-flex sm:ml-0">
                            <Menu as="div" className="relative inline-block text-left">
                              <MenuButton className="relative inline-flex items-center rounded-md bg-white p-2 text-gray-400 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">
                                <span className="absolute -inset-1" />
                                <span className="sr-only">Open options menu</span>
                                <EllipsisVerticalIcon aria-hidden="true" className="size-5" />
                              </MenuButton>
                              <MenuItems
                                transition
                                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                              >
                                <div className="py-1">
                                  <MenuItem>
                                    <a
                                      href="#"
                                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                                    >
                                      View profile
                                    </a>
                                  </MenuItem>
                                  <MenuItem>
                                    <a
                                      href="#"
                                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                                    >
                                      Copy profile link
                                    </a>
                                  </MenuItem>
                                </div>
                              </MenuItems>
                            </Menu>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-5 sm:px-0 sm:py-0">
                    <dl className="space-y-8 sm:space-y-0 sm:divide-y sm:divide-gray-200">
                      <div className="sm:flex sm:px-6 sm:py-5">
                        <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:shrink-0 lg:w-48">Bio</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 sm:ml-6">
                          <p>
                            Enim feugiat ut ipsum, neque ut. Tristique mi id elementum praesent. Gravida in tempus
                            feugiat netus enim aliquet a, quam scelerisque. Dictumst in convallis nec in bibendum aenean
                            arcu.
                          </p>
                        </dd>
                      </div>
                      <div className="sm:flex sm:px-6 sm:py-5">
                        <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:shrink-0 lg:w-48">Location</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 sm:ml-6">New York, NY, USA</dd>
                      </div>
                      <div className="sm:flex sm:px-6 sm:py-5">
                        <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:shrink-0 lg:w-48">Website</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 sm:ml-6">ashleyporter.com</dd>
                      </div>
                      <div className="sm:flex sm:px-6 sm:py-5">
                        <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:shrink-0 lg:w-48">Birthday</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 sm:ml-6">
                          <time dateTime="1982-06-23">June 23, 1982</time>
                        </dd>
                      </div>
                    </dl>
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
`,X=[{name:"All",href:"#",current:!0},{name:"Online",href:"#",current:!1},{name:"Offline",href:"#",current:!1}],R=[{name:"Leslie Alexander",handle:"lesliealexander",href:"#",imageUrl:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",status:"online"}];function h(...a){return a.filter(Boolean).join(" ")}function L(){const[a,s]=i.useState(!0);return e.jsxs(l,{open:a,onClose:s,className:"relative z-10",children:[e.jsx("div",{className:"fixed inset-0"}),e.jsx("div",{className:"fixed inset-0 overflow-hidden",children:e.jsx("div",{className:"absolute inset-0 overflow-hidden",children:e.jsx("div",{className:"pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16",children:e.jsx(n,{transition:!0,className:"pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700",children:e.jsxs("div",{className:"flex h-full flex-col overflow-y-scroll bg-white shadow-xl",children:[e.jsx("div",{className:"p-6",children:e.jsxs("div",{className:"flex items-start justify-between",children:[e.jsx(r,{className:"text-base font-semibold text-gray-900",children:"Team"}),e.jsx("div",{className:"ml-3 flex h-7 items-center",children:e.jsxs("button",{type:"button",onClick:()=>s(!1),className:"relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500",children:[e.jsx("span",{className:"absolute -inset-2.5"}),e.jsx("span",{className:"sr-only",children:"Close panel"}),e.jsx(o,{"aria-hidden":"true",className:"size-6"})]})})]})}),e.jsx("div",{className:"border-b border-gray-200",children:e.jsx("div",{className:"px-6",children:e.jsx("nav",{className:"-mb-px flex space-x-6",children:X.map(t=>e.jsx("a",{href:t.href,className:h(t.current?"border-indigo-500 text-indigo-600":"border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700","border-b-2 px-1 pb-4 text-sm font-medium whitespace-nowrap"),children:t.name},t.name))})})}),e.jsx("ul",{role:"list",className:"flex-1 divide-y divide-gray-200 overflow-y-auto",children:R.map(t=>e.jsx("li",{children:e.jsxs("div",{className:"group relative flex items-center px-5 py-6",children:[e.jsxs("a",{href:t.href,className:"-m-1 block flex-1 p-1",children:[e.jsx("div",{"aria-hidden":"true",className:"absolute inset-0 group-hover:bg-gray-50"}),e.jsxs("div",{className:"relative flex min-w-0 flex-1 items-center",children:[e.jsxs("span",{className:"relative inline-block shrink-0",children:[e.jsx("img",{alt:"",src:t.imageUrl,className:"size-10 rounded-full"}),e.jsx("span",{"aria-hidden":"true",className:h(t.status==="online"?"bg-green-400":"bg-gray-300","absolute top-0 right-0 block size-2.5 rounded-full ring-2 ring-white")})]}),e.jsxs("div",{className:"ml-4 truncate",children:[e.jsx("p",{className:"truncate text-sm font-medium text-gray-900",children:t.name}),e.jsx("p",{className:"truncate text-sm text-gray-500",children:"@"+t.handle})]})]})]}),e.jsxs(u,{as:"div",className:"relative ml-2 inline-block shrink-0 text-left",children:[e.jsxs(f,{className:"group relative inline-flex size-8 items-center justify-center rounded-full bg-white focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden",children:[e.jsx("span",{className:"absolute -inset-1.5"}),e.jsx("span",{className:"sr-only",children:"Open options menu"}),e.jsx("span",{className:"flex size-full items-center justify-center rounded-full",children:e.jsx(x,{"aria-hidden":"true",className:"size-5 text-gray-400 group-hover:text-gray-500"})})]}),e.jsx(p,{transition:!0,className:"absolute top-0 right-9 z-10 w-48 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in",children:e.jsxs("div",{className:"py-1",children:[e.jsx(d,{children:e.jsx("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden",children:"View profile"})}),e.jsx(d,{children:e.jsx("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden",children:"Send message"})})]})})]})]})},t.handle))})]})})})})})]})}const Y=`'use client'

import { useState } from 'react'
import { Dialog, DialogPanel, DialogTitle, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'

const tabs = [
  { name: 'All', href: '#', current: true },
  { name: 'Online', href: '#', current: false },
  { name: 'Offline', href: '#', current: false },
]
const team = [
  {
    name: 'Leslie Alexander',
    handle: 'lesliealexander',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    status: 'online',
  },
  // More people...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [open, setOpen] = useState(true)

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <div className="fixed inset-0" />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
            >
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <DialogTitle className="text-base font-semibold text-gray-900">Team</DialogTitle>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500"
                      >
                        <span className="absolute -inset-2.5" />
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon aria-hidden="true" className="size-6" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="border-b border-gray-200">
                  <div className="px-6">
                    <nav className="-mb-px flex space-x-6">
                      {tabs.map((tab) => (
                        <a
                          key={tab.name}
                          href={tab.href}
                          className={classNames(
                            tab.current
                              ? 'border-indigo-500 text-indigo-600'
                              : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                            'border-b-2 px-1 pb-4 text-sm font-medium whitespace-nowrap',
                          )}
                        >
                          {tab.name}
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>
                <ul role="list" className="flex-1 divide-y divide-gray-200 overflow-y-auto">
                  {team.map((person) => (
                    <li key={person.handle}>
                      <div className="group relative flex items-center px-5 py-6">
                        <a href={person.href} className="-m-1 block flex-1 p-1">
                          <div aria-hidden="true" className="absolute inset-0 group-hover:bg-gray-50" />
                          <div className="relative flex min-w-0 flex-1 items-center">
                            <span className="relative inline-block shrink-0">
                              <img alt="" src={person.imageUrl} className="size-10 rounded-full" />
                              <span
                                aria-hidden="true"
                                className={classNames(
                                  person.status === 'online' ? 'bg-green-400' : 'bg-gray-300',
                                  'absolute top-0 right-0 block size-2.5 rounded-full ring-2 ring-white',
                                )}
                              />
                            </span>
                            <div className="ml-4 truncate">
                              <p className="truncate text-sm font-medium text-gray-900">{person.name}</p>
                              <p className="truncate text-sm text-gray-500">{'@' + person.handle}</p>
                            </div>
                          </div>
                        </a>
                        <Menu as="div" className="relative ml-2 inline-block shrink-0 text-left">
                          <MenuButton className="group relative inline-flex size-8 items-center justify-center rounded-full bg-white focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Open options menu</span>
                            <span className="flex size-full items-center justify-center rounded-full">
                              <EllipsisVerticalIcon
                                aria-hidden="true"
                                className="size-5 text-gray-400 group-hover:text-gray-500"
                              />
                            </span>
                          </MenuButton>
                          <MenuItems
                            transition
                            className="absolute top-0 right-9 z-10 w-48 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                          >
                            <div className="py-1">
                              <MenuItem>
                                <a
                                  href="#"
                                  className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                                >
                                  View profile
                                </a>
                              </MenuItem>
                              <MenuItem>
                                <a
                                  href="#"
                                  className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                                >
                                  Send message
                                </a>
                              </MenuItem>
                            </div>
                          </MenuItems>
                        </Menu>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  )
}
`;function $(){const[a,s]=i.useState(!0);return e.jsxs(l,{open:a,onClose:s,className:"relative z-10",children:[e.jsx(c,{transition:!0,className:"fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-closed:opacity-0"}),e.jsx("div",{className:"fixed inset-0 overflow-hidden",children:e.jsx("div",{className:"absolute inset-0 overflow-hidden",children:e.jsx("div",{className:"pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10",children:e.jsxs(n,{transition:!0,className:"pointer-events-auto relative w-96 transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700",children:[e.jsx(g,{children:e.jsx("div",{className:"absolute top-0 left-0 -ml-8 flex pt-4 pr-2 duration-500 ease-in-out data-closed:opacity-0 sm:-ml-10 sm:pr-4",children:e.jsxs("button",{type:"button",onClick:()=>s(!1),className:"relative rounded-md text-gray-300 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden",children:[e.jsx("span",{className:"absolute -inset-2.5"}),e.jsx("span",{className:"sr-only",children:"Close panel"}),e.jsx(o,{"aria-hidden":"true",className:"size-6"})]})})}),e.jsx("div",{className:"h-full overflow-y-auto bg-white p-8",children:e.jsxs("div",{className:"space-y-6 pb-16",children:[e.jsxs("div",{children:[e.jsx("img",{alt:"",src:"https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",className:"block aspect-10/7 w-full rounded-lg object-cover"}),e.jsxs("div",{className:"mt-4 flex items-start justify-between",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-base font-semibold text-gray-900",children:[e.jsx("span",{className:"sr-only",children:"Details for "}),"IMG_4985.HEIC"]}),e.jsx("p",{className:"text-sm font-medium text-gray-500",children:"3.9 MB"})]}),e.jsxs("button",{type:"button",className:"relative ml-4 flex size-8 items-center justify-center rounded-full bg-white text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:outline-hidden",children:[e.jsx("span",{className:"absolute -inset-1.5"}),e.jsx(N,{"aria-hidden":"true",className:"size-6"}),e.jsx("span",{className:"sr-only",children:"Favorite"})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-medium text-gray-900",children:"Information"}),e.jsxs("dl",{className:"mt-2 divide-y divide-gray-200 border-t border-b border-gray-200",children:[e.jsxs("div",{className:"flex justify-between py-3 text-sm font-medium",children:[e.jsx("dt",{className:"text-gray-500",children:"Uploaded by"}),e.jsx("dd",{className:"text-gray-900",children:"Marie Culver"})]}),e.jsxs("div",{className:"flex justify-between py-3 text-sm font-medium",children:[e.jsx("dt",{className:"text-gray-500",children:"Created"}),e.jsx("dd",{className:"text-gray-900",children:"June 8, 2020"})]}),e.jsxs("div",{className:"flex justify-between py-3 text-sm font-medium",children:[e.jsx("dt",{className:"text-gray-500",children:"Last modified"}),e.jsx("dd",{className:"text-gray-900",children:"June 8, 2020"})]}),e.jsxs("div",{className:"flex justify-between py-3 text-sm font-medium",children:[e.jsx("dt",{className:"text-gray-500",children:"Dimensions"}),e.jsx("dd",{className:"text-gray-900",children:"4032 x 3024"})]}),e.jsxs("div",{className:"flex justify-between py-3 text-sm font-medium",children:[e.jsx("dt",{className:"text-gray-500",children:"Resolution"}),e.jsx("dd",{className:"text-gray-900",children:"72 x 72"})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-medium text-gray-900",children:"Description"}),e.jsxs("div",{className:"mt-2 flex items-center justify-between",children:[e.jsx("p",{className:"text-sm text-gray-500 italic",children:"Add a description to this image."}),e.jsxs("button",{type:"button",className:"relative -mr-2 flex size-8 items-center justify-center rounded-full bg-white text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:outline-hidden",children:[e.jsx("span",{className:"absolute -inset-1.5"}),e.jsx(j,{"aria-hidden":"true",className:"size-5"}),e.jsx("span",{className:"sr-only",children:"Add description"})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-medium text-gray-900",children:"Shared with"}),e.jsxs("ul",{role:"list",className:"mt-2 divide-y divide-gray-200 border-t border-b border-gray-200",children:[e.jsxs("li",{className:"flex items-center justify-between py-3",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("img",{alt:"",src:"https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=1024&h=1024&q=80",className:"size-8 rounded-full"}),e.jsx("p",{className:"ml-4 text-sm font-medium text-gray-900",children:"Aimee Douglas"})]}),e.jsxs("button",{type:"button",className:"ml-6 rounded-md bg-white text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden",children:["Remove",e.jsx("span",{className:"sr-only",children:" Aimee Douglas"})]})]}),e.jsxs("li",{className:"flex items-center justify-between py-3",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("img",{alt:"",src:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",className:"size-8 rounded-full"}),e.jsx("p",{className:"ml-4 text-sm font-medium text-gray-900",children:"Andrea McMillan"})]}),e.jsxs("button",{type:"button",className:"ml-6 rounded-md bg-white text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden",children:["Remove",e.jsx("span",{className:"sr-only",children:" Andrea McMillan"})]})]}),e.jsx("li",{className:"flex items-center justify-between py-2",children:e.jsxs("button",{type:"button",className:"group -ml-1 flex items-center rounded-md bg-white p-1 focus:ring-2 focus:ring-indigo-500 focus:outline-hidden",children:[e.jsx("span",{className:"flex size-8 items-center justify-center rounded-full border-2 border-dashed border-gray-300 text-gray-400",children:e.jsx(m,{"aria-hidden":"true",className:"size-5"})}),e.jsx("span",{className:"ml-4 text-sm font-medium text-indigo-600 group-hover:text-indigo-500",children:"Share"})]})})]})]}),e.jsxs("div",{className:"flex",children:[e.jsx("button",{type:"button",className:"flex-1 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"Download"}),e.jsx("button",{type:"button",className:"ml-3 flex-1 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50",children:"Delete"})]})]})})]})})})})]})}const G=`'use client'

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, TransitionChild } from '@headlessui/react'
import { HeartIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { PencilIcon, PlusIcon } from '@heroicons/react/20/solid'

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
              className="pointer-events-auto relative w-96 transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
            >
              <TransitionChild>
                <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 duration-500 ease-in-out data-closed:opacity-0 sm:-ml-10 sm:pr-4">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="relative rounded-md text-gray-300 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden"
                  >
                    <span className="absolute -inset-2.5" />
                    <span className="sr-only">Close panel</span>
                    <XMarkIcon aria-hidden="true" className="size-6" />
                  </button>
                </div>
              </TransitionChild>
              <div className="h-full overflow-y-auto bg-white p-8">
                <div className="space-y-6 pb-16">
                  <div>
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
                      className="block aspect-10/7 w-full rounded-lg object-cover"
                    />
                    <div className="mt-4 flex items-start justify-between">
                      <div>
                        <h2 className="text-base font-semibold text-gray-900">
                          <span className="sr-only">Details for </span>IMG_4985.HEIC
                        </h2>
                        <p className="text-sm font-medium text-gray-500">3.9 MB</p>
                      </div>
                      <button
                        type="button"
                        className="relative ml-4 flex size-8 items-center justify-center rounded-full bg-white text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:outline-hidden"
                      >
                        <span className="absolute -inset-1.5" />
                        <HeartIcon aria-hidden="true" className="size-6" />
                        <span className="sr-only">Favorite</span>
                      </button>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Information</h3>
                    <dl className="mt-2 divide-y divide-gray-200 border-t border-b border-gray-200">
                      <div className="flex justify-between py-3 text-sm font-medium">
                        <dt className="text-gray-500">Uploaded by</dt>
                        <dd className="text-gray-900">Marie Culver</dd>
                      </div>
                      <div className="flex justify-between py-3 text-sm font-medium">
                        <dt className="text-gray-500">Created</dt>
                        <dd className="text-gray-900">June 8, 2020</dd>
                      </div>
                      <div className="flex justify-between py-3 text-sm font-medium">
                        <dt className="text-gray-500">Last modified</dt>
                        <dd className="text-gray-900">June 8, 2020</dd>
                      </div>
                      <div className="flex justify-between py-3 text-sm font-medium">
                        <dt className="text-gray-500">Dimensions</dt>
                        <dd className="text-gray-900">4032 x 3024</dd>
                      </div>
                      <div className="flex justify-between py-3 text-sm font-medium">
                        <dt className="text-gray-500">Resolution</dt>
                        <dd className="text-gray-900">72 x 72</dd>
                      </div>
                    </dl>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Description</h3>
                    <div className="mt-2 flex items-center justify-between">
                      <p className="text-sm text-gray-500 italic">Add a description to this image.</p>
                      <button
                        type="button"
                        className="relative -mr-2 flex size-8 items-center justify-center rounded-full bg-white text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:outline-hidden"
                      >
                        <span className="absolute -inset-1.5" />
                        <PencilIcon aria-hidden="true" className="size-5" />
                        <span className="sr-only">Add description</span>
                      </button>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Shared with</h3>
                    <ul role="list" className="mt-2 divide-y divide-gray-200 border-t border-b border-gray-200">
                      <li className="flex items-center justify-between py-3">
                        <div className="flex items-center">
                          <img
                            alt=""
                            src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=1024&h=1024&q=80"
                            className="size-8 rounded-full"
                          />
                          <p className="ml-4 text-sm font-medium text-gray-900">Aimee Douglas</p>
                        </div>
                        <button
                          type="button"
                          className="ml-6 rounded-md bg-white text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
                        >
                          Remove<span className="sr-only"> Aimee Douglas</span>
                        </button>
                      </li>
                      <li className="flex items-center justify-between py-3">
                        <div className="flex items-center">
                          <img
                            alt=""
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            className="size-8 rounded-full"
                          />
                          <p className="ml-4 text-sm font-medium text-gray-900">Andrea McMillan</p>
                        </div>
                        <button
                          type="button"
                          className="ml-6 rounded-md bg-white text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
                        >
                          Remove<span className="sr-only"> Andrea McMillan</span>
                        </button>
                      </li>
                      <li className="flex items-center justify-between py-2">
                        <button
                          type="button"
                          className="group -ml-1 flex items-center rounded-md bg-white p-1 focus:ring-2 focus:ring-indigo-500 focus:outline-hidden"
                        >
                          <span className="flex size-8 items-center justify-center rounded-full border-2 border-dashed border-gray-300 text-gray-400">
                            <PlusIcon aria-hidden="true" className="size-5" />
                          </span>
                          <span className="ml-4 text-sm font-medium text-indigo-600 group-hover:text-indigo-500">
                            Share
                          </span>
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="flex">
                    <button
                      type="button"
                      className="flex-1 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Download
                    </button>
                    <button
                      type="button"
                      className="ml-3 flex-1 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50"
                    >
                      Delete
                    </button>
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
`,fe=()=>{const a=[{id:"01",name:"With close button on outside",component:e.jsx(w,{}),raw:k},{id:"02",name:"Empty",component:e.jsx(D,{}),raw:M},{id:"03",name:"Wide empty",component:e.jsx(z,{}),raw:C},{id:"04",name:"With background overlay",component:e.jsx(O,{}),raw:P},{id:"05",name:"With branded header",component:e.jsx(E,{}),raw:I},{id:"06",name:"With sticky footer",component:e.jsx(B,{}),raw:q},{id:"07",name:"Create project form example",component:e.jsx(T,{}),raw:W},{id:"08",name:"Wide create project form example",component:e.jsx(H,{}),raw:J},{id:"09",name:"User profile example",component:e.jsx(U,{}),raw:Q},{id:"10",name:"Wide horizontal user profile example",component:e.jsx(A,{}),raw:V},{id:"11",name:"Contact list example",component:e.jsx(L,{}),raw:Y},{id:"12",name:"File details example",component:e.jsx($,{}),raw:G}];return e.jsx("div",{className:"space-y-10 pb-20",children:a.map(s=>e.jsxs("section",{children:[e.jsxs("h2",{className:"mb-4 text-lg font-bold text-gray-800",children:[s.id,". ",s.name]}),e.jsx(y,{name:s.name,code:s.raw,children:s.component})]},s.id))})};export{fe as default};
