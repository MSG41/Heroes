import { Fragment, useState } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon, FilterIcon } from '@heroicons/react/solid';

export default function TagsFilterHairForm({
  selectedHairTags,
  setSideBarFormState,
  heroHair,
}) {

  const filterhair = {
    id: 'hair-filter',
    name: 'Filter By Hair',
    options: heroHair.map((hair) => ({ value: hair, label: hair })),
  };




  const selectedHairTagsCount = selectedHairTags.length;

  const handleSelectedHairTag = (e, option) => {
    console.log(e.target.checked, option);
    if (e.target.checked) {
      setSideBarFormState((prevState) => {
        const selectedHairTags = [...prevState.selectedHairTags];
        selectedHairTags.push(option);
        return { ...prevState, selectedHairTags };
      });
    } else {
      setSideBarFormState((prevState) => {
        return {
          ...prevState,
          selectedHairTags: prevState.selectedHairTags.filter((tag) => option != tag),
        };
      });
    }
  };

  return (
    <Popover
      as='div'
      key={filterhair.name}
      id='desktop-menu'
      className='relative z-[14] inline-block text-left'

    >
      <div>
        <Popover.Button className='group inline-flex items-center justify-center text-sm font-medium text-gray-900 hover:text-gray-900'>
          <FilterIcon
            className='ml-1 mr-2 h-6 w-6 text-gray-400'
            aria-hidden='true'
          />
          <span>{filterhair.name}</span>
          {selectedHairTagsCount > 0 ? (
            <span className='ml-1.5 rounded py-0.5 px-1.5 bg-gray-200 text-xs font-semibold text-gray-700 tabular-nums'>
              {selectedHairTagsCount}
            </span>
          ) : null}
          <ChevronDownIcon
            className='flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500'
            aria-hidden='true'
          />
        </Popover.Button>
      </div>

      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Popover.Panel className='origin-top-right left-2 absolute mt-2 bg-indigo-100 rounded-sm shadow-2xl p-4 ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <form className='space-y-4'>
            {filterhair.options.map((option, optionIdx) => (
              <div key={option.value} className='flex items-center'>
                <input
                  id={`filter-${filterhair.id}-${optionIdx}`}
                  name={`${filterhair.id}[]`}
                  defaultValue={option.value}
                  type='checkbox'
                  checked={selectedHairTags.includes(option.value)}
                  onChange={(e) => handleSelectedHairTag(e, option.value)}
                  className='h-4 w-4 border-gray-300 rounded-sm text-indigo-600 focus:ring-indigo-500'
                />
                <label
                  htmlFor={`filter-${filterhair.id}-${optionIdx}`}
                  className='ml-3 pr-6 text-sm font-sm text-gray-700 whitespace-nowrap'
                >
                  {option.label}
                </label>
              </div>
            ))}
          </form>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
