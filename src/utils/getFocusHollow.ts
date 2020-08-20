import { rgba } from 'polished'

/**
 *
 * @param surfaceBg: Background of the element
 */
// 🧪EXPERIMENTAL
export default function getFocusHollow(surfaceBg: string) {
  return {
    outline: 'none',
    boxShadow: `0 0 0 0.12rem ${rgba(surfaceBg, 0.5)}}`,
  }
}
