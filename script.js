function updateDayOfWeek() {
        const dayOfWeekElement = document.getElementById('dayOfTheWeek');
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const currentDayIndex = new Date().getDay();
        const currentDayName = daysOfWeek[currentDayIndex]; 
        dayOfWeekElement.textContent = currentDayName;
    }
    updateDayOfWeek();

 function updateUTCTime() {
            const utcTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
            const currentTimeMillis = new Date().getTime();
            utcTimeElement.textContent = currentTimeMillis;
     }

        updateUTCTime();
        setInterval(updateUTCTime, 1000);