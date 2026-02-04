import { Container, Grid, Stack } from "@mui/material";
import Hero from "../components/Hero";
import SectionHeader from "../components/SectionHeader";
import CategoryGrid from "../components/CategoryGrid";
import { places } from "../data/mock";
import PlaceCard from "../components/PlaceCard";
import MapPanel from "../components/MapPanel";
import { useMemo, useState } from "react";

export default function HomePage() {
  const featured = useMemo(() => places.slice(0, 4), []);
  const [selectedId, setSelectedId] = useState<string | undefined>(
    featured[0]?.id,
  );

  return (
    <>
      <Hero />

      <Container sx={{ py: { xs: 4, md: 6 } }}>
        <SectionHeader
          title="Kva vil du oppleve?"
          subtitle="Vel ein kategori og oppdag alt bygda har å by på."
        />
        <CategoryGrid />
      </Container>

      <Container sx={{ pb: { xs: 4, md: 6 } }}>
        <SectionHeader
          title="Utvalde stadar"
          subtitle="Nokre forslag for å kome i gang – meir kjem etter kvart."
        />
        <Grid container spacing={2}>
          {featured.map((p) => (
            <Grid key={p.id} size={{ xs: 12, sm: 6, md: 3 }}>
              <PlaceCard place={p} />
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container sx={{ pb: { xs: 6, md: 8 } }}>
        <SectionHeader
          title="Utforsk på kartet"
          subtitle="Trykk på nålene for å sjå kva som finst i nærleiken."
        />
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 7 }}>
            <MapPanel
              places={featured}
              selectedId={selectedId}
              onSelect={setSelectedId}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={2}>
              {featured
                .filter((p) => !selectedId || p.id === selectedId)
                .map((p) => (
                  <PlaceCard key={p.id} place={p} />
                ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
