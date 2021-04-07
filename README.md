# vfs-trees-chown
Recursively changes owner of given tree for [@hexlet/immutable-fs-trees](https://github.com/hexlet-components/js-immutable-fs-trees).

## Install
```sh
yarn add mihael-stormrage/vfs-trees-chown
```

## Usage example
```js
import { mkfile, mkdir } from '@hexlet/immutable-fs-trees';
import chown from 'vfs-trees-chown';

const tree = mkdir('etc', [
  mkfile('hosts', { owner: 'sys' }),
], { owner: 'root' });

chown(tree, 'dev');
// {
//   name: 'etc',
//   children: [
//     { name: 'hosts', meta: { owner: 'dev' }, type: 'file' }
//   ],
//   meta: { owner: 'dev' },
//   type: 'directory',
// }
```
