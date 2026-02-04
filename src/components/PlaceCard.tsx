import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import type { Place } from "../data/mock";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import RatingStars from "./RatingStars";

export default function PlaceCard({ place }: { place: Place }) {
  const navigate = useNavigate();

  return (
    <Card sx={{ overflow: "hidden" }}>
      <CardActionArea onClick={() => navigate(`/stad/${place.id}`)}>
        <Box
          sx={{
            height: 160,
            background:
              "linear-gradient(135deg, rgba(15,118,110,0.12), rgba(217,119,6,0.10))",
            display: "flex",
            alignItems: "flex-end",
            p: 2,
          }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <Chip size="small" label={place.area} />
            <Chip size="small" variant="outlined" label={place.priceLevel} />
          </Stack>
        </Box>

        <CardContent>
          <Stack spacing={1}>
            <Stack
              direction="row"
              alignItems="flex-start"
              justifyContent="space-between"
              gap={1}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: 900, lineHeight: 1.2 }}
              >
                {place.name}
              </Typography>
              <RatingStars value={place.rating} />
            </Stack>

            <Typography
              color="text.secondary"
              sx={{
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {place.short}
            </Typography>

            <Stack direction="row" spacing={0.75} flexWrap="wrap" useFlexGap>
              {place.tags.slice(0, 3).map((t) => (
                <Chip key={t} size="small" label={t} />
              ))}
            </Stack>

            <Stack
              direction="row"
              spacing={0.75}
              alignItems="center"
              sx={{ mt: 0.5 }}
            >
              <PlaceOutlinedIcon fontSize="small" />
              <Typography variant="body2" color="text.secondary">
                {place.address}
              </Typography>
            </Stack>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
