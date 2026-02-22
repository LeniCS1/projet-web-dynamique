document.querySelector('.efierte-insta').addEventListener('click', function(e) {
    e.preventDefault();
    alert("Vous allez être redirigé vers instagram");
    window.open('https://www.instagram.com/efierte_efrei/', '_blank');
});

function formend() {
    if (IsFormComplete() == false) {
        alert("Veuillez remplir tous les champs du formulaire avant de l'envoyer.");
        return;
    }
    var res = confirm("Êtes-vous sûr de vouloir envoyer ce formulaire ?");
    const form = document.getElementById('contact-form');
    var fieldset = document.getElementById('form-container');
    var retryBtn = document.getElementById('retrybtn');
    if (res == true) {
        form.reset();
        fieldset.style.display = 'none';
        retryBtn.style.display = 'block';
        alert("Merci pour votre participation !");
    } else {
        form.reset();
    }
}

function resetForm() {
    const form = document.getElementById('contact-form');
    var fieldset = document.getElementById('form-container');
    var retryBtn = document.getElementById('retrybtn');
    form.reset();
    fieldset.style.display = 'block';
    retryBtn.style.display = 'none';
}

function IsFormComplete() {
    var nom = document.getElementById("name").value;
    var prenom = document.getElementById("firstname").value;
    var email = document.getElementById("email").value;
    if (nom === "" || prenom === "" || email === "") {
        return false;
    }
    return true;
}
