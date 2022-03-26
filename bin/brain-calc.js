#!/usr/bin/env node

import startGame from '../src/index.js';
import { getResultExpression, rule } from '../src/games/brain-calc.js';

startGame(getResultExpression, rule);
