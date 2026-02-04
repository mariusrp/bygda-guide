import { Grid, Paper, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { categories } from "../data/mock";
import EventAvailableRoundedIcon from "@mui/icons-material/EventAvailableRounded";
import HotelRoundedIcon from "@mui/icons-material/HotelRounded";
import RestaurantRoundedIcon from "@mui/icons-material/RestaurantRounded";
import StorefrontRoundedIcon from "@mui/icons-material/StorefrontRounded";
import MuseumRoundedIcon from "@mui/icons-material/MuseumRounded";
import DiamondRoundedIcon from "@mui/icons-material/DiamondRounded";
import ShoppingBagRoundedIcon from "@mui/icons-material/ShoppingBagRounded";
import HikingRoundedIcon from "@mui/icons-material/HikingRounded";

const iconMap: Record<string, JSX.Element> = {
  event: <EventAvailableRoundedIcon />,
  hotel: <HotelRoundedIcon />,
  restaurant: <RestaurantRoundedIcon />,
  store: <StorefrontRoundedIcon />,
  museum: <MuseumRoundedIcon />,
  diamond: <DiamondRoundedIcon />,
  shopping: <ShoppingBagRoundedIcon />,
  hike: <HikingRoundedIcon />,
};

export default function CategoryGrid() {
  const navigate = useNavigate();

  return (
    <Grid container spacing={2}>
      {categories.map((c) => (
        <Grid key={c.key} size={{ xs: 12, sm: 6, md: 3 }}>
          <Paper
            onClick={() => navigate(`/kategori/${c.key}`)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) =>
              e.key === "Enter" && navigate(`/kategori/${c.key}`)
            }
            sx={{
              p: 2.25,
              cursor: "pointer",
              height: "100%",
              transition: "transform 140ms ease, box-shadow 140ms ease",
              "&:hover": { transform: "translateY(-2px)", boxShadow: 3 },
            }}
          >
            <Stack spacing={1}>
              <Stack
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: 999,
                  background: "rgba(15,118,110,0.10)",
                  border: "1px solid rgba(15,23,42,0.08)",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {iconMap[c.icon]}
              </Stack>
              <Typography sx={{ fontWeight: 900 }}>{c.label}</Typography>
              <Typography variant="body2" color="text.secondary">
                {c.desc}
              </Typography>
            </Stack>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}
