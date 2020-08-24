/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Credits to reakit
 * https://github.com/reakit/reakit/blob/master/packages/reakit-system/src/__utils/forwardRef.ts
 */
import * as React from 'react'

export default function forwardRef<
  T extends React.ForwardRefRenderFunction<any, any>
>(component: T) {
  return (React.forwardRef(component) as unknown) as T
}
