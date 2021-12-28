export interface todo {
    id: number;
    content: string;
}

export interface todos {
    name: string
    slug: string
    todos: todo[]
}

const fake = [
    {
        name: 'go to the gym',
        slug: 'go-to-the-gym',
        todos: [
            {
                id: 1,
                content: 'do some pushups'
            },
            {
                id: 2,
                content: 'do some situps'
            }
        ]
    }
]

console.log(JSON.stringify(fake))




export interface TodosContext {
    setTodos: (todos: todos[] | Dispatch<SetStateAction<todos[]>>) => void;
    currentList: string;
    setCurrentList: (todos: string | Dispatch<SetStateAction<string>>) => void;
    todos: todos[];
}