import React, { useRef } from 'react';
import { Transition } from '@headlessui/react'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from "heroicons-react";
import { useClickAway } from 'react-use';

interface Props {
  text: string
}

const NavbarDropdown: React.FC<Props> = ({ text, children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef(null);
  
  useClickAway(ref, () => {
    if (isOpen) {
      setIsOpen(false);
    }
  })
  
  return (
    <div ref={ref}>
      <button type="button"
              className="group bg-white text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none border-white hover:border-primary border-b-2 pb-2"
              onClick={() => setIsOpen(!isOpen)}>
        <span>{text}</span>
        {!isOpen && <ChevronDown/>}
        {isOpen && <ChevronUp/>}
      </button>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <div className="absolute z-10 -ml-4 mt-1 transform w-screen max-w-md">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
            {children}
          </div>
        </div>
      </Transition>
    </div>
  );
}

export default NavbarDropdown;
