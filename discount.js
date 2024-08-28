document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('discount-row').addEventListener('click', function(e){
        if (e.target.classList.contains('discount')) {
            e.preventDefault();
            document.getElementById('product').innerHTML = e.target.dataset['product'];
            document.getElementById('discount-title').innerHTML = e.target.dataset['discount-title'];
            document.getElementById('discount-code').innerHTML = e.target.dataset['discount-code'];
            bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast')).show();
        }
    });

    document.addEventListener('keydown', function(event) {
        event.key === 'Escape' ? bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast')).hide() : '';

    })
});