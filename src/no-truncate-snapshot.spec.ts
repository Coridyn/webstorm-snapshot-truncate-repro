import jsonShowsDiff from './fixtures/jsonShowsDiff.json' with {type: 'json'};

describe('webstorm snapshot truncation tests', () => {
    
    it('json snapshot shows diff', () => {
        /*
        ✅ this test fails, and when Webstorm shows the diff it correctly shows 
        the contents of the two files and is able to show the difference between them.
        
        Expected behavior: Test fails with snapshot difference, and Webstorm shows the difference between the files.
        */
        expect(jsonShowsDiff).toMatchSnapshot();
    });
});
