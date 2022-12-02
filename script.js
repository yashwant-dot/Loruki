console.log('loaded...', window.dataLayer);

document.querySelector('#install-cli').addEventListener('click', () => {
  window.dataLayer.push({
    event: 'install cli',
    usecase: 'download the cli'
  });
});
