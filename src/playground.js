//this definitely did not work, but I wanted to look around at animations and stuff.

function segmentWave(segment,startTime) {
    let currTime = new Date().getTime();
    let moveDist = ((currTime - startTime)/1000)*50;
    // segment.style.top = '135px';
    console.log(segment.style.top);
    if(currTime - startTime < 1000) {
        if(parseInt(segment.style.top) > 120) {
            let newDist = parseInt(segment.style.top) - moveDist;
            segment.style.top = newDist + 'px';
        } else {
            let newDist = parseInt(segment.style.top) + moveDist;
            segment.style.top = newDist + 'px';
        }
    }
    window.requestAnimationFrame(segmentWave);
}

function bodyWave() {
    const bodySegments = document.querySelectorAll('.segment');
    const startTime = new Date().getTime();
    for(let i = 0; i< bodySegments.length; i++) {
        bodySegments[i].style.top = '135px';
        segmentWave(bodySegments[i], startTime);
    }
}
