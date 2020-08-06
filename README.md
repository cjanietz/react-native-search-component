<div align='center'>

  <h1>React Native Search Component</h1>
  
  <img width="auto" height="350" src="./example/RNSearch/assets/ioslight.gif">

  <img width="auto" height="350" src="./example/RNSearch/assets/iosdark.gif">

  <img width="auto" height="350" src="./example/RNSearch/assets/android.gif">
  
</div>


## :anchor: Installation

```sh

yarn add react-native-search-component
# or
npm i react-native-search-component

```

## :family: Dependencies

##### React Native Reanimated

```sh
npm install react-native-reanimated
```

For iOS 

```sh

cd ios && pod install && cd ..

```

For Android

1. Turn on Hermes engine by editing android/app/build.gradle

```code

project.ext.react = [
  enableHermes: true  // <- here | clean and rebuild if changing
]

```
2. Plug Reanimated in MainApplication.java

```code
  import com.facebook.react.bridge.JSIModulePackage; // <- add
  import com.swmansion.reanimated.ReanimatedJSIModulePackage; // <- add
  ...
  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
  ...

      @Override
      protected String getJSMainModuleName() {
        return "index";
      }

      @Override
      protected JSIModulePackage getJSIModulePackage() {
        return new ReanimatedJSIModulePackage(); // <- add
      }
    };
  ...
```
> For detailed instructions check it out [here](https://docs.swmansion.com/react-native-reanimated/docs/next/installation)

##### React Native SVG

```sh

npm install react-native-svg

```

For iOS

```sh
cd ios && pod install && cd ..
```

> For detailed instructions check it out [here](https://github.com/react-native-community/react-native-svg)

> Rebuild the project after adding the dependencies

## :mag: Usage

```js
import React, { useState } from 'react';
import {
  SafeAreaView, StyleSheet,
  Text, TouchableOpacity
} from 'react-native';
import SearchComponent from 'react-native-search-component';

const App = () => {
  const [theme, setTheme] = React.useState('LIGHT');
  const [searchTerm, setSearchTerm] = useState('');

  const toggleTheme = () => theme === 'LIGHT' ? setTheme('DARK') : setTheme('LIGHT');
  const themeBasedContainer = [styles.container, { backgroundColor: theme === 'LIGHT' ? 'white' : 'black' }];
  const themeBasedTextStyle = [styles.textStyle, { color: theme === 'LIGHT' ? 'black' : 'white' }];

  const onChange = (e) => {
    setSearchTerm(e?.nativeEvent?.text)
  }
  const onSearchClear = () => setSearchTerm('');

  return (
    <SafeAreaView style={themeBasedContainer}>
      <Text style={themeBasedTextStyle}>React Native Search Component</Text>
      <TouchableOpacity style={{ paddingVertical: 12 }} onPress={toggleTheme}>
        <Text style={[styles.textStyle, { color: '#007AFF', fontSize: 18 }]}>Toggle Theme</Text>
      </TouchableOpacity>
      <SearchComponent value={searchTerm} theme={theme} onChange={onChange} onSearchClear={onSearchClear} />
      <Text style={[themeBasedTextStyle, { textAlign: 'left', paddingLeft: 16, fontSize: 18 }]}> Search Term : {searchTerm}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  textStyle: {
    fontSize: 24,
    textAlign: 'center',
    paddingVertical: 10
  }
})

export default App;

```

## :camera: Screenshot

### iOS

<img  width="auto" height="350" src="./example/RNSearch/assets/screenshotlight.png">

<img  width="auto" height="350" src="./example/RNSearch/assets/screenshotdark.png">

### Android

<img  width="auto" height="350" src="./example/RNSearch/assets/androidlight.jpg">

<img  width="auto" height="350" src="./example/RNSearch/assets/androiddark.jpg">


## :wrench: Props

|   Name                           | Description                                      | Required    | Type                 | Default              | 
| ---------------------------------| -------------------------------------------------| ----------- | -------------------- | -------------------- |
| value                            | A search term Value                              | Yes         | String               | ''                   |
| placeholder                      | A placeholder value                              | No          | String               | ''                   |
| placeholderTextColor             | Tintcolor for Placeholder                        | No          | Color                | Based on theme       |
| onChange                         | A Callback function returning TextInput onChange | Yes         | Function             | () => {}             |
| onSearchClear                    | A Callback function on Close Icon click          | No          | Function             | () => {}             |


## :tada: Example

Checkout the example [here](https://github.com/timelessco/react-native-search-component/tree/master/example/RNSearch).

## :notebook: Blog

Have a look at my blog [here]().

## :snowman: Built with ❤️ and

- [react-native](https://www.npmjs.com/package/react-native)
- [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/)
- [react-native-svg](https://github.com/react-native-community/react-native-svg)


## :v: Contributing
Pull requests are always welcome! Feel free to open a new GitHub issue for any changes that can be made.


## :man: Author

[Karthik B](https://twitter.com/_iam_karthik) 


## :clipboard: License

MIT
