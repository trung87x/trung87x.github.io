import React from "react";
import {
  ShoppingBagIcon,
  StarIcon,
  TrashIcon,
  PlusIcon,
  MinusIcon,
  CreditCardIcon,
} from "@heroicons/react/24/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";

export default function EcommerceTrack() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          Ecommerce Specialist Track
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Focus on Conversion, Product Presentation, and Gallery Layouts.
        </p>
      </div>

      <div className="space-y-24">
        {/* ================= LEVEL 1 ================= */}
        <section>
          <div className="border-l-4 border-pink-500 pl-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Level 1: Product Presentation
            </h2>
            <p className="mt-2 text-gray-600">
              Focus: Images, Ratings, Price Typography, and Grid Layouts.
            </p>
          </div>

          <div className="mt-10 space-y-12">
            {/* Exercise 1: Product Card */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center justify-between border-b border-gray-100 pb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Exercise 1: Product Card
                </h3>
                <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                  Completed
                </span>
              </div>
              <div className="prose prose-sm mb-4 text-gray-500">
                <p>
                  Create a versatile Product Card component containing:
                  <br />
                  1. Product Image (with hover zoom or color change effect).
                  <br />
                  2. Product Name and Color/Variant subtitle.
                  <br />
                  3. Price (bold) and Star Rating (optional).
                </p>
              </div>

              <div className="bg-gray-50 p-8 shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl">
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                  {[
                    {
                      id: 1,
                      name: "Basic Tee",
                      href: "#",
                      imageSrc:
                        "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=800",
                      imageAlt: "Front of men's Basic Tee in black.",
                      price: "$35",
                      color: "Black",
                    },
                    {
                      id: 2,
                      name: "Basic Tee",
                      href: "#",
                      imageSrc:
                        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800",
                      imageAlt: "Front of men's Basic Tee in white.",
                      price: "$35",
                      color: "Aspen White",
                    },
                    {
                      id: 3,
                      name: "Basic Tee",
                      href: "#",
                      imageSrc:
                        "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=800",
                      imageAlt: "Front of men's Basic Tee in dark gray.",
                      price: "$35",
                      color: "Charcoal",
                    },
                    {
                      id: 4,
                      name: "Artwork Tee",
                      href: "#",
                      imageSrc:
                        "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?auto=format&fit=crop&q=80&w=800",
                      imageAlt: "Front of men's Artwork Tee in peach.",
                      price: "$42",
                      color: "Iso Dots",
                    },
                  ].map((product) => (
                    <div key={product.id} className="group relative">
                      <div className="aspect-h-1 aspect-w-1 lg:aspect-none w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                        <img
                          src={product.imageSrc}
                          alt={product.imageAlt}
                          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        />
                      </div>
                      <div className="mt-4 flex justify-between">
                        <div>
                          <h3 className="text-sm text-gray-700">
                            <a href={product.href}>
                              <span
                                aria-hidden="true"
                                className="absolute inset-0"
                              />
                              {product.name}
                            </a>
                          </h3>
                          <p className="mt-1 text-sm text-gray-500">
                            {product.color}
                          </p>
                        </div>
                        <p className="text-sm font-medium text-gray-900">
                          {product.price}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Exercise 2: Product Overview */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center justify-between border-b border-gray-100 pb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Exercise 2: Product Overview (Gallery)
                </h3>
                <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                  Completed
                </span>
              </div>
              <div className="prose prose-sm mb-4 text-gray-500">
                <p>
                  Build a Product Detail section with:
                  <br />
                  1. <strong>Image Gallery</strong>: A highlight image grid (one
                  big, several small).
                  <br />
                  2. <strong>Product Info</strong>: Title, Price rating stars.
                  <br />
                  3. <strong>Color/Size Picker</strong>: Interactive radio
                  buttons.
                  <br />
                  4. <strong>Add to Bag</strong> button.
                </p>
              </div>

              <div className="bg-white p-6 shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:p-10">
                <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                  {/* Image Gallery */}
                  <div className="flex flex-col-reverse">
                    <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
                      <div className="grid grid-cols-4 gap-6">
                        {[1, 2, 3, 4].map((idx) => (
                          <div
                            key={idx}
                            className="relative flex h-24 items-center justify-center rounded-md bg-gray-100 text-gray-300"
                          >
                            <span className="text-xs">Image {idx}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="aspect-w-1 aspect-h-1 flex w-full items-center justify-center rounded-lg bg-gray-100 text-gray-400">
                      <span className="text-lg">Main Product Image</span>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                      Basic Tee 6-Pack
                    </h1>
                    <div className="mt-3">
                      <h2 className="sr-only">Product information</h2>
                      <p className="text-3xl tracking-tight text-gray-900">
                        $192
                      </p>
                    </div>

                    <div className="mt-3">
                      <div className="flex items-center">
                        <div className="flex items-center">
                          {[0, 1, 2, 3, 4].map((rating) => (
                            <StarIconSolid
                              key={rating}
                              className="h-5 w-5 flex-shrink-0 text-yellow-400"
                              aria-hidden="true"
                            />
                          ))}
                        </div>
                        <p className="sr-only">5 out of 5 stars</p>
                      </div>
                    </div>

                    <div className="mt-6">
                      <h3 className="sr-only">Description</h3>
                      <p className="text-base text-gray-700">
                        The Basic Tee 6-Pack allows you to fully express your
                        vibrant personality with three grayscale options.
                        Feeling adventurous? Put on a heather gray tee. Want to
                        be a trendsetter? Try our exclusive colorway: "Black".
                        Need to add an extra pop of color to your outfit? Our
                        white tee has you covered.
                      </p>
                    </div>

                    <form className="mt-6">
                      {/* Colors */}
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">
                          Color
                        </h3>
                        <div className="mt-2 flex items-center space-x-3">
                          {[
                            "bg-white border-gray-300",
                            "bg-gray-500 border-transparent",
                            "bg-black border-transparent",
                          ].map((color, idx) => (
                            <div
                              key={idx}
                              className={`h-8 w-8 rounded-full border ${color} cursor-pointer ring-2 ring-indigo-500 ring-offset-2 focus:outline-none`}
                            ></div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-10 flex">
                        <button
                          type="button"
                          className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none sm:w-full"
                        >
                          Add to bag
                        </button>
                        <button
                          type="button"
                          className="ml-4 flex items-center justify-center rounded-md px-3 py-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                        >
                          <span className="sr-only">Add to favorites</span>
                          <StarIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= LEVEL 2 ================= */}
        <section>
          <div className="border-l-4 border-pink-500 pl-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Level 2: The Shopping Flow
            </h2>
            <p className="mt-2 text-gray-600">
              Focus: Lists, Order Summaries, Form Layouts.
            </p>
          </div>

          <div className="mt-10 space-y-12">
            {/* Exercise 1: Shopping Cart */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center justify-between border-b border-gray-100 pb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Exercise 1: Shopping Cart
                </h3>
                <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                  Completed
                </span>
              </div>
              <div className="prose prose-sm mb-4 text-gray-500">
                <p>
                  Create a slide-over/modal or page section for the Cart
                  containing:
                  <br />
                  1. <strong>Product List</strong>: Image, Info, Qty Selector,
                  Remove button.
                  <br />
                  2. <strong>Order Summary</strong>: Subtotal only for now.
                  <br />
                  3. "Checkout" CTA.
                </p>
              </div>

              <div className="bg-white p-6 shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl">
                <div className="mx-auto max-w-2xl">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Shopping Cart
                  </h2>
                  <form className="mt-12">
                    <section aria-labelledby="cart-heading">
                      <h2 id="cart-heading" className="sr-only">
                        Items in your shopping cart
                      </h2>
                      <ul
                        role="list"
                        className="divide-y divide-gray-200 border-t border-b border-gray-200"
                      >
                        {[
                          {
                            id: 1,
                            name: "Basic Tee",
                            href: "#",
                            price: "$32.00",
                            color: "Sienna",
                            inStock: true,
                            size: "Large",
                            imageSrc:
                              "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&q=80&w=800",
                            imageAlt: "Front of men's Basic Tee in sienna.",
                          },
                          {
                            id: 2,
                            name: "Basic Tee",
                            href: "#",
                            price: "$32.00",
                            color: "Black",
                            inStock: false,
                            size: "Large",
                            imageSrc:
                              "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=800",
                            imageAlt: "Front of men's Basic Tee in black.",
                          },
                        ].map((product) => (
                          <li key={product.id} className="flex py-6">
                            <div className="flex-shrink-0">
                              <img
                                src={product.imageSrc}
                                alt={product.imageAlt}
                                className="h-24 w-24 rounded-md object-cover object-center sm:h-32 sm:w-32"
                              />
                            </div>
                            <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                              <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                                <div>
                                  <div className="flex justify-between">
                                    <h3 className="text-sm">
                                      <a
                                        href={product.href}
                                        className="font-medium text-gray-700 hover:text-gray-800"
                                      >
                                        {product.name}
                                      </a>
                                    </h3>
                                  </div>
                                  <div className="mt-1 flex text-sm">
                                    <p className="text-gray-500">
                                      {product.color}
                                    </p>
                                    {product.size ? (
                                      <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">
                                        {product.size}
                                      </p>
                                    ) : null}
                                  </div>
                                  <p className="mt-1 text-sm font-medium text-gray-900">
                                    {product.price}
                                  </p>
                                </div>

                                <div className="mt-4 sm:mt-0 sm:pr-9">
                                  <label
                                    htmlFor={`quantity-${product.id}`}
                                    className="sr-only"
                                  >
                                    Quantity, {product.name}
                                  </label>
                                  <select
                                    id={`quantity-${product.id}`}
                                    name={`quantity-${product.id}`}
                                    className="max-w-full rounded-md border border-gray-300 py-1.5 text-left text-base leading-5 font-medium text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none sm:text-sm"
                                  >
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                  </select>
                                  <div className="absolute top-0 right-0">
                                    <button
                                      type="button"
                                      className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500"
                                    >
                                      <span className="sr-only">Remove</span>
                                      <TrashIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <p className="mt-4 flex space-x-2 text-sm text-gray-700">
                                {product.inStock ? (
                                  <CheckIcon
                                    className="h-5 w-5 flex-shrink-0 text-green-500"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <span className="h-5 w-5 flex-shrink-0 text-gray-300">
                                    ?
                                  </span>
                                )}
                                <span>
                                  {product.inStock
                                    ? "In stock"
                                    : "Ships in 3-4 weeks"}
                                </span>
                              </p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </section>

                    <section
                      aria-labelledby="summary-heading"
                      className="mt-10"
                    >
                      <h2 id="summary-heading" className="sr-only">
                        Order summary
                      </h2>
                      <div className="rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:p-8">
                        <h2 className="sr-only">Order summary</h2>
                        <div className="flow-root">
                          <dl className="-my-4 divide-y divide-gray-200 text-sm">
                            <div className="flex items-center justify-between py-4">
                              <dt className="text-gray-600">Subtotal</dt>
                              <dd className="font-medium text-gray-900">
                                $64.00
                              </dd>
                            </div>
                            <div className="flex items-center justify-between py-4">
                              <dt className="text-gray-600">Shipping</dt>
                              <dd className="font-medium text-gray-900">
                                $5.00
                              </dd>
                            </div>
                            <div className="flex items-center justify-between py-4">
                              <dt className="text-gray-600">Tax</dt>
                              <dd className="font-medium text-gray-900">
                                $5.52
                              </dd>
                            </div>
                            <div className="flex items-center justify-between py-4">
                              <dt className="text-base font-medium text-gray-900">
                                Order total
                              </dt>
                              <dd className="text-base font-medium text-gray-900">
                                $74.52
                              </dd>
                            </div>
                          </dl>
                        </div>
                      </div>
                      <div className="mt-10">
                        <button
                          type="submit"
                          className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 focus:outline-none"
                        >
                          Checkout
                        </button>
                      </div>
                    </section>
                  </form>
                </div>
              </div>
            </div>

            {/* Exercise 2: Checkout Page */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center justify-between border-b border-gray-100 pb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Exercise 2: Checkout Page
                </h3>
                <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                  Completed
                </span>
              </div>
              <div className="prose prose-sm mb-4 text-gray-500">
                <p>
                  Build a generic Checkout form layout:
                  <br />
                  1. <strong>Contact Info</strong> (Email).
                  <br />
                  2. <strong>Shipping Address</strong> (Inputs for Address,
                  City, State, ZIP).
                  <br />
                  3. <strong>Payment Details</strong> (Card number, CVC).
                  <br />
                  4. <strong>Confirm Order</strong> button.
                </p>
              </div>
              <div className="bg-gray-50 p-6 shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl">
                <div className="mx-auto max-w-2xl">
                  <h2 className="text-lg font-medium text-gray-900">
                    Contact information
                  </h2>
                  <div className="mt-4">
                    <label
                      htmlFor="email-address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <div className="mt-1">
                      <input
                        type="email"
                        id="email-address"
                        name="email-address"
                        autoComplete="email"
                        className="block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="mt-10 border-t border-gray-200 pt-10">
                    <h2 className="text-lg font-medium text-gray-900">
                      Shipping information
                    </h2>
                    <div className="mt-4 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="address"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Address
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="address"
                            id="address"
                            autoComplete="street-address"
                            className="block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="city"
                          className="block text-sm font-medium text-gray-700"
                        >
                          City
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="city"
                            id="city"
                            className="block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="country"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Country
                        </label>
                        <div className="mt-1">
                          <select
                            id="country"
                            name="country"
                            autoComplete="country-name"
                            className="block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          >
                            <option>United States</option>
                            <option>Canada</option>
                            <option>Mexico</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="region"
                          className="block text-sm font-medium text-gray-700"
                        >
                          State / Province
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="region"
                            id="region"
                            className="block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="postal-code"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Postal code
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="postal-code"
                            id="postal-code"
                            autoComplete="postal-code"
                            className="block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 border-t border-gray-200 pt-10">
                    <h2 className="text-lg font-medium text-gray-900">
                      Payment
                    </h2>
                    <div className="mt-6 grid grid-cols-4 gap-x-4 gap-y-6">
                      <div className="col-span-4">
                        <label
                          htmlFor="card-number"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Card number
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            id="card-number"
                            name="card-number"
                            autoComplete="cc-number"
                            className="block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
                      <div className="col-span-2">
                        <label
                          htmlFor="expiration-date"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Expiration date (MM/YY)
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="expiration-date"
                            id="expiration-date"
                            autoComplete="cc-exp"
                            className="block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
                      <div className="col-span-2">
                        <label
                          htmlFor="cvc"
                          className="block text-sm font-medium text-gray-700"
                        >
                          CVC
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="cvc"
                            id="cvc"
                            autoComplete="csc"
                            className="block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 flex items-center justify-end border-t border-gray-200 pt-6">
                    <button
                      type="submit"
                      className="rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"
                    >
                      Confirm order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function CheckIcon(props) {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}
