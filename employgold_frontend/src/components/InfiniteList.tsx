import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { generateRandomMatchedJobs } from 'src/util';

import MatchedJobsCard from './MatchedJobsCard';

type InfiniteListProps = {
  query?: string;
  targetId: string;
  setTargetId: React.Dispatch<React.SetStateAction<string>>;
};

export default function InfiniteList({
  query,
  targetId,
  setTargetId,
}: InfiniteListProps) {
  const pageSize = 10;
  const [pageNumber, setPageNumber] = useState(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [results, setResults] = useState<any[]>([]);
  const [currentList, setCurrentList] = useState<any>([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    //TODO: use API call
    setTimeout(() => {
      let resp: any[] = generateRandomMatchedJobs(30);
      resp.sort((res1, res2) => res2.score - res1.score);
      setResults(resp);
      setLoading(false);
    }, 1000);
  }, [query]);

  const obserever = useRef<any>();
  const lastElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (obserever.current) obserever.current.disconnect();
      obserever.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((pageNumber) => pageNumber + 1);
        }
      });
      if (node) obserever.current.observe(node);
    },
    [loading, hasMore],
  );

  useEffect(() => {
    if (loading) return;
    const nextList: any[] = results.slice(
      pageNumber * pageSize,
      (pageNumber + 1) * pageSize,
    );
    const newCurrentList = [...currentList, ...nextList];
    setCurrentList(newCurrentList);
    setHasMore(newCurrentList.length < results.length);
  }, [loading, results, pageNumber, pageSize]);

  const getCard = (i: number, content: any) => {
    switch (query) {
      case 'matchedJobs':
        return (
          <MatchedJobsCard
            index={i}
            content={content}
            targetId={targetId}
            setTargetId={setTargetId}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Box
      sx={{
        height: 'calc(100vh - 120px)',
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column',
      }}>
      {currentList &&
        currentList.map((content: any, i: number) => {
          return i + 1 === currentList.length ? (
            <Box ref={lastElementRef} key={i}>
              {getCard(i, content)}
            </Box>
          ) : (
            <Box key={i}>{getCard(i, content)}</Box>
          );
        })}
      {loading && (
        <Box
          sx={{
            my: 2,
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <CircularProgress />
        </Box>
      )}
    </Box>
  );
}
