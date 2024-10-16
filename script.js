
document.getElementById('trainForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    const source = document.getElementById('source').value;
    const destination = document.getElementById('destination').value;

    if (source && destination) {
        const response = await fetch('http://localhost:3000/search-trains', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ source, destination })
        });

        const result = await response.json();
        const resultsDiv = document.getElementById('results');
        resultsDiv.style.display = 'block';
        resultsDiv.innerHTML = `<p>${result.message}</p>`;
    } else {
        alert('Please fill in both fields');
    }
});
