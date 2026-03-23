const container = document.getElementById('balloon-container');

function createEmoji() {
    if (!container) return;
    
    const b = document.createElement('div');
    b.className = 'emoji-balloon';
    b.innerText = '🎈'; // الأيموجي اللي أنت عايزه بظبت
    
    b.style.left = Math.random() * 100 + 'vw';
    const duration = Math.random() * 2 + 3; // سرعات مختلفة
    b.style.animationDuration = duration + 's, 1.5s'; 
    
    container.appendChild(b);
    
    setTimeout(() => b.remove(), duration * 1000);
}

// أول ما الصفحة تفتح.. ارمي دفعة بلالين 🎈
window.addEventListener('load', () => {
    for(let i=0; i<30; i++) {
        setTimeout(createEmoji, i * 50); // بيظهروا ورا بعض بسرعة
    }
    
    // ويفضل يرمي بلالين طول ما أنت فاتح
    setInterval(createEmoji, 300);
});