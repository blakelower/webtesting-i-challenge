const enhancer = require('./enhancer.js');
// test away!

describe ('enhance.js', () => {
    it('no errors', () => {
        expect(true).toBeTruthy();
    })
    describe ('.enhancer()', function(){
        it('return an item', function (){
            expect(enhancer({
                name: "skateboard", 
                enhancement:10,
                durability: 100
            })).toEqual({
                name: "skateboard",
                enhancement: 10,
                durability: 100 
            })
        })
    })
})