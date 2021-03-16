declare module 'react-native-search-component' {
  import {  ViewStyle, TextStyle, TextInputProps } from "react-native"
  import React from 'react'

  export interface SearchComponentProps {
    placeholder?: string;
    placeholderTextColor?: string;
    onChange: TextInputProps["onChange"];
    value: string;
    onSearchClear?: () => void;
    theme?: 'LIGHT' | 'DARK';
    isLoading?: boolean;
    loadingTintColor?: string;
    cancelColor?: string;
    customSearchInputStyle?: ViewStyle;
    customCancelTextStyle?: TextStyle;
    cancelText?: string;
  }

  const SearchComponent: React.ForwardRefRenderFunction<T, SearchComponentProps>;

  export default SearchComponent;
}
