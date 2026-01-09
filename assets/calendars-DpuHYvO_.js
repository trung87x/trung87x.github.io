import{j as e,r as m}from"./index-CvCVbuS9.js";import{P as z}from"./PreviewWrapper-TzFvRoPZ.js";import{F as o}from"./ChevronLeftIcon-CiE3_yPf.js";import{F as c}from"./ChevronRightIcon-Bscp0ek7.js";import{F as I}from"./CalendarIcon-CHctYRc0.js";import{F as S}from"./MapPinIcon-BLdTv-Au.js";import{F as u}from"./EllipsisHorizontalIcon-CxVgQHpz.js";import{l as d,f as n,y as l,g as s}from"./menu-DqpGavi0.js";import{F as h}from"./ChevronDownIcon-CpWKsJQ8.js";import{F as P}from"./ClockIcon-ChOLlvBW.js";import{F as T}from"./EllipsisVerticalIcon-DspHqTXt.js";import"./floating-CjydGm1Z.js";import"./element-movement-BT6A7GGi.js";import"./bugs-qQ_SbDk4.js";import"./use-resolve-button-type-J0J8N5g4.js";import"./use-text-value-CB9rzUUM.js";import"./use-tree-walker-_f7mgbza.js";import"./label-CY_Q6YdE.js";const A=[{id:1,date:"January 10th, 2022",time:"5:00 PM",datetime:"2022-01-10T17:00",name:"Leslie Alexander",imageUrl:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",location:"Starbucks"}],g=[{date:"2021-12-27"},{date:"2021-12-28"},{date:"2021-12-29"},{date:"2021-12-30"},{date:"2021-12-31"},{date:"2022-01-01",isCurrentMonth:!0},{date:"2022-01-02",isCurrentMonth:!0},{date:"2022-01-03",isCurrentMonth:!0},{date:"2022-01-04",isCurrentMonth:!0},{date:"2022-01-05",isCurrentMonth:!0},{date:"2022-01-06",isCurrentMonth:!0},{date:"2022-01-07",isCurrentMonth:!0},{date:"2022-01-08",isCurrentMonth:!0},{date:"2022-01-09",isCurrentMonth:!0},{date:"2022-01-10",isCurrentMonth:!0},{date:"2022-01-11",isCurrentMonth:!0},{date:"2022-01-12",isCurrentMonth:!0,isToday:!0},{date:"2022-01-13",isCurrentMonth:!0},{date:"2022-01-14",isCurrentMonth:!0},{date:"2022-01-15",isCurrentMonth:!0},{date:"2022-01-16",isCurrentMonth:!0},{date:"2022-01-17",isCurrentMonth:!0},{date:"2022-01-18",isCurrentMonth:!0},{date:"2022-01-19",isCurrentMonth:!0},{date:"2022-01-20",isCurrentMonth:!0},{date:"2022-01-21",isCurrentMonth:!0},{date:"2022-01-22",isCurrentMonth:!0,isSelected:!0},{date:"2022-01-23",isCurrentMonth:!0},{date:"2022-01-24",isCurrentMonth:!0},{date:"2022-01-25",isCurrentMonth:!0},{date:"2022-01-26",isCurrentMonth:!0},{date:"2022-01-27",isCurrentMonth:!0},{date:"2022-01-28",isCurrentMonth:!0},{date:"2022-01-29",isCurrentMonth:!0},{date:"2022-01-30",isCurrentMonth:!0},{date:"2022-01-31",isCurrentMonth:!0},{date:"2022-02-01"},{date:"2022-02-02"},{date:"2022-02-03"},{date:"2022-02-04"},{date:"2022-02-05"},{date:"2022-02-06"}];function b(...t){return t.filter(Boolean).join(" ")}function D(){return e.jsxs("div",{children:[e.jsx("h2",{className:"text-base font-semibold text-gray-900",children:"Upcoming meetings"}),e.jsxs("div",{className:"lg:grid lg:grid-cols-12 lg:gap-x-16",children:[e.jsxs("div",{className:"mt-10 text-center lg:col-start-8 lg:col-end-13 lg:row-start-1 lg:mt-9 xl:col-start-9",children:[e.jsxs("div",{className:"flex items-center text-gray-900",children:[e.jsxs("button",{type:"button",className:"-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500",children:[e.jsx("span",{className:"sr-only",children:"Previous month"}),e.jsx(o,{className:"size-5","aria-hidden":"true"})]}),e.jsx("div",{className:"flex-auto text-sm font-semibold",children:"January"}),e.jsxs("button",{type:"button",className:"-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500",children:[e.jsx("span",{className:"sr-only",children:"Next month"}),e.jsx(c,{className:"size-5","aria-hidden":"true"})]})]}),e.jsxs("div",{className:"mt-6 grid grid-cols-7 text-xs/6 text-gray-500",children:[e.jsx("div",{children:"M"}),e.jsx("div",{children:"T"}),e.jsx("div",{children:"W"}),e.jsx("div",{children:"T"}),e.jsx("div",{children:"F"}),e.jsx("div",{children:"S"}),e.jsx("div",{children:"S"})]}),e.jsx("div",{className:"isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm ring-1 shadow-sm ring-gray-200",children:g.map((t,a)=>e.jsx("button",{type:"button",className:b("py-1.5 hover:bg-gray-100 focus:z-10",t.isCurrentMonth?"bg-white":"bg-gray-50",(t.isSelected||t.isToday)&&"font-semibold",t.isSelected&&"text-white",!t.isSelected&&t.isCurrentMonth&&!t.isToday&&"text-gray-900",!t.isSelected&&!t.isCurrentMonth&&!t.isToday&&"text-gray-400",t.isToday&&!t.isSelected&&"text-indigo-600",a===0&&"rounded-tl-lg",a===6&&"rounded-tr-lg",a===g.length-7&&"rounded-bl-lg",a===g.length-1&&"rounded-br-lg"),children:e.jsx("time",{dateTime:t.date,className:b("mx-auto flex size-7 items-center justify-center rounded-full",t.isSelected&&t.isToday&&"bg-indigo-600",t.isSelected&&!t.isToday&&"bg-gray-900"),children:t.date.split("-").pop().replace(/^0/,"")})},t.date))}),e.jsx("button",{type:"button",className:"mt-8 w-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"Add event"})]}),e.jsx("ol",{className:"mt-4 divide-y divide-gray-100 text-sm/6 lg:col-span-7 xl:col-span-8",children:A.map(t=>e.jsxs("li",{className:"relative flex gap-x-6 py-6 xl:static",children:[e.jsx("img",{src:t.imageUrl,alt:"",className:"size-14 flex-none rounded-full"}),e.jsxs("div",{className:"flex-auto",children:[e.jsx("h3",{className:"pr-10 font-semibold text-gray-900 xl:pr-0",children:t.name}),e.jsxs("dl",{className:"mt-2 flex flex-col text-gray-500 xl:flex-row",children:[e.jsxs("div",{className:"flex items-start gap-x-3",children:[e.jsxs("dt",{className:"mt-0.5",children:[e.jsx("span",{className:"sr-only",children:"Date"}),e.jsx(I,{className:"size-5 text-gray-400","aria-hidden":"true"})]}),e.jsx("dd",{children:e.jsxs("time",{dateTime:t.datetime,children:[t.date," at ",t.time]})})]}),e.jsxs("div",{className:"mt-2 flex items-start gap-x-3 xl:mt-0 xl:ml-3.5 xl:border-l xl:border-gray-400/50 xl:pl-3.5",children:[e.jsxs("dt",{className:"mt-0.5",children:[e.jsx("span",{className:"sr-only",children:"Location"}),e.jsx(S,{className:"size-5 text-gray-400","aria-hidden":"true"})]}),e.jsx("dd",{children:t.location})]})]})]}),e.jsxs(d,{as:"div",className:"absolute top-6 right-0 xl:relative xl:top-auto xl:right-auto xl:self-center",children:[e.jsx("div",{children:e.jsxs(n,{className:"-m-2 flex items-center rounded-full p-2 text-gray-500 hover:text-gray-600",children:[e.jsx("span",{className:"sr-only",children:"Open options"}),e.jsx(u,{className:"size-5","aria-hidden":"true"})]})}),e.jsx(l,{transition:!0,className:"absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in",children:e.jsxs("div",{className:"py-1",children:[e.jsx(s,{children:e.jsx("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden",children:"Edit"})}),e.jsx(s,{children:e.jsx("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden",children:"Cancel"})})]})})]})]},t.id))})]})]})}const R=`import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  EllipsisHorizontalIcon,
  MapPinIcon,
} from '@heroicons/react/20/solid'

const meetings = [
  {
    id: 1,
    date: 'January 10th, 2022',
    time: '5:00 PM',
    datetime: '2022-01-10T17:00',
    name: 'Leslie Alexander',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    location: 'Starbucks',
  },
  // More meetings...
]
const days = [
  { date: '2021-12-27' },
  { date: '2021-12-28' },
  { date: '2021-12-29' },
  { date: '2021-12-30' },
  { date: '2021-12-31' },
  { date: '2022-01-01', isCurrentMonth: true },
  { date: '2022-01-02', isCurrentMonth: true },
  { date: '2022-01-03', isCurrentMonth: true },
  { date: '2022-01-04', isCurrentMonth: true },
  { date: '2022-01-05', isCurrentMonth: true },
  { date: '2022-01-06', isCurrentMonth: true },
  { date: '2022-01-07', isCurrentMonth: true },
  { date: '2022-01-08', isCurrentMonth: true },
  { date: '2022-01-09', isCurrentMonth: true },
  { date: '2022-01-10', isCurrentMonth: true },
  { date: '2022-01-11', isCurrentMonth: true },
  { date: '2022-01-12', isCurrentMonth: true, isToday: true },
  { date: '2022-01-13', isCurrentMonth: true },
  { date: '2022-01-14', isCurrentMonth: true },
  { date: '2022-01-15', isCurrentMonth: true },
  { date: '2022-01-16', isCurrentMonth: true },
  { date: '2022-01-17', isCurrentMonth: true },
  { date: '2022-01-18', isCurrentMonth: true },
  { date: '2022-01-19', isCurrentMonth: true },
  { date: '2022-01-20', isCurrentMonth: true },
  { date: '2022-01-21', isCurrentMonth: true },
  { date: '2022-01-22', isCurrentMonth: true, isSelected: true },
  { date: '2022-01-23', isCurrentMonth: true },
  { date: '2022-01-24', isCurrentMonth: true },
  { date: '2022-01-25', isCurrentMonth: true },
  { date: '2022-01-26', isCurrentMonth: true },
  { date: '2022-01-27', isCurrentMonth: true },
  { date: '2022-01-28', isCurrentMonth: true },
  { date: '2022-01-29', isCurrentMonth: true },
  { date: '2022-01-30', isCurrentMonth: true },
  { date: '2022-01-31', isCurrentMonth: true },
  { date: '2022-02-01' },
  { date: '2022-02-02' },
  { date: '2022-02-03' },
  { date: '2022-02-04' },
  { date: '2022-02-05' },
  { date: '2022-02-06' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div>
      <h2 className="text-base font-semibold text-gray-900">Upcoming meetings</h2>
      <div className="lg:grid lg:grid-cols-12 lg:gap-x-16">
        <div className="mt-10 text-center lg:col-start-8 lg:col-end-13 lg:row-start-1 lg:mt-9 xl:col-start-9">
          <div className="flex items-center text-gray-900">
            <button
              type="button"
              className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Previous month</span>
              <ChevronLeftIcon className="size-5" aria-hidden="true" />
            </button>
            <div className="flex-auto text-sm font-semibold">January</div>
            <button
              type="button"
              className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Next month</span>
              <ChevronRightIcon className="size-5" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 grid grid-cols-7 text-xs/6 text-gray-500">
            <div>M</div>
            <div>T</div>
            <div>W</div>
            <div>T</div>
            <div>F</div>
            <div>S</div>
            <div>S</div>
          </div>
          <div className="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm ring-1 shadow-sm ring-gray-200">
            {days.map((day, dayIdx) => (
              <button
                key={day.date}
                type="button"
                className={classNames(
                  'py-1.5 hover:bg-gray-100 focus:z-10',
                  day.isCurrentMonth ? 'bg-white' : 'bg-gray-50',
                  (day.isSelected || day.isToday) && 'font-semibold',
                  day.isSelected && 'text-white',
                  !day.isSelected && day.isCurrentMonth && !day.isToday && 'text-gray-900',
                  !day.isSelected && !day.isCurrentMonth && !day.isToday && 'text-gray-400',
                  day.isToday && !day.isSelected && 'text-indigo-600',
                  dayIdx === 0 && 'rounded-tl-lg',
                  dayIdx === 6 && 'rounded-tr-lg',
                  dayIdx === days.length - 7 && 'rounded-bl-lg',
                  dayIdx === days.length - 1 && 'rounded-br-lg',
                )}
              >
                <time
                  dateTime={day.date}
                  className={classNames(
                    'mx-auto flex size-7 items-center justify-center rounded-full',
                    day.isSelected && day.isToday && 'bg-indigo-600',
                    day.isSelected && !day.isToday && 'bg-gray-900',
                  )}
                >
                  {day.date.split('-').pop().replace(/^0/, '')}
                </time>
              </button>
            ))}
          </div>
          <button
            type="button"
            className="mt-8 w-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add event
          </button>
        </div>
        <ol className="mt-4 divide-y divide-gray-100 text-sm/6 lg:col-span-7 xl:col-span-8">
          {meetings.map((meeting) => (
            <li key={meeting.id} className="relative flex gap-x-6 py-6 xl:static">
              <img src={meeting.imageUrl} alt="" className="size-14 flex-none rounded-full" />
              <div className="flex-auto">
                <h3 className="pr-10 font-semibold text-gray-900 xl:pr-0">{meeting.name}</h3>
                <dl className="mt-2 flex flex-col text-gray-500 xl:flex-row">
                  <div className="flex items-start gap-x-3">
                    <dt className="mt-0.5">
                      <span className="sr-only">Date</span>
                      <CalendarIcon className="size-5 text-gray-400" aria-hidden="true" />
                    </dt>
                    <dd>
                      <time dateTime={meeting.datetime}>
                        {meeting.date} at {meeting.time}
                      </time>
                    </dd>
                  </div>
                  <div className="mt-2 flex items-start gap-x-3 xl:mt-0 xl:ml-3.5 xl:border-l xl:border-gray-400/50 xl:pl-3.5">
                    <dt className="mt-0.5">
                      <span className="sr-only">Location</span>
                      <MapPinIcon className="size-5 text-gray-400" aria-hidden="true" />
                    </dt>
                    <dd>{meeting.location}</dd>
                  </div>
                </dl>
              </div>
              <Menu as="div" className="absolute top-6 right-0 xl:relative xl:top-auto xl:right-auto xl:self-center">
                <div>
                  <MenuButton className="-m-2 flex items-center rounded-full p-2 text-gray-500 hover:text-gray-600">
                    <span className="sr-only">Open options</span>
                    <EllipsisHorizontalIcon className="size-5" aria-hidden="true" />
                  </MenuButton>
                </div>

                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                >
                  <div className="py-1">
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                      >
                        Edit
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                      >
                        Cancel
                      </a>
                    </MenuItem>
                  </div>
                </MenuItems>
              </Menu>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
`,v=[{date:"2021-12-27",events:[]},{date:"2021-12-28",events:[]},{date:"2021-12-29",events:[]},{date:"2021-12-30",events:[]},{date:"2021-12-31",events:[]},{date:"2022-01-01",isCurrentMonth:!0,events:[]},{date:"2022-01-02",isCurrentMonth:!0,events:[]},{date:"2022-01-03",isCurrentMonth:!0,events:[{id:1,name:"Design review",time:"10AM",datetime:"2022-01-03T10:00",href:"#"},{id:2,name:"Sales meeting",time:"2PM",datetime:"2022-01-03T14:00",href:"#"}]},{date:"2022-01-04",isCurrentMonth:!0,events:[]},{date:"2022-01-05",isCurrentMonth:!0,events:[]},{date:"2022-01-06",isCurrentMonth:!0,events:[]},{date:"2022-01-07",isCurrentMonth:!0,events:[{id:3,name:"Date night",time:"6PM",datetime:"2022-01-08T18:00",href:"#"}]},{date:"2022-01-08",isCurrentMonth:!0,events:[]},{date:"2022-01-09",isCurrentMonth:!0,events:[]},{date:"2022-01-10",isCurrentMonth:!0,events:[]},{date:"2022-01-11",isCurrentMonth:!0,events:[]},{date:"2022-01-12",isCurrentMonth:!0,isToday:!0,events:[{id:6,name:"Sam's birthday party",time:"2PM",datetime:"2022-01-25T14:00",href:"#"}]},{date:"2022-01-13",isCurrentMonth:!0,events:[]},{date:"2022-01-14",isCurrentMonth:!0,events:[]},{date:"2022-01-15",isCurrentMonth:!0,events:[]},{date:"2022-01-16",isCurrentMonth:!0,events:[]},{date:"2022-01-17",isCurrentMonth:!0,events:[]},{date:"2022-01-18",isCurrentMonth:!0,events:[]},{date:"2022-01-19",isCurrentMonth:!0,events:[]},{date:"2022-01-20",isCurrentMonth:!0,events:[]},{date:"2022-01-21",isCurrentMonth:!0,events:[]},{date:"2022-01-22",isCurrentMonth:!0,isSelected:!0,events:[{id:4,name:"Maple syrup museum",time:"3PM",datetime:"2022-01-22T15:00",href:"#"},{id:5,name:"Hockey game",time:"7PM",datetime:"2022-01-22T19:00",href:"#"}]},{date:"2022-01-23",isCurrentMonth:!0,events:[]},{date:"2022-01-24",isCurrentMonth:!0,events:[]},{date:"2022-01-25",isCurrentMonth:!0,events:[]},{date:"2022-01-26",isCurrentMonth:!0,events:[]},{date:"2022-01-27",isCurrentMonth:!0,events:[]},{date:"2022-01-28",isCurrentMonth:!0,events:[]},{date:"2022-01-29",isCurrentMonth:!0,events:[]},{date:"2022-01-30",isCurrentMonth:!0,events:[]},{date:"2022-01-31",isCurrentMonth:!0,events:[]},{date:"2022-02-01",events:[]},{date:"2022-02-02",events:[]},{date:"2022-02-03",events:[]},{date:"2022-02-04",events:[{id:7,name:"Cinema with friends",time:"9PM",datetime:"2022-02-04T21:00",href:"#"}]},{date:"2022-02-05",events:[]},{date:"2022-02-06",events:[]}],N=v.find(t=>t.isSelected);function y(...t){return t.filter(Boolean).join(" ")}function B(){return e.jsxs("div",{className:"lg:flex lg:h-full lg:flex-col",children:[e.jsxs("header",{className:"flex items-center justify-between border-b border-gray-200 px-6 py-4 lg:flex-none",children:[e.jsx("h1",{className:"text-base font-semibold text-gray-900",children:e.jsx("time",{dateTime:"2022-01",children:"January 2022"})}),e.jsxs("div",{className:"flex items-center",children:[e.jsxs("div",{className:"relative flex items-center rounded-md bg-white shadow-xs md:items-stretch",children:[e.jsxs("button",{type:"button",className:"flex h-9 w-12 items-center justify-center rounded-l-md border-y border-l border-gray-300 pr-1 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:pr-0 md:hover:bg-gray-50",children:[e.jsx("span",{className:"sr-only",children:"Previous month"}),e.jsx(o,{className:"size-5","aria-hidden":"true"})]}),e.jsx("button",{type:"button",className:"hidden border-y border-gray-300 px-3.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 focus:relative md:block",children:"Today"}),e.jsx("span",{className:"relative -mx-px h-5 w-px bg-gray-300 md:hidden"}),e.jsxs("button",{type:"button",className:"flex h-9 w-12 items-center justify-center rounded-r-md border-y border-r border-gray-300 pl-1 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:pl-0 md:hover:bg-gray-50",children:[e.jsx("span",{className:"sr-only",children:"Next month"}),e.jsx(c,{className:"size-5","aria-hidden":"true"})]})]}),e.jsxs("div",{className:"hidden md:ml-4 md:flex md:items-center",children:[e.jsxs(d,{as:"div",className:"relative",children:[e.jsxs(n,{type:"button",className:"flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50",children:["Month view",e.jsx(h,{className:"-mr-1 size-5 text-gray-400","aria-hidden":"true"})]}),e.jsx(l,{transition:!0,className:"absolute right-0 z-10 mt-3 w-36 origin-top-right overflow-hidden rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-hidden data-closed:scale-95 data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in",children:e.jsxs("div",{className:"py-1",children:[e.jsx(s,{children:e.jsx("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden",children:"Day view"})}),e.jsx(s,{children:e.jsx("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden",children:"Week view"})}),e.jsx(s,{children:e.jsx("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden",children:"Month view"})}),e.jsx(s,{children:e.jsx("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden",children:"Year view"})})]})})]}),e.jsx("div",{className:"ml-6 h-6 w-px bg-gray-300"}),e.jsx("button",{type:"button",className:"ml-6 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"Add event"})]}),e.jsxs(d,{as:"div",className:"relative ml-6 md:hidden",children:[e.jsxs(n,{className:"-mx-2 flex items-center rounded-full border border-transparent p-2 text-gray-400 hover:text-gray-500",children:[e.jsx("span",{className:"sr-only",children:"Open menu"}),e.jsx(u,{className:"size-5","aria-hidden":"true"})]}),e.jsxs(l,{transition:!0,className:"absolute right-0 z-10 mt-3 w-36 origin-top-right divide-y divide-gray-100 overflow-hidden rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-hidden data-closed:scale-95 data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in",children:[e.jsx("div",{className:"py-1",children:e.jsx(s,{children:e.jsx("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden",children:"Create event"})})}),e.jsx("div",{className:"py-1",children:e.jsx(s,{children:e.jsx("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden",children:"Go to today"})})}),e.jsxs("div",{className:"py-1",children:[e.jsx(s,{children:e.jsx("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden",children:"Day view"})}),e.jsx(s,{children:e.jsx("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden",children:"Week view"})}),e.jsx(s,{children:e.jsx("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden",children:"Month view"})}),e.jsx(s,{children:e.jsx("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden",children:"Year view"})})]})]})]})]})]}),e.jsxs("div",{className:"ring-1 shadow-sm ring-black/5 lg:flex lg:flex-auto lg:flex-col",children:[e.jsxs("div",{className:"grid grid-cols-7 gap-px border-b border-gray-300 bg-gray-200 text-center text-xs/6 font-semibold text-gray-700 lg:flex-none",children:[e.jsxs("div",{className:"bg-white py-2",children:["M",e.jsx("span",{className:"sr-only sm:not-sr-only",children:"on"})]}),e.jsxs("div",{className:"bg-white py-2",children:["T",e.jsx("span",{className:"sr-only sm:not-sr-only",children:"ue"})]}),e.jsxs("div",{className:"bg-white py-2",children:["W",e.jsx("span",{className:"sr-only sm:not-sr-only",children:"ed"})]}),e.jsxs("div",{className:"bg-white py-2",children:["T",e.jsx("span",{className:"sr-only sm:not-sr-only",children:"hu"})]}),e.jsxs("div",{className:"bg-white py-2",children:["F",e.jsx("span",{className:"sr-only sm:not-sr-only",children:"ri"})]}),e.jsxs("div",{className:"bg-white py-2",children:["S",e.jsx("span",{className:"sr-only sm:not-sr-only",children:"at"})]}),e.jsxs("div",{className:"bg-white py-2",children:["S",e.jsx("span",{className:"sr-only sm:not-sr-only",children:"un"})]})]}),e.jsxs("div",{className:"flex bg-gray-200 text-xs/6 text-gray-700 lg:flex-auto",children:[e.jsx("div",{className:"hidden w-full lg:grid lg:grid-cols-7 lg:grid-rows-6 lg:gap-px",children:v.map(t=>e.jsxs("div",{className:y(t.isCurrentMonth?"bg-white":"bg-gray-50 text-gray-500","relative px-3 py-2"),children:[e.jsx("time",{dateTime:t.date,className:t.isToday?"flex size-6 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white":void 0,children:t.date.split("-").pop().replace(/^0/,"")}),t.events.length>0&&e.jsxs("ol",{className:"mt-2",children:[t.events.slice(0,2).map(a=>e.jsx("li",{children:e.jsxs("a",{href:a.href,className:"group flex",children:[e.jsx("p",{className:"flex-auto truncate font-medium text-gray-900 group-hover:text-indigo-600",children:a.name}),e.jsx("time",{dateTime:a.datetime,className:"ml-3 hidden flex-none text-gray-500 group-hover:text-indigo-600 xl:block",children:a.time})]})},a.id)),t.events.length>2&&e.jsxs("li",{className:"text-gray-500",children:["+ ",t.events.length-2," more"]})]})]},t.date))}),e.jsx("div",{className:"isolate grid w-full grid-cols-7 grid-rows-6 gap-px lg:hidden",children:v.map(t=>e.jsxs("button",{type:"button",className:y(t.isCurrentMonth?"bg-white":"bg-gray-50",(t.isSelected||t.isToday)&&"font-semibold",t.isSelected&&"text-white",!t.isSelected&&t.isToday&&"text-indigo-600",!t.isSelected&&t.isCurrentMonth&&!t.isToday&&"text-gray-900",!t.isSelected&&!t.isCurrentMonth&&!t.isToday&&"text-gray-500","flex h-14 flex-col px-3 py-2 hover:bg-gray-100 focus:z-10"),children:[e.jsx("time",{dateTime:t.date,className:y(t.isSelected&&"flex size-6 items-center justify-center rounded-full",t.isSelected&&t.isToday&&"bg-indigo-600",t.isSelected&&!t.isToday&&"bg-gray-900","ml-auto"),children:t.date.split("-").pop().replace(/^0/,"")}),e.jsxs("span",{className:"sr-only",children:[t.events.length," events"]}),t.events.length>0&&e.jsx("span",{className:"-mx-0.5 mt-auto flex flex-wrap-reverse",children:t.events.map(a=>e.jsx("span",{className:"mx-0.5 mb-1 size-1.5 rounded-full bg-gray-400"},a.id))})]},t.date))})]})]}),N?.events.length>0&&e.jsx("div",{className:"px-4 py-10 sm:px-6 lg:hidden",children:e.jsx("ol",{className:"divide-y divide-gray-100 overflow-hidden rounded-lg bg-white text-sm ring-1 shadow-sm ring-black/5",children:N.events.map(t=>e.jsxs("li",{className:"group flex p-4 pr-6 focus-within:bg-gray-50 hover:bg-gray-50",children:[e.jsxs("div",{className:"flex-auto",children:[e.jsx("p",{className:"font-semibold text-gray-900",children:t.name}),e.jsxs("time",{dateTime:t.datetime,className:"mt-2 flex items-center text-gray-700",children:[e.jsx(P,{className:"mr-2 size-5 text-gray-400","aria-hidden":"true"}),t.time]})]}),e.jsxs("a",{href:t.href,className:"ml-6 flex-none self-center rounded-md bg-white px-3 py-2 font-semibold text-gray-900 opacity-0 ring-1 shadow-xs ring-gray-300 ring-inset group-hover:opacity-100 hover:ring-gray-400 focus:opacity-100",children:["Edit",e.jsxs("span",{className:"sr-only",children:[", ",t.name]})]})]},t.id))})})]})}const E=`import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ClockIcon,
  EllipsisHorizontalIcon,
} from '@heroicons/react/20/solid'

const days = [
  { date: '2021-12-27', events: [] },
  { date: '2021-12-28', events: [] },
  { date: '2021-12-29', events: [] },
  { date: '2021-12-30', events: [] },
  { date: '2021-12-31', events: [] },
  { date: '2022-01-01', isCurrentMonth: true, events: [] },
  { date: '2022-01-02', isCurrentMonth: true, events: [] },
  {
    date: '2022-01-03',
    isCurrentMonth: true,
    events: [
      { id: 1, name: 'Design review', time: '10AM', datetime: '2022-01-03T10:00', href: '#' },
      { id: 2, name: 'Sales meeting', time: '2PM', datetime: '2022-01-03T14:00', href: '#' },
    ],
  },
  { date: '2022-01-04', isCurrentMonth: true, events: [] },
  { date: '2022-01-05', isCurrentMonth: true, events: [] },
  { date: '2022-01-06', isCurrentMonth: true, events: [] },
  {
    date: '2022-01-07',
    isCurrentMonth: true,
    events: [{ id: 3, name: 'Date night', time: '6PM', datetime: '2022-01-08T18:00', href: '#' }],
  },
  { date: '2022-01-08', isCurrentMonth: true, events: [] },
  { date: '2022-01-09', isCurrentMonth: true, events: [] },
  { date: '2022-01-10', isCurrentMonth: true, events: [] },
  { date: '2022-01-11', isCurrentMonth: true, events: [] },
  {
    date: '2022-01-12',
    isCurrentMonth: true,
    isToday: true,
    events: [{ id: 6, name: "Sam's birthday party", time: '2PM', datetime: '2022-01-25T14:00', href: '#' }],
  },
  { date: '2022-01-13', isCurrentMonth: true, events: [] },
  { date: '2022-01-14', isCurrentMonth: true, events: [] },
  { date: '2022-01-15', isCurrentMonth: true, events: [] },
  { date: '2022-01-16', isCurrentMonth: true, events: [] },
  { date: '2022-01-17', isCurrentMonth: true, events: [] },
  { date: '2022-01-18', isCurrentMonth: true, events: [] },
  { date: '2022-01-19', isCurrentMonth: true, events: [] },
  { date: '2022-01-20', isCurrentMonth: true, events: [] },
  { date: '2022-01-21', isCurrentMonth: true, events: [] },
  {
    date: '2022-01-22',
    isCurrentMonth: true,
    isSelected: true,
    events: [
      { id: 4, name: 'Maple syrup museum', time: '3PM', datetime: '2022-01-22T15:00', href: '#' },
      { id: 5, name: 'Hockey game', time: '7PM', datetime: '2022-01-22T19:00', href: '#' },
    ],
  },
  { date: '2022-01-23', isCurrentMonth: true, events: [] },
  { date: '2022-01-24', isCurrentMonth: true, events: [] },
  { date: '2022-01-25', isCurrentMonth: true, events: [] },
  { date: '2022-01-26', isCurrentMonth: true, events: [] },
  { date: '2022-01-27', isCurrentMonth: true, events: [] },
  { date: '2022-01-28', isCurrentMonth: true, events: [] },
  { date: '2022-01-29', isCurrentMonth: true, events: [] },
  { date: '2022-01-30', isCurrentMonth: true, events: [] },
  { date: '2022-01-31', isCurrentMonth: true, events: [] },
  { date: '2022-02-01', events: [] },
  { date: '2022-02-02', events: [] },
  { date: '2022-02-03', events: [] },
  {
    date: '2022-02-04',
    events: [{ id: 7, name: 'Cinema with friends', time: '9PM', datetime: '2022-02-04T21:00', href: '#' }],
  },
  { date: '2022-02-05', events: [] },
  { date: '2022-02-06', events: [] },
]
const selectedDay = days.find((day) => day.isSelected)

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="lg:flex lg:h-full lg:flex-col">
      <header className="flex items-center justify-between border-b border-gray-200 px-6 py-4 lg:flex-none">
        <h1 className="text-base font-semibold text-gray-900">
          <time dateTime="2022-01">January 2022</time>
        </h1>
        <div className="flex items-center">
          <div className="relative flex items-center rounded-md bg-white shadow-xs md:items-stretch">
            <button
              type="button"
              className="flex h-9 w-12 items-center justify-center rounded-l-md border-y border-l border-gray-300 pr-1 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:pr-0 md:hover:bg-gray-50"
            >
              <span className="sr-only">Previous month</span>
              <ChevronLeftIcon className="size-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              className="hidden border-y border-gray-300 px-3.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 focus:relative md:block"
            >
              Today
            </button>
            <span className="relative -mx-px h-5 w-px bg-gray-300 md:hidden" />
            <button
              type="button"
              className="flex h-9 w-12 items-center justify-center rounded-r-md border-y border-r border-gray-300 pl-1 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:pl-0 md:hover:bg-gray-50"
            >
              <span className="sr-only">Next month</span>
              <ChevronRightIcon className="size-5" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden md:ml-4 md:flex md:items-center">
            <Menu as="div" className="relative">
              <MenuButton
                type="button"
                className="flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50"
              >
                Month view
                <ChevronDownIcon className="-mr-1 size-5 text-gray-400" aria-hidden="true" />
              </MenuButton>

              <MenuItems
                transition
                className="absolute right-0 z-10 mt-3 w-36 origin-top-right overflow-hidden rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-hidden data-closed:scale-95 data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <div className="py-1">
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Day view
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Week view
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Month view
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Year view
                    </a>
                  </MenuItem>
                </div>
              </MenuItems>
            </Menu>
            <div className="ml-6 h-6 w-px bg-gray-300" />
            <button
              type="button"
              className="ml-6 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add event
            </button>
          </div>
          <Menu as="div" className="relative ml-6 md:hidden">
            <MenuButton className="-mx-2 flex items-center rounded-full border border-transparent p-2 text-gray-400 hover:text-gray-500">
              <span className="sr-only">Open menu</span>
              <EllipsisHorizontalIcon className="size-5" aria-hidden="true" />
            </MenuButton>

            <MenuItems
              transition
              className="absolute right-0 z-10 mt-3 w-36 origin-top-right divide-y divide-gray-100 overflow-hidden rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-hidden data-closed:scale-95 data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
            >
              <div className="py-1">
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                  >
                    Create event
                  </a>
                </MenuItem>
              </div>
              <div className="py-1">
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                  >
                    Go to today
                  </a>
                </MenuItem>
              </div>
              <div className="py-1">
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                  >
                    Day view
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                  >
                    Week view
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                  >
                    Month view
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                  >
                    Year view
                  </a>
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>
        </div>
      </header>
      <div className="ring-1 shadow-sm ring-black/5 lg:flex lg:flex-auto lg:flex-col">
        <div className="grid grid-cols-7 gap-px border-b border-gray-300 bg-gray-200 text-center text-xs/6 font-semibold text-gray-700 lg:flex-none">
          <div className="bg-white py-2">
            M<span className="sr-only sm:not-sr-only">on</span>
          </div>
          <div className="bg-white py-2">
            T<span className="sr-only sm:not-sr-only">ue</span>
          </div>
          <div className="bg-white py-2">
            W<span className="sr-only sm:not-sr-only">ed</span>
          </div>
          <div className="bg-white py-2">
            T<span className="sr-only sm:not-sr-only">hu</span>
          </div>
          <div className="bg-white py-2">
            F<span className="sr-only sm:not-sr-only">ri</span>
          </div>
          <div className="bg-white py-2">
            S<span className="sr-only sm:not-sr-only">at</span>
          </div>
          <div className="bg-white py-2">
            S<span className="sr-only sm:not-sr-only">un</span>
          </div>
        </div>
        <div className="flex bg-gray-200 text-xs/6 text-gray-700 lg:flex-auto">
          <div className="hidden w-full lg:grid lg:grid-cols-7 lg:grid-rows-6 lg:gap-px">
            {days.map((day) => (
              <div
                key={day.date}
                className={classNames(
                  day.isCurrentMonth ? 'bg-white' : 'bg-gray-50 text-gray-500',
                  'relative px-3 py-2',
                )}
              >
                <time
                  dateTime={day.date}
                  className={
                    day.isToday
                      ? 'flex size-6 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white'
                      : undefined
                  }
                >
                  {day.date.split('-').pop().replace(/^0/, '')}
                </time>
                {day.events.length > 0 && (
                  <ol className="mt-2">
                    {day.events.slice(0, 2).map((event) => (
                      <li key={event.id}>
                        <a href={event.href} className="group flex">
                          <p className="flex-auto truncate font-medium text-gray-900 group-hover:text-indigo-600">
                            {event.name}
                          </p>
                          <time
                            dateTime={event.datetime}
                            className="ml-3 hidden flex-none text-gray-500 group-hover:text-indigo-600 xl:block"
                          >
                            {event.time}
                          </time>
                        </a>
                      </li>
                    ))}
                    {day.events.length > 2 && <li className="text-gray-500">+ {day.events.length - 2} more</li>}
                  </ol>
                )}
              </div>
            ))}
          </div>
          <div className="isolate grid w-full grid-cols-7 grid-rows-6 gap-px lg:hidden">
            {days.map((day) => (
              <button
                key={day.date}
                type="button"
                className={classNames(
                  day.isCurrentMonth ? 'bg-white' : 'bg-gray-50',
                  (day.isSelected || day.isToday) && 'font-semibold',
                  day.isSelected && 'text-white',
                  !day.isSelected && day.isToday && 'text-indigo-600',
                  !day.isSelected && day.isCurrentMonth && !day.isToday && 'text-gray-900',
                  !day.isSelected && !day.isCurrentMonth && !day.isToday && 'text-gray-500',
                  'flex h-14 flex-col px-3 py-2 hover:bg-gray-100 focus:z-10',
                )}
              >
                <time
                  dateTime={day.date}
                  className={classNames(
                    day.isSelected && 'flex size-6 items-center justify-center rounded-full',
                    day.isSelected && day.isToday && 'bg-indigo-600',
                    day.isSelected && !day.isToday && 'bg-gray-900',
                    'ml-auto',
                  )}
                >
                  {day.date.split('-').pop().replace(/^0/, '')}
                </time>
                <span className="sr-only">{day.events.length} events</span>
                {day.events.length > 0 && (
                  <span className="-mx-0.5 mt-auto flex flex-wrap-reverse">
                    {day.events.map((event) => (
                      <span key={event.id} className="mx-0.5 mb-1 size-1.5 rounded-full bg-gray-400" />
                    ))}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
      {selectedDay?.events.length > 0 && (
        <div className="px-4 py-10 sm:px-6 lg:hidden">
          <ol className="divide-y divide-gray-100 overflow-hidden rounded-lg bg-white text-sm ring-1 shadow-sm ring-black/5">
            {selectedDay.events.map((event) => (
              <li key={event.id} className="group flex p-4 pr-6 focus-within:bg-gray-50 hover:bg-gray-50">
                <div className="flex-auto">
                  <p className="font-semibold text-gray-900">{event.name}</p>
                  <time dateTime={event.datetime} className="mt-2 flex items-center text-gray-700">
                    <ClockIcon className="mr-2 size-5 text-gray-400" aria-hidden="true" />
                    {event.time}
                  </time>
                </div>
                <a
                  href={event.href}
                  className="ml-6 flex-none self-center rounded-md bg-white px-3 py-2 font-semibold text-gray-900 opacity-0 ring-1 shadow-xs ring-gray-300 ring-inset group-hover:opacity-100 hover:ring-gray-400 focus:opacity-100"
                >
                  Edit<span className="sr-only">, {event.name}</span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  )
}
`;function W(){const t=m.useRef(null),a=m.useRef(null),i=m.useRef(null);return m.useEffect(()=>{const r=new Date().getHours()*60;t.current.scrollTop=(t.current.scrollHeight-a.current.offsetHeight-i.current.offsetHeight)*r/1440},[]),e.jsxs("div",{className:"flex h-full flex-col",children:[e.jsxs("header",{className:"flex flex-none items-center justify-between border-b border-gray-200 px-6 py-4",children:[e.jsx("h1",{className:"text-base font-semibold text-gray-900",children:e.jsx("time",{dateTime:"2022-01",children:"January 2022"})}),e.jsxs("div",{className:"flex items-center",children:[e.jsxs("div",{className:"relative flex items-center rounded-md bg-white shadow-xs md:items-stretch",children:[e.jsxs("button",{type:"button",className:"flex h-9 w-12 items-center justify-center rounded-l-md border-y border-l border-gray-300 pr-1 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:pr-0 md:hover:bg-gray-50",children:[e.jsx("span",{className:"sr-only",children:"Previous week"}),e.jsx(o,{className:"size-5","aria-hidden":"true"})]}),e.jsx("button",{type:"button",className:"hidden border-y border-gray-300 px-3.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 focus:relative md:block",children:"Today"}),e.jsx("span",{className:"relative -mx-px h-5 w-px bg-gray-300 md:hidden"}),e.jsxs("button",{type:"button",className:"flex h-9 w-12 items-center justify-center rounded-r-md border-y border-r border-gray-300 pl-1 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:pl-0 md:hover:bg-gray-50",children:[e.jsx("span",{className:"sr-only",children:"Next week"}),e.jsx(c,{className:"size-5","aria-hidden":"true"})]})]}),e.jsxs("div",{className:"hidden md:ml-4 md:flex md:items-center",children:[e.jsxs(d,{as:"div",className:"relative",children:[e.jsxs(n,{type:"button",className:"flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50",children:["Week view",e.jsx(h,{className:"-mr-1 size-5 text-gray-400","aria-hidden":"true"})]}),e.jsx(l,{transition:!0,className:"absolute right-0 z-10 mt-3 w-36 origin-top-right overflow-hidden rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-hidden data-closed:scale-95 data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in",children:e.jsxs("div",{className:"py-1",children:[e.jsx(s,{children:e.jsx("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden",children:"Day view"})}),e.jsx(s,{children:e.jsx("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden",children:"Week view"})}),e.jsx(s,{children:e.jsx("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden",children:"Month view"})}),e.jsx(s,{children:e.jsx("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden",children:"Year view"})})]})})]}),e.jsx("div",{className:"ml-6 h-6 w-px bg-gray-300"}),e.jsx("button",{type:"button",className:"ml-6 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"Add event"})]}),e.jsxs(d,{as:"div",className:"relative ml-6 md:hidden",children:[e.jsxs(n,{className:"-mx-2 flex items-center rounded-full border border-transparent p-2 text-gray-400 hover:text-gray-500",children:[e.jsx("span",{className:"sr-only",children:"Open menu"}),e.jsx(u,{className:"size-5","aria-hidden":"true"})]}),e.jsxs(l,{transition:!0,className:"absolute right-0 z-10 mt-3 w-36 origin-top-right divide-y divide-gray-100 overflow-hidden rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-hidden data-closed:scale-95 data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in",children:[e.jsx("div",{className:"py-1",children:e.jsx(s,{children:e.jsx("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden",children:"Create event"})})}),e.jsx("div",{className:"py-1",children:e.jsx(s,{children:e.jsx("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden",children:"Go to today"})})}),e.jsxs("div",{className:"py-1",children:[e.jsx(s,{children:e.jsx("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden",children:"Day view"})}),e.jsx(s,{children:e.jsx("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden",children:"Week view"})}),e.jsx(s,{children:e.jsx("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden",children:"Month view"})}),e.jsx(s,{children:e.jsx("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden",children:"Year view"})})]})]})]})]})]}),e.jsx("div",{ref:t,className:"isolate flex flex-auto flex-col overflow-auto bg-white",children:e.jsxs("div",{style:{width:"165%"},className:"flex max-w-full flex-none flex-col sm:max-w-none md:max-w-full",children:[e.jsxs("div",{ref:a,className:"sticky top-0 z-30 flex-none bg-white ring-1 shadow-sm ring-black/5 sm:pr-8",children:[e.jsxs("div",{className:"grid grid-cols-7 text-sm/6 text-gray-500 sm:hidden",children:[e.jsxs("button",{type:"button",className:"flex flex-col items-center pt-2 pb-3",children:["M ",e.jsx("span",{className:"mt-1 flex size-8 items-center justify-center font-semibold text-gray-900",children:"10"})]}),e.jsxs("button",{type:"button",className:"flex flex-col items-center pt-2 pb-3",children:["T ",e.jsx("span",{className:"mt-1 flex size-8 items-center justify-center font-semibold text-gray-900",children:"11"})]}),e.jsxs("button",{type:"button",className:"flex flex-col items-center pt-2 pb-3",children:["W"," ",e.jsx("span",{className:"mt-1 flex size-8 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white",children:"12"})]}),e.jsxs("button",{type:"button",className:"flex flex-col items-center pt-2 pb-3",children:["T ",e.jsx("span",{className:"mt-1 flex size-8 items-center justify-center font-semibold text-gray-900",children:"13"})]}),e.jsxs("button",{type:"button",className:"flex flex-col items-center pt-2 pb-3",children:["F ",e.jsx("span",{className:"mt-1 flex size-8 items-center justify-center font-semibold text-gray-900",children:"14"})]}),e.jsxs("button",{type:"button",className:"flex flex-col items-center pt-2 pb-3",children:["S ",e.jsx("span",{className:"mt-1 flex size-8 items-center justify-center font-semibold text-gray-900",children:"15"})]}),e.jsxs("button",{type:"button",className:"flex flex-col items-center pt-2 pb-3",children:["S ",e.jsx("span",{className:"mt-1 flex size-8 items-center justify-center font-semibold text-gray-900",children:"16"})]})]}),e.jsxs("div",{className:"-mr-px hidden grid-cols-7 divide-x divide-gray-100 border-r border-gray-100 text-sm/6 text-gray-500 sm:grid",children:[e.jsx("div",{className:"col-end-1 w-14"}),e.jsx("div",{className:"flex items-center justify-center py-3",children:e.jsxs("span",{children:["Mon ",e.jsx("span",{className:"items-center justify-center font-semibold text-gray-900",children:"10"})]})}),e.jsx("div",{className:"flex items-center justify-center py-3",children:e.jsxs("span",{children:["Tue ",e.jsx("span",{className:"items-center justify-center font-semibold text-gray-900",children:"11"})]})}),e.jsx("div",{className:"flex items-center justify-center py-3",children:e.jsxs("span",{className:"flex items-baseline",children:["Wed"," ",e.jsx("span",{className:"ml-1.5 flex size-8 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white",children:"12"})]})}),e.jsx("div",{className:"flex items-center justify-center py-3",children:e.jsxs("span",{children:["Thu ",e.jsx("span",{className:"items-center justify-center font-semibold text-gray-900",children:"13"})]})}),e.jsx("div",{className:"flex items-center justify-center py-3",children:e.jsxs("span",{children:["Fri ",e.jsx("span",{className:"items-center justify-center font-semibold text-gray-900",children:"14"})]})}),e.jsx("div",{className:"flex items-center justify-center py-3",children:e.jsxs("span",{children:["Sat ",e.jsx("span",{className:"items-center justify-center font-semibold text-gray-900",children:"15"})]})}),e.jsx("div",{className:"flex items-center justify-center py-3",children:e.jsxs("span",{children:["Sun ",e.jsx("span",{className:"items-center justify-center font-semibold text-gray-900",children:"16"})]})})]})]}),e.jsxs("div",{className:"flex flex-auto",children:[e.jsx("div",{className:"sticky left-0 z-10 w-14 flex-none bg-white ring-1 ring-gray-100"}),e.jsxs("div",{className:"grid flex-auto grid-cols-1 grid-rows-1",children:[e.jsxs("div",{className:"col-start-1 col-end-2 row-start-1 grid divide-y divide-gray-100",style:{gridTemplateRows:"repeat(48, minmax(3.5rem, 1fr))"},children:[e.jsx("div",{ref:i,className:"row-end-1 h-7"}),e.jsx("div",{children:e.jsx("div",{className:"sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400",children:"12AM"})}),e.jsx("div",{}),e.jsx("div",{children:e.jsx("div",{className:"sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400",children:"1AM"})}),e.jsx("div",{}),e.jsx("div",{children:e.jsx("div",{className:"sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400",children:"2AM"})}),e.jsx("div",{}),e.jsx("div",{children:e.jsx("div",{className:"sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400",children:"3AM"})}),e.jsx("div",{}),e.jsx("div",{children:e.jsx("div",{className:"sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400",children:"4AM"})}),e.jsx("div",{}),e.jsx("div",{children:e.jsx("div",{className:"sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400",children:"5AM"})}),e.jsx("div",{}),e.jsx("div",{children:e.jsx("div",{className:"sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400",children:"6AM"})}),e.jsx("div",{}),e.jsx("div",{children:e.jsx("div",{className:"sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400",children:"7AM"})}),e.jsx("div",{}),e.jsx("div",{children:e.jsx("div",{className:"sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400",children:"8AM"})}),e.jsx("div",{}),e.jsx("div",{children:e.jsx("div",{className:"sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400",children:"9AM"})}),e.jsx("div",{}),e.jsx("div",{children:e.jsx("div",{className:"sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400",children:"10AM"})}),e.jsx("div",{}),e.jsx("div",{children:e.jsx("div",{className:"sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400",children:"11AM"})}),e.jsx("div",{}),e.jsx("div",{children:e.jsx("div",{className:"sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400",children:"12PM"})}),e.jsx("div",{}),e.jsx("div",{children:e.jsx("div",{className:"sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400",children:"1PM"})}),e.jsx("div",{}),e.jsx("div",{children:e.jsx("div",{className:"sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400",children:"2PM"})}),e.jsx("div",{}),e.jsx("div",{children:e.jsx("div",{className:"sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400",children:"3PM"})}),e.jsx("div",{}),e.jsx("div",{children:e.jsx("div",{className:"sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400",children:"4PM"})}),e.jsx("div",{}),e.jsx("div",{children:e.jsx("div",{className:"sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400",children:"5PM"})}),e.jsx("div",{}),e.jsx("div",{children:e.jsx("div",{className:"sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400",children:"6PM"})}),e.jsx("div",{}),e.jsx("div",{children:e.jsx("div",{className:"sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400",children:"7PM"})}),e.jsx("div",{}),e.jsx("div",{children:e.jsx("div",{className:"sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400",children:"8PM"})}),e.jsx("div",{}),e.jsx("div",{children:e.jsx("div",{className:"sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400",children:"9PM"})}),e.jsx("div",{}),e.jsx("div",{children:e.jsx("div",{className:"sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400",children:"10PM"})}),e.jsx("div",{}),e.jsx("div",{children:e.jsx("div",{className:"sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400",children:"11PM"})}),e.jsx("div",{})]}),e.jsxs("div",{className:"col-start-1 col-end-2 row-start-1 hidden grid-cols-7 grid-rows-1 divide-x divide-gray-100 sm:grid sm:grid-cols-7",children:[e.jsx("div",{className:"col-start-1 row-span-full"}),e.jsx("div",{className:"col-start-2 row-span-full"}),e.jsx("div",{className:"col-start-3 row-span-full"}),e.jsx("div",{className:"col-start-4 row-span-full"}),e.jsx("div",{className:"col-start-5 row-span-full"}),e.jsx("div",{className:"col-start-6 row-span-full"}),e.jsx("div",{className:"col-start-7 row-span-full"}),e.jsx("div",{className:"col-start-8 row-span-full w-8"})]}),e.jsxs("ol",{className:"col-start-1 col-end-2 row-start-1 grid grid-cols-1 sm:grid-cols-7 sm:pr-8",style:{gridTemplateRows:"1.75rem repeat(288, minmax(0, 1fr)) auto"},children:[e.jsx("li",{className:"relative mt-px flex sm:col-start-3",style:{gridRow:"74 / span 12"},children:e.jsxs("a",{href:"#",className:"group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-blue-50 p-2 text-xs/5 hover:bg-blue-100",children:[e.jsx("p",{className:"order-1 font-semibold text-blue-700",children:"Breakfast"}),e.jsx("p",{className:"text-blue-500 group-hover:text-blue-700",children:e.jsx("time",{dateTime:"2022-01-12T06:00",children:"6:00 AM"})})]})}),e.jsx("li",{className:"relative mt-px flex sm:col-start-3",style:{gridRow:"92 / span 30"},children:e.jsxs("a",{href:"#",className:"group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-pink-50 p-2 text-xs/5 hover:bg-pink-100",children:[e.jsx("p",{className:"order-1 font-semibold text-pink-700",children:"Flight to Paris"}),e.jsx("p",{className:"text-pink-500 group-hover:text-pink-700",children:e.jsx("time",{dateTime:"2022-01-12T07:30",children:"7:30 AM"})})]})}),e.jsx("li",{className:"relative mt-px hidden sm:col-start-6 sm:flex",style:{gridRow:"122 / span 24"},children:e.jsxs("a",{href:"#",className:"group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-gray-100 p-2 text-xs/5 hover:bg-gray-200",children:[e.jsx("p",{className:"order-1 font-semibold text-gray-700",children:"Meeting with design team at Disney"}),e.jsx("p",{className:"text-gray-500 group-hover:text-gray-700",children:e.jsx("time",{dateTime:"2022-01-15T10:00",children:"10:00 AM"})})]})})]})]})]})]})})]})}const F=`'use client'

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, EllipsisHorizontalIcon } from '@heroicons/react/20/solid'
import { useEffect, useRef } from 'react'

export default function Example() {
  const container = useRef(null)
  const containerNav = useRef(null)
  const containerOffset = useRef(null)

  useEffect(() => {
    // Set the container scroll position based on the current time.
    const currentMinute = new Date().getHours() * 60
    container.current.scrollTop =
      ((container.current.scrollHeight - containerNav.current.offsetHeight - containerOffset.current.offsetHeight) *
        currentMinute) /
      1440
  }, [])

  return (
    <div className="flex h-full flex-col">
      <header className="flex flex-none items-center justify-between border-b border-gray-200 px-6 py-4">
        <h1 className="text-base font-semibold text-gray-900">
          <time dateTime="2022-01">January 2022</time>
        </h1>
        <div className="flex items-center">
          <div className="relative flex items-center rounded-md bg-white shadow-xs md:items-stretch">
            <button
              type="button"
              className="flex h-9 w-12 items-center justify-center rounded-l-md border-y border-l border-gray-300 pr-1 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:pr-0 md:hover:bg-gray-50"
            >
              <span className="sr-only">Previous week</span>
              <ChevronLeftIcon className="size-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              className="hidden border-y border-gray-300 px-3.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 focus:relative md:block"
            >
              Today
            </button>
            <span className="relative -mx-px h-5 w-px bg-gray-300 md:hidden" />
            <button
              type="button"
              className="flex h-9 w-12 items-center justify-center rounded-r-md border-y border-r border-gray-300 pl-1 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:pl-0 md:hover:bg-gray-50"
            >
              <span className="sr-only">Next week</span>
              <ChevronRightIcon className="size-5" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden md:ml-4 md:flex md:items-center">
            <Menu as="div" className="relative">
              <MenuButton
                type="button"
                className="flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50"
              >
                Week view
                <ChevronDownIcon className="-mr-1 size-5 text-gray-400" aria-hidden="true" />
              </MenuButton>

              <MenuItems
                transition
                className="absolute right-0 z-10 mt-3 w-36 origin-top-right overflow-hidden rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-hidden data-closed:scale-95 data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <div className="py-1">
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Day view
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Week view
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Month view
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Year view
                    </a>
                  </MenuItem>
                </div>
              </MenuItems>
            </Menu>
            <div className="ml-6 h-6 w-px bg-gray-300" />
            <button
              type="button"
              className="ml-6 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add event
            </button>
          </div>
          <Menu as="div" className="relative ml-6 md:hidden">
            <MenuButton className="-mx-2 flex items-center rounded-full border border-transparent p-2 text-gray-400 hover:text-gray-500">
              <span className="sr-only">Open menu</span>
              <EllipsisHorizontalIcon className="size-5" aria-hidden="true" />
            </MenuButton>

            <MenuItems
              transition
              className="absolute right-0 z-10 mt-3 w-36 origin-top-right divide-y divide-gray-100 overflow-hidden rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-hidden data-closed:scale-95 data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
            >
              <div className="py-1">
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                  >
                    Create event
                  </a>
                </MenuItem>
              </div>
              <div className="py-1">
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                  >
                    Go to today
                  </a>
                </MenuItem>
              </div>
              <div className="py-1">
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                  >
                    Day view
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                  >
                    Week view
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                  >
                    Month view
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                  >
                    Year view
                  </a>
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>
        </div>
      </header>
      <div ref={container} className="isolate flex flex-auto flex-col overflow-auto bg-white">
        <div style={{ width: '165%' }} className="flex max-w-full flex-none flex-col sm:max-w-none md:max-w-full">
          <div
            ref={containerNav}
            className="sticky top-0 z-30 flex-none bg-white ring-1 shadow-sm ring-black/5 sm:pr-8"
          >
            <div className="grid grid-cols-7 text-sm/6 text-gray-500 sm:hidden">
              <button type="button" className="flex flex-col items-center pt-2 pb-3">
                M <span className="mt-1 flex size-8 items-center justify-center font-semibold text-gray-900">10</span>
              </button>
              <button type="button" className="flex flex-col items-center pt-2 pb-3">
                T <span className="mt-1 flex size-8 items-center justify-center font-semibold text-gray-900">11</span>
              </button>
              <button type="button" className="flex flex-col items-center pt-2 pb-3">
                W{' '}
                <span className="mt-1 flex size-8 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white">
                  12
                </span>
              </button>
              <button type="button" className="flex flex-col items-center pt-2 pb-3">
                T <span className="mt-1 flex size-8 items-center justify-center font-semibold text-gray-900">13</span>
              </button>
              <button type="button" className="flex flex-col items-center pt-2 pb-3">
                F <span className="mt-1 flex size-8 items-center justify-center font-semibold text-gray-900">14</span>
              </button>
              <button type="button" className="flex flex-col items-center pt-2 pb-3">
                S <span className="mt-1 flex size-8 items-center justify-center font-semibold text-gray-900">15</span>
              </button>
              <button type="button" className="flex flex-col items-center pt-2 pb-3">
                S <span className="mt-1 flex size-8 items-center justify-center font-semibold text-gray-900">16</span>
              </button>
            </div>

            <div className="-mr-px hidden grid-cols-7 divide-x divide-gray-100 border-r border-gray-100 text-sm/6 text-gray-500 sm:grid">
              <div className="col-end-1 w-14" />
              <div className="flex items-center justify-center py-3">
                <span>
                  Mon <span className="items-center justify-center font-semibold text-gray-900">10</span>
                </span>
              </div>
              <div className="flex items-center justify-center py-3">
                <span>
                  Tue <span className="items-center justify-center font-semibold text-gray-900">11</span>
                </span>
              </div>
              <div className="flex items-center justify-center py-3">
                <span className="flex items-baseline">
                  Wed{' '}
                  <span className="ml-1.5 flex size-8 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white">
                    12
                  </span>
                </span>
              </div>
              <div className="flex items-center justify-center py-3">
                <span>
                  Thu <span className="items-center justify-center font-semibold text-gray-900">13</span>
                </span>
              </div>
              <div className="flex items-center justify-center py-3">
                <span>
                  Fri <span className="items-center justify-center font-semibold text-gray-900">14</span>
                </span>
              </div>
              <div className="flex items-center justify-center py-3">
                <span>
                  Sat <span className="items-center justify-center font-semibold text-gray-900">15</span>
                </span>
              </div>
              <div className="flex items-center justify-center py-3">
                <span>
                  Sun <span className="items-center justify-center font-semibold text-gray-900">16</span>
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-auto">
            <div className="sticky left-0 z-10 w-14 flex-none bg-white ring-1 ring-gray-100" />
            <div className="grid flex-auto grid-cols-1 grid-rows-1">
              {/* Horizontal lines */}
              <div
                className="col-start-1 col-end-2 row-start-1 grid divide-y divide-gray-100"
                style={{ gridTemplateRows: 'repeat(48, minmax(3.5rem, 1fr))' }}
              >
                <div ref={containerOffset} className="row-end-1 h-7"></div>
                <div>
                  <div className="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400">
                    12AM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400">
                    1AM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400">
                    2AM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400">
                    3AM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400">
                    4AM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400">
                    5AM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400">
                    6AM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400">
                    7AM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400">
                    8AM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400">
                    9AM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400">
                    10AM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400">
                    11AM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400">
                    12PM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400">
                    1PM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400">
                    2PM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400">
                    3PM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400">
                    4PM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400">
                    5PM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400">
                    6PM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400">
                    7PM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400">
                    8PM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400">
                    9PM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400">
                    10PM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400">
                    11PM
                  </div>
                </div>
                <div />
              </div>

              {/* Vertical lines */}
              <div className="col-start-1 col-end-2 row-start-1 hidden grid-cols-7 grid-rows-1 divide-x divide-gray-100 sm:grid sm:grid-cols-7">
                <div className="col-start-1 row-span-full" />
                <div className="col-start-2 row-span-full" />
                <div className="col-start-3 row-span-full" />
                <div className="col-start-4 row-span-full" />
                <div className="col-start-5 row-span-full" />
                <div className="col-start-6 row-span-full" />
                <div className="col-start-7 row-span-full" />
                <div className="col-start-8 row-span-full w-8" />
              </div>

              {/* Events */}
              <ol
                className="col-start-1 col-end-2 row-start-1 grid grid-cols-1 sm:grid-cols-7 sm:pr-8"
                style={{ gridTemplateRows: '1.75rem repeat(288, minmax(0, 1fr)) auto' }}
              >
                <li className="relative mt-px flex sm:col-start-3" style={{ gridRow: '74 / span 12' }}>
                  <a
                    href="#"
                    className="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-blue-50 p-2 text-xs/5 hover:bg-blue-100"
                  >
                    <p className="order-1 font-semibold text-blue-700">Breakfast</p>
                    <p className="text-blue-500 group-hover:text-blue-700">
                      <time dateTime="2022-01-12T06:00">6:00 AM</time>
                    </p>
                  </a>
                </li>
                <li className="relative mt-px flex sm:col-start-3" style={{ gridRow: '92 / span 30' }}>
                  <a
                    href="#"
                    className="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-pink-50 p-2 text-xs/5 hover:bg-pink-100"
                  >
                    <p className="order-1 font-semibold text-pink-700">Flight to Paris</p>
                    <p className="text-pink-500 group-hover:text-pink-700">
                      <time dateTime="2022-01-12T07:30">7:30 AM</time>
                    </p>
                  </a>
                </li>
                <li className="relative mt-px hidden sm:col-start-6 sm:flex" style={{ gridRow: '122 / span 24' }}>
                  <a
                    href="#"
                    className="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-gray-100 p-2 text-xs/5 hover:bg-gray-200"
                  >
                    <p className="order-1 font-semibold text-gray-700">Meeting with design team at Disney</p>
                    <p className="text-gray-500 group-hover:text-gray-700">
                      <time dateTime="2022-01-15T10:00">10:00 AM</time>
                    </p>
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
`,f=[{date:"2021-12-27"},{date:"2021-12-28"},{date:"2021-12-29"},{date:"2021-12-30"},{date:"2021-12-31"},{date:"2022-01-01",isCurrentMonth:!0},{date:"2022-01-02",isCurrentMonth:!0},{date:"2022-01-03",isCurrentMonth:!0},{date:"2022-01-04",isCurrentMonth:!0},{date:"2022-01-05",isCurrentMonth:!0},{date:"2022-01-06",isCurrentMonth:!0},{date:"2022-01-07",isCurrentMonth:!0},{date:"2022-01-08",isCurrentMonth:!0},{date:"2022-01-09",isCurrentMonth:!0},{date:"2022-01-10",isCurrentMonth:!0},{date:"2022-01-11",isCurrentMonth:!0},{date:"2022-01-12",isCurrentMonth:!0},{date:"2022-01-13",isCurrentMonth:!0},{date:"2022-01-14",isCurrentMonth:!0},{date:"2022-01-15",isCurrentMonth:!0},{date:"2022-01-16",isCurrentMonth:!0},{date:"2022-01-17",isCurrentMonth:!0},{date:"2022-01-18",isCurrentMonth:!0},{date:"2022-01-19",isCurrentMonth:!0},{date:"2022-01-20",isCurrentMonth:!0,isToday:!0},{date:"2022-01-21",isCurrentMonth:!0},{date:"2022-01-22",isCurrentMonth:!0,isSelected:!0},{date:"2022-01-23",isCurrentMonth:!0},{date:"2022-01-24",isCurrentMonth:!0},{date:"2022-01-25",isCurrentMonth:!0},{date:"2022-01-26",isCurrentMonth:!0},{date:"2022-01-27",isCurrentMonth:!0},{date:"2022-01-28",isCurrentMonth:!0},{date:"2022-01-29",isCurrentMonth:!0},{date:"2022-01-30",isCurrentMonth:!0},{date:"2022-01-31",isCurrentMonth:!0},{date:"2022-02-01"},{date:"2022-02-02"},{date:"2022-02-03"},{date:"2022-02-04"},{date:"2022-02-05"},{date:"2022-02-06"}];function M(...t){return t.filter(Boolean).join(" ")}function J(){const t=m.useRef(null),a=m.useRef(null),i=m.useRef(null);return m.useEffect(()=>{const r=new Date().getHours()*60;t.current.scrollTop=(t.current.scrollHeight-a.current.offsetHeight-i.current.offsetHeight)*r/1440},[]),e.jsxs("div",{className:"flex h-full flex-col",children:[e.jsxs("header",{className:"flex flex-none items-center justify-between border-b border-gray-200 px-6 py-4",children:[e.jsxs("div",{children:[e.jsxs("h1",{className:"text-base font-semibold text-gray-900",children:[e.jsx("time",{dateTime:"2022-01-22",className:"sm:hidden",children:"Jan 22, 2022"}),e.jsx("time",{dateTime:"2022-01-22",className:"hidden sm:inline",children:"January 22, 2022"})]}),e.jsx("p",{className:"mt-1 text-sm text-gray-500",children:"Saturday"})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsxs("div",{className:"relative flex items-center rounded-md bg-white shadow-xs md:items-stretch",children:[e.jsxs("button",{type:"button",className:"flex h-9 w-12 items-center justify-center rounded-l-md border-y border-l border-gray-300 pr-1 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:pr-0 md:hover:bg-gray-50",children:[e.jsx("span",{className:"sr-only",children:"Previous day"}),e.jsx(o,{className:"size-5","aria-hidden":"true"})]}),e.jsx("button",{type:"button",className:"hidden border-y border-gray-300 px-3.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 focus:relative md:block",children:"Today"}),e.jsx("span",{className:"relative -mx-px h-5 w-px bg-gray-300 md:hidden"}),e.jsxs("button",{type:"button",className:"flex h-9 w-12 items-center justify-center rounded-r-md border-y border-r border-gray-300 pl-1 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:pl-0 md:hover:bg-gray-50",children:[e.jsx("span",{className:"sr-only",children:"Next day"}),e.jsx(c,{className:"size-5","aria-hidden":"true"})]})]}),e.jsxs("div",{className:"hidden md:ml-4 md:flex md:items-center",children:[e.jsxs(d,{as:"div",className:"relative",children:[e.jsxs(n,{type:"button",className:"flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50",children:["Day view",e.jsx(h,{className:"-mr-1 size-5 text-gray-400","aria-hidden":"true"})]}),e.jsx(l,{transition:!0,className:"absolute right-0 z-10 mt-3 w-36 origin-top-right overflow-hidden rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-hidden data-closed:scale-95 data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in",children:e.jsxs("div",{className:"py-1",children:[e.jsx(s,{children:e.jsx("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden",children:"Day view"})}),e.jsx(s,{children:e.jsx("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden",children:"Week view"})}),e.jsx(s,{children:e.jsx("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden",children:"Month view"})}),e.jsx(s,{children:e.jsx("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden",children:"Year view"})})]})})]}),e.jsx("div",{className:"ml-6 h-6 w-px bg-gray-300"}),e.jsx("button",{type:"button",className:"ml-6 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"Add event"})]}),e.jsxs(d,{as:"div",className:"relative ml-6 md:hidden",children:[e.jsxs(n,{className:"-mx-2 flex items-center rounded-full border border-transparent p-2 text-gray-400 hover:text-gray-500",children:[e.jsx("span",{className:"sr-only",children:"Open menu"}),e.jsx(u,{className:"size-5","aria-hidden":"true"})]}),e.jsxs(l,{transition:!0,className:"absolute right-0 z-10 mt-3 w-36 origin-top-right divide-y divide-gray-100 overflow-hidden rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-hidden data-closed:scale-95 data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in",children:[e.jsx("div",{className:"py-1",children:e.jsx(s,{children:e.jsx("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden",children:"Create event"})})}),e.jsx("div",{className:"py-1",children:e.jsx(s,{children:e.jsx("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden",children:"Go to today"})})}),e.jsxs("div",{className:"py-1",children:[e.jsx(s,{children:e.jsx("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden",children:"Day view"})}),e.jsx(s,{children:e.jsx("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden",children:"Week view"})}),e.jsx(s,{children:e.jsx("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden",children:"Month view"})}),e.jsx(s,{children:e.jsx("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden",children:"Year view"})})]})]})]})]})]}),e.jsxs("div",{className:"isolate flex flex-auto overflow-hidden bg-white",children:[e.jsxs("div",{ref:t,className:"flex flex-auto flex-col overflow-auto",children:[e.jsxs("div",{ref:a,className:"sticky top-0 z-10 grid flex-none grid-cols-7 bg-white text-xs text-gray-500 ring-1 shadow-sm ring-black/5 md:hidden",children:[e.jsxs("button",{type:"button",className:"flex flex-col items-center pt-3 pb-1.5",children:[e.jsx("span",{children:"W"}),e.jsx("span",{className:"mt-3 flex size-8 items-center justify-center rounded-full text-base font-semibold text-gray-900",children:"19"})]}),e.jsxs("button",{type:"button",className:"flex flex-col items-center pt-3 pb-1.5",children:[e.jsx("span",{children:"T"}),e.jsx("span",{className:"mt-3 flex size-8 items-center justify-center rounded-full text-base font-semibold text-indigo-600",children:"20"})]}),e.jsxs("button",{type:"button",className:"flex flex-col items-center pt-3 pb-1.5",children:[e.jsx("span",{children:"F"}),e.jsx("span",{className:"mt-3 flex size-8 items-center justify-center rounded-full text-base font-semibold text-gray-900",children:"21"})]}),e.jsxs("button",{type:"button",className:"flex flex-col items-center pt-3 pb-1.5",children:[e.jsx("span",{children:"S"}),e.jsx("span",{className:"mt-3 flex size-8 items-center justify-center rounded-full bg-gray-900 text-base font-semibold text-white",children:"22"})]}),e.jsxs("button",{type:"button",className:"flex flex-col items-center pt-3 pb-1.5",children:[e.jsx("span",{children:"S"}),e.jsx("span",{className:"mt-3 flex size-8 items-center justify-center rounded-full text-base font-semibold text-gray-900",children:"23"})]}),e.jsxs("button",{type:"button",className:"flex flex-col items-center pt-3 pb-1.5",children:[e.jsx("span",{children:"M"}),e.jsx("span",{className:"mt-3 flex size-8 items-center justify-center rounded-full text-base font-semibold text-gray-900",children:"24"})]}),e.jsxs("button",{type:"button",className:"flex flex-col items-center pt-3 pb-1.5",children:[e.jsx("span",{children:"T"}),e.jsx("span",{className:"mt-3 flex size-8 items-center justify-center rounded-full text-base font-semibold text-gray-900",children:"25"})]})]}),e.jsxs("div",{className:"flex w-full flex-auto",children:[e.jsx("div",{className:"w-14 flex-none bg-white ring-1 ring-gray-100"}),e.jsxs("div",{className:"grid flex-auto grid-cols-1 grid-rows-1",children:[e.jsxs("div",{className:"col-start-1 col-end-2 row-start-1 grid divide-y divide-gray-100",style:{gridTemplateRows:"repeat(48, minmax(3.5rem, 1fr))"},children:[e.jsx("div",{ref:i,className:"row-end-1 h-7"}),e.jsx("div",{children:e.jsx("div",{className:"sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400",children:"12AM"})}),e.jsx("div",{}),e.jsx("div",{children:e.jsx("div",{className:"sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400",children:"1AM"})}),e.jsx("div",{}),e.jsx("div",{children:e.jsx("div",{className:"sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400",children:"2AM"})}),e.jsx("div",{}),e.jsx("div",{children:e.jsx("div",{className:"sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400",children:"3AM"})}),e.jsx("div",{}),e.jsx("div",{children:e.jsx("div",{className:"sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400",children:"4AM"})}),e.jsx("div",{}),e.jsx("div",{children:e.jsx("div",{className:"sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400",children:"5AM"})}),e.jsx("div",{}),e.jsx("div",{children:e.jsx("div",{className:"sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400",children:"6AM"})}),e.jsx("div",{}),e.jsx("div",{children:e.jsx("div",{className:"sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400",children:"7AM"})}),e.jsx("div",{}),e.jsx("div",{children:e.jsx("div",{className:"sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400",children:"8AM"})}),e.jsx("div",{}),e.jsx("div",{children:e.jsx("div",{className:"sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400",children:"9AM"})}),e.jsx("div",{}),e.jsx("div",{children:e.jsx("div",{className:"sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400",children:"10AM"})}),e.jsx("div",{}),e.jsx("div",{children:e.jsx("div",{className:"sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400",children:"11AM"})}),e.jsx("div",{}),e.jsx("div",{children:e.jsx("div",{className:"sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400",children:"12PM"})}),e.jsx("div",{}),e.jsx("div",{children:e.jsx("div",{className:"sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400",children:"1PM"})}),e.jsx("div",{}),e.jsx("div",{children:e.jsx("div",{className:"sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400",children:"2PM"})}),e.jsx("div",{}),e.jsx("div",{children:e.jsx("div",{className:"sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400",children:"3PM"})}),e.jsx("div",{}),e.jsx("div",{children:e.jsx("div",{className:"sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400",children:"4PM"})}),e.jsx("div",{}),e.jsx("div",{children:e.jsx("div",{className:"sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400",children:"5PM"})}),e.jsx("div",{}),e.jsx("div",{children:e.jsx("div",{className:"sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400",children:"6PM"})}),e.jsx("div",{}),e.jsx("div",{children:e.jsx("div",{className:"sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400",children:"7PM"})}),e.jsx("div",{}),e.jsx("div",{children:e.jsx("div",{className:"sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400",children:"8PM"})}),e.jsx("div",{}),e.jsx("div",{children:e.jsx("div",{className:"sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400",children:"9PM"})}),e.jsx("div",{}),e.jsx("div",{children:e.jsx("div",{className:"sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400",children:"10PM"})}),e.jsx("div",{}),e.jsx("div",{children:e.jsx("div",{className:"sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400",children:"11PM"})}),e.jsx("div",{})]}),e.jsxs("ol",{className:"col-start-1 col-end-2 row-start-1 grid grid-cols-1",style:{gridTemplateRows:"1.75rem repeat(288, minmax(0, 1fr)) auto"},children:[e.jsx("li",{className:"relative mt-px flex",style:{gridRow:"74 / span 12"},children:e.jsxs("a",{href:"#",className:"group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-blue-50 p-2 text-xs/5 hover:bg-blue-100",children:[e.jsx("p",{className:"order-1 font-semibold text-blue-700",children:"Breakfast"}),e.jsx("p",{className:"text-blue-500 group-hover:text-blue-700",children:e.jsx("time",{dateTime:"2022-01-22T06:00",children:"6:00 AM"})})]})}),e.jsx("li",{className:"relative mt-px flex",style:{gridRow:"92 / span 30"},children:e.jsxs("a",{href:"#",className:"group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-pink-50 p-2 text-xs/5 hover:bg-pink-100",children:[e.jsx("p",{className:"order-1 font-semibold text-pink-700",children:"Flight to Paris"}),e.jsx("p",{className:"order-1 text-pink-500 group-hover:text-pink-700",children:"John F. Kennedy International Airport"}),e.jsx("p",{className:"text-pink-500 group-hover:text-pink-700",children:e.jsx("time",{dateTime:"2022-01-22T07:30",children:"7:30 AM"})})]})}),e.jsx("li",{className:"relative mt-px flex",style:{gridRow:"134 / span 18"},children:e.jsxs("a",{href:"#",className:"group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-indigo-50 p-2 text-xs/5 hover:bg-indigo-100",children:[e.jsx("p",{className:"order-1 font-semibold text-indigo-700",children:"Sightseeing"}),e.jsx("p",{className:"order-1 text-indigo-500 group-hover:text-indigo-700",children:"Eiffel Tower"}),e.jsx("p",{className:"text-indigo-500 group-hover:text-indigo-700",children:e.jsx("time",{dateTime:"2022-01-22T11:00",children:"11:00 AM"})})]})})]})]})]})]}),e.jsxs("div",{className:"hidden w-1/2 max-w-md flex-none border-l border-gray-100 px-8 py-10 md:block",children:[e.jsxs("div",{className:"flex items-center text-center text-gray-900",children:[e.jsxs("button",{type:"button",className:"-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500",children:[e.jsx("span",{className:"sr-only",children:"Previous month"}),e.jsx(o,{className:"size-5","aria-hidden":"true"})]}),e.jsx("div",{className:"flex-auto text-sm font-semibold",children:"January 2022"}),e.jsxs("button",{type:"button",className:"-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500",children:[e.jsx("span",{className:"sr-only",children:"Next month"}),e.jsx(c,{className:"size-5","aria-hidden":"true"})]})]}),e.jsxs("div",{className:"mt-6 grid grid-cols-7 text-center text-xs/6 text-gray-500",children:[e.jsx("div",{children:"M"}),e.jsx("div",{children:"T"}),e.jsx("div",{children:"W"}),e.jsx("div",{children:"T"}),e.jsx("div",{children:"F"}),e.jsx("div",{children:"S"}),e.jsx("div",{children:"S"})]}),e.jsx("div",{className:"isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm ring-1 shadow-sm ring-gray-200",children:f.map((r,x)=>e.jsx("button",{type:"button",className:M("py-1.5 hover:bg-gray-100 focus:z-10",r.isCurrentMonth?"bg-white":"bg-gray-50",(r.isSelected||r.isToday)&&"font-semibold",r.isSelected&&"text-white",!r.isSelected&&r.isCurrentMonth&&!r.isToday&&"text-gray-900",!r.isSelected&&!r.isCurrentMonth&&!r.isToday&&"text-gray-400",r.isToday&&!r.isSelected&&"text-indigo-600",x===0&&"rounded-tl-lg",x===6&&"rounded-tr-lg",x===f.length-7&&"rounded-bl-lg",x===f.length-1&&"rounded-br-lg"),children:e.jsx("time",{dateTime:r.date,className:M("mx-auto flex size-7 items-center justify-center rounded-full",r.isSelected&&r.isToday&&"bg-indigo-600",r.isSelected&&!r.isToday&&"bg-gray-900"),children:r.date.split("-").pop().replace(/^0/,"")})},r.date))})]})]})]})}const H=`'use client'

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, EllipsisHorizontalIcon } from '@heroicons/react/20/solid'
import { useEffect, useRef } from 'react'

const days = [
  { date: '2021-12-27' },
  { date: '2021-12-28' },
  { date: '2021-12-29' },
  { date: '2021-12-30' },
  { date: '2021-12-31' },
  { date: '2022-01-01', isCurrentMonth: true },
  { date: '2022-01-02', isCurrentMonth: true },
  { date: '2022-01-03', isCurrentMonth: true },
  { date: '2022-01-04', isCurrentMonth: true },
  { date: '2022-01-05', isCurrentMonth: true },
  { date: '2022-01-06', isCurrentMonth: true },
  { date: '2022-01-07', isCurrentMonth: true },
  { date: '2022-01-08', isCurrentMonth: true },
  { date: '2022-01-09', isCurrentMonth: true },
  { date: '2022-01-10', isCurrentMonth: true },
  { date: '2022-01-11', isCurrentMonth: true },
  { date: '2022-01-12', isCurrentMonth: true },
  { date: '2022-01-13', isCurrentMonth: true },
  { date: '2022-01-14', isCurrentMonth: true },
  { date: '2022-01-15', isCurrentMonth: true },
  { date: '2022-01-16', isCurrentMonth: true },
  { date: '2022-01-17', isCurrentMonth: true },
  { date: '2022-01-18', isCurrentMonth: true },
  { date: '2022-01-19', isCurrentMonth: true },
  { date: '2022-01-20', isCurrentMonth: true, isToday: true },
  { date: '2022-01-21', isCurrentMonth: true },
  { date: '2022-01-22', isCurrentMonth: true, isSelected: true },
  { date: '2022-01-23', isCurrentMonth: true },
  { date: '2022-01-24', isCurrentMonth: true },
  { date: '2022-01-25', isCurrentMonth: true },
  { date: '2022-01-26', isCurrentMonth: true },
  { date: '2022-01-27', isCurrentMonth: true },
  { date: '2022-01-28', isCurrentMonth: true },
  { date: '2022-01-29', isCurrentMonth: true },
  { date: '2022-01-30', isCurrentMonth: true },
  { date: '2022-01-31', isCurrentMonth: true },
  { date: '2022-02-01' },
  { date: '2022-02-02' },
  { date: '2022-02-03' },
  { date: '2022-02-04' },
  { date: '2022-02-05' },
  { date: '2022-02-06' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const container = useRef(null)
  const containerNav = useRef(null)
  const containerOffset = useRef(null)

  useEffect(() => {
    // Set the container scroll position based on the current time.
    const currentMinute = new Date().getHours() * 60
    container.current.scrollTop =
      ((container.current.scrollHeight - containerNav.current.offsetHeight - containerOffset.current.offsetHeight) *
        currentMinute) /
      1440
  }, [])

  return (
    <div className="flex h-full flex-col">
      <header className="flex flex-none items-center justify-between border-b border-gray-200 px-6 py-4">
        <div>
          <h1 className="text-base font-semibold text-gray-900">
            <time dateTime="2022-01-22" className="sm:hidden">
              Jan 22, 2022
            </time>
            <time dateTime="2022-01-22" className="hidden sm:inline">
              January 22, 2022
            </time>
          </h1>
          <p className="mt-1 text-sm text-gray-500">Saturday</p>
        </div>
        <div className="flex items-center">
          <div className="relative flex items-center rounded-md bg-white shadow-xs md:items-stretch">
            <button
              type="button"
              className="flex h-9 w-12 items-center justify-center rounded-l-md border-y border-l border-gray-300 pr-1 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:pr-0 md:hover:bg-gray-50"
            >
              <span className="sr-only">Previous day</span>
              <ChevronLeftIcon className="size-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              className="hidden border-y border-gray-300 px-3.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 focus:relative md:block"
            >
              Today
            </button>
            <span className="relative -mx-px h-5 w-px bg-gray-300 md:hidden" />
            <button
              type="button"
              className="flex h-9 w-12 items-center justify-center rounded-r-md border-y border-r border-gray-300 pl-1 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:pl-0 md:hover:bg-gray-50"
            >
              <span className="sr-only">Next day</span>
              <ChevronRightIcon className="size-5" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden md:ml-4 md:flex md:items-center">
            <Menu as="div" className="relative">
              <MenuButton
                type="button"
                className="flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50"
              >
                Day view
                <ChevronDownIcon className="-mr-1 size-5 text-gray-400" aria-hidden="true" />
              </MenuButton>

              <MenuItems
                transition
                className="absolute right-0 z-10 mt-3 w-36 origin-top-right overflow-hidden rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-hidden data-closed:scale-95 data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <div className="py-1">
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Day view
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Week view
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Month view
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Year view
                    </a>
                  </MenuItem>
                </div>
              </MenuItems>
            </Menu>
            <div className="ml-6 h-6 w-px bg-gray-300" />
            <button
              type="button"
              className="ml-6 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add event
            </button>
          </div>
          <Menu as="div" className="relative ml-6 md:hidden">
            <MenuButton className="-mx-2 flex items-center rounded-full border border-transparent p-2 text-gray-400 hover:text-gray-500">
              <span className="sr-only">Open menu</span>
              <EllipsisHorizontalIcon className="size-5" aria-hidden="true" />
            </MenuButton>

            <MenuItems
              transition
              className="absolute right-0 z-10 mt-3 w-36 origin-top-right divide-y divide-gray-100 overflow-hidden rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-hidden data-closed:scale-95 data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
            >
              <div className="py-1">
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                  >
                    Create event
                  </a>
                </MenuItem>
              </div>
              <div className="py-1">
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                  >
                    Go to today
                  </a>
                </MenuItem>
              </div>
              <div className="py-1">
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                  >
                    Day view
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                  >
                    Week view
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                  >
                    Month view
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                  >
                    Year view
                  </a>
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>
        </div>
      </header>
      <div className="isolate flex flex-auto overflow-hidden bg-white">
        <div ref={container} className="flex flex-auto flex-col overflow-auto">
          <div
            ref={containerNav}
            className="sticky top-0 z-10 grid flex-none grid-cols-7 bg-white text-xs text-gray-500 ring-1 shadow-sm ring-black/5 md:hidden"
          >
            <button type="button" className="flex flex-col items-center pt-3 pb-1.5">
              <span>W</span>
              {/* Default: "text-gray-900", Selected: "bg-gray-900 text-white", Today (Not Selected): "text-indigo-600", Today (Selected): "bg-indigo-600 text-white" */}
              <span className="mt-3 flex size-8 items-center justify-center rounded-full text-base font-semibold text-gray-900">
                19
              </span>
            </button>
            <button type="button" className="flex flex-col items-center pt-3 pb-1.5">
              <span>T</span>
              <span className="mt-3 flex size-8 items-center justify-center rounded-full text-base font-semibold text-indigo-600">
                20
              </span>
            </button>
            <button type="button" className="flex flex-col items-center pt-3 pb-1.5">
              <span>F</span>
              <span className="mt-3 flex size-8 items-center justify-center rounded-full text-base font-semibold text-gray-900">
                21
              </span>
            </button>
            <button type="button" className="flex flex-col items-center pt-3 pb-1.5">
              <span>S</span>
              <span className="mt-3 flex size-8 items-center justify-center rounded-full bg-gray-900 text-base font-semibold text-white">
                22
              </span>
            </button>
            <button type="button" className="flex flex-col items-center pt-3 pb-1.5">
              <span>S</span>
              <span className="mt-3 flex size-8 items-center justify-center rounded-full text-base font-semibold text-gray-900">
                23
              </span>
            </button>
            <button type="button" className="flex flex-col items-center pt-3 pb-1.5">
              <span>M</span>
              <span className="mt-3 flex size-8 items-center justify-center rounded-full text-base font-semibold text-gray-900">
                24
              </span>
            </button>
            <button type="button" className="flex flex-col items-center pt-3 pb-1.5">
              <span>T</span>
              <span className="mt-3 flex size-8 items-center justify-center rounded-full text-base font-semibold text-gray-900">
                25
              </span>
            </button>
          </div>
          <div className="flex w-full flex-auto">
            <div className="w-14 flex-none bg-white ring-1 ring-gray-100" />
            <div className="grid flex-auto grid-cols-1 grid-rows-1">
              {/* Horizontal lines */}
              <div
                className="col-start-1 col-end-2 row-start-1 grid divide-y divide-gray-100"
                style={{ gridTemplateRows: 'repeat(48, minmax(3.5rem, 1fr))' }}
              >
                <div ref={containerOffset} className="row-end-1 h-7"></div>
                <div>
                  <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400">12AM</div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400">1AM</div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400">2AM</div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400">3AM</div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400">4AM</div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400">5AM</div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400">6AM</div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400">7AM</div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400">8AM</div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400">9AM</div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400">10AM</div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400">11AM</div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400">12PM</div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400">1PM</div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400">2PM</div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400">3PM</div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400">4PM</div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400">5PM</div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400">6PM</div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400">7PM</div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400">8PM</div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400">9PM</div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400">10PM</div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400">11PM</div>
                </div>
                <div />
              </div>

              {/* Events */}
              <ol
                className="col-start-1 col-end-2 row-start-1 grid grid-cols-1"
                style={{ gridTemplateRows: '1.75rem repeat(288, minmax(0, 1fr)) auto' }}
              >
                <li className="relative mt-px flex" style={{ gridRow: '74 / span 12' }}>
                  <a
                    href="#"
                    className="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-blue-50 p-2 text-xs/5 hover:bg-blue-100"
                  >
                    <p className="order-1 font-semibold text-blue-700">Breakfast</p>
                    <p className="text-blue-500 group-hover:text-blue-700">
                      <time dateTime="2022-01-22T06:00">6:00 AM</time>
                    </p>
                  </a>
                </li>
                <li className="relative mt-px flex" style={{ gridRow: '92 / span 30' }}>
                  <a
                    href="#"
                    className="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-pink-50 p-2 text-xs/5 hover:bg-pink-100"
                  >
                    <p className="order-1 font-semibold text-pink-700">Flight to Paris</p>
                    <p className="order-1 text-pink-500 group-hover:text-pink-700">
                      John F. Kennedy International Airport
                    </p>
                    <p className="text-pink-500 group-hover:text-pink-700">
                      <time dateTime="2022-01-22T07:30">7:30 AM</time>
                    </p>
                  </a>
                </li>
                <li className="relative mt-px flex" style={{ gridRow: '134 / span 18' }}>
                  <a
                    href="#"
                    className="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-indigo-50 p-2 text-xs/5 hover:bg-indigo-100"
                  >
                    <p className="order-1 font-semibold text-indigo-700">Sightseeing</p>
                    <p className="order-1 text-indigo-500 group-hover:text-indigo-700">Eiffel Tower</p>
                    <p className="text-indigo-500 group-hover:text-indigo-700">
                      <time dateTime="2022-01-22T11:00">11:00 AM</time>
                    </p>
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="hidden w-1/2 max-w-md flex-none border-l border-gray-100 px-8 py-10 md:block">
          <div className="flex items-center text-center text-gray-900">
            <button
              type="button"
              className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Previous month</span>
              <ChevronLeftIcon className="size-5" aria-hidden="true" />
            </button>
            <div className="flex-auto text-sm font-semibold">January 2022</div>
            <button
              type="button"
              className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Next month</span>
              <ChevronRightIcon className="size-5" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 grid grid-cols-7 text-center text-xs/6 text-gray-500">
            <div>M</div>
            <div>T</div>
            <div>W</div>
            <div>T</div>
            <div>F</div>
            <div>S</div>
            <div>S</div>
          </div>
          <div className="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm ring-1 shadow-sm ring-gray-200">
            {days.map((day, dayIdx) => (
              <button
                key={day.date}
                type="button"
                className={classNames(
                  'py-1.5 hover:bg-gray-100 focus:z-10',
                  day.isCurrentMonth ? 'bg-white' : 'bg-gray-50',
                  (day.isSelected || day.isToday) && 'font-semibold',
                  day.isSelected && 'text-white',
                  !day.isSelected && day.isCurrentMonth && !day.isToday && 'text-gray-900',
                  !day.isSelected && !day.isCurrentMonth && !day.isToday && 'text-gray-400',
                  day.isToday && !day.isSelected && 'text-indigo-600',
                  dayIdx === 0 && 'rounded-tl-lg',
                  dayIdx === 6 && 'rounded-tr-lg',
                  dayIdx === days.length - 7 && 'rounded-bl-lg',
                  dayIdx === days.length - 1 && 'rounded-br-lg',
                )}
              >
                <time
                  dateTime={day.date}
                  className={classNames(
                    'mx-auto flex size-7 items-center justify-center rounded-full',
                    day.isSelected && day.isToday && 'bg-indigo-600',
                    day.isSelected && !day.isToday && 'bg-gray-900',
                  )}
                >
                  {day.date.split('-').pop().replace(/^0/, '')}
                </time>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
`,O=[{name:"January",days:[{date:"2021-12-27"},{date:"2021-12-28"},{date:"2021-12-29"},{date:"2021-12-30"},{date:"2021-12-31"},{date:"2022-01-01",isCurrentMonth:!0},{date:"2022-01-02",isCurrentMonth:!0},{date:"2022-01-03",isCurrentMonth:!0},{date:"2022-01-04",isCurrentMonth:!0},{date:"2022-01-05",isCurrentMonth:!0},{date:"2022-01-06",isCurrentMonth:!0},{date:"2022-01-07",isCurrentMonth:!0},{date:"2022-01-08",isCurrentMonth:!0},{date:"2022-01-09",isCurrentMonth:!0},{date:"2022-01-10",isCurrentMonth:!0},{date:"2022-01-11",isCurrentMonth:!0},{date:"2022-01-12",isCurrentMonth:!0,isToday:!0},{date:"2022-01-13",isCurrentMonth:!0},{date:"2022-01-14",isCurrentMonth:!0},{date:"2022-01-15",isCurrentMonth:!0},{date:"2022-01-16",isCurrentMonth:!0},{date:"2022-01-17",isCurrentMonth:!0},{date:"2022-01-18",isCurrentMonth:!0},{date:"2022-01-19",isCurrentMonth:!0},{date:"2022-01-20",isCurrentMonth:!0},{date:"2022-01-21",isCurrentMonth:!0},{date:"2022-01-22",isCurrentMonth:!0},{date:"2022-01-23",isCurrentMonth:!0},{date:"2022-01-24",isCurrentMonth:!0},{date:"2022-01-25",isCurrentMonth:!0},{date:"2022-01-26",isCurrentMonth:!0},{date:"2022-01-27",isCurrentMonth:!0},{date:"2022-01-28",isCurrentMonth:!0},{date:"2022-01-29",isCurrentMonth:!0},{date:"2022-01-30",isCurrentMonth:!0},{date:"2022-01-31",isCurrentMonth:!0},{date:"2022-02-01"},{date:"2022-02-02"},{date:"2022-02-03"},{date:"2022-02-04"},{date:"2022-02-05"},{date:"2022-02-06"}]}];function j(...t){return t.filter(Boolean).join(" ")}function $(){return e.jsxs("div",{children:[e.jsxs("header",{className:"flex items-center justify-between border-b border-gray-200 px-6 py-4",children:[e.jsx("h1",{className:"text-base font-semibold text-gray-900",children:e.jsx("time",{dateTime:"2022",children:"2022"})}),e.jsxs("div",{className:"flex items-center",children:[e.jsxs("div",{className:"relative flex items-center rounded-md bg-white shadow-xs md:items-stretch",children:[e.jsxs("button",{type:"button",className:"flex h-9 w-12 items-center justify-center rounded-l-md border-y border-l border-gray-300 pr-1 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:pr-0 md:hover:bg-gray-50",children:[e.jsx("span",{className:"sr-only",children:"Previous year"}),e.jsx(o,{className:"size-5","aria-hidden":"true"})]}),e.jsx("button",{type:"button",className:"hidden border-y border-gray-300 px-3.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 focus:relative md:block",children:"Today"}),e.jsx("span",{className:"relative -mx-px h-5 w-px bg-gray-300 md:hidden"}),e.jsxs("button",{type:"button",className:"flex h-9 w-12 items-center justify-center rounded-r-md border-y border-r border-gray-300 pl-1 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:pl-0 md:hover:bg-gray-50",children:[e.jsx("span",{className:"sr-only",children:"Next year"}),e.jsx(c,{className:"size-5","aria-hidden":"true"})]})]}),e.jsxs("div",{className:"hidden md:ml-4 md:flex md:items-center",children:[e.jsxs(d,{as:"div",className:"relative",children:[e.jsxs(n,{type:"button",className:"flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50",children:["Year view",e.jsx(h,{className:"-mr-1 size-5 text-gray-400","aria-hidden":"true"})]}),e.jsx(l,{transition:!0,className:"absolute right-0 z-10 mt-3 w-36 origin-top-right overflow-hidden rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-hidden data-closed:scale-95 data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in",children:e.jsxs("div",{className:"py-1",children:[e.jsx(s,{children:e.jsx("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden",children:"Day view"})}),e.jsx(s,{children:e.jsx("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden",children:"Week view"})}),e.jsx(s,{children:e.jsx("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden",children:"Month view"})}),e.jsx(s,{children:e.jsx("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden",children:"Year view"})})]})})]}),e.jsx("div",{className:"ml-6 h-6 w-px bg-gray-300"}),e.jsx("button",{type:"button",className:"ml-6 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"Add event"})]}),e.jsxs(d,{as:"div",className:"relative ml-6 md:hidden",children:[e.jsxs(n,{className:"-mx-2 flex items-center rounded-full border border-transparent p-2 text-gray-400 hover:text-gray-500",children:[e.jsx("span",{className:"sr-only",children:"Open menu"}),e.jsx(u,{className:"size-5","aria-hidden":"true"})]}),e.jsxs(l,{transition:!0,className:"absolute right-0 z-10 mt-3 w-36 origin-top-right divide-y divide-gray-100 overflow-hidden rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-hidden data-closed:scale-95 data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in",children:[e.jsx("div",{className:"py-1",children:e.jsx(s,{children:e.jsx("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden",children:"Create event"})})}),e.jsx("div",{className:"py-1",children:e.jsx(s,{children:e.jsx("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden",children:"Go to today"})})}),e.jsxs("div",{className:"py-1",children:[e.jsx(s,{children:e.jsx("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden",children:"Day view"})}),e.jsx(s,{children:e.jsx("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden",children:"Week view"})}),e.jsx(s,{children:e.jsx("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden",children:"Month view"})}),e.jsx(s,{children:e.jsx("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden",children:"Year view"})})]})]})]})]})]}),e.jsx("div",{className:"bg-white",children:e.jsx("div",{className:"mx-auto grid max-w-3xl grid-cols-1 gap-x-8 gap-y-16 px-4 py-16 sm:grid-cols-2 sm:px-6 xl:max-w-none xl:grid-cols-3 xl:px-8 2xl:grid-cols-4",children:O.map(t=>e.jsxs("section",{className:"text-center",children:[e.jsx("h2",{className:"text-sm font-semibold text-gray-900",children:t.name}),e.jsxs("div",{className:"mt-6 grid grid-cols-7 text-xs/6 text-gray-500",children:[e.jsx("div",{children:"M"}),e.jsx("div",{children:"T"}),e.jsx("div",{children:"W"}),e.jsx("div",{children:"T"}),e.jsx("div",{children:"F"}),e.jsx("div",{children:"S"}),e.jsx("div",{children:"S"})]}),e.jsx("div",{className:"isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm ring-1 shadow-sm ring-gray-200",children:t.days.map((a,i)=>e.jsx("button",{type:"button",className:j(a.isCurrentMonth?"bg-white text-gray-900":"bg-gray-50 text-gray-400",i===0&&"rounded-tl-lg",i===6&&"rounded-tr-lg",i===t.days.length-7&&"rounded-bl-lg",i===t.days.length-1&&"rounded-br-lg","py-1.5 hover:bg-gray-100 focus:z-10"),children:e.jsx("time",{dateTime:a.date,className:j(a.isToday&&"bg-indigo-600 font-semibold text-white","mx-auto flex size-7 items-center justify-center rounded-full"),children:a.date.split("-").pop().replace(/^0/,"")})},a.date))})]},t.name))})})]})}const L=`import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, EllipsisHorizontalIcon } from '@heroicons/react/20/solid'

const months = [
  {
    name: 'January',
    days: [
      { date: '2021-12-27' },
      { date: '2021-12-28' },
      { date: '2021-12-29' },
      { date: '2021-12-30' },
      { date: '2021-12-31' },
      { date: '2022-01-01', isCurrentMonth: true },
      { date: '2022-01-02', isCurrentMonth: true },
      { date: '2022-01-03', isCurrentMonth: true },
      { date: '2022-01-04', isCurrentMonth: true },
      { date: '2022-01-05', isCurrentMonth: true },
      { date: '2022-01-06', isCurrentMonth: true },
      { date: '2022-01-07', isCurrentMonth: true },
      { date: '2022-01-08', isCurrentMonth: true },
      { date: '2022-01-09', isCurrentMonth: true },
      { date: '2022-01-10', isCurrentMonth: true },
      { date: '2022-01-11', isCurrentMonth: true },
      { date: '2022-01-12', isCurrentMonth: true, isToday: true },
      { date: '2022-01-13', isCurrentMonth: true },
      { date: '2022-01-14', isCurrentMonth: true },
      { date: '2022-01-15', isCurrentMonth: true },
      { date: '2022-01-16', isCurrentMonth: true },
      { date: '2022-01-17', isCurrentMonth: true },
      { date: '2022-01-18', isCurrentMonth: true },
      { date: '2022-01-19', isCurrentMonth: true },
      { date: '2022-01-20', isCurrentMonth: true },
      { date: '2022-01-21', isCurrentMonth: true },
      { date: '2022-01-22', isCurrentMonth: true },
      { date: '2022-01-23', isCurrentMonth: true },
      { date: '2022-01-24', isCurrentMonth: true },
      { date: '2022-01-25', isCurrentMonth: true },
      { date: '2022-01-26', isCurrentMonth: true },
      { date: '2022-01-27', isCurrentMonth: true },
      { date: '2022-01-28', isCurrentMonth: true },
      { date: '2022-01-29', isCurrentMonth: true },
      { date: '2022-01-30', isCurrentMonth: true },
      { date: '2022-01-31', isCurrentMonth: true },
      { date: '2022-02-01' },
      { date: '2022-02-02' },
      { date: '2022-02-03' },
      { date: '2022-02-04' },
      { date: '2022-02-05' },
      { date: '2022-02-06' },
    ],
  },
  // More months...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div>
      <header className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
        <h1 className="text-base font-semibold text-gray-900">
          <time dateTime="2022">2022</time>
        </h1>
        <div className="flex items-center">
          <div className="relative flex items-center rounded-md bg-white shadow-xs md:items-stretch">
            <button
              type="button"
              className="flex h-9 w-12 items-center justify-center rounded-l-md border-y border-l border-gray-300 pr-1 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:pr-0 md:hover:bg-gray-50"
            >
              <span className="sr-only">Previous year</span>
              <ChevronLeftIcon className="size-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              className="hidden border-y border-gray-300 px-3.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 focus:relative md:block"
            >
              Today
            </button>
            <span className="relative -mx-px h-5 w-px bg-gray-300 md:hidden" />
            <button
              type="button"
              className="flex h-9 w-12 items-center justify-center rounded-r-md border-y border-r border-gray-300 pl-1 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:pl-0 md:hover:bg-gray-50"
            >
              <span className="sr-only">Next year</span>
              <ChevronRightIcon className="size-5" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden md:ml-4 md:flex md:items-center">
            <Menu as="div" className="relative">
              <MenuButton
                type="button"
                className="flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50"
              >
                Year view
                <ChevronDownIcon className="-mr-1 size-5 text-gray-400" aria-hidden="true" />
              </MenuButton>

              <MenuItems
                transition
                className="absolute right-0 z-10 mt-3 w-36 origin-top-right overflow-hidden rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-hidden data-closed:scale-95 data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <div className="py-1">
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Day view
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Week view
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Month view
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Year view
                    </a>
                  </MenuItem>
                </div>
              </MenuItems>
            </Menu>
            <div className="ml-6 h-6 w-px bg-gray-300" />
            <button
              type="button"
              className="ml-6 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add event
            </button>
          </div>
          <Menu as="div" className="relative ml-6 md:hidden">
            <MenuButton className="-mx-2 flex items-center rounded-full border border-transparent p-2 text-gray-400 hover:text-gray-500">
              <span className="sr-only">Open menu</span>
              <EllipsisHorizontalIcon className="size-5" aria-hidden="true" />
            </MenuButton>

            <MenuItems
              transition
              className="absolute right-0 z-10 mt-3 w-36 origin-top-right divide-y divide-gray-100 overflow-hidden rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-hidden data-closed:scale-95 data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
            >
              <div className="py-1">
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                  >
                    Create event
                  </a>
                </MenuItem>
              </div>
              <div className="py-1">
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                  >
                    Go to today
                  </a>
                </MenuItem>
              </div>
              <div className="py-1">
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                  >
                    Day view
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                  >
                    Week view
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                  >
                    Month view
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                  >
                    Year view
                  </a>
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>
        </div>
      </header>
      <div className="bg-white">
        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-x-8 gap-y-16 px-4 py-16 sm:grid-cols-2 sm:px-6 xl:max-w-none xl:grid-cols-3 xl:px-8 2xl:grid-cols-4">
          {months.map((month) => (
            <section key={month.name} className="text-center">
              <h2 className="text-sm font-semibold text-gray-900">{month.name}</h2>
              <div className="mt-6 grid grid-cols-7 text-xs/6 text-gray-500">
                <div>M</div>
                <div>T</div>
                <div>W</div>
                <div>T</div>
                <div>F</div>
                <div>S</div>
                <div>S</div>
              </div>
              <div className="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm ring-1 shadow-sm ring-gray-200">
                {month.days.map((day, dayIdx) => (
                  <button
                    key={day.date}
                    type="button"
                    className={classNames(
                      day.isCurrentMonth ? 'bg-white text-gray-900' : 'bg-gray-50 text-gray-400',
                      dayIdx === 0 && 'rounded-tl-lg',
                      dayIdx === 6 && 'rounded-tr-lg',
                      dayIdx === month.days.length - 7 && 'rounded-bl-lg',
                      dayIdx === month.days.length - 1 && 'rounded-br-lg',
                      'py-1.5 hover:bg-gray-100 focus:z-10',
                    )}
                  >
                    <time
                      dateTime={day.date}
                      className={classNames(
                        day.isToday && 'bg-indigo-600 font-semibold text-white',
                        'mx-auto flex size-7 items-center justify-center rounded-full',
                      )}
                    >
                      {day.date.split('-').pop().replace(/^0/, '')}
                    </time>
                  </button>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
`,w=[{name:"January",days:[{date:"2021-12-27"},{date:"2021-12-28"},{date:"2021-12-29"},{date:"2021-12-30"},{date:"2021-12-31"},{date:"2022-01-01",isCurrentMonth:!0},{date:"2022-01-02",isCurrentMonth:!0},{date:"2022-01-03",isCurrentMonth:!0},{date:"2022-01-04",isCurrentMonth:!0},{date:"2022-01-05",isCurrentMonth:!0},{date:"2022-01-06",isCurrentMonth:!0},{date:"2022-01-07",isCurrentMonth:!0},{date:"2022-01-08",isCurrentMonth:!0},{date:"2022-01-09",isCurrentMonth:!0},{date:"2022-01-10",isCurrentMonth:!0},{date:"2022-01-11",isCurrentMonth:!0},{date:"2022-01-12",isCurrentMonth:!0,isToday:!0},{date:"2022-01-13",isCurrentMonth:!0},{date:"2022-01-14",isCurrentMonth:!0},{date:"2022-01-15",isCurrentMonth:!0},{date:"2022-01-16",isCurrentMonth:!0},{date:"2022-01-17",isCurrentMonth:!0},{date:"2022-01-18",isCurrentMonth:!0},{date:"2022-01-19",isCurrentMonth:!0},{date:"2022-01-20",isCurrentMonth:!0},{date:"2022-01-21",isCurrentMonth:!0},{date:"2022-01-22",isCurrentMonth:!0},{date:"2022-01-23",isCurrentMonth:!0},{date:"2022-01-24",isCurrentMonth:!0},{date:"2022-01-25",isCurrentMonth:!0},{date:"2022-01-26",isCurrentMonth:!0},{date:"2022-01-27",isCurrentMonth:!0},{date:"2022-01-28",isCurrentMonth:!0},{date:"2022-01-29",isCurrentMonth:!0},{date:"2022-01-30",isCurrentMonth:!0},{date:"2022-01-31",isCurrentMonth:!0},{date:"2022-02-01"},{date:"2022-02-02"},{date:"2022-02-03"},{date:"2022-02-04"},{date:"2022-02-05"},{date:"2022-02-06"}]},{name:"February",days:[{date:"2022-01-31"},{date:"2022-02-01",isCurrentMonth:!0},{date:"2022-02-02",isCurrentMonth:!0},{date:"2022-02-03",isCurrentMonth:!0},{date:"2022-02-04",isCurrentMonth:!0},{date:"2022-02-05",isCurrentMonth:!0},{date:"2022-02-06",isCurrentMonth:!0},{date:"2022-02-07",isCurrentMonth:!0},{date:"2022-02-08",isCurrentMonth:!0},{date:"2022-02-09",isCurrentMonth:!0},{date:"2022-02-10",isCurrentMonth:!0},{date:"2022-02-11",isCurrentMonth:!0},{date:"2022-02-12",isCurrentMonth:!0},{date:"2022-02-13",isCurrentMonth:!0},{date:"2022-02-14",isCurrentMonth:!0},{date:"2022-02-15",isCurrentMonth:!0},{date:"2022-02-16",isCurrentMonth:!0},{date:"2022-02-17",isCurrentMonth:!0},{date:"2022-02-18",isCurrentMonth:!0},{date:"2022-02-19",isCurrentMonth:!0},{date:"2022-02-20",isCurrentMonth:!0},{date:"2022-02-21",isCurrentMonth:!0},{date:"2022-02-22",isCurrentMonth:!0},{date:"2022-02-23",isCurrentMonth:!0},{date:"2022-02-24",isCurrentMonth:!0},{date:"2022-02-25",isCurrentMonth:!0},{date:"2022-02-26",isCurrentMonth:!0},{date:"2022-02-27",isCurrentMonth:!0},{date:"2022-02-28",isCurrentMonth:!0},{date:"2022-03-01"},{date:"2022-03-02"},{date:"2022-03-03"},{date:"2022-03-04"},{date:"2022-03-05"},{date:"2022-03-06"},{date:"2022-03-07"},{date:"2022-03-08"},{date:"2022-03-09"},{date:"2022-03-10"},{date:"2022-03-11"},{date:"2022-03-12"},{date:"2022-03-13"}]}];function p(...t){return t.filter(Boolean).join(" ")}function Y(){return e.jsxs("div",{children:[e.jsxs("div",{className:"relative grid grid-cols-1 gap-x-14 md:grid-cols-2",children:[e.jsxs("button",{type:"button",className:"absolute -top-1 -left-1.5 flex items-center justify-center p-1.5 text-gray-400 hover:text-gray-500",children:[e.jsx("span",{className:"sr-only",children:"Previous month"}),e.jsx(o,{className:"size-5","aria-hidden":"true"})]}),e.jsxs("button",{type:"button",className:"absolute -top-1 -right-1.5 flex items-center justify-center p-1.5 text-gray-400 hover:text-gray-500",children:[e.jsx("span",{className:"sr-only",children:"Next month"}),e.jsx(c,{className:"size-5","aria-hidden":"true"})]}),w.map((t,a)=>e.jsxs("section",{className:p(a===w.length-1&&"hidden md:block","text-center"),children:[e.jsx("h2",{className:"text-sm font-semibold text-gray-900",children:t.name}),e.jsxs("div",{className:"mt-6 grid grid-cols-7 text-xs/6 text-gray-500",children:[e.jsx("div",{children:"M"}),e.jsx("div",{children:"T"}),e.jsx("div",{children:"W"}),e.jsx("div",{children:"T"}),e.jsx("div",{children:"F"}),e.jsx("div",{children:"S"}),e.jsx("div",{children:"S"})]}),e.jsx("div",{className:"isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm ring-1 shadow-sm ring-gray-200",children:t.days.map((i,r)=>e.jsx("button",{type:"button",className:p(i.isCurrentMonth?"bg-white text-gray-900":"bg-gray-50 text-gray-400",r===0&&"rounded-tl-lg",r===6&&"rounded-tr-lg",r===t.days.length-7&&"rounded-bl-lg",r===t.days.length-1&&"rounded-br-lg","relative py-1.5 hover:bg-gray-100 focus:z-10"),children:e.jsx("time",{dateTime:i.date,className:p(i.isToday&&"bg-indigo-600 font-semibold text-white","mx-auto flex size-7 items-center justify-center rounded-full"),children:i.date.split("-").pop().replace(/^0/,"")})},i.date))})]},a))]}),e.jsxs("section",{className:"mt-12",children:[e.jsx("h2",{className:"text-base font-semibold text-gray-900",children:"Upcoming events"}),e.jsxs("ol",{className:"mt-2 divide-y divide-gray-200 text-sm/6 text-gray-500",children:[e.jsxs("li",{className:"py-4 sm:flex",children:[e.jsx("time",{dateTime:"2022-01-17",className:"w-28 flex-none",children:"Wed, Jan 12"}),e.jsx("p",{className:"mt-2 flex-auto sm:mt-0",children:"Nothing on today’s schedule"})]}),e.jsxs("li",{className:"py-4 sm:flex",children:[e.jsx("time",{dateTime:"2022-01-19",className:"w-28 flex-none",children:"Thu, Jan 13"}),e.jsx("p",{className:"mt-2 flex-auto font-semibold text-gray-900 sm:mt-0",children:"View house with real estate agent"}),e.jsxs("p",{className:"flex-none sm:ml-6",children:[e.jsx("time",{dateTime:"2022-01-13T14:30",children:"2:30 PM"})," - ",e.jsx("time",{dateTime:"2022-01-13T16:30",children:"4:30 PM"})]})]}),e.jsxs("li",{className:"py-4 sm:flex",children:[e.jsx("time",{dateTime:"2022-01-20",className:"w-28 flex-none",children:"Fri, Jan 14"}),e.jsx("p",{className:"mt-2 flex-auto font-semibold text-gray-900 sm:mt-0",children:"Meeting with bank manager"}),e.jsx("p",{className:"flex-none sm:ml-6",children:"All day"})]}),e.jsxs("li",{className:"py-4 sm:flex",children:[e.jsx("time",{dateTime:"2022-01-18",className:"w-28 flex-none",children:"Mon, Jan 17"}),e.jsx("p",{className:"mt-2 flex-auto font-semibold text-gray-900 sm:mt-0",children:"Sign paperwork at lawyers"}),e.jsxs("p",{className:"flex-none sm:ml-6",children:[e.jsx("time",{dateTime:"2022-01-17T10:00",children:"10:00 AM"})," - ",e.jsx("time",{dateTime:"2022-01-17T10:15",children:"10:15 AM"})]})]})]})]})]})}const U=`import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

const months = [
  {
    name: 'January',
    days: [
      { date: '2021-12-27' },
      { date: '2021-12-28' },
      { date: '2021-12-29' },
      { date: '2021-12-30' },
      { date: '2021-12-31' },
      { date: '2022-01-01', isCurrentMonth: true },
      { date: '2022-01-02', isCurrentMonth: true },
      { date: '2022-01-03', isCurrentMonth: true },
      { date: '2022-01-04', isCurrentMonth: true },
      { date: '2022-01-05', isCurrentMonth: true },
      { date: '2022-01-06', isCurrentMonth: true },
      { date: '2022-01-07', isCurrentMonth: true },
      { date: '2022-01-08', isCurrentMonth: true },
      { date: '2022-01-09', isCurrentMonth: true },
      { date: '2022-01-10', isCurrentMonth: true },
      { date: '2022-01-11', isCurrentMonth: true },
      { date: '2022-01-12', isCurrentMonth: true, isToday: true },
      { date: '2022-01-13', isCurrentMonth: true },
      { date: '2022-01-14', isCurrentMonth: true },
      { date: '2022-01-15', isCurrentMonth: true },
      { date: '2022-01-16', isCurrentMonth: true },
      { date: '2022-01-17', isCurrentMonth: true },
      { date: '2022-01-18', isCurrentMonth: true },
      { date: '2022-01-19', isCurrentMonth: true },
      { date: '2022-01-20', isCurrentMonth: true },
      { date: '2022-01-21', isCurrentMonth: true },
      { date: '2022-01-22', isCurrentMonth: true },
      { date: '2022-01-23', isCurrentMonth: true },
      { date: '2022-01-24', isCurrentMonth: true },
      { date: '2022-01-25', isCurrentMonth: true },
      { date: '2022-01-26', isCurrentMonth: true },
      { date: '2022-01-27', isCurrentMonth: true },
      { date: '2022-01-28', isCurrentMonth: true },
      { date: '2022-01-29', isCurrentMonth: true },
      { date: '2022-01-30', isCurrentMonth: true },
      { date: '2022-01-31', isCurrentMonth: true },
      { date: '2022-02-01' },
      { date: '2022-02-02' },
      { date: '2022-02-03' },
      { date: '2022-02-04' },
      { date: '2022-02-05' },
      { date: '2022-02-06' },
    ],
  },
  {
    name: 'February',
    days: [
      { date: '2022-01-31' },
      { date: '2022-02-01', isCurrentMonth: true },
      { date: '2022-02-02', isCurrentMonth: true },
      { date: '2022-02-03', isCurrentMonth: true },
      { date: '2022-02-04', isCurrentMonth: true },
      { date: '2022-02-05', isCurrentMonth: true },
      { date: '2022-02-06', isCurrentMonth: true },
      { date: '2022-02-07', isCurrentMonth: true },
      { date: '2022-02-08', isCurrentMonth: true },
      { date: '2022-02-09', isCurrentMonth: true },
      { date: '2022-02-10', isCurrentMonth: true },
      { date: '2022-02-11', isCurrentMonth: true },
      { date: '2022-02-12', isCurrentMonth: true },
      { date: '2022-02-13', isCurrentMonth: true },
      { date: '2022-02-14', isCurrentMonth: true },
      { date: '2022-02-15', isCurrentMonth: true },
      { date: '2022-02-16', isCurrentMonth: true },
      { date: '2022-02-17', isCurrentMonth: true },
      { date: '2022-02-18', isCurrentMonth: true },
      { date: '2022-02-19', isCurrentMonth: true },
      { date: '2022-02-20', isCurrentMonth: true },
      { date: '2022-02-21', isCurrentMonth: true },
      { date: '2022-02-22', isCurrentMonth: true },
      { date: '2022-02-23', isCurrentMonth: true },
      { date: '2022-02-24', isCurrentMonth: true },
      { date: '2022-02-25', isCurrentMonth: true },
      { date: '2022-02-26', isCurrentMonth: true },
      { date: '2022-02-27', isCurrentMonth: true },
      { date: '2022-02-28', isCurrentMonth: true },
      { date: '2022-03-01' },
      { date: '2022-03-02' },
      { date: '2022-03-03' },
      { date: '2022-03-04' },
      { date: '2022-03-05' },
      { date: '2022-03-06' },
      { date: '2022-03-07' },
      { date: '2022-03-08' },
      { date: '2022-03-09' },
      { date: '2022-03-10' },
      { date: '2022-03-11' },
      { date: '2022-03-12' },
      { date: '2022-03-13' },
    ],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div>
      <div className="relative grid grid-cols-1 gap-x-14 md:grid-cols-2">
        <button
          type="button"
          className="absolute -top-1 -left-1.5 flex items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
        >
          <span className="sr-only">Previous month</span>
          <ChevronLeftIcon className="size-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          className="absolute -top-1 -right-1.5 flex items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
        >
          <span className="sr-only">Next month</span>
          <ChevronRightIcon className="size-5" aria-hidden="true" />
        </button>
        {months.map((month, monthIdx) => (
          <section
            key={monthIdx}
            className={classNames(monthIdx === months.length - 1 && 'hidden md:block', 'text-center')}
          >
            <h2 className="text-sm font-semibold text-gray-900">{month.name}</h2>
            <div className="mt-6 grid grid-cols-7 text-xs/6 text-gray-500">
              <div>M</div>
              <div>T</div>
              <div>W</div>
              <div>T</div>
              <div>F</div>
              <div>S</div>
              <div>S</div>
            </div>
            <div className="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm ring-1 shadow-sm ring-gray-200">
              {month.days.map((day, dayIdx) => (
                <button
                  key={day.date}
                  type="button"
                  className={classNames(
                    day.isCurrentMonth ? 'bg-white text-gray-900' : 'bg-gray-50 text-gray-400',
                    dayIdx === 0 && 'rounded-tl-lg',
                    dayIdx === 6 && 'rounded-tr-lg',
                    dayIdx === month.days.length - 7 && 'rounded-bl-lg',
                    dayIdx === month.days.length - 1 && 'rounded-br-lg',
                    'relative py-1.5 hover:bg-gray-100 focus:z-10',
                  )}
                >
                  <time
                    dateTime={day.date}
                    className={classNames(
                      day.isToday && 'bg-indigo-600 font-semibold text-white',
                      'mx-auto flex size-7 items-center justify-center rounded-full',
                    )}
                  >
                    {day.date.split('-').pop().replace(/^0/, '')}
                  </time>
                </button>
              ))}
            </div>
          </section>
        ))}
      </div>
      <section className="mt-12">
        <h2 className="text-base font-semibold text-gray-900">Upcoming events</h2>
        <ol className="mt-2 divide-y divide-gray-200 text-sm/6 text-gray-500">
          <li className="py-4 sm:flex">
            <time dateTime="2022-01-17" className="w-28 flex-none">
              Wed, Jan 12
            </time>
            <p className="mt-2 flex-auto sm:mt-0">Nothing on today’s schedule</p>
          </li>
          <li className="py-4 sm:flex">
            <time dateTime="2022-01-19" className="w-28 flex-none">
              Thu, Jan 13
            </time>
            <p className="mt-2 flex-auto font-semibold text-gray-900 sm:mt-0">View house with real estate agent</p>
            <p className="flex-none sm:ml-6">
              <time dateTime="2022-01-13T14:30">2:30 PM</time> - <time dateTime="2022-01-13T16:30">4:30 PM</time>
            </p>
          </li>
          <li className="py-4 sm:flex">
            <time dateTime="2022-01-20" className="w-28 flex-none">
              Fri, Jan 14
            </time>
            <p className="mt-2 flex-auto font-semibold text-gray-900 sm:mt-0">Meeting with bank manager</p>
            <p className="flex-none sm:ml-6">All day</p>
          </li>
          <li className="py-4 sm:flex">
            <time dateTime="2022-01-18" className="w-28 flex-none">
              Mon, Jan 17
            </time>
            <p className="mt-2 flex-auto font-semibold text-gray-900 sm:mt-0">Sign paperwork at lawyers</p>
            <p className="flex-none sm:ml-6">
              <time dateTime="2022-01-17T10:00">10:00 AM</time> - <time dateTime="2022-01-17T10:15">10:15 AM</time>
            </p>
          </li>
        </ol>
      </section>
    </div>
  )
}
`,V=[{date:"2021-12-27"},{date:"2021-12-28"},{date:"2021-12-29"},{date:"2021-12-30"},{date:"2021-12-31"},{date:"2022-01-01",isCurrentMonth:!0},{date:"2022-01-02",isCurrentMonth:!0},{date:"2022-01-03",isCurrentMonth:!0},{date:"2022-01-04",isCurrentMonth:!0},{date:"2022-01-05",isCurrentMonth:!0},{date:"2022-01-06",isCurrentMonth:!0},{date:"2022-01-07",isCurrentMonth:!0},{date:"2022-01-08",isCurrentMonth:!0},{date:"2022-01-09",isCurrentMonth:!0},{date:"2022-01-10",isCurrentMonth:!0},{date:"2022-01-11",isCurrentMonth:!0},{date:"2022-01-12",isCurrentMonth:!0,isToday:!0},{date:"2022-01-13",isCurrentMonth:!0},{date:"2022-01-14",isCurrentMonth:!0},{date:"2022-01-15",isCurrentMonth:!0},{date:"2022-01-16",isCurrentMonth:!0},{date:"2022-01-17",isCurrentMonth:!0},{date:"2022-01-18",isCurrentMonth:!0},{date:"2022-01-19",isCurrentMonth:!0},{date:"2022-01-20",isCurrentMonth:!0},{date:"2022-01-21",isCurrentMonth:!0,isSelected:!0},{date:"2022-01-22",isCurrentMonth:!0},{date:"2022-01-23",isCurrentMonth:!0},{date:"2022-01-24",isCurrentMonth:!0},{date:"2022-01-25",isCurrentMonth:!0},{date:"2022-01-26",isCurrentMonth:!0},{date:"2022-01-27",isCurrentMonth:!0},{date:"2022-01-28",isCurrentMonth:!0},{date:"2022-01-29",isCurrentMonth:!0},{date:"2022-01-30",isCurrentMonth:!0},{date:"2022-01-31",isCurrentMonth:!0},{date:"2022-02-01"},{date:"2022-02-02"},{date:"2022-02-03"},{date:"2022-02-04"},{date:"2022-02-05"},{date:"2022-02-06"}],G=[{id:1,name:"Leslie Alexander",imageUrl:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",start:"1:00 PM",startDatetime:"2022-01-21T13:00",end:"2:30 PM",endDatetime:"2022-01-21T14:30"}];function C(...t){return t.filter(Boolean).join(" ")}function q(){return e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("h2",{className:"flex-auto text-sm font-semibold text-gray-900",children:"January 2022"}),e.jsxs("button",{type:"button",className:"-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500",children:[e.jsx("span",{className:"sr-only",children:"Previous month"}),e.jsx(o,{className:"size-5","aria-hidden":"true"})]}),e.jsxs("button",{type:"button",className:"-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500",children:[e.jsx("span",{className:"sr-only",children:"Next month"}),e.jsx(c,{className:"size-5","aria-hidden":"true"})]})]}),e.jsxs("div",{className:"mt-10 grid grid-cols-7 text-center text-xs/6 text-gray-500",children:[e.jsx("div",{children:"M"}),e.jsx("div",{children:"T"}),e.jsx("div",{children:"W"}),e.jsx("div",{children:"T"}),e.jsx("div",{children:"F"}),e.jsx("div",{children:"S"}),e.jsx("div",{children:"S"})]}),e.jsx("div",{className:"mt-2 grid grid-cols-7 text-sm",children:V.map((t,a)=>e.jsx("div",{className:C(a>6&&"border-t border-gray-200","py-2"),children:e.jsx("button",{type:"button",className:C(t.isSelected&&"text-white",!t.isSelected&&t.isToday&&"text-indigo-600",!t.isSelected&&!t.isToday&&t.isCurrentMonth&&"text-gray-900",!t.isSelected&&!t.isToday&&!t.isCurrentMonth&&"text-gray-400",t.isSelected&&t.isToday&&"bg-indigo-600",t.isSelected&&!t.isToday&&"bg-gray-900",!t.isSelected&&"hover:bg-gray-200",(t.isSelected||t.isToday)&&"font-semibold","mx-auto flex size-8 items-center justify-center rounded-full"),children:e.jsx("time",{dateTime:t.date,children:t.date.split("-").pop().replace(/^0/,"")})})},t.date))}),e.jsxs("section",{className:"mt-12",children:[e.jsxs("h2",{className:"text-base font-semibold text-gray-900",children:["Schedule for ",e.jsx("time",{dateTime:"2022-01-21",children:"January 21, 2022"})]}),e.jsx("ol",{className:"mt-4 flex flex-col gap-y-1 text-sm/6 text-gray-500",children:G.map(t=>e.jsxs("li",{className:"group flex items-center gap-x-4 rounded-xl px-4 py-2 focus-within:bg-gray-100 hover:bg-gray-100",children:[e.jsx("img",{src:t.imageUrl,alt:"",className:"size-10 flex-none rounded-full"}),e.jsxs("div",{className:"flex-auto",children:[e.jsx("p",{className:"text-gray-900",children:t.name}),e.jsxs("p",{className:"mt-0.5",children:[e.jsx("time",{dateTime:t.startDatetime,children:t.start})," -"," ",e.jsx("time",{dateTime:t.endDatetime,children:t.end})]})]}),e.jsxs(d,{as:"div",className:"relative opacity-0 group-hover:opacity-100 focus-within:opacity-100",children:[e.jsx("div",{children:e.jsxs(n,{className:"-m-2 flex items-center rounded-full p-1.5 text-gray-500 hover:text-gray-600",children:[e.jsx("span",{className:"sr-only",children:"Open options"}),e.jsx(T,{className:"size-6","aria-hidden":"true"})]})}),e.jsx(l,{transition:!0,className:"absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-hidden data-closed:scale-95 data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in",children:e.jsxs("div",{className:"py-1",children:[e.jsx(s,{children:e.jsx("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden",children:"Edit"})}),e.jsx(s,{children:e.jsx("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden",children:"Cancel"})})]})})]})]},t.id))})]})]})}const Q=`import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline'

const days = [
  { date: '2021-12-27' },
  { date: '2021-12-28' },
  { date: '2021-12-29' },
  { date: '2021-12-30' },
  { date: '2021-12-31' },
  { date: '2022-01-01', isCurrentMonth: true },
  { date: '2022-01-02', isCurrentMonth: true },
  { date: '2022-01-03', isCurrentMonth: true },
  { date: '2022-01-04', isCurrentMonth: true },
  { date: '2022-01-05', isCurrentMonth: true },
  { date: '2022-01-06', isCurrentMonth: true },
  { date: '2022-01-07', isCurrentMonth: true },
  { date: '2022-01-08', isCurrentMonth: true },
  { date: '2022-01-09', isCurrentMonth: true },
  { date: '2022-01-10', isCurrentMonth: true },
  { date: '2022-01-11', isCurrentMonth: true },
  { date: '2022-01-12', isCurrentMonth: true, isToday: true },
  { date: '2022-01-13', isCurrentMonth: true },
  { date: '2022-01-14', isCurrentMonth: true },
  { date: '2022-01-15', isCurrentMonth: true },
  { date: '2022-01-16', isCurrentMonth: true },
  { date: '2022-01-17', isCurrentMonth: true },
  { date: '2022-01-18', isCurrentMonth: true },
  { date: '2022-01-19', isCurrentMonth: true },
  { date: '2022-01-20', isCurrentMonth: true },
  { date: '2022-01-21', isCurrentMonth: true, isSelected: true },
  { date: '2022-01-22', isCurrentMonth: true },
  { date: '2022-01-23', isCurrentMonth: true },
  { date: '2022-01-24', isCurrentMonth: true },
  { date: '2022-01-25', isCurrentMonth: true },
  { date: '2022-01-26', isCurrentMonth: true },
  { date: '2022-01-27', isCurrentMonth: true },
  { date: '2022-01-28', isCurrentMonth: true },
  { date: '2022-01-29', isCurrentMonth: true },
  { date: '2022-01-30', isCurrentMonth: true },
  { date: '2022-01-31', isCurrentMonth: true },
  { date: '2022-02-01' },
  { date: '2022-02-02' },
  { date: '2022-02-03' },
  { date: '2022-02-04' },
  { date: '2022-02-05' },
  { date: '2022-02-06' },
]
const meetings = [
  {
    id: 1,
    name: 'Leslie Alexander',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    start: '1:00 PM',
    startDatetime: '2022-01-21T13:00',
    end: '2:30 PM',
    endDatetime: '2022-01-21T14:30',
  },
  // More meetings...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div>
      <div className="flex items-center">
        <h2 className="flex-auto text-sm font-semibold text-gray-900">January 2022</h2>
        <button
          type="button"
          className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
        >
          <span className="sr-only">Previous month</span>
          <ChevronLeftIcon className="size-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
        >
          <span className="sr-only">Next month</span>
          <ChevronRightIcon className="size-5" aria-hidden="true" />
        </button>
      </div>
      <div className="mt-10 grid grid-cols-7 text-center text-xs/6 text-gray-500">
        <div>M</div>
        <div>T</div>
        <div>W</div>
        <div>T</div>
        <div>F</div>
        <div>S</div>
        <div>S</div>
      </div>
      <div className="mt-2 grid grid-cols-7 text-sm">
        {days.map((day, dayIdx) => (
          <div key={day.date} className={classNames(dayIdx > 6 && 'border-t border-gray-200', 'py-2')}>
            <button
              type="button"
              className={classNames(
                day.isSelected && 'text-white',
                !day.isSelected && day.isToday && 'text-indigo-600',
                !day.isSelected && !day.isToday && day.isCurrentMonth && 'text-gray-900',
                !day.isSelected && !day.isToday && !day.isCurrentMonth && 'text-gray-400',
                day.isSelected && day.isToday && 'bg-indigo-600',
                day.isSelected && !day.isToday && 'bg-gray-900',
                !day.isSelected && 'hover:bg-gray-200',
                (day.isSelected || day.isToday) && 'font-semibold',
                'mx-auto flex size-8 items-center justify-center rounded-full',
              )}
            >
              <time dateTime={day.date}>{day.date.split('-').pop().replace(/^0/, '')}</time>
            </button>
          </div>
        ))}
      </div>
      <section className="mt-12">
        <h2 className="text-base font-semibold text-gray-900">
          Schedule for <time dateTime="2022-01-21">January 21, 2022</time>
        </h2>
        <ol className="mt-4 flex flex-col gap-y-1 text-sm/6 text-gray-500">
          {meetings.map((meeting) => (
            <li
              key={meeting.id}
              className="group flex items-center gap-x-4 rounded-xl px-4 py-2 focus-within:bg-gray-100 hover:bg-gray-100"
            >
              <img src={meeting.imageUrl} alt="" className="size-10 flex-none rounded-full" />
              <div className="flex-auto">
                <p className="text-gray-900">{meeting.name}</p>
                <p className="mt-0.5">
                  <time dateTime={meeting.startDatetime}>{meeting.start}</time> -{' '}
                  <time dateTime={meeting.endDatetime}>{meeting.end}</time>
                </p>
              </div>
              <Menu as="div" className="relative opacity-0 group-hover:opacity-100 focus-within:opacity-100">
                <div>
                  <MenuButton className="-m-2 flex items-center rounded-full p-1.5 text-gray-500 hover:text-gray-600">
                    <span className="sr-only">Open options</span>
                    <EllipsisVerticalIcon className="size-6" aria-hidden="true" />
                  </MenuButton>
                </div>

                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-hidden data-closed:scale-95 data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                >
                  <div className="py-1">
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                      >
                        Edit
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                      >
                        Cancel
                      </a>
                    </MenuItem>
                  </div>
                </MenuItems>
              </Menu>
            </li>
          ))}
        </ol>
      </section>
    </div>
  )
}
`,K=[{date:"2021-12-27"},{date:"2021-12-28"},{date:"2021-12-29"},{date:"2021-12-30"},{date:"2021-12-31"},{date:"2022-01-01",isCurrentMonth:!0},{date:"2022-01-02",isCurrentMonth:!0},{date:"2022-01-03",isCurrentMonth:!0},{date:"2022-01-04",isCurrentMonth:!0},{date:"2022-01-05",isCurrentMonth:!0},{date:"2022-01-06",isCurrentMonth:!0},{date:"2022-01-07",isCurrentMonth:!0},{date:"2022-01-08",isCurrentMonth:!0},{date:"2022-01-09",isCurrentMonth:!0},{date:"2022-01-10",isCurrentMonth:!0},{date:"2022-01-11",isCurrentMonth:!0},{date:"2022-01-12",isCurrentMonth:!0,isToday:!0},{date:"2022-01-13",isCurrentMonth:!0},{date:"2022-01-14",isCurrentMonth:!0},{date:"2022-01-15",isCurrentMonth:!0},{date:"2022-01-16",isCurrentMonth:!0},{date:"2022-01-17",isCurrentMonth:!0},{date:"2022-01-18",isCurrentMonth:!0},{date:"2022-01-19",isCurrentMonth:!0},{date:"2022-01-20",isCurrentMonth:!0},{date:"2022-01-21",isCurrentMonth:!0,isSelected:!0},{date:"2022-01-22",isCurrentMonth:!0},{date:"2022-01-23",isCurrentMonth:!0},{date:"2022-01-24",isCurrentMonth:!0},{date:"2022-01-25",isCurrentMonth:!0},{date:"2022-01-26",isCurrentMonth:!0},{date:"2022-01-27",isCurrentMonth:!0},{date:"2022-01-28",isCurrentMonth:!0},{date:"2022-01-29",isCurrentMonth:!0},{date:"2022-01-30",isCurrentMonth:!0},{date:"2022-01-31",isCurrentMonth:!0},{date:"2022-02-01"},{date:"2022-02-02"},{date:"2022-02-03"},{date:"2022-02-04"},{date:"2022-02-05"},{date:"2022-02-06"}],X=[{id:1,name:"Leslie Alexander",imageUrl:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",start:"1:00 PM",startDatetime:"2022-01-21T13:00",end:"2:30 PM",endDatetime:"2022-01-21T14:30"}];function k(...t){return t.filter(Boolean).join(" ")}function Z(){return e.jsxs("div",{className:"md:grid md:grid-cols-2 md:divide-x md:divide-gray-200",children:[e.jsxs("div",{className:"md:pr-14",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("h2",{className:"flex-auto text-sm font-semibold text-gray-900",children:"January 2022"}),e.jsxs("button",{type:"button",className:"-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500",children:[e.jsx("span",{className:"sr-only",children:"Previous month"}),e.jsx(o,{className:"size-5","aria-hidden":"true"})]}),e.jsxs("button",{type:"button",className:"-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500",children:[e.jsx("span",{className:"sr-only",children:"Next month"}),e.jsx(c,{className:"size-5","aria-hidden":"true"})]})]}),e.jsxs("div",{className:"mt-10 grid grid-cols-7 text-center text-xs/6 text-gray-500",children:[e.jsx("div",{children:"M"}),e.jsx("div",{children:"T"}),e.jsx("div",{children:"W"}),e.jsx("div",{children:"T"}),e.jsx("div",{children:"F"}),e.jsx("div",{children:"S"}),e.jsx("div",{children:"S"})]}),e.jsx("div",{className:"mt-2 grid grid-cols-7 text-sm",children:K.map((t,a)=>e.jsx("div",{className:k(a>6&&"border-t border-gray-200","py-2"),children:e.jsx("button",{type:"button",className:k(t.isSelected&&"text-white",!t.isSelected&&t.isToday&&"text-indigo-600",!t.isSelected&&!t.isToday&&t.isCurrentMonth&&"text-gray-900",!t.isSelected&&!t.isToday&&!t.isCurrentMonth&&"text-gray-400",t.isSelected&&t.isToday&&"bg-indigo-600",t.isSelected&&!t.isToday&&"bg-gray-900",!t.isSelected&&"hover:bg-gray-200",(t.isSelected||t.isToday)&&"font-semibold","mx-auto flex size-8 items-center justify-center rounded-full"),children:e.jsx("time",{dateTime:t.date,children:t.date.split("-").pop().replace(/^0/,"")})})},t.date))})]}),e.jsxs("section",{className:"mt-12 md:mt-0 md:pl-14",children:[e.jsxs("h2",{className:"text-base font-semibold text-gray-900",children:["Schedule for ",e.jsx("time",{dateTime:"2022-01-21",children:"January 21, 2022"})]}),e.jsx("ol",{className:"mt-4 flex flex-col gap-y-1 text-sm/6 text-gray-500",children:X.map(t=>e.jsxs("li",{className:"group flex items-center gap-x-4 rounded-xl px-4 py-2 focus-within:bg-gray-100 hover:bg-gray-100",children:[e.jsx("img",{src:t.imageUrl,alt:"",className:"size-10 flex-none rounded-full"}),e.jsxs("div",{className:"flex-auto",children:[e.jsx("p",{className:"text-gray-900",children:t.name}),e.jsxs("p",{className:"mt-0.5",children:[e.jsx("time",{dateTime:t.startDatetime,children:t.start})," -"," ",e.jsx("time",{dateTime:t.endDatetime,children:t.end})]})]}),e.jsxs(d,{as:"div",className:"relative opacity-0 group-hover:opacity-100 focus-within:opacity-100",children:[e.jsx("div",{children:e.jsxs(n,{className:"-m-2 flex items-center rounded-full p-1.5 text-gray-500 hover:text-gray-600",children:[e.jsx("span",{className:"sr-only",children:"Open options"}),e.jsx(T,{className:"size-6","aria-hidden":"true"})]})}),e.jsx(l,{transition:!0,className:"absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-hidden data-closed:scale-95 data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in",children:e.jsxs("div",{className:"py-1",children:[e.jsx(s,{children:e.jsx("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900",children:"Edit"})}),e.jsx(s,{children:e.jsx("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900",children:"Cancel"})})]})})]})]},t.id))})]})]})}const _=`import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline'

const days = [
  { date: '2021-12-27' },
  { date: '2021-12-28' },
  { date: '2021-12-29' },
  { date: '2021-12-30' },
  { date: '2021-12-31' },
  { date: '2022-01-01', isCurrentMonth: true },
  { date: '2022-01-02', isCurrentMonth: true },
  { date: '2022-01-03', isCurrentMonth: true },
  { date: '2022-01-04', isCurrentMonth: true },
  { date: '2022-01-05', isCurrentMonth: true },
  { date: '2022-01-06', isCurrentMonth: true },
  { date: '2022-01-07', isCurrentMonth: true },
  { date: '2022-01-08', isCurrentMonth: true },
  { date: '2022-01-09', isCurrentMonth: true },
  { date: '2022-01-10', isCurrentMonth: true },
  { date: '2022-01-11', isCurrentMonth: true },
  { date: '2022-01-12', isCurrentMonth: true, isToday: true },
  { date: '2022-01-13', isCurrentMonth: true },
  { date: '2022-01-14', isCurrentMonth: true },
  { date: '2022-01-15', isCurrentMonth: true },
  { date: '2022-01-16', isCurrentMonth: true },
  { date: '2022-01-17', isCurrentMonth: true },
  { date: '2022-01-18', isCurrentMonth: true },
  { date: '2022-01-19', isCurrentMonth: true },
  { date: '2022-01-20', isCurrentMonth: true },
  { date: '2022-01-21', isCurrentMonth: true, isSelected: true },
  { date: '2022-01-22', isCurrentMonth: true },
  { date: '2022-01-23', isCurrentMonth: true },
  { date: '2022-01-24', isCurrentMonth: true },
  { date: '2022-01-25', isCurrentMonth: true },
  { date: '2022-01-26', isCurrentMonth: true },
  { date: '2022-01-27', isCurrentMonth: true },
  { date: '2022-01-28', isCurrentMonth: true },
  { date: '2022-01-29', isCurrentMonth: true },
  { date: '2022-01-30', isCurrentMonth: true },
  { date: '2022-01-31', isCurrentMonth: true },
  { date: '2022-02-01' },
  { date: '2022-02-02' },
  { date: '2022-02-03' },
  { date: '2022-02-04' },
  { date: '2022-02-05' },
  { date: '2022-02-06' },
]
const meetings = [
  {
    id: 1,
    name: 'Leslie Alexander',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    start: '1:00 PM',
    startDatetime: '2022-01-21T13:00',
    end: '2:30 PM',
    endDatetime: '2022-01-21T14:30',
  },
  // More meetings...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="md:grid md:grid-cols-2 md:divide-x md:divide-gray-200">
      <div className="md:pr-14">
        <div className="flex items-center">
          <h2 className="flex-auto text-sm font-semibold text-gray-900">January 2022</h2>
          <button
            type="button"
            className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Previous month</span>
            <ChevronLeftIcon className="size-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Next month</span>
            <ChevronRightIcon className="size-5" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-10 grid grid-cols-7 text-center text-xs/6 text-gray-500">
          <div>M</div>
          <div>T</div>
          <div>W</div>
          <div>T</div>
          <div>F</div>
          <div>S</div>
          <div>S</div>
        </div>
        <div className="mt-2 grid grid-cols-7 text-sm">
          {days.map((day, dayIdx) => (
            <div key={day.date} className={classNames(dayIdx > 6 && 'border-t border-gray-200', 'py-2')}>
              <button
                type="button"
                className={classNames(
                  day.isSelected && 'text-white',
                  !day.isSelected && day.isToday && 'text-indigo-600',
                  !day.isSelected && !day.isToday && day.isCurrentMonth && 'text-gray-900',
                  !day.isSelected && !day.isToday && !day.isCurrentMonth && 'text-gray-400',
                  day.isSelected && day.isToday && 'bg-indigo-600',
                  day.isSelected && !day.isToday && 'bg-gray-900',
                  !day.isSelected && 'hover:bg-gray-200',
                  (day.isSelected || day.isToday) && 'font-semibold',
                  'mx-auto flex size-8 items-center justify-center rounded-full',
                )}
              >
                <time dateTime={day.date}>{day.date.split('-').pop().replace(/^0/, '')}</time>
              </button>
            </div>
          ))}
        </div>
      </div>
      <section className="mt-12 md:mt-0 md:pl-14">
        <h2 className="text-base font-semibold text-gray-900">
          Schedule for <time dateTime="2022-01-21">January 21, 2022</time>
        </h2>
        <ol className="mt-4 flex flex-col gap-y-1 text-sm/6 text-gray-500">
          {meetings.map((meeting) => (
            <li
              key={meeting.id}
              className="group flex items-center gap-x-4 rounded-xl px-4 py-2 focus-within:bg-gray-100 hover:bg-gray-100"
            >
              <img src={meeting.imageUrl} alt="" className="size-10 flex-none rounded-full" />
              <div className="flex-auto">
                <p className="text-gray-900">{meeting.name}</p>
                <p className="mt-0.5">
                  <time dateTime={meeting.startDatetime}>{meeting.start}</time> -{' '}
                  <time dateTime={meeting.endDatetime}>{meeting.end}</time>
                </p>
              </div>
              <Menu as="div" className="relative opacity-0 group-hover:opacity-100 focus-within:opacity-100">
                <div>
                  <MenuButton className="-m-2 flex items-center rounded-full p-1.5 text-gray-500 hover:text-gray-600">
                    <span className="sr-only">Open options</span>
                    <EllipsisVerticalIcon className="size-6" aria-hidden="true" />
                  </MenuButton>
                </div>

                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-hidden data-closed:scale-95 data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                >
                  <div className="py-1">
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900"
                      >
                        Edit
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900"
                      >
                        Cancel
                      </a>
                    </MenuItem>
                  </div>
                </MenuItems>
              </Menu>
            </li>
          ))}
        </ol>
      </section>
    </div>
  )
}
`,pe=()=>{const t=[{id:"01",name:"Small with meetings",component:e.jsx(D,{}),raw:R},{id:"02",name:"Month view",component:e.jsx(B,{}),raw:E},{id:"03",name:"Week view",component:e.jsx(W,{}),raw:F},{id:"04",name:"Day view",component:e.jsx(J,{}),raw:H},{id:"05",name:"Year view",component:e.jsx($,{}),raw:L},{id:"06",name:"Double",component:e.jsx(Y,{}),raw:U},{id:"07",name:"Borderless stacked",component:e.jsx(q,{}),raw:Q},{id:"08",name:"Borderless side-by-side",component:e.jsx(Z,{}),raw:_}];return e.jsx("div",{className:"space-y-10 pb-20",children:t.map(a=>e.jsxs("section",{children:[e.jsxs("h2",{className:"mb-4 text-lg font-bold text-gray-800",children:[a.id,". ",a.name]}),e.jsx(z,{name:a.name,code:a.raw,children:a.component})]},a.id))})};export{pe as default};
