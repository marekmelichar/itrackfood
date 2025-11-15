import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Header } from "../Header";

import styles from "./index.module.css";

export const MainLayout = () => {
  return (
    <Box>
      <Header />
      <Box className={styles.mainLayout}>
        <Outlet />
      </Box>
    </Box>
  );
};
