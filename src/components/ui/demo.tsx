
import { SplashCursor } from "@/components/ui/splash-cursor"

// Custom color generator that uses site colors
const generateSiteColor = () => {
  const colors = [
    { r: 108/255 * 0.3, g: 99/255 * 0.3, b: 255/255 * 0.3 }, // custom-purple with lower intensity
    { r: 0/255 * 0.3, g: 208/255 * 0.3, b: 174/255 * 0.3 }, // custom-turquoise with lower intensity
    { r: 138/255 * 0.3, g: 130/255 * 0.3, b: 255/255 * 0.3 }, // lighter purple variant
    { r: 0/255 * 0.3, g: 180/255 * 0.3, b: 150/255 * 0.3 }, // darker turquoise variant
  ];
  
  return colors[Math.floor(Math.random() * colors.length)];
};

export function NoiseDemo() {
  return (
    <SplashCursor
      COLOR_UPDATE_SPEED={3}
      SPLAT_RADIUS={0.25}
      SPLAT_FORCE={5000}
      DENSITY_DISSIPATION={3.0}
      VELOCITY_DISSIPATION={2.0}
      CURL={4}
      DYE_RESOLUTION={1024}
      SIM_RESOLUTION={256}
    />
  )
}
