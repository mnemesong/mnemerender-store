import { MnemeComponent } from "mnemerender";
export type TodolistContainerParams = {
    id: string;
    isDone: boolean;
};
export type TodoListContainerActions = {
    renderContent: (id: string) => void;
};
export declare const todoListContanerComponent: MnemeComponent<TodolistContainerParams, TodoListContainerActions>;
