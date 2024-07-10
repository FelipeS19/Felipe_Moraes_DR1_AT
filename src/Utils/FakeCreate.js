// src/Utils/FakeCreate.js

let fakeData = [
    { id: 1, name: 'Item 1', description: 'Description 1' },
    { id: 2, name: 'Item 2', description: 'Description 2' },
    { id: 3, name: 'Item 3', description: 'Description 3' },
];

export const FakeCreate = (item) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const newItem = { id: fakeData.length + 1, ...item };
            fakeData.push(newItem);
            resolve(newItem);
        }, 1000);
    });
};
