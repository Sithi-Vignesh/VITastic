document.addEventListener("DOMContentLoaded", function() {
    // Emojis related to food and fun
    const emojis = ['🍕', '🍔', '🍣', '🍦', '🍿', '🎉', '🎈', '🎤', '🎮', '🍩', '🍪', '🍉','🍟','🌭','🥓','🥚','🧇','🥞','🧈','🍞','🥐','🥨','🥯','🥖','🫓','🧀','🥪','🌮','🌯','🍖','🍗','🥟','🥡','🍛','🍨','🍧','🍦','🥧','🧁','🍰','🍾','🍷','🍸','🍹','🍺','🧋','🥤','🎨'];

    // Generate falling emojis
    function generateFallingEmoji() {
        let emoji = document.createElement("div");
        emoji.classList.add("emoji");
        emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];

        // Randomly position emojis at the top of the screen
        let x = Math.random() * window.innerWidth;
        emoji.style.left = `${x}px`;
        emoji.style.top = `-50px`; // Start above the screen

        // Add the emoji to the body
        document.body.appendChild(emoji);

        // Add 'fallen' class once the emoji reaches the bottom
        setTimeout(() => emoji.classList.add('fallen'), 3000); // Adjust the timeout based on animation duration

        // Remove emoji after it falls (prevent memory leaks)
        setTimeout(() => emoji.remove(), 7000); 

        // Animate the falling emoji
        emoji.style.animation = 'fall 3s forwards'; // Fall animation for 3 seconds
    }

    // Generate many emojis at page load (more frequent for heavy rain)
    setInterval(generateFallingEmoji, 50); // Emojis fall every 50ms for a heavy rain effect

    // Mousemove event to push emojis
    document.addEventListener("mousemove", function(event) {
        let emojis = document.querySelectorAll(".emoji");
        emojis.forEach(emoji => {
            const mouseX = event.clientX;
            const mouseY = event.clientY;

            let rect = emoji.getBoundingClientRect();
            let emojiCenterX = rect.left + rect.width / 2;
            let emojiCenterY = rect.top + rect.height / 2;

            let deltaX = mouseX - emojiCenterX;
            let deltaY = mouseY - emojiCenterY;

            // Move the emoji in the direction of the mouse cursor
            emoji.style.transform = `translate(-50%, -50%) translateX(${deltaX / 20}px) translateY(${deltaY / 20}px)`;
        });
    });
});




document.addEventListener('DOMContentLoaded', () => {
    const filterbar = document.querySelector('.connect');
    const dropdowns = document.querySelectorAll('.lnk');
  
    setTimeout(() => {
        filterbar.style.opacity = 1;
        filterbar.style.transform = 'translateX(0)';
    }, 100); 
  
    dropdowns.forEach((dropdown, index) => {
        setTimeout(() => {
            dropdown.style.opacity = 1;
            dropdown.style.transform = 'translateY(0)';
        }, 1000 + index * 100); 
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const contentBlocks = document.querySelectorAll('.visitcon');
  
    contentBlocks.forEach((block, index) => {
        setTimeout(() => {
            block.classList.add('visible');
        }, index * 100); 
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    const contentBlocks = document.querySelectorAll('.strtlogo');
  
    contentBlocks.forEach((block, index) => {
        setTimeout(() => {
            block.classList.add('visible');
        }, index * 100); 
    });
  });