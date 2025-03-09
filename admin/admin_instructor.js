$(document).ready(function () {
    // Initialize DataTable
    var table = $('#employeeTable').DataTable({
        responsive: true,
        paging: true,
        searching: true,
        ordering: true
    });

    // Toggle Row Details
    $('#employeeTable tbody').on('click', 'td.details-control', function () {
        var tr = $(this).closest('tr');
        var row = table.row(tr);

        if (row.child.isShown()) {
            row.child.hide();
            $(this).html('<i class="fas fa-chevron-right"></i>'); // Change icon back to right arrow
        } else {
            row.child(format(tr)).show();
            $(this).html('<i class="fas fa-chevron-down"></i>'); // Change icon to down arrow
        }
    });

    function format(rowData) {
        return `<div class="p-3 bg-light border rounded">
                    <strong>More Details:</strong>
                    <p>Additional employee details can be displayed here.</p>
                </div>`;
    }
});

// Sorting Function
let sortDirection = 'asc';
function sortByName() {
    var table = $('#employeeTable').DataTable();
    var columnIdx = 1; // Column index for Name
    table.order([columnIdx, sortDirection]).draw();
    sortDirection = (sortDirection === 'asc') ? 'desc' : 'asc'; // Toggle sort direction
}