import jsonShowsDiff from './fixtures/jsonShowsDiff.json' with {type: 'json'};

describe('webstorm snapshot truncation tests', () => {
    
    it('json snapshot shows diff', () => {
        // ✅ 522,479 bytes
        expect(jsonShowsDiff).toMatchSnapshot();
    });
});
