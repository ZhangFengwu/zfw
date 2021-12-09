import  { Hello } from "../index"

test('My Hello', () => {
    expect(Hello('Fred')).toBe('Hello Fred');
});