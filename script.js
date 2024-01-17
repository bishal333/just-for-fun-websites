class Paper {

    holdingPaper = false;
    prevMouseX = 0;
    prevMouseY = 0;

    mouseX = 0;
    mouseY = 0;

    velocityX = 0;
    velocityY = 0;

    currentPaperX = 0;
    currentPaperY = 0;

    constructor(paper) {
        this.paper = paper;
    }

    init() {
        this.paper.addEventListener('mousedown', (e) => {
            console.log ('mouse is selected the paper element');
            this.holdingPaper = true;

            this.paper.style.zIndex = highestZ;
            highestZ += 1;
            if (e.button === 0) {
                this.prevMouseX = this.mouseX;
                this.prevMouseY = this.mouseY;

                console.log(this.prevMouseX);
                console.log(this.prevMouseY);
            }

        });

        document.addEventListener('mousemove', (e) => {
            console.log('mouse is moving');
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;

            this.velocityX = this.mouseX - this.prevMouseX;
            this.velocityY = this.mouseY - this.prevMouseY;

            if (this.holdingPaper) {

                this.currentPaperX += this.velocityX;
                this.currentPaperY += this.velocityY;

                this.prevMouseX = this.mouseX;
                this.prevMouseY = this.mouseY;

                this.paper.style.transform = `translateX(${this.currentPaperX}px) translateY(${this.currentPaperY}px)`;

            }

        });
        window.addEventListener('mouseup', (e) => {
          console.log('mouse button is released');
            this.holdingPaper = false;
        })
    }
}

const papers = Array.from(document.querySelectorAll('.paper'));
let highestZ = 1;

papers.forEach(paper => {
    const p = new Paper(paper);
    p.init();
});