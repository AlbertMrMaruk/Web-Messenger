import isEqual from "../utils/isEqual";
import store, { StoreEvents } from "./store";

function connect(mapStateToProps: (state: any) => any) {
  return function (Component: any) {
    return class extends Component {
      constructor(props: {}) {
        let state = mapStateToProps(store.getState());
        super({ ...props, ...state });
        store.on(StoreEvents.Updated, () => {
          const newState = mapStateToProps(store.getState());
          this.setProps({ ...newState });
          if (!isEqual(state, newState)) {
            this.setProps({ ...newState });
          }
          state = newState;
          return "";
        });
      }
    };
  };
}
export default connect;
