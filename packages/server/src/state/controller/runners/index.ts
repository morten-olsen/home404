import Runner from './Runner';
import module from './module';

const runners: {[name: string]: Runner} = {
  module,
};

export {
  Runner,
};

export default runners;