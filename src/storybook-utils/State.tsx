import React, { useState, ReactElement } from 'react'

interface Props<T> {
  initial: T
  children: (stateHandle: {
    state: T
    setState: React.Dispatch<React.SetStateAction<T>>
  }) => ReactElement
}

export default function State<T>(props: Props<T>) {
  const [state, setState] = useState<T>(props.initial)

  return props.children({ state, setState })
}
