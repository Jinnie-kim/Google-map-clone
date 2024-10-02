import type { Place } from '../api/Place';
import { useState } from 'react';
import { search } from '../api/search';

interface LocationSearchProps {
  onPlaceCLick: (place: Place) => void;
}

export default function LocationSearch({ onPlaceClick }: LocationSearchProps) {
  const [places, setPlaces] = useState<Place[]>([]);
  const [term, setTerm] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await search(term);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="font-bold">Search</label>
        <input
          type="text"
          className="border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 px-4 py-2 w-full"
          id="term"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </form>
    </div>
  );
}
