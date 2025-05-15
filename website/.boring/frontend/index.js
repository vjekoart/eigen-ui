import * as Core from "./src/core.js";

const Configuration = Core.getConfiguration();

async function build ()
{
    try
    {
        await Core.ensureBuildFolder( Configuration, true );
        await Core.copyAssets       ( Configuration       );

        const state =
        {
            library : {},
            scripts : {},
            styles  : {}
        }

        state.library = await Core.buildLibrary( Configuration                       );
        state.scripts = await Core.buildScripts( Configuration                       );
        state.styles  = await Core.buildStyles ( Configuration, state.library.styles );

        await Core.generateHTML( Configuration, state );
    }
    catch ( error )
    {
        console.error( "\nError during build action!", error );
    }
}

async function dev ()
{
    try
    {
        const state =
        {
            library : {},
            scripts : {},
            styles  : {}
        }

        await Core.ensureBuildFolder( Configuration );
        Core.startServer( Configuration );

        Core.watchLoop( Configuration, async changes =>
        {
            console.info( "\nStarting the loop...\n" );

            changes.copyAssets   && ( await Core.copyAssets( Configuration )                                               );
            changes.buildLibrary && ( state.library = await Core.buildLibrary( Configuration, true )                       );
            changes.buildScripts && ( state.scripts = await Core.buildScripts( Configuration, true )                       );
            changes.buildStyles  && ( state.styles  = await Core.buildStyles ( Configuration, state.library.styles, true ) );
            changes.generateHTML && ( await Core.generateHTML( Configuration, state )                                      );

            console.info( "\nLoop completed." );
        } );
    }
    catch ( error )
    {
        console.error( "\nError during dev action!", error );
    }
}

function start ()
{
    dev();
}

function lint ()
{
    console.log( "Not implemented!" );
}

function test ()
{
    Core.tests.runWebBrowser( Configuration );
}

function e2e ()
{
    Core.tests.runE2E( Configuration );
}

function testCypress ()
{
    Core.tests.cypress.runComponentTests( Configuration );
}

function e2eCypress ()
{
    Core.tests.cypress.runE2E( Configuration );
}

/**
 * Entry point
 */
Core.expose
(
    [
        build,
        dev,
        e2e,
        lint,
        start,
        test,
        testCypress,
        e2eCypress
    ],
    dev
);

export default Core;

