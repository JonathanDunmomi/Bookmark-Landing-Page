const btn= document.getElementById('navlinks');
        
 function showMenu(){
    navlinks.style.right= "0"
 }

 function hideMenu(){
    navlinks.style.right= "-200px"
 }

 const modeToggle = document.getElementById('modeToggle');
        const body = document.body;

        // Check for saved mode preference in localStorage
        const savedMode = localStorage.getItem('theme');
        if (savedMode === 'dark') {
            body.classList.add('dark-mode');
        }

        modeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
        
            // Change button icon dynamically
            if (body.classList.contains('dark-mode')) {
                modeToggle.innerHTML = '🌙';
            } else {
                modeToggle.innerHTML = '☀️';
            }
        });