export default new Worker(new URL('./worker.ts', import.meta.url), { type: 'module' });
