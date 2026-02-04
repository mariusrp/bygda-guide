import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: { xs: "auto", md: "75vh" },
        display: "flex",
        flexDirection: "column",
        background: "#FFFFFF",
      }}
    >
      {/* Hovudinnhold - Minimalistisk og luftig */}
      <Container
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          py: { xs: 6, md: 8 },
        }}
      >
        <Stack
          spacing={4}
          sx={{ maxWidth: 800, mx: "auto", textAlign: "center" }}
        >
          {/* Liten overline */}
          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 700,
              color: "#0F766E",
              letterSpacing: 3,
              textTransform: "uppercase",
            }}
          >
            Din guide til vestlandet
          </Typography>

          {/* Massiv, minimalistisk tittel */}
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: 56, sm: 72, md: 96 },
              fontWeight: 900,
              letterSpacing: -4,
              lineHeight: 0.95,
              color: "#0F172A",
            }}
          >
            Oppdag di bygd
          </Typography>

          {/* Clean undertekst */}
          <Typography
            sx={{
              fontSize: { xs: 18, md: 22 },
              lineHeight: 1.7,
              color: "#64748B",
              maxWidth: 640,
              mx: "auto",
            }}
          >
            Finn dei beste opplevingane, skjulte perler og lokale favorittar i
            Gulen og Masfjorden.
          </Typography>

          {/* Single, bold CTA */}
          <Box>
            <Button
              size="large"
              variant="contained"
              onClick={() => navigate("/utforsk")}
              sx={{
                px: 5,
                py: 2,
                fontSize: 17,
                fontWeight: 700,
                background: "#0F172A",
                color: "white",
                borderRadius: 2,
                textTransform: "none",
                boxShadow: "0 8px 24px rgba(15,23,42,0.2)",
                "&:hover": {
                  background: "#1E293B",
                  transform: "translateY(-4px)",
                  boxShadow: "0 12px 32px rgba(15,23,42,0.3)",
                },
                transition: "all 0.3s ease",
              }}
            >
              Utforsk no
            </Button>
          </Box>

          {/* Minimale kategori-lenker */}
          <Stack
            direction="row"
            spacing={3}
            sx={{
              pt: 2,
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            {[
              "Arrangement",
              "Overnatting",
              "Spisestader",
              "Natur",
              "Kultur",
            ].map((x) => (
              <Button
                key={x}
                variant="text"
                onClick={() => {}}
                sx={{
                  fontSize: 15,
                  fontWeight: 600,
                  color: "#64748B",
                  textTransform: "none",
                  px: 0,
                  "&:hover": {
                    color: "#0F766E",
                    background: "transparent",
                  },
                }}
              >
                {x}
              </Button>
            ))}
          </Stack>
        </Stack>
      </Container>

      {/* Stort, imponerande bilde nederst */}
      <Box
        sx={{
          position: "relative",
          height: { xs: 350, md: 450 },
          width: "100%",
        }}
      >
        {/* Gradient fade-in frå toppen */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 80,
            background: "linear-gradient(to bottom, #FFFFFF, transparent)",
            zIndex: 1,
          }}
        />

        {/* Hovudbildet */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2670&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center 60%",
          }}
        />

        {/* Subtil darkening nederst */}
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 120,
            background: "linear-gradient(to top, rgba(0,0,0,0.3), transparent)",
          }}
        />

        {/* Quick stats overlay */}
        <Container
          sx={{
            position: "absolute",
            bottom: 32,
            left: 0,
            right: 0,
            zIndex: 2,
          }}
        >
          <Stack
            direction="row"
            spacing={4}
            sx={{
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 3,
            }}
          >
            {[
              { num: "150+", label: "Stadar" },
              { num: "2", label: "Kommunar" },
              { num: "7", label: "Kategoriar" },
            ].map((stat) => (
              <Box key={stat.label} sx={{ textAlign: "center" }}>
                <Typography
                  sx={{
                    fontSize: 32,
                    fontWeight: 900,
                    color: "white",
                    textShadow: "0 2px 8px rgba(0,0,0,0.3)",
                  }}
                >
                  {stat.num}
                </Typography>
                <Typography
                  sx={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.9)",
                    textTransform: "uppercase",
                    letterSpacing: 1,
                    textShadow: "0 1px 4px rgba(0,0,0,0.3)",
                  }}
                >
                  {stat.label}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
