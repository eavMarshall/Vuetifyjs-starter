import { mount } from '@vue/test-utils';
import App from '@root/App.vue';

describe('App', () => {
    // Inspect the raw component options
    it('has data', () => {
        expect(typeof App.data).toBe('function')
    })
})
