//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
    const line = document.getElementById('line');
    let angle = 0;
    
    // Initial positioning
    line.style.transform = 'translate(-50%, -50%) rotate(0deg)';
    
    // Continuous rotation
    const rotationInterval = setInterval(function() {
        angle += 2;
        line.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
    }, 20);
    
    // Cleanup on page unload (optional)
    window.addEventListener('beforeunload', function() {
        clearInterval(rotationInterval);
    });
});