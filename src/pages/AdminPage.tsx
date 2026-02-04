import {
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
  Button,
  Divider,
  Chip,
} from "@mui/material";
import { places, events } from "../data/mock";

export default function AdminPage() {
  return (
    <Container sx={{ py: { xs: 3, md: 4 } }}>
      <Stack spacing={2}>
        <Stack spacing={0.5}>
          <Typography
            variant="h3"
            sx={{ fontWeight: 900, letterSpacing: -0.8 }}
          >
            Admin (demo)
          </Typography>
          <Typography color="text.secondary">
            Dykkar kontrollpanel for å legge til/endre innhald.
          </Typography>
        </Stack>

        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Paper sx={{ p: 2.5 }}>
              <Stack spacing={1.2}>
                <Typography sx={{ fontWeight: 900 }}>Status</Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  <Chip label={`${places.length} stadar`} />
                  <Chip label={`${events.length} arrangement`} />
                  <Chip label="0 rapportar (demo)" />
                </Stack>
                <Divider />
                <Button
                  variant="contained"
                  onClick={() => alert("Ny stad (demo).")}
                >
                  Legg til ny stad
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => alert("Ny kategori (demo).")}
                >
                  Administrer kategoriar
                </Button>
              </Stack>
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, md: 8 }}>
            <Paper sx={{ p: 2.5 }}>
              <Stack spacing={1.5}>
                <Typography sx={{ fontWeight: 900 }}>
                  Innhaldskø (demo)
                </Typography>
                <Typography color="text.secondary">
                  Her kan de ha “til godkjenning”, kvalitetssjekk, bilete,
                  tekstar osv.
                </Typography>
                <Divider />
                <Stack spacing={1}>
                  {places.map((p) => (
                    <Paper key={p.id} sx={{ p: 1.6 }}>
                      <Stack
                        direction={{ xs: "column", sm: "row" }}
                        spacing={1}
                        alignItems={{ sm: "center" }}
                        justifyContent="space-between"
                      >
                        <Stack>
                          <Typography sx={{ fontWeight: 900 }}>
                            {p.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {p.area} · {p.priceLevel} · rating {p.rating}
                          </Typography>
                        </Stack>
                        <Stack direction="row" spacing={1}>
                          <Button
                            size="small"
                            variant="outlined"
                            onClick={() => alert("Rediger (demo).")}
                          >
                            Rediger
                          </Button>
                          <Button
                            size="small"
                            variant="contained"
                            onClick={() => alert("Publisert (demo).")}
                          >
                            Publiser
                          </Button>
                        </Stack>
                      </Stack>
                    </Paper>
                  ))}
                </Stack>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
}
