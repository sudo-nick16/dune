import { createContext } from "react";
import { TodosContext } from "../Types";

const AppContext = createContext<TodosContext | null>(null);

export default AppContext;