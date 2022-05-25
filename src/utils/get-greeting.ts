export const getGreeting = (name: string): string => {
    return name === '' ? `Hello World!` : `Hello ${name}!`;
};
