import { SearchInput } from '../SearchInput';
import { Table } from '../Table';
import { interceptor } from '../../utils/interceptor.ts';
import { useSignals } from '@preact/signals-react/runtime';
interceptor();
export const App = () => {
  useSignals();
  return (
    <>
      <SearchInput />
      <Table />
    </>
  );
};
