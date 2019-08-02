export function rehydrate<T>(key: string, state: T, obj: Partial<T>, storage: 'session' | 'local' = 'session'): T {
    const newState = Object.assign({}, state, obj);

    switch (storage) {
        case 'local': {
            localStorage.setItem(key, JSON.stringify(newState));
            break;
        }
        case 'session':
        default:
            sessionStorage.setItem(key, JSON.stringify(newState));
            break;
    }

    return newState;
}
