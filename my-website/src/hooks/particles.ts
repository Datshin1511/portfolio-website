type LayerConfig = {
    count: number;
    speed: number;
    size: number;
};

type ParticleType = {
    x: number;
    y: number;
    z: number;
    size: number;
    layer: LayerConfig;
    update: () => void;
    draw: () => void;
};

export const initParticles = (canvas: HTMLCanvasElement) => {
    const context = canvas.getContext('2d');
    if (!context) {
        console.warn("Canvas 2D context not available");
        return () => {};
    }

    const ctx = context;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let centerX = width / 2;
    let centerY = height / 2;

    canvas.width = width;
    canvas.height = height;

    let layers: ParticleType[][] = [];

    let mouseX: number | null = null;
    let mouseY: number | null = null;

    const LAYER_CONFIG: LayerConfig[] = [
        { count: 60, speed: 0.4, size: 0.6 },
        { count: 50, speed: 0.7, size: 0.9 },
        { count: 40, speed: 1.1, size: 1.2 }
    ];

    const MAX_DIST = 100;
    const MOUSE_RADIUS = 130;

    class Particle implements ParticleType {
        x: number;
        y: number;
        z: number;
        size: number;
        layer: LayerConfig;

        constructor(layer: LayerConfig) {
            this.layer = layer;

            // initialize here → fixes TS2564
            this.x = 0;
            this.y = 0;
            this.z = 0;
            this.size = layer.size;

            this.init();
        }

        init() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.z = Math.random() * 1 + 0.2;
        }

        update() {
            let dx = this.x - centerX;
            let dy = this.y - centerY;
            const dist = Math.sqrt(dx * dx + dy * dy) + 0.001;

            dx /= dist;
            dy /= dist;

            this.x += dx * this.layer.speed * this.z * 2;
            this.y += dy * this.layer.speed * this.z * 2;

            this.z += 0.01;

            if (
                this.x < -50 || this.x > width + 50 ||
                this.y < -50 || this.y > height + 50
            ) {
                // spawn in a WIDE area around center (not clustered)
                const spread = Math.max(width, height) * 0.6;

                this.x = centerX + (Math.random() - 0.5) * spread;
                this.y = centerY + (Math.random() - 0.5) * spread;

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

    const initParticles = () => {
        layers = [];

        LAYER_CONFIG.forEach(cfg => {
            const arr: ParticleType[] = [];
            for (let i = 0; i < cfg.count; i++) {
                arr.push(new Particle(cfg));
            }
            layers.push(arr);
        });
    };

    const drawConnections = () => {
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
    };

    const drawMouseConnections = () => {
        if (mouseX === null || mouseY === null) return;

        layers.flat().forEach(p => {
            const dx = p.x - mouseX!;
            const dy = p.y - mouseY!;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < MOUSE_RADIUS) {
                const opacity = (1 - dist / MOUSE_RADIUS) * 0.2;

                ctx.strokeStyle = `rgba(255,255,255,${opacity})`;
                ctx.lineWidth = 0.9;

                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(mouseX!, mouseY!);
                ctx.stroke();
            }
        });
    };

    let animationId: number;

    const animate = () => {
        ctx.clearRect(0, 0, width, height);

        layers.forEach(layer => {
            layer.forEach(p => {
                p.update();
                p.draw();
            });
        });

        drawConnections();
        drawMouseConnections();

        animationId = requestAnimationFrame(animate);
    };

    const resize = () => {
        width = window.innerWidth;
        height = window.innerHeight;
        centerX = width / 2;
        centerY = height / 2;

        canvas.width = width;
        canvas.height = height;

        initParticles();
    };

    const mouseMove = (e: MouseEvent) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    };

    const mouseLeave = () => {
        mouseX = null;
        mouseY = null;
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mouseleave', mouseLeave);

    initParticles();
    animate();

    return () => {
        cancelAnimationFrame(animationId);
        window.removeEventListener('resize', resize);
        window.removeEventListener('mousemove', mouseMove);
        window.removeEventListener('mouseleave', mouseLeave);
    };
};