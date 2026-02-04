import { Container, Grid, Stack, Typography } from "@mui/material";
import { useMemo, useState } from "react";
import FiltersBar, { type ExploreFilters } from "../components/FiltersBar";
import MapPanel from "../components/MapPanel";
import PlaceCard from "../components/PlaceCard";
import { places } from "../data/mock";

export default function ExplorePage() {
  const [filters, setFilters] = useState<ExploreFilters>({
    q: "",
    area: "",
    category: "",
    price: "",
  });

  const [selectedId, setSelectedId] = useState<string | undefined>(undefined);

  const filtered = useMemo(() => {
    const q = filters.q.trim().toLowerCase();
    return places.filter((p) => {
      const hitQ =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.short.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));

      const hitArea = !filters.area || p.area === filters.area;
      const hitCat = !filters.category || p.category === filters.category;
      const hitPrice = !filters.price || p.priceLevel === filters.price;

      return hitQ && hitArea && hitCat && hitPrice;
    });
  }, [filters]);

  const list = useMemo(() => {
    if (!selectedId) return filtered;
    const sel = filtered.find((p) => p.id === selectedId);
    const rest = filtered.filter((p) => p.id !== selectedId);
    return sel ? [sel, ...rest] : filtered;
  }, [filtered, selectedId]);

  return (
    <Container sx={{ py: { xs: 3, md: 4 } }}>
      <Stack spacing={2}>
        <Stack spacing={0.5}>
          <Typography
            variant="h3"
            sx={{ fontWeight: 900, letterSpacing: -0.8 }}
          >
            Utforsk
          </Typography>
          <Typography color="text.secondary">
            Søk, filtrer og finn fram til nye opplevingar i nærleiken.
          </Typography>
        </Stack>

        <FiltersBar
          value={filters}
          onChange={setFilters}
          total={filtered.length}
        />

        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 7 }}>
            <MapPanel
              places={filtered}
              selectedId={selectedId}
              onSelect={setSelectedId}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={2}>
              {list.map((p) => (
                <div key={p.id} onMouseEnter={() => setSelectedId(p.id)}>
                  <PlaceCard place={p} />
                </div>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
}
