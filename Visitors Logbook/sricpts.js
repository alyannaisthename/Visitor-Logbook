// Update AJAX URLs in scripts.js
function loadVisitors() {
    fetch('http://localhost/visitors_logbook1/get_visitors.php')
        .then(response => response.json())
        .then(data => {
            const tbody = document.querySelector('#visitorTable tbody');
            tbody.innerHTML = '';
            data.forEach(visitor => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${visitor.name}</td>
                    <td>${visitor.date}</td>
                    <td>${visitor.time_in}</td>
                    <td>${visitor.place}</td>
                    <td>${visitor.purpose}</td>
                    <td>
                        <button class="edit" onclick="editVisitor(${visitor.id})">Edit</button>
                        <button class="delete" onclick="deleteVisitor(${visitor.id})">Delete</button>
                    </td>
                `;
                tbody.appendChild(row);
            });
        });
}

function editVisitor(id) {
    fetch('http://localhost/visitor_logbook1/get_visitors.php')
        .then(response => response.json())
        .then(data => {
            const visitor = data.find(v => v.id === id);
            const newName = prompt('Edit Name:', visitor.name);
            const newDate = prompt('Edit Date:', visitor.date);
            const newTimeIn = prompt('Edit Time In:', visitor.time_in);
            const newPlace = prompt('Edit Place:', visitor.place);
            const newPurpose = prompt('Edit Purpose:', visitor.purpose);

            if (newName && newDate && newTimeIn && newPlace && newPurpose) {
                fetch('http://localhost/visitor_/update_visitor.php', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body: new URLSearchParams({ id, name: newName, date: newDate, timeIn: newTimeIn, place: newPlace, purpose: newPurpose })
                })
                .then(response => response.text())
                .then(result => {
                    alert(result);
                    loadVisitors();
                });
            }
        });
}

function deleteVisitor(id) {
    if (confirm('Are you sure you want to delete this visitor?')) {
        fetch('http://localhost/visitors_logbook1/delete_visitor.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({ id })
        })
        .then(response => response.text())
        .then(result => {
            alert(result);
            loadVisitors();
        });
    }
}

// Initial load of visitors
loadVisitors();