import{j as e,r as i}from"./index-CvCVbuS9.js";import{P as u}from"./PreviewWrapper-TzFvRoPZ.js";import{F as d}from"./ChevronDownIcon-CpWKsJQ8.js";import{F as g,a as N}from"./ArrowUpCircleIcon-BOpd08hZ.js";import{F as v}from"./ArrowPathIcon-B3P1Yq-h.js";const w=[{name:"Lindsay Walton",title:"Front-end Developer",email:"lindsay.walton@example.com",role:"Member"}];function j(){return e.jsxs("div",{className:"px-4 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"sm:flex sm:items-center",children:[e.jsxs("div",{className:"sm:flex-auto",children:[e.jsx("h1",{className:"text-base font-semibold text-gray-900",children:"Users"}),e.jsx("p",{className:"mt-2 text-sm text-gray-700",children:"A list of all the users in your account including their name, title, email and role."})]}),e.jsx("div",{className:"mt-4 sm:mt-0 sm:ml-16 sm:flex-none",children:e.jsx("button",{type:"button",className:"block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"Add user"})})]}),e.jsx("div",{className:"mt-8 flow-root",children:e.jsx("div",{className:"-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8",children:e.jsx("div",{className:"inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-300",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-0",children:"Name"}),e.jsx("th",{scope:"col",className:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900",children:"Title"}),e.jsx("th",{scope:"col",className:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900",children:"Email"}),e.jsx("th",{scope:"col",className:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900",children:"Role"}),e.jsx("th",{scope:"col",className:"relative py-3.5 pr-4 pl-3 sm:pr-0",children:e.jsx("span",{className:"sr-only",children:"Edit"})})]})}),e.jsx("tbody",{className:"divide-y divide-gray-200",children:w.map(t=>e.jsxs("tr",{children:[e.jsx("td",{className:"py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-0",children:t.name}),e.jsx("td",{className:"px-3 py-4 text-sm whitespace-nowrap text-gray-500",children:t.title}),e.jsx("td",{className:"px-3 py-4 text-sm whitespace-nowrap text-gray-500",children:t.email}),e.jsx("td",{className:"px-3 py-4 text-sm whitespace-nowrap text-gray-500",children:t.role}),e.jsx("td",{className:"relative py-4 pr-4 pl-3 text-right text-sm font-medium whitespace-nowrap sm:pr-0",children:e.jsxs("a",{href:"#",className:"text-indigo-600 hover:text-indigo-900",children:["Edit",e.jsxs("span",{className:"sr-only",children:[", ",t.name]})]})})]},t.email))})]})})})})]})}const k=`const people = [
  { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
  // More people...
]

export default function Example() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold text-gray-900">Users</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the users in your account including their name, title, email and role.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add user
          </button>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                    Name
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Title
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Email
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Role
                  </th>
                  <th scope="col" className="relative py-3.5 pr-4 pl-3 sm:pr-0">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {people.map((person) => (
                  <tr key={person.email}>
                    <td className="py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-0">
                      {person.name}
                    </td>
                    <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">{person.title}</td>
                    <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">{person.email}</td>
                    <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">{person.role}</td>
                    <td className="relative py-4 pr-4 pl-3 text-right text-sm font-medium whitespace-nowrap sm:pr-0">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900">
                        Edit<span className="sr-only">, {person.name}</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
`,E=[{name:"Lindsay Walton",title:"Front-end Developer",email:"lindsay.walton@example.com",role:"Member"}];function T(){return e.jsxs("div",{className:"px-4 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"sm:flex sm:items-center",children:[e.jsxs("div",{className:"sm:flex-auto",children:[e.jsx("h1",{className:"text-base font-semibold text-gray-900",children:"Users"}),e.jsx("p",{className:"mt-2 text-sm text-gray-700",children:"A list of all the users in your account including their name, title, email and role."})]}),e.jsx("div",{className:"mt-4 sm:mt-0 sm:ml-16 sm:flex-none",children:e.jsx("button",{type:"button",className:"block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"Add user"})})]}),e.jsx("div",{className:"mt-8 flow-root",children:e.jsx("div",{className:"-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8",children:e.jsx("div",{className:"inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8",children:e.jsx("div",{className:"overflow-hidden ring-1 shadow-sm ring-black/5 sm:rounded-lg",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-300",children:[e.jsx("thead",{className:"bg-gray-50",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-6",children:"Name"}),e.jsx("th",{scope:"col",className:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900",children:"Title"}),e.jsx("th",{scope:"col",className:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900",children:"Email"}),e.jsx("th",{scope:"col",className:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900",children:"Role"}),e.jsx("th",{scope:"col",className:"relative py-3.5 pr-4 pl-3 sm:pr-6",children:e.jsx("span",{className:"sr-only",children:"Edit"})})]})}),e.jsx("tbody",{className:"divide-y divide-gray-200 bg-white",children:E.map(t=>e.jsxs("tr",{children:[e.jsx("td",{className:"py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-6",children:t.name}),e.jsx("td",{className:"px-3 py-4 text-sm whitespace-nowrap text-gray-500",children:t.title}),e.jsx("td",{className:"px-3 py-4 text-sm whitespace-nowrap text-gray-500",children:t.email}),e.jsx("td",{className:"px-3 py-4 text-sm whitespace-nowrap text-gray-500",children:t.role}),e.jsx("td",{className:"relative py-4 pr-4 pl-3 text-right text-sm font-medium whitespace-nowrap sm:pr-6",children:e.jsxs("a",{href:"#",className:"text-indigo-600 hover:text-indigo-900",children:["Edit",e.jsxs("span",{className:"sr-only",children:[", ",t.name]})]})})]},t.email))})]})})})})})]})}const A=`const people = [
  { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
  // More people...
]

export default function Example() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold text-gray-900">Users</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the users in your account including their name, title, email and role.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add user
          </button>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden ring-1 shadow-sm ring-black/5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                      Name
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Title
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Email
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Role
                    </th>
                    <th scope="col" className="relative py-3.5 pr-4 pl-3 sm:pr-6">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {people.map((person) => (
                    <tr key={person.email}>
                      <td className="py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-6">
                        {person.name}
                      </td>
                      <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">{person.title}</td>
                      <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">{person.email}</td>
                      <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">{person.role}</td>
                      <td className="relative py-4 pr-4 pl-3 text-right text-sm font-medium whitespace-nowrap sm:pr-6">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                          Edit<span className="sr-only">, {person.name}</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
`,W=[{name:"Lindsay Walton",title:"Front-end Developer",email:"lindsay.walton@example.com",role:"Member"}];function M(){return e.jsxs("div",{className:"px-4 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"sm:flex sm:items-center",children:[e.jsxs("div",{className:"sm:flex-auto",children:[e.jsx("h1",{className:"text-base font-semibold text-gray-900",children:"Users"}),e.jsx("p",{className:"mt-2 text-sm text-gray-700",children:"A list of all the users in your account including their name, title, email and role."})]}),e.jsx("div",{className:"mt-4 sm:mt-0 sm:ml-16 sm:flex-none",children:e.jsx("button",{type:"button",className:"block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"Add user"})})]}),e.jsx("div",{className:"mt-8 flow-root",children:e.jsx("div",{className:"-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8",children:e.jsx("div",{className:"inline-block min-w-full py-2 align-middle",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-300",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-6 lg:pl-8",children:"Name"}),e.jsx("th",{scope:"col",className:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900",children:"Title"}),e.jsx("th",{scope:"col",className:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900",children:"Email"}),e.jsx("th",{scope:"col",className:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900",children:"Role"}),e.jsx("th",{scope:"col",className:"relative py-3.5 pr-4 pl-3 sm:pr-6 lg:pr-8",children:e.jsx("span",{className:"sr-only",children:"Edit"})})]})}),e.jsx("tbody",{className:"divide-y divide-gray-200 bg-white",children:W.map(t=>e.jsxs("tr",{children:[e.jsx("td",{className:"py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-6 lg:pl-8",children:t.name}),e.jsx("td",{className:"px-3 py-4 text-sm whitespace-nowrap text-gray-500",children:t.title}),e.jsx("td",{className:"px-3 py-4 text-sm whitespace-nowrap text-gray-500",children:t.email}),e.jsx("td",{className:"px-3 py-4 text-sm whitespace-nowrap text-gray-500",children:t.role}),e.jsx("td",{className:"relative py-4 pr-4 pl-3 text-right text-sm font-medium whitespace-nowrap sm:pr-6 lg:pr-8",children:e.jsxs("a",{href:"#",className:"text-indigo-600 hover:text-indigo-900",children:["Edit",e.jsxs("span",{className:"sr-only",children:[", ",t.name]})]})})]},t.email))})]})})})})]})}const C=`const people = [
  { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
  // More people...
]

export default function Example() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold text-gray-900">Users</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the users in your account including their name, title, email and role.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add user
          </button>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-6 lg:pl-8"
                  >
                    Name
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Title
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Email
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Role
                  </th>
                  <th scope="col" className="relative py-3.5 pr-4 pl-3 sm:pr-6 lg:pr-8">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {people.map((person) => (
                  <tr key={person.email}>
                    <td className="py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-6 lg:pl-8">
                      {person.name}
                    </td>
                    <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">{person.title}</td>
                    <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">{person.email}</td>
                    <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">{person.role}</td>
                    <td className="relative py-4 pr-4 pl-3 text-right text-sm font-medium whitespace-nowrap sm:pr-6 lg:pr-8">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900">
                        Edit<span className="sr-only">, {person.name}</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
`,D=[{name:"Lindsay Walton",title:"Front-end Developer",email:"lindsay.walton@example.com",role:"Member"}];function $(){return e.jsxs("div",{children:[e.jsx("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"sm:flex sm:items-center",children:[e.jsxs("div",{className:"sm:flex-auto",children:[e.jsx("h1",{className:"text-base font-semibold text-gray-900",children:"Users"}),e.jsx("p",{className:"mt-2 text-sm text-gray-700",children:"A list of all the users in your account including their name, title, email and role."})]}),e.jsx("div",{className:"mt-4 sm:mt-0 sm:ml-16 sm:flex-none",children:e.jsx("button",{type:"button",className:"block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"Add user"})})]})}),e.jsx("div",{className:"mt-8 flow-root overflow-hidden",children:e.jsx("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:e.jsxs("table",{className:"w-full text-left",children:[e.jsx("thead",{className:"bg-white",children:e.jsxs("tr",{children:[e.jsxs("th",{scope:"col",className:"relative isolate py-3.5 pr-3 text-left text-sm font-semibold text-gray-900",children:["Name",e.jsx("div",{className:"absolute inset-y-0 right-full -z-10 w-screen border-b border-b-gray-200"}),e.jsx("div",{className:"absolute inset-y-0 left-0 -z-10 w-screen border-b border-b-gray-200"})]}),e.jsx("th",{scope:"col",className:"hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell",children:"Title"}),e.jsx("th",{scope:"col",className:"hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 md:table-cell",children:"Email"}),e.jsx("th",{scope:"col",className:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900",children:"Role"}),e.jsx("th",{scope:"col",className:"relative py-3.5 pl-3",children:e.jsx("span",{className:"sr-only",children:"Edit"})})]})}),e.jsx("tbody",{children:D.map(t=>e.jsxs("tr",{children:[e.jsxs("td",{className:"relative py-4 pr-3 text-sm font-medium text-gray-900",children:[t.name,e.jsx("div",{className:"absolute right-full bottom-0 h-px w-screen bg-gray-100"}),e.jsx("div",{className:"absolute bottom-0 left-0 h-px w-screen bg-gray-100"})]}),e.jsx("td",{className:"hidden px-3 py-4 text-sm text-gray-500 sm:table-cell",children:t.title}),e.jsx("td",{className:"hidden px-3 py-4 text-sm text-gray-500 md:table-cell",children:t.email}),e.jsx("td",{className:"px-3 py-4 text-sm text-gray-500",children:t.role}),e.jsx("td",{className:"relative py-4 pl-3 text-right text-sm font-medium",children:e.jsxs("a",{href:"#",className:"text-indigo-600 hover:text-indigo-900",children:["Edit",e.jsxs("span",{className:"sr-only",children:[", ",t.name]})]})})]},t.email))})]})})})]})}const S=`const people = [
  { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
  // More people...
]

export default function Example() {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold text-gray-900">Users</h1>
            <p className="mt-2 text-sm text-gray-700">
              A list of all the users in your account including their name, title, email and role.
            </p>
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
            <button
              type="button"
              className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add user
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8 flow-root overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <table className="w-full text-left">
            <thead className="bg-white">
              <tr>
                <th scope="col" className="relative isolate py-3.5 pr-3 text-left text-sm font-semibold text-gray-900">
                  Name
                  <div className="absolute inset-y-0 right-full -z-10 w-screen border-b border-b-gray-200" />
                  <div className="absolute inset-y-0 left-0 -z-10 w-screen border-b border-b-gray-200" />
                </th>
                <th
                  scope="col"
                  className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                >
                  Title
                </th>
                <th
                  scope="col"
                  className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 md:table-cell"
                >
                  Email
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Role
                </th>
                <th scope="col" className="relative py-3.5 pl-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {people.map((person) => (
                <tr key={person.email}>
                  <td className="relative py-4 pr-3 text-sm font-medium text-gray-900">
                    {person.name}
                    <div className="absolute right-full bottom-0 h-px w-screen bg-gray-100" />
                    <div className="absolute bottom-0 left-0 h-px w-screen bg-gray-100" />
                  </td>
                  <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">{person.title}</td>
                  <td className="hidden px-3 py-4 text-sm text-gray-500 md:table-cell">{person.email}</td>
                  <td className="px-3 py-4 text-sm text-gray-500">{person.role}</td>
                  <td className="relative py-4 pl-3 text-right text-sm font-medium">
                    <a href="#" className="text-indigo-600 hover:text-indigo-900">
                      Edit<span className="sr-only">, {person.name}</span>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
`,R=[{name:"Lindsay Walton",title:"Front-end Developer",email:"lindsay.walton@example.com",role:"Member"}];function U(){return e.jsxs("div",{className:"px-4 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"sm:flex sm:items-center",children:[e.jsxs("div",{className:"sm:flex-auto",children:[e.jsx("h1",{className:"text-base font-semibold text-gray-900",children:"Users"}),e.jsx("p",{className:"mt-2 text-sm text-gray-700",children:"A list of all the users in your account including their name, title, email and role."})]}),e.jsx("div",{className:"mt-4 sm:mt-0 sm:ml-16 sm:flex-none",children:e.jsx("button",{type:"button",className:"block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"Add user"})})]}),e.jsx("div",{className:"mt-8 flow-root",children:e.jsx("div",{className:"-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8",children:e.jsx("div",{className:"inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-300",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-3",children:"Name"}),e.jsx("th",{scope:"col",className:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900",children:"Title"}),e.jsx("th",{scope:"col",className:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900",children:"Email"}),e.jsx("th",{scope:"col",className:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900",children:"Role"}),e.jsx("th",{scope:"col",className:"relative py-3.5 pr-4 pl-3 sm:pr-3",children:e.jsx("span",{className:"sr-only",children:"Edit"})})]})}),e.jsx("tbody",{className:"bg-white",children:R.map(t=>e.jsxs("tr",{className:"even:bg-gray-50",children:[e.jsx("td",{className:"py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-3",children:t.name}),e.jsx("td",{className:"px-3 py-4 text-sm whitespace-nowrap text-gray-500",children:t.title}),e.jsx("td",{className:"px-3 py-4 text-sm whitespace-nowrap text-gray-500",children:t.email}),e.jsx("td",{className:"px-3 py-4 text-sm whitespace-nowrap text-gray-500",children:t.role}),e.jsx("td",{className:"relative py-4 pr-4 pl-3 text-right text-sm font-medium whitespace-nowrap sm:pr-3",children:e.jsxs("a",{href:"#",className:"text-indigo-600 hover:text-indigo-900",children:["Edit",e.jsxs("span",{className:"sr-only",children:[", ",t.name]})]})})]},t.email))})]})})})})]})}const F=`const people = [
  { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
  // More people...
]

export default function Example() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold text-gray-900">Users</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the users in your account including their name, title, email and role.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add user
          </button>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                    Name
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Title
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Email
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Role
                  </th>
                  <th scope="col" className="relative py-3.5 pr-4 pl-3 sm:pr-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {people.map((person) => (
                  <tr key={person.email} className="even:bg-gray-50">
                    <td className="py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-3">
                      {person.name}
                    </td>
                    <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">{person.title}</td>
                    <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">{person.email}</td>
                    <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">{person.role}</td>
                    <td className="relative py-4 pr-4 pl-3 text-right text-sm font-medium whitespace-nowrap sm:pr-3">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900">
                        Edit<span className="sr-only">, {person.name}</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
`,L=[{name:"Lindsay Walton",title:"Front-end Developer",email:"lindsay.walton@example.com",role:"Member"}];function P(){return e.jsxs("div",{className:"px-4 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"sm:flex sm:items-center",children:[e.jsxs("div",{className:"sm:flex-auto",children:[e.jsx("h1",{className:"text-base font-semibold text-gray-900",children:"Users"}),e.jsx("p",{className:"mt-2 text-sm text-gray-700",children:"A list of all the users in your account including their name, title, email and role."})]}),e.jsx("div",{className:"mt-4 sm:mt-0 sm:ml-16 sm:flex-none",children:e.jsx("button",{type:"button",className:"block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"Add user"})})]}),e.jsx("div",{className:"mt-8 flow-root",children:e.jsx("div",{className:"-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8",children:e.jsx("div",{className:"inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-300",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"py-3 pr-3 pl-4 text-left text-xs font-medium tracking-wide text-gray-500 uppercase sm:pl-0",children:"Name"}),e.jsx("th",{scope:"col",className:"px-3 py-3 text-left text-xs font-medium tracking-wide text-gray-500 uppercase",children:"Title"}),e.jsx("th",{scope:"col",className:"px-3 py-3 text-left text-xs font-medium tracking-wide text-gray-500 uppercase",children:"Email"}),e.jsx("th",{scope:"col",className:"px-3 py-3 text-left text-xs font-medium tracking-wide text-gray-500 uppercase",children:"Role"}),e.jsx("th",{scope:"col",className:"relative py-3 pr-4 pl-3 sm:pr-0",children:e.jsx("span",{className:"sr-only",children:"Edit"})})]})}),e.jsx("tbody",{className:"divide-y divide-gray-200 bg-white",children:L.map(t=>e.jsxs("tr",{children:[e.jsx("td",{className:"py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-0",children:t.name}),e.jsx("td",{className:"px-3 py-4 text-sm whitespace-nowrap text-gray-500",children:t.title}),e.jsx("td",{className:"px-3 py-4 text-sm whitespace-nowrap text-gray-500",children:t.email}),e.jsx("td",{className:"px-3 py-4 text-sm whitespace-nowrap text-gray-500",children:t.role}),e.jsx("td",{className:"relative py-4 pr-4 pl-3 text-right text-sm font-medium whitespace-nowrap sm:pr-0",children:e.jsxs("a",{href:"#",className:"text-indigo-600 hover:text-indigo-900",children:["Edit",e.jsxs("span",{className:"sr-only",children:[", ",t.name]})]})})]},t.email))})]})})})})]})}const B=`const people = [
  { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
  // More people...
]

export default function Example() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold text-gray-900">Users</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the users in your account including their name, title, email and role.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add user
          </button>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3 pr-3 pl-4 text-left text-xs font-medium tracking-wide text-gray-500 uppercase sm:pl-0"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3 text-left text-xs font-medium tracking-wide text-gray-500 uppercase"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3 text-left text-xs font-medium tracking-wide text-gray-500 uppercase"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3 text-left text-xs font-medium tracking-wide text-gray-500 uppercase"
                  >
                    Role
                  </th>
                  <th scope="col" className="relative py-3 pr-4 pl-3 sm:pr-0">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {people.map((person) => (
                  <tr key={person.email}>
                    <td className="py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-0">
                      {person.name}
                    </td>
                    <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">{person.title}</td>
                    <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">{person.email}</td>
                    <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">{person.role}</td>
                    <td className="relative py-4 pr-4 pl-3 text-right text-sm font-medium whitespace-nowrap sm:pr-0">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900">
                        Edit<span className="sr-only">, {person.name}</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
`,z=[{name:"Lindsay Walton",title:"Front-end Developer",email:"lindsay.walton@example.com",role:"Member"}];function H(){return e.jsxs("div",{className:"px-4 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"sm:flex sm:items-center",children:[e.jsxs("div",{className:"sm:flex-auto",children:[e.jsx("h1",{className:"text-base font-semibold text-gray-900",children:"Users"}),e.jsx("p",{className:"mt-2 text-sm text-gray-700",children:"A list of all the users in your account including their name, title, email and role."})]}),e.jsx("div",{className:"mt-4 sm:mt-0 sm:ml-16 sm:flex-none",children:e.jsx("button",{type:"button",className:"block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"Add user"})})]}),e.jsx("div",{className:"-mx-4 mt-8 sm:-mx-0",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-300",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-0",children:"Name"}),e.jsx("th",{scope:"col",className:"hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell",children:"Title"}),e.jsx("th",{scope:"col",className:"hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell",children:"Email"}),e.jsx("th",{scope:"col",className:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900",children:"Role"}),e.jsx("th",{scope:"col",className:"relative py-3.5 pr-4 pl-3 sm:pr-0",children:e.jsx("span",{className:"sr-only",children:"Edit"})})]})}),e.jsx("tbody",{className:"divide-y divide-gray-200 bg-white",children:z.map(t=>e.jsxs("tr",{children:[e.jsxs("td",{className:"w-full max-w-0 py-4 pr-3 pl-4 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-0",children:[t.name,e.jsxs("dl",{className:"font-normal lg:hidden",children:[e.jsx("dt",{className:"sr-only",children:"Title"}),e.jsx("dd",{className:"mt-1 truncate text-gray-700",children:t.title}),e.jsx("dt",{className:"sr-only sm:hidden",children:"Email"}),e.jsx("dd",{className:"mt-1 truncate text-gray-500 sm:hidden",children:t.email})]})]}),e.jsx("td",{className:"hidden px-3 py-4 text-sm text-gray-500 lg:table-cell",children:t.title}),e.jsx("td",{className:"hidden px-3 py-4 text-sm text-gray-500 sm:table-cell",children:t.email}),e.jsx("td",{className:"px-3 py-4 text-sm text-gray-500",children:t.role}),e.jsx("td",{className:"py-4 pr-4 pl-3 text-right text-sm font-medium sm:pr-0",children:e.jsxs("a",{href:"#",className:"text-indigo-600 hover:text-indigo-900",children:["Edit",e.jsxs("span",{className:"sr-only",children:[", ",t.name]})]})})]},t.email))})]})})]})}const I=`const people = [
  { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
  // More people...
]

export default function Example() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold text-gray-900">Users</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the users in your account including their name, title, email and role.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add user
          </button>
        </div>
      </div>
      <div className="-mx-4 mt-8 sm:-mx-0">
        <table className="min-w-full divide-y divide-gray-300">
          <thead>
            <tr>
              <th scope="col" className="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                Name
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
              >
                Title
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
              >
                Email
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Role
              </th>
              <th scope="col" className="relative py-3.5 pr-4 pl-3 sm:pr-0">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {people.map((person) => (
              <tr key={person.email}>
                <td className="w-full max-w-0 py-4 pr-3 pl-4 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-0">
                  {person.name}
                  <dl className="font-normal lg:hidden">
                    <dt className="sr-only">Title</dt>
                    <dd className="mt-1 truncate text-gray-700">{person.title}</dd>
                    <dt className="sr-only sm:hidden">Email</dt>
                    <dd className="mt-1 truncate text-gray-500 sm:hidden">{person.email}</dd>
                  </dl>
                </td>
                <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">{person.title}</td>
                <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">{person.email}</td>
                <td className="px-3 py-4 text-sm text-gray-500">{person.role}</td>
                <td className="py-4 pr-4 pl-3 text-right text-sm font-medium sm:pr-0">
                  <a href="#" className="text-indigo-600 hover:text-indigo-900">
                    Edit<span className="sr-only">, {person.name}</span>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
`,O=[{name:"Lindsay Walton",title:"Front-end Developer",email:"lindsay.walton@example.com",role:"Member"}];function q(){return e.jsxs("div",{className:"px-4 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"sm:flex sm:items-center",children:[e.jsxs("div",{className:"sm:flex-auto",children:[e.jsx("h1",{className:"text-base font-semibold text-gray-900",children:"Users"}),e.jsx("p",{className:"mt-2 text-sm text-gray-700",children:"A list of all the users in your account including their name, title, email and role."})]}),e.jsx("div",{className:"mt-4 sm:mt-0 sm:ml-16 sm:flex-none",children:e.jsx("button",{type:"button",className:"block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"Add user"})})]}),e.jsx("div",{className:"-mx-4 mt-8 sm:-mx-0",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-300",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-0",children:"Name"}),e.jsx("th",{scope:"col",className:"hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell",children:"Title"}),e.jsx("th",{scope:"col",className:"hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell",children:"Email"}),e.jsx("th",{scope:"col",className:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900",children:"Role"}),e.jsx("th",{scope:"col",className:"relative py-3.5 pr-4 pl-3 sm:pr-0",children:e.jsx("span",{className:"sr-only",children:"Edit"})})]})}),e.jsx("tbody",{className:"divide-y divide-gray-200 bg-white",children:O.map(t=>e.jsxs("tr",{children:[e.jsx("td",{className:"py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-0",children:t.name}),e.jsx("td",{className:"hidden px-3 py-4 text-sm whitespace-nowrap text-gray-500 sm:table-cell",children:t.title}),e.jsx("td",{className:"hidden px-3 py-4 text-sm whitespace-nowrap text-gray-500 lg:table-cell",children:t.email}),e.jsx("td",{className:"px-3 py-4 text-sm whitespace-nowrap text-gray-500",children:t.role}),e.jsx("td",{className:"py-4 pr-4 pl-3 text-right text-sm font-medium whitespace-nowrap sm:pr-0",children:e.jsxs("a",{href:"#",className:"text-indigo-600 hover:text-indigo-900",children:["Edit",e.jsxs("span",{className:"sr-only",children:[", ",t.name]})]})})]},t.email))})]})})]})}const Q=`const people = [
  { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
  // More people...
]

export default function Example() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold text-gray-900">Users</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the users in your account including their name, title, email and role.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add user
          </button>
        </div>
      </div>
      <div className="-mx-4 mt-8 sm:-mx-0">
        <table className="min-w-full divide-y divide-gray-300">
          <thead>
            <tr>
              <th scope="col" className="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                Name
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
              >
                Title
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
              >
                Email
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Role
              </th>
              <th scope="col" className="relative py-3.5 pr-4 pl-3 sm:pr-0">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {people.map((person) => (
              <tr key={person.email}>
                <td className="py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-0">
                  {person.name}
                </td>
                <td className="hidden px-3 py-4 text-sm whitespace-nowrap text-gray-500 sm:table-cell">
                  {person.title}
                </td>
                <td className="hidden px-3 py-4 text-sm whitespace-nowrap text-gray-500 lg:table-cell">
                  {person.email}
                </td>
                <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">{person.role}</td>
                <td className="py-4 pr-4 pl-3 text-right text-sm font-medium whitespace-nowrap sm:pr-0">
                  <a href="#" className="text-indigo-600 hover:text-indigo-900">
                    Edit<span className="sr-only">, {person.name}</span>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
`,J=[{name:"Lindsay Walton",title:"Front-end Developer",department:"Optimization",email:"lindsay.walton@example.com",role:"Member",image:"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}];function G(){return e.jsxs("div",{className:"px-4 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"sm:flex sm:items-center",children:[e.jsxs("div",{className:"sm:flex-auto",children:[e.jsx("h1",{className:"text-base font-semibold text-gray-900",children:"Users"}),e.jsx("p",{className:"mt-2 text-sm text-gray-700",children:"A list of all the users in your account including their name, title, email and role."})]}),e.jsx("div",{className:"mt-4 sm:mt-0 sm:ml-16 sm:flex-none",children:e.jsx("button",{type:"button",className:"block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"Add user"})})]}),e.jsx("div",{className:"mt-8 flow-root",children:e.jsx("div",{className:"-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8",children:e.jsx("div",{className:"inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-300",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-0",children:"Name"}),e.jsx("th",{scope:"col",className:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900",children:"Title"}),e.jsx("th",{scope:"col",className:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900",children:"Status"}),e.jsx("th",{scope:"col",className:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900",children:"Role"}),e.jsx("th",{scope:"col",className:"relative py-3.5 pr-4 pl-3 sm:pr-0",children:e.jsx("span",{className:"sr-only",children:"Edit"})})]})}),e.jsx("tbody",{className:"divide-y divide-gray-200 bg-white",children:J.map(t=>e.jsxs("tr",{children:[e.jsx("td",{className:"py-5 pr-3 pl-4 text-sm whitespace-nowrap sm:pl-0",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"size-11 shrink-0",children:e.jsx("img",{alt:"",src:t.image,className:"size-11 rounded-full"})}),e.jsxs("div",{className:"ml-4",children:[e.jsx("div",{className:"font-medium text-gray-900",children:t.name}),e.jsx("div",{className:"mt-1 text-gray-500",children:t.email})]})]})}),e.jsxs("td",{className:"px-3 py-5 text-sm whitespace-nowrap text-gray-500",children:[e.jsx("div",{className:"text-gray-900",children:t.title}),e.jsx("div",{className:"mt-1 text-gray-500",children:t.department})]}),e.jsx("td",{className:"px-3 py-5 text-sm whitespace-nowrap text-gray-500",children:e.jsx("span",{className:"inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-green-600/20 ring-inset",children:"Active"})}),e.jsx("td",{className:"px-3 py-5 text-sm whitespace-nowrap text-gray-500",children:t.role}),e.jsx("td",{className:"relative py-5 pr-4 pl-3 text-right text-sm font-medium whitespace-nowrap sm:pr-0",children:e.jsxs("a",{href:"#",className:"text-indigo-600 hover:text-indigo-900",children:["Edit",e.jsxs("span",{className:"sr-only",children:[", ",t.name]})]})})]},t.email))})]})})})})]})}const Y=`const people = [
  {
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    department: 'Optimization',
    email: 'lindsay.walton@example.com',
    role: 'Member',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  // More people...
]

export default function Example() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold text-gray-900">Users</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the users in your account including their name, title, email and role.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add user
          </button>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                    Name
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Title
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Status
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Role
                  </th>
                  <th scope="col" className="relative py-3.5 pr-4 pl-3 sm:pr-0">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {people.map((person) => (
                  <tr key={person.email}>
                    <td className="py-5 pr-3 pl-4 text-sm whitespace-nowrap sm:pl-0">
                      <div className="flex items-center">
                        <div className="size-11 shrink-0">
                          <img alt="" src={person.image} className="size-11 rounded-full" />
                        </div>
                        <div className="ml-4">
                          <div className="font-medium text-gray-900">{person.name}</div>
                          <div className="mt-1 text-gray-500">{person.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-3 py-5 text-sm whitespace-nowrap text-gray-500">
                      <div className="text-gray-900">{person.title}</div>
                      <div className="mt-1 text-gray-500">{person.department}</div>
                    </td>
                    <td className="px-3 py-5 text-sm whitespace-nowrap text-gray-500">
                      <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-green-600/20 ring-inset">
                        Active
                      </span>
                    </td>
                    <td className="px-3 py-5 text-sm whitespace-nowrap text-gray-500">{person.role}</td>
                    <td className="relative py-5 pr-4 pl-3 text-right text-sm font-medium whitespace-nowrap sm:pr-0">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900">
                        Edit<span className="sr-only">, {person.name}</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
`,o=[{name:"Lindsay Walton",title:"Front-end Developer",email:"lindsay.walton@example.com",role:"Member"}];function r(...t){return t.filter(Boolean).join(" ")}function V(){return e.jsxs("div",{className:"px-4 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"sm:flex sm:items-center",children:[e.jsxs("div",{className:"sm:flex-auto",children:[e.jsx("h1",{className:"text-base font-semibold text-gray-900",children:"Users"}),e.jsx("p",{className:"mt-2 text-sm text-gray-700",children:"A list of all the users in your account including their name, title, email and role."})]}),e.jsx("div",{className:"mt-4 sm:mt-0 sm:ml-16 sm:flex-none",children:e.jsx("button",{type:"button",className:"block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"Add user"})})]}),e.jsx("div",{className:"mt-8 flow-root",children:e.jsx("div",{className:"-mx-4 -my-2 sm:-mx-6 lg:-mx-8",children:e.jsx("div",{className:"inline-block min-w-full py-2 align-middle",children:e.jsxs("table",{className:"min-w-full border-separate border-spacing-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"sticky top-0 z-10 border-b border-gray-300 bg-white/75 py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 backdrop-blur-sm backdrop-filter sm:pl-6 lg:pl-8",children:"Name"}),e.jsx("th",{scope:"col",className:"sticky top-0 z-10 hidden border-b border-gray-300 bg-white/75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur-sm backdrop-filter sm:table-cell",children:"Title"}),e.jsx("th",{scope:"col",className:"sticky top-0 z-10 hidden border-b border-gray-300 bg-white/75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur-sm backdrop-filter lg:table-cell",children:"Email"}),e.jsx("th",{scope:"col",className:"sticky top-0 z-10 border-b border-gray-300 bg-white/75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur-sm backdrop-filter",children:"Role"}),e.jsx("th",{scope:"col",className:"sticky top-0 z-10 border-b border-gray-300 bg-white/75 py-3.5 pr-4 pl-3 backdrop-blur-sm backdrop-filter sm:pr-6 lg:pr-8",children:e.jsx("span",{className:"sr-only",children:"Edit"})})]})}),e.jsx("tbody",{children:o.map((t,s)=>e.jsxs("tr",{children:[e.jsx("td",{className:r(s!==o.length-1?"border-b border-gray-200":"","py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-6 lg:pl-8"),children:t.name}),e.jsx("td",{className:r(s!==o.length-1?"border-b border-gray-200":"","hidden px-3 py-4 text-sm whitespace-nowrap text-gray-500 sm:table-cell"),children:t.title}),e.jsx("td",{className:r(s!==o.length-1?"border-b border-gray-200":"","hidden px-3 py-4 text-sm whitespace-nowrap text-gray-500 lg:table-cell"),children:t.email}),e.jsx("td",{className:r(s!==o.length-1?"border-b border-gray-200":"","px-3 py-4 text-sm whitespace-nowrap text-gray-500"),children:t.role}),e.jsx("td",{className:r(s!==o.length-1?"border-b border-gray-200":"","relative py-4 pr-4 pl-3 text-right text-sm font-medium whitespace-nowrap sm:pr-8 lg:pr-8"),children:e.jsxs("a",{href:"#",className:"text-indigo-600 hover:text-indigo-900",children:["Edit",e.jsxs("span",{className:"sr-only",children:[", ",t.name]})]})})]},t.email))})]})})})})]})}const K=`const people = [
  { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
  // More people...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold text-gray-900">Users</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the users in your account including their name, title, email and role.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add user
          </button>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle">
            <table className="min-w-full border-separate border-spacing-0">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 border-b border-gray-300 bg-white/75 py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 backdrop-blur-sm backdrop-filter sm:pl-6 lg:pl-8"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 hidden border-b border-gray-300 bg-white/75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur-sm backdrop-filter sm:table-cell"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 hidden border-b border-gray-300 bg-white/75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur-sm backdrop-filter lg:table-cell"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 border-b border-gray-300 bg-white/75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur-sm backdrop-filter"
                  >
                    Role
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 border-b border-gray-300 bg-white/75 py-3.5 pr-4 pl-3 backdrop-blur-sm backdrop-filter sm:pr-6 lg:pr-8"
                  >
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {people.map((person, personIdx) => (
                  <tr key={person.email}>
                    <td
                      className={classNames(
                        personIdx !== people.length - 1 ? 'border-b border-gray-200' : '',
                        'py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-6 lg:pl-8',
                      )}
                    >
                      {person.name}
                    </td>
                    <td
                      className={classNames(
                        personIdx !== people.length - 1 ? 'border-b border-gray-200' : '',
                        'hidden px-3 py-4 text-sm whitespace-nowrap text-gray-500 sm:table-cell',
                      )}
                    >
                      {person.title}
                    </td>
                    <td
                      className={classNames(
                        personIdx !== people.length - 1 ? 'border-b border-gray-200' : '',
                        'hidden px-3 py-4 text-sm whitespace-nowrap text-gray-500 lg:table-cell',
                      )}
                    >
                      {person.email}
                    </td>
                    <td
                      className={classNames(
                        personIdx !== people.length - 1 ? 'border-b border-gray-200' : '',
                        'px-3 py-4 text-sm whitespace-nowrap text-gray-500',
                      )}
                    >
                      {person.role}
                    </td>
                    <td
                      className={classNames(
                        personIdx !== people.length - 1 ? 'border-b border-gray-200' : '',
                        'relative py-4 pr-4 pl-3 text-right text-sm font-medium whitespace-nowrap sm:pr-8 lg:pr-8',
                      )}
                    >
                      <a href="#" className="text-indigo-600 hover:text-indigo-900">
                        Edit<span className="sr-only">, {person.name}</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
`,X=[{name:"Lindsay Walton",title:"Front-end Developer",email:"lindsay.walton@example.com",role:"Member"}];function Z(){return e.jsxs("div",{className:"px-4 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"sm:flex sm:items-center",children:[e.jsxs("div",{className:"sm:flex-auto",children:[e.jsx("h1",{className:"text-base font-semibold text-gray-900",children:"Users"}),e.jsx("p",{className:"mt-2 text-sm text-gray-700",children:"A list of all the users in your account including their name, title, email and role."})]}),e.jsx("div",{className:"mt-4 sm:mt-0 sm:ml-16 sm:flex-none",children:e.jsx("button",{type:"button",className:"block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"Add user"})})]}),e.jsx("div",{className:"mt-8 flow-root",children:e.jsx("div",{className:"-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8",children:e.jsx("div",{className:"inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-300",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"divide-x divide-gray-200",children:[e.jsx("th",{scope:"col",className:"py-3.5 pr-4 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-0",children:"Name"}),e.jsx("th",{scope:"col",className:"px-4 py-3.5 text-left text-sm font-semibold text-gray-900",children:"Title"}),e.jsx("th",{scope:"col",className:"px-4 py-3.5 text-left text-sm font-semibold text-gray-900",children:"Email"}),e.jsx("th",{scope:"col",className:"py-3.5 pr-4 pl-4 text-left text-sm font-semibold text-gray-900 sm:pr-0",children:"Role"})]})}),e.jsx("tbody",{className:"divide-y divide-gray-200 bg-white",children:X.map(t=>e.jsxs("tr",{className:"divide-x divide-gray-200",children:[e.jsx("td",{className:"py-4 pr-4 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-0",children:t.name}),e.jsx("td",{className:"p-4 text-sm whitespace-nowrap text-gray-500",children:t.title}),e.jsx("td",{className:"p-4 text-sm whitespace-nowrap text-gray-500",children:t.email}),e.jsx("td",{className:"py-4 pr-4 pl-4 text-sm whitespace-nowrap text-gray-500 sm:pr-0",children:t.role})]},t.email))})]})})})})]})}const _=`const people = [
  { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
  // More people...
]

export default function Example() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold text-gray-900">Users</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the users in your account including their name, title, email and role.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add user
          </button>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr className="divide-x divide-gray-200">
                  <th scope="col" className="py-3.5 pr-4 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                    Name
                  </th>
                  <th scope="col" className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Title
                  </th>
                  <th scope="col" className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Email
                  </th>
                  <th scope="col" className="py-3.5 pr-4 pl-4 text-left text-sm font-semibold text-gray-900 sm:pr-0">
                    Role
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {people.map((person) => (
                  <tr key={person.email} className="divide-x divide-gray-200">
                    <td className="py-4 pr-4 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-0">
                      {person.name}
                    </td>
                    <td className="p-4 text-sm whitespace-nowrap text-gray-500">{person.title}</td>
                    <td className="p-4 text-sm whitespace-nowrap text-gray-500">{person.email}</td>
                    <td className="py-4 pr-4 pl-4 text-sm whitespace-nowrap text-gray-500 sm:pr-0">{person.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
`,ee=[{id:"AAPS0L",company:"Chase & Co.",share:"CAC",commission:"+$4.37",price:"$3,509.00",quantity:"12.00",netAmount:"$4,397.00"}];function te(){return e.jsxs("div",{className:"px-4 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"sm:flex sm:items-center",children:[e.jsxs("div",{className:"sm:flex-auto",children:[e.jsx("h1",{className:"text-base font-semibold text-gray-900",children:"Transactions"}),e.jsx("p",{className:"mt-2 text-sm text-gray-700",children:"A table of placeholder stock market data that does not make any sense."})]}),e.jsx("div",{className:"mt-4 sm:mt-0 sm:ml-16 sm:flex-none",children:e.jsx("button",{type:"button",className:"block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"Export"})})]}),e.jsx("div",{className:"mt-8 flow-root",children:e.jsx("div",{className:"-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8",children:e.jsx("div",{className:"inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-300",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"py-3.5 pr-3 pl-4 text-left text-sm font-semibold whitespace-nowrap text-gray-900 sm:pl-0",children:"Transaction ID"}),e.jsx("th",{scope:"col",className:"px-2 py-3.5 text-left text-sm font-semibold whitespace-nowrap text-gray-900",children:"Company"}),e.jsx("th",{scope:"col",className:"px-2 py-3.5 text-left text-sm font-semibold whitespace-nowrap text-gray-900",children:"Share"}),e.jsx("th",{scope:"col",className:"px-2 py-3.5 text-left text-sm font-semibold whitespace-nowrap text-gray-900",children:"Commision"}),e.jsx("th",{scope:"col",className:"px-2 py-3.5 text-left text-sm font-semibold whitespace-nowrap text-gray-900",children:"Price"}),e.jsx("th",{scope:"col",className:"px-2 py-3.5 text-left text-sm font-semibold whitespace-nowrap text-gray-900",children:"Quantity"}),e.jsx("th",{scope:"col",className:"px-2 py-3.5 text-left text-sm font-semibold whitespace-nowrap text-gray-900",children:"Net amount"}),e.jsx("th",{scope:"col",className:"relative py-3.5 pr-4 pl-3 whitespace-nowrap sm:pr-0",children:e.jsx("span",{className:"sr-only",children:"Edit"})})]})}),e.jsx("tbody",{className:"divide-y divide-gray-200 bg-white",children:ee.map(t=>e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-3 pl-4 text-sm whitespace-nowrap text-gray-500 sm:pl-0",children:t.id}),e.jsx("td",{className:"px-2 py-2 text-sm font-medium whitespace-nowrap text-gray-900",children:t.company}),e.jsx("td",{className:"px-2 py-2 text-sm whitespace-nowrap text-gray-900",children:t.share}),e.jsx("td",{className:"px-2 py-2 text-sm whitespace-nowrap text-gray-500",children:t.commission}),e.jsx("td",{className:"px-2 py-2 text-sm whitespace-nowrap text-gray-500",children:t.price}),e.jsx("td",{className:"px-2 py-2 text-sm whitespace-nowrap text-gray-500",children:t.quantity}),e.jsx("td",{className:"px-2 py-2 text-sm whitespace-nowrap text-gray-500",children:t.netAmount}),e.jsx("td",{className:"relative py-2 pr-4 pl-3 text-right text-sm font-medium whitespace-nowrap sm:pr-0",children:e.jsxs("a",{href:"#",className:"text-indigo-600 hover:text-indigo-900",children:["Edit",e.jsxs("span",{className:"sr-only",children:[", ",t.id]})]})})]},t.id))})]})})})})]})}const se=`const transactions = [
  {
    id: 'AAPS0L',
    company: 'Chase & Co.',
    share: 'CAC',
    commission: '+$4.37',
    price: '$3,509.00',
    quantity: '12.00',
    netAmount: '$4,397.00',
  },
  // More transactions...
]

export default function Example() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold text-gray-900">Transactions</h1>
          <p className="mt-2 text-sm text-gray-700">
            A table of placeholder stock market data that does not make any sense.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Export
          </button>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pr-3 pl-4 text-left text-sm font-semibold whitespace-nowrap text-gray-900 sm:pl-0"
                  >
                    Transaction ID
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-3.5 text-left text-sm font-semibold whitespace-nowrap text-gray-900"
                  >
                    Company
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-3.5 text-left text-sm font-semibold whitespace-nowrap text-gray-900"
                  >
                    Share
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-3.5 text-left text-sm font-semibold whitespace-nowrap text-gray-900"
                  >
                    Commision
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-3.5 text-left text-sm font-semibold whitespace-nowrap text-gray-900"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-3.5 text-left text-sm font-semibold whitespace-nowrap text-gray-900"
                  >
                    Quantity
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-3.5 text-left text-sm font-semibold whitespace-nowrap text-gray-900"
                  >
                    Net amount
                  </th>
                  <th scope="col" className="relative py-3.5 pr-4 pl-3 whitespace-nowrap sm:pr-0">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {transactions.map((transaction) => (
                  <tr key={transaction.id}>
                    <td className="py-2 pr-3 pl-4 text-sm whitespace-nowrap text-gray-500 sm:pl-0">{transaction.id}</td>
                    <td className="px-2 py-2 text-sm font-medium whitespace-nowrap text-gray-900">
                      {transaction.company}
                    </td>
                    <td className="px-2 py-2 text-sm whitespace-nowrap text-gray-900">{transaction.share}</td>
                    <td className="px-2 py-2 text-sm whitespace-nowrap text-gray-500">{transaction.commission}</td>
                    <td className="px-2 py-2 text-sm whitespace-nowrap text-gray-500">{transaction.price}</td>
                    <td className="px-2 py-2 text-sm whitespace-nowrap text-gray-500">{transaction.quantity}</td>
                    <td className="px-2 py-2 text-sm whitespace-nowrap text-gray-500">{transaction.netAmount}</td>
                    <td className="relative py-2 pr-4 pl-3 text-right text-sm font-medium whitespace-nowrap sm:pr-0">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900">
                        Edit<span className="sr-only">, {transaction.id}</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
`,ae=[{name:"Lindsay Walton",title:"Front-end Developer",email:"lindsay.walton@example.com",role:"Member"}];function le(){return e.jsxs("div",{className:"px-4 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"sm:flex sm:items-center",children:[e.jsxs("div",{className:"sm:flex-auto",children:[e.jsx("h1",{className:"text-base font-semibold text-gray-900",children:"Users"}),e.jsx("p",{className:"mt-2 text-sm text-gray-700",children:"A list of all the users in your account including their name, title, email and role."})]}),e.jsx("div",{className:"mt-4 sm:mt-0 sm:ml-16 sm:flex-none",children:e.jsx("button",{type:"button",className:"block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"Add user"})})]}),e.jsx("div",{className:"mt-8 flow-root",children:e.jsx("div",{className:"-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8",children:e.jsx("div",{className:"inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-300",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-0",children:e.jsxs("a",{href:"#",className:"group inline-flex",children:["Name",e.jsx("span",{className:"invisible ml-2 flex-none rounded-sm text-gray-400 group-hover:visible group-focus:visible",children:e.jsx(d,{"aria-hidden":"true",className:"size-5"})})]})}),e.jsx("th",{scope:"col",className:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900",children:e.jsxs("a",{href:"#",className:"group inline-flex",children:["Title",e.jsx("span",{className:"ml-2 flex-none rounded-sm bg-gray-100 text-gray-900 group-hover:bg-gray-200",children:e.jsx(d,{"aria-hidden":"true",className:"size-5"})})]})}),e.jsx("th",{scope:"col",className:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900",children:e.jsxs("a",{href:"#",className:"group inline-flex",children:["Email",e.jsx("span",{className:"invisible ml-2 flex-none rounded-sm text-gray-400 group-hover:visible group-focus:visible",children:e.jsx(d,{"aria-hidden":"true",className:"invisible ml-2 size-5 flex-none rounded-sm text-gray-400 group-hover:visible group-focus:visible"})})]})}),e.jsx("th",{scope:"col",className:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900",children:e.jsxs("a",{href:"#",className:"group inline-flex",children:["Role",e.jsx("span",{className:"invisible ml-2 flex-none rounded-sm text-gray-400 group-hover:visible group-focus:visible",children:e.jsx(d,{"aria-hidden":"true",className:"invisible ml-2 size-5 flex-none rounded-sm text-gray-400 group-hover:visible group-focus:visible"})})]})}),e.jsx("th",{scope:"col",className:"relative py-3.5 pr-0 pl-3",children:e.jsx("span",{className:"sr-only",children:"Edit"})})]})}),e.jsx("tbody",{className:"divide-y divide-gray-200 bg-white",children:ae.map(t=>e.jsxs("tr",{children:[e.jsx("td",{className:"py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-0",children:t.name}),e.jsx("td",{className:"px-3 py-4 text-sm whitespace-nowrap text-gray-500",children:t.title}),e.jsx("td",{className:"px-3 py-4 text-sm whitespace-nowrap text-gray-500",children:t.email}),e.jsx("td",{className:"px-3 py-4 text-sm whitespace-nowrap text-gray-500",children:t.role}),e.jsx("td",{className:"relative py-4 pr-4 pl-3 text-right text-sm whitespace-nowrap sm:pr-0",children:e.jsxs("a",{href:"#",className:"text-indigo-600 hover:text-indigo-900",children:["Edit",e.jsxs("span",{className:"sr-only",children:[", ",t.name]})]})})]},t.email))})]})})})})]})}const ie=`import { ChevronDownIcon } from '@heroicons/react/20/solid'

const people = [
  { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
  // More people...
]

export default function Example() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold text-gray-900">Users</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the users in your account including their name, title, email and role.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add user
          </button>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                    <a href="#" className="group inline-flex">
                      Name
                      <span className="invisible ml-2 flex-none rounded-sm text-gray-400 group-hover:visible group-focus:visible">
                        <ChevronDownIcon aria-hidden="true" className="size-5" />
                      </span>
                    </a>
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    <a href="#" className="group inline-flex">
                      Title
                      <span className="ml-2 flex-none rounded-sm bg-gray-100 text-gray-900 group-hover:bg-gray-200">
                        <ChevronDownIcon aria-hidden="true" className="size-5" />
                      </span>
                    </a>
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    <a href="#" className="group inline-flex">
                      Email
                      <span className="invisible ml-2 flex-none rounded-sm text-gray-400 group-hover:visible group-focus:visible">
                        <ChevronDownIcon
                          aria-hidden="true"
                          className="invisible ml-2 size-5 flex-none rounded-sm text-gray-400 group-hover:visible group-focus:visible"
                        />
                      </span>
                    </a>
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    <a href="#" className="group inline-flex">
                      Role
                      <span className="invisible ml-2 flex-none rounded-sm text-gray-400 group-hover:visible group-focus:visible">
                        <ChevronDownIcon
                          aria-hidden="true"
                          className="invisible ml-2 size-5 flex-none rounded-sm text-gray-400 group-hover:visible group-focus:visible"
                        />
                      </span>
                    </a>
                  </th>
                  <th scope="col" className="relative py-3.5 pr-0 pl-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {people.map((person) => (
                  <tr key={person.email}>
                    <td className="py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-0">
                      {person.name}
                    </td>
                    <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">{person.title}</td>
                    <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">{person.email}</td>
                    <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">{person.role}</td>
                    <td className="relative py-4 pr-4 pl-3 text-right text-sm whitespace-nowrap sm:pr-0">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900">
                        Edit<span className="sr-only">, {person.name}</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
`,oe=[{name:"Edinburgh",people:[{name:"Lindsay Walton",title:"Front-end Developer",email:"lindsay.walton@example.com",role:"Member"},{name:"Courtney Henry",title:"Designer",email:"courtney.henry@example.com",role:"Admin"}]}];function me(...t){return t.filter(Boolean).join(" ")}function re(){return e.jsxs("div",{className:"px-4 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"sm:flex sm:items-center",children:[e.jsxs("div",{className:"sm:flex-auto",children:[e.jsx("h1",{className:"text-base font-semibold text-gray-900",children:"Users"}),e.jsx("p",{className:"mt-2 text-sm text-gray-700",children:"A list of all the users in your account including their name, title, email and role."})]}),e.jsx("div",{className:"mt-4 sm:mt-0 sm:ml-16 sm:flex-none",children:e.jsx("button",{type:"button",className:"block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"Add user"})})]}),e.jsx("div",{className:"mt-8 flow-root",children:e.jsx("div",{className:"-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8",children:e.jsx("div",{className:"inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8",children:e.jsxs("table",{className:"min-w-full",children:[e.jsx("thead",{className:"bg-white",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-3",children:"Name"}),e.jsx("th",{scope:"col",className:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900",children:"Title"}),e.jsx("th",{scope:"col",className:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900",children:"Email"}),e.jsx("th",{scope:"col",className:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900",children:"Role"}),e.jsx("th",{scope:"col",className:"relative py-3.5 pr-4 pl-3 sm:pr-3",children:e.jsx("span",{className:"sr-only",children:"Edit"})})]})}),e.jsx("tbody",{className:"bg-white",children:oe.map(t=>e.jsxs(i.Fragment,{children:[e.jsx("tr",{className:"border-t border-gray-200",children:e.jsx("th",{scope:"colgroup",colSpan:5,className:"bg-gray-50 py-2 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-3",children:t.name})}),t.people.map((s,n)=>e.jsxs("tr",{className:me(n===0?"border-gray-300":"border-gray-200","border-t"),children:[e.jsx("td",{className:"py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-3",children:s.name}),e.jsx("td",{className:"px-3 py-4 text-sm whitespace-nowrap text-gray-500",children:s.title}),e.jsx("td",{className:"px-3 py-4 text-sm whitespace-nowrap text-gray-500",children:s.email}),e.jsx("td",{className:"px-3 py-4 text-sm whitespace-nowrap text-gray-500",children:s.role}),e.jsx("td",{className:"relative py-4 pr-4 pl-3 text-right text-sm font-medium whitespace-nowrap sm:pr-3",children:e.jsxs("a",{href:"#",className:"text-indigo-600 hover:text-indigo-900",children:["Edit",e.jsxs("span",{className:"sr-only",children:[", ",s.name]})]})})]},s.email))]},t.name))})]})})})})]})}const ne=`import { Fragment } from 'react'

const locations = [
  {
    name: 'Edinburgh',
    people: [
      { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
      { name: 'Courtney Henry', title: 'Designer', email: 'courtney.henry@example.com', role: 'Admin' },
    ],
  },
  // More people...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold text-gray-900">Users</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the users in your account including their name, title, email and role.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add user
          </button>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full">
              <thead className="bg-white">
                <tr>
                  <th scope="col" className="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                    Name
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Title
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Email
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Role
                  </th>
                  <th scope="col" className="relative py-3.5 pr-4 pl-3 sm:pr-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {locations.map((location) => (
                  <Fragment key={location.name}>
                    <tr className="border-t border-gray-200">
                      <th
                        scope="colgroup"
                        colSpan={5}
                        className="bg-gray-50 py-2 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-3"
                      >
                        {location.name}
                      </th>
                    </tr>
                    {location.people.map((person, personIdx) => (
                      <tr
                        key={person.email}
                        className={classNames(personIdx === 0 ? 'border-gray-300' : 'border-gray-200', 'border-t')}
                      >
                        <td className="py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-3">
                          {person.name}
                        </td>
                        <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">{person.title}</td>
                        <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">{person.email}</td>
                        <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">{person.role}</td>
                        <td className="relative py-4 pr-4 pl-3 text-right text-sm font-medium whitespace-nowrap sm:pr-3">
                          <a href="#" className="text-indigo-600 hover:text-indigo-900">
                            Edit<span className="sr-only">, {person.name}</span>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
`,de=[{id:1,name:"Logo redesign",description:"New logo and digital asset playbook.",hours:"20.0",rate:"$100.00",price:"$2,000.00"}];function ce(){return e.jsxs("div",{className:"px-4 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"sm:flex sm:items-center",children:[e.jsxs("div",{className:"sm:flex-auto",children:[e.jsx("h1",{className:"text-base font-semibold text-gray-900",children:"Invoice"}),e.jsxs("p",{className:"mt-2 text-sm text-gray-700",children:["For work completed from ",e.jsx("time",{dateTime:"2022-08-01",children:"August 1, 2022"})," to"," ",e.jsx("time",{dateTime:"2022-08-31",children:"August 31, 2022"}),"."]})]}),e.jsx("div",{className:"mt-4 sm:mt-0 sm:ml-16 sm:flex-none",children:e.jsx("button",{type:"button",className:"block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"Print"})})]}),e.jsx("div",{className:"-mx-4 mt-8 flow-root sm:mx-0",children:e.jsxs("table",{className:"min-w-full",children:[e.jsxs("colgroup",{children:[e.jsx("col",{className:"w-full sm:w-1/2"}),e.jsx("col",{className:"sm:w-1/6"}),e.jsx("col",{className:"sm:w-1/6"}),e.jsx("col",{className:"sm:w-1/6"})]}),e.jsx("thead",{className:"border-b border-gray-300 text-gray-900",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-0",children:"Project"}),e.jsx("th",{scope:"col",className:"hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-900 sm:table-cell",children:"Hours"}),e.jsx("th",{scope:"col",className:"hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-900 sm:table-cell",children:"Rate"}),e.jsx("th",{scope:"col",className:"py-3.5 pr-4 pl-3 text-right text-sm font-semibold text-gray-900 sm:pr-0",children:"Price"})]})}),e.jsx("tbody",{children:de.map(t=>e.jsxs("tr",{className:"border-b border-gray-200",children:[e.jsxs("td",{className:"max-w-0 py-5 pr-3 pl-4 text-sm sm:pl-0",children:[e.jsx("div",{className:"font-medium text-gray-900",children:t.name}),e.jsx("div",{className:"mt-1 truncate text-gray-500",children:t.description})]}),e.jsx("td",{className:"hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell",children:t.hours}),e.jsx("td",{className:"hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell",children:t.rate}),e.jsx("td",{className:"py-5 pr-4 pl-3 text-right text-sm text-gray-500 sm:pr-0",children:t.price})]},t.id))}),e.jsxs("tfoot",{children:[e.jsxs("tr",{children:[e.jsx("th",{scope:"row",colSpan:3,className:"hidden pt-6 pr-3 pl-4 text-right text-sm font-normal text-gray-500 sm:table-cell sm:pl-0",children:"Subtotal"}),e.jsx("th",{scope:"row",className:"pt-6 pr-3 pl-4 text-left text-sm font-normal text-gray-500 sm:hidden",children:"Subtotal"}),e.jsx("td",{className:"pt-6 pr-4 pl-3 text-right text-sm text-gray-500 sm:pr-0",children:"$8,800.00"})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",colSpan:3,className:"hidden pt-4 pr-3 pl-4 text-right text-sm font-normal text-gray-500 sm:table-cell sm:pl-0",children:"Tax"}),e.jsx("th",{scope:"row",className:"pt-4 pr-3 pl-4 text-left text-sm font-normal text-gray-500 sm:hidden",children:"Tax"}),e.jsx("td",{className:"pt-4 pr-4 pl-3 text-right text-sm text-gray-500 sm:pr-0",children:"$1,760.00"})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",colSpan:3,className:"hidden pt-4 pr-3 pl-4 text-right text-sm font-semibold text-gray-900 sm:table-cell sm:pl-0",children:"Total"}),e.jsx("th",{scope:"row",className:"pt-4 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:hidden",children:"Total"}),e.jsx("td",{className:"pt-4 pr-4 pl-3 text-right text-sm font-semibold text-gray-900 sm:pr-0",children:"$10,560.00"})]})]})]})})]})}const xe=`const projects = [
  {
    id: 1,
    name: 'Logo redesign',
    description: 'New logo and digital asset playbook.',
    hours: '20.0',
    rate: '$100.00',
    price: '$2,000.00',
  },
  // More projects...
]

export default function Example() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold text-gray-900">Invoice</h1>
          <p className="mt-2 text-sm text-gray-700">
            For work completed from <time dateTime="2022-08-01">August 1, 2022</time> to{' '}
            <time dateTime="2022-08-31">August 31, 2022</time>.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Print
          </button>
        </div>
      </div>
      <div className="-mx-4 mt-8 flow-root sm:mx-0">
        <table className="min-w-full">
          <colgroup>
            <col className="w-full sm:w-1/2" />
            <col className="sm:w-1/6" />
            <col className="sm:w-1/6" />
            <col className="sm:w-1/6" />
          </colgroup>
          <thead className="border-b border-gray-300 text-gray-900">
            <tr>
              <th scope="col" className="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                Project
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-900 sm:table-cell"
              >
                Hours
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-900 sm:table-cell"
              >
                Rate
              </th>
              <th scope="col" className="py-3.5 pr-4 pl-3 text-right text-sm font-semibold text-gray-900 sm:pr-0">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id} className="border-b border-gray-200">
                <td className="max-w-0 py-5 pr-3 pl-4 text-sm sm:pl-0">
                  <div className="font-medium text-gray-900">{project.name}</div>
                  <div className="mt-1 truncate text-gray-500">{project.description}</div>
                </td>
                <td className="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell">{project.hours}</td>
                <td className="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell">{project.rate}</td>
                <td className="py-5 pr-4 pl-3 text-right text-sm text-gray-500 sm:pr-0">{project.price}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th
                scope="row"
                colSpan={3}
                className="hidden pt-6 pr-3 pl-4 text-right text-sm font-normal text-gray-500 sm:table-cell sm:pl-0"
              >
                Subtotal
              </th>
              <th scope="row" className="pt-6 pr-3 pl-4 text-left text-sm font-normal text-gray-500 sm:hidden">
                Subtotal
              </th>
              <td className="pt-6 pr-4 pl-3 text-right text-sm text-gray-500 sm:pr-0">$8,800.00</td>
            </tr>
            <tr>
              <th
                scope="row"
                colSpan={3}
                className="hidden pt-4 pr-3 pl-4 text-right text-sm font-normal text-gray-500 sm:table-cell sm:pl-0"
              >
                Tax
              </th>
              <th scope="row" className="pt-4 pr-3 pl-4 text-left text-sm font-normal text-gray-500 sm:hidden">
                Tax
              </th>
              <td className="pt-4 pr-4 pl-3 text-right text-sm text-gray-500 sm:pr-0">$1,760.00</td>
            </tr>
            <tr>
              <th
                scope="row"
                colSpan={3}
                className="hidden pt-4 pr-3 pl-4 text-right text-sm font-semibold text-gray-900 sm:table-cell sm:pl-0"
              >
                Total
              </th>
              <th scope="row" className="pt-4 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:hidden">
                Total
              </th>
              <td className="pt-4 pr-4 pl-3 text-right text-sm font-semibold text-gray-900 sm:pr-0">$10,560.00</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}
`,pe=[{id:1,name:"Hobby",memory:"4 GB RAM",cpu:"4 CPUs",storage:"128 GB SSD disk",price:"$40",isCurrent:!1},{id:2,name:"Startup",memory:"8 GB RAM",cpu:"6 CPUs",storage:"256 GB SSD disk",price:"$80",isCurrent:!0}];function m(...t){return t.filter(Boolean).join(" ")}function he(){return e.jsxs("div",{className:"px-4 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"sm:flex sm:items-center",children:[e.jsxs("div",{className:"sm:flex-auto",children:[e.jsx("h1",{className:"text-base font-semibold text-gray-900",children:"Plans"}),e.jsxs("p",{className:"mt-2 text-sm text-gray-700",children:["Your team is on the ",e.jsx("strong",{className:"font-semibold text-gray-900",children:"Startup"})," plan. The next payment of $80 will be due on August 4, 2022."]})]}),e.jsx("div",{className:"mt-4 sm:mt-0 sm:ml-16 sm:flex-none",children:e.jsx("button",{type:"button",className:"block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"Update credit card"})})]}),e.jsx("div",{className:"-mx-4 mt-10 ring-1 ring-gray-300 sm:mx-0 sm:rounded-lg",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-300",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-6",children:"Plan"}),e.jsx("th",{scope:"col",className:"hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell",children:"Memory"}),e.jsx("th",{scope:"col",className:"hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell",children:"CPU"}),e.jsx("th",{scope:"col",className:"hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell",children:"Storage"}),e.jsx("th",{scope:"col",className:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900",children:"Price"}),e.jsx("th",{scope:"col",className:"relative py-3.5 pr-4 pl-3 sm:pr-6",children:e.jsx("span",{className:"sr-only",children:"Select"})})]})}),e.jsx("tbody",{children:pe.map((t,s)=>e.jsxs("tr",{children:[e.jsxs("td",{className:m(s===0?"":"border-t border-transparent","relative py-4 pr-3 pl-4 text-sm sm:pl-6"),children:[e.jsxs("div",{className:"font-medium text-gray-900",children:[t.name,t.isCurrent?e.jsx("span",{className:"ml-1 text-indigo-600",children:"(Current Plan)"}):null]}),e.jsxs("div",{className:"mt-1 flex flex-col text-gray-500 sm:block lg:hidden",children:[e.jsxs("span",{children:[t.memory," / ",t.cpu]}),e.jsx("span",{className:"hidden sm:inline",children:"·"}),e.jsx("span",{children:t.storage})]}),s!==0?e.jsx("div",{className:"absolute -top-px right-0 left-6 h-px bg-gray-200"}):null]}),e.jsx("td",{className:m(s===0?"":"border-t border-gray-200","hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell"),children:t.memory}),e.jsx("td",{className:m(s===0?"":"border-t border-gray-200","hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell"),children:t.cpu}),e.jsx("td",{className:m(s===0?"":"border-t border-gray-200","hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell"),children:t.storage}),e.jsxs("td",{className:m(s===0?"":"border-t border-gray-200","px-3 py-3.5 text-sm text-gray-500"),children:[e.jsxs("div",{className:"sm:hidden",children:[t.price,"/mo"]}),e.jsxs("div",{className:"hidden sm:block",children:[t.price,"/month"]})]}),e.jsxs("td",{className:m(s===0?"":"border-t border-transparent","relative py-3.5 pr-4 pl-3 text-right text-sm font-medium sm:pr-6"),children:[e.jsxs("button",{type:"button",disabled:t.isCurrent,className:"inline-flex items-center rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white",children:["Select",e.jsxs("span",{className:"sr-only",children:[", ",t.name]})]}),s!==0?e.jsx("div",{className:"absolute -top-px right-6 left-0 h-px bg-gray-200"}):null]})]},t.id))})]})})]})}const ge=`const plans = [
  {
    id: 1,
    name: 'Hobby',
    memory: '4 GB RAM',
    cpu: '4 CPUs',
    storage: '128 GB SSD disk',
    price: '$40',
    isCurrent: false,
  },
  {
    id: 2,
    name: 'Startup',
    memory: '8 GB RAM',
    cpu: '6 CPUs',
    storage: '256 GB SSD disk',
    price: '$80',
    isCurrent: true,
  },
  // More plans...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold text-gray-900">Plans</h1>
          <p className="mt-2 text-sm text-gray-700">
            Your team is on the <strong className="font-semibold text-gray-900">Startup</strong> plan. The next payment
            of $80 will be due on August 4, 2022.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Update credit card
          </button>
        </div>
      </div>
      <div className="-mx-4 mt-10 ring-1 ring-gray-300 sm:mx-0 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-300">
          <thead>
            <tr>
              <th scope="col" className="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                Plan
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
              >
                Memory
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
              >
                CPU
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
              >
                Storage
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Price
              </th>
              <th scope="col" className="relative py-3.5 pr-4 pl-3 sm:pr-6">
                <span className="sr-only">Select</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {plans.map((plan, planIdx) => (
              <tr key={plan.id}>
                <td
                  className={classNames(
                    planIdx === 0 ? '' : 'border-t border-transparent',
                    'relative py-4 pr-3 pl-4 text-sm sm:pl-6',
                  )}
                >
                  <div className="font-medium text-gray-900">
                    {plan.name}
                    {plan.isCurrent ? <span className="ml-1 text-indigo-600">(Current Plan)</span> : null}
                  </div>
                  <div className="mt-1 flex flex-col text-gray-500 sm:block lg:hidden">
                    <span>
                      {plan.memory} / {plan.cpu}
                    </span>
                    <span className="hidden sm:inline">·</span>
                    <span>{plan.storage}</span>
                  </div>
                  {planIdx !== 0 ? <div className="absolute -top-px right-0 left-6 h-px bg-gray-200" /> : null}
                </td>
                <td
                  className={classNames(
                    planIdx === 0 ? '' : 'border-t border-gray-200',
                    'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell',
                  )}
                >
                  {plan.memory}
                </td>
                <td
                  className={classNames(
                    planIdx === 0 ? '' : 'border-t border-gray-200',
                    'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell',
                  )}
                >
                  {plan.cpu}
                </td>
                <td
                  className={classNames(
                    planIdx === 0 ? '' : 'border-t border-gray-200',
                    'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell',
                  )}
                >
                  {plan.storage}
                </td>
                <td
                  className={classNames(
                    planIdx === 0 ? '' : 'border-t border-gray-200',
                    'px-3 py-3.5 text-sm text-gray-500',
                  )}
                >
                  <div className="sm:hidden">{plan.price}/mo</div>
                  <div className="hidden sm:block">{plan.price}/month</div>
                </td>
                <td
                  className={classNames(
                    planIdx === 0 ? '' : 'border-t border-transparent',
                    'relative py-3.5 pr-4 pl-3 text-right text-sm font-medium sm:pr-6',
                  )}
                >
                  <button
                    type="button"
                    disabled={plan.isCurrent}
                    className="inline-flex items-center rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
                  >
                    Select<span className="sr-only">, {plan.name}</span>
                  </button>
                  {planIdx !== 0 ? <div className="absolute -top-px right-6 left-0 h-px bg-gray-200" /> : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
`,c=[{name:"Lindsay Walton",title:"Front-end Developer",email:"lindsay.walton@example.com",role:"Member"}];function ye(...t){return t.filter(Boolean).join(" ")}function be(){const t=i.useRef(),[s,n]=i.useState(!1),[x,p]=i.useState(!1),[l,h]=i.useState([]);i.useLayoutEffect(()=>{const a=l.length>0&&l.length<c.length;n(l.length===c.length),p(a),t.current.indeterminate=a},[l]);function y(){h(s||x?[]:c),n(!s&&!x),p(!1)}return e.jsxs("div",{className:"px-4 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"sm:flex sm:items-center",children:[e.jsxs("div",{className:"sm:flex-auto",children:[e.jsx("h1",{className:"text-base font-semibold text-gray-900",children:"Users"}),e.jsx("p",{className:"mt-2 text-sm text-gray-700",children:"A list of all the users in your account including their name, title, email and role."})]}),e.jsx("div",{className:"mt-4 sm:mt-0 sm:ml-16 sm:flex-none",children:e.jsx("button",{type:"button",className:"block rounded-md bg-indigo-600 px-3 py-1.5 text-center text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"Add user"})})]}),e.jsx("div",{className:"mt-8 flow-root",children:e.jsx("div",{className:"-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8",children:e.jsx("div",{className:"inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8",children:e.jsxs("div",{className:"relative",children:[l.length>0&&e.jsxs("div",{className:"absolute top-0 left-14 flex h-12 items-center space-x-3 bg-white sm:left-12",children:[e.jsx("button",{type:"button",className:"inline-flex items-center rounded-sm bg-white px-2 py-1 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white",children:"Bulk edit"}),e.jsx("button",{type:"button",className:"inline-flex items-center rounded-sm bg-white px-2 py-1 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white",children:"Delete all"})]}),e.jsxs("table",{className:"min-w-full table-fixed divide-y divide-gray-300",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"relative px-7 sm:w-12 sm:px-6",children:e.jsxs("div",{className:"group absolute top-1/2 left-4 -mt-2 grid size-4 grid-cols-1",children:[e.jsx("input",{type:"checkbox",className:"col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto",ref:t,checked:s,onChange:y}),e.jsxs("svg",{className:"pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25",viewBox:"0 0 14 14",fill:"none",children:[e.jsx("path",{className:"opacity-0 group-has-checked:opacity-100",d:"M3 8L6 11L11 3.5",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{className:"opacity-0 group-has-indeterminate:opacity-100",d:"M3 7H11",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})]})}),e.jsx("th",{scope:"col",className:"min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900",children:"Name"}),e.jsx("th",{scope:"col",className:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900",children:"Title"}),e.jsx("th",{scope:"col",className:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900",children:"Email"}),e.jsx("th",{scope:"col",className:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900",children:"Role"}),e.jsx("th",{scope:"col",className:"relative py-3.5 pr-4 pl-3 sm:pr-3",children:e.jsx("span",{className:"sr-only",children:"Edit"})})]})}),e.jsx("tbody",{className:"divide-y divide-gray-200 bg-white",children:c.map(a=>e.jsxs("tr",{className:l.includes(a)?"bg-gray-50":void 0,children:[e.jsxs("td",{className:"relative px-7 sm:w-12 sm:px-6",children:[l.includes(a)&&e.jsx("div",{className:"absolute inset-y-0 left-0 w-0.5 bg-indigo-600"}),e.jsxs("div",{className:"group absolute top-1/2 left-4 -mt-2 grid size-4 grid-cols-1",children:[e.jsx("input",{type:"checkbox",className:"col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto",value:a.email,checked:l.includes(a),onChange:b=>h(b.target.checked?[...l,a]:l.filter(f=>f!==a))}),e.jsxs("svg",{className:"pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25",viewBox:"0 0 14 14",fill:"none",children:[e.jsx("path",{className:"opacity-0 group-has-checked:opacity-100",d:"M3 8L6 11L11 3.5","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e.jsx("path",{className:"opacity-0 group-has-indeterminate:opacity-100",d:"M3 7H11","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]})]})]}),e.jsx("td",{className:ye("py-4 pr-3 text-sm font-medium whitespace-nowrap",l.includes(a)?"text-indigo-600":"text-gray-900"),children:a.name}),e.jsx("td",{className:"px-3 py-4 text-sm whitespace-nowrap text-gray-500",children:a.title}),e.jsx("td",{className:"px-3 py-4 text-sm whitespace-nowrap text-gray-500",children:a.email}),e.jsx("td",{className:"px-3 py-4 text-sm whitespace-nowrap text-gray-500",children:a.role}),e.jsx("td",{className:"py-4 pr-4 pl-3 text-right text-sm font-medium whitespace-nowrap sm:pr-3",children:e.jsxs("a",{href:"#",className:"text-indigo-600 hover:text-indigo-900",children:["Edit",e.jsxs("span",{className:"sr-only",children:[", ",a.name]})]})})]},a.email))})]})]})})})})]})}const fe=`'use client'

import { useLayoutEffect, useRef, useState } from 'react'

const people = [
  {
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    email: 'lindsay.walton@example.com',
    role: 'Member',
  },
  // More people...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const checkbox = useRef()
  const [checked, setChecked] = useState(false)
  const [indeterminate, setIndeterminate] = useState(false)
  const [selectedPeople, setSelectedPeople] = useState([])

  useLayoutEffect(() => {
    const isIndeterminate = selectedPeople.length > 0 && selectedPeople.length < people.length
    setChecked(selectedPeople.length === people.length)
    setIndeterminate(isIndeterminate)
    checkbox.current.indeterminate = isIndeterminate
  }, [selectedPeople])

  function toggleAll() {
    setSelectedPeople(checked || indeterminate ? [] : people)
    setChecked(!checked && !indeterminate)
    setIndeterminate(false)
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold text-gray-900">Users</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the users in your account including their name, title, email and role.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-1.5 text-center text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add user
          </button>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="relative">
              {selectedPeople.length > 0 && (
                <div className="absolute top-0 left-14 flex h-12 items-center space-x-3 bg-white sm:left-12">
                  <button
                    type="button"
                    className="inline-flex items-center rounded-sm bg-white px-2 py-1 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
                  >
                    Bulk edit
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center rounded-sm bg-white px-2 py-1 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
                  >
                    Delete all
                  </button>
                </div>
              )}
              <table className="min-w-full table-fixed divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th scope="col" className="relative px-7 sm:w-12 sm:px-6">
                      <div className="group absolute top-1/2 left-4 -mt-2 grid size-4 grid-cols-1">
                        <input
                          type="checkbox"
                          className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                          ref={checkbox}
                          checked={checked}
                          onChange={toggleAll}
                        />
                        <svg
                          className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            className="opacity-0 group-has-checked:opacity-100"
                            d="M3 8L6 11L11 3.5"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            className="opacity-0 group-has-indeterminate:opacity-100"
                            d="M3 7H11"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </th>
                    <th scope="col" className="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900">
                      Name
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Title
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Email
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Role
                    </th>
                    <th scope="col" className="relative py-3.5 pr-4 pl-3 sm:pr-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {people.map((person) => (
                    <tr key={person.email} className={selectedPeople.includes(person) ? 'bg-gray-50' : undefined}>
                      <td className="relative px-7 sm:w-12 sm:px-6">
                        {selectedPeople.includes(person) && (
                          <div className="absolute inset-y-0 left-0 w-0.5 bg-indigo-600" />
                        )}
                        <div className="group absolute top-1/2 left-4 -mt-2 grid size-4 grid-cols-1">
                          <input
                            type="checkbox"
                            className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                            value={person.email}
                            checked={selectedPeople.includes(person)}
                            onChange={(e) =>
                              setSelectedPeople(
                                e.target.checked
                                  ? [...selectedPeople, person]
                                  : selectedPeople.filter((p) => p !== person),
                              )
                            }
                          />
                          <svg
                            className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                            viewBox="0 0 14 14"
                            fill="none"
                          >
                            <path
                              className="opacity-0 group-has-checked:opacity-100"
                              d="M3 8L6 11L11 3.5"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              className="opacity-0 group-has-indeterminate:opacity-100"
                              d="M3 7H11"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                      </td>
                      <td
                        className={classNames(
                          'py-4 pr-3 text-sm font-medium whitespace-nowrap',
                          selectedPeople.includes(person) ? 'text-indigo-600' : 'text-gray-900',
                        )}
                      >
                        {person.name}
                      </td>
                      <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">{person.title}</td>
                      <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">{person.email}</td>
                      <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">{person.role}</td>
                      <td className="py-4 pr-4 pl-3 text-right text-sm font-medium whitespace-nowrap sm:pr-3">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                          Edit<span className="sr-only">, {person.name}</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
`,ue={Paid:"text-green-700 bg-green-50 ring-green-600/20",Withdraw:"text-gray-600 bg-gray-50 ring-gray-500/10",Overdue:"text-red-700 bg-red-50 ring-red-600/10"},Ne=[{date:"Today",dateTime:"2023-03-22",transactions:[{id:1,invoiceNumber:"00012",href:"#",amount:"$7,600.00 USD",tax:"$500.00",status:"Paid",client:"Reform",description:"Website redesign",icon:g},{id:2,invoiceNumber:"00011",href:"#",amount:"$10,000.00 USD",status:"Withdraw",client:"Tom Cook",description:"Salary",icon:N},{id:3,invoiceNumber:"00009",href:"#",amount:"$2,000.00 USD",tax:"$130.00",status:"Overdue",client:"Tuple",description:"Logo design",icon:v}]},{date:"Yesterday",dateTime:"2023-03-21",transactions:[{id:4,invoiceNumber:"00010",href:"#",amount:"$14,000.00 USD",tax:"$900.00",status:"Paid",client:"SavvyCal",description:"Website redesign",icon:g}]}];function ve(...t){return t.filter(Boolean).join(" ")}function we(){return e.jsxs("div",{children:[e.jsx("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:e.jsx("h2",{className:"mx-auto max-w-2xl text-base font-semibold text-gray-900 lg:mx-0 lg:max-w-none",children:"Recent activity"})}),e.jsx("div",{className:"mt-6 overflow-hidden border-t border-gray-100",children:e.jsx("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:e.jsx("div",{className:"mx-auto max-w-2xl lg:mx-0 lg:max-w-none",children:e.jsxs("table",{className:"w-full text-left",children:[e.jsx("thead",{className:"sr-only",children:e.jsxs("tr",{children:[e.jsx("th",{children:"Amount"}),e.jsx("th",{className:"hidden sm:table-cell",children:"Client"}),e.jsx("th",{children:"More details"})]})}),e.jsx("tbody",{children:Ne.map(t=>e.jsxs(i.Fragment,{children:[e.jsx("tr",{className:"text-sm/6 text-gray-900",children:e.jsxs("th",{scope:"colgroup",colSpan:3,className:"relative isolate py-2 font-semibold",children:[e.jsx("time",{dateTime:t.dateTime,children:t.date}),e.jsx("div",{className:"absolute inset-y-0 right-full -z-10 w-screen border-b border-gray-200 bg-gray-50"}),e.jsx("div",{className:"absolute inset-y-0 left-0 -z-10 w-screen border-b border-gray-200 bg-gray-50"})]})}),t.transactions.map(s=>e.jsxs("tr",{children:[e.jsxs("td",{className:"relative py-5 pr-6",children:[e.jsxs("div",{className:"flex gap-x-6",children:[e.jsx(s.icon,{"aria-hidden":"true",className:"hidden h-6 w-5 flex-none text-gray-400 sm:block"}),e.jsxs("div",{className:"flex-auto",children:[e.jsxs("div",{className:"flex items-start gap-x-3",children:[e.jsx("div",{className:"text-sm/6 font-medium text-gray-900",children:s.amount}),e.jsx("div",{className:ve(ue[s.status],"rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset"),children:s.status})]}),s.tax?e.jsxs("div",{className:"mt-1 text-xs/5 text-gray-500",children:[s.tax," tax"]}):null]})]}),e.jsx("div",{className:"absolute right-full bottom-0 h-px w-screen bg-gray-100"}),e.jsx("div",{className:"absolute bottom-0 left-0 h-px w-screen bg-gray-100"})]}),e.jsxs("td",{className:"hidden py-5 pr-6 sm:table-cell",children:[e.jsx("div",{className:"text-sm/6 text-gray-900",children:s.client}),e.jsx("div",{className:"mt-1 text-xs/5 text-gray-500",children:s.description})]}),e.jsxs("td",{className:"py-5 text-right",children:[e.jsx("div",{className:"flex justify-end",children:e.jsxs("a",{href:s.href,className:"text-sm/6 font-medium text-indigo-600 hover:text-indigo-500",children:["View",e.jsx("span",{className:"hidden sm:inline",children:" transaction"}),e.jsxs("span",{className:"sr-only",children:[", invoice #",s.invoiceNumber,", ",s.client]})]})}),e.jsxs("div",{className:"mt-1 text-xs/5 text-gray-500",children:["Invoice ",e.jsxs("span",{className:"text-gray-900",children:["#",s.invoiceNumber]})]})]})]},s.id))]},t.dateTime))})]})})})})]})}const je=`import { Fragment } from 'react'
import { ArrowDownCircleIcon, ArrowPathIcon, ArrowUpCircleIcon } from '@heroicons/react/20/solid'

const statuses = {
  Paid: 'text-green-700 bg-green-50 ring-green-600/20',
  Withdraw: 'text-gray-600 bg-gray-50 ring-gray-500/10',
  Overdue: 'text-red-700 bg-red-50 ring-red-600/10',
}
const days = [
  {
    date: 'Today',
    dateTime: '2023-03-22',
    transactions: [
      {
        id: 1,
        invoiceNumber: '00012',
        href: '#',
        amount: '$7,600.00 USD',
        tax: '$500.00',
        status: 'Paid',
        client: 'Reform',
        description: 'Website redesign',
        icon: ArrowUpCircleIcon,
      },
      {
        id: 2,
        invoiceNumber: '00011',
        href: '#',
        amount: '$10,000.00 USD',
        status: 'Withdraw',
        client: 'Tom Cook',
        description: 'Salary',
        icon: ArrowDownCircleIcon,
      },
      {
        id: 3,
        invoiceNumber: '00009',
        href: '#',
        amount: '$2,000.00 USD',
        tax: '$130.00',
        status: 'Overdue',
        client: 'Tuple',
        description: 'Logo design',
        icon: ArrowPathIcon,
      },
    ],
  },
  {
    date: 'Yesterday',
    dateTime: '2023-03-21',
    transactions: [
      {
        id: 4,
        invoiceNumber: '00010',
        href: '#',
        amount: '$14,000.00 USD',
        tax: '$900.00',
        status: 'Paid',
        client: 'SavvyCal',
        description: 'Website redesign',
        icon: ArrowUpCircleIcon,
      },
    ],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mx-auto max-w-2xl text-base font-semibold text-gray-900 lg:mx-0 lg:max-w-none">
          Recent activity
        </h2>
      </div>
      <div className="mt-6 overflow-hidden border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <table className="w-full text-left">
              <thead className="sr-only">
                <tr>
                  <th>Amount</th>
                  <th className="hidden sm:table-cell">Client</th>
                  <th>More details</th>
                </tr>
              </thead>
              <tbody>
                {days.map((day) => (
                  <Fragment key={day.dateTime}>
                    <tr className="text-sm/6 text-gray-900">
                      <th scope="colgroup" colSpan={3} className="relative isolate py-2 font-semibold">
                        <time dateTime={day.dateTime}>{day.date}</time>
                        <div className="absolute inset-y-0 right-full -z-10 w-screen border-b border-gray-200 bg-gray-50" />
                        <div className="absolute inset-y-0 left-0 -z-10 w-screen border-b border-gray-200 bg-gray-50" />
                      </th>
                    </tr>
                    {day.transactions.map((transaction) => (
                      <tr key={transaction.id}>
                        <td className="relative py-5 pr-6">
                          <div className="flex gap-x-6">
                            <transaction.icon
                              aria-hidden="true"
                              className="hidden h-6 w-5 flex-none text-gray-400 sm:block"
                            />
                            <div className="flex-auto">
                              <div className="flex items-start gap-x-3">
                                <div className="text-sm/6 font-medium text-gray-900">{transaction.amount}</div>
                                <div
                                  className={classNames(
                                    statuses[transaction.status],
                                    'rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset',
                                  )}
                                >
                                  {transaction.status}
                                </div>
                              </div>
                              {transaction.tax ? (
                                <div className="mt-1 text-xs/5 text-gray-500">{transaction.tax} tax</div>
                              ) : null}
                            </div>
                          </div>
                          <div className="absolute right-full bottom-0 h-px w-screen bg-gray-100" />
                          <div className="absolute bottom-0 left-0 h-px w-screen bg-gray-100" />
                        </td>
                        <td className="hidden py-5 pr-6 sm:table-cell">
                          <div className="text-sm/6 text-gray-900">{transaction.client}</div>
                          <div className="mt-1 text-xs/5 text-gray-500">{transaction.description}</div>
                        </td>
                        <td className="py-5 text-right">
                          <div className="flex justify-end">
                            <a
                              href={transaction.href}
                              className="text-sm/6 font-medium text-indigo-600 hover:text-indigo-500"
                            >
                              View<span className="hidden sm:inline"> transaction</span>
                              <span className="sr-only">
                                , invoice #{transaction.invoiceNumber}, {transaction.client}
                              </span>
                            </a>
                          </div>
                          <div className="mt-1 text-xs/5 text-gray-500">
                            Invoice <span className="text-gray-900">#{transaction.invoiceNumber}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
`,ke={Completed:"text-green-400 bg-green-400/10",Error:"text-rose-400 bg-rose-400/10"},Ee=[{user:{name:"Michael Foster",imageUrl:"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"},commit:"2d89f0c8",branch:"main",status:"Completed",duration:"25s",date:"45 minutes ago",dateTime:"2023-01-23T11:00"},{user:{name:"Lindsay Walton",imageUrl:"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"},commit:"249df660",branch:"main",status:"Completed",duration:"1m 32s",date:"3 hours ago",dateTime:"2023-01-23T09:00"},{user:{name:"Courtney Henry",imageUrl:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"},commit:"11464223",branch:"main",status:"Error",duration:"1m 4s",date:"12 hours ago",dateTime:"2023-01-23T00:00"},{user:{name:"Courtney Henry",imageUrl:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"},commit:"dad28e95",branch:"main",status:"Completed",duration:"2m 15s",date:"2 days ago",dateTime:"2023-01-21T13:00"},{user:{name:"Michael Foster",imageUrl:"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"},commit:"624bc94c",branch:"main",status:"Completed",duration:"1m 12s",date:"5 days ago",dateTime:"2023-01-18T12:34"},{user:{name:"Courtney Henry",imageUrl:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"},commit:"e111f80e",branch:"main",status:"Completed",duration:"1m 56s",date:"1 week ago",dateTime:"2023-01-16T15:54"},{user:{name:"Michael Foster",imageUrl:"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"},commit:"5e136005",branch:"main",status:"Completed",duration:"3m 45s",date:"1 week ago",dateTime:"2023-01-16T11:31"},{user:{name:"Whitney Francis",imageUrl:"https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"},commit:"5c1fd07f",branch:"main",status:"Completed",duration:"37s",date:"2 weeks ago",dateTime:"2023-01-09T08:45"}];function Te(...t){return t.filter(Boolean).join(" ")}function Ae(){return e.jsxs("div",{className:"bg-gray-900 py-10",children:[e.jsx("h2",{className:"px-4 text-base/7 font-semibold text-white sm:px-6 lg:px-8",children:"Latest activity"}),e.jsxs("table",{className:"mt-6 w-full text-left whitespace-nowrap",children:[e.jsxs("colgroup",{children:[e.jsx("col",{className:"w-full sm:w-4/12"}),e.jsx("col",{className:"lg:w-4/12"}),e.jsx("col",{className:"lg:w-2/12"}),e.jsx("col",{className:"lg:w-1/12"}),e.jsx("col",{className:"lg:w-1/12"})]}),e.jsx("thead",{className:"border-b border-white/10 text-sm/6 text-white",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"py-2 pr-8 pl-4 font-semibold sm:pl-6 lg:pl-8",children:"User"}),e.jsx("th",{scope:"col",className:"hidden py-2 pr-8 pl-0 font-semibold sm:table-cell",children:"Commit"}),e.jsx("th",{scope:"col",className:"py-2 pr-4 pl-0 text-right font-semibold sm:pr-8 sm:text-left lg:pr-20",children:"Status"}),e.jsx("th",{scope:"col",className:"hidden py-2 pr-8 pl-0 font-semibold md:table-cell lg:pr-20",children:"Duration"}),e.jsx("th",{scope:"col",className:"hidden py-2 pr-4 pl-0 text-right font-semibold sm:table-cell sm:pr-6 lg:pr-8",children:"Deployed at"})]})}),e.jsx("tbody",{className:"divide-y divide-white/5",children:Ee.map(t=>e.jsxs("tr",{children:[e.jsx("td",{className:"py-4 pr-8 pl-4 sm:pl-6 lg:pl-8",children:e.jsxs("div",{className:"flex items-center gap-x-4",children:[e.jsx("img",{alt:"",src:t.user.imageUrl,className:"size-8 rounded-full bg-gray-800"}),e.jsx("div",{className:"truncate text-sm/6 font-medium text-white",children:t.user.name})]})}),e.jsx("td",{className:"hidden py-4 pr-4 pl-0 sm:table-cell sm:pr-8",children:e.jsxs("div",{className:"flex gap-x-3",children:[e.jsx("div",{className:"font-mono text-sm/6 text-gray-400",children:t.commit}),e.jsx("div",{className:"rounded-md bg-gray-700/40 px-2 py-1 text-xs font-medium text-gray-400 ring-1 ring-white/10 ring-inset",children:t.branch})]})}),e.jsx("td",{className:"py-4 pr-4 pl-0 text-sm/6 sm:pr-8 lg:pr-20",children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2 sm:justify-start",children:[e.jsx("time",{dateTime:t.dateTime,className:"text-gray-400 sm:hidden",children:t.date}),e.jsx("div",{className:Te(ke[t.status],"flex-none rounded-full p-1"),children:e.jsx("div",{className:"size-1.5 rounded-full bg-current"})}),e.jsx("div",{className:"hidden text-white sm:block",children:t.status})]})}),e.jsx("td",{className:"hidden py-4 pr-8 pl-0 text-sm/6 text-gray-400 md:table-cell lg:pr-20",children:t.duration}),e.jsx("td",{className:"hidden py-4 pr-4 pl-0 text-right text-sm/6 text-gray-400 sm:table-cell sm:pr-6 lg:pr-8",children:e.jsx("time",{dateTime:t.dateTime,children:t.date})})]},t.commit))})]})]})}const We=`const statuses = { Completed: 'text-green-400 bg-green-400/10', Error: 'text-rose-400 bg-rose-400/10' }
const activityItems = [
  {
    user: {
      name: 'Michael Foster',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    commit: '2d89f0c8',
    branch: 'main',
    status: 'Completed',
    duration: '25s',
    date: '45 minutes ago',
    dateTime: '2023-01-23T11:00',
  },
  {
    user: {
      name: 'Lindsay Walton',
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    commit: '249df660',
    branch: 'main',
    status: 'Completed',
    duration: '1m 32s',
    date: '3 hours ago',
    dateTime: '2023-01-23T09:00',
  },
  {
    user: {
      name: 'Courtney Henry',
      imageUrl:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    commit: '11464223',
    branch: 'main',
    status: 'Error',
    duration: '1m 4s',
    date: '12 hours ago',
    dateTime: '2023-01-23T00:00',
  },
  {
    user: {
      name: 'Courtney Henry',
      imageUrl:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    commit: 'dad28e95',
    branch: 'main',
    status: 'Completed',
    duration: '2m 15s',
    date: '2 days ago',
    dateTime: '2023-01-21T13:00',
  },
  {
    user: {
      name: 'Michael Foster',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    commit: '624bc94c',
    branch: 'main',
    status: 'Completed',
    duration: '1m 12s',
    date: '5 days ago',
    dateTime: '2023-01-18T12:34',
  },
  {
    user: {
      name: 'Courtney Henry',
      imageUrl:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    commit: 'e111f80e',
    branch: 'main',
    status: 'Completed',
    duration: '1m 56s',
    date: '1 week ago',
    dateTime: '2023-01-16T15:54',
  },
  {
    user: {
      name: 'Michael Foster',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    commit: '5e136005',
    branch: 'main',
    status: 'Completed',
    duration: '3m 45s',
    date: '1 week ago',
    dateTime: '2023-01-16T11:31',
  },
  {
    user: {
      name: 'Whitney Francis',
      imageUrl:
        'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    commit: '5c1fd07f',
    branch: 'main',
    status: 'Completed',
    duration: '37s',
    date: '2 weeks ago',
    dateTime: '2023-01-09T08:45',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="bg-gray-900 py-10">
      <h2 className="px-4 text-base/7 font-semibold text-white sm:px-6 lg:px-8">Latest activity</h2>
      <table className="mt-6 w-full text-left whitespace-nowrap">
        <colgroup>
          <col className="w-full sm:w-4/12" />
          <col className="lg:w-4/12" />
          <col className="lg:w-2/12" />
          <col className="lg:w-1/12" />
          <col className="lg:w-1/12" />
        </colgroup>
        <thead className="border-b border-white/10 text-sm/6 text-white">
          <tr>
            <th scope="col" className="py-2 pr-8 pl-4 font-semibold sm:pl-6 lg:pl-8">
              User
            </th>
            <th scope="col" className="hidden py-2 pr-8 pl-0 font-semibold sm:table-cell">
              Commit
            </th>
            <th scope="col" className="py-2 pr-4 pl-0 text-right font-semibold sm:pr-8 sm:text-left lg:pr-20">
              Status
            </th>
            <th scope="col" className="hidden py-2 pr-8 pl-0 font-semibold md:table-cell lg:pr-20">
              Duration
            </th>
            <th scope="col" className="hidden py-2 pr-4 pl-0 text-right font-semibold sm:table-cell sm:pr-6 lg:pr-8">
              Deployed at
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5">
          {activityItems.map((item) => (
            <tr key={item.commit}>
              <td className="py-4 pr-8 pl-4 sm:pl-6 lg:pl-8">
                <div className="flex items-center gap-x-4">
                  <img alt="" src={item.user.imageUrl} className="size-8 rounded-full bg-gray-800" />
                  <div className="truncate text-sm/6 font-medium text-white">{item.user.name}</div>
                </div>
              </td>
              <td className="hidden py-4 pr-4 pl-0 sm:table-cell sm:pr-8">
                <div className="flex gap-x-3">
                  <div className="font-mono text-sm/6 text-gray-400">{item.commit}</div>
                  <div className="rounded-md bg-gray-700/40 px-2 py-1 text-xs font-medium text-gray-400 ring-1 ring-white/10 ring-inset">
                    {item.branch}
                  </div>
                </div>
              </td>
              <td className="py-4 pr-4 pl-0 text-sm/6 sm:pr-8 lg:pr-20">
                <div className="flex items-center justify-end gap-x-2 sm:justify-start">
                  <time dateTime={item.dateTime} className="text-gray-400 sm:hidden">
                    {item.date}
                  </time>
                  <div className={classNames(statuses[item.status], 'flex-none rounded-full p-1')}>
                    <div className="size-1.5 rounded-full bg-current" />
                  </div>
                  <div className="hidden text-white sm:block">{item.status}</div>
                </div>
              </td>
              <td className="hidden py-4 pr-8 pl-0 text-sm/6 text-gray-400 md:table-cell lg:pr-20">{item.duration}</td>
              <td className="hidden py-4 pr-4 pl-0 text-right text-sm/6 text-gray-400 sm:table-cell sm:pr-6 lg:pr-8">
                <time dateTime={item.dateTime}>{item.date}</time>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
`,Re=()=>{const t=[{id:"01",name:"Simple",component:e.jsx(j,{}),raw:k},{id:"02",name:"Simple in card",component:e.jsx(T,{}),raw:A},{id:"03",name:"Full width",component:e.jsx(M,{}),raw:C},{id:"04",name:"Full width with constrained content",component:e.jsx($,{}),raw:S},{id:"05",name:"With striped rows",component:e.jsx(U,{}),raw:F},{id:"06",name:"With uppercase headings",component:e.jsx(P,{}),raw:B},{id:"07",name:"With stacked columns on mobile",component:e.jsx(H,{}),raw:I},{id:"08",name:"With hidden columns on mobile",component:e.jsx(q,{}),raw:Q},{id:"09",name:"With avatars and multi-line content",component:e.jsx(G,{}),raw:Y},{id:"10",name:"With sticky header",component:e.jsx(V,{}),raw:K},{id:"11",name:"With vertical lines",component:e.jsx(Z,{}),raw:_},{id:"12",name:"With condensed content",component:e.jsx(te,{}),raw:se},{id:"13",name:"With sortable headings",component:e.jsx(le,{}),raw:ie},{id:"14",name:"With grouped rows",component:e.jsx(re,{}),raw:ne},{id:"15",name:"With summary rows",component:e.jsx(ce,{}),raw:xe},{id:"16",name:"With border",component:e.jsx(he,{}),raw:ge},{id:"17",name:"With checkboxes",component:e.jsx(be,{}),raw:fe},{id:"18",name:"With hidden headings",component:e.jsx(we,{}),raw:je},{id:"19",name:"Full width with avatars",component:e.jsx(Ae,{}),raw:We}];return e.jsx("div",{className:"space-y-10 pb-20",children:t.map(s=>e.jsxs("section",{children:[e.jsxs("h2",{className:"mb-4 text-lg font-bold text-gray-800",children:[s.id,". ",s.name]}),e.jsx(u,{name:s.name,code:s.raw,children:s.component})]},s.id))})};export{Re as default};
