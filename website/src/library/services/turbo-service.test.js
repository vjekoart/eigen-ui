import { TurboService } from "./turbo-service.js";

describe( "TurboService suite", () =>
{
    it( "constructor", () =>
    {
        const instance = new TurboService();

        expect( instance instanceof TurboService ).toBe( true );        
    });
});

