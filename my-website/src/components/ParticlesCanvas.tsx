import { useRef } from "react";
import { useParticles } from "../hooks/useParticles";

import "../styles/css/particles.css"

export default function ParticlesCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useParticles(canvasRef);

    return (
        <canvas ref={canvasRef} className="particle-canvas"/>
    );
}