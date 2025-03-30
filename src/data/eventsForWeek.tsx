// ✅ /src/data/eventsForWeek.ts
import { mockEvents } from './events';

const fallbackImages = [
  'https://images.unsplash.com/photo-1607774729643-8a0b21f9dbe7',
  'https://images.unsplash.com/photo-1555992336-cae1579e6d72',
  'https://images.unsplash.com/photo-1576765607924-3f40f2cebb12',
];

// Start from Sunday of this week
const getWeekRange = () => {
  const today = new Date();
  const sunday = new Date(today);
  sunday.setDate(today.getDate() - today.getDay());
  const saturday = new Date(sunday);
  saturday.setDate(sunday.getDate() + 6);
  return [sunday, saturday];
};

export const getThisWeeksEvents = () => {
  const [start, end] = getWeekRange();

  return mockEvents
    .filter((e) => {
      const date = new Date(e.date);
      return date >= start && date <= end;
    })
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .map((event, index) => ({
      ...event,
      imageUrl: fallbackImages[index % fallbackImages.length], // For other views
    }));
};
