'use client';

import { Navbar } from './components/Navbar';
import { Searchbar } from './components/Searchbar';
import { Filterbar } from './components/Filterbar';
import { Countries } from './components/Countries';

export default function Home() {
	return (
		<>
			<Navbar />
			<main className='px-4 py-6 flex flex-col gap-6'>
				<Searchbar />
				<Filterbar />
				<Countries />
			</main>
		</>
	);
}
