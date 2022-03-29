const chai = require('chai');
const chaiHttp = require('chai-http');
const { iterator } = require('core-js/fn/symbol');
chai.use(chaiHttp);

const expect = chai.expect;

describe('Testing posting comments', function(){
    this.timeout(100000);
    it('Tests if the db can save comments successfully', async() => {
        const result = await (await chai.request('https://us-central1-scan-scan-price.cloudfunctions.net').post('/postAddress')).setEncoding('content-type', 'application/json').setEncoding({data: {address: 'https'}});
        expect(result.statusCode).to.equal(200);
    })
})
