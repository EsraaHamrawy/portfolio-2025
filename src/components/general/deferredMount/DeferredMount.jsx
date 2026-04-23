import { useEffect, useRef, useState } from "react";

const DeferredMount = ({ children, rootMargin = "250px 0px" }) => {
  const rootRef = useRef(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (shouldRender) {
      return undefined;
    }

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setShouldRender(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        setShouldRender(true);
        observer.disconnect();
      },
      { rootMargin }
    );

    const element = rootRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [rootMargin, shouldRender]);

  return <div ref={rootRef} style={{ minHeight: 1, width: "100%" }}>{shouldRender ? children : null}</div>;
};

export default DeferredMount;
