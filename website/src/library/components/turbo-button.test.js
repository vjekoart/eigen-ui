import { renderComponent } from "../test.utilities.js";
import { TurboButton     } from "./turbo-button.js";

describe( "TurboButton", () =>
{
    beforeAll(() =>
    {
        customElements.define( "turbo-button", TurboButton );
    });

    it( "renders: default", async () =>
    {
        const snippet        = `<turbo-button data-path="/example/">This is a button</turbo-button>`;
        const { shadowRoot } = await renderComponent( "turbo-button", snippet );
        const slot           = shadowRoot.querySelector( "slot" );

        expect( slot.assignedNodes()[ 0 ].textContent ).toBe( "This is a button" );
        expect( shadowRoot.innerHTML.includes( "/example/" ) ).toBeTruthy();
    });
});

