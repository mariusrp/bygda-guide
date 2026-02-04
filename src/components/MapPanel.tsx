import "leaflet/dist/leaflet.css";
import { useEffect, useMemo } from "react";
import { Box, Paper, Stack, Typography, Chip } from "@mui/material";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import type { Place, CategoryKey } from "../data/mock";

// Simple Google Maps style circular badges
const createSimpleBadge = (category: CategoryKey, isSelected: boolean) => {
  // Category colors - more subtle
  const colors: Record<CategoryKey, string> = {
    arrangement: "#EA4335",
    overnatting: "#4285F4",
    spisestader: "#FBBC04",
    lokalmat: "#34A853",
    kultur: "#9C27B0",
    skjultePerler: "#FF6D00",
    butikkar: "#00BCD4",
    turmoglegheiter: "#8BC34A",
  };

  // Simple icons
  const icons: Record<CategoryKey, string> = {
    arrangement: "📅",
    overnatting: "🏨",
    spisestader: "🍽️",
    lokalmat: "🌾",
    kultur: "🏛️",
    skjultePerler: "⭐",
    butikkar: "🛒",
    turmoglegheiter: "🥾",
  };

  const color = isSelected ? "#0F766E" : colors[category];
  const icon = icons[category];

  return L.divIcon({
    className: "simple-badge",
    html: `
      <div style="
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        background: ${color};
        border: 3px solid white;
        border-radius: 50%;
        box-shadow: 0 2px 6px rgba(0,0,0,0.3);
        cursor: pointer;
        transition: all 0.2s ease;
        font-size: 16px;
        ${isSelected ? "transform: scale(1.3);" : ""}
      ">
        ${icon}
      </div>
    `,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -20],
  });
};

// Component to fit bounds
function MapBounds({ places }: { places: Place[] }) {
  const map = useMap();

  useEffect(() => {
    if (places.length === 0) return;
    const bounds = L.latLngBounds(places.map((p) => [p.lat, p.lng]));
    map.fitBounds(bounds, { padding: [50, 50], maxZoom: 13 });
  }, [places, map]);

  return null;
}

export default function MapPanel({
  places,
  selectedId,
  onSelect,
}: {
  places: Place[];
  selectedId?: string;
  onSelect?: (id: string) => void;
}) {
  const defaultCenter = useMemo(() => {
    if (places.length === 0) return { lat: 60.95, lng: 5.2 };
    const avgLat = places.reduce((sum, p) => sum + p.lat, 0) / places.length;
    const avgLng = places.reduce((sum, p) => sum + p.lng, 0) / places.length;
    return { lat: avgLat, lng: avgLng };
  }, [places]);

  return (
    <Paper sx={{ overflow: "hidden", height: "100%" }}>
      <Stack spacing={1.5} sx={{ height: "100%" }}>
        <Box sx={{ px: 2, pt: 2 }}>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography sx={{ fontWeight: 900, fontSize: 18 }}>Kart</Typography>
            <Chip
              label={`${places.length} ${places.length === 1 ? "stad" : "stadar"}`}
              size="small"
              sx={{
                fontWeight: 700,
                background: "rgba(15,118,110,0.1)",
                color: "#0F766E",
              }}
            />
          </Stack>
          <Typography variant="body2" color="text.secondary">
            Klikk på markørane for å sjå meir info
          </Typography>
        </Box>

        <Box
          sx={{
            flex: 1,
            position: "relative",
            minHeight: 400,
            "& .leaflet-container": {
              height: "100%",
              width: "100%",
              borderRadius: 2,
            },
            "& .simple-badge:hover div": {
              transform: "scale(1.2) !important",
            },
          }}
        >
          <MapContainer
            center={[defaultCenter.lat, defaultCenter.lng]}
            zoom={11}
            style={{ height: "100%", width: "100%" }}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MapBounds places={places} />

            {places.map((place) => (
              <Marker
                key={place.id}
                position={[place.lat, place.lng]}
                icon={createSimpleBadge(
                  place.category,
                  place.id === selectedId,
                )}
                eventHandlers={{ click: () => onSelect?.(place.id) }}
              >
                <Popup>
                  <Box sx={{ minWidth: 220 }}>
                    <Typography sx={{ fontWeight: 900, fontSize: 16, mb: 0.5 }}>
                      {place.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 1 }}
                    >
                      {place.short}
                    </Typography>
                    <Stack
                      direction="row"
                      spacing={0.5}
                      flexWrap="wrap"
                      useFlexGap
                      sx={{ mb: 1 }}
                    >
                      <Chip
                        label={place.area}
                        size="small"
                        sx={{ height: 24, fontSize: 12 }}
                      />
                      <Chip
                        label={place.priceLevel}
                        size="small"
                        variant="outlined"
                        sx={{ height: 24, fontSize: 12 }}
                      />
                    </Stack>
                    {place.openingHours && (
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{ display: "block" }}
                      >
                        ⏰ {place.openingHours}
                      </Typography>
                    )}
                  </Box>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </Box>
      </Stack>
    </Paper>
  );
}
