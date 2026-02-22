import { Box, keyframes, type Theme } from "@mui/material";

// Animación de burbuja flotando
const floatBubble = keyframes`
  0% {
    transform: translateY(0) scale(1);
    opacity: 0.7;
  }
  50% {
    transform: translateY(-50vh) scale(1.2);
    opacity: 0.4;
  }
  100% {
    transform: translateY(-100vh) scale(1);
    opacity: 0;
  }
`;

const AboutIlustrationComponent = (): React.ReactNode => {

  // Configuración de burbujas
  const bubbles = Array.from({ length: 12 }, (_, i) => ({
    left: `${Math.random() * 100}%`,
    size: `${10 + Math.random() * 30}px`,
    delay: `${i * 2}s`,
    duration: `${20 + Math.random() * 10}s`,
  }));

  return (
    <Box
      component="div"
      sx={(theme: Theme) => ({
        alignItems: "center",
        backgroundColor: theme?.palette?.secondary?.light,
        display: "flex",
        flexDirection: "column",
        minHeight: "100%",
        justifyContent: "flex-start",
        width: "100%",
        position: "relative",
        overflow: "hidden",
      })}
    >
      {/* 🔎 Burbujas flotando */}
      {bubbles.map((bubble, i) => (
        <Box
          key={i}
          sx={{
            position: "absolute",
            bottom: "-40px",
            left: bubble.left,
            width: bubble.size,
            height: bubble.size,
            borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.3)",
            animation: `${floatBubble} ${bubble.duration} linear infinite`,
            animationDelay: bubble.delay,
            zIndex: 0,
          }}
        />
      ))}

      {/* 🔎 Imagen principal */}
      <Box
        component="img"
        src="/images/profile_photo/about_me_bw.png"
        alt="About me"
        sx={{
          height: "100%",
          objectFit: "cover",
          width: "100%",
          paddingTop: "1em",
          zIndex: 1,
        }}
      />
    </Box>
  );
};

export default AboutIlustrationComponent;
