#!/usr/bin/env node

import startGame from '../src/index.js';
import { getMaximumDivisor, rule } from '../src/games/brain-gcd.js';

startGame(getMaximumDivisor, rule);
