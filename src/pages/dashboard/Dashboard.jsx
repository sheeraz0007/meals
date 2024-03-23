// @mui
import { useTheme } from "@mui/material/styles";
import { Grid, Container, Typography } from "@mui/material";
// components
import SummaryCard from "./components/SummaryCard";
import { Page } from "src/components";
//hooks
import { useAppContext } from "src/hooks";
import { useEffect } from "react";

// ----------------------------------------------------------------------
const DUMMY_DATA = [
  {
    color: "success",
    title: "Manu",

    icon: "healthicons:ui-menu-grid",
    link: "manu",
  },
  {
    color: "info",
    title: "Favorite",

    icon: "material-symbols:favorite-rounded",
    link: "my_favorites",
  },
  {
    color: "secondary",
    title: "Random Meal",

    icon: "game-icons:meal",
    link: "random",
  },
];
export default function Dashboard() {
  const theme = useTheme();
  const { _get_user_profile } = useAppContext();
  useEffect(() => {}, []);

  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back
        </Typography>

        <Grid container spacing={3}>
          {DUMMY_DATA.map((item, i) => (
            <Grid key={i} item xs={12} sm={6} md={3}>
              <SummaryCard
                color={item.color}
                title={item.title}
                icon={item.icon}
                link={item.link}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Page>
  );
}
