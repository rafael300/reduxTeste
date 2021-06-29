interface State {
    id: string[];
    task: string[];
}

const Type = {
    id: "reducer/id",
    task: "reducer/task"
}

const INITIAL_STATE: State = {
    id: [""],
    task: [""]
}

export function reducer(state = INITIAL_STATE, action: any) {
    switch (action.type) {
        case Type.id:
            return { ...state, id: action.payload }
        case Type.task:
            return { ...state, task: action.payload }
        default:
            return state
    }
}

export function setId(value: any[]) {
    return {
        type: Type.id,
        payload: value
    }
}

export function setTask(value: any[]) {
    return {
        type: Type.task,
        payload: value
    }
}