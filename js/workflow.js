function nextStep(choice) {
    let workflowContainer = document.getElementById("workflow-steps");

    if (!workflowContainer) return;

    let stepHTML = "";

    switch (choice) {
        case "laptop":
            stepHTML = `
                <h2>What brand do you prefer?</h2>
                <button onclick="nextStep('brandA')">Brand A</button>
                <button onclick="nextStep('brandB')">Brand B</button>
            `;
            break;

        case "mobile":
            stepHTML = `
                <h2>Which mobile OS do you prefer?</h2>
                <button onclick="nextStep('ios')">iOS</button>
                <button onclick="nextStep('android')">Android</button>
            `;
            break;

        case "tablet":
            stepHTML = `
                <h2>What size tablet do you need?</h2>
                <button onclick="nextStep('small')">Small (7-8 inches)</button>
                <button onclick="nextStep('large')">Large (10+ inches)</button>
            `;
            break;

        case "brandA":
        case "brandB":
        case "ios":
        case "android":
        case "small":
        case "large":
            stepHTML = `<h2>Great choice! We’ll show you recommendations soon.</h2>`;
            break;

        default:
            stepHTML = `<h2>Invalid selection. Please go back.</h2>`;
    }

    workflowContainer.innerHTML = stepHTML;
}
