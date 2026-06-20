import { Suspense, lazy, LazyExoticComponent, ComponentType } from "react";
export function lazyLoad(
  importFn: () => Promise<{ default: ComponentType<any> }>,
) {
  const LazyComponent: LazyExoticComponent<ComponentType<any>> = lazy(importFn);
  return (props: any) => (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent {...props} />
    </Suspense>
  );
}
