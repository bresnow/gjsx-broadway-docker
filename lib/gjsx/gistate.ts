export function giState(initialValue: any) {
    let useValue = initialValue
    let listenersValue = []
    let returning = useValue

    const trick = (v: any) => {
        Object.assign(returning, {
            value: v
        })

        return Object.assign(v, {
            value: v,
            getValue: listenValue
        })

    }

    const setter = (v: any) => {
        const oldValue = useValue
        useValue = trick(v)
        listenersValue.forEach(c => c(useValue, oldValue))

        return useValue
    }

    const listenValue = (listen: any) => {
        listenersValue.push(listen)
        return useValue
    }

    useValue = trick(useValue)
    returning = useValue

    return [
        returning,
        setter
    ]
}


function dispatch() {

}