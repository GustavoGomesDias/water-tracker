import { useContext } from 'react';
import { TrackerContext } from '../context/TrackerContext';

export const useTracker = () => {
  const trackerHelpers = useContext(TrackerContext);

  return trackerHelpers;
};
