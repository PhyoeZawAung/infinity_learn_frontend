document.getElementById("demo").addEventListener("shown.bs.collapse", function () {
    document.getElementById("showLess").classList.remove("d-none"); // Show "Show Less"
    document.getElementById("showMore").classList.add("d-none"); // Hide "Show More"
});
document.getElementById("demo").addEventListener("hidden.bs.collapse", function () {
    document.getElementById("showLess").classList.add("d-none"); // Show "Show Less"
    document.getElementById("showMore").classList.remove("d-none"); // Hide "Show More"
});
document.getElementById("expandAllBtn").addEventListener("click", function () {
    let isExpanded = this.textContent === "Close All";
    document.querySelectorAll(".accordion-collapse").forEach(element => {
        element.classList.toggle("show", !isExpanded);
    });
    this.textContent = isExpanded ? "Expand All" : "Close All";
});

document.getElementById("rejectReason").addEventListener("change", function () {
    let customMessageBox = document.getElementById("customMessage");

    if (this.value === "Other") {
        customMessageBox.classList.remove("d-none"); // Show textarea
    } else {
        customMessageBox.classList.add("d-none"); // Hide textarea
        customMessageBox.value = ""; // Clear the input
    }
});
