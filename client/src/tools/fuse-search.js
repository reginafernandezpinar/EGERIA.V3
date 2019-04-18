import Fuse from 'fuse.js';

const options = {
    keys: ['name', 'description', 'category'],
    shouldSort: true,
    threshold: 0.6,
    minMatchCharLength: 1
};

export function searchTrip(trips, text) {
    const fuse = new Fuse(trips, options);
    return fuse.search(text);
}