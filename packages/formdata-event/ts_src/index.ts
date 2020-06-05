/**
 * @license
 * Copyright (c) 2020 The Polymer Project Authors. All rights reserved. This
 * code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be
 * found at http://polymer.github.io/AUTHORS.txt The complete set of
 * contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt Code
 * distributed by Google as part of the polymer project is also subject to an
 * additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import {install as installEvent} from "./Wrappers/Event.js";
import {install as installFormDataEvent} from "./Wrappers/FormDataEvent.js";
import {install as installEventTarget} from "./Wrappers/EventTarget.js";

const priorFormDataEvent = window['FormDataEvent'] as any;
if (priorFormDataEvent === undefined ||
    priorFormDataEvent['forcePolyfill'] === true) {
  installEvent();
  installFormDataEvent();
  installEventTarget();
}