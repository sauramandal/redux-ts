import { Provider } from "react-redux";
import RepositoriesList from "./components/RepositoriesList";
import { store } from "./state";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <RepositoriesList />
      </div>
    </Provider>
  );
}

export default App;
