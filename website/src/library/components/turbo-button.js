import { LitElement, html, css } from "lit";

export class TurboButton extends LitElement
{
    static properties =
    {
        buttonPath :
        {
            attribute : "data-path",
            type      : String
        }
    }

    static styles = css`
        :host
        {
            display    : block;
            height     : calc(2 * var(--style-grid-full));
            padding    : var(--style-grid-half);

            color      : var(--style-color-text);
            background : var(--style-color-interactive);
        }

        :host(:hover)
        {
            background : var(--style-color-interactive-in);
        }
    `;

    render ()
    {
        return html`<a href="${ this.buttonPath }"><slot /></a>`;
    }
}

