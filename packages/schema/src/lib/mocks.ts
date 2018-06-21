import casual from 'casual';

export const mocks = {
  String: () => 'String mock',
  Query: () => ({
    getAccount: (_, args) => ({ id: args.id, balance: 0.1 }),
    getPerson: (_, args) => ({ id: args.id, name: casual._full_name })
  }),
  Account: () => ({ id: casual.string, balance: casual.integer }),
  Person: () => ({}),
  Project: () => ({})
};
