import {
  Pagination,
  PaginationNext,
  PaginationPrevious,
} from "@/features/tailwind-v4/components/ui-kit/pagination";

export default function Example() {
  return (
    <Pagination>
      <PaginationPrevious />
      <PaginationNext href="?after=421c1b0" />
    </Pagination>
  );
}
