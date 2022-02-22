import clsx from 'clsx';
import React, { useCallback, useState } from 'react';
import Button from './Button';
import Icon from './Icon';
import Input from './Input';
import MenuItem from './MenuItem';

const mockOptions = [
  { name: 'London' },
  { name: 'Barcelona' },
  { name: 'Long Beach' },
]

export type SidemenuProps = {
  onClose?: () => void;
  onSearch: (query: string) => void;
  visible: boolean;
};

const Sidemenu: React.FC<SidemenuProps> = ({ onClose, onSearch, visible }) => {
  const [search, setSearch] = useState("");

  const handleSearch = useCallback(() => {
    onSearch && onSearch(search);
  }, [search]);

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }, []);

  return (
    <div className={clsx([
      "absolute z-20 top-0",
      "bg-paper",
      "h-full w-full",
      "sm:w-[460px]",
      "transition-transform",
      visible ? 'translate-x-0' : '-translate-x-full',
    ])}>
      <div className="flex p-3">
        <Icon className='ml-auto' name="close" onClick={onClose} />
      </div>
      <div className="p-3 mt-7 flex items-stretch">
        <Input className="flex-1" placeholder='search location' value={search} onChange={handleSearchChange} />
        <Button classes={{ root: 'ml-4' }} text="Search" onClick={handleSearch} />
      </div>
      <div className="mt-9 p-3">
        {mockOptions.map((item, index) => (
          <MenuItem className={index > 0 ? 'mt-7' : ''} key={index} text={item.name} />
        ))}
      </div>
    </div>
  )
}

export default Sidemenu;