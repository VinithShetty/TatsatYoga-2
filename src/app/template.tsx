import { ViewTransition } from "react";

/**
 * A template re-mounts on every navigation (unlike a layout), so the old page
 * exits and the new one enters — a soft fade between pages. The header and
 * mobile tab bar have their own view-transition names and stay still.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransition enter="page" exit="page" default="none">
      <div>{children}</div>
    </ViewTransition>
  );
}
