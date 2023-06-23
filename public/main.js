const music = new Audio(`https://cdn.sulatia.com/audio/space_1990-b.mp3`);
music.loop = true;
document.addEventListener(`click`, () => { music.play(); });

if (window.location.hostname != `cyronia.com`) window.location.href = 'https://cyronia.com' + window.location.pathname;