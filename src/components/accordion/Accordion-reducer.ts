export type CollapsedType = {
  collapsed: boolean;
};
type changeCollapsedAT = ReturnType<typeof changeCollapsedAC>;

export const accordionReducer = (state: CollapsedType, action: changeCollapsedAT): CollapsedType => {
  switch (action.type) {
    case 'CHANGE-COLLAPSED': {
      return { ...state, collapsed: !action.collapsed };
    }
    default:
      throw new Error('I don`t understand this type');
  }
};

export const changeCollapsedAC = (collapsed: boolean) => ({
  type: 'CHANGE-COLLAPSED',
  collapsed,
} as const);
