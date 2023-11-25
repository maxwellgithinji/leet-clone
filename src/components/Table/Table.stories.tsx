import type { Meta } from '@storybook/react';
import React from 'react';

import Table from './Table';

export default {
  title: 'Table',
  component: Table,
} as Meta;

export function Default() {
  return (
    <Table
      header="Table"
      tableHeads={['First Name', 'Last Name', 'Age', 'Phone', 'Number']}
    />
  );
}
