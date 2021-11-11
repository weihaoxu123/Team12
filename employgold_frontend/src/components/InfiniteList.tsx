import { Box } from '@mui/system';
import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

type InfiniteListProps = {
  data: any[];
};

export default function InfiniteList({ data }: InfiniteListProps) {
  const pageSize: number = 100;

  const [count, setCount] = useState({
    prev: 0,
    next: pageSize,
  });
  const [hasMore, setHasMore] = useState(true);
  const [current, setCurrent] = useState<any[]>([]);

  const getMoreData = () => {
    if (current.length >= data.length) {
      setHasMore(false);
      return;
    }

    setCurrent(
      current.concat(data.slice(count.prev + pageSize, count.next + pageSize)),
    );
    setCount((prevState) => ({
      prev: prevState.prev + pageSize,
      next: prevState.next + pageSize,
    }));
  };

  useEffect(() => {
    setCurrent(data.slice(0, pageSize));
    setCount({
      prev: 0,
      next: pageSize,
    });
    setHasMore(true);
  }, [data, pageSize]);

  return (
    <Box
      style={{
        height: 'calc(100vh - 125px)',
        overflow: 'auto',
      }}>
      <InfiniteScroll
        dataLength={current.length}
        next={getMoreData}
        hasMore={hasMore}
        loader={null}>
        {current && current.map((item, index) => <Box key={index}>{item}</Box>)}
      </InfiniteScroll>
    </Box>
  );
}
