import jsonDoesNotShowDiff from './fixtures/jsonDoesNotShowDiff.json' with {type: 'json'};

describe('webstorm snapshot truncation tests', () => {
    
    it('json snapshot truncates diff', () => {
        // ❌ 522,480 bytes
        expect(jsonDoesNotShowDiff).toMatchSnapshot();
    });
    
});
