import { createContext, useEffect, useState } from 'react';
import { GetActualPercent, GetTracker } from '@backend';
import { ProviderProps } from './context';

import { useLoad } from '@hooks';
import { backend } from '@wails/go/models';

export interface TrackerContextProps {
  editActualQuantity(value: number): void
  getTrackerConfig(): Promise<void>
  percent: number
  tracker: backend.Tracker | undefined
}

export const TrackerContext = createContext({} as TrackerContextProps);

const TrackerProvider = ({ children }: ProviderProps): JSX.Element => {
  const [tracker, setTracker] = useState<backend.Tracker>();
  const [percent, setPercent] = useState<number>(0);
  const full = 150;

  const { handleIsLoading, handleNotIsLoading } = useLoad();

  useEffect(() => {
    const handleGetProperties = async () => {
      handleIsLoading()
      const actualPercent = await GetActualPercent();
      const trackerInfo = await GetTracker();

      const result = full - (full * (actualPercent / 100));

      const glass = document.querySelector<HTMLDivElement>('.glass');

      if (glass) {
        glass.style.setProperty('--top', `${result}px`)
      }

      if (trackerInfo.defaultQuantity) {
        setTracker(trackerInfo);
      }

      setPercent(actualPercent);
      handleNotIsLoading();
    }

    handleGetProperties();
  }, []);

  const editActualQuantity = (value: number) => {
    const actualQuantity = parseInt(tracker?.actualQuantity as string);
    const newValue = actualQuantity + Number(value);
    if (tracker) {
      setTracker((prevState) => ({
        actualQuantity: String(newValue),
        alertTime: prevState?.alertTime as string,
        defaultQuantity: prevState?.defaultQuantity as string,
      }));

      setPercent((newValue * 100) / Number(tracker.defaultQuantity));
    }
  }

  const getTrackerConfig = async (): Promise<void> => {
    const trackerInfo = await GetTracker();
    console.log(trackerInfo);
    if (trackerInfo.defaultQuantity) {
      console.log('entrou');
      setTracker(trackerInfo);
    }
  }

  return (
    <TrackerContext.Provider value={{
      editActualQuantity,
      getTrackerConfig,
      tracker,
      percent
    }}>
      {children}
    </TrackerContext.Provider>
  );
}

export default TrackerProvider;