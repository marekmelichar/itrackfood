import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Typography,
  Avatar,
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import styles from "./index.module.css";

export const Header = () => {
  const currentDate = new Date();
  const day = currentDate.getDate();

  return (
    <AppBar position="static" className={styles.appBar}>
      <Toolbar className={styles.toolbar}>
        <Box className={styles.leftSection}>
          <Avatar className={styles.logoAvatar}>🍕</Avatar>
        </Box>

        <Box className={styles.rightSection}>
          <Box className={styles.dateContainer}>
            <Typography className={styles.dateNumber}>{day}</Typography>
            <IconButton className={styles.iconButton} size="small">
              <CalendarTodayIcon className={styles.icon} />
            </IconButton>
          </Box>
          <IconButton className={styles.iconButton}>
            <NotificationsNoneIcon className={styles.icon} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
