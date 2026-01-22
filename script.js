function toggleMenu() {
            const nav = document.getElementById('nav-menu');
            const hamburger = document.querySelector('.hamburger');
            nav.classList.toggle('active');
            hamburger.classList.toggle('active');
            
            // Prevenir scroll cuando el menú está abierto en móvil
            if (nav.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        }

        function showPortfolio(e) {
            e.preventDefault();
            document.getElementById('portfolio').style.display = 'grid';
            document.getElementById('contact').classList.remove('active');
            document.getElementById('nav-portfolio').classList.add('active');
            document.getElementById('nav-contact').classList.remove('active');
            
            // Cerrar menú móvil si está abierto
            closeMenu();
        }

        function showContact(e) {
            e.preventDefault();
            document.getElementById('portfolio').style.display = 'none';
            document.getElementById('contact').classList.add('active');
            document.getElementById('nav-contact').classList.add('active');
            document.getElementById('nav-portfolio').classList.remove('active');
            
            // Cerrar menú móvil si está abierto
            closeMenu();
        }

        function closeMenu() {
            const nav = document.getElementById('nav-menu');
            const hamburger = document.querySelector('.hamburger');
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                hamburger.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        }

        function openModal(element) {
            const modal = document.getElementById('modal');
            const modalImg = document.getElementById('modal-img');
            const img = element.querySelector('img');
            
            modalImg.src = img.src;
            modalImg.alt = img.alt;
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeModal(e) {
            const modal = document.getElementById('modal');
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        // Cerrar modal con tecla ESC
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeModal(e);
            }
        });