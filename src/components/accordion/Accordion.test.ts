import { changeCollapsedAC, accordionReducer, CollapsedType } from './Accordion-reducer.ts';

test('collapsed should be true', () => {
  const state: CollapsedType = {
    collapsed: false,
  };

  const newState = accordionReducer(state, changeCollapsedAC(state.collapsed));

  expect(newState.collapsed).toBeTruthy();
});


test('collapsed should be false', () => {
  const state: CollapsedType = {
    collapsed: true,
  };

  const newState = accordionReducer(state, changeCollapsedAC(state.collapsed));

  expect(newState.collapsed).toBeFalsy();
});


test('it will throw error if action type of reducer is incorrect', () => {
  const state: CollapsedType = {
    collapsed: true,
  };
  const action = {
    type: 'CHANGE-COLLAPSE',
    collapsed: true,
  };

  const getError = () => accordionReducer(state, action);

  expect(getError).toThrowError('I don`t understand this type');
});
