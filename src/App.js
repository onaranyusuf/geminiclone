import Main from "./components/main/Main.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import ContextProvider from "./context/Context.jsx";

function App() {
  return (
    <div className="bg-white">
      <ContextProvider>
        <div className="flex">
          <Sidebar />
          <Main />
        </div>
      </ContextProvider>
      <div className="name-footer">
        <a href="https://github.com/onaranyusuf" target="_blank" rel="noopener noreferrer">Developed with ❤️ by YO</a>
      </div>
    </div>
  );
}

export default App;
