import { Stack, Typography } from "@mui/material";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

export default function RatingStars({ value }: { value: number }) {
  const rounded = Math.round(value * 10) / 10;
  return (
    <Stack direction="row" spacing={0.5} alignItems="center">
      <StarRoundedIcon fontSize="small" color="secondary" />
      <Typography variant="body2" sx={{ fontWeight: 800 }}>
        {rounded}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        / 5
      </Typography>
    </Stack>
  );
}
