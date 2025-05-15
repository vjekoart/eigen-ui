export const denvName = "static-website";

export const configuration =
{
    key : "eigen-ui",
    title : "Eigen UI",
    shortName : "EigenUI",
    description : "Holistic UI system.",
    keywords : "eigengrau, ui, retro, futuristic",
    themeColor : "#29297c",
    backgroundColor : "#16161d",
    enableAnalytics : true,
    enableCI : true,
    author : "vjekoart <vjekoart@pm.me>"
}

export const env =
{
    domain : "eigen.retrovizor.xyz",
    node : "22.15",
    localAddress : "localhost",
    localPort : 4200,
    publicUrl : "https://eigen.retrovizor.xyz/"
}

export const execution =
{
    "example": [
        [
            "generate-component",
            "SomeComponent"
        ],
        [
            "generate-service",
            "SomeService"
        ],
        [
            "generate-view",
            "about/Contact",
            true,
            true
        ]
    ]
}


export const style =
{
    "colors": {
        "text": "#f8f8fa",
        "interactive": "#c4aa17",
        "interactiveIn": "#e6ca2a"
    },
    "font": {
        "family": "monospace",
        "size": "16px",
        "weight": 400,
        "strong": 600
    },
    "grid": {
        "full": "24px",
        "half": "12px",
        "third": "8px"
    }
}

