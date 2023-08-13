document.querySelectorAll('.accordion__question').forEach(item => {
  item.addEventListener('click', event => {
    console.log('it works');
    let accCollapse = item.nextElementSibling;
    if(!item.classList.contains('collapsing')){
        // Open accordion item
        if(!item.classList.contains('open')){
            console.log('toggle accordion button');
            // Remove "collapse" class and add "collapsing" to .accordion__collapse (sibling)
            accCollapse.classList = 'accordion__collapse collapsing';
            accCollapse.style.display = 'block';
            let accHeight = accCollapse.clientHeight;
            console.log(accHeight);
            setTimeout(() => {
                accCollapse.style.height = accHeight + 'px';
                accCollapse.style.display = '';
            },1);

            accCollapse.classList = 'accordion__collapse collapsing';

            // After X amount of time, remove "collapsing" class and add "collapse open" class
            setTimeout(() => {
                console.log('open accordion content');
                accCollapse.classList = 'accordion__collapse collapse open';
                accCollapse.style.height = '';
            }, 300);
        } 
        else { // Closed accordion item
            // Remove "collapse" class and add "collapsing" to .accordion__collapse (sibling)
            accCollapse.classList = 'accordion__collapse collapsing';
            setTimeout(() => {
                accCollapse.style.height = '0px';
            });
            // After X amount of time, remove "collapsing" class and add "collapse collapse" class
            setTimeout(() => {
                console.log('closing accordion content');
                accCollapse.classList = 'accordion__collapse collapse';
                accCollapse.style.height = '';
            }, 300);
        }
        item.classList.toggle('open');
    }
  })
})