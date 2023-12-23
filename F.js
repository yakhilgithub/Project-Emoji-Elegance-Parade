const props = { x: 0, y: 0, n: 0 }; 
const emoji = ['😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '🙂', '😉', '😊', '😇', '🥰', '😍', '🤩', '😘', '😗', '😚', '😙', '🥲', '😏', '💩', '😎', '😫', '😴', '😛', '🙃', '🤑', '🤠', '👽', '🙉'];
const trail = document.querySelector('.trail');
const app = document.querySelector('.app');
const maker = gsap.to({}, { 
  paused: true,
  duration: 0.06,
  repeat: -1,
  onRepeat: () => {
    if (trail.children.length > 0) {
      const last = trail.children[trail.children.length - 1];
      gsap.to(last, { x: props.x - 45, y: props.y - 45, ease: 'none' });
    }

    const div = document.createElement('div');
    gsap.fromTo(div, {
      innerHTML: emoji[0],
      position: 'absolute',
      userSelect: 'none',
      fontSize: 90,
      x: props.x - 45,
      y: props.y - 45,
      attr: { 'data-n': props.n }
    }, { onComplete: () => div.remove() });
    trail.appendChild(div);
    emoji.push(emoji.shift());
    props.n++; 
  }
});

app.addEventListener('pointerenter', (e) => { props.x = e.x; props.y = e.y; maker.play(); });
app.addEventListener('pointerleave', () => maker.pause());
window.addEventListener('pointermove', (e) => gsap.to(props, { x: e.x, y: e.y }));


