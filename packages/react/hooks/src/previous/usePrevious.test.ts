import { renderHook, act } from '@testing-library/react-hooks';

import { usePrevious } from './usePrevious';

describe('usePrevious', () => {
  it('should be exported', () => {
    expect(usePrevious).toBeDefined();
  });

  it('should be return the first value', () => {
    const value = { foo: 'bar' };
    const { result } = renderHook(() => usePrevious(value));

    expect(result.current).toEqual(value);
  });

  it('should be return the changing value', () => {
    const value = { foo: 'bar' };
    const newValue = { foo: 'baz' };
    const { result } = renderHook(() => usePrevious(value));

    expect(result.current).toEqual(value);

    act(() => {
      value.foo = newValue.foo;
    });
    expect(result.current).toEqual(newValue);
  });
});
