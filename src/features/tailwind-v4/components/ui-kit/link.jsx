import * as Headless from "@headlessui/react";
import { Link as RouterLink } from "react-router-dom";
import { forwardRef } from "react";

export const Link = forwardRef(function Link(props, ref) {
  const { href, ...rest } = props;

  return (
    <Headless.DataInteractive>
      <RouterLink {...rest} to={href} ref={ref} />
    </Headless.DataInteractive>
  );
});
