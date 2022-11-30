import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    categoryId: 0,
    pageCount: 1,
    direction: true,
    sort: {
        id: 0,
        title: 'популярности',
        sortProperty: 'rating',
    },
};

export const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategoryId(state, action) {
            state.categoryId = action.payload;
            state.pageCount = 1;
        },
        setSort(state, action) {
            state.sort = action.payload;
        },
        setPageCount(state, action) {
            state.pageCount = action.payload;
        },
        setPageDirections(state, action) {
            state.direction = action.payload;
        },
        setFilters(state, action) {
            state.pageCount = +action.payload.pageCount;
            state.categoryId = +action.payload.categoryId;
            state.sort = action.payload.sort;
            state.direction = action.payload.directions === 'asc';
        },
    },
});

export const { setCategoryId, setSort, setPageCount, setPageDirections, setFilters } =
    filterSlice.actions;

export default filterSlice.reducer;