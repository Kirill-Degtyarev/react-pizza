import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../redux/slices/filter/slice';
import debounce from 'lodash.debounce';

import styles from './Search.module.scss';

const Search: React.FC = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState('');

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        updateSeatchInput(e.target.value);
    };
    // eslint-disable-next-line
    const updateSeatchInput = useCallback(
        debounce((value) => {
            dispatch(setSearchValue(value));
        }, 1000),
        [],
    );

    return (
        <input
            onChange={onChangeInput}
            value={value}
            className={styles.input}
            type="text"
            placeholder="Поиск пиццы"
        />
    );
};
export default Search;
