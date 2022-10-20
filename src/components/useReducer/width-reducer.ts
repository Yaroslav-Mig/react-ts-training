type increaseWidthAT = ReturnType<typeof increaseWidthAC>;
type resetWidthAT = ReturnType<typeof resetWidthAC>;
type ActionsType = increaseWidthAT | resetWidthAT;

export const setInitWidth = (initVal: number): number => initVal;

export const widthReducer = (state: number, action: ActionsType): number => {
	switch (action.type) {
    case 'INCREASE-WIDTH':
			return state + 10;

		case 'RESET-WIDTH':
			return setInitWidth(action.initValue);

    default:
      throw new Error('I don`t understand this type');
  }
};

export const increaseWidthAC = () => ({
  type: 'INCREASE-WIDTH',
} as const);

export const resetWidthAC = (initValue: number) => ({
	type: 'RESET-WIDTH',
	initValue
} as const);