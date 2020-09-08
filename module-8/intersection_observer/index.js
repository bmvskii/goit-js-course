document.addEventListener('DOMContentLoaded', () => {
    const options = {
        rootMargin: '50px',
        threshold: .5,
      };

      const elements = document.querySelectorAll('.entry');
      const onEntry = (entries, observer) => {
        entries.forEach(entry => {
            const { isIntersecting, target } = entry;
            if (isIntersecting) {
                target.classList.remove('hidden');
                // target.style.backgroundColor = 'red';
            } else {
                target.classList.add('hidden');
                // target.style.backgroundColor = 'green';
            }
        });
      };

      function buildThresholdList() {
        let thresholds = []
        let steps = 20

        for (let i = 1.0; i <= steps; i++) {
            let ratio = i / steps
            thresholds.push(ratio)
        }
        return thresholds
    }
      
      const observer = new IntersectionObserver(onEntry, options);
      elements.forEach(elem => observer.observe(elem));
});