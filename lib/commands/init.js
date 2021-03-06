var Command = em.Command;

Command.create({
  name: 'init',
  usage: 'em init',
  description: 'Initialize your project structure.'
}, function (args, opts) {
  var projectGenerator = em.findGenerator('project');

  return projectGenerator.run(args, opts);
});
