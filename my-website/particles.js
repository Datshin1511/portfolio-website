const runParticleEngine = () => {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    let particles = [];
    let width, height, centerX, centerY;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    const ABSORB_RADIUS = 40;

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
        constructor() {
            this.init();
        }

        init() {
            // spawn far away
            const angle = Math.random() * Math.PI * 2;
            const radius = 2000 + Math.random() * 1500;

            this.x = Math.cos(angle) * radius;
            this.y = Math.sin(angle) * radius;
            this.z = Math.random() * 2000 + 500;

            this.vx = 0;
            this.vy = 0;

            this.size = Math.random() * 1.5 + 0.5;
        }

        update() {
            this.z -= 2.2;

            const k = 800 / this.z;
            const px = this.x * k + centerX;
            const py = this.y * k + centerY;

            const dx = mouseX - px;
            const dy = mouseY - py;
            const dist = Math.sqrt(dx * dx + dy * dy) + 0.001;

            // 🚨 absorb
            if (dist < ABSORB_RADIUS) {
                this.init();
                return;
            }

            // ✅ FIXED FORCE MODEL (VISIBLE)
            const force = 0.05 + (120 / dist); // strong far + stronger near

            this.vx += (dx / dist) * force * (this.z / 1200);
            this.vy += (dy / dist) * force * (this.z / 1200);

            this.vx *= 0.96;
            this.vy *= 0.96;

            this.x += this.vx;
            this.y += this.vy;

            if (this.z <= 0) {
                this.init();
            }
        }

        draw() {
            const k = 800 / this.z;
            const px = this.x * k + centerX;
            const py = this.y * k + centerY;

            if (px >= 0 && px <= width && py >= 0 && py <= height) {
                const opacity = Math.min(1, (1000 / this.z) * 0.7);

                ctx.fillStyle = `rgba(255,255,255,${opacity})`;
                ctx.beginPath();
                ctx.arc(px, py, this.size * k, 0, Math.PI * 2);
                ctx.fill();
            }
        }
    }

    function initParticles() {
        particles = [];
        for (let i = 0; i < 600; i++) {
            particles.push(new Particle());
        }
    }

    function drawBlackHole() {
        // subtle glow so you SEE the center
        const gradient = ctx.createRadialGradient(
            mouseX, mouseY, 0,
            mouseX, mouseY, 80
        );

        gradient.addColorStop(0, "rgba(255,255,255,0.15)");
        gradient.addColorStop(1, "rgba(255,255,255,0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 80, 0, Math.PI * 2);
        ctx.fill();
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        particles.forEach(p => {
            p.update();
            p.draw();
        });

        drawBlackHole();

        requestAnimationFrame(animate);
    }

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    window.addEventListener('touchmove', (e) => {
        mouseX = e.touches[0].clientX;
        mouseY = e.touches[0].clientY;
    });

    window.addEventListener('resize', setCanvasSize);

    setCanvasSize();
    animate();
};

// React-safe start
const startCheck = setInterval(() => {
    if (document.getElementById('particle-canvas')) {
        runParticleEngine();
        clearInterval(startCheck);
    }
}, 100);