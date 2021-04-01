const getRandomColor = () => {
    return randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
}

const getStripEggStyle = (parentEl, children) => {
    const amountChildren = children.length;
    return {
        backgroundColor: getRandomColor(),
        height: parentEl.offsetHeight / amountChildren + 'px',
        marginBottom: 8 / amountChildren + '%'        
    }
}

const getStripEggs = () => {
    const eggs = document.querySelectorAll('.egg--stripe');
    eggs.forEach((egg)=> {
        const children = [...egg.children];
        children.forEach((v) => {
            Object.assign(v.style,getStripEggStyle(egg,children));
        })
    })   
}

(() => {
    getStripEggs();
})()