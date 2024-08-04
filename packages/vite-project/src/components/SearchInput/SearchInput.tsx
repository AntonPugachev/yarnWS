import styles from './SearchInput.module.scss';
export const SearchInput = () => {
  return (
    <div className={styles['input-wrapper']}>
      <label htmlFor='search-input'>Search:</label>
      <input
        className={styles['input-base']}
        id={'search-input'}
        type='text'
        aria-label='Search input'
        placeholder={'placeholder'}
      />
    </div>
  );
};
