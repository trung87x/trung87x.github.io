import{r as i,j as e}from"./index-CvCVbuS9.js";import{P as m}from"./PreviewWrapper-TzFvRoPZ.js";import{F as a}from"./CalendarIcon-BGNgCXOy.js";import{F as c}from"./ArrowPathIcon-D2cJAebc.js";import{F as l}from"./CheckBadgeIcon-DlmEVyyZ.js";function d({title:s,titleId:t,...r},o){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":t},r),s?i.createElement("title",{id:t},s):null,i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"}))}const n=i.forwardRef(d),g=[{name:"Free shipping",imageSrc:"https://tailwindui.com/plus-assets/img/ecommerce/icons/icon-shipping-simple.svg",description:"It's not actually free we just price it into the products. Someone's paying for it, and it's not us."},{name:"10-year warranty",imageSrc:"https://tailwindui.com/plus-assets/img/ecommerce/icons/icon-warranty-simple.svg",description:"If it breaks in the first 10 years we'll replace it. After that you're on your own though."},{name:"Exchanges",imageSrc:"https://tailwindui.com/plus-assets/img/ecommerce/icons/icon-exchange-simple.svg",description:"If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though."}];function p(){return e.jsx("div",{className:"bg-gray-50",children:e.jsx("div",{className:"mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4",children:e.jsxs("div",{className:"mx-auto max-w-2xl px-4 lg:max-w-none",children:[e.jsxs("div",{className:"grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-4xl font-bold tracking-tight text-gray-900",children:"We built our business on great customer service"}),e.jsx("p",{className:"mt-4 text-gray-500",children:"At the beginning at least, but then we realized we could make a lot more money if we kinda stopped caring about that. Our new strategy is to write a bunch of things that look really good in the headlines, then clarify in the small print but hope people don't actually read it."})]}),e.jsx("img",{alt:"",src:"https://tailwindui.com/plus-assets/img/ecommerce-images/incentives-07-hero.jpg",className:"aspect-3/2 w-full rounded-lg bg-gray-100 object-cover"})]}),e.jsx("div",{className:"mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3",children:g.map(s=>e.jsxs("div",{className:"sm:flex lg:block",children:[e.jsx("div",{className:"sm:shrink-0",children:e.jsx("img",{alt:"",src:s.imageSrc,className:"size-16"})}),e.jsxs("div",{className:"mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0",children:[e.jsx("h3",{className:"text-sm font-medium text-gray-900",children:s.name}),e.jsx("p",{className:"mt-2 text-sm text-gray-500",children:s.description})]})]},s.name))})]})})})}const h=`const incentives = [
  {
    name: 'Free shipping',
    imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce/icons/icon-shipping-simple.svg',
    description: "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
  },
  {
    name: '10-year warranty',
    imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce/icons/icon-warranty-simple.svg',
    description: "If it breaks in the first 10 years we'll replace it. After that you're on your own though.",
  },
  {
    name: 'Exchanges',
    imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce/icons/icon-exchange-simple.svg',
    description:
      "If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.",
  },
]

export default function Example() {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-gray-900">
                We built our business on great customer service
              </h2>
              <p className="mt-4 text-gray-500">
                At the beginning at least, but then we realized we could make a lot more money if we kinda stopped
                caring about that. Our new strategy is to write a bunch of things that look really good in the
                headlines, then clarify in the small print but hope people don't actually read it.
              </p>
            </div>
            <img
              alt=""
              src="https://tailwindui.com/plus-assets/img/ecommerce-images/incentives-07-hero.jpg"
              className="aspect-3/2 w-full rounded-lg bg-gray-100 object-cover"
            />
          </div>
          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            {incentives.map((incentive) => (
              <div key={incentive.name} className="sm:flex lg:block">
                <div className="sm:shrink-0">
                  <img alt="" src={incentive.imageSrc} className="size-16" />
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                  <h3 className="text-sm font-medium text-gray-900">{incentive.name}</h3>
                  <p className="mt-2 text-sm text-gray-500">{incentive.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
`,x=[{name:"Free Shipping",description:"It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",imageSrc:"https://tailwindui.com/plus-assets/img/ecommerce/icons/icon-delivery-light.svg"},{name:"24/7 Customer Support",description:"Our AI chat widget is powered by a naive series of if/else statements. Guaranteed to irritate.",imageSrc:"https://tailwindui.com/plus-assets/img/ecommerce/icons/icon-chat-light.svg"},{name:"Fast Shopping Cart",description:"Look how fast that cart is going. What does this mean for the actual experience? I don't know.",imageSrc:"https://tailwindui.com/plus-assets/img/ecommerce/icons/icon-fast-checkout-light.svg"},{name:"Gift Cards",description:"Buy them for your friends, especially if they don't like our store. Free money for us, it's great.",imageSrc:"https://tailwindui.com/plus-assets/img/ecommerce/icons/icon-gift-card-light.svg"}];function u(){return e.jsx("div",{className:"bg-gray-50",children:e.jsx("div",{className:"mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8",children:e.jsx("div",{className:"grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8",children:x.map(s=>e.jsxs("div",{children:[e.jsx("img",{alt:"",src:s.imageSrc,className:"h-24 w-auto"}),e.jsx("h3",{className:"mt-6 text-sm font-medium text-gray-900",children:s.name}),e.jsx("p",{className:"mt-2 text-sm text-gray-500",children:s.description})]},s.name))})})})}const v=`const incentives = [
  {
    name: 'Free Shipping',
    description: "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
    imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce/icons/icon-delivery-light.svg',
  },
  {
    name: '24/7 Customer Support',
    description: 'Our AI chat widget is powered by a naive series of if/else statements. Guaranteed to irritate.',
    imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce/icons/icon-chat-light.svg',
  },
  {
    name: 'Fast Shopping Cart',
    description: "Look how fast that cart is going. What does this mean for the actual experience? I don't know.",
    imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce/icons/icon-fast-checkout-light.svg',
  },
  {
    name: 'Gift Cards',
    description: "Buy them for your friends, especially if they don't like our store. Free money for us, it's great.",
    imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce/icons/icon-gift-card-light.svg',
  },
]

export default function Example() {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
          {incentives.map((incentive) => (
            <div key={incentive.name}>
              <img alt="" src={incentive.imageSrc} className="h-24 w-auto" />
              <h3 className="mt-6 text-sm font-medium text-gray-900">{incentive.name}</h3>
              <p className="mt-2 text-sm text-gray-500">{incentive.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
`,y=[{name:"Free shipping",imageSrc:"https://tailwindui.com/plus-assets/img/ecommerce/icons/icon-shipping-simple.svg",description:"It's not actually free we just price it into the products. Someone's paying for it, and it's not us."},{name:"10-year warranty",imageSrc:"https://tailwindui.com/plus-assets/img/ecommerce/icons/icon-warranty-simple.svg",description:"If it breaks in the first 10 years we'll replace it. After that you're on your own though."},{name:"Exchanges",imageSrc:"https://tailwindui.com/plus-assets/img/ecommerce/icons/icon-exchange-simple.svg",description:"If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though."}];function w(){return e.jsx("div",{className:"bg-white",children:e.jsx("div",{className:"mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4",children:e.jsxs("div",{className:"mx-auto max-w-2xl px-4 lg:max-w-none",children:[e.jsxs("div",{className:"max-w-3xl",children:[e.jsx("h2",{className:"text-4xl font-bold tracking-tight text-gray-900",children:"We built our business on customer service"}),e.jsx("p",{className:"mt-4 text-gray-500",children:"At the beginning at least, but then we realized we could make a lot more money if we kinda stopped caring about that. Our new strategy is to write a bunch of things that look really good in the headlines, then clarify in the small print but hope people don't actually read it."})]}),e.jsx("div",{className:"mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3",children:y.map(s=>e.jsxs("div",{className:"sm:flex lg:block",children:[e.jsx("div",{className:"sm:shrink-0",children:e.jsx("img",{alt:"",src:s.imageSrc,className:"size-16"})}),e.jsxs("div",{className:"mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0",children:[e.jsx("h3",{className:"text-sm font-medium text-gray-900",children:s.name}),e.jsx("p",{className:"mt-2 text-sm text-gray-500",children:s.description})]})]},s.name))})]})})})}const f=`const incentives = [
  {
    name: 'Free shipping',
    imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce/icons/icon-shipping-simple.svg',
    description: "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
  },
  {
    name: '10-year warranty',
    imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce/icons/icon-warranty-simple.svg',
    description: "If it breaks in the first 10 years we'll replace it. After that you're on your own though.",
  },
  {
    name: 'Exchanges',
    imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce/icons/icon-exchange-simple.svg',
    description:
      "If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.",
  },
]

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              We built our business on customer service
            </h2>
            <p className="mt-4 text-gray-500">
              At the beginning at least, but then we realized we could make a lot more money if we kinda stopped caring
              about that. Our new strategy is to write a bunch of things that look really good in the headlines, then
              clarify in the small print but hope people don't actually read it.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            {incentives.map((incentive) => (
              <div key={incentive.name} className="sm:flex lg:block">
                <div className="sm:shrink-0">
                  <img alt="" src={incentive.imageSrc} className="size-16" />
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                  <h3 className="text-sm font-medium text-gray-900">{incentive.name}</h3>
                  <p className="mt-2 text-sm text-gray-500">{incentive.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
`,N=[{name:"Free Shipping",description:"It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",imageSrc:"https://tailwindui.com/plus-assets/img/ecommerce/icons/icon-delivery-light.svg"},{name:"24/7 Customer Support",description:"Our AI chat widget is powered by a naive series of if/else statements. Guaranteed to irritate.",imageSrc:"https://tailwindui.com/plus-assets/img/ecommerce/icons/icon-chat-light.svg"},{name:"Fast Shopping Cart",description:"Look how fast that cart is going. What does this mean for the actual experience? I don't know.",imageSrc:"https://tailwindui.com/plus-assets/img/ecommerce/icons/icon-fast-checkout-light.svg"}];function j(){return e.jsx("div",{className:"bg-gray-50",children:e.jsx("div",{className:"mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4",children:e.jsx("div",{className:"mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 px-4 lg:max-w-none lg:grid-cols-3",children:N.map(s=>e.jsxs("div",{className:"text-center sm:flex sm:text-left lg:block lg:text-center",children:[e.jsx("div",{className:"sm:shrink-0",children:e.jsx("div",{className:"flow-root",children:e.jsx("img",{alt:"",src:s.imageSrc,className:"mx-auto h-24 w-28"})})}),e.jsxs("div",{className:"mt-3 sm:mt-0 sm:ml-3 lg:mt-3 lg:ml-0",children:[e.jsx("h3",{className:"text-sm font-medium text-gray-900",children:s.name}),e.jsx("p",{className:"mt-2 text-sm text-gray-500",children:s.description})]})]},s.name))})})})}const k=`const incentives = [
  {
    name: 'Free Shipping',
    description: "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
    imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce/icons/icon-delivery-light.svg',
  },
  {
    name: '24/7 Customer Support',
    description: 'Our AI chat widget is powered by a naive series of if/else statements. Guaranteed to irritate.',
    imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce/icons/icon-chat-light.svg',
  },
  {
    name: 'Fast Shopping Cart',
    description: "Look how fast that cart is going. What does this mean for the actual experience? I don't know.",
    imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce/icons/icon-fast-checkout-light.svg',
  },
]

export default function Example() {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 px-4 lg:max-w-none lg:grid-cols-3">
          {incentives.map((incentive) => (
            <div key={incentive.name} className="text-center sm:flex sm:text-left lg:block lg:text-center">
              <div className="sm:shrink-0">
                <div className="flow-root">
                  <img alt="" src={incentive.imageSrc} className="mx-auto h-24 w-28" />
                </div>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3 lg:mt-3 lg:ml-0">
                <h3 className="text-sm font-medium text-gray-900">{incentive.name}</h3>
                <p className="mt-2 text-sm text-gray-500">{incentive.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
`,b=[{name:"Free shipping",imageSrc:"https://tailwindui.com/plus-assets/img/ecommerce/icons/icon-shipping-simple.svg",description:"It's not actually free we just price it into the products. Someone's paying for it, and it's not us."},{name:"10-year warranty",imageSrc:"https://tailwindui.com/plus-assets/img/ecommerce/icons/icon-warranty-simple.svg",description:"If it breaks in the first 10 years we'll replace it. After that you're on your own though."},{name:"Exchanges",imageSrc:"https://tailwindui.com/plus-assets/img/ecommerce/icons/icon-exchange-simple.svg",description:"If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though."}];function S(){return e.jsx("div",{className:"bg-white",children:e.jsx("div",{className:"mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8",children:e.jsx("div",{className:"rounded-2xl bg-gray-50 px-6 py-16 sm:p-16",children:e.jsxs("div",{className:"mx-auto max-w-xl lg:max-w-none",children:[e.jsx("div",{className:"text-center",children:e.jsx("h2",{className:"text-2xl font-bold tracking-tight text-gray-900",children:"We built our business on customer service"})}),e.jsx("div",{className:"mx-auto mt-12 grid max-w-sm grid-cols-1 gap-x-8 gap-y-10 sm:max-w-none lg:grid-cols-3",children:b.map(s=>e.jsxs("div",{className:"text-center sm:flex sm:text-left lg:block lg:text-center",children:[e.jsx("div",{className:"sm:shrink-0",children:e.jsx("div",{className:"flow-root",children:e.jsx("img",{alt:"",src:s.imageSrc,className:"mx-auto size-16"})})}),e.jsxs("div",{className:"mt-3 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0",children:[e.jsx("h3",{className:"text-sm font-medium text-gray-900",children:s.name}),e.jsx("p",{className:"mt-2 text-sm text-gray-500",children:s.description})]})]},s.name))})]})})})})}const I=`const incentives = [
  {
    name: 'Free shipping',
    imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce/icons/icon-shipping-simple.svg',
    description: "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
  },
  {
    name: '10-year warranty',
    imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce/icons/icon-warranty-simple.svg',
    description: "If it breaks in the first 10 years we'll replace it. After that you're on your own though.",
  },
  {
    name: 'Exchanges',
    imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce/icons/icon-exchange-simple.svg',
    description:
      "If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.",
  },
]

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gray-50 px-6 py-16 sm:p-16">
          <div className="mx-auto max-w-xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                We built our business on customer service
              </h2>
            </div>
            <div className="mx-auto mt-12 grid max-w-sm grid-cols-1 gap-x-8 gap-y-10 sm:max-w-none lg:grid-cols-3">
              {incentives.map((incentive) => (
                <div key={incentive.name} className="text-center sm:flex sm:text-left lg:block lg:text-center">
                  <div className="sm:shrink-0">
                    <div className="flow-root">
                      <img alt="" src={incentive.imageSrc} className="mx-auto size-16" />
                    </div>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                    <h3 className="text-sm font-medium text-gray-900">{incentive.name}</h3>
                    <p className="mt-2 text-sm text-gray-500">{incentive.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
`,F=[{name:"Free delivery",imageSrc:"https://tailwindui.com/plus-assets/img/ecommerce/icons/icon-delivery-light.svg",description:"Order now and you'll get delivery absolutely free. Well, it's not actually free, we just price it into the products. Someone's paying for it, and it's not us."},{name:"10-year warranty",imageSrc:"https://tailwindui.com/plus-assets/img/ecommerce/icons/icon-warranty-light.svg",description:"We have a 10 year warranty with every product that you purchase, whether thats a new pen or organizer, you can be sure we'll stand behind it."},{name:"Exchanges",imageSrc:"https://tailwindui.com/plus-assets/img/ecommerce/icons/icon-returns-light.svg",description:"We understand that when your product arrives you might not particularly like it, or you ordered the wrong thing. Conditions apply here."},{name:"For the planet",imageSrc:"https://tailwindui.com/plus-assets/img/ecommerce/icons/icon-planet-light.svg",description:"Like you, we love the planet, and so we've pledged 1% of all sales to the preservation and restoration of the natural environment."}];function E(){return e.jsxs("div",{className:"bg-gray-50",children:[e.jsx("h2",{className:"sr-only",children:"Our perks"}),e.jsx("div",{className:"mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4",children:e.jsx("div",{className:"mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 px-4 lg:max-w-none lg:grid-cols-2 lg:gap-y-16",children:F.map(s=>e.jsxs("div",{className:"sm:flex",children:[e.jsx("div",{className:"sm:shrink-0",children:e.jsx("div",{className:"flow-root",children:e.jsx("img",{alt:"",src:s.imageSrc,className:"h-24 w-28"})})}),e.jsxs("div",{className:"mt-3 sm:mt-0 sm:ml-3",children:[e.jsx("h3",{className:"text-sm font-medium text-gray-900",children:s.name}),e.jsx("p",{className:"mt-2 text-sm text-gray-500",children:s.description})]})]},s.name))})})]})}const C=`const perks = [
  {
    name: 'Free delivery',
    imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce/icons/icon-delivery-light.svg',
    description:
      "Order now and you'll get delivery absolutely free. Well, it's not actually free, we just price it into the products. Someone's paying for it, and it's not us.",
  },
  {
    name: '10-year warranty',
    imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce/icons/icon-warranty-light.svg',
    description:
      "We have a 10 year warranty with every product that you purchase, whether thats a new pen or organizer, you can be sure we'll stand behind it.",
  },
  {
    name: 'Exchanges',
    imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce/icons/icon-returns-light.svg',
    description:
      'We understand that when your product arrives you might not particularly like it, or you ordered the wrong thing. Conditions apply here.',
  },
  {
    name: 'For the planet',
    imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce/icons/icon-planet-light.svg',
    description:
      "Like you, we love the planet, and so we've pledged 1% of all sales to the preservation and restoration of the natural environment.",
  },
]

export default function Example() {
  return (
    <div className="bg-gray-50">
      <h2 className="sr-only">Our perks</h2>
      <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 px-4 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          {perks.map((perk) => (
            <div key={perk.name} className="sm:flex">
              <div className="sm:shrink-0">
                <div className="flow-root">
                  <img alt="" src={perk.imageSrc} className="h-24 w-28" />
                </div>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <h3 className="text-sm font-medium text-gray-900">{perk.name}</h3>
                <p className="mt-2 text-sm text-gray-500">{perk.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
`,W=[{name:"10-year all-inclusive warranty",description:"We’ll replace it with a new one",icon:a},{name:"Free shipping on returns",description:"Send it back for free",icon:c},{name:"Free, contactless delivery",description:"The shipping is on us",icon:n}];function T(){return e.jsxs("div",{className:"bg-white",children:[e.jsx("h2",{className:"sr-only",children:"Our perks"}),e.jsx("div",{className:"mx-auto max-w-7xl divide-y divide-gray-200 lg:flex lg:justify-center lg:divide-x lg:divide-y-0 lg:py-8",children:W.map((s,t)=>e.jsx("div",{className:"py-8 lg:w-1/3 lg:flex-none lg:py-0",children:e.jsxs("div",{className:"mx-auto flex max-w-xs items-center px-4 lg:max-w-none lg:px-8",children:[e.jsx(s.icon,{"aria-hidden":"true",className:"size-8 shrink-0 text-indigo-600"}),e.jsxs("div",{className:"ml-4 flex flex-auto flex-col-reverse",children:[e.jsx("h3",{className:"font-medium text-gray-900",children:s.name}),e.jsx("p",{className:"text-sm text-gray-500",children:s.description})]})]})},t))})]})}const z=`import { ArrowPathIcon, CalendarIcon, TruckIcon } from '@heroicons/react/24/outline'

const perks = [
  { name: '10-year all-inclusive warranty', description: 'We’ll replace it with a new one', icon: CalendarIcon },
  { name: 'Free shipping on returns', description: 'Send it back for free', icon: ArrowPathIcon },
  { name: 'Free, contactless delivery', description: 'The shipping is on us', icon: TruckIcon },
]

export default function Example() {
  return (
    <div className="bg-white">
      <h2 className="sr-only">Our perks</h2>
      <div className="mx-auto max-w-7xl divide-y divide-gray-200 lg:flex lg:justify-center lg:divide-x lg:divide-y-0 lg:py-8">
        {perks.map((perk, perkIdx) => (
          <div key={perkIdx} className="py-8 lg:w-1/3 lg:flex-none lg:py-0">
            <div className="mx-auto flex max-w-xs items-center px-4 lg:max-w-none lg:px-8">
              <perk.icon aria-hidden="true" className="size-8 shrink-0 text-indigo-600" />
              <div className="ml-4 flex flex-auto flex-col-reverse">
                <h3 className="font-medium text-gray-900">{perk.name}</h3>
                <p className="text-sm text-gray-500">{perk.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
`,A=[{name:"Free, contactless delivery",icon:n},{name:"No questions asked returns",icon:l},{name:"2-year warranty",icon:a}];function $(){return e.jsxs("div",{className:"bg-white",children:[e.jsx("h2",{className:"sr-only",children:"Why you should buy from us"}),e.jsx("div",{className:"flex overflow-x-auto",children:e.jsx("div",{className:"mx-auto flex space-x-12 px-4 py-3 whitespace-nowrap sm:px-6 lg:space-x-24 lg:px-8",children:A.map(s=>e.jsxs("div",{className:"flex items-center text-sm font-medium text-indigo-600",children:[e.jsx(s.icon,{"aria-hidden":"true",className:"mr-2 size-6 flex-none"}),e.jsx("p",{children:s.name})]},s.name))})})]})}const O=`import { CalendarIcon, CheckBadgeIcon, TruckIcon } from '@heroicons/react/24/outline'

const incentives = [
  { name: 'Free, contactless delivery', icon: TruckIcon },
  { name: 'No questions asked returns', icon: CheckBadgeIcon },
  { name: '2-year warranty', icon: CalendarIcon },
]

export default function Example() {
  return (
    <div className="bg-white">
      <h2 className="sr-only">Why you should buy from us</h2>
      <div className="flex overflow-x-auto">
        <div className="mx-auto flex space-x-12 px-4 py-3 whitespace-nowrap sm:px-6 lg:space-x-24 lg:px-8">
          {incentives.map((incentive) => (
            <div key={incentive.name} className="flex items-center text-sm font-medium text-indigo-600">
              <incentive.icon aria-hidden="true" className="mr-2 size-6 flex-none" />
              <p>{incentive.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
`,H=()=>{const s=[{id:"01",name:"3-column with illustrations and split header",component:e.jsx(p,{}),raw:h},{id:"02",name:"4-column with illustrations",component:e.jsx(u,{}),raw:v},{id:"03",name:"3-column with illustrations and header",component:e.jsx(w,{}),raw:f},{id:"04",name:"3-column with illustrations and centered text",component:e.jsx(j,{}),raw:k},{id:"05",name:"3-column with illustrations and heading",component:e.jsx(S,{}),raw:I},{id:"06",name:"2x2 grid with illustrations",component:e.jsx(E,{}),raw:C},{id:"07",name:"3-column with icons and supporting text",component:e.jsx(T,{}),raw:z},{id:"08",name:"3-column with icons",component:e.jsx($,{}),raw:O}];return e.jsx("div",{className:"space-y-10 pb-20",children:s.map(t=>e.jsxs("section",{children:[e.jsxs("h2",{className:"mb-4 text-lg font-bold text-gray-800",children:[t.id,". ",t.name]}),e.jsx(m,{name:t.name,code:t.raw,children:t.component})]},t.id))})};export{H as default};
