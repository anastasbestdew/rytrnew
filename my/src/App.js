import Head from "./Header";
import Left from "./Left";
import Right from "./Right";

function App() {
  return (
    <div className="w-full">
      <div className="bg-orange-900 px-2 py-4">
        <Head/>
      </div>
      <div class="flex mt-4">
        <div className="w-1/5">
          <Left/>
        </div>
        <div className="w-4/5">
          <Right/>
        </div>
      </div>
    </div>
    
  );
}

export default App;
