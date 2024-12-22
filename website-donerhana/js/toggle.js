document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', () => {
      const text = button.previousElementSibling;
      const container = button.closest('.text');
  
      
      container.classList.toggle('open');
    });
  });
function toggleFAQ() {
    var content = document.getElementById("faq-content");
    var button = document.getElementById("faq-toggle");
    
    if (content.style.display === "none") {
        content.style.display = "block";
        button.innerHTML = "Pitanje 1: Kako naručiti? (Sakrij odgovor)";
    } else {
        content.style.display = "none";
        button.innerHTML = "Pitanje 1: Kako naručiti?";
    }
}
function toggleFAQ2() {
    var content = document.getElementById("faq-content2");
    var button = document.getElementById("faq-toggle2");
    
    if (content.style.display === "none") {
        content.style.display = "block";
        button.innerHTML = "Pitanje 2: Koje vrste hrane nudite? (Sakrij odgovor)";
    } else {
        content.style.display = "none";
        button.innerHTML = "Pitanje 2: Koje vrste hrane nudite?";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const teamContainer = document.getElementById("teamContainer");
    fetch("/json/baza.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Greška pri učitavanju podataka!");
            }
            return response.json();
        })
        .then(data => {
            data.forEach(member => {
                const teamCard = `
                    <div class="col-md-4 mb-4 d-flex justify-content-center">
                        <div class="card" style="width: 18rem;">
                            <img src="${member.image}" class="card-img-top" alt="${member.name}">
                            <div class="card-body">
                                <h5 class="card-title text-center">${member.name}</h5>
                                <p class="card-text text-center">${member.role}</p>
                                <p class="card-text text-center">${member.description}</p>
                            </div>
                        </div>
                    </div>
                `;
                teamContainer.innerHTML += teamCard;
            });
        })
        .catch(error => {
            console.error("Greška:", error);
            teamContainer.innerHTML = "<p class='text-center'>Nije moguće učitati podatke.</p>";
        });
});
