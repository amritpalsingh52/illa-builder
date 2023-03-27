import { css } from "@emotion/react"
import { getColor } from "@illa-design/react"
import { CurrentMaskPosition } from "@/components/Guide/GuideDraggablePopover/index"

export const topStyle = css`
  position: absolute;
  top: 0;
  transform: translateY(calc(-100% - 20px));
  z-index: 2;
  color: ${getColor("white", "01")};
  padding: 16px;
  border-radius: 2px;
`

const POPOVER_MARGIN = 14

const applyTriangleStyle = (position: CurrentMaskPosition) => {
  const positionStyle =
    position === "top"
      ? css`
          bottom: -5px;
          border-width: 6px 6px 0 6px;
          border-color: ${getColor("techPurple", "01")} transparent transparent
            transparent;
        `
      : css`
          top: -5px;
          border-width: 0 6px 6px 6px;
          border-color: transparent transparent ${getColor("techPurple", "01")}
            transparent;
        `
  return css`
    &::before {
      content: "";
      position: absolute;
      ${positionStyle};
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 0;
      border-style: solid;
    }
  `
}

export const applyPopoverStyle = (
  position: CurrentMaskPosition,
  domRect?: DOMRect,
) => {
  const positionStyle = domRect
    ? position === "top"
      ? css`
          bottom: ${window.innerHeight - domRect?.top + POPOVER_MARGIN}px;
          left: ${domRect?.left}px;
        `
      : css`
          top: ${domRect?.bottom + POPOVER_MARGIN}px;
          left: ${domRect?.left - domRect?.width / 2}px;
        `
    : css``

  return css`
    cursor: move;
    z-index: 2;
    position: absolute;
    background-color: ${getColor("techPurple", "01")};
    color: ${getColor("white", "01")};
    padding: 8px 12px;
    border-radius: 2px;
    ${positionStyle};
    ${applyTriangleStyle(position)};
  `
}
