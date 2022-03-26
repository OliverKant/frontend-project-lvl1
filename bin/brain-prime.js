#!/usr/bin/env node

import startGame from '../src/index.js';
import { getQuestion, rule } from '../src/games/brain-prime.js';

startGame(getQuestion, rule);
