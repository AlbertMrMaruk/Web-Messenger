import isEqual from "../utils/isEqual";
import store, { StoreEvents } from "./store";

function connect(mapStateToProps: (state: any) => any) {
  return function (Component: any) {
    return class extends Component {
      constructor(props: {}) {
        // сохраняем начальное состояние
        let state = mapStateToProps(store.getState());

        super({ ...props, ...state });
        // подписываемся на событие
        store.on(StoreEvents.Updated, () => {
          // при обновлении получаем новое состояние
          const newState = mapStateToProps(store.getState());
          console.log(newState);
          this.setProps({ ...newState });
          if (!isEqual(state, newState)) {
            this.setProps({ ...newState });
          }

          // не забываем сохранить новое состояние
          state = newState;
          return "";
        });
      }
    };
  };
}
export default connect;
