import supertest from 'supertest';
import app from '../app';
import should from 'should';
const request = () => {
    return supertest(app.listen());

};

describe('请求测试 Routes', function() {
    describe('首页获取  /', function() {
        it('should return 200', function(done) {
            request()
                .get('/')
                .expect(200, done);
        });
    });

    describe('label 获取测试', () => {
        it('获取所有 getAll', done => {
            request()
                .get('/label/getAll')
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err);
                    let { text } = res;
                    let json = JSON.parse(text);
                    json.should.have.property('code', 0);
                    json.should.have.property('data');
                    json.data.forEach(item => {
                        item.should.have.property('title');
                        item.should.have.property('url');
                    });
                    done();
                });
        });

        it('根据id 获取 get/id', done => {
            request()
                .get('/label/get/1')
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err);
                    let { text } = res;
                    let json = JSON.parse(text);
                    json.should.have.property('code', 0);
                    json.should.have.property('data');
                    json.data[0].should.have.property('id', 1);
                    done();
                });
        });
    });


});