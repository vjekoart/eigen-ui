import
{
    renderComponent,
    requestSelector
} from "./test.utilities.js";

import { turboUtility } from "./utilities.js";

describe( "Utilities suite", () =>
{
    it( "turboUtility", async () =>
    {
        expect( turboUtility( 2, 3 ) ).toBe( 5 );
    });

    /**
     * An example on how to a utility that modifies the HTML code.
     */
    it( "DOM manipulation testing", async () =>
    {
        const textToRender = "<p>Sample text</p>";
        const expectedText = "Sample text";

        void await renderComponent( "p", textToRender );
        
        const element = await requestSelector( "p" );

        expect( element.innerText ).toBe( expectedText );
    });
});

