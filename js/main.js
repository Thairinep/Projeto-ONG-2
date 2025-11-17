document.addEventListener('DOMContentLoaded', () => {

    const navToggler = document.getElementById('navToggler');
    const navMenu = document.getElementById('navMenu');
    if (navToggler) {
        navToggler.addEventListener('click', () => {
            navMenu.classList.toggle('is-active');
        });
    }

    const forms = document.querySelectorAll('.needs-validation');
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });

    function formatInput(element, format) {
        if (!element) return;
        element.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            let formattedValue = '';
            let formatIndex = 0;
            for (let i = 0; i < value.length && formatIndex < format.length; i++) {
                if (format[formatIndex] === '#') {
                    formattedValue += value[i];
                    formatIndex++;
                } else {
                    formattedValue += format[formatIndex];
                    formatIndex++;
                    i--;
                }
            }
            e.target.value = formattedValue;
        });
    }

    formatInput(document.getElementById('cpf'), '###.###.###-##');
    formatInput(document.getElementById('telefone'), '(##) #####-####');
    formatInput(document.getElementById('cep'), '#####-###');

    const modalTriggers = document.querySelectorAll('[data-toggle="modal"]');
    const modalCloses = document.querySelectorAll('.modal-close, [data-dismiss="modal"]');

    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const targetModal = document.querySelector(trigger.dataset.target);
            if (targetModal) {
                targetModal.classList.add('show');
            }
        });
    });

    modalCloses.forEach(close => {
        close.addEventListener('click', () => {
            const modal = close.closest('.modal');
            if (modal) {
                modal.classList.remove('show');
            }
        });
    });

    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal')) {
            event.target.classList.remove('show');
        }
    });
});