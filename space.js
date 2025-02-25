function startCountdown() {
    const now = new Date();
    const eventDate = new Date(now.getFullYear(), 11, 23, 0, 0, 0); // December 23 of current year
    if (now > eventDate) {
        eventDate.setFullYear(now.getFullYear() + 1); // Move to next year if date has passed
    }
    function updateCountdown() {
        const currentTime = new Date().getTime();
        const timeLeft = eventDate - currentTime;
        if (timeLeft < 0) {
            document.getElementById("countdown").innerHTML = "Event Started!";
            return;
        }
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
    setInterval(updateCountdown, 1000);
}
startCountdown();