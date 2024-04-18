# burgos-use-visible-callback
### custom hook for executing a callback when a component is visible on the viewport

### useVisibleCallback
returns a ref that can be passed to a component to trigger a callback when that component is visible on the viewport.

```ts
export interface VisibleCallbackptions {
    no_observe?: boolean ## defaults false
    root?: Element | Document ## defaults null
    threshold?: number | number[] ## defaults 0.1
}

```

```jsx
import { useVisibleCallback } from 'burgos-use-visible-callback'

export const App = () => {
    const callback = () => console.log('component entered the viewport')
    const visibleCallbackRef = useVisibleCallback(callback) 

    return <Component ref={visibleCallbackRef} />
}
```
