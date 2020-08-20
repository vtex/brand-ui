/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Credit to reakit
 * https://github.com/reakit/reakit/blob/master/packages/reakit-utils/src/useForkRef.ts
 */
import * as React from 'react'

function setRef(ref?: React.Ref<any>, value: any = null) {
  if (!ref) return

  if (typeof ref === 'function') {
    ref(value)
  } else {
    ;(ref as React.MutableRefObject<any>).current = value
  }
}

/**
 * Merges up to two React Refs into a single memoized function React Ref so you
 * can pass it to an element.
 *
 * @example
 * import React from "react";
 * import { useForkRef } from "reakit-utils";
 *
 * const Component = React.forwardRef((props, forwardedRef) => {
 *   const internalRef = React.useRef();
 *   const ref = useForkRef(internalRef, forwardedRef);
 *   return <div {...props} ref={ref} />;
 * });
 */
export default function useForkRef(
  refA?: React.Ref<any>,
  refB?: React.Ref<any>
) {
  return React.useMemo(() => {
    if (refA == null && refB == null) {
      return null
    }

    return (value: any) => {
      setRef(refA, value)
      setRef(refB, value)
    }
  }, [refA, refB])
}
