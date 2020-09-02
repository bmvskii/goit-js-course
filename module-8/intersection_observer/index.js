document.addEventListener('DOMContentLoaded', () => {
    const options = {
        root: null,
        rootMargin: '50px',
        threshold: .5,
      };

      const elements = document.querySelectorAll('.entry');
      const onEntry = (entries, observer) => {
        entries.forEach(entry => {
            const { isIntersecting, target } = entry;
            if (isIntersecting) {
                target.classList.remove('hidden');
            } else {
                target.classList.add('hidden');
            }
        });
      };
      
      const observer = new IntersectionObserver(onEntry, options);
      elements.forEach(elem => observer.observe(elem));
});