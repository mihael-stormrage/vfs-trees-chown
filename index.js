import _ from 'lodash';
import {
  getChildren, getMeta, getName, isDirectory, isFile, mkdir, mkfile,
} from '@hexlet/immutable-fs-trees';

const chown = (tree, owner) => {
  const name = getName(tree);
  const meta = _.cloneDeep(getMeta(tree));
  meta.owner = owner;
  if (isFile(tree)) return mkfile(name, meta);
  if (isDirectory(tree)) {
    const children = getChildren(tree).map((node) => chown(node, owner));
    return mkdir(name, children, meta);
  }
  throw new Error('Wrong node type');
};

export default chown;
