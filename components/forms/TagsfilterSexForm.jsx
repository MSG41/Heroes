import { Fragment, useState } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon, FilterIcon } from '@heroicons/react/solid';

export default function TagsFilterSexForm({
  selectedSexTags,
  setSideBarFormState,
  heroSex,
}) {

  const filtersex = {
    id: 'sex-filter',
    name: 'Filter By Sex',
    options: heroSex.map((sex) => ({ value: sex, label: sex })),
  };




  const selectedSexTagsCount = selectedSexTags.length;

  const handleSelectedSexTag = (e, option) => {
    console.log(e.target.checked, option);
    if (e.target.checked) {
      setSideBarFormState((prevState) => {
        const selectedSexTags = [...prevState.selectedSexTags];
        selectedSexTags.push(option);
        return { ...prevState, selectedSexTags };
      });
    } else {
      setSideBarFormState((prevState) => {
        return {
          ...prevState,
          selectedSexTags: prevState.selectedSexTags.filter((tag) => option != tag),
        };
      });
    }
  };

  return (
    <Popover
      as='div'
      key={filtersex.name}
      id='desktop-menu'
      className='relative z-[10] inline-block text-left'

    >
      <div>
        <Popover.Button className='group inline-flex items-center justify-center text-sm font-medium text-gray-900 hover:text-gray-900'>
          <FilterIcon
            className='ml-1 mr-2 h-6 w-6 text-gray-400'
            aria-hidden='true'
          />
          <span>{filtersex.name}</span>
          {selectedSexTagsCount > 0 ? (
            <span className='ml-1.5 rounded py-0.5 px-1.5 bg-gray-200 text-xs font-semibold text-gray-700 tabular-nums'>
              {selectedSexTagsCount}
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
            {filtersex.options.map((option, optionIdx) => (
              <div key={option.value} className='flex items-center'>
                <input
                  id={`filter-${filtersex.id}-${optionIdx}`}
                  name={`${filtersex.id}[]`}
                  defaultValue={option.value}
                  type='checkbox'
                  checked={selectedSexTags.includes(option.value)}
                  onChange={(e) => handleSelectedSexTag(e, option.value)}
                  className='h-4 w-4 border-gray-300 rounded-sm text-indigo-600 focus:ring-indigo-500'
                />
                <label
                  htmlFor={`filter-${filtersex.id}-${optionIdx}`}
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
