/* eslint-disable no-unused-expressions */
/* eslint-disable jest/valid-expect */
import { act, render, renderHook, screen } from '@testing-library/react';
import { useInputValue } from '../useInputValue';

describe('when rendered', () => {
    it('return current initial value', () => {
        const { result } = renderHook(() => useInputValue("Test string"));
        expect(result.current.value).toEqual("Test string")
    });
});

describe('Update method', () => {
    it('change the value', () => {
        const { result } = renderHook(() => useInputValue("Old value"));
        act(() => result.current.onChange({target: {value: "Updated"}}))
        expect(result.current.value).toEqual("Updated")
    });
});

describe('re-render value', () => {
    it('re-render value', () => {
        const { result, rerender } = renderHook(({ text }) => useInputValue(text), {
            initialProps: { text: "Test String!"}
        })

        rerender({ text: "Updated" })
        expect(result.current.value).toEqual("Test String!")
    });
});

