import { useBEM } from './bem';
import { useName } from './name';

export default {
  useBEM,
  useName
};

export function use(name) {
  name = 'yus-' + name;
  return [useName(name), useBEM(name)];
}
