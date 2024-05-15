function toggleComplaintForm() {
    var form = document.getElementById('complaintForm');
    var confirmationMessage = document.getElementById('confirmationMessage');

    if (form.style.display === 'none' || form.style.display === '') {
        
        form.style.display = 'flex';
        confirmationMessage.style.display = 'none';
    } else {
        
        form.style.display = 'none';
    }
}

function submitComplaint() {
    
    document.getElementById('complaintForm').style.display = 'none';
    document.getElementById('confirmationMessage').style.display = 'block';
}
