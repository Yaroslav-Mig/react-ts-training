import React, { useState } from 'react';
import './App.css';
import { PageTitle } from './components/pageTitle/PageTitle';
import { Accordion } from './components/accordion/Accordion';
import { AccordionUncontrol } from './components/accordion/AccordionUncontrol';
import { Rating, RatingValue } from './components/rating/Rating';
import { RatingUncontrol } from './components/rating/RatingUncontrol';
import { OnOff } from './components/OnOff/OnOffControl';
import { OnOffUncontrol} from './components/OnOff/OnOffUncontrol';

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
      <RatingUncontrol/>
      <AccordionUncontrol title='Films' />
      <OnOffUncontrol onChange={setToggle} />
    </div>
  );
}

export default App;
