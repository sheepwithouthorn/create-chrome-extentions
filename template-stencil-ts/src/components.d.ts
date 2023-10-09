/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from '@stencil/core/internal'
export namespace Components {
  interface OptionsRoot {}
  interface PopupRoot {}
  interface SideRoot {}
}
declare global {
  interface HTMLOptionsRootElement extends Components.OptionsRoot, HTMLStencilElement {}
  var HTMLOptionsRootElement: {
    prototype: HTMLOptionsRootElement
    new (): HTMLOptionsRootElement
  }
  interface HTMLPopupRootElement extends Components.PopupRoot, HTMLStencilElement {}
  var HTMLPopupRootElement: {
    prototype: HTMLPopupRootElement
    new (): HTMLPopupRootElement
  }
  interface HTMLSideRootElement extends Components.SideRoot, HTMLStencilElement {}
  var HTMLSideRootElement: {
    prototype: HTMLSideRootElement
    new (): HTMLSideRootElement
  }
  interface HTMLElementTagNameMap {
    'options-root': HTMLOptionsRootElement
    'popup-root': HTMLPopupRootElement
    'side-root': HTMLSideRootElement
  }
}
declare namespace LocalJSX {
  interface OptionsRoot {}
  interface PopupRoot {}
  interface SideRoot {}
  interface IntrinsicElements {
    'options-root': OptionsRoot
    'popup-root': PopupRoot
    'side-root': SideRoot
  }
}
export { LocalJSX as JSX }
declare module '@stencil/core' {
  export namespace JSX {
    interface IntrinsicElements {
      'options-root': LocalJSX.OptionsRoot & JSXBase.HTMLAttributes<HTMLOptionsRootElement>
      'popup-root': LocalJSX.PopupRoot & JSXBase.HTMLAttributes<HTMLPopupRootElement>
      'side-root': LocalJSX.SideRoot & JSXBase.HTMLAttributes<HTMLSideRootElement>
    }
  }
}