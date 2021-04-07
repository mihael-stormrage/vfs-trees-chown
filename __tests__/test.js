import { mkdir, mkfile } from '@hexlet/immutable-fs-trees';
import chown from '..';

test('chown [file]', () => {
  const file = mkfile('file', { owner: '1' });
  expect(chown(file, '2'))
    .toEqual(mkfile('file', { owner: '2' }));
});

test('chown [dir]', () => {
  const tree = mkdir('/', [
    mkdir('etc', [
      mkdir('nginx', [], { owner: '3' }),
      mkdir('consul', [
        mkfile('config.json', { owner: '3' }),
      ], { owner: '1' }),
    ], { owner: '1' }),
    mkfile('hosts', { owner: '1' }),
  ], { owner: '1' });

  expect(chown(tree, '2')).toEqual(
    mkdir('/', [
      mkdir('etc', [
        mkdir('nginx', [], { owner: '2' }),
        mkdir('consul', [
          mkfile('config.json', { owner: '2' }),
        ], { owner: '2' }),
      ], { owner: '2' }),
      mkfile('hosts', { owner: '2' }),
    ], { owner: '2' }),
  );
});
