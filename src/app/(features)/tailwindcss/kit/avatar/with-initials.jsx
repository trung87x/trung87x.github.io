import { Avatar } from "@/features/tailwind-v4/components/ui-kit/avatar";

export default function Example() {
  return (
    <>
      <Avatar
        initials="tw"
        className="size-6 bg-zinc-900 text-white dark:bg-white dark:text-black"
      />
      <Avatar
        initials="tw"
        className="size-8 bg-zinc-900 text-white dark:bg-white dark:text-black"
      />
      <Avatar
        initials="tw"
        className="size-10 bg-zinc-900 text-white dark:bg-white dark:text-black"
      />
    </>
  );
}
