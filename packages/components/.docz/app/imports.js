export const imports = {
  'src/lib/molecules/AccountItem.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-lib-molecules-account-item" */ 'src/lib/molecules/AccountItem.mdx'),
}
