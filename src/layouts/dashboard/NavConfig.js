// component
import Iconify from "../../components/Iconify";

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: "Homepage",
    path: "/dashboard",
    icon: getIcon("bitcoin-icons:home-filled"),
    /* "children" key can be added in these objects, example:children:[{...}] */
  },
  {
    title: "Menu",
    path: "/manu",
    icon: getIcon("healthicons:ui-menu-grid"),
  },
  {
    title: "My Favorite",
    path: "/my_favorites",
    icon: getIcon("material-symbols:favorite-rounded"),
  },
  {
    title: "Random Meals",
    path: "/random",
    icon: getIcon("game-icons:meal"),
  },
];

export default navConfig;
