declare type FormLabelAlign = 'left' | 'right';
interface FormItemLabelProps {
  colon?: boolean;
  htmlFor?: string;
  label?: any;
  labelAlign?: FormLabelAlign;
  labelCol?: ColProps;
}
declare type ColSpanType = number | string;
declare type FlexType = number | 'none' | 'auto' | string;
interface ColSize {
  span?: ColSpanType;
  order?: ColSpanType;
  offset?: ColSpanType;
  push?: ColSpanType;
  pull?: ColSpanType;
}
interface ColProps {
  span?: ColSpanType;
  order?: ColSpanType;
  offset?: ColSpanType;
  push?: ColSpanType;
  pull?: ColSpanType;
  xs?: ColSpanType | ColSize;
  sm?: ColSpanType | ColSize;
  md?: ColSpanType | ColSize;
  lg?: ColSpanType | ColSize;
  xl?: ColSpanType | ColSize;
  xxl?: ColSpanType | ColSize;
  prefixCls?: string;
  flex?: FlexType;
}

export interface FormItemProps extends FormItemLabelProps {
  prefixCls?: string;
  noStyle?: boolean;
  style?: any;
  className?: string;
  children?: any;
  id?: string;
  hasFeedback?: boolean;
  validateStatus?: any;
  required?: boolean;
  hidden?: boolean;
  /** Auto passed by List render props. User should not use this. */
}