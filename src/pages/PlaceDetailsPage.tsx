import {
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { places } from "../data/mock";
import RatingStars from "../components/RatingStars";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";

export default function PlaceDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const place = useMemo(() => places.find((p) => p.id === id), [id]);

  if (!place) {
    return (
      <Container sx={{ py: 6 }}>
        <Typography variant="h5" sx={{ fontWeight: 900 }}>
          Fant ikkje staden
        </Typography>
        <Button sx={{ mt: 2 }} onClick={() => navigate("/utforsk")}>
          Tilbake til Utforsk
        </Button>
      </Container>
    );
  }

  return (
    <Container sx={{ py: { xs: 3, md: 4 } }}>
      <Stack spacing={2}>
        <Button
          startIcon={<ArrowBackRoundedIcon />}
          onClick={() => navigate(-1)}
          sx={{ alignSelf: "flex-start" }}
        >
          Tilbake
        </Button>

        <Paper sx={{ overflow: "hidden" }}>
          <Box
            sx={{
              height: { xs: 190, md: 260 },
              background:
                "linear-gradient(135deg, rgba(15,118,110,0.16), rgba(217,119,6,0.14))",
              p: 3,
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <Stack spacing={1}>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                <Chip label={place.area} />
                <Chip variant="outlined" label={place.priceLevel} />
                {place.tags.slice(0, 4).map((t) => (
                  <Chip key={t} size="small" label={t} />
                ))}
              </Stack>
              <Typography
                variant="h3"
                sx={{ fontWeight: 900, letterSpacing: -0.8, lineHeight: 1.05 }}
              >
                {place.name}
              </Typography>
              <RatingStars value={place.rating} />
            </Stack>
          </Box>

          <Box sx={{ p: { xs: 2, md: 3 } }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 8 }}>
                <Typography sx={{ fontWeight: 900, mb: 0.5 }}>Om</Typography>
                <Typography color="text.secondary">
                  {place.description}
                </Typography>

                <Divider sx={{ my: 2 }} />

                <Typography sx={{ fontWeight: 900, mb: 0.5 }}>
                  Praktisk info
                </Typography>
                <Stack spacing={0.75} color="text.secondary">
                  <Typography>Adresse: {place.address}</Typography>
                  {place.openingHours ? (
                    <Typography>Opningstid: {place.openingHours}</Typography>
                  ) : null}
                  {place.phone ? (
                    <Typography>Telefon: {place.phone}</Typography>
                  ) : null}
                </Stack>

                <Divider sx={{ my: 2 }} />

                <Typography sx={{ fontWeight: 900, mb: 0.5 }}>
                  Anmeldelsar (demo)
                </Typography>
                <Typography color="text.secondary">
                  Seinare kan de legge inn stjerner + tekst + moderering. No
                  viser me berre ratingen.
                </Typography>
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <Paper sx={{ p: 2 }}>
                  <Stack spacing={1.2}>
                    <Typography sx={{ fontWeight: 900 }}>Lenker</Typography>
                    {place.website ? (
                      <Button
                        variant="contained"
                        endIcon={<OpenInNewRoundedIcon />}
                        onClick={() => window.open(place.website, "_blank")}
                      >
                        Besøk nettsida
                      </Button>
                    ) : (
                      <Button variant="contained" disabled>
                        Besøk nettsida
                      </Button>
                    )}

                    {place.googleMapsUrl ? (
                      <Button
                        variant="outlined"
                        endIcon={<OpenInNewRoundedIcon />}
                        onClick={() =>
                          window.open(place.googleMapsUrl, "_blank")
                        }
                      >
                        Opne i Google Maps
                      </Button>
                    ) : (
                      <Button variant="outlined" disabled>
                        Opne i Google Maps
                      </Button>
                    )}

                    <Divider />

                    <Typography variant="body2" color="text.secondary">
                      Booking/kjøp kan koblast på her seinare.
                    </Typography>
                    <Button variant="outlined" disabled>
                      Kjøp / Book (kjem)
                    </Button>
                  </Stack>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Stack>
    </Container>
  );
}
