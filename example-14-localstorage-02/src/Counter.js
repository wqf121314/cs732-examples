import {useLocalStorage} from './useLocalStorage';
import createPersistedState from 'use-persisted-state';

const useCountState = createPersistedState('count');

export default function Counter() {

    // const [count, setCount] = useLocalStorage('counter', 0);
    const [count, setCount] = useCountState(0);
    return (
        <>
            <button onClick={() => setCount(count + 1)}>
                The current value is: {count}
            </button>
            <button onClick={() => setCount(0)}>
                empty
            </button>
        </>

    )
}