// discovery button
document.getElementById('discover-btn').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = './pagetwo.html';
})
// color btn
document.getElementById('theme-btn').addEventListener('click', function(event) {
    event.preventDefault();
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    document.body.style.backgroundColor = randomColor;
});

// date btn
function Dateupdate() {
    const date = new Date();
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    document.getElementById('time').textContent = date.toLocaleDateString('en-US', options);
}
setInterval(Dateupdate, 1000);

// counters btnsss
let Count = 0;
const completeBtns = document.getElementsByClassName('complete-btn');
const taskCount = document.getElementById('task-count-btn');
const taskAssigned = document.getElementById('task-assigned-btn');
const activityLog = document.getElementById('activity-log');
const totalTasks = completeBtns.length;

for (let i = 0; i < completeBtns.length; i++) {
    completeBtns[i].addEventListener('click', function() {
        
        this.disabled = true;
        taskCount.textContent = parseInt(taskCount.textContent) + 1;
        taskAssigned.textContent = parseInt(taskAssigned.textContent) - 1;
        
        alert('Board Updated Successfully.');
          
        const taskName = this.closest('.card').querySelector('h2').textContent;
        const time = new Date().toLocaleTimeString();
        const messageDiv = document.createElement('div');
        messageDiv.className = 'text-sm activity-message';
        messageDiv.innerHTML = `
            <p class="font-medium">You have completed the task - ${taskName}</p>
            <p class="text-xs text-gray-500 mt-1">${time}</p>
        `;
        activityLog.appendChild(messageDiv);

        
        Count++;
        if(Count === totalTasks) {
            setTimeout(() => {
                alert('Congratulations!!! You Have Completed All the Task.');
            }, 100);
        }
    });
}

    document.getElementById('clear-history').addEventListener('click', function() {
    activityLog.innerHTML = '';
});

