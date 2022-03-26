#!/usr/bin/env node
import startGame from '../src/index.js';
import { parityCheck, rule } from '../src/games/brain-even.js';

startGame(parityCheck, rule);
