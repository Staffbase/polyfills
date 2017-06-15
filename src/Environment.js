import {default as Document, Proxy as DocumentProxy} from './Environment/Document.js';
import {default as Element, Proxy as ElementProxy} from './Environment/Element.js';

export {
  Document, DocumentProxy,
  Element, ElementProxy,
};

const getDescriptor = (o, p) => Object.getOwnPropertyDescriptor(o, p);

const envHTMLElement = window['HTMLElement'];
const envHTMLElement_proto = envHTMLElement['prototype'];
export const HTMLElement = {
  self: envHTMLElement,
  proto: envHTMLElement_proto,

  innerHTML: getDescriptor(envHTMLElement_proto, 'innerHTML'),
  insertAdjacentElement: getDescriptor(envHTMLElement_proto, 'insertAdjacentElement'),
};

export const HTMLTemplateElement = {};
const envHTMLTemplateElement = window['HTMLTemplateElement'];
if (envHTMLTemplateElement) {
  const envHTMLTemplateElement_proto = envHTMLTemplateElement['prototype'];
  HTMLTemplateElement.self = envHTMLTemplateElement;
  HTMLTemplateElement.proto = envHTMLTemplateElement_proto;
  HTMLTemplateElement.content = getDescriptor(envHTMLTemplateElement_proto, 'content');
}

const envMutationObserver = window['MutationObserver'];
const envMutationObserver_proto = envMutationObserver['prototype'];
export const MutationObserver = {
  self: envMutationObserver,
  proto: envMutationObserver_proto,

  disconnect: getDescriptor(envMutationObserver_proto, 'disconnect'),
  observe: getDescriptor(envMutationObserver_proto, 'observe'),
};

const envMutationRecord = window['MutationRecord'];
const envMutationRecord_proto = envMutationRecord['prototype'];
export const MutationRecord = {
  self: envMutationRecord,
  proto: envMutationRecord_proto,

  addedNodes: getDescriptor(envMutationRecord_proto, 'addedNodes'),
};

const envNode = window['Node'];
const envNode_proto = envNode['prototype'];
export const Node = {
  self: envNode,
  proto: envNode_proto,

  addEventListener: getDescriptor(envNode_proto, 'addEventListener'),
  appendChild: getDescriptor(envNode_proto, 'appendChild'),
  childNodes: getDescriptor(envNode_proto, 'childNodes'),
  cloneNode: getDescriptor(envNode_proto, 'cloneNode'),
  firstChild: getDescriptor(envNode_proto, 'firstChild'),
  insertBefore: getDescriptor(envNode_proto, 'insertBefore'),
  isConnected: getDescriptor(envNode_proto, 'isConnected'),
  nextSibling: getDescriptor(envNode_proto, 'nextSibling'),
  nodeType: getDescriptor(envNode_proto, 'nodeType'),
  parentNode: getDescriptor(envNode_proto, 'parentNode'),
  removeChild: getDescriptor(envNode_proto, 'removeChild'),
  replaceChild: getDescriptor(envNode_proto, 'replaceChild'),
  textContent: getDescriptor(envNode_proto, 'textContent'),
};