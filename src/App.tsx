import React, { useState } from 'react';
import './App.css';
import { PageTitle } from './components/pageTitle/PageTitle';
import { Accordion } from './components/accordion/Accordion';
import { AccordionUncontrolled } from './components/accordion/AccordionUncontrolled';
import { Rating, RatingValue } from './components/rating/Rating';
import { RatingUncontrolled } from './components/rating/RatingUncontrolled';
import { OnOff } from './components/OnOff/OnOffControl';
import { OnOffUncontrolled } from './components/OnOff/OnOffUncontrolled';
import { Select, SelectHover } from './components/select/Select';

function App() {
  const [ratingValue, setRatingValue] = useState<RatingValue>(0);
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [toggle, setToggle] = useState(false);
  const menuList = [
    { id: '1', name: 'French fries' },
    { id: '2', name: 'Vegetable salad' },
    { id: '3', name: 'Soup' },
    { id: '4', name: 'Pork chop' },
    { id: '5', name: 'Roast chicken' },
  ];
  const filmList = [
    { id: '1', name: 'Harry Potter' },
    { id: '2', name: 'Green mile' },
    { id: '3', name: 'Snatch' },
    { id: '4', name: 'Shot caller' },
    { id: '5', name: 'Fargo' },
  ];
  const petsList = [
    { id: '1', name: 'Dog' },
    { id: '2', name: 'Cat' },
    { id: '3', name: 'Fish' },
    { id: '4', name: 'Parrot' },
    { id: '5', name: 'Rodent' },
  ];

  return (
    <div className='app'>
      <PageTitle title='This is APP component' />
      <Rating value={ratingValue} onClick={setRatingValue} />
      <OnOff status={toggle} setStatus={setToggle} />
      <Accordion title='Menu' items={menuList} collapsed={collapsed} setCollapsed={setCollapsed} />
      <RatingUncontrolled />
      <AccordionUncontrolled title='Films' items={filmList} />
      <OnOffUncontrolled />
			<Select items={petsList} />
			<SelectHover items={petsList}/>
    </div>
  );
}

export default App;
