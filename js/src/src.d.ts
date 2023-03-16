import { MnemeComponentGnosticData, MnemeComponentsCollectionContoller } from "mnemerender";
/**
 * Static storage type
 */
export type StaticStore<Params, State> = {
    elements: Array<Params>;
    component: MnemeComponentGnosticData<Params, State>;
    name: string;
};
/**
 * Store initialization helper function
 */
export declare const initStor: <Params, State>(component: Readonly<{
    host: import("mnemerender").MnemeHostFunction<Params>;
    template: import("mnemerender").MnemeTemplateFunc<Params>;
    after: import("mnemerender").MnemePostRenderGnosticFunc<Params, State>;
    css: import("mnemerender").MnemeProduceCSSFunc;
}>, name: string, elements: Params[]) => StaticStore<Params, State>;
/**
 * Store initialization by non-indexed data helper function
 */
export declare const initStorFromData: <Params, State, Id extends string>(component: Readonly<{
    host: import("mnemerender").MnemeHostFunction<Params>;
    template: import("mnemerender").MnemeTemplateFunc<Params>;
    after: import("mnemerender").MnemePostRenderGnosticFunc<Params, State>;
    css: import("mnemerender").MnemeProduceCSSFunc;
}>, name: string, elements: Omit<Params, Id>[], id: Id) => StaticStore<Params, State>;
/**
 * Controller of store production function
 */
export declare const getStaticStoreController: <Params, State>(getStore: (state: State) => StaticStore<Params, State>) => Readonly<{
    getElements: (state: State) => Params[];
    getComponentData: (state: State) => Readonly<{
        host: import("mnemerender").MnemeHostFunction<Params>;
        template: import("mnemerender").MnemeTemplateFunc<Params>;
        after: import("mnemerender").MnemePostRenderGnosticFunc<Params, State>;
        css: import("mnemerender").MnemeProduceCSSFunc;
    }>;
    getName: (state: State) => string;
}>;
