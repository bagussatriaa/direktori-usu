"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

type DropdownProps = {
  placeholder: string;
  options: string[];
  value: string;
  onSelect: (value: string) => void;
  error?: string;
};

export default function Dropdown({
  placeholder,
  options,
  value,
  onSelect,
  error,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative w-60">

    <button
    type="button"
    onClick={() => setIsOpen(!isOpen)}
    className={`
    flex
        items-center
        justify-between
        w-full
        rounded-full
        bg-white
        px-5
        py-3
        text-left
        shadow-md
        border
        ${
        error
            ? "border-red-500"
            : "border-transparent"
        }
    `}
    >
        
    <span
        className={
            value
            ? "text-gray-900"
            : "text-gray-500"
        }
    >{value || placeholder}
        
    </span>

    <ChevronDown 
        size={18}
        className="
        cursor-pointer
        text-gray-500" 
    />
    </button>

      {isOpen && (
        <div
          className="
            absolute
            mt-2
            w-full
            max-h-60
            overflow-y-auto
            rounded-2xl
            bg-white
            shadow-lg
            z-50
          "
        >
          {options.map((option) => (
            <div
              key={option}
               onClick={() => {
                onSelect(option);
                setIsOpen(false);
                }}
              className="
                cursor-pointer
                px-4
                py-3
                text-gray-900
                hover:bg-gray-200
              "
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}