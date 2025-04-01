document.addEventListener("DOMContentLoaded", function() {
    const emojis = ['🍕', '🍔', '🍣', '🍦', '🍿', '🎉', '🎈', '🎤', '🎮', '🍩', '🍪', '🍉','🍟','🌭','🥓','🥚','🧇','🥞','🧈','🍞','🥐','🥨','🥯','🥖','🫓','🧀','🥪','🌮','🌯','🍖','🍗','🥟','🥡','🍛','🍨','🍧','🍦','🥧','🧁','🍰','🍾','🍷','🍸','🍹','🍺','🧋','🥤','🎨'];

    function generateFallingEmoji() {
        let emoji = document.createElement("div");
        emoji.classList.add("emoji");
        emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];

        let x = Math.random() * window.innerWidth;
        emoji.style.left = `${x}px`;
        emoji.style.top = `-50px`; 

        document.body.appendChild(emoji);

        setTimeout(() => emoji.classList.add('fallen'), 3000);

        setTimeout(() => emoji.remove(), 7000); 

        emoji.style.animation = 'fall 3s forwards';
    }

    setInterval(generateFallingEmoji, 50); 
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
        }, 1000 + index * 150); 
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