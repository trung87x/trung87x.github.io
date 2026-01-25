# Tailwind CSS UI Lab

The **Tailwind CSS UI Lab** is a feature module designed to showcase a comprehensive collection of UI components, layouts, and page examples built with Tailwind CSS. It serves as both a development playground and a reference library for the project.

## Directory Structure

The module is located at `src/app/(features)/tailwindcss` and follows a structured hierarchy:

```
src/app/(features)/tailwindcss/
├── items.jsx           # Single source of truth for navigation data
├── layout.jsx          # Main layout with Sidebar and Content area
├── page.jsx            # Landing page displaying all categories
├── application-ui/     # 'Application UI' category routes
├── marketing/          # 'Marketing' category routes
├── ecommerce/          # 'Ecommerce' category routes
└── kit/                # 'UI Kit' category routes
```

## Key Components

### 1. Navigation Data (`items.jsx`)

This file exports the `NAVIGATION` constant, which defines the entire structure of the feature.

- **Purpose**: Centralizes the definition of categories (e.g., Application UI), sections (e.g., Forms), and individual items (e.g., Toggles).
- **Usage**:
  - Used by `layout.jsx` to render the Sidebar.
  - Used by `page.jsx` to render the Landing Page cards.
- **Structure**:
  ```javascript
  export const NAVIGATION = [
    {
      id: "group-id",
      title: "Group Title",
      icon: <Icon />,
      sections: [
        {
          label: "Section Label",
          items: [{ name: "Item Name", path: "/route/to/item" }],
        },
      ],
    },
  ];
  ```

### 2. Layout (`layout.jsx`)

- **Type**: Client Component (`use client`).
- **Functionality**:
  - Persists the Sidebar across page navigation.
  - Automatically highlights the active group based on the current URL.
  - Handles the "active group" state (switching between Marketing, App UI, etc.).

### 3. Landing Page (`page.jsx`)

- **Type**: Client Component.
- **Functionality**:
  - Provides a visual entry point.
  - Renders a grid of all available component groups using data from `items.jsx`.

## How to Add New Components

To add a new component or page example to this module:

1.  **Create the Page Component**:
    - Create your folder and `page.jsx` inside the appropriate category directory (e.g., `src/app/(features)/tailwindcss/application-ui/forms/my-new-form/page.jsx`).

2.  **Register in Navigation**:
    - Open `src/app/(features)/tailwindcss/items.jsx`.
    - Find the appropriate group (e.g., `id: "application-ui"`) and section.
    - Add your new item to the `items` array:
      ```javascript
      {
        name: "My New Form",
        path: "/tailwindcss/application-ui/forms/my-new-form",
      },
      ```

3.  **Verify**:
    - The new item will automatically appear in the Sidebar and on the Landing Page.

## Categories

- **Application UI**: Components for building web application interfaces (Forms, Lists, Navigation).
- **Marketing**: Components for landing pages and marketing sites (Heroes, Features, Footers).
- **Ecommerce**: Components for online stores (Product lists, Carts, Checkout).
- **UI Kit**: Atomic components and base elements.
