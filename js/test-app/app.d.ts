import { TodoElParams } from "./components/todo-el";
import { TodolistContainerParams } from "./components/todolist-container";
import { StaticStore } from "../src/src";
type State = {
    toloEls: StaticStore<TodoElParams, State>;
    todoListContainers: StaticStore<TodolistContainerParams, State>;
};
declare global {
    var state: State;
}
export declare const rerenderStyleBlock: (css: string) => void;
export declare const getTodoElController: Readonly<{
    getElements: (state: State) => TodoElParams[];
    getComponentData: (state: State) => Readonly<{
        host: import("mnemerender").MnemeHostFunction<TodoElParams>;
        template: import("mnemerender").MnemeTemplateFunc<TodoElParams>;
        after: import("mnemerender").MnemePostRenderGnosticFunc<TodoElParams, State>;
        css: import("mnemerender").MnemeProduceCSSFunc;
    }>;
    getName: (state: State) => string;
}>;
export declare const getTodoContainerController: Readonly<{
    getElements: (state: State) => TodolistContainerParams[];
    getComponentData: (state: State) => Readonly<{
        host: import("mnemerender").MnemeHostFunction<TodolistContainerParams>;
        template: import("mnemerender").MnemeTemplateFunc<TodolistContainerParams>;
        after: import("mnemerender").MnemePostRenderGnosticFunc<TodolistContainerParams, State>;
        css: import("mnemerender").MnemeProduceCSSFunc;
    }>;
    getName: (state: State) => string;
}>;
export declare const init: () => void;
export {};
