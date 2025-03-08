
    // Profile Picture Upload & Preview
    document.getElementById("profilePicInput").addEventListener("change", function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById("profilePic").src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    // Toggle View & Edit Mode
    document.getElementById("editProfileBtn").addEventListener("click", function() {
        document.getElementById("viewMode").classList.toggle("d-none");
        document.getElementById("editMode").classList.toggle("d-none");
        document.getElementById("viewName").classList.toggle("d-none");
        document.getElementById("editName").classList.toggle("d-none");

        // Load current values into the input fields
        document.getElementById("editName").value = document.getElementById("viewName").textContent;
        document.getElementById("editEmail").value = document.getElementById("viewEmail").textContent;
        document.getElementById("editPhone").value = document.getElementById("viewPhone").textContent;
        document.getElementById("editExpertise").value = document.getElementById("viewExpertise").textContent;
    });

    // Save Changes
    document.getElementById("saveProfileBtn").addEventListener("click", function() {
        // Update values
        document.getElementById("viewName").textContent = document.getElementById("editName").value;
        document.getElementById("viewEmail").textContent = document.getElementById("editEmail").value;
        document.getElementById("viewPhone").textContent = document.getElementById("editPhone").value;
        document.getElementById("viewExpertise").textContent = document.getElementById("editExpertise").value;

        // Toggle back to view mode
        document.getElementById("viewMode").classList.remove("d-none");
        document.getElementById("editMode").classList.add("d-none");
        document.getElementById("viewName").classList.remove("d-none");
        document.getElementById("editName").classList.add("d-none");

        // Show a Bootstrap modal instead of alert
        let saveModal = new bootstrap.Modal(document.getElementById("saveModal"));
        saveModal.show();
    });
