import {
  SparklesIcon,
  MegaphoneIcon,
  ShoppingBagIcon,
  ComputerDesktopIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";

export const NAVIGATION = [
  {
    id: "learn",
    title: "Learn",
    icon: <AcademicCapIcon className="h-4 w-4" />,
    sections: [
      {
        label: "Resources",
        items: [
          { name: "Building Blocks", path: "/tailwindcss/learn/blocks" },
          { name: "Catalyst Kit", path: "/tailwindcss/learn/kit" },
        ],
      },
    ],
  },
  {
    id: "application-ui",
    title: "Application UI",
    icon: <ComputerDesktopIcon className="h-4 w-4" />,
    sections: [
      {
        label: "Application Shells",
        items: [
          {
            name: "Multi-column Layouts",
            path: "/tailwindcss/application-ui/application-shells/multi-column",
          },
          {
            name: "Sidebar Layouts",
            path: "/tailwindcss/application-ui/application-shells/sidebar",
          },
          {
            name: "Stacked Layouts",
            path: "/tailwindcss/application-ui/application-shells/stacked",
          },
        ],
      },
      {
        label: "Data Display",
        items: [
          {
            name: "Calendars",
            path: "/tailwindcss/application-ui/data-display/calendars",
          },
          {
            name: "Description Lists",
            path: "/tailwindcss/application-ui/data-display/description-lists",
          },
          {
            name: "Stats",
            path: "/tailwindcss/application-ui/data-display/stats",
          },
        ],
      },
      {
        label: "Elements",
        items: [
          {
            name: "Avatars",
            path: "/tailwindcss/application-ui/elements/avatars",
          },
          {
            name: "Badges",
            path: "/tailwindcss/application-ui/elements/badges",
          },
          {
            name: "Button Groups",
            path: "/tailwindcss/application-ui/elements/button-groups",
          },
          {
            name: "Buttons",
            path: "/tailwindcss/application-ui/elements/buttons",
          },
          {
            name: "Dropdowns",
            path: "/tailwindcss/application-ui/elements/dropdowns",
          },
        ],
      },
      {
        label: "Feedback",
        items: [
          {
            name: "Alerts",
            path: "/tailwindcss/application-ui/feedback/alerts",
          },
          {
            name: "Empty States",
            path: "/tailwindcss/application-ui/feedback/empty-states",
          },
        ],
      },
      {
        label: "Forms",
        items: [
          {
            name: "Action Panels",
            path: "/tailwindcss/application-ui/forms/action-panels",
          },
          {
            name: "Checkboxes",
            path: "/tailwindcss/application-ui/forms/checkboxes",
          },
          {
            name: "Comboboxes",
            path: "/tailwindcss/application-ui/forms/comboboxes",
          },
          {
            name: "Form Layouts",
            path: "/tailwindcss/application-ui/forms/form-layouts",
          },
          {
            name: "Input Groups",
            path: "/tailwindcss/application-ui/forms/input-groups",
          },
          {
            name: "Radio Groups",
            path: "/tailwindcss/application-ui/forms/radio-groups",
          },
          {
            name: "Select Menus",
            path: "/tailwindcss/application-ui/forms/select-menus",
          },
          {
            name: "Sign-in and Registration",
            path: "/tailwindcss/application-ui/forms/sign-in-forms",
          },
          {
            name: "Textareas",
            path: "/tailwindcss/application-ui/forms/textareas",
          },
          {
            name: "Toggles",
            path: "/tailwindcss/application-ui/forms/toggles",
          },
        ],
      },
      {
        label: "Headings",
        items: [
          {
            name: "Card Headings",
            path: "/tailwindcss/application-ui/headings/card-headings",
          },
          {
            name: "Page Headings",
            path: "/tailwindcss/application-ui/headings/page-headings",
          },
          {
            name: "Section Headings",
            path: "/tailwindcss/application-ui/headings/section-headings",
          },
        ],
      },
      {
        label: "Layout",
        items: [
          { name: "Cards", path: "/tailwindcss/application-ui/layout/cards" },
          {
            name: "Containers",
            path: "/tailwindcss/application-ui/layout/containers",
          },
          {
            name: "Dividers",
            path: "/tailwindcss/application-ui/layout/dividers",
          },
          {
            name: "List Containers",
            path: "/tailwindcss/application-ui/layout/list-containers",
          },
          {
            name: "Media Objects",
            path: "/tailwindcss/application-ui/layout/media-objects",
          },
        ],
      },
      {
        label: "Lists",
        items: [
          { name: "Feeds", path: "/tailwindcss/application-ui/lists/feeds" },
          {
            name: "Grid Lists",
            path: "/tailwindcss/application-ui/lists/grid-lists",
          },
          {
            name: "Stacked Lists",
            path: "/tailwindcss/application-ui/lists/stacked-lists",
          },
          { name: "Tables", path: "/tailwindcss/application-ui/lists/tables" },
        ],
      },
      {
        label: "Navigation",
        items: [
          {
            name: "Breadcrumbs",
            path: "/tailwindcss/application-ui/navigation/breadcrumbs",
          },
          {
            name: "Command Palettes",
            path: "/tailwindcss/application-ui/navigation/command-palettes",
          },
          {
            name: "Navbars",
            path: "/tailwindcss/application-ui/navigation/navbars",
          },
          {
            name: "Pagination",
            path: "/tailwindcss/application-ui/navigation/pagination",
          },
          {
            name: "Progress Bars",
            path: "/tailwindcss/application-ui/navigation/progress-bars",
          },
          {
            name: "Sidebar Navigation",
            path: "/tailwindcss/application-ui/navigation/sidebar-navigation",
          },
          { name: "Tabs", path: "/tailwindcss/application-ui/navigation/tabs" },
          {
            name: "Vertical Navigation",
            path: "/tailwindcss/application-ui/navigation/vertical-navigation",
          },
        ],
      },
      {
        label: "Overlays",
        items: [
          {
            name: "Drawers",
            path: "/tailwindcss/application-ui/overlays/drawers",
          },
          {
            name: "Modal Dialogs",
            path: "/tailwindcss/application-ui/overlays/modal-dialogs",
          },
          {
            name: "Notifications",
            path: "/tailwindcss/application-ui/overlays/notifications",
          },
        ],
      },
      {
        label: "Page Examples",
        items: [
          {
            name: "Detail Screens",
            path: "/tailwindcss/application-ui/page-examples/detail-screens",
          },
          {
            name: "Home Screens",
            path: "/tailwindcss/application-ui/page-examples/home-screens",
          },
          {
            name: "Settings Screens",
            path: "/tailwindcss/application-ui/page-examples/settings-screens",
          },
        ],
      },
    ],
  },
  {
    id: "marketing",
    title: "Marketing",
    icon: <MegaphoneIcon className="h-4 w-4" />,
    sections: [
      {
        label: "Elements",
        items: [
          { name: "Banners", path: "/tailwindcss/marketing/elements/banners" },
          {
            name: "Flyout Menus",
            path: "/tailwindcss/marketing/elements/flyout-menus",
          },
          { name: "Headers", path: "/tailwindcss/marketing/elements/headers" },
        ],
      },
      {
        label: "Feedback",
        items: [
          {
            name: "404 Pages",
            path: "/tailwindcss/marketing/feedback/404-pages",
          },
        ],
      },
      {
        label: "Page Examples",
        items: [
          {
            name: "About Pages",
            path: "/tailwindcss/marketing/page-examples/about-pages",
          },
          {
            name: "Landing Pages",
            path: "/tailwindcss/marketing/page-examples/landing-pages",
          },
          {
            name: "Pricing Pages",
            path: "/tailwindcss/marketing/page-examples/pricing-pages",
          },
        ],
      },
      {
        label: "Page Sections",
        items: [
          {
            name: "Bento Grids",
            path: "/tailwindcss/marketing/page-sections/bento-grids",
          },
          {
            name: "Blog Sections",
            path: "/tailwindcss/marketing/page-sections/blog-sections",
          },
          {
            name: "Hero Sections",
            path: "/tailwindcss/marketing/page-sections/hero-sections",
          },
          {
            name: "Contact Sections",
            path: "/tailwindcss/marketing/page-sections/contact-sections",
          },
          {
            name: "Content Sections",
            path: "/tailwindcss/marketing/page-sections/content-sections",
          },
          {
            name: "CTA Sections",
            path: "/tailwindcss/marketing/page-sections/cta-sections",
          },
          { name: "FAQs", path: "/tailwindcss/marketing/page-sections/faqs" },
          {
            name: "Feature Sections",
            path: "/tailwindcss/marketing/page-sections/feature-sections",
          },
          {
            name: "Footers",
            path: "/tailwindcss/marketing/page-sections/footers",
          },
          {
            name: "Header Sections",
            path: "/tailwindcss/marketing/page-sections/header-sections",
          },
          {
            name: "Logo Clouds",
            path: "/tailwindcss/marketing/page-sections/logo-clouds",
          },
          {
            name: "Newsletter Sections",
            path: "/tailwindcss/marketing/page-sections/newsletter-sections",
          },
          {
            name: "Pricing Sections",
            path: "/tailwindcss/marketing/page-sections/pricing-sections",
          },
          {
            name: "Stats Sections",
            path: "/tailwindcss/marketing/page-sections/stats-sections",
          },
          {
            name: "Team Sections",
            path: "/tailwindcss/marketing/page-sections/team-sections",
          },
          {
            name: "Testimonials",
            path: "/tailwindcss/marketing/page-sections/testimonials",
          },
        ],
      },
    ],
  },
  {
    id: "ecommerce",
    title: "Ecommerce",
    icon: <ShoppingBagIcon className="h-4 w-4" />,
    sections: [
      {
        label: "Components",
        items: [
          {
            name: "Category Filters",
            path: "/tailwindcss/ecommerce/components/category-filters",
          },
          {
            name: "Category Previews",
            path: "/tailwindcss/ecommerce/components/category-previews",
          },
          {
            name: "Checkout Forms",
            path: "/tailwindcss/ecommerce/components/checkout-forms",
          },
          {
            name: "Incentives",
            path: "/tailwindcss/ecommerce/components/incentives",
          },
          {
            name: "Order History",
            path: "/tailwindcss/ecommerce/components/order-history",
          },
          {
            name: "Order Summaries",
            path: "/tailwindcss/ecommerce/components/order-summaries",
          },
          {
            name: "Product Features",
            path: "/tailwindcss/ecommerce/components/product-features",
          },
          {
            name: "Product Lists",
            path: "/tailwindcss/ecommerce/components/product-lists",
          },
          {
            name: "Product Overviews",
            path: "/tailwindcss/ecommerce/components/product-overviews",
          },
          {
            name: "Product Quickviews",
            path: "/tailwindcss/ecommerce/components/product-quickviews",
          },
          {
            name: "Promo Sections",
            path: "/tailwindcss/ecommerce/components/promo-sections",
          },
          {
            name: "Reviews",
            path: "/tailwindcss/ecommerce/components/reviews",
          },
          {
            name: "Shopping Carts",
            path: "/tailwindcss/ecommerce/components/shopping-carts",
          },
          {
            name: "Store Navigation",
            path: "/tailwindcss/ecommerce/components/store-navigation",
          },
        ],
      },
      {
        label: "Page Examples",
        items: [
          {
            name: "Category Pages",
            path: "/tailwindcss/ecommerce/page-examples/category-pages",
          },
          {
            name: "Checkout Pages",
            path: "/tailwindcss/ecommerce/page-examples/checkout-pages",
          },
          {
            name: "Order Detail Pages",
            path: "/tailwindcss/ecommerce/page-examples/order-detail-pages",
          },
          {
            name: "Order History Pages",
            path: "/tailwindcss/ecommerce/page-examples/order-history-pages",
          },
          {
            name: "Product Pages",
            path: "/tailwindcss/ecommerce/page-examples/product-pages",
          },
          {
            name: "Shopping Cart Pages",
            path: "/tailwindcss/ecommerce/page-examples/shopping-cart-pages",
          },
          {
            name: "Storefront Pages",
            path: "/tailwindcss/ecommerce/page-examples/storefront-pages",
          },
        ],
      },
    ],
  },
  {
    id: "ui-kit",
    title: "UI Kit",
    icon: <SparklesIcon className="h-4 w-4" />,
    sections: [
      {
        label: "Layouts",
        items: [
          { name: "Sidebar layout", path: "/tailwindcss/kit/sidebar-layout" },
          { name: "Stacked layout", path: "/tailwindcss/kit/stacked-layout" },
        ],
      },
      {
        label: "Components",
        items: [
          { name: "Alert", path: "/tailwindcss/kit/alert" },
          { name: "Avatar", path: "/tailwindcss/kit/avatar" },
          { name: "Badge", path: "/tailwindcss/kit/badge" },
          { name: "Button", path: "/tailwindcss/kit/button" },
          { name: "Checkbox", path: "/tailwindcss/kit/checkbox" },
          {
            name: "Description list",
            path: "/tailwindcss/kit/description-list",
          },
          { name: "Dialog", path: "/tailwindcss/kit/dialog" },
          { name: "Divider", path: "/tailwindcss/kit/divider" },
          { name: "Dropdown", path: "/tailwindcss/kit/dropdown" },
          { name: "Fieldset", path: "/tailwindcss/kit/fieldset" },
          { name: "Heading", path: "/tailwindcss/kit/heading" },
          { name: "Input", path: "/tailwindcss/kit/input" },
          { name: "Listbox", path: "/tailwindcss/kit/listbox" },
          { name: "Navbar", path: "/tailwindcss/kit/navbar" },
          { name: "Pagination", path: "/tailwindcss/kit/pagination" },
          { name: "Radio Button", path: "/tailwindcss/kit/radio-button" },
          { name: "Select", path: "/tailwindcss/kit/select" },
          { name: "Sidebar", path: "/tailwindcss/kit/sidebar" },
          { name: "Switch", path: "/tailwindcss/kit/switch" },
          { name: "Table", path: "/tailwindcss/kit/table" },
          { name: "Text", path: "/tailwindcss/kit/text" },
          { name: "Textarea", path: "/tailwindcss/kit/textarea" },
        ],
      },
    ],
  },
];
