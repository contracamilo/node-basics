
const buildMessage = (entity, action) =>
  action === 'list' ? `${entity}s ${action}ed` : `${entity} ${action}d`;

module.exports = buildMessage;