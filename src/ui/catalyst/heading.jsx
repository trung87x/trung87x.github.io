import clsx from "clsx";

// Bảng ánh xạ chuẩn M3: Level càng cao, vai trò (Role) càng nhỏ dần
const headingStyles = {
  1: "display-small sm:display-medium", // h1: Dùng cho tiêu đề trang lớn
  2: "headline-medium sm:headline-large", // h2: Tiêu đề các mục lớn
  3: "headline-small sm:headline-medium", // h3: Tiêu đề các tiểu mục
  4: "title-large", // h4: Tiêu đề Card/Dialog
  5: "title-medium", // h5: Tiêu đề nhóm nội dung
  6: "title-small", // h6: Tiêu đề nhỏ nhất
};

export function Heading({ className, level = 1, ...props }) {
  let Element = `h${level}`;

  return (
    <Element
      {...props}
      className={clsx(className, "on-surface", headingStyles[level])}
    />
  );
}

const subheadingStyles = {
  2: "title-medium", // h2: Tiêu đề phụ (mặc định)
  3: "title-small", // h3: Tiêu đề phụ nhỏ hơn
};

export function Subheading({ className, level = 2, ...props }) {
  let Element = `h${level}`;

  return (
    <Element
      {...props}
      className={clsx(className, "on-surface", subheadingStyles[level])}
    />
  );
}
