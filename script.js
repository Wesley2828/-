
function showSection(id) {
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(id).style.display = 'block';
}

function savePlan() {
    const input = document.getElementById('plan-input').value;
    localStorage.setItem('dailyPlan', input);
    alert('已儲存計劃！');
}

function addNote() {
    const input = document.getElementById('note-input').value;
    if (!input) return;
    const container = document.getElementById('notes-container');
    const note = document.createElement('div');
    note.textContent = input;
    container.appendChild(note);

    let notes = JSON.parse(localStorage.getItem('dailyNotes')) || [];
    notes.push(input);
    localStorage.setItem('dailyNotes', JSON.stringify(notes));
}

function setCountdown() {
    const date = document.getElementById('target-date').value;
    if (!date) return;
    const target = new Date(date);
    const now = new Date();
    const diff = Math.floor((target - now) / (1000 * 60 * 60 * 24));
    document.getElementById('countdown-display').textContent = `還有 ${diff} 天！`;
    localStorage.setItem('targetDate', date);
}

window.onload = () => {
    const notes = JSON.parse(localStorage.getItem('dailyNotes')) || [];
    const container = document.getElementById('notes-container');
    notes.forEach(note => {
        const div = document.createElement('div');
        div.textContent = note;
        container.appendChild(div);
    });

    const date = localStorage.getItem('targetDate');
    if (date) {
        document.getElementById('target-date').value = date;
        setCountdown();
    }
};
