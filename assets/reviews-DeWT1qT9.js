import{j as e}from"./index-CvCVbuS9.js";import{P as o}from"./PreviewWrapper-TzFvRoPZ.js";import{F as i}from"./StarIcon-BLYUB6tL.js";const c=[{id:1,title:"Can't say enough good things",rating:5,content:`
      <p>I was really pleased with the overall shopping experience. My order even included a little personal, handwritten note, which delighted me!</p>
      <p>The product quality is amazing, it looks and feel even better than I had anticipated. Brilliant stuff! I would gladly recommend this store to my friends. And, now that I think of it... I actually have, many times!</p>
    `,author:"Risako M",date:"May 16, 2021",datetime:"2021-01-06"}];function m(...a){return a.filter(Boolean).join(" ")}function d(){return e.jsx("div",{className:"bg-white",children:e.jsxs("div",{className:"mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8",children:[e.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Recent reviews"}),e.jsx("div",{className:"mt-6 divide-y divide-gray-200 border-t border-b border-gray-200",children:c.map(a=>e.jsxs("div",{className:"py-10 lg:grid lg:grid-cols-12 lg:gap-x-8",children:[e.jsxs("div",{className:"lg:col-span-8 lg:col-start-5 xl:col-span-9 xl:col-start-4 xl:grid xl:grid-cols-3 xl:items-start xl:gap-x-8",children:[e.jsxs("div",{className:"flex items-center xl:col-span-1",children:[e.jsx("div",{className:"flex items-center",children:[0,1,2,3,4].map(t=>e.jsx(i,{"aria-hidden":"true",className:m(a.rating>t?"text-yellow-400":"text-gray-200","size-5 shrink-0")},t))}),e.jsxs("p",{className:"ml-3 text-sm text-gray-700",children:[a.rating,e.jsx("span",{className:"sr-only",children:" out of 5 stars"})]})]}),e.jsxs("div",{className:"mt-4 lg:mt-6 xl:col-span-2 xl:mt-0",children:[e.jsx("h3",{className:"text-sm font-medium text-gray-900",children:a.title}),e.jsx("div",{dangerouslySetInnerHTML:{__html:a.content},className:"mt-3 space-y-6 text-sm text-gray-500"})]})]}),e.jsxs("div",{className:"mt-6 flex items-center text-sm lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:mt-0 lg:flex-col lg:items-start xl:col-span-3",children:[e.jsx("p",{className:"font-medium text-gray-900",children:a.author}),e.jsx("time",{dateTime:a.datetime,className:"ml-4 border-l border-gray-200 pl-4 text-gray-500 lg:mt-2 lg:ml-0 lg:border-0 lg:pl-0",children:a.date})]})]},a.id))})]})})}const h=`import { StarIcon } from '@heroicons/react/20/solid'

const reviews = [
  {
    id: 1,
    title: "Can't say enough good things",
    rating: 5,
    content: \`
      <p>I was really pleased with the overall shopping experience. My order even included a little personal, handwritten note, which delighted me!</p>
      <p>The product quality is amazing, it looks and feel even better than I had anticipated. Brilliant stuff! I would gladly recommend this store to my friends. And, now that I think of it... I actually have, many times!</p>
    \`,
    author: 'Risako M',
    date: 'May 16, 2021',
    datetime: '2021-01-06',
  },
  // More reviews...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-lg font-medium text-gray-900">Recent reviews</h2>
        <div className="mt-6 divide-y divide-gray-200 border-t border-b border-gray-200">
          {reviews.map((review) => (
            <div key={review.id} className="py-10 lg:grid lg:grid-cols-12 lg:gap-x-8">
              <div className="lg:col-span-8 lg:col-start-5 xl:col-span-9 xl:col-start-4 xl:grid xl:grid-cols-3 xl:items-start xl:gap-x-8">
                <div className="flex items-center xl:col-span-1">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        aria-hidden="true"
                        className={classNames(
                          review.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                          'size-5 shrink-0',
                        )}
                      />
                    ))}
                  </div>
                  <p className="ml-3 text-sm text-gray-700">
                    {review.rating}
                    <span className="sr-only"> out of 5 stars</span>
                  </p>
                </div>

                <div className="mt-4 lg:mt-6 xl:col-span-2 xl:mt-0">
                  <h3 className="text-sm font-medium text-gray-900">{review.title}</h3>

                  <div
                    dangerouslySetInnerHTML={{ __html: review.content }}
                    className="mt-3 space-y-6 text-sm text-gray-500"
                  />
                </div>
              </div>

              <div className="mt-6 flex items-center text-sm lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:mt-0 lg:flex-col lg:items-start xl:col-span-3">
                <p className="font-medium text-gray-900">{review.author}</p>
                <time
                  dateTime={review.datetime}
                  className="ml-4 border-l border-gray-200 pl-4 text-gray-500 lg:mt-2 lg:ml-0 lg:border-0 lg:pl-0"
                >
                  {review.date}
                </time>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
`,s={average:4,totalCount:1624,counts:[{rating:5,count:1019},{rating:4,count:162},{rating:3,count:97},{rating:2,count:199},{rating:1,count:147}],featured:[{id:1,rating:5,content:`
        <p>This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.</p>
      `,author:"Emily Selman",avatarSrc:"https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"}]};function r(...a){return a.filter(Boolean).join(" ")}function x(){return e.jsx("div",{className:"bg-white",children:e.jsxs("div",{className:"mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-x-8 lg:px-8 lg:py-32",children:[e.jsxs("div",{className:"lg:col-span-4",children:[e.jsx("h2",{className:"text-2xl font-bold tracking-tight text-gray-900",children:"Customer Reviews"}),e.jsxs("div",{className:"mt-3 flex items-center",children:[e.jsxs("div",{children:[e.jsx("div",{className:"flex items-center",children:[0,1,2,3,4].map(a=>e.jsx(i,{"aria-hidden":"true",className:r(s.average>a?"text-yellow-400":"text-gray-300","size-5 shrink-0")},a))}),e.jsxs("p",{className:"sr-only",children:[s.average," out of 5 stars"]})]}),e.jsxs("p",{className:"ml-2 text-sm text-gray-900",children:["Based on ",s.totalCount," reviews"]})]}),e.jsxs("div",{className:"mt-6",children:[e.jsx("h3",{className:"sr-only",children:"Review data"}),e.jsx("dl",{className:"space-y-3",children:s.counts.map(a=>e.jsxs("div",{className:"flex items-center text-sm",children:[e.jsxs("dt",{className:"flex flex-1 items-center",children:[e.jsxs("p",{className:"w-3 font-medium text-gray-900",children:[a.rating,e.jsx("span",{className:"sr-only",children:" star reviews"})]}),e.jsxs("div",{"aria-hidden":"true",className:"ml-1 flex flex-1 items-center",children:[e.jsx(i,{"aria-hidden":"true",className:r(a.count>0?"text-yellow-400":"text-gray-300","size-5 shrink-0")}),e.jsxs("div",{className:"relative ml-3 flex-1",children:[e.jsx("div",{className:"h-3 rounded-full border border-gray-200 bg-gray-100"}),a.count>0?e.jsx("div",{style:{width:`calc(${a.count} / ${s.totalCount} * 100%)`},className:"absolute inset-y-0 rounded-full border border-yellow-400 bg-yellow-400"}):null]})]})]}),e.jsxs("dd",{className:"ml-3 w-10 text-right text-sm text-gray-900 tabular-nums",children:[Math.round(a.count/s.totalCount*100),"%"]})]},a.rating))})]}),e.jsxs("div",{className:"mt-10",children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900",children:"Share your thoughts"}),e.jsx("p",{className:"mt-1 text-sm text-gray-600",children:"If you’ve used this product, share your thoughts with other customers"}),e.jsx("a",{href:"#",className:"mt-6 inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 sm:w-auto lg:w-full",children:"Write a review"})]})]}),e.jsxs("div",{className:"mt-16 lg:col-span-7 lg:col-start-6 lg:mt-0",children:[e.jsx("h3",{className:"sr-only",children:"Recent reviews"}),e.jsx("div",{className:"flow-root",children:e.jsx("div",{className:"-my-12 divide-y divide-gray-200",children:s.featured.map(a=>e.jsxs("div",{className:"py-12",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("img",{alt:`${a.author}.`,src:a.avatarSrc,className:"size-12 rounded-full"}),e.jsxs("div",{className:"ml-4",children:[e.jsx("h4",{className:"text-sm font-bold text-gray-900",children:a.author}),e.jsx("div",{className:"mt-1 flex items-center",children:[0,1,2,3,4].map(t=>e.jsx(i,{"aria-hidden":"true",className:r(a.rating>t?"text-yellow-400":"text-gray-300","size-5 shrink-0")},t))}),e.jsxs("p",{className:"sr-only",children:[a.rating," out of 5 stars"]})]})]}),e.jsx("div",{dangerouslySetInnerHTML:{__html:a.content},className:"mt-4 space-y-6 text-base text-gray-600 italic"})]},a.id))})})]})]})})}const g=`import { StarIcon } from '@heroicons/react/20/solid'

const reviews = {
  average: 4,
  totalCount: 1624,
  counts: [
    { rating: 5, count: 1019 },
    { rating: 4, count: 162 },
    { rating: 3, count: 97 },
    { rating: 2, count: 199 },
    { rating: 1, count: 147 },
  ],
  featured: [
    {
      id: 1,
      rating: 5,
      content: \`
        <p>This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.</p>
      \`,
      author: 'Emily Selman',
      avatarSrc:
        'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    },
    // More reviews...
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-x-8 lg:px-8 lg:py-32">
        <div className="lg:col-span-4">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customer Reviews</h2>

          <div className="mt-3 flex items-center">
            <div>
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <StarIcon
                    key={rating}
                    aria-hidden="true"
                    className={classNames(
                      reviews.average > rating ? 'text-yellow-400' : 'text-gray-300',
                      'size-5 shrink-0',
                    )}
                  />
                ))}
              </div>
              <p className="sr-only">{reviews.average} out of 5 stars</p>
            </div>
            <p className="ml-2 text-sm text-gray-900">Based on {reviews.totalCount} reviews</p>
          </div>

          <div className="mt-6">
            <h3 className="sr-only">Review data</h3>

            <dl className="space-y-3">
              {reviews.counts.map((count) => (
                <div key={count.rating} className="flex items-center text-sm">
                  <dt className="flex flex-1 items-center">
                    <p className="w-3 font-medium text-gray-900">
                      {count.rating}
                      <span className="sr-only"> star reviews</span>
                    </p>
                    <div aria-hidden="true" className="ml-1 flex flex-1 items-center">
                      <StarIcon
                        aria-hidden="true"
                        className={classNames(count.count > 0 ? 'text-yellow-400' : 'text-gray-300', 'size-5 shrink-0')}
                      />

                      <div className="relative ml-3 flex-1">
                        <div className="h-3 rounded-full border border-gray-200 bg-gray-100" />
                        {count.count > 0 ? (
                          <div
                            style={{ width: \`calc(\${count.count} / \${reviews.totalCount} * 100%)\` }}
                            className="absolute inset-y-0 rounded-full border border-yellow-400 bg-yellow-400"
                          />
                        ) : null}
                      </div>
                    </div>
                  </dt>
                  <dd className="ml-3 w-10 text-right text-sm text-gray-900 tabular-nums">
                    {Math.round((count.count / reviews.totalCount) * 100)}%
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-10">
            <h3 className="text-lg font-medium text-gray-900">Share your thoughts</h3>
            <p className="mt-1 text-sm text-gray-600">
              If you’ve used this product, share your thoughts with other customers
            </p>

            <a
              href="#"
              className="mt-6 inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 sm:w-auto lg:w-full"
            >
              Write a review
            </a>
          </div>
        </div>

        <div className="mt-16 lg:col-span-7 lg:col-start-6 lg:mt-0">
          <h3 className="sr-only">Recent reviews</h3>

          <div className="flow-root">
            <div className="-my-12 divide-y divide-gray-200">
              {reviews.featured.map((review) => (
                <div key={review.id} className="py-12">
                  <div className="flex items-center">
                    <img alt={\`\${review.author}.\`} src={review.avatarSrc} className="size-12 rounded-full" />
                    <div className="ml-4">
                      <h4 className="text-sm font-bold text-gray-900">{review.author}</h4>
                      <div className="mt-1 flex items-center">
                        {[0, 1, 2, 3, 4].map((rating) => (
                          <StarIcon
                            key={rating}
                            aria-hidden="true"
                            className={classNames(
                              review.rating > rating ? 'text-yellow-400' : 'text-gray-300',
                              'size-5 shrink-0',
                            )}
                          />
                        ))}
                      </div>
                      <p className="sr-only">{review.rating} out of 5 stars</p>
                    </div>
                  </div>

                  <div
                    dangerouslySetInnerHTML={{ __html: review.content }}
                    className="mt-4 space-y-6 text-base text-gray-600 italic"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
`,u=[{id:1,title:"This is the best white t-shirt out there",rating:5,content:`
      <p>I've searched my entire life for a t-shirt that reflects every color in the visible spectrum. Scientists said it couldn't be done, but when I look at this shirt, I see white light bouncing right back into my eyes. Incredible!</p>
    `,author:"Mark Edwards",avatarSrc:"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"},{id:2,title:"Adds the perfect variety to my wardrobe",rating:4,content:`
      <p>I used to be one of those unbearable minimalists who only wore the same black v-necks every day. Now, I have expanded my wardrobe with three new crewneck options! Leaving off one star only because I wish the heather gray was more gray.</p>
    `,author:"Blake Reid",avatarSrc:"https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80"},{id:3,title:"All good things come in 6-Packs",rating:5,content:`
      <p>Tasty beverages, strong abs that will never be seen due to aforementioned tasty beverages, and these Basic Tees!</p>
    `,author:"Ben Russel",avatarSrc:"https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}];function p(...a){return a.filter(Boolean).join(" ")}function y(){return e.jsx("div",{className:"bg-white",children:e.jsxs("div",{children:[e.jsx("h2",{id:"reviews-heading",className:"sr-only",children:"Reviews"}),e.jsx("div",{className:"space-y-10",children:u.map(a=>e.jsxs("div",{className:"flex flex-col sm:flex-row",children:[e.jsxs("div",{className:"order-2 mt-6 sm:mt-0 sm:ml-16",children:[e.jsx("h3",{className:"text-sm font-medium text-gray-900",children:a.title}),e.jsxs("p",{className:"sr-only",children:[a.rating," out of 5 stars"]}),e.jsx("div",{dangerouslySetInnerHTML:{__html:a.content},className:"mt-3 space-y-6 text-sm text-gray-600"})]}),e.jsxs("div",{className:"order-1 flex items-center sm:flex-col sm:items-start",children:[e.jsx("img",{alt:`${a.author}.`,src:a.avatarSrc,className:"size-12 rounded-full"}),e.jsxs("div",{className:"ml-4 sm:mt-4 sm:ml-0",children:[e.jsx("p",{className:"text-sm font-medium text-gray-900",children:a.author}),e.jsx("div",{className:"mt-2 flex items-center",children:[0,1,2,3,4].map(t=>e.jsx(i,{"aria-hidden":"true",className:p(a.rating>t?"text-gray-900":"text-gray-200","size-5 shrink-0")},t))})]})]})]},a.id))})]})})}const v=`import { StarIcon } from '@heroicons/react/20/solid'

const reviews = [
  {
    id: 1,
    title: 'This is the best white t-shirt out there',
    rating: 5,
    content: \`
      <p>I've searched my entire life for a t-shirt that reflects every color in the visible spectrum. Scientists said it couldn't be done, but when I look at this shirt, I see white light bouncing right back into my eyes. Incredible!</p>
    \`,
    author: 'Mark Edwards',
    avatarSrc:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 2,
    title: 'Adds the perfect variety to my wardrobe',
    rating: 4,
    content: \`
      <p>I used to be one of those unbearable minimalists who only wore the same black v-necks every day. Now, I have expanded my wardrobe with three new crewneck options! Leaving off one star only because I wish the heather gray was more gray.</p>
    \`,
    author: 'Blake Reid',
    avatarSrc:
      'https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
  },
  {
    id: 3,
    title: 'All good things come in 6-Packs',
    rating: 5,
    content: \`
      <p>Tasty beverages, strong abs that will never be seen due to aforementioned tasty beverages, and these Basic Tees!</p>
    \`,
    author: 'Ben Russel',
    avatarSrc:
      'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="bg-white">
      <div>
        <h2 id="reviews-heading" className="sr-only">
          Reviews
        </h2>

        <div className="space-y-10">
          {reviews.map((review) => (
            <div key={review.id} className="flex flex-col sm:flex-row">
              <div className="order-2 mt-6 sm:mt-0 sm:ml-16">
                <h3 className="text-sm font-medium text-gray-900">{review.title}</h3>
                <p className="sr-only">{review.rating} out of 5 stars</p>

                <div
                  dangerouslySetInnerHTML={{ __html: review.content }}
                  className="mt-3 space-y-6 text-sm text-gray-600"
                />
              </div>

              <div className="order-1 flex items-center sm:flex-col sm:items-start">
                <img alt={\`\${review.author}.\`} src={review.avatarSrc} className="size-12 rounded-full" />

                <div className="ml-4 sm:mt-4 sm:ml-0">
                  <p className="text-sm font-medium text-gray-900">{review.author}</p>
                  <div className="mt-2 flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        aria-hidden="true"
                        className={classNames(
                          review.rating > rating ? 'text-gray-900' : 'text-gray-200',
                          'size-5 shrink-0',
                        )}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
`,f=[{id:1,rating:5,content:`
      <p>This icon pack is just what I need for my latest project. There's an icon for just about anything I could ever need. Love the playful look!</p>
    `,date:"July 16, 2021",datetime:"2021-07-16",author:"Emily Selman",avatarSrc:"https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"},{id:2,rating:5,content:`
      <p>Blown away by how polished this icon pack is. Everything looks so consistent and each SVG is optimized out of the box so I can use it directly with confidence. It would take me several hours to create a single icon this good, so it's a steal at this price.</p>
    `,date:"July 12, 2021",datetime:"2021-07-12",author:"Hector Gibbons",avatarSrc:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"}];function n(...a){return a.filter(Boolean).join(" ")}function w(){return e.jsx("div",{className:"bg-white",children:e.jsxs("div",{children:[e.jsx("h2",{className:"sr-only",children:"Customer Reviews"}),e.jsx("div",{className:"-my-10",children:f.map((a,t)=>e.jsxs("div",{className:"flex space-x-4 text-sm text-gray-500",children:[e.jsx("div",{className:"flex-none py-10",children:e.jsx("img",{alt:"",src:a.avatarSrc,className:"size-10 rounded-full bg-gray-100"})}),e.jsxs("div",{className:n(t===0?"":"border-t border-gray-200","flex-1 py-10"),children:[e.jsx("h3",{className:"font-medium text-gray-900",children:a.author}),e.jsx("p",{children:e.jsx("time",{dateTime:a.datetime,children:a.date})}),e.jsx("div",{className:"mt-4 flex items-center",children:[0,1,2,3,4].map(l=>e.jsx(i,{"aria-hidden":"true",className:n(a.rating>l?"text-yellow-400":"text-gray-300","size-5 shrink-0")},l))}),e.jsxs("p",{className:"sr-only",children:[a.rating," out of 5 stars"]}),e.jsx("div",{dangerouslySetInnerHTML:{__html:a.content},className:"mt-4 text-sm/6 text-gray-500"})]})]},a.id))})]})})}const N=`import { StarIcon } from '@heroicons/react/20/solid'

const reviews = [
  {
    id: 1,
    rating: 5,
    content: \`
      <p>This icon pack is just what I need for my latest project. There's an icon for just about anything I could ever need. Love the playful look!</p>
    \`,
    date: 'July 16, 2021',
    datetime: '2021-07-16',
    author: 'Emily Selman',
    avatarSrc:
      'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
  },
  {
    id: 2,
    rating: 5,
    content: \`
      <p>Blown away by how polished this icon pack is. Everything looks so consistent and each SVG is optimized out of the box so I can use it directly with confidence. It would take me several hours to create a single icon this good, so it's a steal at this price.</p>
    \`,
    date: 'July 12, 2021',
    datetime: '2021-07-12',
    author: 'Hector Gibbons',
    avatarSrc:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
  },
  // More reviews...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="bg-white">
      <div>
        <h2 className="sr-only">Customer Reviews</h2>

        <div className="-my-10">
          {reviews.map((review, reviewIdx) => (
            <div key={review.id} className="flex space-x-4 text-sm text-gray-500">
              <div className="flex-none py-10">
                <img alt="" src={review.avatarSrc} className="size-10 rounded-full bg-gray-100" />
              </div>
              <div className={classNames(reviewIdx === 0 ? '' : 'border-t border-gray-200', 'flex-1 py-10')}>
                <h3 className="font-medium text-gray-900">{review.author}</h3>
                <p>
                  <time dateTime={review.datetime}>{review.date}</time>
                </p>

                <div className="mt-4 flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      aria-hidden="true"
                      className={classNames(
                        review.rating > rating ? 'text-yellow-400' : 'text-gray-300',
                        'size-5 shrink-0',
                      )}
                    />
                  ))}
                </div>
                <p className="sr-only">{review.rating} out of 5 stars</p>

                <div dangerouslySetInnerHTML={{ __html: review.content }} className="mt-4 text-sm/6 text-gray-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
`,I=()=>{const a=[{id:"01",name:"Multi-column",component:e.jsx(d,{}),raw:h},{id:"02",name:"With summary chart",component:e.jsx(x,{}),raw:g},{id:"03",name:"Avatars with separate description",component:e.jsx(y,{}),raw:v},{id:"04",name:"Simple with avatars",component:e.jsx(w,{}),raw:N}];return e.jsx("div",{className:"space-y-10 pb-20",children:a.map(t=>e.jsxs("section",{children:[e.jsxs("h2",{className:"mb-4 text-lg font-bold text-gray-800",children:[t.id,". ",t.name]}),e.jsx(o,{name:t.name,code:t.raw,children:t.component})]},t.id))})};export{I as default};
