import { useState, useRef } from 'react';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { Box, Typography, IconButton } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs, { Dayjs } from 'dayjs';

import {
  containerStyles,
  headerStyles,
  dateSectionStyles,
  monthNameStyles,
  dayStyles,
  weekDayStyles,
  datePickerSectionStyles,
  datePickerButtonStyles,
  mealsContainerStyles,
  mealSectionStyles,
  mealHeaderStyles,
  entriesContainerStyles,
  entryRowStyles,
  measurementStyles,
  unitStyles,
  separatorStyles,
  amountStyles,
  descriptionStyles,
  timeEntryStyles,
  notesEntryStyles,
} from './styles';

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
    title: 'Wake up time',
    entries: [{ unit: '', amount: '07:00', description: '' }],
    isTime: true,
  },
  {
    title: 'Breakfast',
    entries: [
      { unit: 'ml', amount: 250, description: 'coffee' },
      { unit: 'pcs.', amount: 1, description: 'slice of bread, butter' },
      { unit: 'pcs.', amount: 1, description: 'egg' },
    ],
  },
  {
    title: 'Snack before noon',
    entries: [{ unit: 'pcs.', amount: 1, description: 'snackbar' }],
  },
  {
    title: 'Lunch',
    entries: [
      { unit: 'ml', amount: 250, description: 'soup' },
      { unit: 'g', amount: 350, description: 'pasta pommodorro' },
      { unit: 'ml', amount: 500, description: 'cola zero' },
    ],
  },
  {
    title: 'Snack after noon',
    entries: [{ unit: 'pcs.', amount: 1, description: 'snackbar' }],
  },
  {
    title: 'Dinner',
    entries: [{ unit: 'g', amount: 350, description: 'salad' }],
  },
  {
    title: 'Medicals',
    entries: [{ unit: 'pcs.', amount: 1, description: 'jovesto' }],
  },
  {
    title: 'Go to bed time',
    entries: [{ unit: '', amount: '23:00', description: '' }],
    isTime: true,
  },
  {
    title: 'Sports',
    entries: [{ unit: 'min.', amount: 75, description: 'ice hockey' }],
  },
  {
    title: 'Weight',
    entries: [{ unit: 'kg', amount: 71.35, description: '' }],
  },
  {
    title: 'Notes',
    entries: [
      {
        unit: '',
        amount: '',
        description: 'light knee injury during the sports',
      },
    ],
  },
];

export const MainPage = () => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());
  const [datePickerOpen, setDatePickerOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);

  const currentDate = selectedDate?.toDate() || new Date();
  const monthName = currentDate.toLocaleDateString('en-US', { month: 'long' });
  const day = currentDate.getDate();
  const weekDay = currentDate.toLocaleDateString('en-US', { weekday: 'long' });

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={containerStyles}>
        <Box sx={headerStyles}>
          <Box sx={dateSectionStyles}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'end',
                gap: 2,
              }}
            >
              <Box>
                <Typography sx={monthNameStyles}>{monthName}</Typography>
                <Typography sx={dayStyles}>{day}</Typography>
              </Box>

              <Box>
                <Typography sx={weekDayStyles}>{weekDay}</Typography>
              </Box>
            </Box>
            <Box sx={datePickerSectionStyles}>
              <IconButton
                ref={anchorRef}
                sx={datePickerButtonStyles}
                onClick={() => setDatePickerOpen(true)}
              >
                <CalendarTodayIcon />
              </IconButton>
              <DatePicker
                value={selectedDate}
                onChange={(newValue) => setSelectedDate(newValue)}
                open={datePickerOpen}
                onClose={() => setDatePickerOpen(false)}
                slotProps={{
                  textField: { sx: { display: 'none' } },
                  popper: {
                    anchorEl: anchorRef.current,
                    placement: 'bottom-end',
                    sx: { zIndex: 1300 },
                  },
                }}
              />
            </Box>
          </Box>
        </Box>

        <Box sx={mealsContainerStyles}>
          {mockData.map((section, index) => (
            <Box key={index} sx={mealSectionStyles}>
              <Box sx={mealHeaderStyles}>{section.title}</Box>
              <Box sx={entriesContainerStyles}>
                {section.entries.map((entry, entryIndex) => (
                  <Box key={entryIndex} sx={entryRowStyles}>
                    {section.isTime ? (
                      <Box sx={timeEntryStyles}>{entry.amount}</Box>
                    ) : section.title === 'Weight' ? (
                      <>
                        <Box sx={measurementStyles}>
                          <Box component="span" sx={unitStyles}>
                            {entry.unit}
                          </Box>
                          <Box component="span" sx={separatorStyles}>
                            |
                          </Box>
                          <Box component="span" sx={amountStyles}>
                            {entry.amount}
                          </Box>
                        </Box>
                        <Box sx={descriptionStyles}>{entry.description}</Box>
                      </>
                    ) : section.title === 'Notes' ? (
                      <Box sx={notesEntryStyles}>{entry.description}</Box>
                    ) : (
                      <>
                        <Box sx={measurementStyles}>
                          <Box component="span" sx={unitStyles}>
                            {entry.unit}
                          </Box>
                          <Box component="span" sx={separatorStyles}>
                            |
                          </Box>
                          <Box component="span" sx={amountStyles}>
                            {entry.amount}
                          </Box>
                        </Box>
                        <Box sx={descriptionStyles}>{entry.description}</Box>
                      </>
                    )}
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </LocalizationProvider>
  );
};
