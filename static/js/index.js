window.onload = function() {
  const descDOM = document.querySelector('.desc');
  descDOM.innerHTML = 'loading...';
  setTimeout(()=> {
    descDOM.innerHTML = 'Django makes it easier to build better web apps more quickly and with less code.';
  }, 1500);
}