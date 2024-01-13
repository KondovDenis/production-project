import { StoreProvider } from "./ui/StoreProvider";
import { createReduxStore } from "./config/store";
import type { StateSchema, ReduxStoreWithManager } from "./config/StateSchema";
import { AppDispatch } from "./config/store";
import { ThunkConfig } from "./config/StateSchema";

export {StoreProvider, createReduxStore, StateSchema,AppDispatch, ThunkConfig}
