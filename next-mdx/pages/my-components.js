import React from "react";

export function MyComponent() {
  return <>MyComponent helloworld</>;
}

export function MyLayoutComponent({ meta, children }) {
  return (
    <>
      {children}
      <pre>{JSON.stringify(meta)}</pre>
    </>
  );
}
