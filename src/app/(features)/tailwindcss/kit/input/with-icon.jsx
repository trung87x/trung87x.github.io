import { Input, InputGroup } from "@/ui/catalyst/input";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";

export default function Example() {
  return (
    <InputGroup>
      <MagnifyingGlassIcon />
      <Input name="search" placeholder="Search&hellip;" aria-label="Search" />
    </InputGroup>
  );
}
