import{j as e}from"./index-CvCVbuS9.js";import{P as s}from"./PreviewWrapper-TzFvRoPZ.js";import{F as a,a as i}from"./PlusSmallIcon-5XUPkDKV.js";import{X as l,x as o,L as n}from"./disclosure-Bconf5lh.js";import"./use-resolve-button-type-J0J8N5g4.js";import"./bugs-qQ_SbDk4.js";const d=[{question:"How do you make holy water?",answer:"You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."}];function r(){return e.jsx("div",{className:"bg-white",children:e.jsx("div",{className:"mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40",children:e.jsxs("div",{className:"lg:grid lg:grid-cols-12 lg:gap-8",children:[e.jsxs("div",{className:"lg:col-span-5",children:[e.jsx("h2",{className:"text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl",children:"Frequently asked questions"}),e.jsxs("p",{className:"mt-4 text-base/7 text-pretty text-gray-600",children:["Can’t find the answer you’re looking for? Reach out to our"," ",e.jsx("a",{href:"#",className:"font-semibold text-indigo-600 hover:text-indigo-500",children:"customer support"})," ","team."]})]}),e.jsx("div",{className:"mt-10 lg:col-span-7 lg:mt-0",children:e.jsx("dl",{className:"space-y-10",children:d.map(t=>e.jsxs("div",{children:[e.jsx("dt",{className:"text-base/7 font-semibold text-gray-900",children:t.question}),e.jsx("dd",{className:"mt-2 text-base/7 text-gray-600",children:t.answer})]},t.question))})})]})})})}const m=`const faqs = [
  {
    question: 'How do you make holy water?',
    answer:
      'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
  },
  // More questions...
]

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-base/7 text-pretty text-gray-600">
              Can’t find the answer you’re looking for? Reach out to our{' '}
              <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                customer support
              </a>{' '}
              team.
            </p>
          </div>
          <div className="mt-10 lg:col-span-7 lg:mt-0">
            <dl className="space-y-10">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="text-base/7 font-semibold text-gray-900">{faq.question}</dt>
                  <dd className="mt-2 text-base/7 text-gray-600">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
`,c=[{question:"What's the best thing about Switzerland?",answer:"I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."}];function x(){return e.jsx("div",{className:"bg-white",children:e.jsx("div",{className:"mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40",children:e.jsxs("div",{className:"mx-auto max-w-4xl",children:[e.jsx("h2",{className:"text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl",children:"Frequently asked questions"}),e.jsx("dl",{className:"mt-16 divide-y divide-gray-900/10",children:c.map(t=>e.jsxs(l,{as:"div",className:"py-6 first:pt-0 last:pb-0",children:[e.jsx("dt",{children:e.jsxs(o,{className:"group flex w-full items-start justify-between text-left text-gray-900",children:[e.jsx("span",{className:"text-base/7 font-semibold",children:t.question}),e.jsxs("span",{className:"ml-6 flex h-7 items-center",children:[e.jsx(a,{"aria-hidden":"true",className:"size-6 group-data-open:hidden"}),e.jsx(i,{"aria-hidden":"true",className:"size-6 group-not-data-open:hidden"})]})]})}),e.jsx(n,{as:"dd",className:"mt-2 pr-12",children:e.jsx("p",{className:"text-base/7 text-gray-600",children:t.answer})})]},t.question))})]})})})}const u=`import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
]

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Frequently asked questions
          </h2>
          <dl className="mt-16 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure key={faq.question} as="div" className="py-6 first:pt-0 last:pb-0">
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                    <span className="text-base/7 font-semibold">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                      <PlusSmallIcon aria-hidden="true" className="size-6 group-data-open:hidden" />
                      <MinusSmallIcon aria-hidden="true" className="size-6 group-not-data-open:hidden" />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="mt-2 pr-12">
                  <p className="text-base/7 text-gray-600">{faq.answer}</p>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
`,g=[{id:1,question:"What's the best thing about Switzerland?",answer:"I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."}];function p(){return e.jsx("div",{className:"bg-white",children:e.jsxs("div",{className:"mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40",children:[e.jsx("h2",{className:"text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl",children:"Frequently asked questions"}),e.jsx("dl",{className:"mt-20 divide-y divide-gray-900/10",children:g.map(t=>e.jsxs("div",{className:"py-8 first:pt-0 last:pb-0 lg:grid lg:grid-cols-12 lg:gap-8",children:[e.jsx("dt",{className:"text-base/7 font-semibold text-gray-900 lg:col-span-5",children:t.question}),e.jsx("dd",{className:"mt-4 lg:col-span-7 lg:mt-0",children:e.jsx("p",{className:"text-base/7 text-gray-600",children:t.answer})})]},t.id))})]})})}const h=`const faqs = [
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
]

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Frequently asked questions</h2>
        <dl className="mt-20 divide-y divide-gray-900/10">
          {faqs.map((faq) => (
            <div key={faq.id} className="py-8 first:pt-0 last:pb-0 lg:grid lg:grid-cols-12 lg:gap-8">
              <dt className="text-base/7 font-semibold text-gray-900 lg:col-span-5">{faq.question}</dt>
              <dd className="mt-4 lg:col-span-7 lg:mt-0">
                <p className="text-base/7 text-gray-600">{faq.answer}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
`,f=[{id:1,question:"What's the best thing about Switzerland?",answer:"I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."}];function b(){return e.jsx("div",{className:"bg-white",children:e.jsxs("div",{className:"mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8",children:[e.jsx("h2",{className:"text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl",children:"Frequently asked questions"}),e.jsxs("p",{className:"mt-6 max-w-2xl text-base/7 text-gray-600",children:["Have a different question and can’t find the answer you’re looking for? Reach out to our support team by"," ",e.jsx("a",{href:"#",className:"font-semibold text-indigo-600 hover:text-indigo-500",children:"sending us an email"})," ","and we’ll get back to you as soon as we can."]}),e.jsx("div",{className:"mt-20",children:e.jsx("dl",{className:"space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:space-y-0 sm:gap-y-16 lg:grid-cols-3 lg:gap-x-10",children:f.map(t=>e.jsxs("div",{children:[e.jsx("dt",{className:"text-base/7 font-semibold text-gray-900",children:t.question}),e.jsx("dd",{className:"mt-2 text-base/7 text-gray-600",children:t.answer})]},t.id))})})]})})}const y=`const faqs = [
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
]

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Frequently asked questions</h2>
        <p className="mt-6 max-w-2xl text-base/7 text-gray-600">
          Have a different question and can’t find the answer you’re looking for? Reach out to our support team by{' '}
          <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
            sending us an email
          </a>{' '}
          and we’ll get back to you as soon as we can.
        </p>
        <div className="mt-20">
          <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:space-y-0 sm:gap-y-16 lg:grid-cols-3 lg:gap-x-10">
            {faqs.map((faq) => (
              <div key={faq.id}>
                <dt className="text-base/7 font-semibold text-gray-900">{faq.question}</dt>
                <dd className="mt-2 text-base/7 text-gray-600">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
`,N=[{id:1,question:"What's the best thing about Switzerland?",answer:"I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."}];function w(){return e.jsx("div",{className:"bg-white",children:e.jsxs("div",{className:"mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8",children:[e.jsxs("div",{className:"mx-auto max-w-2xl text-center",children:[e.jsx("h2",{className:"text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl",children:"Frequently asked questions"}),e.jsxs("p",{className:"mt-6 text-base/7 text-gray-600",children:["Have a different question and can’t find the answer you’re looking for? Reach out to our support team by"," ",e.jsx("a",{href:"#",className:"font-semibold text-indigo-600 hover:text-indigo-500",children:"sending us an email"})," ","and we’ll get back to you as soon as we can."]})]}),e.jsx("div",{className:"mt-20",children:e.jsx("dl",{className:"space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:space-y-0 sm:gap-y-16 lg:grid-cols-3 lg:gap-x-10",children:N.map(t=>e.jsxs("div",{children:[e.jsx("dt",{className:"text-base/7 font-semibold text-gray-900",children:t.question}),e.jsx("dd",{className:"mt-2 text-base/7 text-gray-600",children:t.answer})]},t.id))})})]})})}const v=`const faqs = [
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
]

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Frequently asked questions
          </h2>
          <p className="mt-6 text-base/7 text-gray-600">
            Have a different question and can’t find the answer you’re looking for? Reach out to our support team by{' '}
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
              sending us an email
            </a>{' '}
            and we’ll get back to you as soon as we can.
          </p>
        </div>
        <div className="mt-20">
          <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:space-y-0 sm:gap-y-16 lg:grid-cols-3 lg:gap-x-10">
            {faqs.map((faq) => (
              <div key={faq.id}>
                <dt className="text-base/7 font-semibold text-gray-900">{faq.question}</dt>
                <dd className="mt-2 text-base/7 text-gray-600">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
`,q=[{id:1,question:"What's the best thing about Switzerland?",answer:"I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."}];function j(){return e.jsx("div",{className:"bg-white",children:e.jsxs("div",{className:"mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8",children:[e.jsx("h2",{className:"text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl",children:"Frequently asked questions"}),e.jsxs("p",{className:"mt-6 max-w-2xl text-base/7 text-gray-600",children:["Have a different question and can’t find the answer you’re looking for? Reach out to our support team by"," ",e.jsx("a",{href:"#",className:"font-semibold text-indigo-600 hover:text-indigo-500",children:"sending us an email"})," ","and we’ll get back to you as soon as we can."]}),e.jsx("div",{className:"mt-20",children:e.jsx("dl",{className:"space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:space-y-0 sm:gap-y-16 lg:gap-x-10",children:q.map(t=>e.jsxs("div",{children:[e.jsx("dt",{className:"text-base/7 font-semibold text-gray-900",children:t.question}),e.jsx("dd",{className:"mt-2 text-base/7 text-gray-600",children:t.answer})]},t.id))})})]})})}const k=`const faqs = [
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
]

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Frequently asked questions</h2>
        <p className="mt-6 max-w-2xl text-base/7 text-gray-600">
          Have a different question and can’t find the answer you’re looking for? Reach out to our support team by{' '}
          <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
            sending us an email
          </a>{' '}
          and we’ll get back to you as soon as we can.
        </p>
        <div className="mt-20">
          <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:space-y-0 sm:gap-y-16 lg:gap-x-10">
            {faqs.map((faq) => (
              <div key={faq.id}>
                <dt className="text-base/7 font-semibold text-gray-900">{faq.question}</dt>
                <dd className="mt-2 text-base/7 text-gray-600">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
`,F=[{id:1,question:"What's the best thing about Switzerland?",answer:"I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."}];function S(){return e.jsx("div",{className:"bg-white",children:e.jsxs("div",{className:"mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8",children:[e.jsxs("div",{className:"mx-auto max-w-2xl text-center",children:[e.jsx("h2",{className:"text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl",children:"Frequently asked questions"}),e.jsxs("p",{className:"mt-6 text-base/7 text-gray-600",children:["Have a different question and can’t find the answer you’re looking for? Reach out to our support team by"," ",e.jsx("a",{href:"#",className:"font-semibold text-indigo-600 hover:text-indigo-500",children:"sending us an email"})," ","and we’ll get back to you as soon as we can."]})]}),e.jsx("div",{className:"mt-20",children:e.jsx("dl",{className:"space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:space-y-0 sm:gap-y-16 lg:gap-x-10",children:F.map(t=>e.jsxs("div",{children:[e.jsx("dt",{className:"text-base/7 font-semibold text-gray-900",children:t.question}),e.jsx("dd",{className:"mt-2 text-base/7 text-gray-600",children:t.answer})]},t.id))})})]})})}const R=`const faqs = [
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
]

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Frequently asked questions
          </h2>
          <p className="mt-6 text-base/7 text-gray-600">
            Have a different question and can’t find the answer you’re looking for? Reach out to our support team by{' '}
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
              sending us an email
            </a>{' '}
            and we’ll get back to you as soon as we can.
          </p>
        </div>
        <div className="mt-20">
          <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:space-y-0 sm:gap-y-16 lg:gap-x-10">
            {faqs.map((faq) => (
              <div key={faq.id}>
                <dt className="text-base/7 font-semibold text-gray-900">{faq.question}</dt>
                <dd className="mt-2 text-base/7 text-gray-600">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
`,T=()=>e.jsxs("div",{className:"space-y-10 pb-20",children:[e.jsxs("section",{children:[e.jsx("h2",{className:"mb-4 text-lg font-bold text-gray-800",children:"01. Offset with supporting text"}),e.jsx(s,{name:"Offset with supporting text",code:m,children:e.jsx(r,{})})]}),e.jsxs("section",{children:[e.jsx("h2",{className:"mb-4 text-lg font-bold text-gray-800",children:"02. Centered accordion"}),e.jsx(s,{name:"Centered accordion",code:u,children:e.jsx(x,{})})]}),e.jsxs("section",{children:[e.jsx("h2",{className:"mb-4 text-lg font-bold text-gray-800",children:"03. Side-by-side"}),e.jsx(s,{name:"Side-by-side FAQ",code:h,children:e.jsx(p,{})})]}),e.jsxs("section",{children:[e.jsx("h2",{className:"mb-4 text-lg font-bold text-gray-800",children:"04. Three columns"}),e.jsx(s,{name:"Three columns FAQ",code:y,children:e.jsx(b,{})})]}),e.jsxs("section",{children:[e.jsx("h2",{className:"mb-4 text-lg font-bold text-gray-800",children:"05. Three columns with centered introduction"}),e.jsx(s,{name:"Three columns with centered intro",code:v,children:e.jsx(w,{})})]}),e.jsxs("section",{children:[e.jsx("h2",{className:"mb-4 text-lg font-bold text-gray-800",children:"06. Two columns"}),e.jsx(s,{name:"Two columns FAQ",code:k,children:e.jsx(j,{})})]}),e.jsxs("section",{children:[e.jsx("h2",{className:"mb-4 text-lg font-bold text-gray-800",children:"07. Two columns with centered introduction"}),e.jsx(s,{name:"Two columns with centered intro",code:R,children:e.jsx(S,{})})]})]});export{T as default};
