const invertButton = document.getElementById('theme');
const body = document.body;



const getInvertStatus = () => {
    return localStorage.getItem('isInvertedBW') === 'true';
};

const setInvertStatus = (status) => {
    localStorage.setItem('isInvertedBW', status ? 'true' : 'false');
};

let isInvertedBW = getInvertStatus();

if (isInvertedBW) {
    body.classList.add('invert-bw');
}

invertButton.addEventListener('click', () => {
    
    isInvertedBW = !isInvertedBW;
    if (isInvertedBW) {
        body.classList.add('invert-bw');
    } else {
        body.classList.remove('invert-bw');
    }

    setInvertStatus(isInvertedBW); 
    console.log(getInvertStatus());
});