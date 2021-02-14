export interface ICCartButtonProps {
  type: string;
  onCartButtonClick: () => void;
  progress: number;
  title: string;
}

export interface ICNavbarLink {
  links: {
    to: string;
    exact: boolean;
    title: string;
  }[];
}

export interface ICSlider {
  root: string;
  title: string;
  price: number;
  unit: string;
  changeSliderValue: (event: any, newValue: number | number[]) => void;
  sliderChangeCommitted: () => void;
  value: number | number[];
  step: number;
  marks: {
    value: number;
    label: number;
  }[];
  min: number;
  max: number;
  inputRefSelect: React.MutableRefObject<HTMLInputElement>;
  changeInputValue: ({
    target: { value: sliderValue },
  }: React.ChangeEvent<HTMLInputElement>) => void;
  focusInput: () => void;
}
