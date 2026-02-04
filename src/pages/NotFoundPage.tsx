import { Button, Container, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <Container sx={{ py: 8 }}>
      <Stack spacing={1.5}>
        <Typography variant="h3" sx={{ fontWeight: 900 }}>
          404
        </Typography>
        <Typography color="text.secondary">
          Sida finst ikkje. Kanskje du vil utforske noko nytt?
        </Typography>
        <Button
          variant="contained"
          onClick={() => navigate("/utforsk")}
          sx={{ alignSelf: "flex-start" }}
        >
          Gå til Utforsk
        </Button>
      </Stack>
    </Container>
  );
}
