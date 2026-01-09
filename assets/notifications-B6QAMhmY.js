import{r as a,j as e,aA as i}from"./index-CvCVbuS9.js";import{P as o}from"./PreviewWrapper-TzFvRoPZ.js";import{F as r}from"./CheckCircleIcon-C3Lx6COH.js";import{F as n}from"./XMarkIcon-aALukfH1.js";import{F as d}from"./InboxIcon-BAHaQzYM.js";function l(){const[s,t]=a.useState(!0);return e.jsx(e.Fragment,{children:e.jsx("div",{"aria-live":"assertive",className:"pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6",children:e.jsx("div",{className:"flex w-full flex-col items-center space-y-4 sm:items-end",children:e.jsx(i,{show:s,children:e.jsx("div",{className:"pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white ring-1 shadow-lg ring-black/5 transition data-closed:opacity-0 data-enter:transform data-enter:duration-300 data-enter:ease-out data-closed:data-enter:translate-y-2 data-leave:duration-100 data-leave:ease-in data-closed:data-enter:sm:translate-x-2 data-closed:data-enter:sm:translate-y-0",children:e.jsx("div",{className:"p-4",children:e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"shrink-0",children:e.jsx(r,{"aria-hidden":"true",className:"size-6 text-green-400"})}),e.jsxs("div",{className:"ml-3 w-0 flex-1 pt-0.5",children:[e.jsx("p",{className:"text-sm font-medium text-gray-900",children:"Successfully saved!"}),e.jsx("p",{className:"mt-1 text-sm text-gray-500",children:"Anyone with a link can now view this file."})]}),e.jsx("div",{className:"ml-4 flex shrink-0",children:e.jsxs("button",{type:"button",onClick:()=>{t(!1)},className:"inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden",children:[e.jsx("span",{className:"sr-only",children:"Close"}),e.jsx(n,{"aria-hidden":"true",className:"size-5"})]})})]})})})})})})})}const c=`'use client'

import { useState } from 'react'
import { Transition } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import { XMarkIcon } from '@heroicons/react/20/solid'

export default function Example() {
  const [show, setShow] = useState(true)

  return (
    <>
      {/* Global notification live region, render this permanently at the end of the document */}
      <div
        aria-live="assertive"
        className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
      >
        <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
          {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
          <Transition show={show}>
            <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white ring-1 shadow-lg ring-black/5 transition data-closed:opacity-0 data-enter:transform data-enter:duration-300 data-enter:ease-out data-closed:data-enter:translate-y-2 data-leave:duration-100 data-leave:ease-in data-closed:data-enter:sm:translate-x-2 data-closed:data-enter:sm:translate-y-0">
              <div className="p-4">
                <div className="flex items-start">
                  <div className="shrink-0">
                    <CheckCircleIcon aria-hidden="true" className="size-6 text-green-400" />
                  </div>
                  <div className="ml-3 w-0 flex-1 pt-0.5">
                    <p className="text-sm font-medium text-gray-900">Successfully saved!</p>
                    <p className="mt-1 text-sm text-gray-500">Anyone with a link can now view this file.</p>
                  </div>
                  <div className="ml-4 flex shrink-0">
                    <button
                      type="button"
                      onClick={() => {
                        setShow(false)
                      }}
                      className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon aria-hidden="true" className="size-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </>
  )
}
`;function m(){const[s,t]=a.useState(!0);return e.jsx(e.Fragment,{children:e.jsx("div",{"aria-live":"assertive",className:"pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6",children:e.jsx("div",{className:"flex w-full flex-col items-center space-y-4 sm:items-end",children:e.jsx(i,{show:s,children:e.jsx("div",{className:"pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white ring-1 shadow-lg ring-black/5 transition data-closed:opacity-0 data-enter:transform data-enter:duration-300 data-enter:ease-out data-closed:data-enter:translate-y-2 data-leave:duration-100 data-leave:ease-in data-closed:data-enter:sm:translate-x-2 data-closed:data-enter:sm:translate-y-0",children:e.jsx("div",{className:"p-4",children:e.jsxs("div",{className:"flex items-center",children:[e.jsxs("div",{className:"flex w-0 flex-1 justify-between",children:[e.jsx("p",{className:"w-0 flex-1 text-sm font-medium text-gray-900",children:"Discussion archived"}),e.jsx("button",{type:"button",className:"ml-3 shrink-0 rounded-md bg-white text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden",children:"Undo"})]}),e.jsx("div",{className:"ml-4 flex shrink-0",children:e.jsxs("button",{type:"button",onClick:()=>{t(!1)},className:"inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden",children:[e.jsx("span",{className:"sr-only",children:"Close"}),e.jsx(n,{"aria-hidden":"true",className:"size-5"})]})})]})})})})})})})}const u=`'use client'

import { useState } from 'react'
import { Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/20/solid'

export default function Example() {
  const [show, setShow] = useState(true)

  return (
    <>
      {/* Global notification live region, render this permanently at the end of the document */}
      <div
        aria-live="assertive"
        className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
      >
        <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
          {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
          <Transition show={show}>
            <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white ring-1 shadow-lg ring-black/5 transition data-closed:opacity-0 data-enter:transform data-enter:duration-300 data-enter:ease-out data-closed:data-enter:translate-y-2 data-leave:duration-100 data-leave:ease-in data-closed:data-enter:sm:translate-x-2 data-closed:data-enter:sm:translate-y-0">
              <div className="p-4">
                <div className="flex items-center">
                  <div className="flex w-0 flex-1 justify-between">
                    <p className="w-0 flex-1 text-sm font-medium text-gray-900">Discussion archived</p>
                    <button
                      type="button"
                      className="ml-3 shrink-0 rounded-md bg-white text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
                    >
                      Undo
                    </button>
                  </div>
                  <div className="ml-4 flex shrink-0">
                    <button
                      type="button"
                      onClick={() => {
                        setShow(false)
                      }}
                      className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon aria-hidden="true" className="size-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </>
  )
}
`;function f(){const[s,t]=a.useState(!0);return e.jsx(e.Fragment,{children:e.jsx("div",{"aria-live":"assertive",className:"pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6",children:e.jsx("div",{className:"flex w-full flex-col items-center space-y-4 sm:items-end",children:e.jsx(i,{show:s,children:e.jsx("div",{className:"pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white ring-1 shadow-lg ring-black/5 transition data-closed:opacity-0 data-enter:transform data-enter:duration-300 data-enter:ease-out data-closed:data-enter:translate-y-2 data-leave:duration-100 data-leave:ease-in data-closed:data-enter:sm:translate-x-2 data-closed:data-enter:sm:translate-y-0",children:e.jsx("div",{className:"p-4",children:e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"shrink-0",children:e.jsx(d,{"aria-hidden":"true",className:"size-6 text-gray-400"})}),e.jsxs("div",{className:"ml-3 w-0 flex-1 pt-0.5",children:[e.jsx("p",{className:"text-sm font-medium text-gray-900",children:"Discussion moved"}),e.jsx("p",{className:"mt-1 text-sm text-gray-500",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur."}),e.jsxs("div",{className:"mt-3 flex space-x-7",children:[e.jsx("button",{type:"button",className:"rounded-md bg-white text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden",children:"Undo"}),e.jsx("button",{type:"button",className:"rounded-md bg-white text-sm font-medium text-gray-700 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden",children:"Dismiss"})]})]}),e.jsx("div",{className:"ml-4 flex shrink-0",children:e.jsxs("button",{type:"button",onClick:()=>{t(!1)},className:"inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden",children:[e.jsx("span",{className:"sr-only",children:"Close"}),e.jsx(n,{"aria-hidden":"true",className:"size-5"})]})})]})})})})})})})}const x=`'use client'

import { useState } from 'react'
import { Transition } from '@headlessui/react'
import { InboxIcon } from '@heroicons/react/24/outline'
import { XMarkIcon } from '@heroicons/react/20/solid'

export default function Example() {
  const [show, setShow] = useState(true)

  return (
    <>
      {/* Global notification live region, render this permanently at the end of the document */}
      <div
        aria-live="assertive"
        className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
      >
        <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
          {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
          <Transition show={show}>
            <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white ring-1 shadow-lg ring-black/5 transition data-closed:opacity-0 data-enter:transform data-enter:duration-300 data-enter:ease-out data-closed:data-enter:translate-y-2 data-leave:duration-100 data-leave:ease-in data-closed:data-enter:sm:translate-x-2 data-closed:data-enter:sm:translate-y-0">
              <div className="p-4">
                <div className="flex items-start">
                  <div className="shrink-0">
                    <InboxIcon aria-hidden="true" className="size-6 text-gray-400" />
                  </div>
                  <div className="ml-3 w-0 flex-1 pt-0.5">
                    <p className="text-sm font-medium text-gray-900">Discussion moved</p>
                    <p className="mt-1 text-sm text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.
                    </p>
                    <div className="mt-3 flex space-x-7">
                      <button
                        type="button"
                        className="rounded-md bg-white text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
                      >
                        Undo
                      </button>
                      <button
                        type="button"
                        className="rounded-md bg-white text-sm font-medium text-gray-700 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
                      >
                        Dismiss
                      </button>
                    </div>
                  </div>
                  <div className="ml-4 flex shrink-0">
                    <button
                      type="button"
                      onClick={() => {
                        setShow(false)
                      }}
                      className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon aria-hidden="true" className="size-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </>
  )
}
`;function h(){const[s,t]=a.useState(!0);return e.jsx(e.Fragment,{children:e.jsx("div",{"aria-live":"assertive",className:"pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6",children:e.jsx("div",{className:"flex w-full flex-col items-center space-y-4 sm:items-end",children:e.jsx(i,{show:s,children:e.jsxs("div",{className:"pointer-events-auto flex w-full max-w-md rounded-lg bg-white ring-1 shadow-lg ring-black/5 transition data-closed:opacity-0 data-enter:transform data-enter:duration-300 data-enter:ease-out data-closed:data-enter:translate-y-2 data-leave:duration-100 data-leave:ease-in data-closed:data-enter:sm:translate-x-2 data-closed:data-enter:sm:translate-y-0",children:[e.jsx("div",{className:"w-0 flex-1 p-4",children:e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"shrink-0 pt-0.5",children:e.jsx("img",{alt:"",src:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80",className:"size-10 rounded-full"})}),e.jsxs("div",{className:"ml-3 w-0 flex-1",children:[e.jsx("p",{className:"text-sm font-medium text-gray-900",children:"Emilia Gates"}),e.jsx("p",{className:"mt-1 text-sm text-gray-500",children:"Sure! 8:30pm works great!"})]})]})}),e.jsx("div",{className:"flex border-l border-gray-200",children:e.jsx("button",{type:"button",onClick:()=>{t(!1)},className:"flex w-full items-center justify-center rounded-none rounded-r-lg border border-transparent p-4 text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-hidden",children:"Reply"})})]})})})})})}const p=`'use client'

import { useState } from 'react'
import { Transition } from '@headlessui/react'

export default function Example() {
  const [show, setShow] = useState(true)

  return (
    <>
      {/* Global notification live region, render this permanently at the end of the document */}
      <div
        aria-live="assertive"
        className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
      >
        <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
          {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
          <Transition show={show}>
            <div className="pointer-events-auto flex w-full max-w-md rounded-lg bg-white ring-1 shadow-lg ring-black/5 transition data-closed:opacity-0 data-enter:transform data-enter:duration-300 data-enter:ease-out data-closed:data-enter:translate-y-2 data-leave:duration-100 data-leave:ease-in data-closed:data-enter:sm:translate-x-2 data-closed:data-enter:sm:translate-y-0">
              <div className="w-0 flex-1 p-4">
                <div className="flex items-start">
                  <div className="shrink-0 pt-0.5">
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                      className="size-10 rounded-full"
                    />
                  </div>
                  <div className="ml-3 w-0 flex-1">
                    <p className="text-sm font-medium text-gray-900">Emilia Gates</p>
                    <p className="mt-1 text-sm text-gray-500">Sure! 8:30pm works great!</p>
                  </div>
                </div>
              </div>
              <div className="flex border-l border-gray-200">
                <button
                  type="button"
                  onClick={() => {
                    setShow(false)
                  }}
                  className="flex w-full items-center justify-center rounded-none rounded-r-lg border border-transparent p-4 text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-hidden"
                >
                  Reply
                </button>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </>
  )
}
`;function v(){const[s,t]=a.useState(!0);return e.jsx(e.Fragment,{children:e.jsx("div",{"aria-live":"assertive",className:"pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6",children:e.jsx("div",{className:"flex w-full flex-col items-center space-y-4 sm:items-end",children:e.jsx(i,{show:s,children:e.jsxs("div",{className:"pointer-events-auto flex w-full max-w-md divide-x divide-gray-200 rounded-lg bg-white ring-1 shadow-lg ring-black/5 transition data-closed:opacity-0 data-enter:transform data-enter:duration-300 data-enter:ease-out data-closed:data-enter:translate-y-2 data-leave:duration-100 data-leave:ease-in data-closed:data-enter:sm:translate-x-2 data-closed:data-enter:sm:translate-y-0",children:[e.jsx("div",{className:"flex w-0 flex-1 items-center p-4",children:e.jsxs("div",{className:"w-full",children:[e.jsx("p",{className:"text-sm font-medium text-gray-900",children:"Receive notifications"}),e.jsx("p",{className:"mt-1 text-sm text-gray-500",children:"Notifications may include alerts, sounds, and badges."})]})}),e.jsx("div",{className:"flex",children:e.jsxs("div",{className:"flex flex-col divide-y divide-gray-200",children:[e.jsx("div",{className:"flex h-0 flex-1",children:e.jsx("button",{type:"button",onClick:()=>{t(!1)},className:"flex w-full items-center justify-center rounded-none rounded-tr-lg border border-transparent px-4 py-3 text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:z-10 focus:ring-2 focus:ring-indigo-500 focus:outline-hidden",children:"Reply"})}),e.jsx("div",{className:"flex h-0 flex-1",children:e.jsx("button",{type:"button",onClick:()=>{t(!1)},className:"flex w-full items-center justify-center rounded-none rounded-br-lg border border-transparent px-4 py-3 text-sm font-medium text-gray-700 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:outline-hidden",children:"Don't allow"})})]})})]})})})})})}const g=`'use client'

import { useState } from 'react'
import { Transition } from '@headlessui/react'

export default function Example() {
  const [show, setShow] = useState(true)

  return (
    <>
      {/* Global notification live region, render this permanently at the end of the document */}
      <div
        aria-live="assertive"
        className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
      >
        <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
          {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
          <Transition show={show}>
            <div className="pointer-events-auto flex w-full max-w-md divide-x divide-gray-200 rounded-lg bg-white ring-1 shadow-lg ring-black/5 transition data-closed:opacity-0 data-enter:transform data-enter:duration-300 data-enter:ease-out data-closed:data-enter:translate-y-2 data-leave:duration-100 data-leave:ease-in data-closed:data-enter:sm:translate-x-2 data-closed:data-enter:sm:translate-y-0">
              <div className="flex w-0 flex-1 items-center p-4">
                <div className="w-full">
                  <p className="text-sm font-medium text-gray-900">Receive notifications</p>
                  <p className="mt-1 text-sm text-gray-500">Notifications may include alerts, sounds, and badges.</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col divide-y divide-gray-200">
                  <div className="flex h-0 flex-1">
                    <button
                      type="button"
                      onClick={() => {
                        setShow(false)
                      }}
                      className="flex w-full items-center justify-center rounded-none rounded-tr-lg border border-transparent px-4 py-3 text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:z-10 focus:ring-2 focus:ring-indigo-500 focus:outline-hidden"
                    >
                      Reply
                    </button>
                  </div>
                  <div className="flex h-0 flex-1">
                    <button
                      type="button"
                      onClick={() => {
                        setShow(false)
                      }}
                      className="flex w-full items-center justify-center rounded-none rounded-br-lg border border-transparent px-4 py-3 text-sm font-medium text-gray-700 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:outline-hidden"
                    >
                      Don't allow
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </>
  )
}
`;function y(){const[s,t]=a.useState(!0);return e.jsx(e.Fragment,{children:e.jsx("div",{"aria-live":"assertive",className:"pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6",children:e.jsx("div",{className:"flex w-full flex-col items-center space-y-4 sm:items-end",children:e.jsx(i,{show:s,children:e.jsx("div",{className:"pointer-events-auto w-full max-w-sm rounded-lg bg-white ring-1 shadow-lg ring-black/5 transition data-closed:opacity-0 data-enter:transform data-enter:duration-300 data-enter:ease-out data-closed:data-enter:translate-y-2 data-leave:duration-100 data-leave:ease-in data-closed:data-enter:sm:translate-x-2 data-closed:data-enter:sm:translate-y-0",children:e.jsx("div",{className:"p-4",children:e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"shrink-0 pt-0.5",children:e.jsx("img",{alt:"",src:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80",className:"size-10 rounded-full"})}),e.jsxs("div",{className:"ml-3 w-0 flex-1",children:[e.jsx("p",{className:"text-sm font-medium text-gray-900",children:"Emilia Gates"}),e.jsx("p",{className:"mt-1 text-sm text-gray-500",children:"Sent you an invite to connect."}),e.jsxs("div",{className:"mt-4 flex",children:[e.jsx("button",{type:"button",className:"inline-flex items-center rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"Accept"}),e.jsx("button",{type:"button",className:"ml-3 inline-flex items-center rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50",children:"Decline"})]})]}),e.jsx("div",{className:"ml-4 flex shrink-0",children:e.jsxs("button",{type:"button",onClick:()=>{t(!1)},className:"inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden",children:[e.jsx("span",{className:"sr-only",children:"Close"}),e.jsx(n,{"aria-hidden":"true",className:"size-5"})]})})]})})})})})})})}const w=`'use client'

import { useState } from 'react'
import { Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/20/solid'

export default function Example() {
  const [show, setShow] = useState(true)

  return (
    <>
      {/* Global notification live region, render this permanently at the end of the document */}
      <div
        aria-live="assertive"
        className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
      >
        <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
          {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
          <Transition show={show}>
            <div className="pointer-events-auto w-full max-w-sm rounded-lg bg-white ring-1 shadow-lg ring-black/5 transition data-closed:opacity-0 data-enter:transform data-enter:duration-300 data-enter:ease-out data-closed:data-enter:translate-y-2 data-leave:duration-100 data-leave:ease-in data-closed:data-enter:sm:translate-x-2 data-closed:data-enter:sm:translate-y-0">
              <div className="p-4">
                <div className="flex items-start">
                  <div className="shrink-0 pt-0.5">
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                      className="size-10 rounded-full"
                    />
                  </div>
                  <div className="ml-3 w-0 flex-1">
                    <p className="text-sm font-medium text-gray-900">Emilia Gates</p>
                    <p className="mt-1 text-sm text-gray-500">Sent you an invite to connect.</p>
                    <div className="mt-4 flex">
                      <button
                        type="button"
                        className="inline-flex items-center rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Accept
                      </button>
                      <button
                        type="button"
                        className="ml-3 inline-flex items-center rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50"
                      >
                        Decline
                      </button>
                    </div>
                  </div>
                  <div className="ml-4 flex shrink-0">
                    <button
                      type="button"
                      onClick={() => {
                        setShow(false)
                      }}
                      className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon aria-hidden="true" className="size-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </>
  )
}
`,C=()=>{const s=[{id:"01",name:"Simple",component:e.jsx(l,{}),raw:c},{id:"02",name:"Condensed",component:e.jsx(m,{}),raw:u},{id:"03",name:"With actions below",component:e.jsx(f,{}),raw:x},{id:"04",name:"With avatar",component:e.jsx(h,{}),raw:p},{id:"05",name:"With split buttons",component:e.jsx(v,{}),raw:g},{id:"06",name:"With buttons below",component:e.jsx(y,{}),raw:w}];return e.jsx("div",{className:"space-y-10 pb-20",children:s.map(t=>e.jsxs("section",{children:[e.jsxs("h2",{className:"mb-4 text-lg font-bold text-gray-800",children:[t.id,". ",t.name]}),e.jsx(o,{name:t.name,code:t.raw,children:t.component})]},t.id))})};export{C as default};
