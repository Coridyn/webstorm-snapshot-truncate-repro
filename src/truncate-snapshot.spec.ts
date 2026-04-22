import jsonDoesNotShowDiff from './fixtures/jsonDoesNotShowDiff.json' with {type: 'json'};

describe('webstorm snapshot truncation tests', () => {
    
    it('json snapshot truncates diff', () => {
        /*
        ❌ this test fails, but when Webstorm shows the diff the middle of the files get truncated
        and the diff shows "Contents are identical" (the actual difference is missing from the truncated section).
        
        Expected behavior: Test fails with snapshot difference, and Webstorm shows the difference between the files.
        Actual behaviour:  Test fails with snapshot differece, but the middle of the files is truncated and Webstorm shows "Contents are identical".
        */
        expect(jsonDoesNotShowDiff).toMatchSnapshot();
    });
    
});
