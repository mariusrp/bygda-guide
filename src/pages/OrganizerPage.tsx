import { useMemo, useState } from "react";
import {
  Button,
  Container,
  Paper,
  Stack,
  TextField,
  Typography,
  Divider,
  Chip,
  Grid,
} from "@mui/material";

import { places } from "../data/mock";

export default function OrganizerPage() {
  const place = useMemo(() => places.find((p) => p.id === "fjordguiding"), []);
  const [openingHours, setOpeningHours] = useState(place?.openingHours ?? "");
  const [update, setUpdate] = useState("");
  const [priceHint, setPriceHint] = useState("Frå 590 kr per person");

  return (
    <Container sx={{ py: { xs: 3, md: 4 } }}>
      <Stack spacing={2}>
        <Stack spacing={0.5}>
          <Typography
            variant="h3"
            sx={{ fontWeight: 900, letterSpacing: -0.8 }}
          >
            For bedrifter (demo)
          </Typography>
          <Typography color="text.secondary">
            Her kan arrangørar/bedrifter oppdatere info: opningstider, prisar og
            nyheiter.
          </Typography>
        </Stack>

        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Paper sx={{ p: 2.5 }}>
              <Stack spacing={2}>
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  flexWrap="wrap"
                  useFlexGap
                >
                  <Typography sx={{ fontWeight: 900, fontSize: 18 }}>
                    {place?.name ?? "Bedrift"}
                  </Typography>
                  <Chip
                    label="Publisert (demo)"
                    color="primary"
                    variant="outlined"
                  />
                </Stack>

                <TextField
                  label="Opningstider"
                  value={openingHours}
                  onChange={(e) => setOpeningHours(e.target.value)}
                  fullWidth
                />

                <TextField
                  label="Prisinfo"
                  value={priceHint}
                  onChange={(e) => setPriceHint(e.target.value)}
                  fullWidth
                />

                <TextField
                  label="Ny oppdatering"
                  placeholder="Skriv ei kort nyheit (t.d. ‘Nye tider i påska’)"
                  value={update}
                  onChange={(e) => setUpdate(e.target.value)}
                  fullWidth
                  multiline
                  minRows={3}
                />

                <Divider />

                <Stack direction={{ xs: "column", sm: "row" }} spacing={1}>
                  <Button
                    variant="contained"
                    onClick={() => alert("Lagra (kun demo).")}
                  >
                    Lagre endringar
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => alert("Førehandsvising (kun demo).")}
                  >
                    Førehandsvis
                  </Button>
                </Stack>
              </Stack>
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Paper sx={{ p: 2.5 }}>
              <Stack spacing={1}>
                <Typography sx={{ fontWeight: 900 }}>Tips</Typography>
                <Typography color="text.secondary">
                  Seinare kan de legge inn:
                </Typography>
                <ul
                  style={{
                    margin: 0,
                    paddingLeft: 18,
                    color: "rgba(71,85,105,1)",
                  }}
                >
                  <li>opplasting av bilete</li>
                  <li>tilbod/rabattkode</li>
                  <li>booking / kjøp</li>
                  <li>modererte anmeldelsar</li>
                </ul>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
}
