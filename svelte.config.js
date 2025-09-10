import sveltePreprocess from 'svelte-preprocess';

export default {
  preprocess: sveltePreprocess({
    typescript: true,
    postcss: true
  })
};
