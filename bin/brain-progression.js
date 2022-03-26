#!/usr/bin/env node

import startGame from '../src/index.js';
import { getMissingNumber, rule } from '../src/games/brain-progression.js';

startGame(getMissingNumber, rule);
