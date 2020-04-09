import Reactotron from 'reactotron-react-native';


  const tron = Reactotron.configure({host:'177.76.156.219'})
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear();

