import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const regions = [
	{ name: 'Filter by region' },
	{ name: 'Africa' },
	{ name: 'America' },
	{ name: 'Asia' },
	{ name: 'Europe' },
	{ name: 'Oceania' },
];

export const Filterbar = () => {
	const [selected, setSelected] = useState(regions[0]);

	return (
		<Listbox value={selected} onChange={setSelected}>
			<div className='relative mt-1'>
				<Listbox.Button className='relative w-full cursor-default bg-main-black border border-border-black py-3 pl-4 text-left outline-none text-sm'>
					<span className='block truncate'>{selected.name}</span>
					<span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4'>
						<ChevronDownIcon className='h-5 w-5' aria-hidden='true' />
					</span>
				</Listbox.Button>
				<Transition
					as={Fragment}
					leave='transition ease-in duration-100'
					leaveFrom='opacity-100'
					leaveTo='opacity-0'
				>
					<Listbox.Options className='absolute mt-1 max-h-60 w-full overflow-auto bg-main-black border border-border-black py-1 focus-visible:outline-none text-sm'>
						{regions.map((person, personIdx) => (
							<Listbox.Option
								key={personIdx}
								className={({ active }) =>
									`relative cursor-default select-none py-3 pl-4 ${
										active ? 'bg-main-black' : ''
									}`
								}
								value={person}
							>
								{({ selected }) => (
									<>
										<span
											className={`block truncate ${
												selected ? 'font-medium' : 'font-normal'
											}`}
										>
											{person.name}
										</span>
									</>
								)}
							</Listbox.Option>
						))}
					</Listbox.Options>
				</Transition>
			</div>
		</Listbox>
	);
};
