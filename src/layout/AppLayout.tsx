import { Outlet, NavLink, useLocation, useNavigate } from "react-router-dom";
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
import { useMemo, useState } from "react";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";

const navItems = [
  { label: "Utforsk", to: "/utforsk" },
  { label: "Arrangement", to: "/kategori/arrangement" },
  { label: "Overnatting", to: "/kategori/overnatting" },
  { label: "Spisestader", to: "/kategori/spisestader" },
  { label: "Lokalmat", to: "/kategori/lokalmat" },
  { label: "Kultur", to: "/kategori/kultur" },
  { label: "Skjulte perler", to: "/kategori/skjultePerler" },
];

export default function AppLayout() {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const location = useLocation();
  const navigate = useNavigate();

  const isHome = useMemo(() => location.pathname === "/", [location.pathname]);

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <AppBar
        elevation={0}
        position="sticky"
        sx={{
          backdropFilter: "blur(10px)",
          background: "rgba(250,250,247,0.75)",
          borderBottom: "1px solid rgba(15,23,42,0.08)",
          color: "text.primary",
        }}
      >
        <Toolbar>
          <Container sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Button
              onClick={() => navigate("/")}
              startIcon={<PlaceOutlinedIcon />}
              sx={{ color: "text.primary", px: 1.5 }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: 900, letterSpacing: -0.5 }}
              >
                OppdagBygda
              </Typography>
            </Button>

            <Box sx={{ flex: 1 }} />

            {!isSm ? (
              <Stack direction="row" spacing={1} alignItems="center">
                {navItems.map((item) => (
                  <Button
                    key={item.to}
                    component={NavLink}
                    to={item.to}
                    sx={{
                      color: "text.primary",
                      opacity: 0.9,
                      "&.active": { opacity: 1, color: "primary.main" },
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
                <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />
                <Button
                  variant="outlined"
                  onClick={() => navigate("/arrangor")}
                >
                  For bedrifter
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => navigate("/utforsk")}
                >
                  Utforsk no
                </Button>
              </Stack>
            ) : (
              <>
                <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
                  <MenuIcon />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={open}
                  onClose={() => setAnchorEl(null)}
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
                    >
                      {item.label}
                    </MenuItem>
                  ))}
                  <Divider />
                  <MenuItem
                    onClick={() => (setAnchorEl(null), navigate("/arrangor"))}
                  >
                    For bedrifter
                  </MenuItem>
                  <MenuItem
                    onClick={() => (setAnchorEl(null), navigate("/utforsk"))}
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
