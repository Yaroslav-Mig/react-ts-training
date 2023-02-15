export type CountType = {
  count: number;
  step: number;
};

type ChangeStepCountAT = ReturnType<typeof changeStepCountAC>;
type TickCountAT = ReturnType<typeof TickCountAC>;
type ResetCountAT = ReturnType<typeof resetCountAC>;

type ActionsType = TickCountAT | ChangeStepCountAT | ResetCountAT;

const TICK_COUNT = 'TICK-COUNT';
const CHANGE_STEP_COUNT = 'STEP-COUNT';
const RESET_COUNT = 'RESET-COUNT';

export const countReducer = (state: CountType, action: ActionsType): CountType => {
  const { count, step } = state;

  switch (action.type) {
    case TICK_COUNT:
      return {
        count: count + step,
        step,
			};

		case CHANGE_STEP_COUNT:
      return {
        count,
        step: action.step,
			};

		case RESET_COUNT:
			return {
				count: action.count,
				step: action.step,
			};

    default:
      throw new Error('Invalid action type');
  }
};

export const TickCountAC = () => ({
	type: TICK_COUNT,
} as const)

export const changeStepCountAC = (step: number) => ({
  type: CHANGE_STEP_COUNT,
  step,
} as const);

export const resetCountAC = (init: CountType) => {
	const { count, step } = init;
	return {
		type: RESET_COUNT,
		count,
		step
  } as const;
}


