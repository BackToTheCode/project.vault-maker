import React from 'react';
import { Tabs } from '../tabs';

export const tabs = () => {
  return (
    <Tabs>
        <Tabs.Tab active={true}>Open</Tabs.Tab>
        <Tabs.Tab>Closed</Tabs.Tab>
    </Tabs>
  );
};
