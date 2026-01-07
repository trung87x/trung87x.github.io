import {
  Pagination,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui-kit/pagination";

export default function Example() {
  return (
    <Pagination>
      <PaginationPrevious />
      <PaginationNext href="?after=421c1b0" />
    </Pagination>
  );
}
