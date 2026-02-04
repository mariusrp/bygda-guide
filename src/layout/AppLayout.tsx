import { Outlet, NavLink, useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
  Menu,
  MenuItem,
  Divider,
  Stack,
  Chip,
} from "@mui/material";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";

const navItems = [
  { label: "Arrangement", to: "/kategori/arrangement" },
  { label: "Overnatting", to: "/kategori/overnatting" },
  { label: "Spisestader", to: "/kategori/spisestader" },
  { label: "Lokalmat", to: "/kategori/lokalmat" },
  { label: "Kultur", to: "/kategori/kultur" },
  { label: "Skjulte perler", to: "/kategori/skjultePerler" },
];

export default function AppLayout() {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("lg")); // Changed to lg
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <AppBar
        elevation={0}
        position="sticky"
        sx={{
          backdropFilter: "blur(10px)",
          background: "rgba(255,255,255,0.95)",
          borderBottom: "1px solid rgba(15,23,42,0.08)",
          color: "text.primary",
        }}
      >
        <Toolbar sx={{ minHeight: { xs: 64, md: 70 } }}>
          <Container
            maxWidth="xl"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 1, md: 3 },
            }}
          >
            {/* Logo */}
            <Button
              onClick={() => navigate("/")}
              startIcon={<PlaceOutlinedIcon />}
              sx={{
                color: "text.primary",
                px: 0,
                minWidth: "auto",
                "&:hover": { background: "transparent" },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 900,
                  letterSpacing: -0.5,
                  fontSize: { xs: 18, md: 20 },
                }}
              >
                OppdagBygda
              </Typography>
            </Button>

            <Box sx={{ flex: 1 }} />

            {!isSm ? (
              <>
                {/* Navigation links */}
                <Stack
                  direction="row"
                  spacing={0.5}
                  alignItems="center"
                  sx={{ mr: 2 }}
                >
                  {navItems.map((item) => (
                    <Button
                      key={item.to}
                      component={NavLink}
                      to={item.to}
                      size="small"
                      sx={{
                        color: "text.primary",
                        fontSize: 14,
                        fontWeight: 600,
                        px: 1.5,
                        py: 0.75,
                        opacity: 0.8,
                        whiteSpace: "nowrap",
                        "&.active": {
                          opacity: 1,
                          color: "primary.main",
                          background: "rgba(15,118,110,0.08)",
                        },
                        "&:hover": {
                          opacity: 1,
                          background: "rgba(15,118,110,0.04)",
                        },
                      }}
                    >
                      {item.label}
                    </Button>
                  ))}
                </Stack>

                {/* CTA buttons */}
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <Button
                    variant="outlined"
                    size="medium"
                    onClick={() => navigate("/arrangor")}
                    sx={{
                      fontWeight: 700,
                      fontSize: 14,
                      px: 2.5,
                      whiteSpace: "nowrap",
                    }}
                  >
                    For bedrifter
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    size="medium"
                    onClick={() => navigate("/utforsk")}
                    sx={{
                      fontWeight: 700,
                      fontSize: 14,
                      px: 3,
                      whiteSpace: "nowrap",
                    }}
                  >
                    Utforsk no
                  </Button>
                </Stack>
              </>
            ) : (
              <>
                <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
                  <MenuIcon />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={open}
                  onClose={() => setAnchorEl(null)}
                  PaperProps={{
                    sx: { minWidth: 200 },
                  }}
                >
                  <MenuItem disabled>
                    <Chip size="small" label="Meny" />
                  </MenuItem>
                  <Divider />
                  {navItems.map((item) => (
                    <MenuItem
                      key={item.to}
                      component={NavLink}
                      to={item.to}
                      onClick={() => setAnchorEl(null)}
                      sx={{
                        "&.active": {
                          color: "primary.main",
                          fontWeight: 700,
                        },
                      }}
                    >
                      {item.label}
                    </MenuItem>
                  ))}
                  <Divider />
                  <MenuItem
                    onClick={() => {
                      setAnchorEl(null);
                      navigate("/arrangor");
                    }}
                  >
                    For bedrifter
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      setAnchorEl(null);
                      navigate("/utforsk");
                    }}
                  >
                    <Typography sx={{ fontWeight: 800, color: "primary.main" }}>
                      Utforsk no
                    </Typography>
                  </MenuItem>
                </Menu>
              </>
            )}
          </Container>
        </Toolbar>
      </AppBar>

      <Box sx={{ flex: 1 }}>
        <Outlet />
      </Box>

      <Box
        component="footer"
        sx={{
          mt: 6,
          py: 5,
          borderTop: "1px solid rgba(15,23,42,0.08)",
          background: "rgba(255,255,255,0.7)",
        }}
      >
        <Container>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={2}
            alignItems={{ xs: "flex-start", md: "center" }}
            justifyContent="space-between"
          >
            <Box>
              <Typography sx={{ fontWeight: 900 }}>OppdagBygda</Typography>
              <Typography variant="body2" color="text.secondary">
                Oversikt over opplevingar i Gulen og Masfjorden.
              </Typography>
            </Box>
            <Stack direction="row" spacing={1}>
              <Button size="small" onClick={() => navigate("/admin")}>
                Admin (demo)
              </Button>
              <Button size="small" onClick={() => navigate("/arrangor")}>
                Bedrift (demo)
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
