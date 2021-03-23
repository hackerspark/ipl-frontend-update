import { get } from 'svelte/store';

import { wrap } from 'svelte-spa-router/wrap';

import Home from './routes/Home.svelte';
import Room from './routes/Room.svelte';
import ControlPanel from './routes/ControlPanel.svelte';
import Teams from './routes/Teams.svelte';
import Overview from './routes/Overview.svelte';
import BidControls from './routes/BidControls.svelte';
import Test from './routes/Test.svelte';
import NotFound from './routes/NotFound.svelte';

import { userStore } from './stores/user';
import { bidStore } from './stores/bid';

const validateUserType = (expectedType) => get(userStore).type === expectedType;

const isBidRunning = () => get(bidStore);

export default {
  '/': Home,

  '/room': wrap({
    component: Room,
    conditions: [() => validateUserType('USER'), () => !isBidRunning()],
  }),

  '/controlPanel': wrap({
    component: ControlPanel,
    conditions: [() => validateUserType('ADMIN'), () => !isBidRunning()],
  }),

  '/teams': wrap({
    component: Teams,
    conditions: [() => validateUserType('ADMIN'), () => !isBidRunning()],
  }),

  '/overview': wrap({
    component: Overview,
    conditions: [() => validateUserType('USER')],
  }),

  // '/bidControls': wrap({
  //   component: BidControls,
  //   conditions: [() => validateUserType('ADMIN'), isBidRunning],
  // }),
  '/bidControls': BidControls,

  '/test': Test,

  '*': NotFound,
};
