document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("jobApplicationForm");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); 

        const formData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            dateOfBirth: document.getElementById("dateOfBirth").value,
            position: document.getElementById("position").value,
            coverLetter: document.getElementById("coverLetter").value,
            phone: document.getElementById("phone").value,
            password: document.getElementById("password").value,
        };

        const xhr = new XMLHttpRequest();
        xhr.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                
                showToast("success", "Podaci su uspješno sačuvani!");

                
                let applications = JSON.parse(localStorage.getItem("jobApplications")) || [];
                applications.push(formData);
                localStorage.setItem("jobApplications", JSON.stringify(applications));

                form.reset();
            } else {
                showToast("error", "Došlo je do greške. Pokušajte ponovo.");
            }
        };

        xhr.onerror = () => {
            showToast("error", "Došlo je do greške u mreži. Pokušajte ponovo.");
        };

        xhr.send(JSON.stringify(formData));
    });
});


function showToast(type, message) {
    const toastContainer = document.getElementById('toast-container');
    
    
    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.classList.add('align-items-center');
    toast.classList.add('text-bg-' + type);
    toast.classList.add('border-0');
    toast.setAttribute('role', 'alert');
    toast.setAttribute('aria-live', 'assertive');
    toast.setAttribute('aria-atomic', 'true');

    
    const toastBody = document.createElement('div');
    toastBody.classList.add('toast-body');
    toastBody.textContent = message;
    
    
    toast.appendChild(toastBody);

  
    toastContainer.appendChild(toast);

    
    const bootstrapToast = new bootstrap.Toast(toast);
    bootstrapToast.show();

   
    setTimeout(() => {
        toastContainer.removeChild(toast);
    }, 5000); 
}
