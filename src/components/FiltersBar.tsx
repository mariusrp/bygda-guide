import { Box, Chip, MenuItem, Paper, Stack, TextField } from "@mui/material";
import type { CategoryKey } from "../data/mock";
import { categories } from "../data/mock";

export type ExploreFilters = {
  q: string;
  area: "" | "Gulen" | "Masfjorden";
  category: "" | CategoryKey;
  price: "" | "Gratis" | "Rimeleg" | "Middels" | "Høg";
};

export default function FiltersBar({
  value,
  onChange,
  total,
}: {
  value: ExploreFilters;
  onChange: (next: ExploreFilters) => void;
  total: number;
}) {
  return (
    <Paper sx={{ p: 2 }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={1.5}
        alignItems={{ md: "center" }}
      >
        <TextField
          label="Søk"
          placeholder="Søk etter stad, tag eller omtale…"
          value={value.q}
          onChange={(e) => onChange({ ...value, q: e.target.value })}
          fullWidth
        />

        <TextField
          select
          label="Område"
          value={value.area}
          onChange={(e) => onChange({ ...value, area: e.target.value as any })}
          sx={{ minWidth: { xs: "100%", md: 170 } }}
        >
          <MenuItem value="">Alle</MenuItem>
          <MenuItem value="Gulen">Gulen</MenuItem>
          <MenuItem value="Masfjorden">Masfjorden</MenuItem>
        </TextField>

        <TextField
          select
          label="Kategori"
          value={value.category}
          onChange={(e) =>
            onChange({ ...value, category: e.target.value as any })
          }
          sx={{ minWidth: { xs: "100%", md: 210 } }}
        >
          <MenuItem value="">Alle</MenuItem>
          {categories.map((c) => (
            <MenuItem key={c.key} value={c.key}>
              {c.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          select
          label="Prisnivå"
          value={value.price}
          onChange={(e) => onChange({ ...value, price: e.target.value as any })}
          sx={{ minWidth: { xs: "100%", md: 160 } }}
        >
          <MenuItem value="">Alle</MenuItem>
          {["Gratis", "Rimeleg", "Middels", "Høg"].map((p) => (
            <MenuItem key={p} value={p}>
              {p}
            </MenuItem>
          ))}
        </TextField>

        <Box sx={{ flex: 1 }} />

        <Chip label={`${total} treff`} sx={{ fontWeight: 800 }} />
      </Stack>
    </Paper>
  );
}
