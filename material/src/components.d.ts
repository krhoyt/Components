/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MdAppBar {
        "concealed": boolean;
        "hidden": boolean;
    }
    interface MdColumn {
        "concealed": boolean;
        "hidden": boolean;
    }
    interface MdLabel {
        "concealed": boolean;
        "hidden": boolean;
        "truncate": boolean;
    }
    interface MdRow {
        "concealed": boolean;
        "hidden": boolean;
    }
    interface MdSpacer {
        "concealed": boolean;
        "hidden": boolean;
        "width": number;
    }
    interface MdToolbar {
        "concealed": boolean;
        "hidden": boolean;
    }
}
declare global {
    interface HTMLMdAppBarElement extends Components.MdAppBar, HTMLStencilElement {
    }
    var HTMLMdAppBarElement: {
        prototype: HTMLMdAppBarElement;
        new (): HTMLMdAppBarElement;
    };
    interface HTMLMdColumnElement extends Components.MdColumn, HTMLStencilElement {
    }
    var HTMLMdColumnElement: {
        prototype: HTMLMdColumnElement;
        new (): HTMLMdColumnElement;
    };
    interface HTMLMdLabelElement extends Components.MdLabel, HTMLStencilElement {
    }
    var HTMLMdLabelElement: {
        prototype: HTMLMdLabelElement;
        new (): HTMLMdLabelElement;
    };
    interface HTMLMdRowElement extends Components.MdRow, HTMLStencilElement {
    }
    var HTMLMdRowElement: {
        prototype: HTMLMdRowElement;
        new (): HTMLMdRowElement;
    };
    interface HTMLMdSpacerElement extends Components.MdSpacer, HTMLStencilElement {
    }
    var HTMLMdSpacerElement: {
        prototype: HTMLMdSpacerElement;
        new (): HTMLMdSpacerElement;
    };
    interface HTMLMdToolbarElement extends Components.MdToolbar, HTMLStencilElement {
    }
    var HTMLMdToolbarElement: {
        prototype: HTMLMdToolbarElement;
        new (): HTMLMdToolbarElement;
    };
    interface HTMLElementTagNameMap {
        "md-app-bar": HTMLMdAppBarElement;
        "md-column": HTMLMdColumnElement;
        "md-label": HTMLMdLabelElement;
        "md-row": HTMLMdRowElement;
        "md-spacer": HTMLMdSpacerElement;
        "md-toolbar": HTMLMdToolbarElement;
    }
}
declare namespace LocalJSX {
    interface MdAppBar {
        "concealed"?: boolean;
        "hidden"?: boolean;
    }
    interface MdColumn {
        "concealed"?: boolean;
        "hidden"?: boolean;
    }
    interface MdLabel {
        "concealed"?: boolean;
        "hidden"?: boolean;
        "truncate"?: boolean;
    }
    interface MdRow {
        "concealed"?: boolean;
        "hidden"?: boolean;
    }
    interface MdSpacer {
        "concealed"?: boolean;
        "hidden"?: boolean;
        "width"?: number;
    }
    interface MdToolbar {
        "concealed"?: boolean;
        "hidden"?: boolean;
    }
    interface IntrinsicElements {
        "md-app-bar": MdAppBar;
        "md-column": MdColumn;
        "md-label": MdLabel;
        "md-row": MdRow;
        "md-spacer": MdSpacer;
        "md-toolbar": MdToolbar;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "md-app-bar": LocalJSX.MdAppBar & JSXBase.HTMLAttributes<HTMLMdAppBarElement>;
            "md-column": LocalJSX.MdColumn & JSXBase.HTMLAttributes<HTMLMdColumnElement>;
            "md-label": LocalJSX.MdLabel & JSXBase.HTMLAttributes<HTMLMdLabelElement>;
            "md-row": LocalJSX.MdRow & JSXBase.HTMLAttributes<HTMLMdRowElement>;
            "md-spacer": LocalJSX.MdSpacer & JSXBase.HTMLAttributes<HTMLMdSpacerElement>;
            "md-toolbar": LocalJSX.MdToolbar & JSXBase.HTMLAttributes<HTMLMdToolbarElement>;
        }
    }
}
