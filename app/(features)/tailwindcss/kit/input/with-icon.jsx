import {
  Input,
  InputGroup,
} from "@/features/tailwind-v4/components/ui-kit/input";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";

export default function Example() {
  return (
    <InputGroup>
      <MagnifyingGlassIcon />
      <Input name="search" placeholder="Search&hellip;" aria-label="Search" />
    </InputGroup>
  );
}
