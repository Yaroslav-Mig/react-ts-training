import React, { useState } from 'react';
import './App.css';
import { PageTitle } from './components/pageTitle/PageTitle';
import { Accordion } from './components/accordion/Accordion';
import { AccordionUncontrolled } from './components/accordion/AccordionUncontrolled';
import { Rating, RatingValue } from './components/rating/Rating';
import { RatingUncontrolled } from './components/rating/RatingUncontrolled';
import { OnOff } from './components/OnOff/OnOffControl';
import { OnOffUncontrolled } from './components/OnOff/OnOffUncontrolled';

function App() {
  const [ratingValue, setRatingValue] = useState<RatingValue>(0);
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [toggle, setToggle] = useState(false);

  return (
    <div className='app'>
      <PageTitle title='This is APP component' />
      <Rating value={ratingValue} onClick={setRatingValue} />
      <OnOff status={toggle} setStatus={setToggle} />
      <Accordion title='Menu' collapsed={collapsed} setCollapsed={setCollapsed} />
      <RatingUncontrolled />
      <AccordionUncontrolled title='Films' />
      <OnOffUncontrolled />
    </div>
  );
}

export default App;
