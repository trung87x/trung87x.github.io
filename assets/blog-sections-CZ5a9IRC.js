import{j as e}from"./index-CvCVbuS9.js";import{P as s}from"./PreviewWrapper-TzFvRoPZ.js";const l=[{id:1,title:"Boost your conversion rate",href:"#",description:"Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",date:"Mar 16, 2020",datetime:"2020-03-16",category:{title:"Marketing",href:"#"},author:{name:"Michael Foster",role:"Co-Founder / CTO",href:"#",imageUrl:"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}}];function i(){return e.jsx("div",{className:"bg-white py-24 sm:py-32",children:e.jsxs("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:[e.jsxs("div",{className:"mx-auto max-w-2xl lg:mx-0",children:[e.jsx("h2",{className:"text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl",children:"From the blog"}),e.jsx("p",{className:"mt-2 text-lg/8 text-gray-600",children:"Learn how to grow your business with our expert advice."})]}),e.jsx("div",{className:"mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3",children:l.map(t=>e.jsxs("article",{className:"flex max-w-xl flex-col items-start justify-between",children:[e.jsxs("div",{className:"flex items-center gap-x-4 text-xs",children:[e.jsx("time",{dateTime:t.datetime,className:"text-gray-500",children:t.date}),e.jsx("a",{href:t.category.href,className:"relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100",children:t.category.title})]}),e.jsxs("div",{className:"group relative",children:[e.jsx("h3",{className:"mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600",children:e.jsxs("a",{href:t.href,children:[e.jsx("span",{className:"absolute inset-0"}),t.title]})}),e.jsx("p",{className:"mt-5 line-clamp-3 text-sm/6 text-gray-600",children:t.description})]}),e.jsxs("div",{className:"relative mt-8 flex items-center gap-x-4",children:[e.jsx("img",{alt:"",src:t.author.imageUrl,className:"size-10 rounded-full bg-gray-50"}),e.jsxs("div",{className:"text-sm/6",children:[e.jsx("p",{className:"font-semibold text-gray-900",children:e.jsxs("a",{href:t.author.href,children:[e.jsx("span",{className:"absolute inset-0"}),t.author.name]})}),e.jsx("p",{className:"text-gray-600",children:t.author.role})]})]})]},t.id))})]})})}const r=`const posts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  // More posts...
]

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">From the blog</h2>
          <p className="mt-2 text-lg/8 text-gray-600">Learn how to grow your business with our expert advice.</p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{post.description}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img alt="" src={post.author.imageUrl} className="size-10 rounded-full bg-gray-50" />
                <div className="text-sm/6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
`,o=[{id:1,title:"Boost your conversion rate",href:"#",description:"Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",imageUrl:"https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",date:"Mar 16, 2020",datetime:"2020-03-16",category:{title:"Marketing",href:"#"},author:{name:"Michael Foster",role:"Co-Founder / CTO",href:"#",imageUrl:"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}}];function c(){return e.jsx("div",{className:"bg-white py-24 sm:py-32",children:e.jsxs("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:[e.jsxs("div",{className:"mx-auto max-w-2xl text-center",children:[e.jsx("h2",{className:"text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl",children:"From the blog"}),e.jsx("p",{className:"mt-2 text-lg/8 text-gray-600",children:"Learn how to grow your business with our expert advice."})]}),e.jsx("div",{className:"mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3",children:o.map(t=>e.jsxs("article",{className:"flex flex-col items-start justify-between",children:[e.jsxs("div",{className:"relative w-full",children:[e.jsx("img",{alt:"",src:t.imageUrl,className:"aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-2/1 lg:aspect-3/2"}),e.jsx("div",{className:"absolute inset-0 rounded-2xl ring-1 ring-gray-900/10 ring-inset"})]}),e.jsxs("div",{className:"max-w-xl",children:[e.jsxs("div",{className:"mt-8 flex items-center gap-x-4 text-xs",children:[e.jsx("time",{dateTime:t.datetime,className:"text-gray-500",children:t.date}),e.jsx("a",{href:t.category.href,className:"relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100",children:t.category.title})]}),e.jsxs("div",{className:"group relative",children:[e.jsx("h3",{className:"mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600",children:e.jsxs("a",{href:t.href,children:[e.jsx("span",{className:"absolute inset-0"}),t.title]})}),e.jsx("p",{className:"mt-5 line-clamp-3 text-sm/6 text-gray-600",children:t.description})]}),e.jsxs("div",{className:"relative mt-8 flex items-center gap-x-4",children:[e.jsx("img",{alt:"",src:t.author.imageUrl,className:"size-10 rounded-full bg-gray-100"}),e.jsxs("div",{className:"text-sm/6",children:[e.jsx("p",{className:"font-semibold text-gray-900",children:e.jsxs("a",{href:t.author.href,children:[e.jsx("span",{className:"absolute inset-0"}),t.author.name]})}),e.jsx("p",{className:"text-gray-600",children:t.author.role})]})]})]})]},t.id))})]})})}const m=`const posts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  // More posts...
]

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
            From the blog
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600">Learn how to grow your business with our expert advice.</p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex flex-col items-start justify-between">
              <div className="relative w-full">
                <img
                  alt=""
                  src={post.imageUrl}
                  className="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-2/1 lg:aspect-3/2"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-gray-900/10 ring-inset" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{post.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img alt="" src={post.author.imageUrl} className="size-10 rounded-full bg-gray-100" />
                  <div className="text-sm/6">
                    <p className="font-semibold text-gray-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
`,d=[{id:1,title:"Boost your conversion rate",href:"#",description:"Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",imageUrl:"https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",date:"Mar 16, 2020",datetime:"2020-03-16",author:{name:"Michael Foster",imageUrl:"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}}];function n(){return e.jsx("div",{className:"bg-white py-24 sm:py-32",children:e.jsxs("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:[e.jsxs("div",{className:"mx-auto max-w-2xl text-center",children:[e.jsx("h2",{className:"text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl",children:"From the blog"}),e.jsx("p",{className:"mt-2 text-lg/8 text-gray-600",children:"Learn how to grow your business with our expert advice."})]}),e.jsx("div",{className:"mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3",children:d.map(t=>e.jsxs("article",{className:"relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pt-80 pb-8 sm:pt-48 lg:pt-80",children:[e.jsx("img",{alt:"",src:t.imageUrl,className:"absolute inset-0 -z-10 size-full object-cover"}),e.jsx("div",{className:"absolute inset-0 -z-10 bg-linear-to-t from-gray-900 via-gray-900/40"}),e.jsx("div",{className:"absolute inset-0 -z-10 rounded-2xl ring-1 ring-gray-900/10 ring-inset"}),e.jsxs("div",{className:"flex flex-wrap items-center gap-y-1 overflow-hidden text-sm/6 text-gray-300",children:[e.jsx("time",{dateTime:t.datetime,className:"mr-8",children:t.date}),e.jsxs("div",{className:"-ml-4 flex items-center gap-x-4",children:[e.jsx("svg",{viewBox:"0 0 2 2",className:"-ml-0.5 size-0.5 flex-none fill-white/50",children:e.jsx("circle",{r:1,cx:1,cy:1})}),e.jsxs("div",{className:"flex gap-x-2.5",children:[e.jsx("img",{alt:"",src:t.author.imageUrl,className:"size-6 flex-none rounded-full bg-white/10"}),t.author.name]})]})]}),e.jsx("h3",{className:"mt-3 text-lg/6 font-semibold text-white",children:e.jsxs("a",{href:t.href,children:[e.jsx("span",{className:"absolute inset-0"}),t.title]})})]},t.id))})]})})}const x=`const posts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    author: {
      name: 'Michael Foster',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  // More posts...
]

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
            From the blog
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600">Learn how to grow your business with our expert advice.</p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pt-80 pb-8 sm:pt-48 lg:pt-80"
            >
              <img alt="" src={post.imageUrl} className="absolute inset-0 -z-10 size-full object-cover" />
              <div className="absolute inset-0 -z-10 bg-linear-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-gray-900/10 ring-inset" />

              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm/6 text-gray-300">
                <time dateTime={post.datetime} className="mr-8">
                  {post.date}
                </time>
                <div className="-ml-4 flex items-center gap-x-4">
                  <svg viewBox="0 0 2 2" className="-ml-0.5 size-0.5 flex-none fill-white/50">
                    <circle r={1} cx={1} cy={1} />
                  </svg>
                  <div className="flex gap-x-2.5">
                    <img alt="" src={post.author.imageUrl} className="size-6 flex-none rounded-full bg-white/10" />
                    {post.author.name}
                  </div>
                </div>
              </div>
              <h3 className="mt-3 text-lg/6 font-semibold text-white">
                <a href={post.href}>
                  <span className="absolute inset-0" />
                  {post.title}
                </a>
              </h3>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
`,g=[{id:1,title:"Boost your conversion rate",href:"#",description:"Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",date:"Mar 16, 2020",datetime:"2020-03-16",category:{title:"Marketing",href:"#"},author:{name:"Michael Foster",role:"Co-Founder / CTO",href:"#",imageUrl:"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}}];function u(){return e.jsx("div",{className:"bg-white py-24 sm:py-32",children:e.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:e.jsxs("div",{className:"mx-auto max-w-2xl",children:[e.jsx("h2",{className:"text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl",children:"From the blog"}),e.jsx("p",{className:"mt-2 text-lg/8 text-gray-600",children:"Learn how to grow your business with our expert advice."}),e.jsx("div",{className:"mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16",children:g.map(t=>e.jsxs("article",{className:"flex max-w-xl flex-col items-start justify-between",children:[e.jsxs("div",{className:"flex items-center gap-x-4 text-xs",children:[e.jsx("time",{dateTime:t.datetime,className:"text-gray-500",children:t.date}),e.jsx("a",{href:t.category.href,className:"relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100",children:t.category.title})]}),e.jsxs("div",{className:"group relative",children:[e.jsx("h3",{className:"mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600",children:e.jsxs("a",{href:t.href,children:[e.jsx("span",{className:"absolute inset-0"}),t.title]})}),e.jsx("p",{className:"mt-5 line-clamp-3 text-sm/6 text-gray-600",children:t.description})]}),e.jsxs("div",{className:"relative mt-8 flex items-center gap-x-4",children:[e.jsx("img",{alt:"",src:t.author.imageUrl,className:"size-10 rounded-full bg-gray-50"}),e.jsxs("div",{className:"text-sm/6",children:[e.jsx("p",{className:"font-semibold text-gray-900",children:e.jsxs("a",{href:t.author.href,children:[e.jsx("span",{className:"absolute inset-0"}),t.author.name]})}),e.jsx("p",{className:"text-gray-600",children:t.author.role})]})]})]},t.id))})]})})})}const p=`const posts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  // More posts...
]

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">From the blog</h2>
          <p className="mt-2 text-lg/8 text-gray-600">Learn how to grow your business with our expert advice.</p>
          <div className="mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{post.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img alt="" src={post.author.imageUrl} className="size-10 rounded-full bg-gray-50" />
                  <div className="text-sm/6">
                    <p className="font-semibold text-gray-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
`,h=[{id:1,title:"Boost your conversion rate",href:"#",description:"Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",imageUrl:"https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",date:"Mar 16, 2020",datetime:"2020-03-16",category:{title:"Marketing",href:"#"},author:{name:"Michael Foster",role:"Co-Founder / CTO",href:"#",imageUrl:"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}}];function f(){return e.jsx("div",{className:"bg-white py-24 sm:py-32",children:e.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:e.jsxs("div",{className:"mx-auto max-w-2xl lg:max-w-4xl",children:[e.jsx("h2",{className:"text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl",children:"From the blog"}),e.jsx("p",{className:"mt-2 text-lg/8 text-gray-600",children:"Learn how to grow your business with our expert advice."}),e.jsx("div",{className:"mt-16 space-y-20 lg:mt-20 lg:space-y-20",children:h.map(t=>e.jsxs("article",{className:"relative isolate flex flex-col gap-8 lg:flex-row",children:[e.jsxs("div",{className:"relative aspect-video sm:aspect-2/1 lg:aspect-square lg:w-64 lg:shrink-0",children:[e.jsx("img",{alt:"",src:t.imageUrl,className:"absolute inset-0 size-full rounded-2xl bg-gray-50 object-cover"}),e.jsx("div",{className:"absolute inset-0 rounded-2xl ring-1 ring-gray-900/10 ring-inset"})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-x-4 text-xs",children:[e.jsx("time",{dateTime:t.datetime,className:"text-gray-500",children:t.date}),e.jsx("a",{href:t.category.href,className:"relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100",children:t.category.title})]}),e.jsxs("div",{className:"group relative max-w-xl",children:[e.jsx("h3",{className:"mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600",children:e.jsxs("a",{href:t.href,children:[e.jsx("span",{className:"absolute inset-0"}),t.title]})}),e.jsx("p",{className:"mt-5 text-sm/6 text-gray-600",children:t.description})]}),e.jsx("div",{className:"mt-6 flex border-t border-gray-900/5 pt-6",children:e.jsxs("div",{className:"relative flex items-center gap-x-4",children:[e.jsx("img",{alt:"",src:t.author.imageUrl,className:"size-10 rounded-full bg-gray-50"}),e.jsxs("div",{className:"text-sm/6",children:[e.jsx("p",{className:"font-semibold text-gray-900",children:e.jsxs("a",{href:t.author.href,children:[e.jsx("span",{className:"absolute inset-0"}),t.author.name]})}),e.jsx("p",{className:"text-gray-600",children:t.author.role})]})]})})]})]},t.id))})]})})})}const v=`const posts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  // More posts...
]

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">From the blog</h2>
          <p className="mt-2 text-lg/8 text-gray-600">Learn how to grow your business with our expert advice.</p>
          <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
            {posts.map((post) => (
              <article key={post.id} className="relative isolate flex flex-col gap-8 lg:flex-row">
                <div className="relative aspect-video sm:aspect-2/1 lg:aspect-square lg:w-64 lg:shrink-0">
                  <img
                    alt=""
                    src={post.imageUrl}
                    className="absolute inset-0 size-full rounded-2xl bg-gray-50 object-cover"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-gray-900/10 ring-inset" />
                </div>
                <div>
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={post.datetime} className="text-gray-500">
                      {post.date}
                    </time>
                    <a
                      href={post.category.href}
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {post.category.title}
                    </a>
                  </div>
                  <div className="group relative max-w-xl">
                    <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                      <a href={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-5 text-sm/6 text-gray-600">{post.description}</p>
                  </div>
                  <div className="mt-6 flex border-t border-gray-900/5 pt-6">
                    <div className="relative flex items-center gap-x-4">
                      <img alt="" src={post.author.imageUrl} className="size-10 rounded-full bg-gray-50" />
                      <div className="text-sm/6">
                        <p className="font-semibold text-gray-900">
                          <a href={post.author.href}>
                            <span className="absolute inset-0" />
                            {post.author.name}
                          </a>
                        </p>
                        <p className="text-gray-600">{post.author.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
`,a={title:"We’re incredibly proud to announce we have secured $75m in Series B",href:"#",description:"Libero neque aenean tincidunt nec consequat tempor. Viverra odio id velit adipiscing id. Nisi vestibulum orci eget bibendum dictum. Velit viverra posuere vulputate volutpat nunc. Nunc netus sit faucibus.",date:"Mar 16, 2020",datetime:"2020-03-16",author:{name:"Michael Foster",href:"#",imageUrl:"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}},y=[{id:2,title:"Boost your conversion rate",href:"#",description:"Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",date:"Mar 10, 2020",datetime:"2020-03-16",author:{name:"Lindsay Walton",href:"#",imageUrl:"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}}];function b(){return e.jsx("div",{className:"bg-white py-24 sm:py-32",children:e.jsxs("div",{className:"mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-12 px-6 sm:gap-y-16 lg:grid-cols-2 lg:px-8",children:[e.jsxs("article",{className:"mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-lg",children:[e.jsx("time",{dateTime:a.datetime,className:"block text-sm/6 text-gray-600",children:a.date}),e.jsx("h2",{id:"featured-post",className:"mt-4 text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl",children:a.title}),e.jsx("p",{className:"mt-4 text-lg/8 text-gray-600",children:a.description}),e.jsxs("div",{className:"mt-4 flex flex-col justify-between gap-6 sm:mt-8 sm:flex-row-reverse sm:gap-8 lg:mt-4 lg:flex-col",children:[e.jsx("div",{className:"flex",children:e.jsxs("a",{href:a.href,"aria-describedby":"featured-post",className:"text-sm/6 font-semibold text-indigo-600",children:["Continue reading ",e.jsx("span",{"aria-hidden":"true",children:"→"})]})}),e.jsx("div",{className:"flex lg:border-t lg:border-gray-900/10 lg:pt-8",children:e.jsxs("a",{href:a.author.href,className:"flex gap-x-2.5 text-sm/6 font-semibold text-gray-900",children:[e.jsx("img",{alt:"",src:a.author.imageUrl,className:"size-6 flex-none rounded-full bg-gray-50"}),a.author.name]})})]})]}),e.jsx("div",{className:"mx-auto w-full max-w-2xl border-t border-gray-900/10 pt-12 sm:pt-16 lg:mx-0 lg:max-w-none lg:border-t-0 lg:pt-0",children:e.jsx("div",{className:"-my-12 divide-y divide-gray-900/10",children:y.map(t=>e.jsxs("article",{className:"py-12",children:[e.jsxs("div",{className:"group relative max-w-xl",children:[e.jsx("time",{dateTime:t.datetime,className:"block text-sm/6 text-gray-600",children:t.date}),e.jsx("h2",{className:"mt-2 text-lg font-semibold text-gray-900 group-hover:text-gray-600",children:e.jsxs("a",{href:t.href,children:[e.jsx("span",{className:"absolute inset-0"}),t.title]})}),e.jsx("p",{className:"mt-4 text-sm/6 text-gray-600",children:t.description})]}),e.jsx("div",{className:"mt-4 flex",children:e.jsxs("a",{href:t.author.href,className:"relative flex gap-x-2.5 text-sm/6 font-semibold text-gray-900",children:[e.jsx("img",{alt:"",src:t.author.imageUrl,className:"size-6 flex-none rounded-full bg-gray-50"}),t.author.name]})})]},t.id))})})]})})}const N=`const featuredPost = {
  id: 1,
  title: 'We’re incredibly proud to announce we have secured $75m in Series B',
  href: '#',
  description:
    'Libero neque aenean tincidunt nec consequat tempor. Viverra odio id velit adipiscing id. Nisi vestibulum orci eget bibendum dictum. Velit viverra posuere vulputate volutpat nunc. Nunc netus sit faucibus.',
  date: 'Mar 16, 2020',
  datetime: '2020-03-16',
  author: {
    name: 'Michael Foster',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
}
const posts = [
  {
    id: 2,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-16',
    author: {
      name: 'Lindsay Walton',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  // More posts...
]

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-12 px-6 sm:gap-y-16 lg:grid-cols-2 lg:px-8">
        <article className="mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-lg">
          <time dateTime={featuredPost.datetime} className="block text-sm/6 text-gray-600">
            {featuredPost.date}
          </time>
          <h2
            id="featured-post"
            className="mt-4 text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl"
          >
            {featuredPost.title}
          </h2>
          <p className="mt-4 text-lg/8 text-gray-600">{featuredPost.description}</p>
          <div className="mt-4 flex flex-col justify-between gap-6 sm:mt-8 sm:flex-row-reverse sm:gap-8 lg:mt-4 lg:flex-col">
            <div className="flex">
              <a
                href={featuredPost.href}
                aria-describedby="featured-post"
                className="text-sm/6 font-semibold text-indigo-600"
              >
                Continue reading <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
            <div className="flex lg:border-t lg:border-gray-900/10 lg:pt-8">
              <a href={featuredPost.author.href} className="flex gap-x-2.5 text-sm/6 font-semibold text-gray-900">
                <img alt="" src={featuredPost.author.imageUrl} className="size-6 flex-none rounded-full bg-gray-50" />
                {featuredPost.author.name}
              </a>
            </div>
          </div>
        </article>
        <div className="mx-auto w-full max-w-2xl border-t border-gray-900/10 pt-12 sm:pt-16 lg:mx-0 lg:max-w-none lg:border-t-0 lg:pt-0">
          <div className="-my-12 divide-y divide-gray-900/10">
            {posts.map((post) => (
              <article key={post.id} className="py-12">
                <div className="group relative max-w-xl">
                  <time dateTime={post.datetime} className="block text-sm/6 text-gray-600">
                    {post.date}
                  </time>
                  <h2 className="mt-2 text-lg font-semibold text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h2>
                  <p className="mt-4 text-sm/6 text-gray-600">{post.description}</p>
                </div>
                <div className="mt-4 flex">
                  <a href={post.author.href} className="relative flex gap-x-2.5 text-sm/6 font-semibold text-gray-900">
                    <img alt="" src={post.author.imageUrl} className="size-6 flex-none rounded-full bg-gray-50" />
                    {post.author.name}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
`,j=[{id:1,role:"Full-time designer",href:"#",description:"Quos sunt ad dolore ullam qui. Enim et quisquam dicta molestias. Corrupti quo voluptatum eligendi autem labore.",salary:"$75,000 USD",location:"San Francisco, CA"},{id:2,role:"Laravel developer",href:"#",description:"Et veniam et officia dolorum rerum. Et voluptas consequatur magni sapiente amet voluptates dolorum. Ut porro aut eveniet.",salary:"$125,000 USD",location:"San Francisco, CA"},{id:3,role:"React Native developer",href:"#",description:"Veniam ipsam nisi quas architecto eos non voluptatem in nemo. Est occaecati nihil omnis delectus illum est.",salary:"$105,000 USD",location:"San Francisco, CA"}];function w(){return e.jsx("div",{className:"bg-white py-32",children:e.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:e.jsxs("div",{className:"mx-auto flex max-w-2xl flex-col items-end justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row",children:[e.jsxs("div",{className:"w-full lg:max-w-lg lg:flex-auto",children:[e.jsx("h2",{className:"text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl",children:"We’re always looking for awesome people to join us"}),e.jsx("p",{className:"mt-6 text-xl/8 text-gray-600",children:"Diam nunc lacus lacus aliquam turpis enim. Eget hac velit est euismod lacus. Est non placerat nam arcu. Cras purus nibh cursus sit eu in id."}),e.jsx("img",{alt:"",src:"https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1344&h=1104&q=80",className:"mt-16 aspect-6/5 w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-[34.5rem]"})]}),e.jsxs("div",{className:"w-full lg:max-w-xl lg:flex-auto",children:[e.jsx("h3",{className:"sr-only",children:"Job openings"}),e.jsx("ul",{className:"-my-8 divide-y divide-gray-100",children:j.map(t=>e.jsx("li",{className:"py-8",children:e.jsxs("dl",{className:"relative flex flex-wrap gap-x-3",children:[e.jsx("dt",{className:"sr-only",children:"Role"}),e.jsx("dd",{className:"w-full flex-none text-lg font-semibold tracking-tight text-gray-900",children:e.jsxs("a",{href:t.href,children:[t.role,e.jsx("span",{"aria-hidden":"true",className:"absolute inset-0"})]})}),e.jsx("dt",{className:"sr-only",children:"Description"}),e.jsx("dd",{className:"mt-2 w-full flex-none text-base/7 text-gray-600",children:t.description}),e.jsx("dt",{className:"sr-only",children:"Salary"}),e.jsx("dd",{className:"mt-4 text-base/7 font-semibold text-gray-900",children:t.salary}),e.jsx("dt",{className:"sr-only",children:"Location"}),e.jsxs("dd",{className:"mt-4 flex items-center gap-x-3 text-base/7 text-gray-500",children:[e.jsx("svg",{viewBox:"0 0 2 2","aria-hidden":"true",className:"size-0.5 flex-none fill-gray-300",children:e.jsx("circle",{r:1,cx:1,cy:1})}),t.location]})]})},t.id))}),e.jsx("div",{className:"mt-8 flex border-t border-gray-100 pt-8",children:e.jsxs("a",{href:"#",className:"text-sm/6 font-semibold text-indigo-600 hover:text-indigo-500",children:["View all openings ",e.jsx("span",{"aria-hidden":"true",children:"→"})]})})]})]})})})}const M=`const jobOpenings = [
  {
    id: 1,
    role: 'Full-time designer',
    href: '#',
    description:
      'Quos sunt ad dolore ullam qui. Enim et quisquam dicta molestias. Corrupti quo voluptatum eligendi autem labore.',
    salary: '$75,000 USD',
    location: 'San Francisco, CA',
  },
  {
    id: 2,
    role: 'Laravel developer',
    href: '#',
    description:
      'Et veniam et officia dolorum rerum. Et voluptas consequatur magni sapiente amet voluptates dolorum. Ut porro aut eveniet.',
    salary: '$125,000 USD',
    location: 'San Francisco, CA',
  },
  {
    id: 3,
    role: 'React Native developer',
    href: '#',
    description:
      'Veniam ipsam nisi quas architecto eos non voluptatem in nemo. Est occaecati nihil omnis delectus illum est.',
    salary: '$105,000 USD',
    location: 'San Francisco, CA',
  },
]

export default function Example() {
  return (
    <div className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto flex max-w-2xl flex-col items-end justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
          <div className="w-full lg:max-w-lg lg:flex-auto">
            <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
              We’re always looking for awesome people to join us
            </h2>
            <p className="mt-6 text-xl/8 text-gray-600">
              Diam nunc lacus lacus aliquam turpis enim. Eget hac velit est euismod lacus. Est non placerat nam arcu.
              Cras purus nibh cursus sit eu in id.
            </p>
            <img
              alt=""
              src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1344&h=1104&q=80"
              className="mt-16 aspect-6/5 w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-[34.5rem]"
            />
          </div>
          <div className="w-full lg:max-w-xl lg:flex-auto">
            <h3 className="sr-only">Job openings</h3>
            <ul className="-my-8 divide-y divide-gray-100">
              {jobOpenings.map((opening) => (
                <li key={opening.id} className="py-8">
                  <dl className="relative flex flex-wrap gap-x-3">
                    <dt className="sr-only">Role</dt>
                    <dd className="w-full flex-none text-lg font-semibold tracking-tight text-gray-900">
                      <a href={opening.href}>
                        {opening.role}
                        <span aria-hidden="true" className="absolute inset-0" />
                      </a>
                    </dd>
                    <dt className="sr-only">Description</dt>
                    <dd className="mt-2 w-full flex-none text-base/7 text-gray-600">{opening.description}</dd>
                    <dt className="sr-only">Salary</dt>
                    <dd className="mt-4 text-base/7 font-semibold text-gray-900">{opening.salary}</dd>
                    <dt className="sr-only">Location</dt>
                    <dd className="mt-4 flex items-center gap-x-3 text-base/7 text-gray-500">
                      <svg viewBox="0 0 2 2" aria-hidden="true" className="size-0.5 flex-none fill-gray-300">
                        <circle r={1} cx={1} cy={1} />
                      </svg>
                      {opening.location}
                    </dd>
                  </dl>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex border-t border-gray-100 pt-8">
              <a href="#" className="text-sm/6 font-semibold text-indigo-600 hover:text-indigo-500">
                View all openings <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
`,B=()=>e.jsxs("div",{className:"space-y-10 pb-20",children:[e.jsxs("section",{children:[e.jsx("h2",{className:"mb-4 text-lg font-bold text-gray-800",children:"01. Three-column"}),e.jsx(s,{name:"Three-column",code:r,children:e.jsx(i,{})})]}),e.jsxs("section",{children:[e.jsx("h2",{className:"mb-4 text-lg font-bold text-gray-800",children:"02. Three-column with images"}),e.jsx(s,{name:"Three-column with images",code:m,children:e.jsx(c,{})})]}),e.jsxs("section",{children:[e.jsx("h2",{className:"mb-4 text-lg font-bold text-gray-800",children:"03. Three-column with background images"}),e.jsx(s,{name:"Three-column with background images",code:x,children:e.jsx(n,{})})]}),e.jsxs("section",{children:[e.jsx("h2",{className:"mb-4 text-lg font-bold text-gray-800",children:"04. Single-column"}),e.jsx(s,{name:"Single-column",code:p,children:e.jsx(u,{})})]}),e.jsxs("section",{children:[e.jsx("h2",{className:"mb-4 text-lg font-bold text-gray-800",children:"05. Single-column with images"}),e.jsx(s,{name:"Single-column with images",code:v,children:e.jsx(f,{})})]}),e.jsxs("section",{children:[e.jsx("h2",{className:"mb-4 text-lg font-bold text-gray-800",children:"06. With featured post"}),e.jsx(s,{name:"With featured post",code:N,children:e.jsx(b,{})})]}),e.jsxs("section",{children:[e.jsx("h2",{className:"mb-4 text-lg font-bold text-gray-800",children:"07. With photo and list"}),e.jsx(s,{name:"With photo and list",code:M,children:e.jsx(w,{})})]})]});export{B as default};
