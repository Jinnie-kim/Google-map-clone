import type { Place } from './api/Place';
import Map from './components/map';
import LocationSearch from './components/locationSearch';

function App() {
  return (
    <div className="h-screen w-screen grid grid-cols-12">
      <div className="col-span-3 p-2">
        <LocationSearch />
      </div>
      <div className="col-span-9">
        <Map />
      </div>
    </div>
  );
}

export default App;
