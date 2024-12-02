document.getElementById('search-input').addEventListener('input', function() {
    let searchQuery = this.value.toLowerCase();
    let machines = document.querySelectorAll('.machine');

    machines.forEach(function(machine) {
        let machineName = machine.querySelector('h2').textContent.toLowerCase();
        if (machineName.includes(searchQuery)) {
            machine.style.display = 'block';
        } else {
            machine.style.display = 'none';
        }
    });
});
