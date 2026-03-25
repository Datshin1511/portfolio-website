const runParticleEngine = () => {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    let width, height, centerX, centerY;
    let layers = [];

    let mouseX = null;
    let mouseY = null;

    const LAYER_CONFIG = [
        { count: 60, speed: 0.4, size: 0.6 },
        { count: 50, speed: 0.7, size: 0.9 },
        { count: 40, speed: 1.1, size: 1.2 }
    ];

    const MAX_DIST = 100;
    const MOUSE_RADIUS = 130;

    const setCanvasSize = () => {
        width = window.innerWidth;
        height = window.innerHeight;

        canvas.width = width;
        canvas.height = height;

        centerX = width / 2;
        centerY = height / 2;

        initParticles();
    };

    class Particle {
        constructor(layer) {
            this.layer = layer;
            this.init();
        }

        init() {
            // spawn randomly across screen
            this.x = Math.random() * width;
            this.y = Math.random() * height;

            this.size = this.layer.size;

            // depth factor (fake perspective)
            this.z = Math.random() * 1 + 0.2;
        }

        update() {
            // vector from center (viewer POV)
            let dx = this.x - centerX;
            let dy = this.y - centerY;

            let dist = Math.sqrt(dx * dx + dy * dy) + 0.001;

            // normalize
            dx /= dist;
            dy /= dist;

            // move outward (towards edges)
            this.x += dx * this.layer.speed * this.z * 2;
            this.y += dy * this.layer.speed * this.z * 2;

            // increase "depth"
            this.z += 0.01;

            // if out of screen → respawn near center (like new incoming particles)
            if (
                this.x < -50 || this.x > width + 50 ||
                this.y < -50 || this.y > height + 50
            ) {
                this.x = centerX + (Math.random() - 0.5) * 100;
                this.y = centerY + (Math.random() - 0.5) * 100;
                this.z = 0.2;
            }
        }

        draw() {
            const opacity = Math.min(0.4, this.z * 0.4);

            ctx.fillStyle = `rgba(255,255,255,${opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size * this.z, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function initParticles() {
        layers = [];

        LAYER_CONFIG.forEach(cfg => {
            const arr = [];
            for (let i = 0; i < cfg.count; i++) {
                arr.push(new Particle(cfg));
            }
            layers.push(arr);
        });
    }

    function drawConnections() {
        layers.forEach(layer => {
            for (let i = 0; i < layer.length; i++) {
                for (let j = i + 1; j < layer.length; j++) {
                    const dx = layer[i].x - layer[j].x;
                    const dy = layer[i].y - layer[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < MAX_DIST) {
                        const opacity = (1 - dist / MAX_DIST) * 0.12;

                        ctx.strokeStyle = `rgba(200,220,255,${opacity})`;
                        ctx.lineWidth = 0.7;

                        ctx.beginPath();
                        ctx.moveTo(layer[i].x, layer[i].y);
                        ctx.lineTo(layer[j].x, layer[j].y);
                        ctx.stroke();
                    }
                }
            }
        });
    }

    function drawMouseConnections() {
        if (mouseX === null) return;

        layers.flat().forEach(p => {
            const dx = p.x - mouseX;
            const dy = p.y - mouseY;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < MOUSE_RADIUS) {
                const opacity = (1 - dist / MOUSE_RADIUS) * 0.2;

                ctx.strokeStyle = `rgba(255,255,255,${opacity})`;
                ctx.lineWidth = 0.9;

                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(mouseX, mouseY);
                ctx.stroke();

                ctx.fillStyle = `rgba(255,255,255,${opacity + 0.2})`;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size * 1.5, 0, Math.PI * 2);
                ctx.fill();
            }
        });
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        layers.forEach(layer => {
            layer.forEach(p => {
                p.update();
                p.draw();
            });
        });

        drawConnections();
        drawMouseConnections();

        requestAnimationFrame(animate);
    }

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    window.addEventListener('mouseleave', () => {
        mouseX = null;
        mouseY = null;
    });

    window.addEventListener('resize', setCanvasSize);

    setCanvasSize();
    animate();
};

const startCheck = setInterval(() => {
    if (document.getElementById('particle-canvas')) {
        runParticleEngine();
        clearInterval(startCheck);
    }
}, 100);