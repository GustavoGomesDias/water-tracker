import { MouseEvent, useEffect, useState } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

import { GetAppHistoryWithPage } from '@backend';
import { Back, Button } from '@components';
import { backend } from '@wails/go/models';

import './history.css';

export const History = (): JSX.Element => {
  const [history, setHistory] = useState<backend.History[]>([])
  const [page, setPage] = useState<number>(0);
  useEffect(() => {
    const handleGetHistory = async () => {
      const result = await GetAppHistoryWithPage(0);
      setPage(0);
      setHistory(result);
    }

    handleGetHistory();
  }, []);

  const handleShowNextPage = async (e: MouseEvent<HTMLButtonElement>): Promise<void> => {
    e.preventDefault();
    const nextPage = page + 1;

    const result = await GetAppHistoryWithPage(nextPage);

    if (result.length > 0) {
      setHistory(result);
      setPage(nextPage);
    }
  }

  const handleShowPrevPage = async (e: MouseEvent<HTMLButtonElement>): Promise<void> => {
    e.preventDefault();
    const prevPage = page - 1;

    if (prevPage >= 0) {
      const result = await GetAppHistoryWithPage(prevPage);

      if (result.length > 0) {
        setHistory(result);
        setPage(prevPage);
      }
    }
  }

  const formatDate = (value: string): string => {
    const date = new Date(value);

    return `${date.getDate()}/${(date.getMonth() + 1) < 10 ? `0${(date.getMonth() + 1)}` : (date.getMonth() + 1)}/${date.getFullYear()}`;
  }

  const formatHour = (value: string): string => {
    const date = new Date(value);

    return `${date.getHours()}:${date.getMinutes()}`;
  }

  const formatAction = (action: string): string => {
    return (action === 'Add Value') ? 'Adicionou água' : 'Mudou as configurações do tracker'
  }

  return (
    <div className="main">
      <Back path="/main" />
      <div className="setup">
        <h1>Histórico</h1>
        <div className="history-content">
          {history.length > 0 && history.map((item, index) => (
            <div className="history" key={item.action + index}>
              <p>{formatDate(item.createdAt)} - {formatHour(item.createdAt)}</p>
              <p>{formatAction(item.action)}</p>
            </div>
          ))}

        </div>
        <div className="pagination">
          <Button Icon={BsArrowLeft} handleClick={handleShowPrevPage} tooltipText="Página anterior" />
          <Button Icon={BsArrowRight} handleClick={handleShowNextPage} tooltipText="Próxima página" />
        </div>
      </div>
    </div>
  );
};
