import { SearchInput } from '../SearchInput';
import { Table } from '../Table';
import { interceptor } from '../../utils/interceptor.ts';
interceptor();
export const App = () => {
  return (
    <>
      <SearchInput />
      <Table />
    </>
  );
};
