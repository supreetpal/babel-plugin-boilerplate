export default function ({types: t}) {
  return {
    visitor: {
      Identifier(path) {
        // write your plugin code here!
        path.node.name = path.node.name.split('').reverse().join('');
      }
    }
  };
}