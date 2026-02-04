import { Container, Grid, Stack, Typography } from "@mui/material";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { categories, places, type CategoryKey } from "../data/mock";
import PlaceCard from "../components/PlaceCard";

export default function CategoryPage() {
  const { key } = useParams();
  const cat = categories.find((c) => c.key === (key as CategoryKey));

  const list = useMemo(
    () => places.filter((p) => p.category === (key as CategoryKey)),
    [key],
  );

  return (
    <Container sx={{ py: { xs: 3, md: 4 } }}>
      <Stack spacing={2}>
        <Stack spacing={0.5}>
          <Typography
            variant="h3"
            sx={{ fontWeight: 900, letterSpacing: -0.8 }}
          >
            {cat?.label ?? "Kategori"}
          </Typography>
          <Typography color="text.secondary">{cat?.desc}</Typography>
        </Stack>

        <Grid container spacing={2}>
          {list.map((p) => (
            <Grid key={p.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <PlaceCard place={p} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  );
}
