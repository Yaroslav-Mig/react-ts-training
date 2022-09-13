import React, { useMemo, useState } from 'react';

export default {
  title: 'Select',
};

type SelectItemsProps = {
  items: Array<CityType>;
};
type CityType = {
  id: string;
  country: string;
  population: number;
  name: string;
};

export const SelectUseMemo = () => {
  const [cityList, setCityList] = useState<Array<CityType>>([
    { id: '1', country: 'BLR', population: 2000000, name: 'Minsk' },
    { id: '2', country: 'POL', population: 1800000, name: 'Warsaw' },
    { id: '3', country: 'UA', population: 3000000, name: 'Kiev' },
    { id: '4', country: 'BLR', population: 350000, name: 'Brest' },
    { id: '5', country: 'UA', population: 1000000, name: 'Odessa' },
    { id: '6', country: 'BLR', population: 370000, name: 'Grodno' },
    { id: '7', country: 'POL', population: 800000, name: 'Krakow' },
    { id: '8', country: 'UA', population: 270000, name: 'Chernigov' },
    { id: '9', country: 'POL', population: 650000, name: 'Wrocław' },
  ]);
  const [count, setCount] = useState<number>(0);
  console.log('SelectUseMemo');
  const addCounterHandler = () => setCount(count + 1);

  const getByCountry = useMemo(() => {
    return cityList.filter((item) => item.country === 'POL');
  }, [cityList]);

  const getByLetter = useMemo(() => {
    return cityList.filter((item) => item.name.toLowerCase().includes('k'));
	}, [cityList]);

  const getByPopulation = useMemo(() => {
    return cityList.filter((item) => item.population <= 1000000);
  }, [cityList]);

  return (
    <>
      <SelectItems items={getByCountry} />
      <SelectItems items={getByLetter} />
      <SelectItems items={getByPopulation} />
      <div>
        <p>{count}</p>
        <button onClick={addCounterHandler}>+</button>
      </div>
    </>
  );
};

const SelectItems = React.memo((props: SelectItemsProps) => {
  const { items } = props;
  console.log('SelectItems');

  const itemsList = items.map((el) => {
    return <option value={el.id}>{el.name}</option>;
  });

  return (
    <select name='city' autoComplete='on'>
      {itemsList}
    </select>
  );
});
