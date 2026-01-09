import{j as e,r as t}from"./index-CvCVbuS9.js";import{P as m}from"./PreviewWrapper-TzFvRoPZ.js";import{y as r,K as o}from"./radio-group-Bn8ONlYl.js";import{F as u}from"./CheckCircleIcon-B2t_uyUG.js";import"./use-by-comparator-Ch7KvTmY.js";import"./use-default-value-Cs7QsSkB.js";import"./form-fields-DfbHTuSb.js";import"./label-CY_Q6YdE.js";import"./bugs-qQ_SbDk4.js";const p=[{id:"email",title:"Email"},{id:"sms",title:"Phone (SMS)"},{id:"push",title:"Push notification"}];function f(){return e.jsxs("fieldset",{children:[e.jsx("legend",{className:"text-sm/6 font-semibold text-gray-900",children:"Notifications"}),e.jsx("p",{className:"mt-1 text-sm/6 text-gray-600",children:"How do you prefer to receive notifications?"}),e.jsx("div",{className:"mt-6 space-y-6",children:p.map(i=>e.jsxs("div",{className:"flex items-center",children:[e.jsx("input",{defaultChecked:i.id==="email",id:i.id,name:"notification-method",type:"radio",className:"relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"}),e.jsx("label",{htmlFor:i.id,className:"ml-3 block text-sm/6 font-medium text-gray-900",children:i.title})]},i.id))})]})}const b=`const notificationMethods = [
  { id: 'email', title: 'Email' },
  { id: 'sms', title: 'Phone (SMS)' },
  { id: 'push', title: 'Push notification' },
]

export default function Example() {
  return (
    <fieldset>
      <legend className="text-sm/6 font-semibold text-gray-900">Notifications</legend>
      <p className="mt-1 text-sm/6 text-gray-600">How do you prefer to receive notifications?</p>
      <div className="mt-6 space-y-6">
        {notificationMethods.map((notificationMethod) => (
          <div key={notificationMethod.id} className="flex items-center">
            <input
              defaultChecked={notificationMethod.id === 'email'}
              id={notificationMethod.id}
              name="notification-method"
              type="radio"
              className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
            />
            <label htmlFor={notificationMethod.id} className="ml-3 block text-sm/6 font-medium text-gray-900">
              {notificationMethod.title}
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  )
}
`,g=[{id:"email",title:"Email"},{id:"sms",title:"Phone (SMS)"},{id:"push",title:"Push notification"}];function h(){return e.jsxs("fieldset",{children:[e.jsx("legend",{className:"text-sm/6 font-semibold text-gray-900",children:"Notifications"}),e.jsx("p",{className:"mt-1 text-sm/6 text-gray-600",children:"How do you prefer to receive notifications?"}),e.jsx("div",{className:"mt-6 space-y-6 sm:flex sm:items-center sm:space-y-0 sm:space-x-10",children:g.map(i=>e.jsxs("div",{className:"flex items-center",children:[e.jsx("input",{defaultChecked:i.id==="email",id:i.id,name:"notification-method",type:"radio",className:"relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"}),e.jsx("label",{htmlFor:i.id,className:"ml-3 block text-sm/6 font-medium text-gray-900",children:i.title})]},i.id))})]})}const x=`const notificationMethods = [
  { id: 'email', title: 'Email' },
  { id: 'sms', title: 'Phone (SMS)' },
  { id: 'push', title: 'Push notification' },
]

export default function Example() {
  return (
    <fieldset>
      <legend className="text-sm/6 font-semibold text-gray-900">Notifications</legend>
      <p className="mt-1 text-sm/6 text-gray-600">How do you prefer to receive notifications?</p>
      <div className="mt-6 space-y-6 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
        {notificationMethods.map((notificationMethod) => (
          <div key={notificationMethod.id} className="flex items-center">
            <input
              defaultChecked={notificationMethod.id === 'email'}
              id={notificationMethod.id}
              name="notification-method"
              type="radio"
              className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
            />
            <label htmlFor={notificationMethod.id} className="ml-3 block text-sm/6 font-medium text-gray-900">
              {notificationMethod.title}
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  )
}
`,y=[{id:"small",name:"Small",description:"4 GB RAM / 2 CPUS / 80 GB SSD Storage"},{id:"medium",name:"Medium",description:"8 GB RAM / 4 CPUS / 160 GB SSD Storage"},{id:"large",name:"Large",description:"16 GB RAM / 8 CPUS / 320 GB SSD Storage"}];function v(){return e.jsx("fieldset",{"aria-label":"Plan",children:e.jsx("div",{className:"space-y-5",children:y.map(i=>e.jsxs("div",{className:"relative flex items-start",children:[e.jsx("div",{className:"flex h-6 items-center",children:e.jsx("input",{defaultChecked:i.id==="small",id:i.id,name:"plan",type:"radio","aria-describedby":`${i.id}-description`,className:"relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"})}),e.jsxs("div",{className:"ml-3 text-sm/6",children:[e.jsx("label",{htmlFor:i.id,className:"font-medium text-gray-900",children:i.name}),e.jsx("p",{id:`${i.id}-description`,className:"text-gray-500",children:i.description})]})]},i.id))})})}const k=`const plans = [
  { id: 'small', name: 'Small', description: '4 GB RAM / 2 CPUS / 80 GB SSD Storage' },
  { id: 'medium', name: 'Medium', description: '8 GB RAM / 4 CPUS / 160 GB SSD Storage' },
  { id: 'large', name: 'Large', description: '16 GB RAM / 8 CPUS / 320 GB SSD Storage' },
]

export default function Example() {
  return (
    <fieldset aria-label="Plan">
      <div className="space-y-5">
        {plans.map((plan) => (
          <div key={plan.id} className="relative flex items-start">
            <div className="flex h-6 items-center">
              <input
                defaultChecked={plan.id === 'small'}
                id={plan.id}
                name="plan"
                type="radio"
                aria-describedby={\`\${plan.id}-description\`}
                className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
              />
            </div>
            <div className="ml-3 text-sm/6">
              <label htmlFor={plan.id} className="font-medium text-gray-900">
                {plan.name}
              </label>
              <p id={\`\${plan.id}-description\`} className="text-gray-500">
                {plan.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </fieldset>
  )
}
`,N=[{id:"small",name:"Small",description:"4 GB RAM / 2 CPUS / 80 GB SSD Storage"},{id:"medium",name:"Medium",description:"8 GB RAM / 4 CPUS / 160 GB SSD Storage"},{id:"large",name:"Large",description:"16 GB RAM / 8 CPUS / 320 GB SSD Storage"}];function j(){return e.jsx("fieldset",{"aria-label":"Plan",children:e.jsx("div",{className:"space-y-5",children:N.map(i=>e.jsxs("div",{className:"relative flex items-start",children:[e.jsx("div",{className:"flex h-6 items-center",children:e.jsx("input",{defaultChecked:i.id==="small",id:i.id,name:"plan",type:"radio","aria-describedby":`${i.id}-description`,className:"relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"})}),e.jsxs("div",{className:"ml-3 text-sm/6",children:[e.jsx("label",{htmlFor:i.id,className:"font-medium text-gray-900",children:i.name})," ",e.jsx("span",{id:`${i.id}-description`,className:"text-gray-500",children:i.description})]})]},i.id))})})}const S=`const plans = [
  { id: 'small', name: 'Small', description: '4 GB RAM / 2 CPUS / 80 GB SSD Storage' },
  { id: 'medium', name: 'Medium', description: '8 GB RAM / 4 CPUS / 160 GB SSD Storage' },
  { id: 'large', name: 'Large', description: '16 GB RAM / 8 CPUS / 320 GB SSD Storage' },
]

export default function Example() {
  return (
    <fieldset aria-label="Plan">
      <div className="space-y-5">
        {plans.map((plan) => (
          <div key={plan.id} className="relative flex items-start">
            <div className="flex h-6 items-center">
              <input
                defaultChecked={plan.id === 'small'}
                id={plan.id}
                name="plan"
                type="radio"
                aria-describedby={\`\${plan.id}-description\`}
                className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
              />
            </div>
            <div className="ml-3 text-sm/6">
              <label htmlFor={plan.id} className="font-medium text-gray-900">
                {plan.name}
              </label>{' '}
              <span id={\`\${plan.id}-description\`} className="text-gray-500">
                {plan.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </fieldset>
  )
}
`,w=[{id:"checking",name:"Checking",description:"CIBC ••••6610"},{id:"savings",name:"Savings",description:"Bank of America ••••0149"},{id:"mastercard",name:"Mastercard",description:"Capital One ••••7877"}];function C(){return e.jsxs("fieldset",{children:[e.jsx("legend",{className:"text-sm/6 font-semibold text-gray-900",children:"Transfer funds"}),e.jsx("p",{className:"mt-1 text-sm/6 text-gray-600",children:"Transfer your balance to your bank account."}),e.jsx("div",{className:"mt-2.5 divide-y divide-gray-200",children:w.map((i,s)=>e.jsxs("div",{className:"relative flex items-start pt-3.5 pb-4",children:[e.jsxs("div",{className:"min-w-0 flex-1 text-sm/6",children:[e.jsx("label",{htmlFor:`account-${i.id}`,className:"font-medium text-gray-900",children:i.name}),e.jsx("p",{id:`account-${i.id}-description`,className:"text-gray-500",children:i.description})]}),e.jsx("div",{className:"ml-3 flex h-6 items-center",children:e.jsx("input",{defaultChecked:i.id==="checking",id:`account-${i.id}`,name:"account",type:"radio","aria-describedby":`account-${i.id}-description`,className:"relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"})})]},s))})]})}const $=`const accounts = [
  { id: 'checking', name: 'Checking', description: 'CIBC ••••6610' },
  { id: 'savings', name: 'Savings', description: 'Bank of America ••••0149' },
  { id: 'mastercard', name: 'Mastercard', description: 'Capital One ••••7877' },
]

export default function Example() {
  return (
    <fieldset>
      <legend className="text-sm/6 font-semibold text-gray-900">Transfer funds</legend>
      <p className="mt-1 text-sm/6 text-gray-600">Transfer your balance to your bank account.</p>
      <div className="mt-2.5 divide-y divide-gray-200">
        {accounts.map((account, accountIdx) => (
          <div key={accountIdx} className="relative flex items-start pt-3.5 pb-4">
            <div className="min-w-0 flex-1 text-sm/6">
              <label htmlFor={\`account-\${account.id}\`} className="font-medium text-gray-900">
                {account.name}
              </label>
              <p id={\`account-\${account.id}-description\`} className="text-gray-500">
                {account.description}
              </p>
            </div>
            <div className="ml-3 flex h-6 items-center">
              <input
                defaultChecked={account.id === 'checking'}
                id={\`account-\${account.id}\`}
                name="account"
                type="radio"
                aria-describedby={\`account-\${account.id}-description\`}
                className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
              />
            </div>
          </div>
        ))}
      </div>
    </fieldset>
  )
}
`,G=[{id:null,name:"None"},{id:1,name:"Baked beans"},{id:2,name:"Coleslaw"},{id:3,name:"French fries"},{id:4,name:"Garden salad"},{id:5,name:"Mashed potatoes"}];function B(){return e.jsxs("fieldset",{children:[e.jsx("legend",{className:"text-sm/6 font-semibold text-gray-900",children:"Select a side"}),e.jsx("div",{className:"mt-4 divide-y divide-gray-200 border-t border-b border-gray-200",children:G.map((i,s)=>e.jsxs("div",{className:"relative flex items-start py-4",children:[e.jsx("div",{className:"min-w-0 flex-1 text-sm/6",children:e.jsx("label",{htmlFor:`side-${i.id}`,className:"font-medium text-gray-900 select-none",children:i.name})}),e.jsx("div",{className:"ml-3 flex h-6 items-center",children:e.jsx("input",{defaultChecked:i.id===null,id:`side-${i.id}`,name:"plan",type:"radio",className:"relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"})})]},s))})]})}const R=`const sides = [
  { id: null, name: 'None' },
  { id: 1, name: 'Baked beans' },
  { id: 2, name: 'Coleslaw' },
  { id: 3, name: 'French fries' },
  { id: 4, name: 'Garden salad' },
  { id: 5, name: 'Mashed potatoes' },
]

export default function Example() {
  return (
    <fieldset>
      <legend className="text-sm/6 font-semibold text-gray-900">Select a side</legend>
      <div className="mt-4 divide-y divide-gray-200 border-t border-b border-gray-200">
        {sides.map((side, sideIdx) => (
          <div key={sideIdx} className="relative flex items-start py-4">
            <div className="min-w-0 flex-1 text-sm/6">
              <label htmlFor={\`side-\${side.id}\`} className="font-medium text-gray-900 select-none">
                {side.name}
              </label>
            </div>
            <div className="ml-3 flex h-6 items-center">
              <input
                defaultChecked={side.id === null}
                id={\`side-\${side.id}\`}
                name="plan"
                type="radio"
                className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
              />
            </div>
          </div>
        ))}
      </div>
    </fieldset>
  )
}
`,M=[{name:"Startup",priceMonthly:"$29",priceYearly:"$290",limit:"Up to 5 active job postings",selected:!0},{name:"Business",priceMonthly:"$99",priceYearly:"$990",limit:"Up to 25 active job postings",selected:!1},{name:"Enterprise",priceMonthly:"$249",priceYearly:"$2490",limit:"Unlimited active job postings",selected:!1}];function P(){return e.jsx("fieldset",{"aria-label":"Pricing plans",className:"relative -space-y-px rounded-md bg-white",children:M.map(i=>e.jsxs("label",{"aria-label":i.name,"aria-description":`${i.priceMonthly} per month, ${i.priceYearly} per year, ${i.limit}`,className:"group flex cursor-pointer flex-col border border-gray-200 p-4 first:rounded-tl-md first:rounded-tr-md last:rounded-br-md last:rounded-bl-md focus:outline-hidden has-checked:relative has-checked:border-indigo-200 has-checked:bg-indigo-50 md:grid md:grid-cols-3 md:pr-6 md:pl-4",children:[e.jsxs("span",{className:"flex items-center gap-3 text-sm",children:[e.jsx("input",{defaultValue:i.name,defaultChecked:i.selected,name:"pricing-plan",type:"radio",className:"relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"}),e.jsx("span",{className:"font-medium text-gray-900 group-has-checked:text-indigo-900",children:i.name})]}),e.jsxs("span",{className:"ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-center",children:[e.jsxs("span",{className:"font-medium text-gray-900 group-has-checked:text-indigo-900",children:[i.priceMonthly," / mo"]})," ",e.jsxs("span",{className:"text-gray-500 group-has-checked:text-indigo-700",children:["(",i.priceYearly," / yr)"]})]}),e.jsx("span",{className:"ml-6 pl-1 text-sm text-gray-500 group-has-checked:text-indigo-700 md:ml-0 md:pl-0 md:text-right",children:i.limit})]},i.name))})}const E=`const plans = [
  { name: 'Startup', priceMonthly: '$29', priceYearly: '$290', limit: 'Up to 5 active job postings', selected: true },
  {
    name: 'Business',
    priceMonthly: '$99',
    priceYearly: '$990',
    limit: 'Up to 25 active job postings',
    selected: false,
  },
  {
    name: 'Enterprise',
    priceMonthly: '$249',
    priceYearly: '$2490',
    limit: 'Unlimited active job postings',
    selected: false,
  },
]

export default function Example() {
  return (
    <fieldset aria-label="Pricing plans" className="relative -space-y-px rounded-md bg-white">
      {plans.map((plan) => (
        <label
          key={plan.name}
          aria-label={plan.name}
          aria-description={\`\${plan.priceMonthly} per month, \${plan.priceYearly} per year, \${plan.limit}\`}
          className="group flex cursor-pointer flex-col border border-gray-200 p-4 first:rounded-tl-md first:rounded-tr-md last:rounded-br-md last:rounded-bl-md focus:outline-hidden has-checked:relative has-checked:border-indigo-200 has-checked:bg-indigo-50 md:grid md:grid-cols-3 md:pr-6 md:pl-4"
        >
          <span className="flex items-center gap-3 text-sm">
            <input
              defaultValue={plan.name}
              defaultChecked={plan.selected}
              name="pricing-plan"
              type="radio"
              className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
            />
            <span className="font-medium text-gray-900 group-has-checked:text-indigo-900">{plan.name}</span>
          </span>
          <span className="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-center">
            <span className="font-medium text-gray-900 group-has-checked:text-indigo-900">
              {plan.priceMonthly} / mo
            </span>{' '}
            <span className="text-gray-500 group-has-checked:text-indigo-700">({plan.priceYearly} / yr)</span>
          </span>
          <span className="ml-6 pl-1 text-sm text-gray-500 group-has-checked:text-indigo-700 md:ml-0 md:pl-0 md:text-right">
            {plan.limit}
          </span>
        </label>
      ))}
    </fieldset>
  )
}
`,L=[{name:"Public access",description:"This project would be available to anyone who has the link",selected:!0},{name:"Private to project members",description:"Only members of this project would be able to access",selected:!1},{name:"Private to you",description:"You are the only one able to access this project",selected:!1}];function U(){return e.jsx("fieldset",{"aria-label":"Privacy setting",className:"-space-y-px rounded-md bg-white",children:L.map(i=>e.jsxs("label",{value:i.name,"aria-label":i.name,"aria-description":i.description,className:"group flex cursor-pointer border border-gray-200 p-4 first:rounded-tl-md first:rounded-tr-md last:rounded-br-md last:rounded-bl-md focus:outline-hidden has-checked:relative has-checked:border-indigo-200 has-checked:bg-indigo-50",children:[e.jsx("input",{defaultValue:i.name,defaultChecked:i.selected,name:"privacy-setting",type:"radio",className:"relative mt-0.5 size-4 shrink-0 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"}),e.jsxs("span",{className:"ml-3 flex flex-col",children:[e.jsx("span",{className:"block text-sm font-medium text-gray-900 group-has-checked:text-indigo-900",children:i.name}),e.jsx("span",{className:"block text-sm text-gray-500 group-has-checked:text-indigo-700",children:i.description})]})]},i.name))})}const D=`const settings = [
  { name: 'Public access', description: 'This project would be available to anyone who has the link', selected: true },
  {
    name: 'Private to project members',
    description: 'Only members of this project would be able to access',
    selected: false,
  },
  { name: 'Private to you', description: 'You are the only one able to access this project', selected: false },
]

export default function Example() {
  return (
    <fieldset aria-label="Privacy setting" className="-space-y-px rounded-md bg-white">
      {settings.map((setting) => (
        <label
          key={setting.name}
          value={setting.name}
          aria-label={setting.name}
          aria-description={setting.description}
          className="group flex cursor-pointer border border-gray-200 p-4 first:rounded-tl-md first:rounded-tr-md last:rounded-br-md last:rounded-bl-md focus:outline-hidden has-checked:relative has-checked:border-indigo-200 has-checked:bg-indigo-50"
        >
          <input
            defaultValue={setting.name}
            defaultChecked={setting.selected}
            name="privacy-setting"
            type="radio"
            className="relative mt-0.5 size-4 shrink-0 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
          />
          <span className="ml-3 flex flex-col">
            <span className="block text-sm font-medium text-gray-900 group-has-checked:text-indigo-900">
              {setting.name}
            </span>
            <span className="block text-sm text-gray-500 group-has-checked:text-indigo-700">{setting.description}</span>
          </span>
        </label>
      ))}
    </fieldset>
  )
}
`,d=[{name:"Pink",color:"text-pink-500"},{name:"Purple",color:"text-purple-500"},{name:"Blue",color:"text-blue-500"},{name:"Green",color:"text-green-500"},{name:"Yellow",color:"text-yellow-500"}];function z(...i){return i.filter(Boolean).join(" ")}function A(){const[i,s]=t.useState(d[1]);return e.jsxs("fieldset",{children:[e.jsx("legend",{className:"block text-sm/6 font-semibold text-gray-900",children:"Choose a label color"}),e.jsx(r,{value:i,onChange:s,className:"mt-6 flex items-center gap-x-3",children:d.map(a=>e.jsx(o,{value:a,"aria-label":a.name,className:z(a.color,"relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-current focus:outline-hidden data-checked:ring-2 data-focus:data-checked:ring-3 data-focus:data-checked:ring-offset-1"),children:e.jsx("span",{"aria-hidden":"true",className:"size-8 rounded-full border border-black/10 bg-current"})},a.name))})]})}const F=`'use client'

import { useState } from 'react'
import { Radio, RadioGroup } from '@headlessui/react'

const options = [
  { name: 'Pink', color: 'text-pink-500' },
  { name: 'Purple', color: 'text-purple-500' },
  { name: 'Blue', color: 'text-blue-500' },
  { name: 'Green', color: 'text-green-500' },
  { name: 'Yellow', color: 'text-yellow-500' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [selectedColor, setSelectedColor] = useState(options[1])

  return (
    <fieldset>
      <legend className="block text-sm/6 font-semibold text-gray-900">Choose a label color</legend>
      <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-6 flex items-center gap-x-3">
        {options.map((option) => (
          <Radio
            key={option.name}
            value={option}
            aria-label={option.name}
            className={classNames(
              option.color,
              'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-current focus:outline-hidden data-checked:ring-2 data-focus:data-checked:ring-3 data-focus:data-checked:ring-offset-1',
            )}
          >
            <span aria-hidden="true" className="size-8 rounded-full border border-black/10 bg-current" />
          </Radio>
        ))}
      </RadioGroup>
    </fieldset>
  )
}
`,n=[{id:1,title:"Newsletter",description:"Last message sent an hour ago",users:"621 users"},{id:2,title:"Existing customers",description:"Last message sent 2 weeks ago",users:"1200 users"},{id:3,title:"Trial users",description:"Last message sent 4 days ago",users:"2740 users"}];function Y(){const[i,s]=t.useState(n[0]);return e.jsxs("fieldset",{children:[e.jsx("legend",{className:"text-sm/6 font-semibold text-gray-900",children:"Select a mailing list"}),e.jsx(r,{value:i,onChange:s,className:"mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4",children:n.map(a=>e.jsxs(o,{value:a,"aria-label":a.title,"aria-description":`${a.description} to ${a.users}`,className:"group relative flex cursor-pointer rounded-lg border border-gray-300 bg-white p-4 shadow-xs focus:outline-hidden data-focus:border-indigo-600 data-focus:ring-2 data-focus:ring-indigo-600",children:[e.jsx("span",{className:"flex flex-1",children:e.jsxs("span",{className:"flex flex-col",children:[e.jsx("span",{className:"block text-sm font-medium text-gray-900",children:a.title}),e.jsx("span",{className:"mt-1 flex items-center text-sm text-gray-500",children:a.description}),e.jsx("span",{className:"mt-6 text-sm font-medium text-gray-900",children:a.users})]})}),e.jsx(u,{"aria-hidden":"true",className:"size-5 text-indigo-600 group-not-data-checked:invisible"}),e.jsx("span",{"aria-hidden":"true",className:"pointer-events-none absolute -inset-px rounded-lg border-2 border-transparent group-data-checked:border-indigo-600 group-data-focus:border"})]},a.id))})]})}const I=`'use client'

import { useState } from 'react'
import { Radio, RadioGroup } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/20/solid'

const mailingLists = [
  { id: 1, title: 'Newsletter', description: 'Last message sent an hour ago', users: '621 users' },
  { id: 2, title: 'Existing customers', description: 'Last message sent 2 weeks ago', users: '1200 users' },
  { id: 3, title: 'Trial users', description: 'Last message sent 4 days ago', users: '2740 users' },
]

export default function Example() {
  const [selectedMailingLists, setSelectedMailingLists] = useState(mailingLists[0])

  return (
    <fieldset>
      <legend className="text-sm/6 font-semibold text-gray-900">Select a mailing list</legend>
      <RadioGroup
        value={selectedMailingLists}
        onChange={setSelectedMailingLists}
        className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4"
      >
        {mailingLists.map((mailingList) => (
          <Radio
            key={mailingList.id}
            value={mailingList}
            aria-label={mailingList.title}
            aria-description={\`\${mailingList.description} to \${mailingList.users}\`}
            className="group relative flex cursor-pointer rounded-lg border border-gray-300 bg-white p-4 shadow-xs focus:outline-hidden data-focus:border-indigo-600 data-focus:ring-2 data-focus:ring-indigo-600"
          >
            <span className="flex flex-1">
              <span className="flex flex-col">
                <span className="block text-sm font-medium text-gray-900">{mailingList.title}</span>
                <span className="mt-1 flex items-center text-sm text-gray-500">{mailingList.description}</span>
                <span className="mt-6 text-sm font-medium text-gray-900">{mailingList.users}</span>
              </span>
            </span>
            <CheckCircleIcon aria-hidden="true" className="size-5 text-indigo-600 group-not-data-checked:invisible" />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -inset-px rounded-lg border-2 border-transparent group-data-checked:border-indigo-600 group-data-focus:border"
            />
          </Radio>
        ))}
      </RadioGroup>
    </fieldset>
  )
}
`,l=[{name:"4 GB",inStock:!0},{name:"8 GB",inStock:!0},{name:"16 GB",inStock:!0},{name:"32 GB",inStock:!0},{name:"64 GB",inStock:!0},{name:"128 GB",inStock:!1}];function O(...i){return i.filter(Boolean).join(" ")}function T(){const[i,s]=t.useState(l[2]);return e.jsxs("fieldset",{"aria-label":"Choose a memory option",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{className:"text-sm/6 font-medium text-gray-900",children:"RAM"}),e.jsx("a",{href:"#",className:"text-sm/6 font-medium text-indigo-600 hover:text-indigo-500",children:"See performance specs"})]}),e.jsx(r,{value:i,onChange:s,className:"mt-2 grid grid-cols-3 gap-3 sm:grid-cols-6",children:l.map(a=>e.jsx(o,{value:a,disabled:!a.inStock,className:O(a.inStock?"cursor-pointer focus:outline-hidden":"cursor-not-allowed opacity-25","flex items-center justify-center rounded-md bg-white px-3 py-3 text-sm font-semibold text-gray-900 uppercase ring-1 ring-gray-300 not-data-focus:not-data-checked:ring-inset hover:bg-gray-50 data-checked:bg-indigo-600 data-checked:text-white data-checked:ring-0 data-checked:hover:bg-indigo-500 data-focus:ring-2 data-focus:ring-indigo-600 data-focus:ring-offset-2 data-focus:data-checked:ring-2 sm:flex-1"),children:a.name},a.name))})]})}const H=`'use client'

import { useState } from 'react'
import { Radio, RadioGroup } from '@headlessui/react'

const memoryOptions = [
  { name: '4 GB', inStock: true },
  { name: '8 GB', inStock: true },
  { name: '16 GB', inStock: true },
  { name: '32 GB', inStock: true },
  { name: '64 GB', inStock: true },
  { name: '128 GB', inStock: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [mem, setMem] = useState(memoryOptions[2])

  return (
    <fieldset aria-label="Choose a memory option">
      <div className="flex items-center justify-between">
        <div className="text-sm/6 font-medium text-gray-900">RAM</div>
        <a href="#" className="text-sm/6 font-medium text-indigo-600 hover:text-indigo-500">
          See performance specs
        </a>
      </div>

      <RadioGroup value={mem} onChange={setMem} className="mt-2 grid grid-cols-3 gap-3 sm:grid-cols-6">
        {memoryOptions.map((option) => (
          <Radio
            key={option.name}
            value={option}
            disabled={!option.inStock}
            className={classNames(
              option.inStock ? 'cursor-pointer focus:outline-hidden' : 'cursor-not-allowed opacity-25',
              'flex items-center justify-center rounded-md bg-white px-3 py-3 text-sm font-semibold text-gray-900 uppercase ring-1 ring-gray-300 not-data-focus:not-data-checked:ring-inset hover:bg-gray-50 data-checked:bg-indigo-600 data-checked:text-white data-checked:ring-0 data-checked:hover:bg-indigo-500 data-focus:ring-2 data-focus:ring-indigo-600 data-focus:ring-offset-2 data-focus:data-checked:ring-2 sm:flex-1',
            )}
          >
            {option.name}
          </Radio>
        ))}
      </RadioGroup>
    </fieldset>
  )
}
`,c=[{name:"Hobby",ram:"8GB",cpus:"4 CPUs",disk:"160 GB SSD disk",price:"$40"},{name:"Startup",ram:"12GB",cpus:"6 CPUs",disk:"256 GB SSD disk",price:"$80"},{name:"Business",ram:"16GB",cpus:"8 CPUs",disk:"512 GB SSD disk",price:"$160"},{name:"Enterprise",ram:"32GB",cpus:"12 CPUs",disk:"1024 GB SSD disk",price:"$240"}];function W(){const[i,s]=t.useState(c[0]);return e.jsx("fieldset",{"aria-label":"Server size",children:e.jsx(r,{value:i,onChange:s,className:"space-y-4",children:c.map(a=>e.jsxs(o,{value:a,"aria-label":a.name,"aria-description":`${a.ram}, ${a.cpus}, ${a.disk}, ${a.price} per month`,className:"group relative block cursor-pointer rounded-lg border border-gray-300 bg-white px-6 py-4 shadow-xs focus:outline-hidden data-focus:border-indigo-600 data-focus:ring-2 data-focus:ring-indigo-600 sm:flex sm:justify-between",children:[e.jsx("span",{className:"flex items-center",children:e.jsxs("span",{className:"flex flex-col text-sm",children:[e.jsx("span",{className:"font-medium text-gray-900",children:a.name}),e.jsxs("span",{className:"text-gray-500",children:[e.jsxs("span",{className:"block sm:inline",children:[a.ram," / ",a.cpus]})," ",e.jsx("span",{"aria-hidden":"true",className:"hidden sm:mx-1 sm:inline",children:"·"})," ",e.jsx("span",{className:"block sm:inline",children:a.disk})]})]})}),e.jsxs("span",{className:"mt-2 flex text-sm sm:mt-0 sm:ml-4 sm:flex-col sm:text-right",children:[e.jsx("span",{className:"font-medium text-gray-900",children:a.price}),e.jsx("span",{className:"ml-1 text-gray-500 sm:ml-0",children:"/mo"})]}),e.jsx("span",{"aria-hidden":"true",className:"pointer-events-none absolute -inset-px rounded-lg border-2 border-transparent group-data-checked:border-indigo-600 group-data-focus:border"})]},a.name))})})}const V=`'use client'

import { useState } from 'react'
import { Radio, RadioGroup } from '@headlessui/react'

const plans = [
  { name: 'Hobby', ram: '8GB', cpus: '4 CPUs', disk: '160 GB SSD disk', price: '$40' },
  { name: 'Startup', ram: '12GB', cpus: '6 CPUs', disk: '256 GB SSD disk', price: '$80' },
  { name: 'Business', ram: '16GB', cpus: '8 CPUs', disk: '512 GB SSD disk', price: '$160' },
  { name: 'Enterprise', ram: '32GB', cpus: '12 CPUs', disk: '1024 GB SSD disk', price: '$240' },
]

export default function Example() {
  const [selected, setSelected] = useState(plans[0])

  return (
    <fieldset aria-label="Server size">
      <RadioGroup value={selected} onChange={setSelected} className="space-y-4">
        {plans.map((plan) => (
          <Radio
            key={plan.name}
            value={plan}
            aria-label={plan.name}
            aria-description={\`\${plan.ram}, \${plan.cpus}, \${plan.disk}, \${plan.price} per month\`}
            className="group relative block cursor-pointer rounded-lg border border-gray-300 bg-white px-6 py-4 shadow-xs focus:outline-hidden data-focus:border-indigo-600 data-focus:ring-2 data-focus:ring-indigo-600 sm:flex sm:justify-between"
          >
            <span className="flex items-center">
              <span className="flex flex-col text-sm">
                <span className="font-medium text-gray-900">{plan.name}</span>
                <span className="text-gray-500">
                  <span className="block sm:inline">
                    {plan.ram} / {plan.cpus}
                  </span>{' '}
                  <span aria-hidden="true" className="hidden sm:mx-1 sm:inline">
                    &middot;
                  </span>{' '}
                  <span className="block sm:inline">{plan.disk}</span>
                </span>
              </span>
            </span>
            <span className="mt-2 flex text-sm sm:mt-0 sm:ml-4 sm:flex-col sm:text-right">
              <span className="font-medium text-gray-900">{plan.price}</span>
              <span className="ml-1 text-gray-500 sm:ml-0">/mo</span>
            </span>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -inset-px rounded-lg border-2 border-transparent group-data-checked:border-indigo-600 group-data-focus:border"
            />
          </Radio>
        ))}
      </RadioGroup>
    </fieldset>
  )
}
`,ae=()=>{const i=[{id:"01",name:"Simple list",component:e.jsx(f,{}),raw:b},{id:"02",name:"Simple inline list",component:e.jsx(h,{}),raw:x},{id:"03",name:"List with description",component:e.jsx(v,{}),raw:k},{id:"04",name:"List with inline description",component:e.jsx(j,{}),raw:S},{id:"05",name:"List with radio on right",component:e.jsx(C,{}),raw:$},{id:"06",name:"Simple list with radio on right",component:e.jsx(B,{}),raw:R},{id:"07",name:"Simple table",component:e.jsx(P,{}),raw:E},{id:"08",name:"List with descriptions in panel",component:e.jsx(U,{}),raw:D},{id:"09",name:"Color picker",component:e.jsx(A,{}),raw:F},{id:"10",name:"Cards",component:e.jsx(Y,{}),raw:I},{id:"11",name:"Small cards",component:e.jsx(T,{}),raw:H},{id:"12",name:"Stacked cards",component:e.jsx(W,{}),raw:V}];return e.jsx("div",{className:"space-y-10 pb-20",children:i.map(s=>e.jsxs("section",{children:[e.jsxs("h2",{className:"mb-4 text-lg font-bold text-gray-800",children:[s.id,". ",s.name]}),e.jsx(m,{name:s.name,code:s.raw,children:s.component})]},s.id))})};export{ae as default};
