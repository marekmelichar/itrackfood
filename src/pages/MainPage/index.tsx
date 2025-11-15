import { Box, Typography } from "@mui/material";
import styles from "./index.module.css";

interface FoodEntry {
  unit: string;
  amount: number | string;
  description: string;
}

interface MealSection {
  title: string;
  entries: FoodEntry[];
  isTime?: boolean;
}

const mockData: MealSection[] = [
  {
    title: "Wake up time",
    entries: [{ unit: "", amount: "07:00", description: "" }],
    isTime: true,
  },
  {
    title: "Breakfast",
    entries: [
      { unit: "ml", amount: 250, description: "coffee" },
      { unit: "pcs.", amount: 1, description: "slice of bread, butter" },
      { unit: "pcs.", amount: 1, description: "egg" },
    ],
  },
  {
    title: "Snack before noon",
    entries: [{ unit: "pcs.", amount: 1, description: "snackbar" }],
  },
  {
    title: "Lunch",
    entries: [
      { unit: "ml", amount: 250, description: "soup" },
      { unit: "g", amount: 350, description: "pasta pommodorro" },
      { unit: "ml", amount: 500, description: "cola zero" },
    ],
  },
  {
    title: "Snack after noon",
    entries: [{ unit: "pcs.", amount: 1, description: "snackbar" }],
  },
  {
    title: "Dinner",
    entries: [{ unit: "g", amount: 350, description: "salad" }],
  },
  {
    title: "Medicals",
    entries: [{ unit: "pcs.", amount: 1, description: "jovesto" }],
  },
  {
    title: "Go to bed time",
    entries: [{ unit: "", amount: "23:00", description: "" }],
    isTime: true,
  },
  {
    title: "Sports",
    entries: [{ unit: "min.", amount: 75, description: "ice hockey" }],
  },
  {
    title: "Weight",
    entries: [{ unit: "kg", amount: 71.35, description: "" }],
  },
  {
    title: "Notes",
    entries: [
      {
        unit: "",
        amount: "",
        description: "light knee injury during the sports",
      },
    ],
  },
];

export const MainPage = () => {
  const currentDate = new Date();
  const monthName = currentDate.toLocaleDateString("en-US", { month: "long" });
  const day = currentDate.getDate();
  const weekDay = currentDate.toLocaleDateString("en-US", { weekday: "long" });

  return (
    <Box className={styles.container}>
      <Box className={styles.header}>
        <Typography className={styles.monthName}>{monthName}</Typography>
        <Typography className={styles.day}>{day}</Typography>
        <Typography className={styles.weekDay}>{weekDay}</Typography>
      </Box>

      <Box className={styles.mealsContainer}>
        {mockData.map((section, index) => (
          <Box key={index} className={styles.mealSection}>
            <Box className={styles.mealHeader}>{section.title}</Box>
            <Box className={styles.entriesContainer}>
              {section.entries.map((entry, entryIndex) => (
                <Box key={entryIndex} className={styles.entryRow}>
                  {section.isTime ? (
                    <Box className={styles.timeEntry}>{entry.amount}</Box>
                  ) : section.title === "Weight" ? (
                    <>
                      <Box className={styles.measurement}>
                        <span className={styles.unit}>{entry.unit}</span>
                        <span className={styles.separator}>|</span>
                        <span className={styles.amount}>{entry.amount}</span>
                      </Box>
                      <Box className={styles.description}>
                        {entry.description}
                      </Box>
                    </>
                  ) : section.title === "Notes" ? (
                    <Box className={styles.notesEntry}>{entry.description}</Box>
                  ) : (
                    <>
                      <Box className={styles.measurement}>
                        <span className={styles.unit}>{entry.unit}</span>
                        <span className={styles.separator}>|</span>
                        <span className={styles.amount}>{entry.amount}</span>
                      </Box>
                      <Box className={styles.description}>
                        {entry.description}
                      </Box>
                    </>
                  )}
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
