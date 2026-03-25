import { useEffect } from "react";
import { initParticles } from "./particles";

export const useParticles = (canvasRef: React.RefObject<HTMLCanvasElement | null>) => {
    useEffect(() => {
        if (!canvasRef.current) return;

        const cleanup = initParticles(canvasRef.current);

        return cleanup;
    }, [canvasRef]);
};