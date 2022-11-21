import EventBus from "../utils/event-bus";
import set from "../utils/set";

export enum StoreEvents {
  Updated = "updated",
  Deleted = "deleted",
}

type StoreT = {
  [key: string]: any;
};

class Store extends EventBus {
  private state: StoreT = {};

  public getState() {
    return this.state;
  }

  public set(path: string, value: unknown) {
    set(this.state, path, value);
    this.emit(StoreEvents.Updated);
  }

  public delete(path: string, name: string) {
    console.log(path, name);
    set(this.state, path, null);
    this.emit(StoreEvents.Deleted, name);
  }
}

const store = new Store();

export default store;
