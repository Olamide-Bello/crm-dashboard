import { useEffect } from 'react';

export const useOnClickOutside =(
  dropdownRef,
  triggerRef,
  action,
) => {
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        triggerRef?.current &&
        !triggerRef.current.contains(event.target)
      ) {
        action();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [dropdownRef, triggerRef, action]);
}

export const handleClickInsideDropdown = (event) => {
  event.stopPropagation();
};
