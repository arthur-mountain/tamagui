import type { GroupState } from '../types';
export type TamaguiComponentState = {
    unmounted: boolean | 'should-enter';
    disabled?: boolean;
    hover?: boolean;
    press?: boolean;
    pressIn?: boolean;
    focus?: boolean;
    focusVisible?: boolean;
    focusWithin?: boolean;
    animation?: null | {
        style?: any;
        avoidClasses?: boolean;
    };
    group?: Record<string, GroupState>;
    hasDynGroupChildren?: boolean;
};
//# sourceMappingURL=TamaguiComponentState.d.ts.map