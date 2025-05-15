import * as Configuration from "Library/configuration.js";

import { TurboService } from "Library/services/turbo-service.js";

import
{
    turboUtility
}
from "Library/utilities.js";

import { TurboButton } from "Library/components/turbo-button.js";

function initialize ()
{
    customElements.define( "turbo-button", TurboButton );
}

export
{
    Configuration,

    /* Services */
    TurboService,

    /* Utilities */
    turboUtility,

    initialize
}

