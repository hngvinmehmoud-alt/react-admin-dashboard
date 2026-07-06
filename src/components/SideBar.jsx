import { useNavigate } from "react-router";
import { useLocation } from 'react-router'
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import SsidChartOutlinedIcon from "@mui/icons-material/SsidChartOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import Avatar from "@mui/material/Avatar";
import MuiDrawer from "@mui/material/Drawer";
import { styled, useTheme } from "@mui/material/styles";
import { grey } from '@mui/material/colors';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

const Array1 = [
  { text: "dashboard", icon: <HomeOutlinedIcon />, path: "/" },
  { text: "manage team", icon: <GroupOutlinedIcon />, path: "/team" },
  {
    text: "contacts information",
    icon: <ContactsOutlinedIcon />,
    path: "/contacts",
  },
  {
    text: "invoices balances",
    icon: <ReceiptOutlinedIcon />,
    path: "/invoices",
  },
];
const Array2 = [
  { text: "profile form", icon: <PermIdentityOutlinedIcon />, path: "/form" },
  { text: "calendar", icon: <CalendarTodayOutlinedIcon />, path: "/calendar" },
  { text: "FAQ questions", icon: <HelpOutlineOutlinedIcon />, path: "/faq" },
];
const Array3 = [
  { text: "Bar chart", icon: <BarChartOutlinedIcon />, path: "/bar" },
  { text: "Pie chart", icon: <PieChartOutlineOutlinedIcon />, path: "/pie" },
  { text: "Line chart", icon: <SsidChartOutlinedIcon />, path: "/line" },
  { text: "Geography chart", icon: <MapOutlinedIcon />, path: "/geography" },
];

function SideBsr({ open, handleDrawerClose  }) {
  const theme = useTheme();
  let location = useLocation()
  const navigate = useNavigate();

  return (
    <>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />

        <Avatar
          sx={{
            mx: "auto",
            height: open ? 88 : 44,
            width: open ? 88 : 44,
            transition: "0.25s",
            my: 1,
            border: "2px solid gray",
          }}
          alt="Remy Sharp"
          src="https://th.bing.com/th/id/OIP.7prJnJ0YtgEtGeiKwRpYggHaLH?w=127&h=191&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
        />
        <Typography
          align="center"
          variant="body1"
          sx={{ fontSize: open ? 17 : 0, transition: "0.25s" }}
        >
          {" "}
          arya stark
        </Typography>
        <Typography
          align="center"
          variant="body1"
          sx={{
            fontSize: open ? 15 : 0,
            transition: "0.25s",
            color: theme.palette.info.main,
          }}
        >
          {" "}
          admin{" "}
        </Typography>

        <Divider />

        <List>
          {Array1.map((item) => (
            <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                onClick={() => {
                  navigate(item.path);
                }}
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                    bgcolor: location.pathname===item.path? theme.palette.mode== "dark"? grey[800] : grey[400]:null,
                  },
                  open
                    ? {
                        justifyContent: "initial",
                      }
                    : {
                        justifyContent: "center",
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center",
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: "auto",
                        },
                  ]}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />

        <List>
          {Array2.map((item) => (
            <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                onClick={() => {
                  navigate(item.path);
                }}
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                    bgcolor: location.pathname===item.path? theme.palette.mode== "dark"? grey[800] : grey[400]:null,
                  },
                  open
                    ? {
                        justifyContent: "initial",
                      }
                    : {
                        justifyContent: "center",
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center",
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: "auto",
                        },
                  ]}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />


        <List>
          {Array3.map((item) => (
            <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                onClick={() => {
                  navigate(item.path);
                }}
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                    bgcolor: location.pathname===item.path? theme.palette.mode== "dark"? grey[800] : grey[400]:null,
                  },
                  open
                    ? {
                        justifyContent: "initial",
                      }
                    : {
                        justifyContent: "center",
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center",
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: "auto",
                        },
                  ]}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default SideBsr;
