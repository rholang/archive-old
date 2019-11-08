export declare type StatusType = 'unvisited' | 'visited' | 'current' | 'disabled';
/** Ideally these are exported by @atlaskit/page */
export declare type Spacing = 'comfortable' | 'cosy' | 'compact';
export interface Stage {
    id: string;
    label: string;
    percentageComplete: number;
    status: StatusType;
    noLink?: boolean;
    href?: string;
    onClick?: () => void;
}
export declare type Stages = Stage[];
export interface LinkComponentProps {
    item: Stage;
}
export interface ProgressTrackerStageRenderProp {
    link: (props: LinkComponentProps) => JSX.Element;
}
