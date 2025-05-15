import { TurboService } from "Library";

function main ()
{
    const turboService = new TurboService();

    console.log( "I have created an instance", turboService );
}

window.addEventListener( "DOMContentLoaded", main );

