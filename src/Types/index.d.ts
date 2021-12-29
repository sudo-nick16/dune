export interface todo {
    id: boolean;
    content: string;
}

export interface todos {
    name: string
    slug: string
    todos: todo[]
}

export interface TodosContext {
    setTodos: (todos: todos[] | Dispatch<SetStateAction<todos[]>>) => void;
    currentList: string;
    setCurrentList: (todos: string | Dispatch<SetStateAction<string>>) => void;
    todos: todos[];
}