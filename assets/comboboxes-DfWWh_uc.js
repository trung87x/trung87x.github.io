import{r as n,j as e}from"./index-CvCVbuS9.js";import{P as C}from"./PreviewWrapper-TzFvRoPZ.js";import{H as i,k as d,B as u,U as c,a as m}from"./combobox-TbNdQ4q_.js";import{Z as p}from"./label-CY_Q6YdE.js";import{F as x}from"./ChevronUpDownIcon-D7Ex7dEF.js";import{F as f}from"./CheckIcon-BfHG0Qrp.js";import"./use-by-comparator-Ch7KvTmY.js";import"./use-default-value-Cs7QsSkB.js";import"./floating-CjydGm1Z.js";import"./element-movement-BT6A7GGi.js";import"./bugs-qQ_SbDk4.js";import"./use-resolve-button-type-J0J8N5g4.js";import"./use-tree-walker-_f7mgbza.js";import"./form-fields-DfbHTuSb.js";import"./frozen-ohsQXSW6.js";const b=[{id:1,name:"Leslie Alexander"}];function w(){const[s,o]=n.useState(""),[l,r]=n.useState(null),a=s===""?b:b.filter(t=>t.name.toLowerCase().includes(s.toLowerCase()));return e.jsxs(i,{as:"div",value:l,onChange:t=>{o(""),r(t)},children:[e.jsx(p,{className:"block text-sm/6 font-medium text-gray-900",children:"Assigned to"}),e.jsxs("div",{className:"relative mt-2",children:[e.jsx(d,{className:"block w-full rounded-md bg-white py-1.5 pr-12 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6",onChange:t=>o(t.target.value),onBlur:()=>o(""),displayValue:t=>t?.name}),e.jsx(u,{className:"absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-hidden",children:e.jsx(x,{className:"size-5 text-gray-400","aria-hidden":"true"})}),a.length>0&&e.jsx(c,{className:"absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base ring-1 shadow-lg ring-black/5 focus:outline-hidden sm:text-sm",children:a.map(t=>e.jsxs(m,{value:t,className:"group relative cursor-default py-2 pr-9 pl-3 text-gray-900 select-none data-focus:bg-indigo-600 data-focus:text-white data-focus:outline-hidden",children:[e.jsx("span",{className:"block truncate group-data-selected:font-semibold",children:t.name}),e.jsx("span",{className:"absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-focus:text-white group-data-selected:flex",children:e.jsx(f,{className:"size-5","aria-hidden":"true"})})]},t.id))})]})]})}const N=`'use client'

import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions, Label } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'

const people = [
  { id: 1, name: 'Leslie Alexander' },
  // More users...
]

export default function Example() {
  const [query, setQuery] = useState('')
  const [selectedPerson, setSelectedPerson] = useState(null)

  const filteredPeople =
    query === ''
      ? people
      : people.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase())
        })

  return (
    <Combobox
      as="div"
      value={selectedPerson}
      onChange={(person) => {
        setQuery('')
        setSelectedPerson(person)
      }}
    >
      <Label className="block text-sm/6 font-medium text-gray-900">Assigned to</Label>
      <div className="relative mt-2">
        <ComboboxInput
          className="block w-full rounded-md bg-white py-1.5 pr-12 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          onChange={(event) => setQuery(event.target.value)}
          onBlur={() => setQuery('')}
          displayValue={(person) => person?.name}
        />
        <ComboboxButton className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-hidden">
          <ChevronUpDownIcon className="size-5 text-gray-400" aria-hidden="true" />
        </ComboboxButton>

        {filteredPeople.length > 0 && (
          <ComboboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base ring-1 shadow-lg ring-black/5 focus:outline-hidden sm:text-sm">
            {filteredPeople.map((person) => (
              <ComboboxOption
                key={person.id}
                value={person}
                className="group relative cursor-default py-2 pr-9 pl-3 text-gray-900 select-none data-focus:bg-indigo-600 data-focus:text-white data-focus:outline-hidden"
              >
                <span className="block truncate group-data-selected:font-semibold">{person.name}</span>

                <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-focus:text-white group-data-selected:flex">
                  <CheckIcon className="size-5" aria-hidden="true" />
                </span>
              </ComboboxOption>
            ))}
          </ComboboxOptions>
        )}
      </div>
    </Combobox>
  )
}
`,g=[{id:1,name:"Leslie Alexander",online:!0}];function v(...s){return s.filter(Boolean).join(" ")}function j(){const[s,o]=n.useState(""),[l,r]=n.useState(null),a=s===""?g:g.filter(t=>t.name.toLowerCase().includes(s.toLowerCase()));return e.jsxs(i,{as:"div",value:l,onChange:t=>{o(""),r(t)},children:[e.jsx(p,{className:"block text-sm/6 font-medium text-gray-900",children:"Assigned to"}),e.jsxs("div",{className:"relative mt-2",children:[e.jsx(d,{className:"block w-full rounded-md bg-white py-1.5 pr-12 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6",onChange:t=>o(t.target.value),onBlur:()=>o(""),displayValue:t=>t?.name}),e.jsx(u,{className:"absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-hidden",children:e.jsx(x,{className:"size-5 text-gray-400","aria-hidden":"true"})}),a.length>0&&e.jsx(c,{className:"absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base ring-1 shadow-lg ring-black/5 focus:outline-hidden sm:text-sm",children:a.map(t=>e.jsxs(m,{value:t,className:"group relative cursor-default py-2 pr-9 pl-3 text-gray-900 select-none data-focus:bg-indigo-600 data-focus:text-white data-focus:outline-hidden",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("span",{className:v("inline-block size-2 shrink-0 rounded-full",t.online?"bg-green-400":"bg-gray-200"),"aria-hidden":"true"}),e.jsxs("span",{className:"ml-3 truncate group-data-selected:font-semibold",children:[t.name,e.jsxs("span",{className:"sr-only",children:[" is ",t.online?"online":"offline"]})]})]}),e.jsx("span",{className:"absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-focus:text-white group-data-selected:flex",children:e.jsx(f,{className:"size-5","aria-hidden":"true"})})]},t.id))})]})]})}const k=`'use client'

import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions, Label } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'

const people = [
  { id: 1, name: 'Leslie Alexander', online: true },
  // More users...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [query, setQuery] = useState('')
  const [selectedPerson, setSelectedPerson] = useState(null)

  const filteredPeople =
    query === ''
      ? people
      : people.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase())
        })

  return (
    <Combobox
      as="div"
      value={selectedPerson}
      onChange={(person) => {
        setQuery('')
        setSelectedPerson(person)
      }}
    >
      <Label className="block text-sm/6 font-medium text-gray-900">Assigned to</Label>
      <div className="relative mt-2">
        <ComboboxInput
          className="block w-full rounded-md bg-white py-1.5 pr-12 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          onChange={(event) => setQuery(event.target.value)}
          onBlur={() => setQuery('')}
          displayValue={(person) => person?.name}
        />
        <ComboboxButton className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-hidden">
          <ChevronUpDownIcon className="size-5 text-gray-400" aria-hidden="true" />
        </ComboboxButton>

        {filteredPeople.length > 0 && (
          <ComboboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base ring-1 shadow-lg ring-black/5 focus:outline-hidden sm:text-sm">
            {filteredPeople.map((person) => (
              <ComboboxOption
                key={person.id}
                value={person}
                className="group relative cursor-default py-2 pr-9 pl-3 text-gray-900 select-none data-focus:bg-indigo-600 data-focus:text-white data-focus:outline-hidden"
              >
                <div className="flex items-center">
                  <span
                    className={classNames(
                      'inline-block size-2 shrink-0 rounded-full',
                      person.online ? 'bg-green-400' : 'bg-gray-200',
                    )}
                    aria-hidden="true"
                  />
                  <span className="ml-3 truncate group-data-selected:font-semibold">
                    {person.name}
                    <span className="sr-only"> is {person.online ? 'online' : 'offline'}</span>
                  </span>
                </div>

                <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-focus:text-white group-data-selected:flex">
                  <CheckIcon className="size-5" aria-hidden="true" />
                </span>
              </ComboboxOption>
            ))}
          </ComboboxOptions>
        )}
      </div>
    </Combobox>
  )
}
`,h=[{id:1,name:"Leslie Alexander",imageUrl:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}];function P(){const[s,o]=n.useState(""),[l,r]=n.useState(null),a=s===""?h:h.filter(t=>t.name.toLowerCase().includes(s.toLowerCase()));return e.jsxs(i,{as:"div",value:l,onChange:t=>{o(""),r(t)},children:[e.jsx(p,{className:"block text-sm/6 font-medium text-gray-900",children:"Assigned to"}),e.jsxs("div",{className:"relative mt-2",children:[e.jsx(d,{className:"block w-full rounded-md bg-white py-1.5 pr-12 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6",onChange:t=>o(t.target.value),onBlur:()=>o(""),displayValue:t=>t?.name}),e.jsx(u,{className:"absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-hidden",children:e.jsx(x,{className:"size-5 text-gray-400","aria-hidden":"true"})}),a.length>0&&e.jsx(c,{className:"absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base ring-1 shadow-lg ring-black/5 focus:outline-hidden sm:text-sm",children:a.map(t=>e.jsxs(m,{value:t,className:"group relative cursor-default py-2 pr-9 pl-3 text-gray-900 select-none data-focus:bg-indigo-600 data-focus:text-white data-focus:outline-hidden",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("img",{src:t.imageUrl,alt:"",className:"size-6 shrink-0 rounded-full"}),e.jsx("span",{className:"ml-3 truncate group-data-selected:font-semibold",children:t.name})]}),e.jsx("span",{className:"absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-focus:text-white group-data-selected:flex",children:e.jsx(f,{className:"size-5","aria-hidden":"true"})})]},t.id))})]})]})}const L=`'use client'

import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions, Label } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'

const people = [
  {
    id: 1,
    name: 'Leslie Alexander',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  // More users...
]

export default function Example() {
  const [query, setQuery] = useState('')
  const [selectedPerson, setSelectedPerson] = useState(null)

  const filteredPeople =
    query === ''
      ? people
      : people.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase())
        })

  return (
    <Combobox
      as="div"
      value={selectedPerson}
      onChange={(person) => {
        setQuery('')
        setSelectedPerson(person)
      }}
    >
      <Label className="block text-sm/6 font-medium text-gray-900">Assigned to</Label>
      <div className="relative mt-2">
        <ComboboxInput
          className="block w-full rounded-md bg-white py-1.5 pr-12 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          onChange={(event) => setQuery(event.target.value)}
          onBlur={() => setQuery('')}
          displayValue={(person) => person?.name}
        />
        <ComboboxButton className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-hidden">
          <ChevronUpDownIcon className="size-5 text-gray-400" aria-hidden="true" />
        </ComboboxButton>

        {filteredPeople.length > 0 && (
          <ComboboxOptions className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base ring-1 shadow-lg ring-black/5 focus:outline-hidden sm:text-sm">
            {filteredPeople.map((person) => (
              <ComboboxOption
                key={person.id}
                value={person}
                className="group relative cursor-default py-2 pr-9 pl-3 text-gray-900 select-none data-focus:bg-indigo-600 data-focus:text-white data-focus:outline-hidden"
              >
                <div className="flex items-center">
                  <img src={person.imageUrl} alt="" className="size-6 shrink-0 rounded-full" />
                  <span className="ml-3 truncate group-data-selected:font-semibold">{person.name}</span>
                </div>

                <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-focus:text-white group-data-selected:flex">
                  <CheckIcon className="size-5" aria-hidden="true" />
                </span>
              </ComboboxOption>
            ))}
          </ComboboxOptions>
        )}
      </div>
    </Combobox>
  )
}
`,y=[{name:"Leslie Alexander",username:"@lesliealexander"}];function S(){const[s,o]=n.useState(""),[l,r]=n.useState(null),a=s===""?y:y.filter(t=>t.name.toLowerCase().includes(s.toLowerCase()));return e.jsxs(i,{as:"div",value:l,onChange:t=>{o(""),r(t)},children:[e.jsx(p,{className:"block text-sm/6 font-medium text-gray-900",children:"Assigned to"}),e.jsxs("div",{className:"relative mt-2",children:[e.jsx(d,{className:"block w-full rounded-md bg-white py-1.5 pr-12 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6",onChange:t=>o(t.target.value),onBlur:()=>o(""),displayValue:t=>t?.name}),e.jsx(u,{className:"absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-hidden",children:e.jsx(x,{className:"size-5 text-gray-400","aria-hidden":"true"})}),a.length>0&&e.jsx(c,{className:"absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base ring-1 shadow-lg ring-black/5 focus:outline-hidden sm:text-sm",children:a.map(t=>e.jsxs(m,{value:t,className:"group relative cursor-default py-2 pr-9 pl-3 text-gray-900 select-none data-focus:bg-indigo-600 data-focus:text-white data-focus:outline-hidden",children:[e.jsxs("div",{className:"flex",children:[e.jsx("span",{className:"truncate group-data-selected:font-semibold",children:t.name}),e.jsx("span",{className:"ml-2 truncate text-gray-500 group-data-focus:text-indigo-200",children:t.username})]}),e.jsx("span",{className:"absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-focus:text-white group-data-selected:flex",children:e.jsx(f,{className:"size-5","aria-hidden":"true"})})]},t.username))})]})]})}const z=`'use client'

import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions, Label } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'

const people = [
  { name: 'Leslie Alexander', username: '@lesliealexander' },
  // More users...
]

export default function Example() {
  const [query, setQuery] = useState('')
  const [selectedPerson, setSelectedPerson] = useState(null)

  const filteredPeople =
    query === ''
      ? people
      : people.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase())
        })

  return (
    <Combobox
      as="div"
      value={selectedPerson}
      onChange={(person) => {
        setQuery('')
        setSelectedPerson(person)
      }}
    >
      <Label className="block text-sm/6 font-medium text-gray-900">Assigned to</Label>
      <div className="relative mt-2">
        <ComboboxInput
          className="block w-full rounded-md bg-white py-1.5 pr-12 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          onChange={(event) => setQuery(event.target.value)}
          onBlur={() => setQuery('')}
          displayValue={(person) => person?.name}
        />
        <ComboboxButton className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-hidden">
          <ChevronUpDownIcon className="size-5 text-gray-400" aria-hidden="true" />
        </ComboboxButton>

        {filteredPeople.length > 0 && (
          <ComboboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base ring-1 shadow-lg ring-black/5 focus:outline-hidden sm:text-sm">
            {filteredPeople.map((person) => (
              <ComboboxOption
                key={person.username}
                value={person}
                className="group relative cursor-default py-2 pr-9 pl-3 text-gray-900 select-none data-focus:bg-indigo-600 data-focus:text-white data-focus:outline-hidden"
              >
                <div className="flex">
                  <span className="truncate group-data-selected:font-semibold">{person.name}</span>
                  <span className="ml-2 truncate text-gray-500 group-data-focus:text-indigo-200">
                    {person.username}
                  </span>
                </div>

                <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-focus:text-white group-data-selected:flex">
                  <CheckIcon className="size-5" aria-hidden="true" />
                </span>
              </ComboboxOption>
            ))}
          </ComboboxOptions>
        )}
      </div>
    </Combobox>
  )
}
`,F=()=>{const s=[{id:"01",name:"Simple",component:e.jsx(w,{}),raw:N},{id:"02",name:"With status indicator",component:e.jsx(j,{}),raw:k},{id:"03",name:"With image",component:e.jsx(P,{}),raw:L},{id:"04",name:"With secondary text",component:e.jsx(S,{}),raw:z}];return e.jsx("div",{className:"space-y-10 pb-20",children:s.map(o=>e.jsxs("section",{children:[e.jsxs("h2",{className:"mb-4 text-lg font-bold text-gray-800",children:[o.id,". ",o.name]}),e.jsx(C,{name:o.name,code:o.raw,children:o.component})]},o.id))})};export{F as default};
