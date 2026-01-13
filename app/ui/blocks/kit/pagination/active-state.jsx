import {
  Pagination,
  PaginationList,
  PaginationNext,
  PaginationPage,
  PaginationPrevious,
} from "@/features/tailwind-v4/components/ui-kit/pagination";

export default function Example() {
  return (
    <Pagination>
      <PaginationPrevious href="?page=1" />
      <PaginationList>
        <PaginationPage href="?page=1">1</PaginationPage>
        <PaginationPage href="?page=2" current>
          2
        </PaginationPage>
        <PaginationPage href="?page=3">3</PaginationPage>
      </PaginationList>
      <PaginationNext href="?page=3" />
    </Pagination>
  );
}
